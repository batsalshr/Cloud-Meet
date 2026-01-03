const prerender = false;
const ssr = true;
const load = async ({ fetch }) => {
  return {
    timestamp: Date.now()
  };
};
export {
  load,
  prerender,
  ssr
};
