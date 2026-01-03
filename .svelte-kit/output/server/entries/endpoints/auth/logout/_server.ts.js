import { redirect } from "@sveltejs/kit";
const POST = async ({ cookies }) => {
  cookies.delete("session", { path: "/" });
  throw redirect(302, "/");
};
export {
  POST
};
