import { redirect } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../../chunks/auth.js";
const POST = async (event) => {
  const env = event.platform?.env;
  if (!env) {
    throw redirect(302, "/dashboard?error=server_error");
  }
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  const db = env.DB;
  await db.prepare("UPDATE users SET outlook_refresh_token = NULL WHERE id = ?").bind(userId).run();
  throw redirect(302, "/dashboard?success=outlook_disconnected");
};
export {
  POST
};
