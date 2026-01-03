import { redirect } from "@sveltejs/kit";
import { getCurrentUser } from "../../../../chunks/auth.js";
const load = async (event) => {
  const userId = await getCurrentUser(event);
  if (!userId) {
    throw redirect(302, "/auth/login");
  }
  return {};
};
export {
  load
};
