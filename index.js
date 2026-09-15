export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(url.pathname + url.search, "https://website.cssbulsu.workers.dev");

    const proxied = new Request(target, request);
    proxied.headers.set("Host", "website.cssbulsu.workers.dev");

    return fetch(proxied);
  },
};
