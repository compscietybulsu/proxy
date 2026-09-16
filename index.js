export default {
  /**
   * @param {Request} request
   * @param {{ TARGET_URL?: string, UPSTREAM_URL?: string }} env
   */
  async fetch(request, env) {
    const rawTarget = env.TARGET_URL || env.UPSTREAM_URL || "https://website.cssbulsu.workers.dev";
    const targetBase = new URL(rawTarget);
    const url = new URL(request.url);

    const target = new URL(url.pathname + url.search, targetBase);

    const proxied = new Request(target, request);
    proxied.headers.set("Host", targetBase.host);

    return fetch(proxied);
  },
};
