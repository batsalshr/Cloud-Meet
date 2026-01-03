import { redirect, fail } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../chunks/auth.js";
const load = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const db = event.platform?.env?.DB;
  if (!db) {
    throw new Error("Database not available");
  }
  const rules = await db.prepare(
    `SELECT id, day_of_week, start_time, end_time
			FROM availability_rules
			WHERE user_id = ?
			ORDER BY day_of_week, start_time`
  ).bind(userId).all();
  const user = await db.prepare("SELECT timezone FROM users WHERE id = ?").bind(userId).first();
  return {
    rules: rules.results,
    timezone: user?.timezone || "UTC"
  };
};
const actions = {
  save: async (event) => {
    const userId = await getCurrentUser(event);
    if (!userId) {
      throw redirect(302, "/auth/login");
    }
    const db = event.platform?.env?.DB;
    if (!db) {
      return fail(500, { error: "Database not available" });
    }
    const formData = await event.request.formData();
    const rulesJson = formData.get("rules");
    const timezone = formData.get("timezone");
    if (!rulesJson || typeof rulesJson !== "string") {
      return fail(400, { error: "Invalid rules data" });
    }
    try {
      const rules = JSON.parse(rulesJson);
      if (timezone && typeof timezone === "string") {
        await db.prepare("UPDATE users SET timezone = ? WHERE id = ?").bind(timezone, userId).run();
      }
      await db.prepare("DELETE FROM availability_rules WHERE user_id = ?").bind(userId).run();
      for (const rule of rules) {
        if (!rule.enabled) continue;
        await db.prepare(
          `INSERT INTO availability_rules (user_id, day_of_week, start_time, end_time)
						VALUES (?, ?, ?, ?)`
        ).bind(userId, rule.day, rule.startTime, rule.endTime).run();
      }
      return { success: true };
    } catch (error) {
      console.error("Error saving availability:", error);
      return fail(500, { error: "Failed to save availability rules" });
    }
  }
};
export {
  actions,
  load
};
