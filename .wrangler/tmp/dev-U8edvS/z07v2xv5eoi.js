var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-Ye7rNY/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init2) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init2) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init2] = argArray;
    checkURL(request, init2);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-txRYVd/bundledWorker-0.22424779458887123.mjs
import { env } from "cloudflare:workers";
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var __esm = /* @__PURE__ */ __name((fn, res) => /* @__PURE__ */ __name(function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
}, "__init"), "__esm");
var __commonJS = /* @__PURE__ */ __name((cb, mod) => /* @__PURE__ */ __name(function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, "__require"), "__commonJS");
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp2(to, key2, { get: /* @__PURE__ */ __name(() => from[key2], "get"), enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
}, "__copyProps");
var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
)), "__toESM");
function checkURL2(request, init2) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init2) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls2.has(url.toString())) {
      urls2.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL2, "checkURL");
var urls2;
var init_checked_fetch = __esm({
  "../../.wrangler/tmp/bundle-TJQm68/checked-fetch.js"() {
    "use strict";
    urls2 = /* @__PURE__ */ new Set();
    __name2(checkURL2, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init2] = argArray;
        checkURL2(request, init2);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});
var BROWSER;
var init_false = __esm({
  "../output/server/chunks/false.js"() {
    init_checked_fetch();
    BROWSER = false;
  }
});
var init_remote_functions = __esm({
  "../../node_modules/@sveltejs/kit/src/exports/internal/remote-functions.js"() {
    init_checked_fetch();
  }
});
var HttpError;
var Redirect;
var SvelteKitError;
var ActionFailure;
var init_internal = __esm({
  "../../node_modules/@sveltejs/kit/src/exports/internal/index.js"() {
    init_checked_fetch();
    init_remote_functions();
    HttpError = class {
      static {
        __name(this, "HttpError");
      }
      static {
        __name2(this, "HttpError");
      }
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      static {
        __name(this, "Redirect");
      }
      static {
        __name2(this, "Redirect");
      }
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      static {
        __name(this, "SvelteKitError");
      }
      static {
        __name2(this, "SvelteKitError");
      }
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      static {
        __name(this, "ActionFailure");
      }
      static {
        __name2(this, "ActionFailure");
      }
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
  }
});
var true_default;
var init_true = __esm({
  "../../node_modules/esm-env/true.js"() {
    init_checked_fetch();
    true_default = true;
  }
});
var node_env;
var dev_fallback_default;
var init_dev_fallback = __esm({
  "../../node_modules/esm-env/dev-fallback.js"() {
    init_checked_fetch();
    node_env = "development";
    dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");
  }
});
var init_false2 = __esm({
  "../../node_modules/esm-env/false.js"() {
    init_checked_fetch();
  }
});
var init_esm_env = __esm({
  "../../node_modules/esm-env/index.js"() {
    init_checked_fetch();
    init_true();
    init_dev_fallback();
    init_false2();
  }
});
var init_pathname = __esm({
  "../../node_modules/@sveltejs/kit/src/runtime/pathname.js"() {
    init_checked_fetch();
  }
});
var text_encoder;
var text_decoder;
var init_utils = __esm({
  "../../node_modules/@sveltejs/kit/src/runtime/utils.js"() {
    init_checked_fetch();
    init_esm_env();
    text_encoder = new TextEncoder();
    text_decoder = new TextDecoder();
  }
});
var init_version = __esm({
  "../../node_modules/@sveltejs/kit/src/version.js"() {
    init_checked_fetch();
  }
});
function error(status, body2) {
  if ((!true_default || dev_fallback_default) && (isNaN(status) || status < 400 || status > 599)) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body2);
}
__name(error, "error");
function redirect(status, location) {
  if ((!true_default || dev_fallback_default) && (isNaN(status) || status < 300 || status > 308)) {
    throw new Error("Invalid status code");
  }
  throw new Redirect(
    // @ts-ignore
    status,
    location.toString()
  );
}
__name(redirect, "redirect");
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", text_encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
__name(json, "json");
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = text_encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
__name(text, "text");
function fail(status, data) {
  return new ActionFailure(status, data);
}
__name(fail, "fail");
var init_exports = __esm({
  "../../node_modules/@sveltejs/kit/src/exports/index.js"() {
    init_checked_fetch();
    init_internal();
    init_esm_env();
    init_pathname();
    init_utils();
    init_version();
    __name2(error, "error");
    __name2(redirect, "redirect");
    __name2(json, "json");
    __name2(text, "text");
    __name2(fail, "fail");
  }
});
var IN_WEBCONTAINER;
var init_constants = __esm({
  "../../node_modules/@sveltejs/kit/src/runtime/server/constants.js"() {
    init_checked_fetch();
    IN_WEBCONTAINER = !!globalThis.process?.versions?.webcontainer;
  }
});
function with_request_store(store, fn) {
  try {
    sync_store = store;
    return als ? als.run(store, fn) : fn();
  } finally {
    if (!IN_WEBCONTAINER) {
      sync_store = null;
    }
  }
}
__name(with_request_store, "with_request_store");
var sync_store;
var als;
var init_event = __esm({
  "../../node_modules/@sveltejs/kit/src/exports/internal/event.js"() {
    init_checked_fetch();
    init_constants();
    sync_store = null;
    import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
    });
    __name2(with_request_store, "with_request_store");
  }
});
function merge_tracing(event_like, current2) {
  return {
    ...event_like,
    tracing: {
      ...event_like.tracing,
      current: current2
    }
  };
}
__name(merge_tracing, "merge_tracing");
var init_server = __esm({
  "../../node_modules/@sveltejs/kit/src/exports/internal/server.js"() {
    init_checked_fetch();
    init_event();
    __name2(merge_tracing, "merge_tracing");
  }
});
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
__name(resolve, "resolve");
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
__name(normalize_path, "normalize_path");
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
__name(decode_pathname, "decode_pathname");
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
__name(decode_params, "decode_params");
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
__name(make_trackable, "make_trackable");
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
__name(disable_hash, "disable_hash");
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
__name(disable_search, "disable_search");
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
__name(allow_nodejs_console_log, "allow_nodejs_console_log");
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  __name(validate, "validate");
  __name2(validate, "validate");
  return validate;
}
__name(validator, "validator");
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
__name(hint_for_supported_files, "hint_for_supported_files");
var internal;
var valid_layout_exports;
var valid_page_exports;
var valid_layout_server_exports;
var valid_page_server_exports;
var valid_server_exports;
var validate_layout_exports;
var validate_page_exports;
var validate_layout_server_exports;
var validate_page_server_exports;
var validate_server_exports;
var init_exports2 = __esm({
  "../output/server/chunks/exports.js"() {
    init_checked_fetch();
    internal = new URL("sveltekit-internal://");
    __name2(resolve, "resolve");
    __name2(normalize_path, "normalize_path");
    __name2(decode_pathname, "decode_pathname");
    __name2(decode_params, "decode_params");
    __name2(make_trackable, "make_trackable");
    __name2(disable_hash, "disable_hash");
    __name2(disable_search, "disable_search");
    __name2(allow_nodejs_console_log, "allow_nodejs_console_log");
    __name2(validator, "validator");
    __name2(hint_for_supported_files, "hint_for_supported_files");
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
__name(get_relative_path, "get_relative_path");
function base64_encode(bytes) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
__name(base64_encode, "base64_encode");
function base64_decode(encoded) {
  if (globalThis.Buffer) {
    const buffer = globalThis.Buffer.from(encoded, "base64");
    return new Uint8Array(buffer);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
__name(base64_decode, "base64_decode");
var text_encoder2;
var text_decoder2;
var init_utils2 = __esm({
  "../output/server/chunks/utils.js"() {
    init_checked_fetch();
    text_encoder2 = new TextEncoder();
    text_decoder2 = new TextDecoder();
    __name2(get_relative_path, "get_relative_path");
    __name2(base64_encode, "base64_encode");
    __name2(base64_decode, "base64_decode");
  }
});
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
__name(run_all, "run_all");
function deferred() {
  var resolve2;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
__name(deferred, "deferred");
function equals(value) {
  return value === this.v;
}
__name(equals, "equals");
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
__name(safe_not_equal, "safe_not_equal");
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
__name(safe_equals, "safe_equals");
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
__name(lifecycle_outside_component, "lifecycle_outside_component");
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
__name(escape_html, "escape_html");
function set_ssr_context(v) {
  ssr_context = v;
}
__name(set_ssr_context, "set_ssr_context");
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
__name(getContext, "getContext");
function setContext(key2, context2) {
  get_or_init_context_map().set(key2, context2);
  return context2;
}
__name(setContext, "setContext");
function get_or_init_context_map(name) {
  if (ssr_context === null) {
    lifecycle_outside_component();
  }
  return ssr_context.c ??= new Map(get_parent_context(ssr_context) || void 0);
}
__name(get_or_init_context_map, "get_or_init_context_map");
function push(fn) {
  ssr_context = { p: ssr_context, c: null, r: null };
}
__name(push, "push");
function pop() {
  ssr_context = /** @type {SSRContext} */
  ssr_context.p;
}
__name(pop, "pop");
function get_parent_context(ssr_context2) {
  let parent = ssr_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
__name(get_parent_context, "get_parent_context");
var is_array;
var index_of;
var array_from;
var define_property;
var get_descriptor;
var object_prototype;
var array_prototype;
var get_prototype_of;
var is_extensible;
var noop;
var ATTR_REGEX;
var CONTENT_REGEX;
var ssr_context;
var init_context = __esm({
  "../output/server/chunks/context.js"() {
    init_checked_fetch();
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    object_prototype = Object.prototype;
    array_prototype = Array.prototype;
    get_prototype_of = Object.getPrototypeOf;
    is_extensible = Object.isExtensible;
    noop = /* @__PURE__ */ __name2(() => {
    }, "noop");
    __name2(run_all, "run_all");
    __name2(deferred, "deferred");
    __name2(equals, "equals");
    __name2(safe_not_equal, "safe_not_equal");
    __name2(safe_equals, "safe_equals");
    __name2(lifecycle_outside_component, "lifecycle_outside_component");
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    __name2(escape_html, "escape_html");
    ssr_context = null;
    __name2(set_ssr_context, "set_ssr_context");
    __name2(getContext, "getContext");
    __name2(setContext, "setContext");
    __name2(get_or_init_context_map, "get_or_init_context_map");
    __name2(push, "push");
    __name2(pop, "pop");
    __name2(get_parent_context, "get_parent_context");
  }
});
function r(e3) {
  var t2, f, n2 = "";
  if ("string" == typeof e3 || "number" == typeof e3) n2 += e3;
  else if ("object" == typeof e3) if (Array.isArray(e3)) {
    var o2 = e3.length;
    for (t2 = 0; t2 < o2; t2++) e3[t2] && (f = r(e3[t2])) && (n2 && (n2 += " "), n2 += f);
  } else for (f in e3) e3[f] && (n2 && (n2 += " "), n2 += f);
  return n2;
}
__name(r, "r");
function clsx() {
  for (var e3, t2, f = 0, n2 = "", o2 = arguments.length; f < o2; f++) (e3 = arguments[f]) && (t2 = r(e3)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
__name(clsx, "clsx");
var init_clsx = __esm({
  "../../node_modules/clsx/dist/clsx.mjs"() {
    init_checked_fetch();
    __name2(r, "r");
    __name2(clsx, "clsx");
  }
});
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
__name(readable, "readable");
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  __name(set2, "set2");
  __name2(set2, "set");
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  __name(update, "update");
  __name2(update, "update");
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  __name(subscribe, "subscribe");
  __name2(subscribe, "subscribe");
  return { set: set2, update, subscribe };
}
__name(writable, "writable");
var subscriber_queue;
var init_chunks = __esm({
  "../output/server/chunks/index.js"() {
    init_checked_fetch();
    init_context();
    init_clsx();
    subscriber_queue = [];
    __name2(readable, "readable");
    __name2(writable, "writable");
  }
});
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
__name(effect_update_depth_exceeded, "effect_update_depth_exceeded");
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
__name(hydration_failed, "hydration_failed");
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
__name(state_descriptors_fixed, "state_descriptors_fixed");
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
__name(state_prototype_fixed, "state_prototype_fixed");
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
__name(state_unsafe_mutation, "state_unsafe_mutation");
function svelte_boundary_reset_onerror() {
  {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}
__name(svelte_boundary_reset_onerror, "svelte_boundary_reset_onerror");
function set_component_context(context2) {
  component_context = context2;
}
__name(set_component_context, "set_component_context");
function push2(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    l: null
  };
}
__name(push2, "push2");
function pop2(component14) {
  var context2 = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context2.e;
  if (effects !== null) {
    context2.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  context2.i = true;
  component_context = context2.p;
  return (
    /** @type {T} */
    {}
  );
}
__name(pop2, "pop2");
function is_runes() {
  return true;
}
__name(is_runes, "is_runes");
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
__name(run_micro_tasks, "run_micro_tasks");
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
__name(queue_micro_task, "queue_micro_task");
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}
__name(flush_tasks, "flush_tasks");
function handle_error(error2) {
  var effect = active_effect;
  if (effect === null) {
    active_reaction.f |= ERROR_VALUE;
    return error2;
  }
  if ((effect.f & EFFECT_RAN) === 0) {
    if ((effect.f & BOUNDARY_EFFECT) === 0) {
      throw error2;
    }
    effect.b.error(error2);
  } else {
    invoke_error_boundary(error2, effect);
  }
}
__name(handle_error, "handle_error");
function invoke_error_boundary(error2, effect) {
  while (effect !== null) {
    if ((effect.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect.b.error(error2);
        return;
      } catch (e3) {
        error2 = e3;
      }
    }
    effect = effect.parent;
  }
  throw error2;
}
__name(invoke_error_boundary, "invoke_error_boundary");
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) ;
    while (true) {
      flush_tasks();
      if (queued_root_effects.length === 0) {
        current_batch?.flush();
        if (queued_root_effects.length === 0) {
          last_scheduled_effect = null;
          return (
            /** @type {T} */
            result
          );
        }
      }
      flush_effects();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
__name(flushSync, "flushSync");
function flush_effects() {
  var was_updating_effect = is_updating_effect;
  is_flushing = true;
  try {
    var flush_count = 0;
    set_is_updating_effect(true);
    while (queued_root_effects.length > 0) {
      var batch = Batch.ensure();
      if (flush_count++ > 1e3) {
        var updates, entry;
        if (BROWSER) ;
        infinite_loop_guard();
      }
      batch.process(queued_root_effects);
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    set_is_updating_effect(was_updating_effect);
    last_scheduled_effect = null;
  }
}
__name(flush_effects, "flush_effects");
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error2) {
    invoke_error_boundary(error2, last_scheduled_effect);
  }
}
__name(infinite_loop_guard, "infinite_loop_guard");
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect = effects[i++];
    if ((effect.f & (DESTROYED | INERT)) === 0 && is_dirty(effect)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect);
      if (effect.deps === null && effect.first === null && effect.nodes_start === null) {
        if (effect.teardown === null && effect.ac === null) {
          unlink_effect(effect);
        } else {
          effect.fn = null;
        }
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e3 of eager_block_effects) {
          if ((e3.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e3];
          let ancestor = e3.parent;
          while (ancestor !== null) {
            if (eager_block_effects.has(ancestor)) {
              eager_block_effects.delete(ancestor);
              ordered_effects.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          for (let j = ordered_effects.length - 1; j >= 0; j--) {
            const e22 = ordered_effects[j];
            if ((e22.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e22);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
__name(flush_queued_effects, "flush_queued_effects");
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && // we may have scheduled this one already
      depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
__name(mark_effects, "mark_effects");
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (sources.includes(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
__name(depends_on, "depends_on");
function schedule_effect(signal) {
  var effect = last_scheduled_effect = signal;
  while (effect.parent !== null) {
    effect = effect.parent;
    var flags2 = effect.f;
    if (is_flushing && effect === active_effect && (flags2 & BLOCK_EFFECT) !== 0 && (flags2 & HEAD_EFFECT) === 0) {
      return;
    }
    if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags2 & CLEAN) === 0) return;
      effect.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect);
}
__name(schedule_effect, "schedule_effect");
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
__name(destroy_derived_effects, "destroy_derived_effects");
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
__name(get_derived_parent_effect, "get_derived_parent_effect");
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      derived.f &= ~WAS_MARKED;
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
__name(execute_derived, "execute_derived");
function update_derived(derived) {
  var value = execute_derived(derived);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    if (effect_tracking()) {
      batch_values.set(derived, derived.v);
    }
  } else {
    var status = (derived.f & CONNECTED) === 0 ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived, status);
  }
}
__name(update_derived, "update_derived");
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
__name(source, "source");
// @__NO_SIDE_EFFECTS__
function state(v, stack) {
  const s3 = source(v);
  push_reaction_value(s3);
  return s3;
}
__name(state, "state");
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable2 = false, trackable = true) {
  const s3 = source(initial_value);
  if (!immutable2) {
    s3.equals = safe_equals;
  }
  return s3;
}
__name(mutable_source, "mutable_source");
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && !current_sources?.includes(source2)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
__name(set, "set");
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    var batch = Batch.ensure();
    batch.capture(source2, old_value);
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & CONNECTED) !== 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
__name(internal_set, "internal_set");
function flush_eager_effects() {
  eager_effects_deferred = false;
  const inspects = Array.from(eager_effects);
  for (const effect of inspects) {
    if ((effect.f & CLEAN) !== 0) {
      set_signal_status(effect, MAYBE_DIRTY);
    }
    if (is_dirty(effect)) {
      update_effect(effect);
    }
  }
  eager_effects.clear();
}
__name(flush_eager_effects, "flush_eager_effects");
function increment(source2) {
  set(source2, source2.v + 1);
}
__name(increment, "increment");
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        reaction
      );
      batch_values?.delete(derived);
      if ((flags2 & WAS_MARKED) === 0) {
        if (flags2 & CONNECTED) {
          reaction.f |= WAS_MARKED;
        }
        mark_reactions(derived, MAYBE_DIRTY);
      }
    } else if (not_dirty) {
      if ((flags2 & BLOCK_EFFECT) !== 0) {
        if (eager_block_effects !== null) {
          eager_block_effects.add(
            /** @type {Effect} */
            reaction
          );
        }
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
__name(mark_reactions, "mark_reactions");
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var parent_version = update_version;
  var with_parent = /* @__PURE__ */ __name2((fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  }, "with_parent");
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          s3 = with_parent(() => {
            var s22 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop, s22);
            return s22;
          });
        } else {
          set(s3, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop) {
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          if (prop in target) {
            const s22 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop, s22);
            increment(version);
          }
        } else {
          set(s3, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }
        var s3 = sources.get(prop);
        var exists = prop in target;
        if (s3 === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
          s3 = with_parent(() => {
            var p = proxy(exists ? target[prop] : UNINITIALIZED);
            var s22 = /* @__PURE__ */ state(p);
            return s22;
          });
          sources.set(prop, s3);
        }
        if (s3 !== void 0) {
          var v = get(s3);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop, receiver);
      },
      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor && "value" in descriptor) {
          var s3 = sources.get(prop);
          if (s3) descriptor.value = get(s3);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }
        var s3 = sources.get(prop);
        var has = s3 !== void 0 && s3.v !== UNINITIALIZED || Reflect.has(target, prop);
        if (s3 !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
          if (s3 === void 0) {
            s3 = with_parent(() => {
              var p = has ? proxy(target[prop]) : UNINITIALIZED;
              var s22 = /* @__PURE__ */ state(p);
              return s22;
            });
            sources.set(prop, s3);
          }
          var value2 = get(s3);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop, value2, receiver) {
        var s3 = sources.get(prop);
        var has = prop in target;
        if (is_proxied_array && prop === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s3.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s3 === void 0) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s3 = with_parent(() => /* @__PURE__ */ state(void 0));
            set(s3, proxy(value2));
            sources.set(prop, s3);
          }
        } else {
          has = s3.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s3, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n2 = Number(prop);
            if (Number.isInteger(n2) && n2 >= ls.v) {
              set(ls, n2 + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key22) => {
          var source3 = sources.get(key22);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
__name(proxy, "proxy");
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
__name(init_operations, "init_operations");
function create_text(value = "") {
  return document.createTextNode(value);
}
__name(create_text, "create_text");
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
__name(get_first_child, "get_first_child");
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
__name(get_next_sibling, "get_next_sibling");
function clear_text_content(node) {
  node.textContent = "";
}
__name(clear_text_content, "clear_text_content");
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
__name(without_reactive_context, "without_reactive_context");
function push_effect(effect, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect;
  } else {
    parent_last.next = effect;
    effect.prev = parent_last;
    parent_effect.last = effect;
  }
}
__name(push_effect, "push_effect");
function create_effect(type, fn, sync, push22 = true) {
  var parent = active_effect;
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY | CONNECTED,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (sync) {
    try {
      update_effect(effect);
      effect.f |= EFFECT_RAN;
    } catch (e22) {
      destroy_effect(effect);
      throw e22;
    }
  } else if (fn !== null) {
    schedule_effect(effect);
  }
  if (push22) {
    var e3 = effect;
    if (sync && e3.deps === null && e3.teardown === null && e3.nodes_start === null && e3.first === e3.last && // either `null`, or a singular child
    (e3.f & EFFECT_PRESERVED) === 0) {
      e3 = e3.first;
      if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e3 !== null) {
        e3.f |= EFFECT_TRANSPARENT;
      }
    }
    if (e3 !== null) {
      e3.parent = parent;
      if (parent !== null) {
        push_effect(e3, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived = (
          /** @type {Derived} */
          active_reaction
        );
        (derived.effects ??= []).push(e3);
      }
    }
  }
  return effect;
}
__name(create_effect, "create_effect");
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
__name(effect_tracking, "effect_tracking");
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn, false);
}
__name(create_user_effect, "create_user_effect");
function component_root(fn) {
  Batch.ensure();
  const effect = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn, true);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect, () => {
          destroy_effect(effect);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect);
        fulfil(void 0);
      }
    });
  };
}
__name(component_root, "component_root");
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn, true);
}
__name(render_effect, "render_effect");
function block(fn, flags2 = 0) {
  var effect = create_effect(BLOCK_EFFECT | flags2, fn, true);
  return effect;
}
__name(block, "block");
function branch(fn, push22 = true) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn, true, push22);
}
__name(branch, "branch");
function execute_effect_teardown(effect) {
  var teardown = effect.teardown;
  if (teardown !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
__name(execute_effect_teardown, "execute_effect_teardown");
function destroy_effect_children(signal, remove_dom = false) {
  var effect = signal.first;
  signal.first = signal.last = null;
  while (effect !== null) {
    const controller2 = effect.ac;
    if (controller2 !== null) {
      without_reactive_context(() => {
        controller2.abort(STALE_REACTION);
      });
    }
    var next2 = effect.next;
    if ((effect.f & ROOT_EFFECT) !== 0) {
      effect.parent = null;
    } else {
      destroy_effect(effect, remove_dom);
    }
    effect = next2;
  }
}
__name(destroy_effect_children, "destroy_effect_children");
function destroy_block_effect_children(signal) {
  var effect = signal.first;
  while (effect !== null) {
    var next2 = effect.next;
    if ((effect.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect);
    }
    effect = next2;
  }
}
__name(destroy_block_effect_children, "destroy_block_effect_children");
function destroy_effect(effect, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect.f & HEAD_EFFECT) !== 0) && effect.nodes_start !== null && effect.nodes_end !== null) {
    remove_effect_dom(
      effect.nodes_start,
      /** @type {TemplateNode} */
      effect.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect, remove_dom && !removed);
  remove_reactions(effect, 0);
  set_signal_status(effect, DESTROYED);
  var transitions = effect.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect);
  var parent = effect.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect);
  }
  effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes_start = effect.nodes_end = effect.ac = null;
}
__name(destroy_effect, "destroy_effect");
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}
__name(remove_effect_dom, "remove_effect_dom");
function unlink_effect(effect) {
  var parent = effect.parent;
  var prev = effect.prev;
  var next2 = effect.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect) parent.first = next2;
    if (parent.last === effect) parent.last = prev;
  }
}
__name(unlink_effect, "unlink_effect");
function pause_effect(effect, callback, destroy = true) {
  var transitions = [];
  pause_children(effect, transitions, true);
  run_out_transitions(transitions, () => {
    if (destroy) destroy_effect(effect);
    if (callback) callback();
  });
}
__name(pause_effect, "pause_effect");
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = /* @__PURE__ */ __name2(() => --remaining || fn(), "check");
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
__name(run_out_transitions, "run_out_transitions");
function pause_children(effect, transitions, local) {
  if ((effect.f & INERT) !== 0) return;
  effect.f ^= INERT;
  if (effect.transitions !== null) {
    for (const transition of effect.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
    // it means the parent block effect was pruned. In that case,
    // transparency information was transferred to the branch effect.
    (child.f & BRANCH_EFFECT) !== 0 && (effect.f & BLOCK_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
__name(pause_children, "pause_children");
function move_effect(effect, fragment) {
  var node = effect.nodes_start;
  var end = effect.nodes_end;
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    fragment.append(node);
    node = next2;
  }
}
__name(move_effect, "move_effect");
function set_is_updating_effect(value) {
  is_updating_effect = value;
}
__name(set_is_updating_effect, "set_is_updating_effect");
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
__name(set_is_destroying_effect, "set_is_destroying_effect");
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
__name(set_active_reaction, "set_active_reaction");
function set_active_effect(effect) {
  active_effect = effect;
}
__name(set_active_effect, "set_active_effect");
function push_reaction_value(value) {
  if (active_reaction !== null && true) {
    if (current_sources === null) {
      current_sources = [value];
    } else {
      current_sources.push(value);
    }
  }
}
__name(push_reaction_value, "push_reaction_value");
function set_untracked_writes(value) {
  untracked_writes = value;
}
__name(set_untracked_writes, "set_untracked_writes");
function set_update_version(value) {
  update_version = value;
}
__name(set_update_version, "set_update_version");
function increment_write_version() {
  return ++write_version;
}
__name(increment_write_version, "increment_write_version");
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if (flags2 & DERIVED) {
    reaction.f &= ~WAS_MARKED;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    if (dependencies !== null) {
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        var dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    batch_values === null) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
__name(is_dirty, "is_dirty");
function schedule_possible_effect_self_invalidation(signal, effect, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (current_sources?.includes(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect,
        false
      );
    } else if (effect === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
__name(schedule_possible_effect_self_invalidation, "schedule_possible_effect_self_invalidation");
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (is_updating_effect && effect_tracking() && (reaction.f & CONNECTED) !== 0) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error2) {
    return handle_error(error2);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
__name(update_reaction, "update_reaction");
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index14 = index_of.call(reactions, signal);
    if (index14 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index14] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & CONNECTED) !== 0) {
      dependency.f ^= CONNECTED;
      dependency.f &= ~WAS_MARKED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
__name(remove_reaction, "remove_reaction");
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
__name(remove_reactions, "remove_reactions");
function update_effect(effect) {
  var flags2 = effect.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect;
  is_updating_effect = true;
  try {
    if ((flags2 & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect);
    } else {
      destroy_effect_children(effect);
    }
    execute_effect_teardown(effect);
    var teardown = update_reaction(effect);
    effect.teardown = typeof teardown === "function" ? teardown : null;
    effect.wv = write_version;
    var dep;
    if (BROWSER && tracing_mode_flag && (effect.f & DIRTY) !== 0 && effect.deps !== null) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
__name(update_effect, "update_effect");
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && !current_sources?.includes(signal)) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else if (!new_deps.includes(signal)) {
            new_deps.push(signal);
          }
        }
      } else {
        (active_reaction.deps ??= []).push(signal);
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!reactions.includes(active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  }
  if (is_destroying_effect) {
    if (old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      var derived = (
        /** @type {Derived} */
        signal
      );
      var value = derived.v;
      if ((derived.f & CLEAN) === 0 && derived.reactions !== null || depends_on_old_values(derived)) {
        value = execute_derived(derived);
      }
      old_values.set(derived, value);
      return value;
    }
  } else if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (batch_values?.has(derived)) {
      return batch_values.get(derived);
    }
    if (is_dirty(derived)) {
      update_derived(derived);
    }
    if (is_updating_effect && effect_tracking() && (derived.f & CONNECTED) === 0) {
      reconnect(derived);
    }
  } else if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
__name(get, "get");
function reconnect(derived) {
  if (derived.deps === null) return;
  derived.f ^= CONNECTED;
  for (const dep of derived.deps) {
    (dep.reactions ??= []).push(derived);
    if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
      reconnect(
        /** @type {Derived} */
        dep
      );
    }
  }
}
__name(reconnect, "reconnect");
function depends_on_old_values(derived) {
  if (derived.v === UNINITIALIZED) return true;
  if (derived.deps === null) return false;
  for (const dep of derived.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
__name(depends_on_old_values, "depends_on_old_values");
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
__name(untrack, "untrack");
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
__name(set_signal_status, "set_signal_status");
function is_boolean_attribute(name) {
  return DOM_BOOLEAN_ATTRIBUTES.includes(name);
}
__name(is_boolean_attribute, "is_boolean_attribute");
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
__name(is_passive_event, "is_passive_event");
function attr(name, value, is_boolean = false) {
  if (name === "hidden" && value !== "until-found") {
    is_boolean = true;
  }
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
__name(attr, "attr");
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
__name(clsx2, "clsx2");
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 in directives) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
__name(to_class, "to_class");
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key2 in styles) {
    var value = styles[key2];
    if (value != null && value !== "") {
      css += " " + key2 + ": " + value + separator;
    }
  }
  return css;
}
__name(append_styles, "append_styles");
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
__name(to_css_name, "to_css_name");
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c2 = value[i];
        if (in_comment) {
          if (c2 === "/" && value[i - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c2) {
            in_str = false;
          }
        } else if (c2 === "/" && value[i + 1] === "*") {
          in_comment = true;
        } else if (c2 === '"' || c2 === "'") {
          in_str = c2;
        } else if (c2 === "(") {
          in_apo++;
        } else if (c2 === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c2 === ":" && name_index === -1) {
            name_index = i;
          } else if (c2 === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c2 !== ";") {
                  i++;
                }
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
__name(to_style, "to_style");
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
__name(subscribe_to_store, "subscribe_to_store");
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
__name(abort, "abort");
function await_invalid() {
  const error2 = new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);
  error2.name = "Svelte error";
  throw error2;
}
__name(await_invalid, "await_invalid");
function render(component14, options2 = {}) {
  return Renderer.render(
    /** @type {Component<Props>} */
    component14,
    options2
  );
}
__name(render, "render");
function head(hash2, renderer, fn) {
  renderer.head((renderer2) => {
    renderer2.push(`<!--${hash2}-->`);
    renderer2.child(fn);
    renderer2.push(EMPTY_COMMENT);
  });
}
__name(head, "head");
function attributes(attrs, css_hash, classes, styles, flags2 = 0) {
  if (styles) {
    attrs.style = to_style(attrs.style, styles);
  }
  if (attrs.class) {
    attrs.class = clsx2(attrs.class);
  }
  if (css_hash || classes) {
    attrs.class = to_class(attrs.class, css_hash, classes);
  }
  let attr_str = "";
  let name;
  const is_html = (flags2 & ELEMENT_IS_NAMESPACED) === 0;
  const lowercase = (flags2 & ELEMENT_PRESERVE_ATTRIBUTE_CASE) === 0;
  const is_input = (flags2 & ELEMENT_IS_INPUT) !== 0;
  for (name in attrs) {
    if (typeof attrs[name] === "function") continue;
    if (name[0] === "$" && name[1] === "$") continue;
    if (INVALID_ATTR_NAME_CHAR_REGEX.test(name)) continue;
    var value = attrs[name];
    if (lowercase) {
      name = name.toLowerCase();
    }
    if (is_input) {
      if (name === "defaultvalue" || name === "defaultchecked") {
        name = name === "defaultvalue" ? "value" : "checked";
        if (attrs[name]) continue;
      }
    }
    attr_str += attr(name, value, is_html && is_boolean_attribute(name));
  }
  return attr_str;
}
__name(attributes, "attributes");
function stringify2(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
__name(stringify2, "stringify2");
function attr_class(value, hash2, directives) {
  var result = to_class(value, hash2, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
__name(attr_class, "attr_class");
function attr_style(value, directives) {
  var result = to_style(value, directives);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
__name(attr_style, "attr_style");
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
__name(store_get, "store_get");
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
__name(unsubscribe_stores, "unsubscribe_stores");
function slot(renderer, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(renderer, slot_props);
  }
}
__name(slot, "slot");
function bind_props(props_parent, props_now) {
  for (const key2 in props_now) {
    const initial_value = props_parent[key2];
    const value = props_now[key2];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key2)?.set) {
      props_parent[key2] = value;
    }
  }
}
__name(bind_props, "bind_props");
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
__name(ensure_array_like, "ensure_array_like");
var DERIVED;
var EFFECT;
var RENDER_EFFECT;
var BLOCK_EFFECT;
var BRANCH_EFFECT;
var ROOT_EFFECT;
var BOUNDARY_EFFECT;
var CONNECTED;
var CLEAN;
var DIRTY;
var MAYBE_DIRTY;
var INERT;
var DESTROYED;
var EFFECT_RAN;
var EFFECT_TRANSPARENT;
var EAGER_EFFECT;
var HEAD_EFFECT;
var EFFECT_PRESERVED;
var USER_EFFECT;
var WAS_MARKED;
var REACTION_IS_UPDATING;
var ASYNC;
var ERROR_VALUE;
var STATE_SYMBOL;
var LEGACY_PROPS;
var STALE_REACTION;
var COMMENT_NODE;
var HYDRATION_START;
var HYDRATION_START_ELSE;
var HYDRATION_END;
var HYDRATION_ERROR;
var ELEMENT_IS_NAMESPACED;
var ELEMENT_PRESERVE_ATTRIBUTE_CASE;
var ELEMENT_IS_INPUT;
var UNINITIALIZED;
var tracing_mode_flag;
var component_context;
var micro_tasks;
var batches;
var current_batch;
var batch_values;
var queued_root_effects;
var last_scheduled_effect;
var is_flushing;
var is_flushing_sync;
var Batch;
var eager_block_effects;
var eager_effects;
var old_values;
var eager_effects_deferred;
var $window;
var first_child_getter;
var next_sibling_getter;
var is_updating_effect;
var is_destroying_effect;
var active_reaction;
var untracking;
var active_effect;
var current_sources;
var new_deps;
var skipped_deps;
var untracked_writes;
var write_version;
var read_version;
var update_version;
var STATUS_MASK;
var DOM_BOOLEAN_ATTRIBUTES;
var PASSIVE_EVENTS;
var replacements;
var whitespace;
var BLOCK_OPEN;
var BLOCK_CLOSE;
var EMPTY_COMMENT;
var controller;
var Renderer;
var SSRState;
var INVALID_ATTR_NAME_CHAR_REGEX;
var init_index2 = __esm({
  "../output/server/chunks/index2.js"() {
    init_checked_fetch();
    init_context();
    init_clsx();
    init_false();
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    CONNECTED = 1 << 9;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    EFFECT_RAN = 1 << 15;
    EFFECT_TRANSPARENT = 1 << 16;
    EAGER_EFFECT = 1 << 17;
    HEAD_EFFECT = 1 << 18;
    EFFECT_PRESERVED = 1 << 19;
    USER_EFFECT = 1 << 20;
    WAS_MARKED = 1 << 15;
    REACTION_IS_UPDATING = 1 << 21;
    ASYNC = 1 << 22;
    ERROR_VALUE = 1 << 23;
    STATE_SYMBOL = Symbol("$state");
    LEGACY_PROPS = Symbol("legacy props");
    STALE_REACTION = new class StaleReactionError extends Error {
      static {
        __name(this, "StaleReactionError");
      }
      static {
        __name2(this, "StaleReactionError");
      }
      name = "StaleReactionError";
      message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }();
    COMMENT_NODE = 8;
    __name2(effect_update_depth_exceeded, "effect_update_depth_exceeded");
    __name2(hydration_failed, "hydration_failed");
    __name2(state_descriptors_fixed, "state_descriptors_fixed");
    __name2(state_prototype_fixed, "state_prototype_fixed");
    __name2(state_unsafe_mutation, "state_unsafe_mutation");
    __name2(svelte_boundary_reset_onerror, "svelte_boundary_reset_onerror");
    HYDRATION_START = "[";
    HYDRATION_START_ELSE = "[!";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    ELEMENT_IS_NAMESPACED = 1;
    ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
    ELEMENT_IS_INPUT = 1 << 2;
    UNINITIALIZED = Symbol();
    tracing_mode_flag = false;
    component_context = null;
    __name2(set_component_context, "set_component_context");
    __name2(push2, "push");
    __name2(pop2, "pop");
    __name2(is_runes, "is_runes");
    micro_tasks = [];
    __name2(run_micro_tasks, "run_micro_tasks");
    __name2(queue_micro_task, "queue_micro_task");
    __name2(flush_tasks, "flush_tasks");
    __name2(handle_error, "handle_error");
    __name2(invoke_error_boundary, "invoke_error_boundary");
    batches = /* @__PURE__ */ new Set();
    current_batch = null;
    batch_values = null;
    queued_root_effects = [];
    last_scheduled_effect = null;
    is_flushing = false;
    is_flushing_sync = false;
    Batch = class _Batch {
      static {
        __name(this, "_Batch");
      }
      static {
        __name2(this, "Batch");
      }
      committed = false;
      /**
       * The current values of any sources that are updated in this batch
       * They keys of this map are identical to `this.#previous`
       * @type {Map<Source, any>}
       */
      current = /* @__PURE__ */ new Map();
      /**
       * The values of any sources that are updated in this batch _before_ those updates took place.
       * They keys of this map are identical to `this.#current`
       * @type {Map<Source, any>}
       */
      previous = /* @__PURE__ */ new Map();
      /**
       * When the batch is committed (and the DOM is updated), we need to remove old branches
       * and append new ones by calling the functions added inside (if/each/key/etc) blocks
       * @type {Set<() => void>}
       */
      #commit_callbacks = /* @__PURE__ */ new Set();
      /**
       * If a fork is discarded, we need to destroy any effects that are no longer needed
       * @type {Set<(batch: Batch) => void>}
       */
      #discard_callbacks = /* @__PURE__ */ new Set();
      /**
       * The number of async effects that are currently in flight
       */
      #pending = 0;
      /**
       * The number of async effects that are currently in flight, _not_ inside a pending boundary
       */
      #blocking_pending = 0;
      /**
       * A deferred that resolves when the batch is committed, used with `settled()`
       * TODO replace with Promise.withResolvers once supported widely enough
       * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
       */
      #deferred = null;
      /**
       * Deferred effects (which run after async work has completed) that are DIRTY
       * @type {Effect[]}
       */
      #dirty_effects = [];
      /**
       * Deferred effects that are MAYBE_DIRTY
       * @type {Effect[]}
       */
      #maybe_dirty_effects = [];
      /**
       * A set of branches that still exist, but will be destroyed when this batch
       * is committed — we skip over these during `process`
       * @type {Set<Effect>}
       */
      skipped_effects = /* @__PURE__ */ new Set();
      is_fork = false;
      /**
       *
       * @param {Effect[]} root_effects
       */
      process(root_effects) {
        queued_root_effects = [];
        this.apply();
        var target = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: []
        };
        for (const root2 of root_effects) {
          this.#traverse_effect_tree(root2, target);
        }
        if (!this.is_fork) {
          this.#resolve();
        }
        if (this.#blocking_pending > 0 || this.is_fork) {
          this.#defer_effects(target.effects);
          this.#defer_effects(target.render_effects);
          this.#defer_effects(target.block_effects);
        } else {
          current_batch = null;
          flush_queued_effects(target.render_effects);
          flush_queued_effects(target.effects);
          this.#deferred?.resolve();
        }
        batch_values = null;
      }
      /**
       * Traverse the effect tree, executing effects or stashing
       * them for later execution as appropriate
       * @param {Effect} root
       * @param {EffectTarget} target
       */
      #traverse_effect_tree(root2, target) {
        root2.f ^= CLEAN;
        var effect = root2.first;
        while (effect !== null) {
          var flags2 = effect.f;
          var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
          var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
          var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.skipped_effects.has(effect);
          if ((effect.f & BOUNDARY_EFFECT) !== 0 && effect.b?.is_pending()) {
            target = {
              parent: target,
              effect,
              effects: [],
              render_effects: [],
              block_effects: []
            };
          }
          if (!skip && effect.fn !== null) {
            if (is_branch) {
              effect.f ^= CLEAN;
            } else if ((flags2 & EFFECT) !== 0) {
              target.effects.push(effect);
            } else if (is_dirty(effect)) {
              if ((effect.f & BLOCK_EFFECT) !== 0) target.block_effects.push(effect);
              update_effect(effect);
            }
            var child = effect.first;
            if (child !== null) {
              effect = child;
              continue;
            }
          }
          var parent = effect.parent;
          effect = effect.next;
          while (effect === null && parent !== null) {
            if (parent === target.effect) {
              this.#defer_effects(target.effects);
              this.#defer_effects(target.render_effects);
              this.#defer_effects(target.block_effects);
              target = /** @type {EffectTarget} */
              target.parent;
            }
            effect = parent.next;
            parent = parent.parent;
          }
        }
      }
      /**
       * @param {Effect[]} effects
       */
      #defer_effects(effects) {
        for (const e3 of effects) {
          const target = (e3.f & DIRTY) !== 0 ? this.#dirty_effects : this.#maybe_dirty_effects;
          target.push(e3);
          set_signal_status(e3, CLEAN);
        }
      }
      /**
       * Associate a change to a given source with the current
       * batch, noting its previous and current values
       * @param {Source} source
       * @param {any} value
       */
      capture(source2, value) {
        if (!this.previous.has(source2)) {
          this.previous.set(source2, value);
        }
        if ((source2.f & ERROR_VALUE) === 0) {
          this.current.set(source2, source2.v);
          batch_values?.set(source2, source2.v);
        }
      }
      activate() {
        current_batch = this;
        this.apply();
      }
      deactivate() {
        current_batch = null;
        batch_values = null;
      }
      flush() {
        this.activate();
        if (queued_root_effects.length > 0) {
          flush_effects();
          if (current_batch !== null && current_batch !== this) {
            return;
          }
        } else if (this.#pending === 0) {
          this.process([]);
        }
        this.deactivate();
      }
      discard() {
        for (const fn of this.#discard_callbacks) fn(this);
        this.#discard_callbacks.clear();
      }
      #resolve() {
        if (this.#blocking_pending === 0) {
          for (const fn of this.#commit_callbacks) fn();
          this.#commit_callbacks.clear();
        }
        if (this.#pending === 0) {
          this.#commit();
        }
      }
      #commit() {
        if (batches.size > 1) {
          this.previous.clear();
          var previous_batch_values = batch_values;
          var is_earlier = true;
          var dummy_target = {
            parent: null,
            effect: null,
            effects: [],
            render_effects: [],
            block_effects: []
          };
          for (const batch of batches) {
            if (batch === this) {
              is_earlier = false;
              continue;
            }
            const sources = [];
            for (const [source2, value] of this.current) {
              if (batch.current.has(source2)) {
                if (is_earlier && value !== batch.current.get(source2)) {
                  batch.current.set(source2, value);
                } else {
                  continue;
                }
              }
              sources.push(source2);
            }
            if (sources.length === 0) {
              continue;
            }
            const others = [...batch.current.keys()].filter((s3) => !this.current.has(s3));
            if (others.length > 0) {
              const marked = /* @__PURE__ */ new Set();
              const checked = /* @__PURE__ */ new Map();
              for (const source2 of sources) {
                mark_effects(source2, others, marked, checked);
              }
              if (queued_root_effects.length > 0) {
                current_batch = batch;
                batch.apply();
                for (const root2 of queued_root_effects) {
                  batch.#traverse_effect_tree(root2, dummy_target);
                }
                queued_root_effects = [];
                batch.deactivate();
              }
            }
          }
          current_batch = null;
          batch_values = previous_batch_values;
        }
        this.committed = true;
        batches.delete(this);
      }
      /**
       *
       * @param {boolean} blocking
       */
      increment(blocking) {
        this.#pending += 1;
        if (blocking) this.#blocking_pending += 1;
      }
      /**
       *
       * @param {boolean} blocking
       */
      decrement(blocking) {
        this.#pending -= 1;
        if (blocking) this.#blocking_pending -= 1;
        this.revive();
      }
      revive() {
        for (const e3 of this.#dirty_effects) {
          set_signal_status(e3, DIRTY);
          schedule_effect(e3);
        }
        for (const e3 of this.#maybe_dirty_effects) {
          set_signal_status(e3, MAYBE_DIRTY);
          schedule_effect(e3);
        }
        this.#dirty_effects = [];
        this.#maybe_dirty_effects = [];
        this.flush();
      }
      /** @param {() => void} fn */
      oncommit(fn) {
        this.#commit_callbacks.add(fn);
      }
      /** @param {(batch: Batch) => void} fn */
      ondiscard(fn) {
        this.#discard_callbacks.add(fn);
      }
      settled() {
        return (this.#deferred ??= deferred()).promise;
      }
      static ensure() {
        if (current_batch === null) {
          const batch = current_batch = new _Batch();
          batches.add(current_batch);
          if (!is_flushing_sync) {
            _Batch.enqueue(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
        return current_batch;
      }
      /** @param {() => void} task */
      static enqueue(task) {
        queue_micro_task(task);
      }
      apply() {
        return;
      }
    };
    __name2(flushSync, "flushSync");
    __name2(flush_effects, "flush_effects");
    __name2(infinite_loop_guard, "infinite_loop_guard");
    eager_block_effects = null;
    __name2(flush_queued_effects, "flush_queued_effects");
    __name2(mark_effects, "mark_effects");
    __name2(depends_on, "depends_on");
    __name2(schedule_effect, "schedule_effect");
    __name2(destroy_derived_effects, "destroy_derived_effects");
    __name2(get_derived_parent_effect, "get_derived_parent_effect");
    __name2(execute_derived, "execute_derived");
    __name2(update_derived, "update_derived");
    eager_effects = /* @__PURE__ */ new Set();
    old_values = /* @__PURE__ */ new Map();
    eager_effects_deferred = false;
    __name2(source, "source");
    __name2(state, "state");
    __name2(mutable_source, "mutable_source");
    __name2(set, "set");
    __name2(internal_set, "internal_set");
    __name2(flush_eager_effects, "flush_eager_effects");
    __name2(increment, "increment");
    __name2(mark_reactions, "mark_reactions");
    __name2(proxy, "proxy");
    __name2(init_operations, "init_operations");
    __name2(create_text, "create_text");
    __name2(get_first_child, "get_first_child");
    __name2(get_next_sibling, "get_next_sibling");
    __name2(clear_text_content, "clear_text_content");
    __name2(without_reactive_context, "without_reactive_context");
    __name2(push_effect, "push_effect");
    __name2(create_effect, "create_effect");
    __name2(effect_tracking, "effect_tracking");
    __name2(create_user_effect, "create_user_effect");
    __name2(component_root, "component_root");
    __name2(render_effect, "render_effect");
    __name2(block, "block");
    __name2(branch, "branch");
    __name2(execute_effect_teardown, "execute_effect_teardown");
    __name2(destroy_effect_children, "destroy_effect_children");
    __name2(destroy_block_effect_children, "destroy_block_effect_children");
    __name2(destroy_effect, "destroy_effect");
    __name2(remove_effect_dom, "remove_effect_dom");
    __name2(unlink_effect, "unlink_effect");
    __name2(pause_effect, "pause_effect");
    __name2(run_out_transitions, "run_out_transitions");
    __name2(pause_children, "pause_children");
    __name2(move_effect, "move_effect");
    is_updating_effect = false;
    __name2(set_is_updating_effect, "set_is_updating_effect");
    is_destroying_effect = false;
    __name2(set_is_destroying_effect, "set_is_destroying_effect");
    active_reaction = null;
    untracking = false;
    __name2(set_active_reaction, "set_active_reaction");
    active_effect = null;
    __name2(set_active_effect, "set_active_effect");
    current_sources = null;
    __name2(push_reaction_value, "push_reaction_value");
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    __name2(set_untracked_writes, "set_untracked_writes");
    write_version = 1;
    read_version = 0;
    update_version = read_version;
    __name2(set_update_version, "set_update_version");
    __name2(increment_write_version, "increment_write_version");
    __name2(is_dirty, "is_dirty");
    __name2(schedule_possible_effect_self_invalidation, "schedule_possible_effect_self_invalidation");
    __name2(update_reaction, "update_reaction");
    __name2(remove_reaction, "remove_reaction");
    __name2(remove_reactions, "remove_reactions");
    __name2(update_effect, "update_effect");
    __name2(get, "get");
    __name2(reconnect, "reconnect");
    __name2(depends_on_old_values, "depends_on_old_values");
    __name2(untrack, "untrack");
    STATUS_MASK = -7169;
    __name2(set_signal_status, "set_signal_status");
    DOM_BOOLEAN_ATTRIBUTES = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "indeterminate",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
      "webkitdirectory",
      "defer",
      "disablepictureinpicture",
      "disableremoteplayback"
    ];
    __name2(is_boolean_attribute, "is_boolean_attribute");
    PASSIVE_EVENTS = ["touchstart", "touchmove"];
    __name2(is_passive_event, "is_passive_event");
    replacements = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
    __name2(attr, "attr");
    __name2(clsx2, "clsx");
    whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
    __name2(to_class, "to_class");
    __name2(append_styles, "append_styles");
    __name2(to_css_name, "to_css_name");
    __name2(to_style, "to_style");
    __name2(subscribe_to_store, "subscribe_to_store");
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    EMPTY_COMMENT = `<!---->`;
    controller = null;
    __name2(abort, "abort");
    __name2(await_invalid, "await_invalid");
    Renderer = class _Renderer {
      static {
        __name(this, "_Renderer");
      }
      static {
        __name2(this, "Renderer");
      }
      /**
       * The contents of the renderer.
       * @type {RendererItem[]}
       */
      #out = [];
      /**
       * Any `onDestroy` callbacks registered during execution of this renderer.
       * @type {(() => void)[] | undefined}
       */
      #on_destroy = void 0;
      /**
       * Whether this renderer is a component body.
       * @type {boolean}
       */
      #is_component_body = false;
      /**
       * The type of string content that this renderer is accumulating.
       * @type {RendererType}
       */
      type;
      /** @type {Renderer | undefined} */
      #parent;
      /**
       * Asynchronous work associated with this renderer
       * @type {Promise<void> | undefined}
       */
      promise = void 0;
      /**
       * State which is associated with the content tree as a whole.
       * It will be re-exposed, uncopied, on all children.
       * @type {SSRState}
       * @readonly
       */
      global;
      /**
       * State that is local to the branch it is declared in.
       * It will be shallow-copied to all children.
       *
       * @type {{ select_value: string | undefined }}
       */
      local;
      /**
       * @param {SSRState} global
       * @param {Renderer | undefined} [parent]
       */
      constructor(global, parent) {
        this.#parent = parent;
        this.global = global;
        this.local = parent ? { ...parent.local } : { select_value: void 0 };
        this.type = parent ? parent.type : "body";
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      head(fn) {
        const head2 = new _Renderer(this.global, this);
        head2.type = "head";
        this.#out.push(head2);
        head2.child(fn);
      }
      /**
       * @param {Array<Promise<void>>} blockers
       * @param {(renderer: Renderer) => void} fn
       */
      async_block(blockers, fn) {
        this.#out.push(BLOCK_OPEN);
        this.async(blockers, fn);
        this.#out.push(BLOCK_CLOSE);
      }
      /**
       * @param {Array<Promise<void>>} blockers
       * @param {(renderer: Renderer) => void} fn
       */
      async(blockers, fn) {
        let callback = fn;
        if (blockers.length > 0) {
          const context2 = ssr_context;
          callback = /* @__PURE__ */ __name2((renderer) => {
            return Promise.all(blockers).then(() => {
              const previous_context = ssr_context;
              try {
                set_ssr_context(context2);
                return fn(renderer);
              } finally {
                set_ssr_context(previous_context);
              }
            });
          }, "callback");
        }
        this.child(callback);
      }
      /**
       * @param {Array<() => void>} thunks
       */
      run(thunks) {
        const context2 = ssr_context;
        let promise = Promise.resolve(thunks[0]());
        const promises = [promise];
        for (const fn of thunks.slice(1)) {
          promise = promise.then(() => {
            const previous_context = ssr_context;
            set_ssr_context(context2);
            try {
              return fn();
            } finally {
              set_ssr_context(previous_context);
            }
          });
          promises.push(promise);
        }
        return promises;
      }
      /**
       * Create a child renderer. The child renderer inherits the state from the parent,
       * but has its own content.
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       */
      child(fn) {
        const child = new _Renderer(this.global, this);
        this.#out.push(child);
        const parent = ssr_context;
        set_ssr_context({
          ...ssr_context,
          p: parent,
          c: null,
          r: child
        });
        const result = fn(child);
        set_ssr_context(parent);
        if (result instanceof Promise) {
          if (child.global.mode === "sync") {
            await_invalid();
          }
          result.catch(() => {
          });
          child.promise = result;
        }
        return child;
      }
      /**
       * Create a component renderer. The component renderer inherits the state from the parent,
       * but has its own content. It is treated as an ordering boundary for ondestroy callbacks.
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       * @param {Function} [component_fn]
       * @returns {void}
       */
      component(fn, component_fn) {
        push();
        const child = this.child(fn);
        child.#is_component_body = true;
        pop();
      }
      /**
       * @param {Record<string, any>} attrs
       * @param {(renderer: Renderer) => void} fn
       * @param {string | undefined} [css_hash]
       * @param {Record<string, boolean> | undefined} [classes]
       * @param {Record<string, string> | undefined} [styles]
       * @param {number | undefined} [flags]
       * @returns {void}
       */
      select(attrs, fn, css_hash, classes, styles, flags2) {
        const { value, ...select_attrs } = attrs;
        this.push(`<select${attributes(select_attrs, css_hash, classes, styles, flags2)}>`);
        this.child((renderer) => {
          renderer.local.select_value = value;
          fn(renderer);
        });
        this.push("</select>");
      }
      /**
       * @param {Record<string, any>} attrs
       * @param {string | number | boolean | ((renderer: Renderer) => void)} body
       * @param {string | undefined} [css_hash]
       * @param {Record<string, boolean> | undefined} [classes]
       * @param {Record<string, string> | undefined} [styles]
       * @param {number | undefined} [flags]
       */
      option(attrs, body2, css_hash, classes, styles, flags2) {
        this.#out.push(`<option${attributes(attrs, css_hash, classes, styles, flags2)}`);
        const close = /* @__PURE__ */ __name2((renderer, value, { head: head2, body: body22 }) => {
          if ("value" in attrs) {
            value = attrs.value;
          }
          if (value === this.local.select_value) {
            renderer.#out.push(" selected");
          }
          renderer.#out.push(`>${body22}</option>`);
          if (head2) {
            renderer.head((child) => child.push(head2));
          }
        }, "close");
        if (typeof body2 === "function") {
          this.child((renderer) => {
            const r3 = new _Renderer(this.global, this);
            body2(r3);
            if (this.global.mode === "async") {
              return r3.#collect_content_async().then((content) => {
                close(renderer, content.body.replaceAll("<!---->", ""), content);
              });
            } else {
              const content = r3.#collect_content();
              close(renderer, content.body.replaceAll("<!---->", ""), content);
            }
          });
        } else {
          close(this, body2, { body: body2 });
        }
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      title(fn) {
        const path = this.get_path();
        const close = /* @__PURE__ */ __name2((head2) => {
          this.global.set_title(head2, path);
        }, "close");
        this.child((renderer) => {
          const r3 = new _Renderer(renderer.global, renderer);
          fn(r3);
          if (renderer.global.mode === "async") {
            return r3.#collect_content_async().then((content) => {
              close(content.head);
            });
          } else {
            const content = r3.#collect_content();
            close(content.head);
          }
        });
      }
      /**
       * @param {string | (() => Promise<string>)} content
       */
      push(content) {
        if (typeof content === "function") {
          this.child(async (renderer) => renderer.push(await content()));
        } else {
          this.#out.push(content);
        }
      }
      /**
       * @param {() => void} fn
       */
      on_destroy(fn) {
        (this.#on_destroy ??= []).push(fn);
      }
      /**
       * @returns {number[]}
       */
      get_path() {
        return this.#parent ? [...this.#parent.get_path(), this.#parent.#out.indexOf(this)] : [];
      }
      /**
       * @deprecated this is needed for legacy component bindings
       */
      copy() {
        const copy = new _Renderer(this.global, this.#parent);
        copy.#out = this.#out.map((item) => item instanceof _Renderer ? item.copy() : item);
        copy.promise = this.promise;
        return copy;
      }
      /**
       * @param {Renderer} other
       * @deprecated this is needed for legacy component bindings
       */
      subsume(other) {
        if (this.global.mode !== other.global.mode) {
          throw new Error(
            "invariant: A renderer cannot switch modes. If you're seeing this, there's a compiler bug. File an issue!"
          );
        }
        this.local = other.local;
        this.#out = other.#out.map((item) => {
          if (item instanceof _Renderer) {
            item.subsume(item);
          }
          return item;
        });
        this.promise = other.promise;
        this.type = other.type;
      }
      get length() {
        return this.#out.length;
      }
      /**
       * Only available on the server and when compiling with the `server` option.
       * Takes a component and returns an object with `body` and `head` properties on it, which you can use to populate the HTML when server-rendering your app.
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} [options]
       * @returns {RenderOutput}
       */
      static render(component14, options2 = {}) {
        let sync;
        const result = (
          /** @type {RenderOutput} */
          {}
        );
        Object.defineProperties(result, {
          html: {
            get: /* @__PURE__ */ __name2(() => {
              return (sync ??= _Renderer.#render(component14, options2)).body;
            }, "get")
          },
          head: {
            get: /* @__PURE__ */ __name2(() => {
              return (sync ??= _Renderer.#render(component14, options2)).head;
            }, "get")
          },
          body: {
            get: /* @__PURE__ */ __name2(() => {
              return (sync ??= _Renderer.#render(component14, options2)).body;
            }, "get")
          },
          then: {
            value: (
              /**
               * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
               *
               * @template TResult1
               * @template [TResult2=never]
               * @param { (value: SyncRenderOutput) => TResult1 } onfulfilled
               * @param { (reason: unknown) => TResult2 } onrejected
               */
              /* @__PURE__ */ __name2((onfulfilled, onrejected) => {
                {
                  const result2 = sync ??= _Renderer.#render(component14, options2);
                  const user_result = onfulfilled({
                    head: result2.head,
                    body: result2.body,
                    html: result2.body
                  });
                  return Promise.resolve(user_result);
                }
              }, "value")
            )
          }
        });
        return result;
      }
      /**
       * Collect all of the `onDestroy` callbacks registered during rendering. In an async context, this is only safe to call
       * after awaiting `collect_async`.
       *
       * Child renderers are "porous" and don't affect execution order, but component body renderers
       * create ordering boundaries. Within a renderer, callbacks run in order until hitting a component boundary.
       * @returns {Iterable<() => void>}
       */
      *#collect_on_destroy() {
        for (const component14 of this.#traverse_components()) {
          yield* component14.#collect_ondestroy();
        }
      }
      /**
       * Performs a depth-first search of renderers, yielding the deepest components first, then additional components as we backtrack up the tree.
       * @returns {Iterable<Renderer>}
       */
      *#traverse_components() {
        for (const child of this.#out) {
          if (typeof child !== "string") {
            yield* child.#traverse_components();
          }
        }
        if (this.#is_component_body) {
          yield this;
        }
      }
      /**
       * @returns {Iterable<() => void>}
       */
      *#collect_ondestroy() {
        if (this.#on_destroy) {
          for (const fn of this.#on_destroy) {
            yield fn;
          }
        }
        for (const child of this.#out) {
          if (child instanceof _Renderer && !child.#is_component_body) {
            yield* child.#collect_ondestroy();
          }
        }
      }
      /**
       * Render a component. Throws if any of the children are performing asynchronous work.
       *
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
       * @returns {AccumulatedContent}
       */
      static #render(component14, options2) {
        var previous_context = ssr_context;
        try {
          const renderer = _Renderer.#open_render("sync", component14, options2);
          const content = renderer.#collect_content();
          return _Renderer.#close_render(content, renderer);
        } finally {
          abort();
          set_ssr_context(previous_context);
        }
      }
      /**
       * Render a component.
       *
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
       * @returns {Promise<AccumulatedContent>}
       */
      static async #render_async(component14, options2) {
        var previous_context = ssr_context;
        try {
          const renderer = _Renderer.#open_render("async", component14, options2);
          const content = await renderer.#collect_content_async();
          return _Renderer.#close_render(content, renderer);
        } finally {
          abort();
          set_ssr_context(previous_context);
        }
      }
      /**
       * Collect all of the code from the `out` array and return it as a string, or a promise resolving to a string.
       * @param {AccumulatedContent} content
       * @returns {AccumulatedContent}
       */
      #collect_content(content = { head: "", body: "" }) {
        for (const item of this.#out) {
          if (typeof item === "string") {
            content[this.type] += item;
          } else if (item instanceof _Renderer) {
            item.#collect_content(content);
          }
        }
        return content;
      }
      /**
       * Collect all of the code from the `out` array and return it as a string.
       * @param {AccumulatedContent} content
       * @returns {Promise<AccumulatedContent>}
       */
      async #collect_content_async(content = { head: "", body: "" }) {
        await this.promise;
        for (const item of this.#out) {
          if (typeof item === "string") {
            content[this.type] += item;
          } else if (item instanceof _Renderer) {
            await item.#collect_content_async(content);
          }
        }
        return content;
      }
      /**
       * @template {Record<string, any>} Props
       * @param {'sync' | 'async'} mode
       * @param {import('svelte').Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
       * @returns {Renderer}
       */
      static #open_render(mode, component14, options2) {
        const renderer = new _Renderer(
          new SSRState(mode, options2.idPrefix ? options2.idPrefix + "-" : "")
        );
        renderer.push(BLOCK_OPEN);
        if (options2.context) {
          push();
          ssr_context.c = options2.context;
          ssr_context.r = renderer;
        }
        component14(renderer, options2.props ?? {});
        if (options2.context) {
          pop();
        }
        renderer.push(BLOCK_CLOSE);
        return renderer;
      }
      /**
       * @param {AccumulatedContent} content
       * @param {Renderer} renderer
       */
      static #close_render(content, renderer) {
        for (const cleanup of renderer.#collect_on_destroy()) {
          cleanup();
        }
        let head2 = content.head + renderer.global.get_title();
        let body2 = content.body;
        for (const { hash: hash2, code } of renderer.global.css) {
          head2 += `<style id="${hash2}">${code}</style>`;
        }
        return {
          head: head2,
          body: body2
        };
      }
    };
    SSRState = class {
      static {
        __name(this, "SSRState");
      }
      static {
        __name2(this, "SSRState");
      }
      /** @readonly @type {'sync' | 'async'} */
      mode;
      /** @readonly @type {() => string} */
      uid;
      /** @readonly @type {Set<{ hash: string; code: string }>} */
      css = /* @__PURE__ */ new Set();
      /** @type {{ path: number[], value: string }} */
      #title = { path: [], value: "" };
      /**
       * @param {'sync' | 'async'} mode
       * @param {string} [id_prefix]
       */
      constructor(mode, id_prefix = "") {
        this.mode = mode;
        let uid = 1;
        this.uid = () => `${id_prefix}s${uid++}`;
      }
      get_title() {
        return this.#title.value;
      }
      /**
       * Performs a depth-first (lexicographic) comparison using the path. Rejects sets
       * from earlier than or equal to the current value.
       * @param {string} value
       * @param {number[]} path
       */
      set_title(value, path) {
        const current2 = this.#title.path;
        let i = 0;
        let l = Math.min(path.length, current2.length);
        while (i < l && path[i] === current2[i]) i += 1;
        if (path[i] === void 0) return;
        if (current2[i] === void 0 || path[i] > current2[i]) {
          this.#title.path = path;
          this.#title.value = value;
        }
      }
    };
    INVALID_ATTR_NAME_CHAR_REGEX = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    __name2(render, "render");
    __name2(head, "head");
    __name2(attributes, "attributes");
    __name2(stringify2, "stringify");
    __name2(attr_class, "attr_class");
    __name2(attr_style, "attr_style");
    __name2(store_get, "store_get");
    __name2(unsubscribe_stores, "unsubscribe_stores");
    __name2(slot, "slot");
    __name2(bind_props, "bind_props");
    __name2(ensure_array_like, "ensure_array_like");
  }
});
var require_cookie = __commonJS({
  "../../node_modules/cookie/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index14 = 0;
      while (index14 < str.length) {
        var eqIdx = str.indexOf("=", index14);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index14);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index14 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index14, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index14 = endIdx + 1;
      }
      return obj;
    }
    __name(parse3, "parse3");
    __name2(parse3, "parse");
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    __name(serialize2, "serialize2");
    __name2(serialize2, "serialize");
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    __name(decode, "decode");
    __name2(decode, "decode");
    function encode2(val) {
      return encodeURIComponent(val);
    }
    __name(encode2, "encode2");
    __name2(encode2, "encode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    __name(isDate, "isDate");
    __name2(isDate, "isDate");
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
    __name(tryDecode, "tryDecode");
    __name2(tryDecode, "tryDecode");
  }
});
var require_set_cookie = __commonJS({
  "../../node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isForbiddenKey(key2) {
      return typeof key2 !== "string" || key2 in {};
    }
    __name(isForbiddenKey, "isForbiddenKey");
    __name2(isForbiddenKey, "isForbiddenKey");
    function createNullObj() {
      return /* @__PURE__ */ Object.create(null);
    }
    __name(createNullObj, "createNullObj");
    __name2(createNullObj, "createNullObj");
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    __name(isNonEmptyString, "isNonEmptyString");
    __name2(isNonEmptyString, "isNonEmptyString");
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (isForbiddenKey(name)) {
        return null;
      }
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.",
          e3
        );
      }
      var cookie = createNullObj();
      cookie.name = name;
      cookie.value = value;
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        if (isForbiddenKey(key2)) {
          return;
        }
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          var n2 = parseInt(value2, 10);
          if (!Number.isNaN(n2)) cookie.maxAge = n2;
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else if (key2) {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    __name(parseString2, "parseString2");
    __name2(parseString2, "parseString");
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    __name(parseNameValuePair, "parseNameValuePair");
    __name2(parseNameValuePair, "parseNameValuePair");
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return createNullObj();
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        }).filter(Boolean);
      } else {
        var cookies = createNullObj();
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          if (cookie && !isForbiddenKey(cookie.name)) {
            cookies2[cookie.name] = cookie;
          }
          return cookies2;
        }, cookies);
      }
    }
    __name(parse3, "parse3");
    __name2(parse3, "parse");
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      __name(skipWhitespace, "skipWhitespace");
      __name2(skipWhitespace, "skipWhitespace");
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      __name(notSpecialChar, "notSpecialChar");
      __name2(notSpecialChar, "notSpecialChar");
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    __name(splitCookiesString2, "splitCookiesString2");
    __name2(splitCookiesString2, "splitCookiesString");
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});
var layout_ts_exports = {};
__export(layout_ts_exports, {
  load: /* @__PURE__ */ __name(() => load, "load"),
  prerender: /* @__PURE__ */ __name(() => prerender, "prerender"),
  ssr: /* @__PURE__ */ __name(() => ssr, "ssr")
});
var prerender;
var ssr;
var load;
var init_layout_ts = __esm({
  "../output/server/entries/pages/_layout.ts.js"() {
    init_checked_fetch();
    prerender = false;
    ssr = true;
    load = /* @__PURE__ */ __name2(async ({ fetch: fetch2 }) => {
      return {
        timestamp: Date.now()
      };
    }, "load");
  }
});
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: /* @__PURE__ */ __name(() => _layout, "default")
});
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="min-h-screen bg-gray-50"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
__name(_layout, "_layout");
var init_layout_svelte = __esm({
  "../output/server/entries/pages/_layout.svelte.js"() {
    init_checked_fetch();
    init_index2();
    __name2(_layout, "_layout");
  }
});
var __exports = {};
__export(__exports, {
  component: /* @__PURE__ */ __name(() => component, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports, "imports"),
  index: /* @__PURE__ */ __name(() => index, "index"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets, "stylesheets"),
  universal: /* @__PURE__ */ __name(() => layout_ts_exports, "universal"),
  universal_id: /* @__PURE__ */ __name(() => universal_id, "universal_id")
});
var index;
var component_cache;
var component;
var universal_id;
var imports;
var stylesheets;
var fonts;
var init__ = __esm({
  "../output/server/nodes/0.js"() {
    init_checked_fetch();
    init_layout_ts();
    index = 0;
    component = /* @__PURE__ */ __name2(async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default, "component");
    universal_id = "src/routes/+layout.ts";
    imports = ["_app/immutable/nodes/0.Boax_95_.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DpQGiFws.js", "_app/immutable/chunks/DQ3BFWhX.js"];
    stylesheets = ["_app/immutable/assets/0.C0bQySq7.css"];
    fonts = [];
  }
});
var is_legacy;
var init_state_svelte = __esm({
  "../output/server/chunks/state.svelte.js"() {
    init_checked_fetch();
    init_clsx();
    init_context();
    init_server();
    is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL("https://example.com")
      });
    }
  }
});
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: /* @__PURE__ */ __name(() => Error$1, "default")
});
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: /* @__PURE__ */ __name2(async () => false, "check")
    };
  }
}
__name(create_updated_store, "create_updated_store");
function context() {
  return getContext("__request__");
}
__name(context, "context");
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  });
}
__name(Error$1, "Error$1");
var stores;
var page$1;
var page;
var init_error_svelte = __esm({
  "../output/server/entries/fallbacks/error.svelte.js"() {
    init_checked_fetch();
    init_context();
    init_clsx();
    init_state_svelte();
    init_internal();
    init_exports2();
    init_utils2();
    init_chunks();
    init_server();
    __name2(create_updated_store, "create_updated_store");
    stores = {
      updated: /* @__PURE__ */ create_updated_store()
    };
    ({
      check: stores.updated.check
    });
    __name2(context, "context");
    page$1 = {
      get error() {
        return context().page.error;
      },
      get status() {
        return context().page.status;
      }
    };
    page = page$1;
    __name2(Error$1, "Error$1");
  }
});
var __exports2 = {};
__export(__exports2, {
  component: /* @__PURE__ */ __name(() => component2, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts2, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports2, "imports"),
  index: /* @__PURE__ */ __name(() => index2, "index"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets2, "stylesheets")
});
var index2;
var component_cache2;
var component2;
var imports2;
var stylesheets2;
var fonts2;
var init__2 = __esm({
  "../output/server/nodes/1.js"() {
    init_checked_fetch();
    index2 = 1;
    component2 = /* @__PURE__ */ __name2(async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default, "component");
    imports2 = ["_app/immutable/nodes/1.CFTAcZFD.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DpQGiFws.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/B5_C4Q4i.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: /* @__PURE__ */ __name(() => load2, "load")
});
var load2;
var init_page_server_ts = __esm({
  "../output/server/entries/pages/_page.server.ts.js"() {
    init_checked_fetch();
    load2 = /* @__PURE__ */ __name2(async ({ platform }) => {
      const db = platform?.env?.DB;
      if (!db) {
        return { user: null, eventTypes: [] };
      }
      const user = await db.prepare("SELECT id, name, slug, email, profile_image, brand_color FROM users LIMIT 1").first();
      if (!user) {
        return { user: null, eventTypes: [] };
      }
      const eventTypes = await db.prepare(
        `SELECT id, name, slug, duration_minutes as duration, description, is_active
			FROM event_types
			WHERE user_id = ? AND is_active = 1
			ORDER BY name ASC`
      ).bind(user.id).all();
      return {
        user: {
          name: user.name,
          slug: user.slug,
          profileImage: user.profile_image,
          brandColor: user.brand_color
        },
        eventTypes: eventTypes.results
      };
    }, "load");
  }
});
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: /* @__PURE__ */ __name(() => _page, "default")
});
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function stripHtml(html2) {
      return html2.replace(/<\/(p|div|li|br|h[1-6])>/gi, " ").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    }
    __name(stripHtml, "stripHtml");
    __name2(stripHtml, "stripHtml");
    if (data.user && data.eventTypes) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="min-h-screen bg-gray-50 py-12"><div class="max-w-2xl mx-auto px-4"><div class="text-center mb-10">`);
      if (data.user.profileImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", data.user.profileImage)}${attr("alt", data.user.name)} class="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl shadow-md"${attr_style(`background-color: ${stringify2(data.user.brandColor || "#3b82f6")}`)}>${escape_html(data.user.name?.charAt(0) || "U")}</div>`);
      }
      $$renderer2.push(`<!--]--> <h1 class="text-3xl font-bold text-gray-900 mb-2">${escape_html(data.user.name)}</h1> <p class="text-gray-600">Select a meeting type to book a time</p></div> `);
      if (data.eventTypes.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="space-y-4"><!--[-->`);
        const each_array = ensure_array_like(data.eventTypes);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let eventType = each_array[$$index];
          $$renderer2.push(`<a${attr("href", `/${stringify2(eventType.slug)}`)} class="block bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border-l-4 hover:translate-x-1"${attr_style(`border-left-color: ${stringify2(data.user.brandColor || "#3b82f6")}`)}><div class="flex justify-between items-start"><div class="flex-1 min-w-0"><h2 class="text-lg font-semibold text-gray-900 mb-1">${escape_html(eventType.name)}</h2> `);
          if (eventType.description) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="text-gray-600 text-sm line-clamp-2">${escape_html(stripHtml(eventType.description))}</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div> <div class="flex items-center text-sm font-medium ml-4 px-3 py-1 rounded-full"${attr_style(`background-color: ${stringify2(data.user.brandColor || "#3b82f6")}20; color: ${stringify2(data.user.brandColor || "#3b82f6")}`)}><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(eventType.duration)} min</span></div></div></a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="bg-white rounded-lg shadow-md p-12 text-center"><svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <h2 class="text-xl font-semibold text-gray-900 mb-2">No Available Meeting Types</h2> <p class="text-gray-600">Check back later.</p></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="text-center mb-16"><h1 class="text-5xl font-bold text-gray-900 mb-4">Meeting Scheduler</h1> <p class="text-xl text-gray-600 mb-8">Free, open-source meeting scheduling on Cloudflare</p> <div class="flex justify-center gap-4"><a href="/auth/login" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition">Login with Google</a> <a href="/dashboard" class="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition">Go to Dashboard</a></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"><div class="bg-white p-8 rounded-xl shadow-sm"><div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <h3 class="text-lg font-semibold mb-2 text-gray-900">Google Calendar Sync</h3> <p class="text-gray-600 text-sm">Automatically sync with your Google Calendar to prevent double bookings</p></div> <div class="bg-white p-8 rounded-xl shadow-sm"><div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-lg font-semibold mb-2 text-gray-900">Set Your Hours</h3> <p class="text-gray-600 text-sm">Define your availability and let people book meetings during those times</p></div> <div class="bg-white p-8 rounded-xl shadow-sm"><div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <h3 class="text-lg font-semibold mb-2 text-gray-900">Lightning Fast</h3> <p class="text-gray-600 text-sm">Built on Cloudflare's edge network for instant page loads worldwide</p></div></div> <div class="mt-20 max-w-3xl mx-auto"><h2 class="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2> <div class="space-y-6"><div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div> <div><h4 class="font-semibold text-gray-900 mb-1">Connect Your Google Calendar</h4> <p class="text-gray-600 text-sm">Log in with Google and grant access to your calendar</p></div></div> <div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div> <div><h4 class="font-semibold text-gray-900 mb-1">Set Your Availability</h4> <p class="text-gray-600 text-sm">Define your working hours and create event types (30 min meetings, consultations, etc.)</p></div></div> <div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div> <div><h4 class="font-semibold text-gray-900 mb-1">Share Your Link</h4> <p class="text-gray-600 text-sm">Get a personalized booking link to share with others</p></div></div> <div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div> <div><h4 class="font-semibold text-gray-900 mb-1">Get Booked</h4> <p class="text-gray-600 text-sm">When someone books a meeting, it's automatically added to your Google Calendar</p></div></div></div></div> <div class="mt-20 text-center"><a href="/auth/login" class="inline-flex items-center px-12 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition">Get Started - It's Free</a></div></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
__name(_page, "_page");
var init_page_svelte = __esm({
  "../output/server/entries/pages/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_context();
    __name2(_page, "_page");
  }
});
var __exports3 = {};
__export(__exports3, {
  component: /* @__PURE__ */ __name(() => component3, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts3, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports3, "imports"),
  index: /* @__PURE__ */ __name(() => index3, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets3, "stylesheets")
});
var index3;
var component_cache3;
var component3;
var server_id;
var imports3;
var stylesheets3;
var fonts3;
var init__3 = __esm({
  "../output/server/nodes/2.js"() {
    init_checked_fetch();
    init_page_server_ts();
    index3 = 2;
    component3 = /* @__PURE__ */ __name2(async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default, "component");
    server_id = "src/routes/+page.server.ts";
    imports3 = ["_app/immutable/nodes/2.Gr1M5ZmL.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/pK6643e_.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});
var page_server_ts_exports2 = {};
__export(page_server_ts_exports2, {
  load: /* @__PURE__ */ __name(() => load3, "load")
});
var load3;
var init_page_server_ts2 = __esm({
  "../output/server/entries/pages/_slug_/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    load3 = /* @__PURE__ */ __name2(async ({ params, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const slug = params.slug;
      const db = env2.DB;
      try {
        const user = await db.prepare("SELECT id, slug, name, profile_image, brand_color, settings, outlook_refresh_token FROM users LIMIT 1").first();
        if (!user) {
          throw error(404, "User not found");
        }
        const eventType = await db.prepare(
          "SELECT id, name, slug, duration_minutes as duration, description, is_active, cover_image, invite_calendar FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1"
        ).bind(user.id, slug).first();
        if (!eventType) {
          throw error(404, "Event type not found");
        }
        let userSettings = {};
        try {
          userSettings = user.settings ? JSON.parse(user.settings) : {};
        } catch {
        }
        const outlookConnected = !!user.outlook_refresh_token;
        const outlookConfigured = !!(env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET);
        let effectiveInviteCalendar = eventType.invite_calendar || userSettings.defaultInviteCalendar || "google";
        if (effectiveInviteCalendar === "outlook" && (!outlookConnected || !outlookConfigured)) {
          effectiveInviteCalendar = "google";
        }
        return {
          slug: eventType.slug,
          eventType: {
            ...eventType,
            invite_calendar: effectiveInviteCalendar
          },
          user: {
            name: user.name,
            profileImage: user.profile_image,
            brandColor: user.brand_color || "#3b82f6",
            timeFormat: userSettings.timeFormat || "12h"
          }
        };
      } catch (err) {
        console.error("Booking page load error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to load booking page");
      }
    }, "load");
  }
});
function createFormatters(options2 = {}) {
  const { timeFormat = "12h", timezone } = options2;
  const use12Hour = timeFormat === "12h";
  const formatDate = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: timezone
    }).format(date);
  }, "formatDate");
  const formatTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZone: timezone
    }).format(date);
  }, "formatTime");
  const formatTimeWithZone = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  }, "formatTimeWithZone");
  const formatDateTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  }, "formatDateTime");
  const formatShortDate = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: timezone
    }).format(date);
  }, "formatShortDate");
  const formatShortDateTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZone: timezone
    }).format(date);
  }, "formatShortDateTime");
  const formatCompactDateTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(date);
  }, "formatCompactDateTime");
  const formatMonthYear = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric"
    }).format(date);
  }, "formatMonthYear");
  return {
    formatDate,
    formatTime,
    formatTimeWithZone,
    formatDateTime,
    formatShortDate,
    formatShortDateTime,
    formatCompactDateTime,
    formatMonthYear
  };
}
__name(createFormatters, "createFormatters");
function formatDateLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
__name(formatDateLocal, "formatDateLocal");
function formatSelectedDate(dateStr) {
  const date = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}
__name(formatSelectedDate, "formatSelectedDate");
var init_dateFormatters = __esm({
  "../output/server/chunks/dateFormatters.js"() {
    init_checked_fetch();
    __name2(createFormatters, "createFormatters");
    __name2(formatDateLocal, "formatDateLocal");
    __name2(formatSelectedDate, "formatSelectedDate");
  }
});
function getTimezoneLabel(tz) {
  return TIMEZONE_LABELS[tz] || tz.replace(/_/g, " ").split("/").pop() || tz;
}
__name(getTimezoneLabel, "getTimezoneLabel");
function detectTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "Europe/Amsterdam";
  }
}
__name(detectTimezone, "detectTimezone");
function getCurrentTime(tz, use12Hour = true) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12Hour,
      timeZone: tz
    }).format(/* @__PURE__ */ new Date());
  } catch {
    return "--:--";
  }
}
__name(getCurrentTime, "getCurrentTime");
function getTimezoneWithTime(tz, use12Hour = true) {
  return `${getTimezoneLabel(tz)} (${getCurrentTime(tz, use12Hour)})`;
}
__name(getTimezoneWithTime, "getTimezoneWithTime");
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 59, g: 130, b: 246 };
}
__name(hexToRgb, "hexToRgb");
function adjustBrightness(hex, percent) {
  const { r: r3, g, b } = hexToRgb(hex);
  const adjust = /* @__PURE__ */ __name2((c2) => Math.min(255, Math.max(0, Math.round(c2 + 255 * percent / 100))), "adjust");
  return `rgb(${adjust(r3)}, ${adjust(g)}, ${adjust(b)})`;
}
__name(adjustBrightness, "adjustBrightness");
function adjustBrightnessHex(hex, percent) {
  const { r: r3, g, b } = hexToRgb(hex);
  const adjust = /* @__PURE__ */ __name2((c2) => Math.min(255, Math.max(0, Math.round(c2 + 255 * percent / 100))), "adjust");
  const toHex = /* @__PURE__ */ __name2((c2) => c2.toString(16).padStart(2, "0"), "toHex");
  return `#${toHex(adjust(r3))}${toHex(adjust(g))}${toHex(adjust(b))}`;
}
__name(adjustBrightnessHex, "adjustBrightnessHex");
function createBrandColors(brandColor) {
  return {
    base: brandColor,
    rgb: hexToRgb(brandColor),
    light: adjustBrightness(brandColor, 40),
    lighter: adjustBrightness(brandColor, 60),
    dark: adjustBrightness(brandColor, -15),
    darkHex: adjustBrightnessHex(brandColor, -20)
  };
}
__name(createBrandColors, "createBrandColors");
function BookingCalendar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      currentMonth,
      selectedDate,
      availableDates,
      brandColor,
      brandLighter,
      brandDark,
      onDateSelect,
      onPrevMonth,
      onNextMonth
    } = $$props;
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const calendarDays = /* @__PURE__ */ __name2(() => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startPadding = (firstDay.getDay() + 6) % 7;
      const days = [];
      for (let i = 0; i < startPadding; i++) {
        const date = new Date(year, month, i - startPadding + 1);
        days.push({
          date,
          isCurrentMonth: false,
          isAvailable: false,
          dateStr: formatDateLocal(date)
        });
      }
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        const dateStr = formatDateLocal(date);
        const isAvailable = date >= today && date <= new Date(today.getTime() + 60 * 24 * 60 * 60 * 1e3);
        days.push({ date, isCurrentMonth: true, isAvailable, dateStr });
      }
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month + 1, i);
        days.push({
          date,
          isCurrentMonth: false,
          isAvailable: false,
          dateStr: formatDateLocal(date)
        });
      }
      return days;
    }, "calendarDays");
    function formatMonthYear(date) {
      return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    }
    __name(formatMonthYear, "formatMonthYear");
    __name2(formatMonthYear, "formatMonthYear");
    $$renderer2.push(`<div><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-medium text-gray-900">${escape_html(formatMonthYear(currentMonth))}</h3> <div class="flex gap-2"><button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Previous month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Next month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div> <div class="grid grid-cols-7 gap-1 mb-2"><!--[-->`);
    const each_array = ensure_array_like(weekDays);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let day = each_array[$$index];
      $$renderer2.push(`<div class="text-center text-xs font-medium text-gray-500 py-2">${escape_html(day)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-7 gap-1"><!--[-->`);
    const each_array_1 = ensure_array_like(calendarDays());
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let day = each_array_1[$$index_1];
      const hasSlots = availableDates.has(day.dateStr);
      const isClickable = day.isAvailable && hasSlots;
      const isSelected = selectedDate === day.dateStr;
      $$renderer2.push(`<button type="button"${attr("disabled", !isClickable, true)}${attr_class(`aspect-square flex items-center justify-center text-sm rounded-full transition relative ${stringify2(!day.isCurrentMonth ? "text-gray-300" : "")} ${stringify2(isClickable && !isSelected ? "font-semibold cursor-pointer" : "")} ${stringify2(day.isAvailable && !hasSlots && day.isCurrentMonth ? "text-gray-400" : "")} ${stringify2(!day.isAvailable && day.isCurrentMonth ? "text-gray-300 cursor-not-allowed" : "")} ${stringify2(isSelected ? "text-white" : "")}`)}${attr_style(`${stringify2(isClickable && !isSelected ? `background-color: ${brandLighter}; color: ${brandDark}` : "")}${stringify2(isSelected ? `background-color: ${brandColor}` : "")}`)}>${escape_html(day.date.getDate())}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
__name(BookingCalendar, "BookingCalendar");
var TIMEZONE_LABELS;
var init_BookingCalendar = __esm({
  "../output/server/chunks/BookingCalendar.js"() {
    init_checked_fetch();
    init_index2();
    init_dateFormatters();
    init_context();
    TIMEZONE_LABELS = {
      "America/Los_Angeles": "Pacific Time",
      "America/Denver": "Mountain Time",
      "America/Chicago": "Central Time",
      "America/New_York": "Eastern Time",
      "America/Anchorage": "Alaska Time",
      "America/Phoenix": "Arizona Time",
      "Pacific/Honolulu": "Hawaii Time",
      "America/St_Johns": "Newfoundland Time",
      "America/Halifax": "Atlantic Time",
      "America/Sao_Paulo": "Brasilia Time",
      "America/Buenos_Aires": "Buenos Aires Time",
      "America/Mexico_City": "Mexico City Time",
      "Europe/London": "UK, Ireland Time",
      "Europe/Paris": "Central European Time",
      "Europe/Amsterdam": "Amsterdam Time",
      "Europe/Berlin": "Berlin Time",
      "Europe/Helsinki": "Eastern European Time",
      "Europe/Moscow": "Moscow Time",
      "Europe/Istanbul": "Turkey Time",
      "Asia/Dubai": "Dubai Time",
      "Asia/Kolkata": "India Time",
      "Asia/Bangkok": "Indochina Time",
      "Asia/Singapore": "Singapore Time",
      "Asia/Shanghai": "China Time",
      "Asia/Hong_Kong": "Hong Kong Time",
      "Asia/Tokyo": "Japan Time",
      "Asia/Seoul": "Seoul Time",
      "Australia/Sydney": "Sydney Time",
      "Australia/Brisbane": "Brisbane Time",
      "Australia/Perth": "Perth Time",
      "Pacific/Auckland": "Auckland Time",
      "UTC": "UTC Time"
    };
    __name2(getTimezoneLabel, "getTimezoneLabel");
    __name2(detectTimezone, "detectTimezone");
    __name2(getCurrentTime, "getCurrentTime");
    __name2(getTimezoneWithTime, "getTimezoneWithTime");
    __name2(hexToRgb, "hexToRgb");
    __name2(adjustBrightness, "adjustBrightness");
    __name2(adjustBrightnessHex, "adjustBrightnessHex");
    __name2(createBrandColors, "createBrandColors");
    __name2(BookingCalendar, "BookingCalendar");
  }
});
function Footer($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<div${attr_class(`text-center ${stringify2(className)}`)}><a href="https://github.com/dennisklappe/CloudMeet" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 hover:text-gray-500 transition">Powered by CloudMeet</a></div>`);
}
__name(Footer, "Footer");
var init_Footer = __esm({
  "../output/server/chunks/Footer.js"() {
    init_checked_fetch();
    init_index2();
    __name2(Footer, "Footer");
  }
});
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: /* @__PURE__ */ __name(() => _page2, "default")
});
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
__name(html, "html");
function TimeSlotList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      selectedDate,
      availableSlots,
      selectedSlot,
      loading,
      brandColor,
      formatTime
    } = $$props;
    $$renderer2.push(`<div class="w-52 ml-6 border-l border-gray-200 pl-6 flex flex-col" style="max-height: 400px;"><h3 class="text-sm font-medium text-gray-500 mb-4 flex-shrink-0">${escape_html(formatSelectedDate(selectedDate).split(",")[0])}</h3> `);
    if (loading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent"${attr_style(`border-color: ${stringify2(brandColor)}; border-top-color: transparent`)}></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (availableSlots.length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-sm text-gray-500 py-4">No available times</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="space-y-2 overflow-y-auto flex-1 pr-2 pb-2 scrollbar-thin"><!--[-->`);
        const each_array = ensure_array_like(availableSlots);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let slot2 = each_array[$$index];
          if (selectedSlot === slot2) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="flex gap-2"><button type="button" class="flex-1 py-2.5 px-3 border-2 border-gray-900 bg-gray-900 text-white rounded-lg text-sm font-semibold">${escape_html(formatTime(slot2.start))}</button> <button type="button" class="flex-1 py-2.5 px-3 text-white rounded-lg text-sm font-semibold transition"${attr_style(`background-color: ${stringify2(brandColor)}`)}>Next</button></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<button type="button" class="w-full py-2.5 px-3 border-2 rounded-lg text-sm font-semibold transition"${attr_style(`border-color: ${stringify2(brandColor)}; color: ${stringify2(brandColor)}`)}>${escape_html(formatTime(slot2.start))}</button>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
__name(TimeSlotList, "TimeSlotList");
function BookingForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      bookingForm = void 0,
      bookingStatus,
      bookingError,
      brandColor,
      brandDark,
      onSubmit
    } = $$props;
    $$renderer2.push(`<div class="max-w-md"><h2 class="text-xl font-semibold text-gray-900 mb-6">Enter Details</h2> `);
    if (bookingError) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">${escape_html(bookingError)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <form class="space-y-5"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label> <input type="text" id="name"${attr("value", bookingForm.name)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none"${attr_style(`--tw-ring-color: ${stringify2(brandColor)}`)}/></div> <div><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label> <input type="email" id="email"${attr("value", bookingForm.email)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none"${attr_style(`--tw-ring-color: ${stringify2(brandColor)}`)}/></div> <div><label for="notes" class="block text-sm font-medium text-gray-700 mb-2">Please share anything that will help prepare for our meeting.</label> <textarea id="notes" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none resize-none"${attr_style(`--tw-ring-color: ${stringify2(brandColor)}`)}>`);
    const $$body = escape_html(bookingForm.notes);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></div> <button type="submit"${attr("disabled", bookingStatus === "submitting", true)} class="w-full text-white py-3 px-6 rounded-full font-semibold transition disabled:opacity-50"${attr_style(`background-color: ${stringify2(brandColor)}`)}>${escape_html(bookingStatus === "submitting" ? "Scheduling..." : "Schedule Event")}</button></form></div>`);
    bind_props($$props, { bookingForm });
  });
}
__name(BookingForm, "BookingForm");
function BookingSuccess($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      eventName,
      selectedDate,
      selectedSlot,
      meetingUrl,
      meetingType = "google_meet",
      brandColor,
      formatTimeRange,
      formatSelectedDate: formatSelectedDate2
    } = $$props;
    const meetingLabel = meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
    $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-md w-full mx-2"><div class="text-center"><div class="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"><svg class="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h1 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">You are scheduled</h1> <p class="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">A calendar invitation has been sent to your email address.</p> <div class="bg-gray-50 rounded-lg p-4 sm:p-6 text-left mb-6"><h3 class="font-semibold text-gray-900 mb-3 sm:mb-4">${escape_html(eventName)}</h3> <div class="space-y-3 text-sm"><div class="flex items-start gap-3"><svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <div><p class="text-gray-900">${escape_html(formatTimeRange(selectedSlot.start, selectedSlot.end))}</p> <p class="text-gray-500">${escape_html(formatSelectedDate2(selectedDate))}</p></div></div> `);
    if (meetingUrl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-start gap-3"><svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <a${attr("href", meetingUrl)} target="_blank" class="hover:underline break-all"${attr_style(`color: ${stringify2(brandColor)}`)}>${escape_html(meetingLabel)}</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
  });
}
__name(BookingSuccess, "BookingSuccess");
function EventSidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      user,
      eventType,
      selectedDate,
      selectedSlot,
      brandColor,
      formatTime
    } = $$props;
    let sanitizedDescription = "";
    const meetingLabel = eventType?.invite_calendar === "outlook" ? "Microsoft Teams" : "Google Meet";
    $$renderer2.push(`<div class="w-72 border-r border-gray-200 flex flex-col flex-shrink-0">`);
    if (eventType?.cover_image) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="p-6 pb-4 flex justify-center"><img${attr("src", eventType.cover_image)} alt="" class="max-h-16 w-auto object-contain"/></div> <div class="border-b border-gray-200 mx-6"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-1 p-6"><div class="mb-6">`);
    if (user?.profileImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", user.profileImage)}${attr("alt", user.name)} class="w-12 h-12 rounded-full object-cover mb-3"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-3"${attr_style(`background-color: ${stringify2(brandColor)}`)}>${escape_html(user?.name?.charAt(0) || "M")}</div>`);
    }
    $$renderer2.push(`<!--]--> <p class="text-sm font-medium text-gray-600 mb-1">${escape_html(user?.name || "Host")}</p> <h1 class="text-2xl font-bold text-gray-900">${escape_html(eventType?.name || "Meeting")}</h1></div> <div class="space-y-4 text-sm text-gray-600"><div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(eventType?.duration)} min</span></div> <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <span>${escape_html(meetingLabel)}</span></div></div> `);
    if (eventType?.description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><div class="text-sm text-gray-600 prose prose-sm max-w-none [&amp;_p]:my-2 [&amp;_ul]:my-2 [&amp;_ol]:my-2 [&amp;_li]:my-1">${html(sanitizedDescription)}</div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (selectedDate && selectedSlot) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><div class="flex items-center gap-3 text-sm"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <div><p class="font-medium text-gray-900">${escape_html(formatTime(selectedSlot.start))} - ${escape_html(formatTime(selectedSlot.end))}</p> <p class="text-gray-500">${escape_html(formatSelectedDate(selectedDate))}</p></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
__name(EventSidebar, "EventSidebar");
function _page2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let sanitizedDescription = "";
    const brandColor = data.user?.brandColor || "#3b82f6";
    const colors = createBrandColors(brandColor);
    let selectedDate = null;
    let selectedSlot = null;
    let availableSlots = [];
    let loading = false;
    let showForm = false;
    let bookingForm = { name: "", email: "", notes: "" };
    let bookingStatus = "idle";
    let bookingError = "";
    let meetingUrl = null;
    let meetingType = "google_meet";
    let availableDates = /* @__PURE__ */ new Set();
    let mobileStep = "calendar";
    let selectedTimezone = detectTimezone();
    let currentMonth = /* @__PURE__ */ new Date();
    const use12Hour = data.user?.timeFormat !== "24h";
    function formatTime(isoStr) {
      const date = new Date(isoStr);
      return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: use12Hour,
        timeZone: selectedTimezone
      }).format(date);
    }
    __name(formatTime, "formatTime");
    __name2(formatTime, "formatTime");
    function formatTimeRange(start, end) {
      return `${formatTime(start)} - ${formatTime(end)}`;
    }
    __name(formatTimeRange, "formatTimeRange");
    __name2(formatTimeRange, "formatTimeRange");
    function formatShortDate(dateStr) {
      const date = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
      return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(date);
    }
    __name(formatShortDate, "formatShortDate");
    __name2(formatShortDate, "formatShortDate");
    function formatMonthYear(date) {
      return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    }
    __name(formatMonthYear, "formatMonthYear");
    __name2(formatMonthYear, "formatMonthYear");
    const calendarDays = /* @__PURE__ */ __name2(() => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startPadding = (firstDay.getDay() + 6) % 7;
      const days = [];
      for (let i = 0; i < startPadding; i++) {
        const date = new Date(year, month, i - startPadding + 1);
        days.push({
          date,
          isCurrentMonth: false,
          isAvailable: false,
          dateStr: formatDateLocal(date)
        });
      }
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        const dateStr = formatDateLocal(date);
        const isAvailable = date >= today && date <= new Date(today.getTime() + 60 * 24 * 60 * 60 * 1e3);
        days.push({ date, isCurrentMonth: true, isAvailable, dateStr });
      }
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month + 1, i);
        days.push({
          date,
          isCurrentMonth: false,
          isAvailable: false,
          dateStr: formatDateLocal(date)
        });
      }
      return days;
    }, "calendarDays");
    function prevMonth() {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      fetchMonthAvailability();
    }
    __name(prevMonth, "prevMonth");
    __name2(prevMonth, "prevMonth");
    function nextMonth() {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      fetchMonthAvailability();
    }
    __name(nextMonth, "nextMonth");
    __name2(nextMonth, "nextMonth");
    async function fetchMonthAvailability() {
      try {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth() + 1;
        const monthStr = `${year}-${String(month).padStart(2, "0")}`;
        const response = await fetch(`/api/availability/month?event=${data.slug}&month=${monthStr}`);
        if (!response.ok) throw new Error("Failed to fetch availability");
        const result = await response.json();
        availableDates = new Set(result.availableDates || []);
      } catch (error2) {
        console.error("Error fetching month availability:", error2);
        availableDates = /* @__PURE__ */ new Set();
      } finally {
      }
    }
    __name(fetchMonthAvailability, "fetchMonthAvailability");
    __name2(fetchMonthAvailability, "fetchMonthAvailability");
    async function handleDateSelect(dateStr) {
      selectedDate = dateStr;
      selectedSlot = null;
      showForm = false;
      loading = true;
      mobileStep = "times";
      try {
        const response = await fetch(`/api/availability?event=${data.slug}&date=${dateStr}`);
        if (!response.ok) throw new Error("Failed to fetch availability");
        const result = await response.json();
        availableSlots = result.slots || [];
      } catch (error2) {
        console.error("Error fetching availability:", error2);
        availableSlots = [];
      } finally {
        loading = false;
      }
    }
    __name(handleDateSelect, "handleDateSelect");
    __name2(handleDateSelect, "handleDateSelect");
    async function handleSubmit(e3) {
      e3.preventDefault();
      bookingStatus = "submitting";
      bookingError = "";
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventSlug: data.slug,
            startTime: selectedSlot?.start,
            endTime: selectedSlot?.end,
            attendeeName: bookingForm.name,
            attendeeEmail: bookingForm.email,
            notes: bookingForm.notes,
            timezone: selectedTimezone
          })
        });
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || "Failed to create booking");
        }
        const result = await response.json();
        meetingUrl = result.meetingUrl || null;
        meetingType = result.meetingType || "google_meet";
        bookingStatus = "success";
      } catch (error2) {
        console.error("Booking error:", error2);
        bookingError = error2.message || "Failed to create booking";
        bookingStatus = "error";
      }
    }
    __name(handleSubmit, "handleSubmit");
    __name2(handleSubmit, "handleSubmit");
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("jot9ci", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(data.eventType?.name || "Book a Meeting")}</title>`);
        });
        $$renderer4.push(`<link rel="icon" type="image/svg+xml"${attr("href", `data:image/svg+xml,${stringify2(encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:${brandColor};stop-opacity:1'/><stop offset='100%' style='stop-color:${colors.darkHex};stop-opacity:1'/></linearGradient></defs><circle cx='16' cy='16' r='15' fill='url(%23grad)'/><rect x='7' y='9' width='18' height='15' rx='2' fill='white' opacity='0.95'/><rect x='7' y='9' width='18' height='5' rx='2' fill='white'/><rect x='7' y='12' width='18' height='2' fill='${brandColor}'/><rect x='10' y='6' width='2.5' height='5' rx='1' fill='white'/><rect x='19.5' y='6' width='2.5' height='5' rx='1' fill='white'/><circle cx='16' cy='18' r='4' fill='none' stroke='${colors.darkHex}' stroke-width='1.5'/><line x1='16' y1='18' x2='16' y2='16' stroke='${colors.darkHex}' stroke-width='1.5' stroke-linecap='round'/><line x1='16' y1='18' x2='18' y2='18' stroke='${colors.darkHex}' stroke-width='1.5' stroke-linecap='round'/></svg>`))}`)}/>`);
      });
      $$renderer3.push(`<div class="min-h-screen bg-white md:bg-gray-100 flex flex-col items-center md:justify-center md:p-4"${attr_style(`--brand-color: ${stringify2(brandColor)}; --brand-light: ${stringify2(colors.light)}; --brand-lighter: ${stringify2(colors.lighter)}; --brand-dark: ${stringify2(colors.dark)}; --brand-rgb: ${stringify2(colors.rgb.r)}, ${stringify2(colors.rgb.g)}, ${stringify2(colors.rgb.b)};`)}>`);
      if (bookingStatus === "success") {
        $$renderer3.push("<!--[-->");
        BookingSuccess($$renderer3, {
          eventName: data.eventType?.name || "Meeting",
          selectedDate,
          selectedSlot,
          meetingUrl,
          meetingType,
          brandColor,
          formatTimeRange,
          formatSelectedDate
        });
        $$renderer3.push(`<!----> `);
        Footer($$renderer3, { class: "mt-6" });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="md:hidden min-h-screen w-full bg-white">`);
        if (data.eventType?.cover_image) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 pt-6 flex justify-center"><img${attr("src", data.eventType.cover_image)} alt="" class="max-h-16 w-auto object-contain"/></div> <div class="border-b border-gray-200 mx-6 mt-4"></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep !== "calendar") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 py-4"><button class="flex items-center gap-2 text-gray-600 hover:text-gray-900" aria-label="Go back"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> <span class="text-sm">Back</span></button></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep === "calendar") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex flex-col items-center pt-8 pb-6 px-6">`);
          if (data.user?.profileImage) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<img${attr("src", data.user.profileImage)}${attr("alt", data.user.name)} class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"/>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div class="w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold text-3xl border-4 border-white shadow-lg" style="background-color: var(--brand-color)">${escape_html(data.user?.name?.charAt(0) || "M")}</div>`);
          }
          $$renderer3.push(`<!--]--> <p class="mt-4 text-base font-semibold text-gray-600">${escape_html(data.user?.name || "Host")}</p></div> <div class="px-6 pb-5"><h1 class="text-2xl font-bold text-gray-900 text-center">${escape_html(data.eventType?.name || "Meeting")}</h1></div> <div class="px-6 pb-5"><ul class="space-y-3 text-sm text-gray-600"><li class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(data.eventType?.duration)} min</span></li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <span>${escape_html(data.eventType?.invite_calendar === "outlook" ? "Microsoft Teams" : "Google Meet")}</span></li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <button type="button" class="flex items-center gap-1 hover:text-gray-900 transition"><span>${escape_html(getTimezoneWithTime(selectedTimezone, use12Hour))}</span> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></li></ul> `);
          {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> `);
          if (data.eventType?.description) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="px-6 pb-5 text-sm text-gray-600 prose prose-sm max-w-none">${html(sanitizedDescription)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <div class="border-b border-gray-200 mx-6 mb-6"></div> <div class="px-6 pb-8"><h2 class="text-lg font-semibold text-gray-900 mb-5 text-center">Select a Date &amp; Time</h2> <div class="flex items-center justify-between mb-4"><button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Previous month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 class="text-base font-semibold text-gray-900">${escape_html(formatMonthYear(currentMonth))}</h3> <button class="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Next month"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2"><!--[-->`);
          const each_array = ensure_array_like(weekDays);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let day = each_array[$$index];
            $$renderer3.push(`<div class="text-center text-xs font-medium text-gray-500 py-2">${escape_html(day)}</div>`);
          }
          $$renderer3.push(`<!--]--></div> <div class="grid grid-cols-7 gap-1"><!--[-->`);
          const each_array_1 = ensure_array_like(calendarDays());
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let day = each_array_1[$$index_1];
            const hasSlots = availableDates.has(day.dateStr);
            const isClickable = day.isAvailable && hasSlots;
            const isSelected = selectedDate === day.dateStr;
            $$renderer3.push(`<button type="button"${attr("disabled", !isClickable, true)}${attr_class(`aspect-square flex items-center justify-center text-sm rounded-full transition ${stringify2(!day.isCurrentMonth ? "text-gray-300" : "")} ${stringify2(isClickable && !isSelected ? "font-semibold" : "")} ${stringify2(day.isAvailable && !hasSlots && day.isCurrentMonth ? "text-gray-400" : "")} ${stringify2(!day.isAvailable && day.isCurrentMonth ? "text-gray-300" : "")} ${stringify2(isSelected ? "text-white" : "")}`)}${attr_style(`${stringify2(isClickable && !isSelected ? `background-color: var(--brand-lighter); color: var(--brand-dark)` : "")}${stringify2(isSelected ? `background-color: var(--brand-color)` : "")}`)}>${escape_html(day.date.getDate())}</button>`);
          }
          $$renderer3.push(`<!--]--></div></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep === "times") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 pb-8"><h2 class="text-lg font-semibold text-gray-900 mb-2 text-center">Select a Time</h2> <p class="text-sm text-gray-500 text-center mb-6">${escape_html(selectedDate ? formatSelectedDate(selectedDate) : "")}</p> `);
          if (loading) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent" style="border-color: var(--brand-color); border-top-color: transparent;"></div></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (availableSlots.length === 0) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<p class="text-sm text-gray-500 py-4 text-center">No available times for this date</p>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<div class="grid grid-cols-2 gap-3"><!--[-->`);
              const each_array_2 = ensure_array_like(availableSlots);
              for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                let slot2 = each_array_2[$$index_2];
                const isSelected = selectedSlot === slot2;
                $$renderer3.push(`<button type="button"${attr_class(`py-3 px-4 border-2 rounded-lg text-sm font-semibold transition ${stringify2(isSelected ? "border-gray-900 bg-gray-900 text-white" : "")}`)}${attr_style(!isSelected ? `border-color: var(--brand-color); color: var(--brand-color)` : "")}>${escape_html(formatTime(slot2.start))}</button>`);
              }
              $$renderer3.push(`<!--]--></div> `);
              if (selectedSlot) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<button type="button" class="w-full mt-6 py-3 px-6 text-white rounded-full font-semibold transition" style="background-color: var(--brand-color)">Next</button>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (mobileStep === "form") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="px-6 pb-8">`);
          if (bookingError) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 mb-4 text-sm">${escape_html(bookingError)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <h2 class="text-lg font-semibold text-gray-900 mb-2 text-center">Enter Details</h2> <p class="text-sm text-gray-500 text-center mb-6">${escape_html(selectedDate ? formatShortDate(selectedDate) : "")}${escape_html(selectedSlot ? ` at ${formatTime(selectedSlot.start)}` : "")}</p> <form class="space-y-4"><div><label for="mobile-name" class="block text-sm font-medium text-gray-700 mb-1.5">Name *</label> <input type="text" id="mobile-name"${attr("value", bookingForm.name)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none text-sm" style="--tw-ring-color: var(--brand-color)"/></div> <div><label for="mobile-email" class="block text-sm font-medium text-gray-700 mb-1.5">Email *</label> <input type="email" id="mobile-email"${attr("value", bookingForm.email)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none text-sm" style="--tw-ring-color: var(--brand-color)"/></div> <div><label for="mobile-notes" class="block text-sm font-medium text-gray-700 mb-1.5">Additional notes</label> <textarea id="mobile-notes" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none resize-none text-sm" style="--tw-ring-color: var(--brand-color)">`);
          const $$body = escape_html(bookingForm.notes);
          if ($$body) {
            $$renderer3.push(`${$$body}`);
          }
          $$renderer3.push(`</textarea></div> <button type="submit"${attr("disabled", bookingStatus === "submitting", true)} class="w-full text-white py-3 px-6 rounded-full font-semibold transition disabled:opacity-50" style="background-color: var(--brand-color)">${escape_html(bookingStatus === "submitting" ? "Scheduling..." : "Schedule Event")}</button></form></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        Footer($$renderer3, { class: "px-6 pb-8" });
        $$renderer3.push(`<!----></div> <div class="hidden md:flex bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out"${attr_style(`width: ${stringify2(showForm ? "700px" : selectedDate ? "920px" : "650px")}`)}>`);
        EventSidebar($$renderer3, {
          user: data.user,
          eventType: data.eventType,
          selectedDate,
          selectedSlot,
          brandColor,
          formatTime
        });
        $$renderer3.push(`<!----> <div class="flex-1 p-6">`);
        if (bookingError) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 max-w-2xl">${escape_html(bookingError)}</div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showForm) {
          $$renderer3.push("<!--[-->");
          BookingForm($$renderer3, {
            bookingStatus,
            bookingError,
            brandColor,
            brandDark: colors.dark,
            onSubmit: handleSubmit,
            get bookingForm() {
              return bookingForm;
            },
            set bookingForm($$value) {
              bookingForm = $$value;
              $$settled = false;
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="flex items-stretch"><div class="w-80"><h2 class="text-xl font-semibold text-gray-900 mb-6">Select a Date &amp; Time</h2> `);
          BookingCalendar($$renderer3, {
            currentMonth,
            selectedDate,
            availableDates,
            brandColor,
            brandLighter: colors.lighter,
            brandDark: colors.dark,
            onDateSelect: handleDateSelect,
            onPrevMonth: prevMonth,
            onNextMonth: nextMonth
          });
          $$renderer3.push(`<!----> <div class="mt-6 relative"><p class="text-sm font-semibold text-gray-900 mb-2">Time zone</p> <button type="button" class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(getTimezoneWithTime(selectedTimezone, use12Hour))}</span> <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
          {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div></div> `);
          if (selectedDate) {
            $$renderer3.push("<!--[-->");
            TimeSlotList($$renderer3, {
              selectedDate,
              availableSlots,
              selectedSlot,
              loading,
              brandColor,
              formatTime
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--></div></div> `);
        Footer($$renderer3, { class: "mt-6" });
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    __name($$render_inner, "$$render_inner");
    __name2($$render_inner, "$$render_inner");
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
__name(_page2, "_page2");
var init_page_svelte2 = __esm({
  "../output/server/entries/pages/_slug_/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_BookingCalendar();
    init_Footer();
    init_dateFormatters();
    init_context();
    __name2(html, "html");
    __name2(TimeSlotList, "TimeSlotList");
    __name2(BookingForm, "BookingForm");
    __name2(BookingSuccess, "BookingSuccess");
    __name2(EventSidebar, "EventSidebar");
    __name2(_page2, "_page");
  }
});
var __exports4 = {};
__export(__exports4, {
  component: /* @__PURE__ */ __name(() => component4, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts4, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports4, "imports"),
  index: /* @__PURE__ */ __name(() => index4, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports2, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id2, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets4, "stylesheets")
});
var index4;
var component_cache4;
var component4;
var server_id2;
var imports4;
var stylesheets4;
var fonts4;
var init__4 = __esm({
  "../output/server/nodes/3.js"() {
    init_checked_fetch();
    init_page_server_ts2();
    index4 = 3;
    component4 = /* @__PURE__ */ __name2(async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default, "component");
    server_id2 = "src/routes/[slug]/+page.server.ts";
    imports4 = ["_app/immutable/nodes/3.CshrciRh.js", "_app/immutable/chunks/PPVm8Dsz.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/iqOSawfn.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/3dsfsjWY.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/-WyYYBJa.js", "_app/immutable/chunks/vr9HFtWH.js", "_app/immutable/chunks/BFozC6y8.js", "_app/immutable/chunks/BjWePiXU.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});
var auth_exports = {};
__export(auth_exports, {
  createSessionToken: /* @__PURE__ */ __name(() => createSessionToken, "createSessionToken"),
  exchangeCodeForTokens: /* @__PURE__ */ __name(() => exchangeCodeForTokens, "exchangeCodeForTokens"),
  getAuthUrl: /* @__PURE__ */ __name(() => getAuthUrl, "getAuthUrl"),
  getCurrentUser: /* @__PURE__ */ __name(() => getCurrentUser, "getCurrentUser"),
  getGoogleUserInfo: /* @__PURE__ */ __name(() => getGoogleUserInfo, "getGoogleUserInfo"),
  refreshAccessToken: /* @__PURE__ */ __name(() => refreshAccessToken, "refreshAccessToken"),
  verifySessionToken: /* @__PURE__ */ __name(() => verifySessionToken, "verifySessionToken")
});
function getAuthUrl(clientId, redirectUri, state2) {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" "),
    access_type: "offline",
    prompt: "consent",
    state: state2
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}
__name(getAuthUrl, "getAuthUrl");
async function exchangeCodeForTokens(code, clientId, clientSecret, redirectUri) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    })
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to exchange code for tokens: ${error2}`);
  }
  return response.json();
}
__name(exchangeCodeForTokens, "exchangeCodeForTokens");
async function refreshAccessToken(refreshToken, clientId, clientSecret) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token"
    })
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to refresh access token: ${error2}`);
  }
  return response.json();
}
__name(refreshAccessToken, "refreshAccessToken");
async function getGoogleUserInfo(accessToken) {
  const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!response.ok) {
    throw new Error("Failed to get user info");
  }
  return response.json();
}
__name(getGoogleUserInfo, "getGoogleUserInfo");
async function createSessionToken(userId, secret) {
  const payload = {
    userId,
    iat: Date.now()
  };
  const data = btoa(JSON.stringify(payload));
  const signature = await hashString(`${data}.${secret}`);
  return `${data}.${signature}`;
}
__name(createSessionToken, "createSessionToken");
async function verifySessionToken(token, secret) {
  try {
    const [data, signature] = token.split(".");
    const expectedSignature = await hashString(`${data}.${secret}`);
    if (signature !== expectedSignature) {
      return null;
    }
    const payload = JSON.parse(atob(data));
    const age = Date.now() - payload.iat;
    if (age > 7 * 24 * 60 * 60 * 1e3) {
      return null;
    }
    return { userId: payload.userId };
  } catch {
    return null;
  }
}
__name(verifySessionToken, "verifySessionToken");
async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(hashString, "hashString");
async function getCurrentUser(event) {
  const sessionToken = event.cookies.get("session");
  if (!sessionToken) {
    return null;
  }
  const jwtSecret = event.platform?.env?.JWT_SECRET;
  if (!jwtSecret) {
    return null;
  }
  const session = await verifySessionToken(sessionToken, jwtSecret);
  return session?.userId ?? null;
}
__name(getCurrentUser, "getCurrentUser");
var init_auth = __esm({
  "../output/server/chunks/auth.js"() {
    init_checked_fetch();
    __name2(getAuthUrl, "getAuthUrl");
    __name2(exchangeCodeForTokens, "exchangeCodeForTokens");
    __name2(refreshAccessToken, "refreshAccessToken");
    __name2(getGoogleUserInfo, "getGoogleUserInfo");
    __name2(createSessionToken, "createSessionToken");
    __name2(verifySessionToken, "verifySessionToken");
    __name2(hashString, "hashString");
    __name2(getCurrentUser, "getCurrentUser");
  }
});
async function listCalendars(accessToken) {
  const calendars = [];
  let pageToken;
  do {
    const url = new URL("https://www.googleapis.com/calendar/v3/users/me/calendarList");
    url.searchParams.set("minAccessRole", "freeBusyReader");
    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to list calendars: ${error2}`);
    }
    const data = await response.json();
    if (data.items) {
      calendars.push(...data.items);
    }
    pageToken = data.nextPageToken;
  } while (pageToken);
  return calendars;
}
__name(listCalendars, "listCalendars");
async function getBusyTimes(accessToken, startDate, endDate, calendarIds) {
  let idsToQuery = calendarIds;
  if (!idsToQuery || idsToQuery.length === 0) {
    const calendars = await listCalendars(accessToken);
    idsToQuery = calendars.map((c2) => c2.id);
  }
  const response = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      items: idsToQuery.map((id) => ({ id }))
    })
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to fetch busy times: ${error2}`);
  }
  const data = await response.json();
  const allBusy = [];
  for (const calendarId of idsToQuery) {
    const busy = data.calendars[calendarId]?.busy || [];
    allBusy.push(...busy);
  }
  return mergeBusySlots(allBusy);
}
__name(getBusyTimes, "getBusyTimes");
function mergeBusySlots(slots) {
  if (slots.length === 0) return [];
  const sorted = [...slots].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const current2 = sorted[i];
    const last = merged[merged.length - 1];
    if (new Date(current2.start) <= new Date(last.end)) {
      last.end = new Date(current2.end) > new Date(last.end) ? current2.end : last.end;
    } else {
      merged.push(current2);
    }
  }
  return merged;
}
__name(mergeBusySlots, "mergeBusySlots");
async function createCalendarEvent(accessToken, event, calendarId = "primary") {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=1`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }
  );
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to create calendar event: ${error2}`);
  }
  return response.json();
}
__name(createCalendarEvent, "createCalendarEvent");
async function cancelCalendarEvent(accessToken, eventId, calendarId = "primary") {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events/${eventId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to cancel calendar event: ${error2}`);
  }
}
__name(cancelCalendarEvent, "cancelCalendarEvent");
async function getValidAccessToken(db, userId, clientId, clientSecret) {
  const user = await db.prepare("SELECT google_refresh_token FROM users WHERE id = ?").bind(userId).first();
  if (!user?.google_refresh_token) {
    throw new Error("User not connected to Google Calendar");
  }
  const { refreshAccessToken: refreshAccessToken2 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
  const tokens = await refreshAccessToken2(user.google_refresh_token, clientId, clientSecret);
  return tokens.access_token;
}
__name(getValidAccessToken, "getValidAccessToken");
var init_google_calendar = __esm({
  "../output/server/chunks/google-calendar.js"() {
    init_checked_fetch();
    __name2(listCalendars, "listCalendars");
    __name2(getBusyTimes, "getBusyTimes");
    __name2(mergeBusySlots, "mergeBusySlots");
    __name2(createCalendarEvent, "createCalendarEvent");
    __name2(cancelCalendarEvent, "cancelCalendarEvent");
    __name2(getValidAccessToken, "getValidAccessToken");
  }
});
function createEmailFormatters(timeFormat = "12h", timezone) {
  const formatDate = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: timezone
    }).format(date);
  }, "formatDate");
  const formatTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: timeFormat === "12h",
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  }, "formatTime");
  const formatDateTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: timeFormat === "12h",
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  }, "formatDateTime");
  return { formatDate, formatTime, formatDateTime };
}
__name(createEmailFormatters, "createEmailFormatters");
function replaceSubjectVariables(subject, data) {
  const formatDate = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    }).format(date);
  }, "formatDate");
  const formatTime = /* @__PURE__ */ __name2((date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(date);
  }, "formatTime");
  return subject.replace(/{event_name}/g, data.eventName).replace(/{host_name}/g, data.hostName).replace(/{attendee_name}/g, data.attendeeName).replace(/{date}/g, formatDate(data.startTime)).replace(/{time}/g, formatTime(data.startTime));
}
__name(replaceSubjectVariables, "replaceSubjectVariables");
function generateBaseEmail(options2) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${options2.title}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
	<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
		<tr>
			<td align="center" style="padding: 40px 20px;">
				<table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<!-- Header -->
					<tr>
						<td style="padding: 40px 40px 20px; text-align: center; background: ${options2.headerGradient}; border-radius: 8px 8px 0 0;">
							${options2.headerContent}
						</td>
					</tr>

					<!-- Content -->
					<tr>
						<td style="padding: 40px;">
							${options2.bodyContent}
						</td>
					</tr>

					<!-- Footer -->
					<tr>
						<td style="padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
							<p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 18px; text-align: center;">
								${options2.footerContent}<br>
								Powered by <a href="https://github.com/dennisklappe/CloudMeet" style="color: #6b7280; text-decoration: none;">CloudMeet</a>
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
	`.trim();
}
__name(generateBaseEmail, "generateBaseEmail");
function generateMeetingDetailsCard(options2) {
  const { eventName, eventDescription, formattedDate, formattedTime, meetingUrl, meetingType = "google_meet", brandColor = "#3b82f6" } = options2;
  const meetingLabel = meetingType === "teams" ? "Microsoft Teams" : "Google Meet";
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
	<tr>
		<td style="padding: 24px;">
			<h2 style="margin: 0 0 16px; color: #111827; font-size: 18px; font-weight: 600;">Meeting Details</h2>

			<div style="margin-bottom: 12px;">
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
				<div style="color: #111827; font-size: 16px; font-weight: 500;">${eventName}</div>
				${eventDescription ? `<div style="color: #6b7280; font-size: 14px; margin-top: 4px;">${eventDescription}</div>` : ""}
			</div>

			<div style="margin-bottom: 12px;">
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Date</div>
				<div style="color: #111827; font-size: 16px; font-weight: 500;">${formattedDate}</div>
			</div>

			<div style="margin-bottom: 12px;">
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Time</div>
				<div style="color: #111827; font-size: 16px; font-weight: 500;">${formattedTime}</div>
			</div>

			${meetingUrl ? `
			<div>
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Location</div>
				<a href="${meetingUrl}" style="color: ${brandColor}; font-size: 16px; font-weight: 500; text-decoration: none;">${meetingLabel}</a>
			</div>
			` : ""}
		</td>
	</tr>
</table>
	`.trim();
}
__name(generateMeetingDetailsCard, "generateMeetingDetailsCard");
function generateAttendeeNotesCard(attendeeName, notes) {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d; margin-bottom: 30px;">
	<tr>
		<td style="padding: 20px;">
			<div style="color: #92400e; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Message from ${attendeeName}:</div>
			<div style="color: #78350f; font-size: 15px; line-height: 22px;">${notes}</div>
		</td>
	</tr>
</table>
	`.trim();
}
__name(generateAttendeeNotesCard, "generateAttendeeNotesCard");
function generateYourMessageCard(notes) {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d; margin-bottom: 30px;">
	<tr>
		<td style="padding: 20px;">
			<div style="color: #92400e; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Your message:</div>
			<div style="color: #78350f; font-size: 15px; line-height: 22px;">${notes}</div>
		</td>
	</tr>
</table>
	`.trim();
}
__name(generateYourMessageCard, "generateYourMessageCard");
function generateActionButton(url, text2, brandColor = "#3b82f6") {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
	<tr>
		<td align="center">
			<a href="${url}" style="display: inline-block; padding: 14px 32px; background-color: ${brandColor}; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">${text2}</a>
		</td>
	</tr>
</table>
	`.trim();
}
__name(generateActionButton, "generateActionButton");
function generateManagementLinks(rescheduleUrl, cancelUrl, brandColor = "#3b82f6") {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
	<tr>
		<td align="center">
			<a href="${rescheduleUrl}" style="display: inline-block; margin: 0 8px; color: ${brandColor}; text-decoration: none; font-size: 14px;">Reschedule</a>
			<span style="color: #d1d5db;">|</span>
			<a href="${cancelUrl}" style="display: inline-block; margin: 0 8px; color: #ef4444; text-decoration: none; font-size: 14px;">Cancel</a>
		</td>
	</tr>
</table>
	`.trim();
}
__name(generateManagementLinks, "generateManagementLinks");
function generateBookingEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const contactEmail = data.hostContactEmail || data.hostEmail;
  const brandColor = data.brandColor || "#3b82f6";
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  const headerContent = `
		<div style="width: 64px; height: 64px; margin: 0 auto 20px; background-color: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M5 13l4 4L19 7"></path>
			</svg>
		</div>
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting Confirmed!</h1>
	`;
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const meetingDetails = generateMeetingDetailsCard({
    eventName: data.eventName,
    eventDescription: data.eventDescription,
    formattedDate: formatDate(data.startTime),
    formattedTime: `${formatTime(data.startTime)} - ${formatTime(data.endTime)}`,
    meetingUrl: data.meetingUrl,
    meetingType: data.meetingType,
    brandColor
  });
  const attendeeNotes = data.attendeeNotes ? generateYourMessageCard(data.attendeeNotes) : "";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const managementLinks = generateManagementLinks(rescheduleUrl, cancelUrl, brandColor);
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Your meeting with <strong>${data.hostName}</strong> has been confirmed. We're looking forward to speaking with you!
		</p>

		${meetingDetails}
		${attendeeNotes}
		${actionButton}
		${managementLinks}

		<p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 20px;">
			If you need to make changes or have any questions, please reply to this email or contact <a href="mailto:${contactEmail}" style="color: ${brandColor}; text-decoration: none;">${contactEmail}</a>.
		</p>
	`;
  return generateBaseEmail({
    title: "Meeting Confirmed",
    headerGradient: brandColor,
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
__name(generateBookingEmail, "generateBookingEmail");
function generateBookingEmailText(data) {
  const { formatDateTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const contactEmail = data.hostContactEmail || data.hostEmail;
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  return `
Meeting Confirmed!

Hi ${data.attendeeName},

Your meeting with ${data.hostName} has been confirmed. We're looking forward to speaking with you!

MEETING DETAILS
Event: ${data.eventName}
${data.eventDescription ? `Description: ${data.eventDescription}` : ""}
Time: ${formatDateTime(data.startTime)} - ${formatDateTime(data.endTime)}
${data.meetingUrl ? `Location: ${data.meetingUrl}` : ""}

${data.meetingUrl ? `Join Meeting: ${data.meetingUrl}` : ""}

MANAGE YOUR BOOKING
Reschedule: ${rescheduleUrl}
Cancel: ${cancelUrl}

If you need to make changes or have any questions, please reply to this email or contact ${contactEmail}.

---
This is an automated email from ${data.hostName}'s meeting scheduler.
Powered by CloudMeet - https://github.com/dennisklappe/CloudMeet
	`.trim();
}
__name(generateBookingEmailText, "generateBookingEmailText");
function generateCancellationEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting Cancelled</h1>
	`;
  const customMessageSection = data.customMessage ? `
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #ef4444;">
			${data.customMessage}
		</p>
	` : "";
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Your meeting with <strong>${data.hostName}</strong> has been cancelled.
		</p>
		${customMessageSection}
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<h2 style="margin: 0 0 16px; color: #111827; font-size: 18px; font-weight: 600; text-decoration: line-through;">Cancelled Meeting</h2>
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Originally Scheduled</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatDate(data.startTime)} at ${formatTime(data.startTime)}</div>
					</div>
				</td>
			</tr>
		</table>
		<p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 20px;">
			If you'd like to reschedule, please visit <a href="${data.appUrl}/${data.eventSlug || ""}" style="color: ${brandColor}; text-decoration: none;">${data.hostName}'s booking page</a>.
		</p>
	`;
  return generateBaseEmail({
    title: "Meeting Cancelled",
    headerGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
__name(generateCancellationEmail, "generateCancellationEmail");
function generateAdminCancellationEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const customMessageSection = data.customMessage ? `
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
			<tr>
				<td style="padding: 20px;">
					<div style="color: #6b7280; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Cancellation reason:</div>
					<div style="color: #374151; font-size: 15px; line-height: 22px;">${data.customMessage}</div>
				</td>
			</tr>
		</table>
	` : "";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Booking Cancelled</h1>
	`;
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			A meeting has been cancelled.
		</p>

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef2f2; border-radius: 8px; border: 1px solid #fecaca; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<div style="margin-bottom: 12px;">
						<div style="color: #991b1b; font-size: 14px; margin-bottom: 4px;">Attendee</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.attendeeName}</div>
						<div style="color: #6b7280; font-size: 14px;">${data.attendeeEmail}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #991b1b; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #991b1b; font-size: 14px; margin-bottom: 4px;">Was scheduled for</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatDate(data.startTime)}</div>
						<div style="color: #6b7280; font-size: 14px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
					</div>
				</td>
			</tr>
		</table>

		${customMessageSection}
	`;
  return generateBaseEmail({
    title: "Booking Cancelled",
    headerGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    headerContent,
    bodyContent,
    footerContent: "Powered by",
    hostName: data.hostName
  });
}
__name(generateAdminCancellationEmail, "generateAdminCancellationEmail");
function generateRescheduleEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting Rescheduled</h1>
	`;
  const customMessageSection = data.customMessage ? `
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #f97316;">
			${data.customMessage}
		</p>
	` : "";
  const attendeeNotesSection = data.attendeeNotes ? generateYourMessageCard(data.attendeeNotes) : "";
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const managementLinks = generateManagementLinks(rescheduleUrl, cancelUrl, brandColor).replace("Reschedule</a>", "Reschedule Again</a>");
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Your meeting with <strong>${data.hostName}</strong> has been rescheduled to a new time.
		</p>
		${customMessageSection}
		${attendeeNotesSection}

		<!-- Old time crossed out -->
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef2f2; border-radius: 8px; border: 1px solid #fecaca; margin-bottom: 16px;">
			<tr>
				<td style="padding: 16px;">
					<div style="color: #991b1b; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">Previous Time</div>
					<div style="color: #991b1b; font-size: 16px; text-decoration: line-through;">${formatDate(data.oldStartTime)} at ${formatTime(data.oldStartTime)}</div>
				</td>
			</tr>
		</table>

		<!-- New time highlighted -->
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 30px;">
			<tr>
				<td style="padding: 16px;">
					<div style="color: #166534; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">New Time</div>
					<div style="color: #166534; font-size: 16px; font-weight: 600;">${formatDate(data.startTime)} at ${formatTime(data.startTime)}</div>
				</td>
			</tr>
		</table>

		${actionButton}
		${managementLinks}
	`;
  return generateBaseEmail({
    title: "Meeting Rescheduled",
    headerGradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
__name(generateRescheduleEmail, "generateRescheduleEmail");
function generateAdminRescheduleEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Booking Rescheduled</h1>
	`;
  const attendeeNotesSection = data.attendeeNotes ? generateAttendeeNotesCard(data.attendeeName, data.attendeeNotes) : "";
  const adminMeetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, adminMeetingLabel, brandColor) : "";
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			A meeting has been rescheduled.
		</p>

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
			<tr>
				<td style="padding: 24px;">
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Attendee</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.attendeeName}</div>
						<div style="color: #6b7280; font-size: 14px;">${data.attendeeEmail}</div>
					</div>

					<div>
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>
				</td>
			</tr>
		</table>

		${attendeeNotesSection}

		<!-- Time Change -->
		<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
			<tr>
				<td style="width: 48%; vertical-align: top;">
					<div style="background-color: #fef2f2; border-radius: 8px; padding: 16px; border: 1px solid #fecaca;">
						<div style="color: #991b1b; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">Old Time</div>
						<div style="color: #111827; font-size: 15px; font-weight: 500; text-decoration: line-through;">${formatDate(data.oldStartTime)}</div>
						<div style="color: #6b7280; font-size: 14px; text-decoration: line-through;">${formatTime(data.oldStartTime)} - ${formatTime(data.oldEndTime)}</div>
					</div>
				</td>
				<td style="width: 4%; text-align: center; vertical-align: middle;">
					<span style="color: #9ca3af; font-size: 20px;">\u2192</span>
				</td>
				<td style="width: 48%; vertical-align: top;">
					<div style="background-color: #f0fdf4; border-radius: 8px; padding: 16px; border: 1px solid #bbf7d0;">
						<div style="color: #166534; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">New Time</div>
						<div style="color: #111827; font-size: 15px; font-weight: 500;">${formatDate(data.startTime)}</div>
						<div style="color: #6b7280; font-size: 14px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
					</div>
				</td>
			</tr>
		</table>

		${actionButton}
	`;
  return generateBaseEmail({
    title: "Booking Rescheduled",
    headerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    headerContent,
    bodyContent,
    footerContent: "Powered by",
    hostName: data.hostName
  });
}
__name(generateAdminRescheduleEmail, "generateAdminRescheduleEmail");
function generateReminderEmail(data, reminderType) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  const colors = URGENCY_COLORS[reminderType];
  const timeLabel = TIME_LABELS[reminderType];
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting ${timeLabel}!</h1>
	`;
  const customMessageSection = data.customMessage ? `
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid ${brandColor};">
			${data.customMessage}
		</p>
	` : "";
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const managementLinks = generateManagementLinks(rescheduleUrl, cancelUrl, brandColor);
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			This is a friendly reminder about your upcoming meeting with <strong>${data.hostName}</strong>.
		</p>
		${customMessageSection}

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: ${colors.bg}; border-radius: 8px; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<div style="color: ${colors.text}; font-size: 14px; margin-bottom: 8px; font-weight: 600;">${data.eventName}</div>
					<div style="color: ${colors.text}; font-size: 20px; font-weight: 700;">${formatDate(data.startTime)}</div>
					<div style="color: ${colors.text}; font-size: 18px; margin-top: 4px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
				</td>
			</tr>
		</table>

		${actionButton}
		${managementLinks}
	`;
  return generateBaseEmail({
    title: "Meeting Reminder",
    headerGradient: colors.gradient,
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
__name(generateReminderEmail, "generateReminderEmail");
function getDefaultReminderSubject(data, reminderType) {
  const subjects = {
    "reminder_24h": `Reminder: ${data.eventName} tomorrow with ${data.hostName}`,
    "reminder_1h": `Reminder: ${data.eventName} starts in 1 hour`,
    "reminder_30m": `Starting Soon: ${data.eventName} in 30 minutes`
  };
  return subjects[reminderType];
}
__name(getDefaultReminderSubject, "getDefaultReminderSubject");
function generateAdminNotificationEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">New Booking!</h1>
	`;
  const attendeeNotes = data.attendeeNotes ? generateAttendeeNotesCard(data.attendeeName, data.attendeeNotes) : "";
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			You have a new meeting booked!
		</p>

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Attendee</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.attendeeName}</div>
						<div style="color: #6b7280; font-size: 14px;">${data.attendeeEmail}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Date</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatDate(data.startTime)}</div>
					</div>

					<div>
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Time</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
					</div>
				</td>
			</tr>
		</table>

		${attendeeNotes}
		${actionButton}
	`;
  return generateBaseEmail({
    title: "New Booking",
    headerGradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    headerContent,
    bodyContent,
    footerContent: "Powered by"
  });
}
__name(generateAdminNotificationEmail, "generateAdminNotificationEmail");
async function sendBookingEmail(data, config, customSubject) {
  const htmlBody = generateBookingEmail(data);
  const textBody = generateBookingEmailText(data);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : `Meeting Confirmed: ${data.eventName} with ${data.hostName}`;
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        text: textBody,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send email: ${error2}`);
    }
  } catch (error2) {
    console.error("Email sending error:", error2);
    throw error2;
  }
}
__name(sendBookingEmail, "sendBookingEmail");
async function sendCancellationEmail(data, config, customSubject) {
  const htmlBody = generateCancellationEmail(data);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : `Meeting Cancelled: ${data.eventName}`;
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send cancellation email: ${error2}`);
    }
  } catch (error2) {
    console.error("Cancellation email error:", error2);
    throw error2;
  }
}
__name(sendCancellationEmail, "sendCancellationEmail");
async function sendRescheduleEmail(data, config, customSubject) {
  const htmlBody = generateRescheduleEmail(data);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : `Meeting Rescheduled: ${data.eventName} with ${data.hostName}`;
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send reschedule email: ${error2}`);
    }
  } catch (error2) {
    console.error("Reschedule email error:", error2);
    throw error2;
  }
}
__name(sendRescheduleEmail, "sendRescheduleEmail");
async function sendReminderEmail(data, reminderType, config, customSubject) {
  const htmlBody = generateReminderEmail(data, reminderType);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : getDefaultReminderSubject(data, reminderType);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send reminder email: ${error2}`);
    }
  } catch (error2) {
    console.error("Reminder email error:", error2);
    throw error2;
  }
}
__name(sendReminderEmail, "sendReminderEmail");
async function sendAdminNotificationEmail(data, adminEmail, config) {
  const htmlBody = generateAdminNotificationEmail(data);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `CloudMeet <${config.from}>`,
        to: adminEmail,
        subject: `New Booking: ${data.eventName} with ${data.attendeeName}`,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send admin notification: ${error2}`);
    }
  } catch (error2) {
    console.error("Admin notification email error:", error2);
    throw error2;
  }
}
__name(sendAdminNotificationEmail, "sendAdminNotificationEmail");
async function sendAdminCancellationNotification(data, adminEmail, config) {
  const htmlBody = generateAdminCancellationEmail(data);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `CloudMeet <${config.from}>`,
        to: adminEmail,
        subject: `Booking Cancelled: ${data.eventName} with ${data.attendeeName}`,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send admin cancellation notification: ${error2}`);
    }
  } catch (error2) {
    console.error("Admin cancellation notification error:", error2);
    throw error2;
  }
}
__name(sendAdminCancellationNotification, "sendAdminCancellationNotification");
async function sendAdminRescheduleNotification(data, adminEmail, config) {
  const htmlBody = generateAdminRescheduleEmail(data);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `CloudMeet <${config.from}>`,
        to: adminEmail,
        subject: `Booking Rescheduled: ${data.eventName} with ${data.attendeeName}`,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error2 = await response.text();
      throw new Error(`Failed to send admin reschedule notification: ${error2}`);
    }
  } catch (error2) {
    console.error("Admin reschedule notification error:", error2);
    throw error2;
  }
}
__name(sendAdminRescheduleNotification, "sendAdminRescheduleNotification");
async function getEmailTemplates(db, userId) {
  const templates = await db.prepare(
    "SELECT template_type, is_enabled, subject, custom_message FROM email_templates WHERE user_id = ?"
  ).bind(userId).all();
  const map = /* @__PURE__ */ new Map();
  for (const t2 of templates.results) {
    map.set(t2.template_type, {
      template_type: t2.template_type,
      is_enabled: t2.is_enabled === 1,
      subject: t2.subject,
      custom_message: t2.custom_message
    });
  }
  return map;
}
__name(getEmailTemplates, "getEmailTemplates");
function isEmailEnabled(templates, type) {
  const template = templates.get(type);
  return template ? template.is_enabled : true;
}
__name(isEmailEnabled, "isEmailEnabled");
var TIME_LABELS;
var URGENCY_COLORS;
var init_index3 = __esm({
  "../output/server/chunks/index3.js"() {
    init_checked_fetch();
    __name2(createEmailFormatters, "createEmailFormatters");
    __name2(replaceSubjectVariables, "replaceSubjectVariables");
    __name2(generateBaseEmail, "generateBaseEmail");
    __name2(generateMeetingDetailsCard, "generateMeetingDetailsCard");
    __name2(generateAttendeeNotesCard, "generateAttendeeNotesCard");
    __name2(generateYourMessageCard, "generateYourMessageCard");
    __name2(generateActionButton, "generateActionButton");
    __name2(generateManagementLinks, "generateManagementLinks");
    __name2(generateBookingEmail, "generateBookingEmail");
    __name2(generateBookingEmailText, "generateBookingEmailText");
    __name2(generateCancellationEmail, "generateCancellationEmail");
    __name2(generateAdminCancellationEmail, "generateAdminCancellationEmail");
    __name2(generateRescheduleEmail, "generateRescheduleEmail");
    __name2(generateAdminRescheduleEmail, "generateAdminRescheduleEmail");
    TIME_LABELS = {
      "reminder_24h": "tomorrow",
      "reminder_1h": "in 1 hour",
      "reminder_30m": "in 30 minutes"
    };
    URGENCY_COLORS = {
      "reminder_24h": { bg: "#dbeafe", text: "#1e40af", gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)" },
      "reminder_1h": { bg: "#fef3c7", text: "#92400e", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" },
      "reminder_30m": { bg: "#fee2e2", text: "#991b1b", gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }
    };
    __name2(generateReminderEmail, "generateReminderEmail");
    __name2(getDefaultReminderSubject, "getDefaultReminderSubject");
    __name2(generateAdminNotificationEmail, "generateAdminNotificationEmail");
    __name2(sendBookingEmail, "sendBookingEmail");
    __name2(sendCancellationEmail, "sendCancellationEmail");
    __name2(sendRescheduleEmail, "sendRescheduleEmail");
    __name2(sendReminderEmail, "sendReminderEmail");
    __name2(sendAdminNotificationEmail, "sendAdminNotificationEmail");
    __name2(sendAdminCancellationNotification, "sendAdminCancellationNotification");
    __name2(sendAdminRescheduleNotification, "sendAdminRescheduleNotification");
    __name2(getEmailTemplates, "getEmailTemplates");
    __name2(isEmailEnabled, "isEmailEnabled");
  }
});
var page_server_ts_exports3 = {};
__export(page_server_ts_exports3, {
  actions: /* @__PURE__ */ __name(() => actions, "actions"),
  load: /* @__PURE__ */ __name(() => load4, "load")
});
var load4;
var actions;
var init_page_server_ts3 = __esm({
  "../output/server/entries/pages/cancel/_id_/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_google_calendar();
    init_index3();
    load4 = /* @__PURE__ */ __name2(async ({ params, platform }) => {
      const db = platform?.env?.DB;
      if (!db) {
        throw error(500, "Database not available");
      }
      const bookingId = params.id;
      const booking = await db.prepare(
        `SELECT b.id, b.start_time, b.end_time, b.attendee_name, b.attendee_email,
			b.status, b.google_event_id, e.name as event_name, e.slug as event_slug, u.name as host_name
			FROM bookings b
			JOIN event_types e ON b.event_type_id = e.id
			JOIN users u ON b.user_id = u.id
			WHERE b.id = ?`
      ).bind(bookingId).first();
      if (!booking) {
        throw error(404, "Booking not found");
      }
      if (booking.status === "canceled") {
        return {
          booking,
          alreadyCanceled: true
        };
      }
      return {
        booking,
        alreadyCanceled: false
      };
    }, "load");
    actions = {
      default: /* @__PURE__ */ __name2(async ({ params, platform, request }) => {
        const db = platform?.env?.DB;
        const env2 = platform?.env;
        if (!db || !env2) {
          return fail(500, { error: "Database not available" });
        }
        const bookingId = params.id;
        const formData = await request.formData();
        const reason = formData.get("reason")?.toString().trim() || null;
        try {
          const booking = await db.prepare(
            `SELECT b.id, b.user_id, b.google_event_id, b.status
					FROM bookings b
					WHERE b.id = ?`
          ).bind(bookingId).first();
          if (!booking) {
            return fail(404, { error: "Booking not found" });
          }
          if (booking.status === "canceled") {
            return fail(400, { error: "Booking already canceled" });
          }
          if (booking.google_event_id) {
            try {
              const accessToken = await getValidAccessToken(
                db,
                booking.user_id,
                env2.GOOGLE_CLIENT_ID,
                env2.GOOGLE_CLIENT_SECRET
              );
              await cancelCalendarEvent(accessToken, booking.google_event_id);
            } catch (err) {
              console.error("Failed to cancel Google Calendar event:", err);
            }
          }
          await db.prepare("UPDATE bookings SET status = ?, canceled_at = CURRENT_TIMESTAMP, canceled_by = ?, cancellation_reason = ? WHERE id = ?").bind("canceled", "attendee", reason, bookingId).run();
          await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled' WHERE booking_id = ? AND status = 'pending'`).bind(bookingId).run();
          if (env2.EMAILIT_API_KEY) {
            try {
              const fullBooking = await db.prepare(
                `SELECT b.id, b.start_time, b.end_time, b.attendee_name, b.attendee_email,
							e.name as event_name, e.slug as event_slug, e.description as event_description,
							u.id as user_id, u.name as host_name, u.email as host_email, u.contact_email, u.settings, u.brand_color
							FROM bookings b
							JOIN event_types e ON b.event_type_id = e.id
							JOIN users u ON b.user_id = u.id
							WHERE b.id = ?`
              ).bind(bookingId).first();
              if (fullBooking) {
                let timeFormat = "12h";
                try {
                  const settings = fullBooking.settings ? JSON.parse(fullBooking.settings) : {};
                  timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
                } catch {
                }
                const replyToEmail = fullBooking.contact_email || fullBooking.host_email;
                const templates = await getEmailTemplates(db, fullBooking.user_id);
                if (isEmailEnabled(templates, "cancellation")) {
                  const template = templates.get("cancellation");
                  await sendCancellationEmail(
                    {
                      attendeeName: fullBooking.attendee_name,
                      attendeeEmail: fullBooking.attendee_email,
                      eventName: fullBooking.event_name,
                      eventSlug: fullBooking.event_slug,
                      eventDescription: fullBooking.event_description || "",
                      startTime: new Date(fullBooking.start_time),
                      endTime: new Date(fullBooking.end_time),
                      meetingUrl: null,
                      bookingId: fullBooking.id,
                      hostName: fullBooking.host_name,
                      hostEmail: fullBooking.host_email,
                      hostContactEmail: fullBooking.contact_email || void 0,
                      appUrl: env2.APP_URL || "",
                      customMessage: reason || template?.custom_message,
                      timeFormat,
                      brandColor: fullBooking.brand_color || void 0
                    },
                    {
                      apiKey: env2.EMAILIT_API_KEY,
                      from: env2.EMAIL_FROM || fullBooking.host_email,
                      replyTo: replyToEmail
                    },
                    template?.subject || void 0
                  );
                }
                try {
                  await sendAdminCancellationNotification(
                    {
                      attendeeName: fullBooking.attendee_name,
                      attendeeEmail: fullBooking.attendee_email,
                      eventName: fullBooking.event_name,
                      eventSlug: fullBooking.event_slug,
                      eventDescription: fullBooking.event_description || "",
                      startTime: new Date(fullBooking.start_time),
                      endTime: new Date(fullBooking.end_time),
                      meetingUrl: null,
                      bookingId: fullBooking.id,
                      hostName: fullBooking.host_name,
                      hostEmail: fullBooking.host_email,
                      appUrl: env2.APP_URL || "",
                      customMessage: reason,
                      timeFormat,
                      brandColor: fullBooking.brand_color || void 0
                    },
                    fullBooking.host_email,
                    {
                      apiKey: env2.EMAILIT_API_KEY,
                      from: env2.EMAIL_FROM || fullBooking.host_email
                    }
                  );
                } catch (adminErr) {
                  console.error("Failed to send admin cancellation notification:", adminErr);
                }
              }
            } catch (emailErr) {
              console.error("Failed to send cancellation email:", emailErr);
            }
          }
          throw redirect(303, `/cancel/${bookingId}?success=true`);
        } catch (err) {
          if (err?.status === 303) throw err;
          console.error("Cancellation error:", err);
          return fail(500, { error: err?.message || "Failed to cancel booking" });
        }
      }, "default")
    };
  }
});
var getStores;
var page2;
var init_stores = __esm({
  "../output/server/chunks/stores.js"() {
    init_checked_fetch();
    init_context();
    init_internal();
    init_exports2();
    init_utils2();
    init_clsx();
    init_server();
    init_state_svelte();
    getStores = /* @__PURE__ */ __name2(() => {
      const stores$1 = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores$1.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores$1.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores$1.updated
      };
    }, "getStores");
    page2 = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: /* @__PURE__ */ __name(() => _page3, "default")
});
function _page3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, form } = $$props;
    let cancelling = false;
    let reason = "";
    const success = store_get($$store_subs ??= {}, "$page", page2).url.searchParams.get("success") === "true";
    function formatDateTime(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }).format(date);
    }
    __name(formatDateTime, "formatDateTime");
    __name2(formatDateTime, "formatDateTime");
    head("1fc09sf", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Cancel Booking</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-gray-50 py-12"><div class="max-w-2xl mx-auto px-4">`);
    if (success || data.alreadyCanceled) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-lg p-8 text-center"><div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h1 class="text-2xl font-bold text-gray-900 mb-2">Booking Cancelled</h1> <p class="text-gray-600 mb-6">Your meeting has been cancelled successfully. The host has been notified.</p> <a${attr("href", `/${stringify2(data.booking.event_slug)}`)} class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Book Another Meeting</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-lg p-8"><h1 class="text-2xl font-bold text-gray-900 mb-6">Cancel Booking</h1> `);
      if (form?.error) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">Error: ${escape_html(form.error)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6"><h2 class="font-semibold text-gray-900 mb-4">Booking Details</h2> <div class="space-y-2 text-sm"><div><span class="text-gray-600">Event:</span> <span class="ml-2 text-gray-900 font-medium">${escape_html(data.booking.event_name)}</span></div> <div><span class="text-gray-600">With:</span> <span class="ml-2 text-gray-900 font-medium">${escape_html(data.booking.host_name)}</span></div> <div><span class="text-gray-600">Time:</span> <span class="ml-2 text-gray-900 font-medium">${escape_html(formatDateTime(data.booking.start_time))}</span></div> <div><span class="text-gray-600">Attendee:</span> <span class="ml-2 text-gray-900 font-medium">${escape_html(data.booking.attendee_name)}</span></div></div></div> <div class="mb-6"><label for="reason" class="block text-sm font-medium text-gray-700 mb-2">Reason for cancellation (optional)</label> <textarea id="reason" name="reason" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Let the host know why you're cancelling...">`);
      const $$body = escape_html(reason);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div> <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6"><p class="text-sm text-yellow-800"><strong>Warning:</strong> This action cannot be undone. The host will be notified of the cancellation.</p></div> <form method="POST"><input type="hidden" name="reason"${attr("value", reason)}/> <div class="flex gap-4"><button type="submit"${attr("disabled", cancelling, true)} class="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 font-medium">${escape_html("Yes, Cancel Booking")}</button> <a${attr("href", `/${stringify2(data.booking.event_slug)}`)} class="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-center font-medium">Keep Booking</a></div></form></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    Footer($$renderer2, { class: "mt-6" });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
__name(_page3, "_page3");
var init_page_svelte3 = __esm({
  "../output/server/entries/pages/cancel/_id_/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_internal();
    init_exports2();
    init_utils2();
    init_server();
    init_state_svelte();
    init_stores();
    init_Footer();
    init_context();
    __name2(_page3, "_page");
  }
});
var __exports5 = {};
__export(__exports5, {
  component: /* @__PURE__ */ __name(() => component5, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts5, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports5, "imports"),
  index: /* @__PURE__ */ __name(() => index5, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports3, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id3, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets5, "stylesheets")
});
var index5;
var component_cache5;
var component5;
var server_id3;
var imports5;
var stylesheets5;
var fonts5;
var init__5 = __esm({
  "../output/server/nodes/4.js"() {
    init_checked_fetch();
    init_page_server_ts3();
    index5 = 4;
    component5 = /* @__PURE__ */ __name2(async () => component_cache5 ??= (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default, "component");
    server_id3 = "src/routes/cancel/[id]/+page.server.ts";
    imports5 = ["_app/immutable/nodes/4.Bhm2kjv4.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/iqOSawfn.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/3dsfsjWY.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/B4Bv1KaN.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/CSjB5q8c.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});
var page_server_ts_exports4 = {};
__export(page_server_ts_exports4, {
  load: /* @__PURE__ */ __name(() => load5, "load")
});
var load5;
var init_page_server_ts4 = __esm({
  "../output/server/entries/pages/dashboard/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    load5 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      const db = event.platform?.env?.DB;
      if (!db) {
        throw new Error("Database not available");
      }
      const user = await db.prepare("SELECT id, email, name, slug, profile_image, brand_color, settings, contact_email FROM users WHERE id = ?").bind(userId).first();
      const eventTypes = await db.prepare(
        `SELECT id, name, slug, duration_minutes as duration, description, is_active
			FROM event_types
			WHERE user_id = ?
			ORDER BY name ASC`
      ).bind(userId).all();
      const recentBookings = await db.prepare(
        `SELECT b.id, b.start_time, b.end_time, b.attendee_name, b.attendee_email,
				b.status, b.created_at, b.attendee_notes, b.canceled_by, b.cancellation_reason,
				b.event_type_id, et.name as event_type_name, et.slug as event_type_slug, et.duration_minutes
			FROM bookings b
			JOIN event_types et ON b.event_type_id = et.id
			WHERE b.user_id = ? AND b.start_time >= datetime('now')
			ORDER BY b.created_at DESC
			LIMIT 20`
      ).bind(userId).all();
      const appUrl = event.platform?.env?.APP_URL || "";
      return {
        user,
        eventTypes: eventTypes.results,
        recentBookings: recentBookings.results,
        appUrl
      };
    }, "load");
  }
});
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: /* @__PURE__ */ __name(() => _page4, "default")
});
function ProfileSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { user } = $$props;
    function getUserSettings() {
      try {
        return user?.settings ? JSON.parse(user.settings) : {};
      } catch {
        return {};
      }
    }
    __name(getUserSettings, "getUserSettings");
    __name2(getUserSettings, "getUserSettings");
    user?.name || "";
    user?.profile_image || "";
    user?.brand_color || "#3b82f6";
    user?.contact_email || "";
    getUserSettings().timeFormat || "12h";
    $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-gray-900">Your Profile</h2> <button class="text-sm text-blue-600 hover:text-blue-700">${escape_html("Edit Profile")}</button></div> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex items-center gap-4">`);
      if (user?.profile_image) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", user.profile_image)} alt="Profile" class="w-16 h-16 rounded-full object-cover"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-2xl">${escape_html(user?.name?.charAt(0) || "U")}</div>`);
      }
      $$renderer2.push(`<!--]--> <div><p class="font-semibold text-gray-900">${escape_html(user?.name)}</p> <p class="text-sm text-gray-600">${escape_html(user?.email)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
__name(ProfileSection, "ProfileSection");
function CancelBookingModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    createFormatters();
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
__name(CancelBookingModal, "CancelBookingModal");
function HostRescheduleModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { booking } = $$props;
    const { formatCompactDateTime } = createFormatters();
    let selectedDate = null;
    let message = "";
    let currentMonth = /* @__PURE__ */ new Date();
    const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" });
    const calendarDays = /* @__PURE__ */ __name2(() => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startPadding = firstDay.getDay();
      const days = [];
      for (let i = startPadding - 1; i >= 0; i--) {
        const date = new Date(year, month, -i);
        days.push({ date, isCurrentMonth: false, isToday: false, isPast: true });
      }
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const isToday = date.toDateString() === today.toDateString();
        const isPast = date < today;
        days.push({ date, isCurrentMonth: true, isToday, isPast });
      }
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month + 1, i);
        days.push({ date, isCurrentMonth: false, isToday: false, isPast: false });
      }
      return days;
    }, "calendarDays");
    function formatDateKey(date) {
      return date.toISOString().split("T")[0];
    }
    __name(formatDateKey, "formatDateKey");
    __name2(formatDateKey, "formatDateKey");
    if (booking) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"><div class="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6 border-b border-gray-200"><div class="flex justify-between items-start"><div><h2 class="text-xl font-semibold text-gray-900">Propose New Time</h2> <p class="text-sm text-gray-600 mt-1">Current: ${escape_html(formatCompactDateTime(new Date(booking.start_time)))}</p></div> <button class="text-gray-400 hover:text-gray-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="mt-3 bg-gray-50 rounded-lg p-3"><p class="text-sm"><span class="text-gray-600">Meeting:</span> <span class="font-medium">${escape_html(booking.event_type_name)}</span></p> <p class="text-sm"><span class="text-gray-600">With:</span> <span class="font-medium">${escape_html(booking.attendee_name)}</span></p></div></div> <div class="p-6">`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex gap-6"><div class="flex-1"><div class="flex items-center justify-between mb-4"><button class="p-1 hover:bg-gray-100 rounded"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <span class="font-medium">${escape_html(monthName)}</span> <button class="p-1 hover:bg-gray-100 rounded"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2"><div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div></div> <div class="grid grid-cols-7 gap-1"><!--[-->`);
      const each_array = ensure_array_like(calendarDays());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let day = each_array[$$index];
        $$renderer2.push(`<button type="button"${attr("disabled", day.isPast || !day.isCurrentMonth, true)}${attr_class(`aspect-square flex items-center justify-center text-sm rounded-lg transition ${stringify2(day.isCurrentMonth ? "" : "text-gray-300")} ${stringify2(day.isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-50")} ${stringify2(day.isToday ? "font-bold" : "")} ${stringify2(selectedDate === formatDateKey(day.date) ? "bg-blue-600 text-white hover:bg-blue-700" : "")}`)}>${escape_html(day.date.getDate())}</button>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="flex-1"><h3 class="font-medium text-gray-900 mb-3">`);
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`Select a date`);
      }
      $$renderer2.push(`<!--]--></h3> `);
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[!-->");
          {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="text-center py-8 text-gray-400"><svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p class="text-sm">Pick a date to see times</p></div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="mt-6"><label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message to attendee (optional)</label> <textarea id="message" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Let them know why you need to reschedule...">`);
      const $$body = escape_html(message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div></div> <div class="p-6 border-t border-gray-200 flex gap-3 justify-end"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">Cancel</button> <button type="button"${attr("disabled", !selectedDate, true)} class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">${escape_html("Send Proposal")}</button></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
__name(HostRescheduleModal, "HostRescheduleModal");
function BookingsList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { bookings } = $$props;
    const { formatCompactDateTime } = createFormatters();
    let sortOrder = "last_booked";
    const sortedBookings = /* @__PURE__ */ __name2(() => {
      if (!bookings) return [];
      const sorted = [...bookings];
      return sorted;
    }, "sortedBookings");
    function getStatusColor(status) {
      switch (status) {
        case "confirmed":
          return "bg-green-100 text-green-800";
        case "canceled":
          return "bg-red-100 text-red-800";
        case "pending":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    }
    __name(getStatusColor, "getStatusColor");
    __name2(getStatusColor, "getStatusColor");
    $$renderer2.push(`<div><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold text-gray-900">Upcoming Bookings</h2> `);
    $$renderer2.select(
      {
        value: sortOrder,
        class: "text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "last_booked" }, ($$renderer4) => {
          $$renderer4.push(`Last booked`);
        });
        $$renderer3.option({ value: "upcoming" }, ($$renderer4) => {
          $$renderer4.push(`Upcoming first`);
        });
      }
    );
    $$renderer2.push(`</div> <div class="space-y-4">`);
    if (sortedBookings().length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(sortedBookings());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let booking = each_array[$$index];
        $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-4 border border-gray-200"><div class="flex justify-between items-start mb-2"><div><h3 class="font-semibold text-gray-900">${escape_html(booking.event_type_name)}</h3> <p class="text-sm text-gray-600">${escape_html(booking.attendee_name)}</p> <p class="text-xs text-gray-500">${escape_html(booking.attendee_email)}</p></div> <div class="flex items-center gap-2"><span${attr_class(`px-2 py-1 text-xs rounded-full ${stringify2(getStatusColor(booking.status))}`)}>${escape_html(booking.status)}</span> `);
        if (booking.status === "confirmed") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button class="text-xs text-blue-600 hover:text-blue-700 font-medium">Reschedule</button> <button class="text-xs text-red-600 hover:text-red-700 font-medium">Cancel</button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div> <div class="text-sm text-gray-700 mt-2"><p>${escape_html(formatCompactDateTime(new Date(booking.start_time)))}</p></div> `);
        if (booking.attendee_notes) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-2 text-sm text-gray-600 bg-gray-50 rounded p-2"><span class="font-medium">Message:</span> ${escape_html(booking.attendee_notes)}</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (booking.status === "canceled") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-2 text-sm text-red-600 bg-red-50 rounded p-2"><span class="font-medium">Cancelled by ${escape_html(booking.canceled_by === "host" ? "you" : "attendee")}</span> `);
          if (booking.cancellation_reason) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="text-red-500">: ${escape_html(booking.cancellation_reason)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200"><p class="text-gray-600">No bookings yet</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
__name(BookingsList, "BookingsList");
function EventTypesList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { eventTypes } = $$props;
    $$renderer2.push(`<div><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold text-gray-900">Event Types</h2> <a href="/dashboard/event-types/new" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">+ New Event Type</a></div> <div class="space-y-4">`);
    if (eventTypes && eventTypes.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(eventTypes);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let eventType = each_array[$$index];
        $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-4 border border-gray-200"><div class="flex justify-between items-start mb-2"><div><h3 class="font-semibold text-gray-900">${escape_html(eventType.name)}</h3> <p class="text-sm text-gray-600">${escape_html(eventType.duration)} minutes</p></div> <span${attr_class(`px-2 py-1 text-xs rounded-full ${stringify2(eventType.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800")}`)}>${escape_html(eventType.is_active ? "Active" : "Inactive")}</span></div> `);
        if (eventType.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-gray-600 mb-3">${escape_html(eventType.description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="flex gap-2"><a${attr("href", `/${stringify2(eventType.slug)}`)} target="_blank" class="text-sm text-blue-600 hover:text-blue-700">View Page</a> <span class="text-gray-300">|</span> <a${attr("href", `/dashboard/event-types/${stringify2(eventType.id)}`)} class="text-sm text-blue-600 hover:text-blue-700">Edit</a></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200"><p class="text-gray-600 mb-4">No event types yet</p> <a href="/dashboard/event-types/new" class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Create Your First Event Type</a></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
__name(EventTypesList, "EventTypesList");
function _page4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let bookings = data.recentBookings || [];
    function getBookingById(bookingId) {
      return null;
    }
    __name(getBookingById, "getBookingById");
    __name2(getBookingById, "getBookingById");
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-900">Dashboard</h1> <p class="text-sm text-gray-600">Welcome back, ${escape_html(data.user?.name || "User")}!</p></div> <div class="flex gap-4"><a href="/dashboard/calendars" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">Calendars</a> <a href="/dashboard/emails" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">Emails</a> <a href="/dashboard/availability" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Set Availability</a> <form method="POST" action="/auth/logout"><button type="submit" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Logout</button></form></div></div></div></header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
    ProfileSection($$renderer2, { user: data.user });
    $$renderer2.push(`<!----> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8"><h2 class="text-lg font-semibold text-blue-900 mb-2">Your Booking Page</h2> <div class="flex items-center gap-2"><input type="text" readonly${attr("value", `${stringify2(data.appUrl)}/`)} class="flex-1 px-3 py-2 bg-white border border-blue-300 rounded-md text-sm"/> <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">Copy Link</button></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">`);
    EventTypesList($$renderer2, { eventTypes: data.eventTypes || [] });
    $$renderer2.push(`<!----> `);
    BookingsList($$renderer2, {
      bookings
    });
    $$renderer2.push(`<!----></div></main></div> `);
    CancelBookingModal($$renderer2);
    $$renderer2.push(`<!----> `);
    HostRescheduleModal($$renderer2, {
      booking: getBookingById()
    });
    $$renderer2.push(`<!---->`);
  });
}
__name(_page4, "_page4");
var init_page_svelte4 = __esm({
  "../output/server/entries/pages/dashboard/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_context();
    init_clsx();
    init_dateFormatters();
    __name2(ProfileSection, "ProfileSection");
    __name2(CancelBookingModal, "CancelBookingModal");
    __name2(HostRescheduleModal, "HostRescheduleModal");
    __name2(BookingsList, "BookingsList");
    __name2(EventTypesList, "EventTypesList");
    __name2(_page4, "_page");
  }
});
var __exports6 = {};
__export(__exports6, {
  component: /* @__PURE__ */ __name(() => component6, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts6, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports6, "imports"),
  index: /* @__PURE__ */ __name(() => index6, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports4, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id4, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets6, "stylesheets")
});
var index6;
var component_cache6;
var component6;
var server_id4;
var imports6;
var stylesheets6;
var fonts6;
var init__6 = __esm({
  "../output/server/nodes/5.js"() {
    init_checked_fetch();
    init_page_server_ts4();
    index6 = 5;
    component6 = /* @__PURE__ */ __name2(async () => component_cache6 ??= (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default, "component");
    server_id4 = "src/routes/dashboard/+page.server.ts";
    imports6 = ["_app/immutable/nodes/5.Dilq9Vwk.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/BH885Lyd.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/dm5yZCSw.js", "_app/immutable/chunks/BjWePiXU.js"];
    stylesheets6 = [];
    fonts6 = [];
  }
});
var page_server_ts_exports5 = {};
__export(page_server_ts_exports5, {
  actions: /* @__PURE__ */ __name(() => actions2, "actions"),
  load: /* @__PURE__ */ __name(() => load6, "load")
});
var load6;
var actions2;
var init_page_server_ts5 = __esm({
  "../output/server/entries/pages/dashboard/availability/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    load6 = /* @__PURE__ */ __name2(async (event) => {
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
    }, "load");
    actions2 = {
      save: /* @__PURE__ */ __name2(async (event) => {
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
        } catch (error2) {
          console.error("Error saving availability:", error2);
          return fail(500, { error: "Failed to save availability rules" });
        }
      }, "save")
    };
  }
});
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: /* @__PURE__ */ __name(() => _page5, "default")
});
function _page5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    const daysOfWeek = [
      { id: 0, name: "Sunday" },
      { id: 1, name: "Monday" },
      { id: 2, name: "Tuesday" },
      { id: 3, name: "Wednesday" },
      { id: 4, name: "Thursday" },
      { id: 5, name: "Friday" },
      { id: 6, name: "Saturday" }
    ];
    let availability = daysOfWeek.map((day) => {
      const existingRules = data.rules?.filter((r3) => r3.day_of_week === day.id) || [];
      return {
        day: day.id,
        name: day.name,
        enabled: existingRules.length > 0,
        startTime: existingRules[0]?.start_time || "09:00",
        endTime: existingRules[0]?.end_time || "17:00"
      };
    });
    let saving = false;
    let selectedTimezone = data.timezone || "UTC";
    const timezoneLabels = {
      "America/Los_Angeles": "Pacific Time",
      "America/Denver": "Mountain Time",
      "America/Chicago": "Central Time",
      "America/New_York": "Eastern Time",
      "Europe/London": "UK, Ireland Time",
      "Europe/Paris": "Central European Time",
      "Europe/Amsterdam": "Amsterdam Time",
      "Europe/Berlin": "Berlin Time",
      "Asia/Tokyo": "Japan Time",
      "Asia/Shanghai": "China Time",
      "Australia/Sydney": "Sydney Time",
      "UTC": "UTC Time"
    };
    function getTimezoneLabel2(tz) {
      return timezoneLabels[tz] || tz.replace(/_/g, " ").split("/").pop() || tz;
    }
    __name(getTimezoneLabel2, "getTimezoneLabel2");
    __name2(getTimezoneLabel2, "getTimezoneLabel");
    function getCurrentTime2(tz) {
      try {
        return new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: tz
        }).format(/* @__PURE__ */ new Date());
      } catch {
        return "--:--";
      }
    }
    __name(getCurrentTime2, "getCurrentTime2");
    __name2(getCurrentTime2, "getCurrentTime");
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-600 hover:text-gray-900">\u2190 Back to Dashboard</a> <h1 class="text-2xl font-bold text-gray-900">Set Availability</h1></div></div></header> <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (form?.error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">Error: ${escape_html(form.error)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Your Timezone</h2> <p class="text-sm text-gray-600 mb-4">Set your timezone so that your availability is shown correctly to people booking meetings.</p> <div class="relative"><button type="button" class="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition w-full sm:w-auto"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div class="text-left"><div class="font-medium text-gray-900">${escape_html(getTimezoneLabel2(selectedTimezone))}</div> <div class="text-sm text-gray-500">${escape_html(selectedTimezone)} (${escape_html(getCurrentTime2(selectedTimezone))})</div></div> <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h2> <p class="text-sm text-gray-600 mb-6">Set your available hours for each day of the week. People can only book meetings during these times.</p> <form method="POST" action="?/save"><input type="hidden" name="rules"${attr("value", JSON.stringify(availability))}/> <input type="hidden" name="timezone"${attr("value", selectedTimezone)}/> <div class="space-y-4"><!--[-->`);
    const each_array = ensure_array_like(availability);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let day = each_array[$$index];
      $$renderer2.push(`<div class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"><div class="flex items-center min-w-[120px]"><input type="checkbox"${attr("checked", day.enabled, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"${attr("id", `day-${stringify2(day.day)}`)}/> <label${attr("for", `day-${stringify2(day.day)}`)} class="ml-2 font-medium text-gray-900">${escape_html(day.name)}</label></div> `);
      if (day.enabled) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex items-center gap-2 flex-1"><input type="time"${attr("value", day.startTime)} class="px-3 py-2 border border-gray-300 rounded-md text-sm"/> <span class="text-gray-600">to</span> <input type="time"${attr("value", day.endTime)} class="px-3 py-2 border border-gray-300 rounded-md text-sm"/></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="text-gray-400 text-sm">Unavailable</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-6 flex gap-4"><button type="submit"${attr("disabled", saving, true)} class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50">${escape_html("Save Availability")}</button> <button type="button" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Set Default Hours (Mon-Fri, 9-5)</button></div></form></div> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4"><h3 class="font-semibold text-blue-900 mb-2">Note</h3> <p class="text-sm text-blue-800">Your connected calendars will also be checked for conflicts. Even if you're available according to these hours,
				if you have an event on your calendar during a time slot, it won't be shown as available to book.</p></div></main></div>`);
  });
}
__name(_page5, "_page5");
var init_page_svelte5 = __esm({
  "../output/server/entries/pages/dashboard/availability/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_internal();
    init_exports2();
    init_utils2();
    init_server();
    init_state_svelte();
    init_context();
    __name2(_page5, "_page");
  }
});
var __exports7 = {};
__export(__exports7, {
  component: /* @__PURE__ */ __name(() => component7, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts7, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports7, "imports"),
  index: /* @__PURE__ */ __name(() => index7, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports5, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id5, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets7, "stylesheets")
});
var index7;
var component_cache7;
var component7;
var server_id5;
var imports7;
var stylesheets7;
var fonts7;
var init__7 = __esm({
  "../output/server/nodes/6.js"() {
    init_checked_fetch();
    init_page_server_ts5();
    index7 = 6;
    component7 = /* @__PURE__ */ __name2(async () => component_cache7 ??= (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default, "component");
    server_id5 = "src/routes/dashboard/availability/+page.server.ts";
    imports7 = ["_app/immutable/nodes/6.D6wnld6W.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/B4Bv1KaN.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/-WyYYBJa.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/vr9HFtWH.js", "_app/immutable/chunks/3dsfsjWY.js"];
    stylesheets7 = [];
    fonts7 = [];
  }
});
var page_server_ts_exports6 = {};
__export(page_server_ts_exports6, {
  load: /* @__PURE__ */ __name(() => load7, "load")
});
var load7;
var init_page_server_ts6 = __esm({
  "../output/server/entries/pages/dashboard/calendars/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    load7 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      const db = event.platform?.env?.DB;
      if (!db) {
        return {
          user: null,
          outlookConfigured: false
        };
      }
      const user = await db.prepare("SELECT id, google_refresh_token, outlook_refresh_token, settings FROM users WHERE id = ?").bind(userId).first();
      const outlookConfigured = !!(event.platform?.env?.MICROSOFT_CLIENT_ID && event.platform?.env?.MICROSOFT_CLIENT_SECRET);
      let userSettings = {};
      try {
        userSettings = user?.settings ? JSON.parse(user.settings) : {};
      } catch {
        userSettings = {};
      }
      return {
        user: user ? {
          googleConnected: !!user.google_refresh_token,
          outlookConnected: !!user.outlook_refresh_token,
          defaultAvailabilityCalendars: userSettings.defaultAvailabilityCalendars,
          defaultInviteCalendar: userSettings.defaultInviteCalendar,
          selectedGoogleCalendars: userSettings.selectedGoogleCalendars
        } : null,
        outlookConfigured
      };
    }, "load");
  }
});
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: /* @__PURE__ */ __name(() => _page6, "default")
});
function CalendarSettings($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { user, outlookConfigured } = $$props;
    let saving = false;
    let googleCalendars = [];
    let selectedCalendarIds = new Set(user?.selectedGoogleCalendars || []);
    const hasGoogle = user?.googleConnected ?? false;
    const hasOutlook = (user?.outlookConnected ?? false) && outlookConfigured;
    function getDefaultAvailability() {
      if (user?.defaultAvailabilityCalendars) return user.defaultAvailabilityCalendars;
      if (hasGoogle && hasOutlook) return "both";
      if (hasOutlook) return "outlook";
      return "google";
    }
    __name(getDefaultAvailability, "getDefaultAvailability");
    __name2(getDefaultAvailability, "getDefaultAvailability");
    function getDefaultInvite() {
      if (user?.defaultInviteCalendar) return user.defaultInviteCalendar;
      if (hasGoogle) return "google";
      if (hasOutlook) return "outlook";
      return "google";
    }
    __name(getDefaultInvite, "getDefaultInvite");
    __name2(getDefaultInvite, "getDefaultInvite");
    let availabilityCalendars = getDefaultAvailability();
    let inviteCalendar = getDefaultInvite();
    $$renderer2.push(`<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"><h3 class="text-lg font-semibold text-gray-900 mb-2">Calendar Integrations</h3> <p class="text-sm text-gray-600 mb-4">Connect your calendars to check availability and send invites.</p> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="space-y-4"><div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"><div class="flex items-center gap-3"><div class="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm"><svg class="w-6 h-6" viewBox="0 0 512 512" fill="none"><path d="M390.736 121.264H121.264V390.736H390.736V121.264Z" fill="white"></path><path d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z" fill="#EA4335"></path><path d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z" fill="#188038"></path><path d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z" fill="#1967D2"></path><path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04"></path><path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853"></path><path d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z" fill="#4285F4"></path><path d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z" fill="#4285F4"></path></svg></div> <div><h4 class="font-medium text-gray-900">Google Calendar</h4> <p class="text-sm text-gray-600">`);
    if (user?.googleConnected) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-green-600">Connected</span> <span class="text-gray-500">(via login)</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span class="text-gray-500">Not connected</span>`);
    }
    $$renderer2.push(`<!--]--></p></div></div></div> <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"><div class="flex items-center gap-3"><div class="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm"><svg class="w-6 h-6" viewBox="0 0 48 48"><path fill="#40c4ff" d="M31.323,8.502L7.075,23.872l-2.085-3.29v-2.835c0-1.032,0.523-1.994,1.389-2.556l14.095-9.146c2.147-1.393,4.914-1.394,7.061-0.001L31.323,8.502z"></path><path fill="#1976d2" d="M27.317,5.911c0.073,0.043,0.145,0.088,0.217,0.135l11,7.136L11.259,30.47l-4.185-6.603l20.017-12.713C28.988,9.95,29.071,7.241,27.317,5.911z"></path><path fill="#0d47a1" d="M22.142,33.771L11.26,30.47l23.136-14.666c1.949-1.235,1.944-4.08-0.009-5.308l-0.104-0.065l0.3,0.186l7.041,4.568c0.866,0.562,1.389,1.524,1.389,2.556v2.744L22.142,33.771z"></path><path fill="#29b6f6" d="M20.886,43h15.523c3.646,0,6.602-2.956,6.602-6.602V17.797c0,1.077-0.554,2.079-1.466,2.652l-23.09,14.498c-1.246,0.782-2.001,2.15-2.001,3.62C16.454,41.016,18.438,43,20.886,43z"></path><path fill="#80d8ff" d="M27.198,42.999H11.589c-3.646,0-6.602-2.956-6.602-6.602V17.783c0,1.076,0.552,2.076,1.461,2.649l23.067,14.543c1.263,0.796,2.029,2.185,2.029,3.678C31.544,41.053,29.598,42.999,27.198,42.999z"></path><path fill="#1565c0" d="M6.453,23h10.094C18.454,23,20,24.546,20,26.453v10.094C20,38.454,18.454,40,16.547,40H6.453C4.546,40,3,38.454,3,36.547V26.453C3,24.546,4.546,23,6.453,23z"></path><path fill="#fff" d="M11.453,36.518c-1.4,0-2.55-0.452-3.449-1.355c-0.899-0.903-1.348-2.082-1.348-3.537c0-1.536,0.456-2.778,1.369-3.726c0.913-0.949,2.107-1.423,3.584-1.423c1.396,0,2.532,0.454,3.408,1.362c0.881,0.908,1.321,2.105,1.321,3.591c0,1.527-0.456,2.758-1.369,3.692C14.061,36.053,12.889,36.518,11.453,36.518z M11.493,34.601c0.763,0,1.378-0.269,1.843-0.806c0.465-0.538,0.698-1.285,0.698-2.243c0-0.998-0.226-1.775-0.677-2.331c-0.452-0.556-1.055-0.833-1.809-0.833c-0.777,0-1.403,0.287-1.877,0.861c-0.474,0.569-0.711,1.323-0.711,2.263c0,0.953,0.237,1.707,0.711,2.263C10.145,34.326,10.752,34.601,11.493,34.601z"></path></svg></div> <div><h4 class="font-medium text-gray-900">Outlook Calendar</h4> <p class="text-sm">`);
    if (!outlookConfigured) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-gray-500">Not configured</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (user?.outlookConnected) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="text-green-600">Connected</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="text-gray-500">Not connected</span>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></p></div></div> `);
    if (outlookConfigured) {
      $$renderer2.push("<!--[-->");
      if (user?.outlookConnected) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button class="px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition">Disconnect</button>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<a href="/auth/outlook" class="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Connect</a>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (hasGoogle || hasOutlook) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><h4 class="font-medium text-gray-900 mb-1">Default Calendar Settings</h4> <p class="text-sm text-gray-600 mb-4">These settings apply to all event types unless overridden.</p> <div class="space-y-4"><div><label for="availabilityCalendars" class="block text-sm font-medium text-gray-700 mb-1">Check availability from</label> `);
      $$renderer2.select(
        {
          id: "availabilityCalendars",
          value: availabilityCalendars,
          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        },
        ($$renderer3) => {
          if (hasGoogle) {
            $$renderer3.push("<!--[-->");
            $$renderer3.option({ value: "google" }, ($$renderer4) => {
              $$renderer4.push(`Google Calendar only`);
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
          if (hasOutlook) {
            $$renderer3.push("<!--[-->");
            $$renderer3.option({ value: "outlook" }, ($$renderer4) => {
              $$renderer4.push(`Outlook Calendar only`);
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
          if (hasGoogle && hasOutlook) {
            $$renderer3.push("<!--[-->");
            $$renderer3.option({ value: "both" }, ($$renderer4) => {
              $$renderer4.push(`Both calendars`);
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(`</div> `);
      if (hasGoogle && (availabilityCalendars === "google" || availabilityCalendars === "both")) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div><label class="block text-sm font-medium text-gray-700 mb-2">Google calendars to check</label> `);
        {
          $$renderer2.push("<!--[!-->");
          if (googleCalendars.length === 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="text-sm text-gray-500">No calendars found</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="space-y-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3"><!--[-->`);
            const each_array = ensure_array_like(googleCalendars);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let calendar = each_array[$$index];
              $$renderer2.push(`<label class="flex items-center gap-2 cursor-pointer"><input type="checkbox"${attr("checked", selectedCalendarIds.has(calendar.id), true)} class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/> <span class="text-sm text-gray-700">${escape_html(calendar.summary)} `);
              if (calendar.primary) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<span class="text-xs text-gray-500">(Primary)</span>`);
              } else {
                $$renderer2.push("<!--[!-->");
              }
              $$renderer2.push(`<!--]--></span></label>`);
            }
            $$renderer2.push(`<!--]--></div> <p class="text-xs text-gray-500 mt-1">Selected: ${escape_html(selectedCalendarIds.size)} of ${escape_html(googleCalendars.length)}</p>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div><label for="inviteCalendar" class="block text-sm font-medium text-gray-700 mb-1">Send calendar invite via</label> `);
      $$renderer2.select(
        {
          id: "inviteCalendar",
          value: inviteCalendar,
          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        },
        ($$renderer3) => {
          if (hasGoogle) {
            $$renderer3.push("<!--[-->");
            $$renderer3.option({ value: "google" }, ($$renderer4) => {
              $$renderer4.push(`Google Calendar (Google Meet)`);
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
          if (hasOutlook) {
            $$renderer3.push("<!--[-->");
            $$renderer3.option({ value: "outlook" }, ($$renderer4) => {
              $$renderer4.push(`Outlook Calendar (Microsoft Teams)`);
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(`</div> <button${attr("disabled", saving, true)} class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition">${escape_html("Save Settings")}</button></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
__name(CalendarSettings, "CalendarSettings");
function _page6($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-500 hover:text-gray-700"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></a> <div><h1 class="text-2xl font-bold text-gray-900">Calendar Settings</h1> <p class="text-sm text-gray-600">Connect calendars and configure defaults</p></div></div></div></header> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
    CalendarSettings($$renderer2, { user: data.user, outlookConfigured: data.outlookConfigured });
    $$renderer2.push(`<!----></main></div>`);
  });
}
__name(_page6, "_page6");
var init_page_svelte6 = __esm({
  "../output/server/entries/pages/dashboard/calendars/_page.svelte.js"() {
    init_checked_fetch();
    init_clsx();
    init_index2();
    init_context();
    __name2(CalendarSettings, "CalendarSettings");
    __name2(_page6, "_page");
  }
});
var __exports8 = {};
__export(__exports8, {
  component: /* @__PURE__ */ __name(() => component8, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts8, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports8, "imports"),
  index: /* @__PURE__ */ __name(() => index8, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports6, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id6, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets8, "stylesheets")
});
var index8;
var component_cache8;
var component8;
var server_id6;
var imports8;
var stylesheets8;
var fonts8;
var init__8 = __esm({
  "../output/server/nodes/7.js"() {
    init_checked_fetch();
    init_page_server_ts6();
    index8 = 7;
    component8 = /* @__PURE__ */ __name2(async () => component_cache8 ??= (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default, "component");
    server_id6 = "src/routes/dashboard/calendars/+page.server.ts";
    imports8 = ["_app/immutable/nodes/7.0pz4pDDh.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/BH885Lyd.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/dm5yZCSw.js", "_app/immutable/chunks/BjWePiXU.js"];
    stylesheets8 = [];
    fonts8 = [];
  }
});
var page_server_ts_exports7 = {};
__export(page_server_ts_exports7, {
  load: /* @__PURE__ */ __name(() => load8, "load")
});
var load8;
var init_page_server_ts7 = __esm({
  "../output/server/entries/pages/dashboard/emails/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    load8 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      return {};
    }, "load");
  }
});
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: /* @__PURE__ */ __name(() => _page7, "default")
});
function _page7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-500 hover:text-gray-700"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></a> <div><h1 class="text-2xl font-bold text-gray-900">Email Settings</h1> <p class="text-sm text-gray-600">Manage your automated email notifications</p></div></div></div></header> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-center py-12"><div class="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>`);
    }
    $$renderer2.push(`<!--]--></main></div>`);
  });
}
__name(_page7, "_page7");
var init_page_svelte7 = __esm({
  "../output/server/entries/pages/dashboard/emails/_page.svelte.js"() {
    init_checked_fetch();
    init_clsx();
    __name2(_page7, "_page");
  }
});
var __exports9 = {};
__export(__exports9, {
  component: /* @__PURE__ */ __name(() => component9, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts9, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports9, "imports"),
  index: /* @__PURE__ */ __name(() => index9, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports7, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id7, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets9, "stylesheets")
});
var index9;
var component_cache9;
var component9;
var server_id7;
var imports9;
var stylesheets9;
var fonts9;
var init__9 = __esm({
  "../output/server/nodes/8.js"() {
    init_checked_fetch();
    init_page_server_ts7();
    index9 = 8;
    component9 = /* @__PURE__ */ __name2(async () => component_cache9 ??= (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default, "component");
    server_id7 = "src/routes/dashboard/emails/+page.server.ts";
    imports9 = ["_app/immutable/nodes/8.D7jKS0Gr.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/C1Rppsd0.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});
var require_assertString = __commonJS({
  "../../node_modules/validator/lib/util/assertString.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = assertString;
    function assertString(input) {
      if (input === void 0 || input === null) throw new TypeError("Expected a string but received a ".concat(input));
      if (input.constructor.name !== "String") throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
    }
    __name(assertString, "assertString");
    __name2(assertString, "assertString");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_toDate = __commonJS({
  "../../node_modules/validator/lib/toDate.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toDate;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function toDate(date) {
      (0, _assertString.default)(date);
      date = Date.parse(date);
      return !isNaN(date) ? new Date(date) : null;
    }
    __name(toDate, "toDate");
    __name2(toDate, "toDate");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_nullUndefinedCheck = __commonJS({
  "../../node_modules/validator/lib/util/nullUndefinedCheck.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNullOrUndefined;
    function isNullOrUndefined(value) {
      return value === null || value === void 0;
    }
    __name(isNullOrUndefined, "isNullOrUndefined");
    __name2(isNullOrUndefined, "isNullOrUndefined");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_alpha = __commonJS({
  "../../node_modules/validator/lib/alpha.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.farsiLocales = exports.englishLocales = exports.dotDecimal = exports.decimal = exports.commaDecimal = exports.bengaliLocales = exports.arabicLocales = exports.alphanumeric = exports.alpha = void 0;
    var alpha = exports.alpha = {
      "en-US": /^[A-Z]+$/i,
      "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[А-Я]+$/i,
      "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[A-ZÆØÅ]+$/i,
      "de-DE": /^[A-ZÄÖÜß]+$/i,
      "el-GR": /^[Α-ώ]+$/i,
      "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
      "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
      "fi-FI": /^[A-ZÅÄÖ]+$/i,
      "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
      "nb-NO": /^[A-ZÆØÅ]+$/i,
      "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[A-ZÆØÅ]+$/i,
      "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[А-ЯЁ]+$/i,
      "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
      "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๐\s]+$/i,
      "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
      "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[א-ת]+$/,
      fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
      bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
      eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
      "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
      "si-LK": /^[\u0D80-\u0DFF]+$/,
      "ta-IN": /^[\u0B80-\u0BFF]+$/i,
      "te-IN": /^[\u0C00-\u0C7F]+$/i,
      "kn-IN": /^[\u0C80-\u0CFF]+$/i,
      "ml-IN": /^[\u0D00-\u0D7F]+$/i,
      "gu-IN": /^[\u0A80-\u0AFF]+$/i,
      "pa-IN": /^[\u0A00-\u0A7F]+$/i,
      "or-IN": /^[\u0B00-\u0B7F]+$/i
    };
    var alphanumeric = exports.alphanumeric = {
      "en-US": /^[0-9A-Z]+$/i,
      "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[0-9А-Я]+$/i,
      "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[0-9A-ZÆØÅ]+$/i,
      "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
      "el-GR": /^[0-9Α-ω]+$/i,
      "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
      "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
      "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
      "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
      "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
      "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[0-9А-ЯЁ]+$/i,
      "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
      "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๙\s]+$/i,
      "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
      "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[0-9א-ת]+$/,
      fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
      bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
      eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
      "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
      "si-LK": /^[0-9\u0D80-\u0DFF]+$/,
      "ta-IN": /^[0-9\u0B80-\u0BFF.]+$/i,
      "te-IN": /^[0-9\u0C00-\u0C7F.]+$/i,
      "kn-IN": /^[0-9\u0C80-\u0CFF.]+$/i,
      "ml-IN": /^[0-9\u0D00-\u0D7F.]+$/i,
      "gu-IN": /^[0-9\u0A80-\u0AFF.]+$/i,
      "pa-IN": /^[0-9\u0A00-\u0A7F.]+$/i,
      "or-IN": /^[0-9\u0B00-\u0B7F.]+$/i
    };
    var decimal = exports.decimal = {
      "en-US": ".",
      ar: "\u066B"
    };
    var englishLocales = exports.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
    for (i = 0; i < englishLocales.length; i++) {
      locale = "en-".concat(englishLocales[i]);
      alpha[locale] = alpha["en-US"];
      alphanumeric[locale] = alphanumeric["en-US"];
      decimal[locale] = decimal["en-US"];
    }
    var locale;
    var i;
    var arabicLocales = exports.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
    for (_i = 0; _i < arabicLocales.length; _i++) {
      _locale = "ar-".concat(arabicLocales[_i]);
      alpha[_locale] = alpha.ar;
      alphanumeric[_locale] = alphanumeric.ar;
      decimal[_locale] = decimal.ar;
    }
    var _locale;
    var _i;
    var farsiLocales = exports.farsiLocales = ["IR", "AF"];
    for (_i2 = 0; _i2 < farsiLocales.length; _i2++) {
      _locale2 = "fa-".concat(farsiLocales[_i2]);
      alphanumeric[_locale2] = alphanumeric.fa;
      decimal[_locale2] = decimal.ar;
    }
    var _locale2;
    var _i2;
    var bengaliLocales = exports.bengaliLocales = ["BD", "IN"];
    for (_i3 = 0; _i3 < bengaliLocales.length; _i3++) {
      _locale3 = "bn-".concat(bengaliLocales[_i3]);
      alpha[_locale3] = alpha.bn;
      alphanumeric[_locale3] = alphanumeric.bn;
      decimal[_locale3] = decimal["en-US"];
    }
    var _locale3;
    var _i3;
    var dotDecimal = exports.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
    var commaDecimal = exports.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "gu-IN", "hi-IN", "hu-HU", "id-ID", "it-IT", "kk-KZ", "kn-IN", "ku-IQ", "ml-IN", "nb-NO", "nl-NL", "nn-NO", "or-IN", "pa-IN", "pl-PL", "pt-PT", "ru-RU", "si-LK", "sl-SI", "sr-RS", "sr-RS@latin", "sv-SE", "ta-IN", "te-IN", "tr-TR", "uk-UA", "vi-VN"];
    for (_i4 = 0; _i4 < dotDecimal.length; _i4++) {
      decimal[dotDecimal[_i4]] = decimal["en-US"];
    }
    var _i4;
    for (_i5 = 0; _i5 < commaDecimal.length; _i5++) {
      decimal[commaDecimal[_i5]] = ",";
    }
    var _i5;
    alpha["fr-CA"] = alpha["fr-FR"];
    alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
    alpha["pt-BR"] = alpha["pt-PT"];
    alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
    decimal["pt-BR"] = decimal["pt-PT"];
    alpha["pl-Pl"] = alpha["pl-PL"];
    alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
    decimal["pl-Pl"] = decimal["pl-PL"];
    alpha["fa-AF"] = alpha.fa;
  }
});
var require_isFloat = __commonJS({
  "../../node_modules/validator/lib/isFloat.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFloat;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _nullUndefinedCheck = _interopRequireDefault(require_nullUndefinedCheck());
    var _alpha = require_alpha();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isFloat(str, options2) {
      (0, _assertString.default)(str);
      options2 = options2 || {};
      var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options2.locale ? _alpha.decimal[options2.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
      if (str === "" || str === "." || str === "," || str === "-" || str === "+") {
        return false;
      }
      var value = parseFloat(str.replace(",", "."));
      return float.test(str) && (!options2.hasOwnProperty("min") || (0, _nullUndefinedCheck.default)(options2.min) || value >= options2.min) && (!options2.hasOwnProperty("max") || (0, _nullUndefinedCheck.default)(options2.max) || value <= options2.max) && (!options2.hasOwnProperty("lt") || (0, _nullUndefinedCheck.default)(options2.lt) || value < options2.lt) && (!options2.hasOwnProperty("gt") || (0, _nullUndefinedCheck.default)(options2.gt) || value > options2.gt);
    }
    __name(isFloat, "isFloat");
    __name2(isFloat, "isFloat");
    var locales = exports.locales = Object.keys(_alpha.decimal);
  }
});
var require_toFloat = __commonJS({
  "../../node_modules/validator/lib/toFloat.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toFloat;
    var _isFloat = _interopRequireDefault(require_isFloat());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function toFloat(str) {
      if (!(0, _isFloat.default)(str)) return NaN;
      return parseFloat(str);
    }
    __name(toFloat, "toFloat");
    __name2(toFloat, "toFloat");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_toInt = __commonJS({
  "../../node_modules/validator/lib/toInt.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toInt;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function toInt(str, radix) {
      (0, _assertString.default)(str);
      return parseInt(str, radix || 10);
    }
    __name(toInt, "toInt");
    __name2(toInt, "toInt");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_toBoolean = __commonJS({
  "../../node_modules/validator/lib/toBoolean.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toBoolean;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function toBoolean(str, strict) {
      (0, _assertString.default)(str);
      if (strict) {
        return str === "1" || /^true$/i.test(str);
      }
      return str !== "0" && !/^false$/i.test(str) && str !== "";
    }
    __name(toBoolean, "toBoolean");
    __name2(toBoolean, "toBoolean");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_equals = __commonJS({
  "../../node_modules/validator/lib/equals.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = equals2;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function equals2(str, comparison) {
      (0, _assertString.default)(str);
      return str === comparison;
    }
    __name(equals2, "equals2");
    __name2(equals2, "equals");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_toString = __commonJS({
  "../../node_modules/validator/lib/util/toString.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toString2;
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    function toString2(input) {
      if (_typeof(input) === "object" && input !== null) {
        if (typeof input.toString === "function") {
          input = input.toString();
        } else {
          input = "[object Object]";
        }
      } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) {
        input = "";
      }
      return String(input);
    }
    __name(toString2, "toString2");
    __name2(toString2, "toString");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_merge = __commonJS({
  "../../node_modules/validator/lib/util/merge.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = merge;
    function merge() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var defaults = arguments.length > 1 ? arguments[1] : void 0;
      for (var key2 in defaults) {
        if (typeof obj[key2] === "undefined") {
          obj[key2] = defaults[key2];
        }
      }
      return obj;
    }
    __name(merge, "merge");
    __name2(merge, "merge");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_contains = __commonJS({
  "../../node_modules/validator/lib/contains.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = contains;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toString = _interopRequireDefault(require_toString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var defaultContainsOptions = {
      ignoreCase: false,
      minOccurrences: 1
    };
    function contains(str, elem, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, defaultContainsOptions);
      if (options2.ignoreCase) {
        return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options2.minOccurrences;
      }
      return str.split((0, _toString.default)(elem)).length > options2.minOccurrences;
    }
    __name(contains, "contains");
    __name2(contains, "contains");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_matches = __commonJS({
  "../../node_modules/validator/lib/matches.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = matches;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function matches(str, pattern2, modifiers) {
      (0, _assertString.default)(str);
      if (Object.prototype.toString.call(pattern2) !== "[object RegExp]") {
        pattern2 = new RegExp(pattern2, modifiers);
      }
      return !!str.match(pattern2);
    }
    __name(matches, "matches");
    __name2(matches, "matches");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_checkHost = __commonJS({
  "../../node_modules/validator/lib/util/checkHost.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = checkHost;
    function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    }
    __name(isRegExp, "isRegExp");
    __name2(isRegExp, "isRegExp");
    function checkHost(host, matches) {
      for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        if (host === match || isRegExp(match) && match.test(host)) {
          return true;
        }
      }
      return false;
    }
    __name(checkHost, "checkHost");
    __name2(checkHost, "checkHost");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isByteLength = __commonJS({
  "../../node_modules/validator/lib/isByteLength.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isByteLength;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    function isByteLength(str, options2) {
      (0, _assertString.default)(str);
      var min;
      var max;
      if (_typeof(options2) === "object") {
        min = options2.min || 0;
        max = options2.max;
      } else {
        min = arguments[1];
        max = arguments[2];
      }
      var len = encodeURI(str).split(/%..|./).length - 1;
      return len >= min && (typeof max === "undefined" || len <= max);
    }
    __name(isByteLength, "isByteLength");
    __name2(isByteLength, "isByteLength");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isFQDN = __commonJS({
  "../../node_modules/validator/lib/isFQDN.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFQDN;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var default_fqdn_options = {
      require_tld: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_numeric_tld: false,
      allow_wildcard: false,
      ignore_max_length: false
    };
    function isFQDN(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, default_fqdn_options);
      if (options2.allow_trailing_dot && str[str.length - 1] === ".") {
        str = str.substring(0, str.length - 1);
      }
      if (options2.allow_wildcard === true && str.indexOf("*.") === 0) {
        str = str.substring(2);
      }
      var parts = str.split(".");
      var tld = parts[parts.length - 1];
      if (options2.require_tld) {
        if (parts.length < 2) {
          return false;
        }
        if (!options2.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
          return false;
        }
        if (/\s/.test(tld)) {
          return false;
        }
      }
      if (!options2.allow_numeric_tld && /^\d+$/.test(tld)) {
        return false;
      }
      return parts.every(function(part) {
        if (part.length > 63 && !options2.ignore_max_length) {
          return false;
        }
        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (/[\uff01-\uff5e]/.test(part)) {
          return false;
        }
        if (/^-|-$/.test(part)) {
          return false;
        }
        if (!options2.allow_underscores && /_/.test(part)) {
          return false;
        }
        return true;
      });
    }
    __name(isFQDN, "isFQDN");
    __name2(isFQDN, "isFQDN");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isIP = __commonJS({
  "../../node_modules/validator/lib/isIP.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIP;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
    var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
    var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
    var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
    var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
    function isIP(ipAddress) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(ipAddress);
      var version = (_typeof(options2) === "object" ? options2.version : arguments[1]) || "";
      if (!version) {
        return isIP(ipAddress, {
          version: 4
        }) || isIP(ipAddress, {
          version: 6
        });
      }
      if (version.toString() === "4") {
        return IPv4AddressRegExp.test(ipAddress);
      }
      if (version.toString() === "6") {
        return IPv6AddressRegExp.test(ipAddress);
      }
      return false;
    }
    __name(isIP, "isIP");
    __name2(isIP, "isIP");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isEmail = __commonJS({
  "../../node_modules/validator/lib/isEmail.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmail;
    var _assertString = _interopRequireDefault(require_assertString());
    var _checkHost = _interopRequireDefault(require_checkHost());
    var _isByteLength = _interopRequireDefault(require_isByteLength());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isIP = _interopRequireDefault(require_isIP());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var default_email_options = {
      allow_display_name: false,
      allow_underscores: false,
      require_display_name: false,
      allow_utf8_local_part: true,
      require_tld: true,
      blacklisted_chars: "",
      ignore_max_length: false,
      host_blacklist: [],
      host_whitelist: []
    };
    var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var gmailUserPart = /^[a-z\d]+$/;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    var defaultMaxEmailLength = 254;
    function validateDisplayName(display_name) {
      var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
      if (!display_name_without_quotes.trim()) {
        return false;
      }
      var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
      if (contains_illegal) {
        if (display_name_without_quotes === display_name) {
          return false;
        }
        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) {
          return false;
        }
      }
      return true;
    }
    __name(validateDisplayName, "validateDisplayName");
    __name2(validateDisplayName, "validateDisplayName");
    function isEmail(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, default_email_options);
      if (options2.require_display_name || options2.allow_display_name) {
        var display_email = str.match(splitNameAddress);
        if (display_email) {
          var display_name = display_email[1];
          str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
          if (display_name.endsWith(" ")) {
            display_name = display_name.slice(0, -1);
          }
          if (!validateDisplayName(display_name)) {
            return false;
          }
        } else if (options2.require_display_name) {
          return false;
        }
      }
      if (!options2.ignore_max_length && str.length > defaultMaxEmailLength) {
        return false;
      }
      var parts = str.split("@");
      var domain = parts.pop();
      var lower_domain = domain.toLowerCase();
      if (options2.host_blacklist.length > 0 && (0, _checkHost.default)(lower_domain, options2.host_blacklist)) {
        return false;
      }
      if (options2.host_whitelist.length > 0 && !(0, _checkHost.default)(lower_domain, options2.host_whitelist)) {
        return false;
      }
      var user = parts.join("@");
      if (options2.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
        user = user.toLowerCase();
        var username = user.split("+")[0];
        if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
          min: 6,
          max: 30
        })) {
          return false;
        }
        var _user_parts = username.split(".");
        for (var i = 0; i < _user_parts.length; i++) {
          if (!gmailUserPart.test(_user_parts[i])) {
            return false;
          }
        }
      }
      if (options2.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
      }) || !(0, _isByteLength.default)(domain, {
        max: 254
      }))) {
        return false;
      }
      if (!(0, _isFQDN.default)(domain, {
        require_tld: options2.require_tld,
        ignore_max_length: options2.ignore_max_length,
        allow_underscores: options2.allow_underscores
      })) {
        if (!options2.allow_ip_domain) {
          return false;
        }
        if (!(0, _isIP.default)(domain)) {
          if (!domain.startsWith("[") || !domain.endsWith("]")) {
            return false;
          }
          var noBracketdomain = domain.slice(1, -1);
          if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
            return false;
          }
        }
      }
      if (options2.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options2.blacklisted_chars, "]+"), "g")) !== -1) return false;
      }
      if (user[0] === '"' && user[user.length - 1] === '"') {
        user = user.slice(1, user.length - 1);
        return options2.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
      }
      var pattern2 = options2.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
      var user_parts = user.split(".");
      for (var _i = 0; _i < user_parts.length; _i++) {
        if (!pattern2.test(user_parts[_i])) {
          return false;
        }
      }
      return true;
    }
    __name(isEmail, "isEmail");
    __name2(isEmail, "isEmail");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_includesString = __commonJS({
  "../../node_modules/validator/lib/util/includesString.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var includes = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function includes2(str, val) {
      return str.indexOf(val) !== -1;
    }, "includes2"), "includes");
    var _default = exports.default = includes;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isURL = __commonJS({
  "../../node_modules/validator/lib/isURL.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isURL;
    var _assertString = _interopRequireDefault(require_assertString());
    var _checkHost = _interopRequireDefault(require_checkHost());
    var _includesString = _interopRequireDefault(require_includesString());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isIP = _interopRequireDefault(require_isIP());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _slicedToArray(r3, e3) {
      return _arrayWithHoles(r3) || _iterableToArrayLimit(r3, e3) || _unsupportedIterableToArray(r3, e3) || _nonIterableRest();
    }
    __name(_slicedToArray, "_slicedToArray");
    __name2(_slicedToArray, "_slicedToArray");
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    __name(_nonIterableRest, "_nonIterableRest");
    __name2(_nonIterableRest, "_nonIterableRest");
    function _unsupportedIterableToArray(r3, a) {
      if (r3) {
        if ("string" == typeof r3) return _arrayLikeToArray(r3, a);
        var t2 = {}.toString.call(r3).slice(8, -1);
        return "Object" === t2 && r3.constructor && (t2 = r3.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r3) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r3, a) : void 0;
      }
    }
    __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    __name2(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    function _arrayLikeToArray(r3, a) {
      (null == a || a > r3.length) && (a = r3.length);
      for (var e3 = 0, n2 = Array(a); e3 < a; e3++) n2[e3] = r3[e3];
      return n2;
    }
    __name(_arrayLikeToArray, "_arrayLikeToArray");
    __name2(_arrayLikeToArray, "_arrayLikeToArray");
    function _iterableToArrayLimit(r3, l) {
      var t2 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
      if (null != t2) {
        var e3, n2, i, u, a = [], f = true, o2 = false;
        try {
          if (i = (t2 = t2.call(r3)).next, 0 === l) {
            if (Object(t2) !== t2) return;
            f = false;
          } else for (; !(f = (e3 = i.call(t2)).done) && (a.push(e3.value), a.length !== l); f = true) ;
        } catch (r4) {
          o2 = true, n2 = r4;
        } finally {
          try {
            if (!f && null != t2.return && (u = t2.return(), Object(u) !== u)) return;
          } finally {
            if (o2) throw n2;
          }
        }
        return a;
      }
    }
    __name(_iterableToArrayLimit, "_iterableToArrayLimit");
    __name2(_iterableToArrayLimit, "_iterableToArrayLimit");
    function _arrayWithHoles(r3) {
      if (Array.isArray(r3)) return r3;
    }
    __name(_arrayWithHoles, "_arrayWithHoles");
    __name2(_arrayWithHoles, "_arrayWithHoles");
    var default_url_options = {
      protocols: ["http", "https", "ftp"],
      require_tld: true,
      require_protocol: false,
      require_host: true,
      require_port: false,
      require_valid_protocol: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_protocol_relative_urls: false,
      allow_fragments: true,
      allow_query_components: true,
      validate_length: true,
      max_allowed_length: 2084
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function isURL(url, options2) {
      (0, _assertString.default)(url);
      if (!url || /[\s<>]/.test(url)) {
        return false;
      }
      if (url.indexOf("mailto:") === 0) {
        return false;
      }
      options2 = (0, _merge.default)(options2, default_url_options);
      if (options2.validate_length && url.length > options2.max_allowed_length) {
        return false;
      }
      if (!options2.allow_fragments && (0, _includesString.default)(url, "#")) {
        return false;
      }
      if (!options2.allow_query_components && ((0, _includesString.default)(url, "?") || (0, _includesString.default)(url, "&"))) {
        return false;
      }
      var protocol, auth, host, hostname, port, port_str, split, ipv6;
      split = url.split("#");
      url = split.shift();
      split = url.split("?");
      url = split.shift();
      var protocol_match = url.match(/^([a-z][a-z0-9+\-.]*):/i);
      var had_explicit_protocol = false;
      var cleanUpProtocol = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function cleanUpProtocol2(potential_protocol2) {
        had_explicit_protocol = true;
        protocol = potential_protocol2.toLowerCase();
        if (options2.require_valid_protocol && options2.protocols.indexOf(protocol) === -1) {
          return false;
        }
        return url.substring(protocol_match[0].length);
      }, "cleanUpProtocol2"), "cleanUpProtocol");
      if (protocol_match) {
        var potential_protocol = protocol_match[1];
        var after_colon = url.substring(protocol_match[0].length);
        var starts_with_slashes = after_colon.slice(0, 2) === "//";
        if (!starts_with_slashes) {
          var first_slash_position = after_colon.indexOf("/");
          var before_slash = first_slash_position === -1 ? after_colon : after_colon.substring(0, first_slash_position);
          var at_position = before_slash.indexOf("@");
          if (at_position !== -1) {
            var before_at = before_slash.substring(0, at_position);
            var valid_auth_regex = /^[a-zA-Z0-9\-_.%:]*$/;
            var is_valid_auth = valid_auth_regex.test(before_at);
            if (is_valid_auth) {
              if (options2.require_protocol) {
                return false;
              }
            } else {
              url = cleanUpProtocol(potential_protocol);
              if (url === false) {
                return false;
              }
            }
          } else {
            var looks_like_port = /^[0-9]/.test(after_colon);
            if (looks_like_port) {
              if (options2.require_protocol) {
                return false;
              }
            } else {
              url = cleanUpProtocol(potential_protocol);
              if (url === false) {
                return false;
              }
            }
          }
        } else {
          url = cleanUpProtocol(potential_protocol);
          if (url === false) {
            return false;
          }
        }
      } else if (options2.require_protocol) {
        return false;
      }
      if (url.slice(0, 2) === "//") {
        if (!had_explicit_protocol && !options2.allow_protocol_relative_urls) {
          return false;
        }
        url = url.slice(2);
      }
      if (url === "") {
        return false;
      }
      split = url.split("/");
      url = split.shift();
      if (url === "" && !options2.require_host) {
        return true;
      }
      split = url.split("@");
      if (split.length > 1) {
        if (options2.disallow_auth) {
          return false;
        }
        if (split[0] === "") {
          return false;
        }
        auth = split.shift();
        if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
          return false;
        }
        var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
        if (user === "" && password === "") {
          return false;
        }
      }
      hostname = split.join("@");
      port_str = null;
      ipv6 = null;
      var ipv6_match = hostname.match(wrapped_ipv6);
      if (ipv6_match) {
        host = "";
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
      } else {
        split = hostname.split(":");
        host = split.shift();
        if (split.length) {
          port_str = split.join(":");
        }
      }
      if (port_str !== null && port_str.length > 0) {
        port = parseInt(port_str, 10);
        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
          return false;
        }
      } else if (options2.require_port) {
        return false;
      }
      if (options2.host_whitelist) {
        return (0, _checkHost.default)(host, options2.host_whitelist);
      }
      if (host === "" && !options2.require_host) {
        return true;
      }
      if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options2) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
        return false;
      }
      host = host || ipv6;
      if (options2.host_blacklist && (0, _checkHost.default)(host, options2.host_blacklist)) {
        return false;
      }
      return true;
    }
    __name(isURL, "isURL");
    __name2(isURL, "isURL");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMACAddress = __commonJS({
  "../../node_modules/validator/lib/isMACAddress.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMACAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
    var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
    var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
    var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
    var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
    var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
    function isMACAddress(str, options2) {
      (0, _assertString.default)(str);
      if (options2 !== null && options2 !== void 0 && options2.eui) {
        options2.eui = String(options2.eui);
      }
      if (options2 !== null && options2 !== void 0 && options2.no_colons || options2 !== null && options2 !== void 0 && options2.no_separators) {
        if (options2.eui === "48") {
          return macAddress48NoSeparators.test(str);
        }
        if (options2.eui === "64") {
          return macAddress64NoSeparators.test(str);
        }
        return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
      }
      if ((options2 === null || options2 === void 0 ? void 0 : options2.eui) === "48") {
        return macAddress48.test(str) || macAddress48WithDots.test(str);
      }
      if ((options2 === null || options2 === void 0 ? void 0 : options2.eui) === "64") {
        return macAddress64.test(str) || macAddress64WithDots.test(str);
      }
      return isMACAddress(str, {
        eui: "48"
      }) || isMACAddress(str, {
        eui: "64"
      });
    }
    __name(isMACAddress, "isMACAddress");
    __name2(isMACAddress, "isMACAddress");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isIPRange = __commonJS({
  "../../node_modules/validator/lib/isIPRange.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIPRange;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isIP = _interopRequireDefault(require_isIP());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var subnetMaybe = /^\d{1,3}$/;
    var v4Subnet = 32;
    var v6Subnet = 128;
    function isIPRange(str) {
      var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, _assertString.default)(str);
      var parts = str.split("/");
      if (parts.length !== 2) {
        return false;
      }
      if (!subnetMaybe.test(parts[1])) {
        return false;
      }
      if (parts[1].length > 1 && parts[1].startsWith("0")) {
        return false;
      }
      var isValidIP = (0, _isIP.default)(parts[0], version);
      if (!isValidIP) {
        return false;
      }
      var expectedSubnet = null;
      switch (String(version)) {
        case "4":
          expectedSubnet = v4Subnet;
          break;
        case "6":
          expectedSubnet = v6Subnet;
          break;
        default:
          expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
      }
      return parts[1] <= expectedSubnet && parts[1] >= 0;
    }
    __name(isIPRange, "isIPRange");
    __name2(isIPRange, "isIPRange");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isDate = __commonJS({
  "../../node_modules/validator/lib/isDate.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDate;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _slicedToArray(r3, e3) {
      return _arrayWithHoles(r3) || _iterableToArrayLimit(r3, e3) || _unsupportedIterableToArray(r3, e3) || _nonIterableRest();
    }
    __name(_slicedToArray, "_slicedToArray");
    __name2(_slicedToArray, "_slicedToArray");
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    __name(_nonIterableRest, "_nonIterableRest");
    __name2(_nonIterableRest, "_nonIterableRest");
    function _iterableToArrayLimit(r3, l) {
      var t2 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
      if (null != t2) {
        var e3, n2, i, u, a = [], f = true, o2 = false;
        try {
          if (i = (t2 = t2.call(r3)).next, 0 === l) {
            if (Object(t2) !== t2) return;
            f = false;
          } else for (; !(f = (e3 = i.call(t2)).done) && (a.push(e3.value), a.length !== l); f = true) ;
        } catch (r4) {
          o2 = true, n2 = r4;
        } finally {
          try {
            if (!f && null != t2.return && (u = t2.return(), Object(u) !== u)) return;
          } finally {
            if (o2) throw n2;
          }
        }
        return a;
      }
    }
    __name(_iterableToArrayLimit, "_iterableToArrayLimit");
    __name2(_iterableToArrayLimit, "_iterableToArrayLimit");
    function _arrayWithHoles(r3) {
      if (Array.isArray(r3)) return r3;
    }
    __name(_arrayWithHoles, "_arrayWithHoles");
    __name2(_arrayWithHoles, "_arrayWithHoles");
    function _createForOfIteratorHelper(r3, e3) {
      var t2 = "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
      if (!t2) {
        if (Array.isArray(r3) || (t2 = _unsupportedIterableToArray(r3)) || e3 && r3 && "number" == typeof r3.length) {
          t2 && (r3 = t2);
          var _n = 0, F = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function F2() {
          }, "F2"), "F");
          return { s: F, n: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function n2() {
            return _n >= r3.length ? { done: true } : { done: false, value: r3[_n++] };
          }, "n2"), "n"), e: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function e4(r4) {
            throw r4;
          }, "e4"), "e"), f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o2, a = true, u = false;
      return { s: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function s3() {
        t2 = t2.call(r3);
      }, "s3"), "s"), n: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function n2() {
        var r4 = t2.next();
        return a = r4.done, r4;
      }, "n2"), "n"), e: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function e4(r4) {
        u = true, o2 = r4;
      }, "e4"), "e"), f: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function f() {
        try {
          a || null == t2.return || t2.return();
        } finally {
          if (u) throw o2;
        }
      }, "f"), "f") };
    }
    __name(_createForOfIteratorHelper, "_createForOfIteratorHelper");
    __name2(_createForOfIteratorHelper, "_createForOfIteratorHelper");
    function _unsupportedIterableToArray(r3, a) {
      if (r3) {
        if ("string" == typeof r3) return _arrayLikeToArray(r3, a);
        var t2 = {}.toString.call(r3).slice(8, -1);
        return "Object" === t2 && r3.constructor && (t2 = r3.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r3) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r3, a) : void 0;
      }
    }
    __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    __name2(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    function _arrayLikeToArray(r3, a) {
      (null == a || a > r3.length) && (a = r3.length);
      for (var e3 = 0, n2 = Array(a); e3 < a; e3++) n2[e3] = r3[e3];
      return n2;
    }
    __name(_arrayLikeToArray, "_arrayLikeToArray");
    __name2(_arrayLikeToArray, "_arrayLikeToArray");
    var default_date_options = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: false
    };
    function isValidFormat(format) {
      return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
    }
    __name(isValidFormat, "isValidFormat");
    __name2(isValidFormat, "isValidFormat");
    function zip(date, format) {
      var zippedArr = [], len = Math.max(date.length, format.length);
      for (var i = 0; i < len; i++) {
        zippedArr.push([date[i], format[i]]);
      }
      return zippedArr;
    }
    __name(zip, "zip");
    __name2(zip, "zip");
    function isDate(input, options2) {
      if (typeof options2 === "string") {
        options2 = (0, _merge.default)({
          format: options2
        }, default_date_options);
      } else {
        options2 = (0, _merge.default)(options2, default_date_options);
      }
      if (typeof input === "string" && isValidFormat(options2.format)) {
        if (options2.strictMode && input.length !== options2.format.length) return false;
        var formatDelimiter = options2.delimiters.find(function(delimiter) {
          return options2.format.indexOf(delimiter) !== -1;
        });
        var dateDelimiter = options2.strictMode ? formatDelimiter : options2.delimiters.find(function(delimiter) {
          return input.indexOf(delimiter) !== -1;
        });
        var dateAndFormat = zip(input.split(dateDelimiter), options2.format.toLowerCase().split(formatDelimiter));
        var dateObj = {};
        var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
            if (!dateWord || !formatWord || dateWord.length !== formatWord.length) {
              return false;
            }
            dateObj[formatWord.charAt(0)] = dateWord;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var fullYear = dateObj.y;
        if (fullYear.startsWith("-")) {
          return false;
        }
        if (dateObj.y.length === 2) {
          var parsedYear = parseInt(dateObj.y, 10);
          if (isNaN(parsedYear)) {
            return false;
          }
          var currentYearLastTwoDigits = (/* @__PURE__ */ new Date()).getFullYear() % 100;
          if (parsedYear < currentYearLastTwoDigits) {
            fullYear = "20".concat(dateObj.y);
          } else {
            fullYear = "19".concat(dateObj.y);
          }
        }
        var month = dateObj.m;
        if (dateObj.m.length === 1) {
          month = "0".concat(dateObj.m);
        }
        var day = dateObj.d;
        if (dateObj.d.length === 1) {
          day = "0".concat(dateObj.d);
        }
        return new Date("".concat(fullYear, "-").concat(month, "-").concat(day, "T00:00:00.000Z")).getUTCDate() === +dateObj.d;
      }
      if (!options2.strictMode) {
        return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
      }
      return false;
    }
    __name(isDate, "isDate");
    __name2(isDate, "isDate");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isTime = __commonJS({
  "../../node_modules/validator/lib/isTime.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isTime;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var default_time_options = {
      hourFormat: "hour24",
      mode: "default"
    };
    var formats = {
      hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
        withOptionalSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$/
      },
      hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/,
        withOptionalSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9])(?::([0-5][0-9]))? (A|P)M$/
      }
    };
    function isTime(input, options2) {
      options2 = (0, _merge.default)(options2, default_time_options);
      if (typeof input !== "string") return false;
      return formats[options2.hourFormat][options2.mode].test(input);
    }
    __name(isTime, "isTime");
    __name2(isTime, "isTime");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_includesArray = __commonJS({
  "../../node_modules/validator/lib/util/includesArray.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var includes = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function includes2(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    }, "includes2"), "includes");
    var _default = exports.default = includes;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isBoolean = __commonJS({
  "../../node_modules/validator/lib/isBoolean.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBoolean;
    var _assertString = _interopRequireDefault(require_assertString());
    var _includesArray = _interopRequireDefault(require_includesArray());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var defaultOptions = {
      loose: false
    };
    var strictBooleans = ["true", "false", "1", "0"];
    var looseBooleans = [].concat(strictBooleans, ["yes", "no"]);
    function isBoolean(str) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOptions;
      (0, _assertString.default)(str);
      if (options2.loose) {
        return (0, _includesArray.default)(looseBooleans, str.toLowerCase());
      }
      return (0, _includesArray.default)(strictBooleans, str);
    }
    __name(isBoolean, "isBoolean");
    __name2(isBoolean, "isBoolean");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isLocale = __commonJS({
  "../../node_modules/validator/lib/isLocale.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLocale;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var extlang = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})";
    var language = "(([a-zA-Z]{2,3}(-".concat(extlang, ")?)|([a-zA-Z]{5,8}))");
    var script = "([A-Za-z]{4})";
    var region = "([A-Za-z]{2}|\\d{3})";
    var variant = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))";
    var singleton = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])";
    var extension = "(".concat(singleton, "(-[A-Za-z0-9]{2,8})+)");
    var privateuse = "(x(-[A-Za-z0-9]{1,8})+)";
    var irregular = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))";
    var regular = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))";
    var grandfathered = "(".concat(irregular, "|").concat(regular, ")");
    var delimiter = "(-|_)";
    var langtag = "".concat(language, "(").concat(delimiter).concat(script, ")?(").concat(delimiter).concat(region, ")?(").concat(delimiter).concat(variant, ")*(").concat(delimiter).concat(extension, ")*(").concat(delimiter).concat(privateuse, ")?");
    var languageTagRegex = new RegExp("(^".concat(privateuse, "$)|(^").concat(grandfathered, "$)|(^").concat(langtag, "$)"));
    function isLocale(str) {
      (0, _assertString.default)(str);
      return languageTagRegex.test(str);
    }
    __name(isLocale, "isLocale");
    __name2(isLocale, "isLocale");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isAbaRouting = __commonJS({
  "../../node_modules/validator/lib/isAbaRouting.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAbaRouting;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var isRoutingReg = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
    function isAbaRouting(str) {
      (0, _assertString.default)(str);
      if (!isRoutingReg.test(str)) return false;
      var checkSumVal = 0;
      for (var i = 0; i < str.length; i++) {
        if (i % 3 === 0) checkSumVal += str[i] * 3;
        else if (i % 3 === 1) checkSumVal += str[i] * 7;
        else checkSumVal += str[i] * 1;
      }
      return checkSumVal % 10 === 0;
    }
    __name(isAbaRouting, "isAbaRouting");
    __name2(isAbaRouting, "isAbaRouting");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isAlpha = __commonJS({
  "../../node_modules/validator/lib/isAlpha.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlpha;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isAlpha(_str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (0, _assertString.default)(_str);
      var str = _str;
      var ignore = options2.ignore;
      if (ignore) {
        if (ignore instanceof RegExp) {
          str = str.replace(ignore, "");
        } else if (typeof ignore === "string") {
          str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
        } else {
          throw new Error("ignore should be instance of a String or RegExp");
        }
      }
      if (locale in _alpha.alpha) {
        return _alpha.alpha[locale].test(str);
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isAlpha, "isAlpha");
    __name2(isAlpha, "isAlpha");
    var locales = exports.locales = Object.keys(_alpha.alpha);
  }
});
var require_isAlphanumeric = __commonJS({
  "../../node_modules/validator/lib/isAlphanumeric.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlphanumeric;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isAlphanumeric(_str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (0, _assertString.default)(_str);
      var str = _str;
      var ignore = options2.ignore;
      if (ignore) {
        if (ignore instanceof RegExp) {
          str = str.replace(ignore, "");
        } else if (typeof ignore === "string") {
          str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
        } else {
          throw new Error("ignore should be instance of a String or RegExp");
        }
      }
      if (locale in _alpha.alphanumeric) {
        return _alpha.alphanumeric[locale].test(str);
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isAlphanumeric, "isAlphanumeric");
    __name2(isAlphanumeric, "isAlphanumeric");
    var locales = exports.locales = Object.keys(_alpha.alphanumeric);
  }
});
var require_isNumeric = __commonJS({
  "../../node_modules/validator/lib/isNumeric.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNumeric;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var numericNoSymbols = /^[0-9]+$/;
    function isNumeric(str, options2) {
      (0, _assertString.default)(str);
      if (options2 && options2.no_symbols) {
        return numericNoSymbols.test(str);
      }
      return new RegExp("^[+-]?([0-9]*[".concat((options2 || {}).locale ? _alpha.decimal[options2.locale] : ".", "])?[0-9]+$")).test(str);
    }
    __name(isNumeric, "isNumeric");
    __name2(isNumeric, "isNumeric");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isPassportNumber = __commonJS({
  "../../node_modules/validator/lib/isPassportNumber.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPassportNumber;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var passportRegexByCountryCode = {
      AM: /^[A-Z]{2}\d{7}$/,
      // ARMENIA
      AR: /^[A-Z]{3}\d{6}$/,
      // ARGENTINA
      AT: /^[A-Z]\d{7}$/,
      // AUSTRIA
      AU: /^[A-Z]\d{7}$/,
      // AUSTRALIA
      AZ: /^[A-Z]{1}\d{8}$/,
      // AZERBAIJAN
      BE: /^[A-Z]{2}\d{6}$/,
      // BELGIUM
      BG: /^\d{9}$/,
      // BULGARIA
      BR: /^[A-Z]{2}\d{6}$/,
      // BRAZIL
      BY: /^[A-Z]{2}\d{7}$/,
      // BELARUS
      CA: /^[A-Z]{2}\d{6}$|^[A-Z]\d{6}[A-Z]{2}$/,
      // CANADA
      CH: /^[A-Z]\d{7}$/,
      // SWITZERLAND
      CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
      // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
      CY: /^[A-Z](\d{6}|\d{8})$/,
      // CYPRUS
      CZ: /^\d{8}$/,
      // CZECH REPUBLIC
      DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
      // GERMANY
      DK: /^\d{9}$/,
      // DENMARK
      DZ: /^\d{9}$/,
      // ALGERIA
      EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
      // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
      ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
      // SPAIN
      FI: /^[A-Z]{2}\d{7}$/,
      // FINLAND
      FR: /^\d{2}[A-Z]{2}\d{5}$/,
      // FRANCE
      GB: /^\d{9}$/,
      // UNITED KINGDOM
      GR: /^[A-Z]{2}\d{7}$/,
      // GREECE
      HR: /^\d{9}$/,
      // CROATIA
      HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
      // HUNGARY
      IE: /^[A-Z0-9]{2}\d{7}$/,
      // IRELAND
      IN: /^[A-Z]{1}-?\d{7}$/,
      // INDIA
      ID: /^[A-C]\d{7}$/,
      // INDONESIA
      IR: /^[A-Z]\d{8}$/,
      // IRAN
      IS: /^(A)\d{7}$/,
      // ICELAND
      IT: /^[A-Z0-9]{2}\d{7}$/,
      // ITALY
      JM: /^[Aa]\d{7}$/,
      // JAMAICA
      JP: /^[A-Z]{2}\d{7}$/,
      // JAPAN
      KR: /^[MS]\d{8}$/,
      // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
      KZ: /^[a-zA-Z]\d{7}$/,
      // KAZAKHSTAN
      LI: /^[a-zA-Z]\d{5}$/,
      // LIECHTENSTEIN
      LT: /^[A-Z0-9]{8}$/,
      // LITHUANIA
      LU: /^[A-Z0-9]{8}$/,
      // LUXEMBURG
      LV: /^[A-Z0-9]{2}\d{7}$/,
      // LATVIA
      LY: /^[A-Z0-9]{8}$/,
      // LIBYA
      MT: /^\d{7}$/,
      // MALTA
      MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
      // MOZAMBIQUE
      MY: /^[AHK]\d{8}$/,
      // MALAYSIA
      MX: /^\d{10,11}$/,
      // MEXICO
      NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
      // NETHERLANDS
      NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
      // NEW ZEALAND
      PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
      // PHILIPPINES
      PK: /^[A-Z]{2}\d{7}$/,
      // PAKISTAN
      PL: /^[A-Z]{2}\d{7}$/,
      // POLAND
      PT: /^[A-Z]\d{6}$/,
      // PORTUGAL
      RO: /^\d{8,9}$/,
      // ROMANIA
      RU: /^\d{9}$/,
      // RUSSIAN FEDERATION
      SE: /^\d{8}$/,
      // SWEDEN
      SL: /^(P)[A-Z]\d{7}$/,
      // SLOVENIA
      SK: /^[0-9A-Z]\d{7}$/,
      // SLOVAKIA
      TH: /^[A-Z]{1,2}\d{6,7}$/,
      // THAILAND
      TR: /^[A-Z]\d{8}$/,
      // TURKEY
      UA: /^[A-Z]{2}\d{6}$/,
      // UKRAINE
      US: /^\d{9}$|^[A-Z]\d{8}$/,
      // UNITED STATES
      ZA: /^[TAMD]\d{8}$/
      // SOUTH AFRICA
    };
    var locales = exports.locales = Object.keys(passportRegexByCountryCode);
    function isPassportNumber(str, countryCode) {
      (0, _assertString.default)(str);
      var normalizedStr = str.replace(/\s/g, "").toUpperCase();
      return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
    }
    __name(isPassportNumber, "isPassportNumber");
    __name2(isPassportNumber, "isPassportNumber");
  }
});
var require_isInt = __commonJS({
  "../../node_modules/validator/lib/isInt.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isInt;
    var _assertString = _interopRequireDefault(require_assertString());
    var _nullUndefinedCheck = _interopRequireDefault(require_nullUndefinedCheck());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
    var intLeadingZeroes = /^[-+]?[0-9]+$/;
    function isInt(str, options2) {
      (0, _assertString.default)(str);
      options2 = options2 || {};
      var regex = options2.allow_leading_zeroes === false ? int : intLeadingZeroes;
      var minCheckPassed = !options2.hasOwnProperty("min") || (0, _nullUndefinedCheck.default)(options2.min) || str >= options2.min;
      var maxCheckPassed = !options2.hasOwnProperty("max") || (0, _nullUndefinedCheck.default)(options2.max) || str <= options2.max;
      var ltCheckPassed = !options2.hasOwnProperty("lt") || (0, _nullUndefinedCheck.default)(options2.lt) || str < options2.lt;
      var gtCheckPassed = !options2.hasOwnProperty("gt") || (0, _nullUndefinedCheck.default)(options2.gt) || str > options2.gt;
      return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
    }
    __name(isInt, "isInt");
    __name2(isInt, "isInt");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isPort = __commonJS({
  "../../node_modules/validator/lib/isPort.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPort;
    var _isInt = _interopRequireDefault(require_isInt());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isPort(str) {
      return (0, _isInt.default)(str, {
        allow_leading_zeroes: false,
        min: 0,
        max: 65535
      });
    }
    __name(isPort, "isPort");
    __name2(isPort, "isPort");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isLowercase = __commonJS({
  "../../node_modules/validator/lib/isLowercase.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLowercase;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isLowercase(str) {
      (0, _assertString.default)(str);
      return str === str.toLowerCase();
    }
    __name(isLowercase, "isLowercase");
    __name2(isLowercase, "isLowercase");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isUppercase = __commonJS({
  "../../node_modules/validator/lib/isUppercase.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isUppercase;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isUppercase(str) {
      (0, _assertString.default)(str);
      return str === str.toUpperCase();
    }
    __name(isUppercase, "isUppercase");
    __name2(isUppercase, "isUppercase");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isIMEI = __commonJS({
  "../../node_modules/validator/lib/isIMEI.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIMEI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var imeiRegexWithoutHyphens = /^[0-9]{15}$/;
    var imeiRegexWithHyphens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
    function isIMEI(str, options2) {
      (0, _assertString.default)(str);
      options2 = options2 || {};
      var imeiRegex = imeiRegexWithoutHyphens;
      if (options2.allow_hyphens) {
        imeiRegex = imeiRegexWithHyphens;
      }
      if (!imeiRegex.test(str)) {
        return false;
      }
      str = str.replace(/-/g, "");
      var sum = 0, mul = 2, l = 14;
      for (var i = 0; i < l; i++) {
        var digit = str.substring(l - i - 1, l - i);
        var tp = parseInt(digit, 10) * mul;
        if (tp >= 10) {
          sum += tp % 10 + 1;
        } else {
          sum += tp;
        }
        if (mul === 1) {
          mul += 1;
        } else {
          mul -= 1;
        }
      }
      var chk = (10 - sum % 10) % 10;
      if (chk !== parseInt(str.substring(14, 15), 10)) {
        return false;
      }
      return true;
    }
    __name(isIMEI, "isIMEI");
    __name2(isIMEI, "isIMEI");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isAscii = __commonJS({
  "../../node_modules/validator/lib/isAscii.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAscii;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var ascii = /^[\x00-\x7F]+$/;
    function isAscii(str) {
      (0, _assertString.default)(str);
      return ascii.test(str);
    }
    __name(isAscii, "isAscii");
    __name2(isAscii, "isAscii");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isFullWidth = __commonJS({
  "../../node_modules/validator/lib/isFullWidth.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFullWidth;
    exports.fullWidth = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    function isFullWidth(str) {
      (0, _assertString.default)(str);
      return fullWidth.test(str);
    }
    __name(isFullWidth, "isFullWidth");
    __name2(isFullWidth, "isFullWidth");
  }
});
var require_isHalfWidth = __commonJS({
  "../../node_modules/validator/lib/isHalfWidth.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHalfWidth;
    exports.halfWidth = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    function isHalfWidth(str) {
      (0, _assertString.default)(str);
      return halfWidth.test(str);
    }
    __name(isHalfWidth, "isHalfWidth");
    __name2(isHalfWidth, "isHalfWidth");
  }
});
var require_isVariableWidth = __commonJS({
  "../../node_modules/validator/lib/isVariableWidth.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVariableWidth;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isFullWidth = require_isFullWidth();
    var _isHalfWidth = require_isHalfWidth();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isVariableWidth(str) {
      (0, _assertString.default)(str);
      return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
    }
    __name(isVariableWidth, "isVariableWidth");
    __name2(isVariableWidth, "isVariableWidth");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMultibyte = __commonJS({
  "../../node_modules/validator/lib/isMultibyte.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMultibyte;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var multibyte = /[^\x00-\x7F]/;
    function isMultibyte(str) {
      (0, _assertString.default)(str);
      return multibyte.test(str);
    }
    __name(isMultibyte, "isMultibyte");
    __name2(isMultibyte, "isMultibyte");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_multilineRegex = __commonJS({
  "../../node_modules/validator/lib/util/multilineRegex.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = multilineRegexp;
    function multilineRegexp(parts, flags2) {
      var regexpAsStringLiteral = parts.join("");
      return new RegExp(regexpAsStringLiteral, flags2);
    }
    __name(multilineRegexp, "multilineRegexp");
    __name2(multilineRegexp, "multilineRegexp");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isSemVer = __commonJS({
  "../../node_modules/validator/lib/isSemVer.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSemVer;
    var _assertString = _interopRequireDefault(require_assertString());
    var _multilineRegex = _interopRequireDefault(require_multilineRegex());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var semanticVersioningRegex = (0, _multilineRegex.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
    function isSemVer(str) {
      (0, _assertString.default)(str);
      return semanticVersioningRegex.test(str);
    }
    __name(isSemVer, "isSemVer");
    __name2(isSemVer, "isSemVer");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isSurrogatePair = __commonJS({
  "../../node_modules/validator/lib/isSurrogatePair.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSurrogatePair;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    function isSurrogatePair(str) {
      (0, _assertString.default)(str);
      return surrogatePair.test(str);
    }
    __name(isSurrogatePair, "isSurrogatePair");
    __name2(isSurrogatePair, "isSurrogatePair");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isDecimal = __commonJS({
  "../../node_modules/validator/lib/isDecimal.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDecimal;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    var _includesArray = _interopRequireDefault(require_includesArray());
    var _alpha = require_alpha();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function decimalRegExp(options2) {
      var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options2.locale], "[0-9]{").concat(options2.decimal_digits, "})").concat(options2.force_decimal ? "" : "?", "$"));
      return regExp;
    }
    __name(decimalRegExp, "decimalRegExp");
    __name2(decimalRegExp, "decimalRegExp");
    var default_decimal_options = {
      force_decimal: false,
      decimal_digits: "1,",
      locale: "en-US"
    };
    var blacklist = ["", "-", "+"];
    function isDecimal(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, default_decimal_options);
      if (options2.locale in _alpha.decimal) {
        return !(0, _includesArray.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options2).test(str);
      }
      throw new Error("Invalid locale '".concat(options2.locale, "'"));
    }
    __name(isDecimal, "isDecimal");
    __name2(isDecimal, "isDecimal");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isHexadecimal = __commonJS({
  "../../node_modules/validator/lib/isHexadecimal.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHexadecimal;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
    function isHexadecimal(str) {
      (0, _assertString.default)(str);
      return hexadecimal.test(str);
    }
    __name(isHexadecimal, "isHexadecimal");
    __name2(isHexadecimal, "isHexadecimal");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isOctal = __commonJS({
  "../../node_modules/validator/lib/isOctal.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isOctal;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var octal = /^(0o)?[0-7]+$/i;
    function isOctal(str) {
      (0, _assertString.default)(str);
      return octal.test(str);
    }
    __name(isOctal, "isOctal");
    __name2(isOctal, "isOctal");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isDivisibleBy = __commonJS({
  "../../node_modules/validator/lib/isDivisibleBy.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDivisibleBy;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toFloat = _interopRequireDefault(require_toFloat());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isDivisibleBy(str, num) {
      (0, _assertString.default)(str);
      return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
    }
    __name(isDivisibleBy, "isDivisibleBy");
    __name2(isDivisibleBy, "isDivisibleBy");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isHexColor = __commonJS({
  "../../node_modules/validator/lib/isHexColor.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHexColor;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
    function isHexColor(str) {
      (0, _assertString.default)(str);
      return hexcolor.test(str);
    }
    __name(isHexColor, "isHexColor");
    __name2(isHexColor, "isHexColor");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isRgbColor = __commonJS({
  "../../node_modules/validator/lib/isRgbColor.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isRgbColor;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
    var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d\d?|1(\.0)?|0(\.0)?)\)$/;
    var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
    var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d\d?|1(\.0)?|0(\.0)?)\)$/;
    var startsWithRgb = /^rgba?/;
    function isRgbColor(str, options2) {
      (0, _assertString.default)(str);
      var allowSpaces = false;
      var includePercentValues = true;
      if (_typeof(options2) !== "object") {
        if (arguments.length >= 2) {
          includePercentValues = arguments[1];
        }
      } else {
        allowSpaces = options2.allowSpaces !== void 0 ? options2.allowSpaces : allowSpaces;
        includePercentValues = options2.includePercentValues !== void 0 ? options2.includePercentValues : includePercentValues;
      }
      if (allowSpaces) {
        if (!startsWithRgb.test(str)) {
          return false;
        }
        str = str.replace(/\s/g, "");
      }
      if (!includePercentValues) {
        return rgbColor.test(str) || rgbaColor.test(str);
      }
      return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
    }
    __name(isRgbColor, "isRgbColor");
    __name2(isRgbColor, "isRgbColor");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isHSL = __commonJS({
  "../../node_modules/validator/lib/isHSL.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHSL;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
    var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
    function isHSL(str) {
      (0, _assertString.default)(str);
      var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
      if (strippedStr.indexOf(",") !== -1) {
        return hslComma.test(strippedStr);
      }
      return hslSpace.test(strippedStr);
    }
    __name(isHSL, "isHSL");
    __name2(isHSL, "isHSL");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISRC = __commonJS({
  "../../node_modules/validator/lib/isISRC.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISRC;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    function isISRC(str) {
      (0, _assertString.default)(str);
      return isrc.test(str);
    }
    __name(isISRC, "isISRC");
    __name2(isISRC, "isISRC");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isIBAN = __commonJS({
  "../../node_modules/validator/lib/isIBAN.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIBAN;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _includesArray = _interopRequireDefault(require_includesArray());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var ibanRegexThroughCountryCode = {
      AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
      AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
      AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
      AT: /^(AT[0-9]{2})\d{16}$/,
      AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      BA: /^(BA[0-9]{2})\d{16}$/,
      BE: /^(BE[0-9]{2})\d{12}$/,
      BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
      BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
      BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
      BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
      CR: /^(CR[0-9]{2})\d{18}$/,
      CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
      CZ: /^(CZ[0-9]{2})\d{20}$/,
      DE: /^(DE[0-9]{2})\d{18}$/,
      DK: /^(DK[0-9]{2})\d{14}$/,
      DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
      DZ: /^(DZ\d{24})$/,
      EE: /^(EE[0-9]{2})\d{16}$/,
      EG: /^(EG[0-9]{2})\d{25}$/,
      ES: /^(ES[0-9]{2})\d{20}$/,
      FI: /^(FI[0-9]{2})\d{14}$/,
      FO: /^(FO[0-9]{2})\d{14}$/,
      FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
      GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
      GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
      GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
      GL: /^(GL[0-9]{2})\d{14}$/,
      GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
      GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
      HR: /^(HR[0-9]{2})\d{17}$/,
      HU: /^(HU[0-9]{2})\d{24}$/,
      IE: /^(IE[0-9]{2})[A-Z]{4}\d{14}$/,
      IL: /^(IL[0-9]{2})\d{19}$/,
      IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
      IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
      IS: /^(IS[0-9]{2})\d{22}$/,
      IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
      JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
      KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
      KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
      LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
      LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
      LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
      LT: /^(LT[0-9]{2})\d{16}$/,
      LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
      LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
      MA: /^(MA[0-9]{26})$/,
      MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
      MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
      ME: /^(ME[0-9]{2})\d{18}$/,
      MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
      MR: /^(MR[0-9]{2})\d{23}$/,
      MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
      MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
      MZ: /^(MZ[0-9]{2})\d{21}$/,
      NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
      NO: /^(NO[0-9]{2})\d{11}$/,
      PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
      PL: /^(PL[0-9]{2})\d{24}$/,
      PS: /^(PS[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
      PT: /^(PT[0-9]{2})\d{21}$/,
      QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
      RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
      RS: /^(RS[0-9]{2})\d{18}$/,
      SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
      SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
      SE: /^(SE[0-9]{2})\d{20}$/,
      SI: /^(SI[0-9]{2})\d{15}$/,
      SK: /^(SK[0-9]{2})\d{20}$/,
      SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
      SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      TL: /^(TL[0-9]{2})\d{19}$/,
      TN: /^(TN[0-9]{2})\d{20}$/,
      TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
      UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
      VA: /^(VA[0-9]{2})\d{18}$/,
      VG: /^(VG[0-9]{2})[A-Z]{4}\d{16}$/,
      XK: /^(XK[0-9]{2})\d{16}$/
    };
    function hasOnlyValidCountryCodes(countryCodeArray) {
      var countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(function(countryCode) {
        return !(countryCode in ibanRegexThroughCountryCode);
      });
      if (countryCodeArrayFilteredWithObjectIbanCode.length > 0) {
        return false;
      }
      return true;
    }
    __name(hasOnlyValidCountryCodes, "hasOnlyValidCountryCodes");
    __name2(hasOnlyValidCountryCodes, "hasOnlyValidCountryCodes");
    function hasValidIbanFormat(str, options2) {
      var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
      var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
      var isoCountryCodeInIbanRegexCodeObject = isoCountryCode in ibanRegexThroughCountryCode;
      if (options2.whitelist) {
        if (!hasOnlyValidCountryCodes(options2.whitelist)) {
          return false;
        }
        var isoCountryCodeInWhiteList = (0, _includesArray.default)(options2.whitelist, isoCountryCode);
        if (!isoCountryCodeInWhiteList) {
          return false;
        }
      }
      if (options2.blacklist) {
        var isoCountryCodeInBlackList = (0, _includesArray.default)(options2.blacklist, isoCountryCode);
        if (isoCountryCodeInBlackList) {
          return false;
        }
      }
      return isoCountryCodeInIbanRegexCodeObject && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
    }
    __name(hasValidIbanFormat, "hasValidIbanFormat");
    __name2(hasValidIbanFormat, "hasValidIbanFormat");
    function hasValidIbanChecksum(str) {
      var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
      var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
      var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
        return char.charCodeAt(0) - 55;
      });
      var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
        return Number(acc + value) % 97;
      }, "");
      return remainder === 1;
    }
    __name(hasValidIbanChecksum, "hasValidIbanChecksum");
    __name2(hasValidIbanChecksum, "hasValidIbanChecksum");
    function isIBAN(str) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      return hasValidIbanFormat(str, options2) && hasValidIbanChecksum(str);
    }
    __name(isIBAN, "isIBAN");
    __name2(isIBAN, "isIBAN");
    var locales = exports.locales = Object.keys(ibanRegexThroughCountryCode);
  }
});
var require_isISO31661Alpha2 = __commonJS({
  "../../node_modules/validator/lib/isISO31661Alpha2.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CountryCodes = void 0;
    exports.default = isISO31661Alpha2;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validISO31661Alpha2CountriesCodes = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
    function isISO31661Alpha2(str) {
      (0, _assertString.default)(str);
      return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
    }
    __name(isISO31661Alpha2, "isISO31661Alpha2");
    __name2(isISO31661Alpha2, "isISO31661Alpha2");
    var CountryCodes = exports.CountryCodes = validISO31661Alpha2CountriesCodes;
  }
});
var require_isBIC = __commonJS({
  "../../node_modules/validator/lib/isBIC.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBIC;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isISO31661Alpha = require_isISO31661Alpha2();
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
    function isBIC(str) {
      (0, _assertString.default)(str);
      var countryCode = str.slice(4, 6).toUpperCase();
      if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") {
        return false;
      }
      return isBICReg.test(str);
    }
    __name(isBIC, "isBIC");
    __name2(isBIC, "isBIC");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMD5 = __commonJS({
  "../../node_modules/validator/lib/isMD5.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMD5;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var md5 = /^[a-f0-9]{32}$/;
    function isMD5(str) {
      (0, _assertString.default)(str);
      return md5.test(str);
    }
    __name(isMD5, "isMD5");
    __name2(isMD5, "isMD5");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isHash = __commonJS({
  "../../node_modules/validator/lib/isHash.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHash;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var lengths = {
      md5: 32,
      md4: 32,
      sha1: 40,
      sha256: 64,
      sha384: 96,
      sha512: 128,
      ripemd128: 32,
      ripemd160: 40,
      tiger128: 32,
      tiger160: 40,
      tiger192: 48,
      crc32: 8,
      crc32b: 8
    };
    function isHash(str, algorithm) {
      (0, _assertString.default)(str);
      var hash2 = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
      return hash2.test(str);
    }
    __name(isHash, "isHash");
    __name2(isHash, "isHash");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isBase64 = __commonJS({
  "../../node_modules/validator/lib/isBase64.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase64;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var base64WithPadding = /^[A-Za-z0-9+/]+={0,2}$/;
    var base64WithoutPadding = /^[A-Za-z0-9+/]+$/;
    var base64UrlWithPadding = /^[A-Za-z0-9_-]+={0,2}$/;
    var base64UrlWithoutPadding = /^[A-Za-z0-9_-]+$/;
    function isBase64(str, options2) {
      var _options;
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, {
        urlSafe: false,
        padding: !((_options = options2) !== null && _options !== void 0 && _options.urlSafe)
      });
      if (str === "") return true;
      if (options2.padding && str.length % 4 !== 0) return false;
      var regex;
      if (options2.urlSafe) {
        regex = options2.padding ? base64UrlWithPadding : base64UrlWithoutPadding;
      } else {
        regex = options2.padding ? base64WithPadding : base64WithoutPadding;
      }
      return (!options2.padding || str.length % 4 === 0) && regex.test(str);
    }
    __name(isBase64, "isBase64");
    __name2(isBase64, "isBase64");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isJWT = __commonJS({
  "../../node_modules/validator/lib/isJWT.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isJWT;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isBase = _interopRequireDefault(require_isBase64());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isJWT(str) {
      (0, _assertString.default)(str);
      var dotSplit = str.split(".");
      var len = dotSplit.length;
      if (len !== 3) {
        return false;
      }
      return dotSplit.reduce(function(acc, currElem) {
        return acc && (0, _isBase.default)(currElem, {
          urlSafe: true
        });
      }, true);
    }
    __name(isJWT, "isJWT");
    __name2(isJWT, "isJWT");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isJSON = __commonJS({
  "../../node_modules/validator/lib/isJSON.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isJSON;
    var _assertString = _interopRequireDefault(require_assertString());
    var _includesArray = _interopRequireDefault(require_includesArray());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    var default_json_options = {
      allow_primitives: false
    };
    function isJSON(str, options2) {
      (0, _assertString.default)(str);
      try {
        options2 = (0, _merge.default)(options2, default_json_options);
        var primitives = [];
        if (options2.allow_primitives) {
          primitives = [null, false, true];
        }
        var obj = JSON.parse(str);
        return (0, _includesArray.default)(primitives, obj) || !!obj && _typeof(obj) === "object";
      } catch (e3) {
      }
      return false;
    }
    __name(isJSON, "isJSON");
    __name2(isJSON, "isJSON");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isEmpty = __commonJS({
  "../../node_modules/validator/lib/isEmpty.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmpty;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var default_is_empty_options = {
      ignore_whitespace: false
    };
    function isEmpty(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, default_is_empty_options);
      return (options2.ignore_whitespace ? str.trim().length : str.length) === 0;
    }
    __name(isEmpty, "isEmpty");
    __name2(isEmpty, "isEmpty");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isLength = __commonJS({
  "../../node_modules/validator/lib/isLength.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLength;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    function isLength(str, options2) {
      (0, _assertString.default)(str);
      var min;
      var max;
      if (_typeof(options2) === "object") {
        min = options2.min || 0;
        max = options2.max;
      } else {
        min = arguments[1] || 0;
        max = arguments[2];
      }
      var presentationSequences = str.match(/[^\uFE0F\uFE0E][\uFE0F\uFE0E]/g) || [];
      var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
      var len = str.length - presentationSequences.length - surrogatePairs.length;
      var isInsideRange = len >= min && (typeof max === "undefined" || len <= max);
      if (isInsideRange && Array.isArray(options2 === null || options2 === void 0 ? void 0 : options2.discreteLengths)) {
        return options2.discreteLengths.some(function(discreteLen) {
          return discreteLen === len;
        });
      }
      return isInsideRange;
    }
    __name(isLength, "isLength");
    __name2(isLength, "isLength");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isULID = __commonJS({
  "../../node_modules/validator/lib/isULID.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isULID;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isULID(str) {
      (0, _assertString.default)(str);
      return /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i.test(str);
    }
    __name(isULID, "isULID");
    __name2(isULID, "isULID");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isUUID = __commonJS({
  "../../node_modules/validator/lib/isUUID.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isUUID;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var uuid = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      6: /^[0-9A-F]{8}-[0-9A-F]{4}-6[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      8: /^[0-9A-F]{8}-[0-9A-F]{4}-8[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      nil: /^00000000-0000-0000-0000-000000000000$/i,
      max: /^ffffffff-ffff-ffff-ffff-ffffffffffff$/i,
      loose: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      // From https://github.com/uuidjs/uuid/blob/main/src/regex.js
      all: /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i
    };
    function isUUID(str, version) {
      (0, _assertString.default)(str);
      if (version === void 0 || version === null) {
        version = "all";
      }
      return version in uuid ? uuid[version].test(str) : false;
    }
    __name(isUUID, "isUUID");
    __name2(isUUID, "isUUID");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMongoId = __commonJS({
  "../../node_modules/validator/lib/isMongoId.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMongoId;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isMongoId(str) {
      (0, _assertString.default)(str);
      return (0, _isHexadecimal.default)(str) && str.length === 24;
    }
    __name(isMongoId, "isMongoId");
    __name2(isMongoId, "isMongoId");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isAfter = __commonJS({
  "../../node_modules/validator/lib/isAfter.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAfter;
    var _toDate = _interopRequireDefault(require_toDate());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    function isAfter(date, options2) {
      var comparisonDate = (_typeof(options2) === "object" ? options2.comparisonDate : options2) || Date().toString();
      var comparison = (0, _toDate.default)(comparisonDate);
      var original = (0, _toDate.default)(date);
      return !!(original && comparison && original > comparison);
    }
    __name(isAfter, "isAfter");
    __name2(isAfter, "isAfter");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isBefore = __commonJS({
  "../../node_modules/validator/lib/isBefore.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBefore;
    var _toDate = _interopRequireDefault(require_toDate());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    function isBefore(date, options2) {
      var comparisonDate = (_typeof(options2) === "object" ? options2.comparisonDate : options2) || Date().toString();
      var comparison = (0, _toDate.default)(comparisonDate);
      var original = (0, _toDate.default)(date);
      return !!(original && comparison && original < comparison);
    }
    __name(isBefore, "isBefore");
    __name2(isBefore, "isBefore");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isIn = __commonJS({
  "../../node_modules/validator/lib/isIn.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIn;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toString = _interopRequireDefault(require_toString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    function isIn(str, options2) {
      (0, _assertString.default)(str);
      var i;
      if (Object.prototype.toString.call(options2) === "[object Array]") {
        var array2 = [];
        for (i in options2) {
          if ({}.hasOwnProperty.call(options2, i)) {
            array2[i] = (0, _toString.default)(options2[i]);
          }
        }
        return array2.indexOf(str) >= 0;
      } else if (_typeof(options2) === "object") {
        return options2.hasOwnProperty(str);
      } else if (options2 && typeof options2.indexOf === "function") {
        return options2.indexOf(str) >= 0;
      }
      return false;
    }
    __name(isIn, "isIn");
    __name2(isIn, "isIn");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isLuhnNumber = __commonJS({
  "../../node_modules/validator/lib/isLuhnNumber.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLuhnNumber;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isLuhnNumber(str) {
      (0, _assertString.default)(str);
      var sanitized = str.replace(/[- ]+/g, "");
      var sum = 0;
      var digit;
      var tmpNum;
      var shouldDouble;
      for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
          tmpNum *= 2;
          if (tmpNum >= 10) {
            sum += tmpNum % 10 + 1;
          } else {
            sum += tmpNum;
          }
        } else {
          sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
      }
      return !!(sum % 10 === 0 ? sanitized : false);
    }
    __name(isLuhnNumber, "isLuhnNumber");
    __name2(isLuhnNumber, "isLuhnNumber");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isCreditCard = __commonJS({
  "../../node_modules/validator/lib/isCreditCard.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCreditCard;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var cards = {
      amex: /^3[47][0-9]{13}$/,
      dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
      // /^[25][1-7][0-9]{14}$/;
      unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
      visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
    };
    var allCards = function() {
      var tmpCardsArray = [];
      for (var cardProvider in cards) {
        if (cards.hasOwnProperty(cardProvider)) {
          tmpCardsArray.push(cards[cardProvider]);
        }
      }
      return tmpCardsArray;
    }();
    function isCreditCard(card) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(card);
      var provider = options2.provider;
      var sanitized = card.replace(/[- ]+/g, "");
      if (provider && provider.toLowerCase() in cards) {
        if (!cards[provider.toLowerCase()].test(sanitized)) {
          return false;
        }
      } else if (provider && !(provider.toLowerCase() in cards)) {
        throw new Error("".concat(provider, " is not a valid credit card provider."));
      } else if (!allCards.some(function(cardProvider) {
        return cardProvider.test(sanitized);
      })) {
        return false;
      }
      return (0, _isLuhnNumber.default)(card);
    }
    __name(isCreditCard, "isCreditCard");
    __name2(isCreditCard, "isCreditCard");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isIdentityCard = __commonJS({
  "../../node_modules/validator/lib/isIdentityCard.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIdentityCard;
    var _assertString = _interopRequireDefault(require_assertString());
    var _includesArray = _interopRequireDefault(require_includesArray());
    var _isInt = _interopRequireDefault(require_isInt());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validators = {
      PL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PL(str) {
        (0, _assertString.default)(str);
        var weightOfDigits = {
          1: 1,
          2: 3,
          3: 7,
          4: 9,
          5: 1,
          6: 3,
          7: 7,
          8: 9,
          9: 1,
          10: 3,
          11: 0
        };
        if (str != null && str.length === 11 && (0, _isInt.default)(str, {
          allow_leading_zeroes: true
        })) {
          var digits = str.split("").slice(0, -1);
          var sum = digits.reduce(function(acc, digit, index14) {
            return acc + Number(digit) * weightOfDigits[index14 + 1];
          }, 0);
          var modulo = sum % 10;
          var lastDigit = Number(str.charAt(str.length - 1));
          if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
            return true;
          }
        }
        return false;
      }, "PL"), "PL"),
      ES: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function ES(str) {
        (0, _assertString.default)(str);
        var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        var charsValue = {
          X: 0,
          Y: 1,
          Z: 2
        };
        var controlDigits = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        var sanitized = str.trim().toUpperCase();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
          return charsValue[char];
        });
        return sanitized.endsWith(controlDigits[number % 23]);
      }, "ES"), "ES"),
      FI: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function FI(str) {
        (0, _assertString.default)(str);
        if (str.length !== 11) {
          return false;
        }
        if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
          return false;
        }
        var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        var idAsNumber = parseInt(str.slice(0, 6), 10) * 1e3 + parseInt(str.slice(7, 10), 10);
        var remainder = idAsNumber % 31;
        var checkDigit = checkDigits[remainder];
        return checkDigit === str.slice(10, 11);
      }, "FI"), "FI"),
      IN: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IN(str) {
        var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
        var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
        var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var c2 = 0;
        var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
        invertedArray.forEach(function(val, i) {
          c2 = d[c2][p[i % 8][val]];
        });
        return c2 === 0;
      }, "IN"), "IN"),
      IR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IR(str) {
        if (!str.match(/^\d{10}$/)) return false;
        str = "0000".concat(str).slice(str.length - 6);
        if (parseInt(str.slice(3, 9), 10) === 0) return false;
        var lastNumber = parseInt(str.slice(9, 10), 10);
        var sum = 0;
        for (var i = 0; i < 9; i++) {
          sum += parseInt(str.slice(i, i + 1), 10) * (10 - i);
        }
        sum %= 11;
        return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
      }, "IR"), "IR"),
      IT: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IT(str) {
        if (str.length !== 9) return false;
        if (str === "CA00000AA") return false;
        return str.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
      }, "IT"), "IT"),
      NO: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function NO(str) {
        var sanitized = str.trim();
        if (isNaN(Number(sanitized))) return false;
        if (sanitized.length !== 11) return false;
        if (sanitized === "00000000000") return false;
        var f = sanitized.split("").map(Number);
        var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
        var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
        if (k1 !== f[9] || k2 !== f[10]) return false;
        return true;
      }, "NO"), "NO"),
      TH: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function TH(str) {
        if (!str.match(/^[1-8]\d{12}$/)) return false;
        var sum = 0;
        for (var i = 0; i < 12; i++) {
          sum += parseInt(str[i], 10) * (13 - i);
        }
        return str[12] === ((11 - sum % 11) % 10).toString();
      }, "TH"), "TH"),
      LK: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function LK(str) {
        var old_nic = /^[1-9]\d{8}[vx]$/i;
        var new_nic = /^[1-9]\d{11}$/i;
        if (str.length === 10 && old_nic.test(str)) return true;
        else if (str.length === 12 && new_nic.test(str)) return true;
        return false;
      }, "LK"), "LK"),
      "he-IL": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function heIL(str) {
        var DNI = /^\d{9}$/;
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var id = sanitized;
        var sum = 0, incNum;
        for (var i = 0; i < id.length; i++) {
          incNum = Number(id[i]) * (i % 2 + 1);
          sum += incNum > 9 ? incNum - 9 : incNum;
        }
        return sum % 10 === 0;
      }, "heIL"), "heIL"),
      "ar-LY": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function arLY(str) {
        var NIN = /^(1|2)\d{11}$/;
        var sanitized = str.trim();
        if (!NIN.test(sanitized)) {
          return false;
        }
        return true;
      }, "arLY"), "arLY"),
      "ar-TN": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function arTN(str) {
        var DNI = /^\d{8}$/;
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        return true;
      }, "arTN"), "arTN"),
      "zh-CN": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function zhCN(str) {
        var provincesAndCities = [
          "11",
          // 北京
          "12",
          // 天津
          "13",
          // 河北
          "14",
          // 山西
          "15",
          // 内蒙古
          "21",
          // 辽宁
          "22",
          // 吉林
          "23",
          // 黑龙江
          "31",
          // 上海
          "32",
          // 江苏
          "33",
          // 浙江
          "34",
          // 安徽
          "35",
          // 福建
          "36",
          // 江西
          "37",
          // 山东
          "41",
          // 河南
          "42",
          // 湖北
          "43",
          // 湖南
          "44",
          // 广东
          "45",
          // 广西
          "46",
          // 海南
          "50",
          // 重庆
          "51",
          // 四川
          "52",
          // 贵州
          "53",
          // 云南
          "54",
          // 西藏
          "61",
          // 陕西
          "62",
          // 甘肃
          "63",
          // 青海
          "64",
          // 宁夏
          "65",
          // 新疆
          "71",
          // 台湾
          "81",
          // 香港
          "82",
          // 澳门
          "91"
          // 国外
        ];
        var powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
        var parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        var checkAddressCode = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function checkAddressCode2(addressCode) {
          return (0, _includesArray.default)(provincesAndCities, addressCode);
        }, "checkAddressCode2"), "checkAddressCode");
        var checkBirthDayCode = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function checkBirthDayCode2(birDayCode) {
          var yyyy = parseInt(birDayCode.substring(0, 4), 10);
          var mm = parseInt(birDayCode.substring(4, 6), 10);
          var dd = parseInt(birDayCode.substring(6), 10);
          var xdata = new Date(yyyy, mm - 1, dd);
          if (xdata > /* @__PURE__ */ new Date()) {
            return false;
          } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
            return true;
          }
          return false;
        }, "checkBirthDayCode2"), "checkBirthDayCode");
        var getParityBit = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function getParityBit2(idCardNo) {
          var id17 = idCardNo.substring(0, 17);
          var power = 0;
          for (var i = 0; i < 17; i++) {
            power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
          }
          var mod = power % 11;
          return parityBit[mod];
        }, "getParityBit2"), "getParityBit");
        var checkParityBit = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function checkParityBit2(idCardNo) {
          return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
        }, "checkParityBit2"), "checkParityBit");
        var check15IdCardNo = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function check15IdCardNo2(idCardNo) {
          var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
          if (!check) return false;
          var addressCode = idCardNo.substring(0, 2);
          check = checkAddressCode(addressCode);
          if (!check) return false;
          var birDayCode = "19".concat(idCardNo.substring(6, 12));
          check = checkBirthDayCode(birDayCode);
          if (!check) return false;
          return true;
        }, "check15IdCardNo2"), "check15IdCardNo");
        var check18IdCardNo = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function check18IdCardNo2(idCardNo) {
          var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
          if (!check) return false;
          var addressCode = idCardNo.substring(0, 2);
          check = checkAddressCode(addressCode);
          if (!check) return false;
          var birDayCode = idCardNo.substring(6, 14);
          check = checkBirthDayCode(birDayCode);
          if (!check) return false;
          return checkParityBit(idCardNo);
        }, "check18IdCardNo2"), "check18IdCardNo");
        var checkIdCardNo = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function checkIdCardNo2(idCardNo) {
          var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
          if (!check) return false;
          if (idCardNo.length === 15) {
            return check15IdCardNo(idCardNo);
          }
          return check18IdCardNo(idCardNo);
        }, "checkIdCardNo2"), "checkIdCardNo");
        return checkIdCardNo(str);
      }, "zhCN"), "zhCN"),
      "zh-HK": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function zhHK(str) {
        str = str.trim();
        var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
        var regexIsDigit = /^[0-9]$/;
        str = str.toUpperCase();
        if (!regexHKID.test(str)) return false;
        str = str.replace(/\[|\]|\(|\)/g, "");
        if (str.length === 8) str = "3".concat(str);
        var checkSumVal = 0;
        for (var i = 0; i <= 7; i++) {
          var convertedChar = void 0;
          if (!regexIsDigit.test(str[i])) convertedChar = (str[i].charCodeAt(0) - 55) % 11;
          else convertedChar = str[i];
          checkSumVal += convertedChar * (9 - i);
        }
        checkSumVal %= 11;
        var checkSumConverted;
        if (checkSumVal === 0) checkSumConverted = "0";
        else if (checkSumVal === 1) checkSumConverted = "A";
        else checkSumConverted = String(11 - checkSumVal);
        if (checkSumConverted === str[str.length - 1]) return true;
        return false;
      }, "zhHK"), "zhHK"),
      "zh-TW": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function zhTW(str) {
        var ALPHABET_CODES = {
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          G: 16,
          H: 17,
          I: 34,
          J: 18,
          K: 19,
          L: 20,
          M: 21,
          N: 22,
          O: 35,
          P: 23,
          Q: 24,
          R: 25,
          S: 26,
          T: 27,
          U: 28,
          V: 29,
          W: 32,
          X: 30,
          Y: 31,
          Z: 33
        };
        var sanitized = str.trim().toUpperCase();
        if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
        return Array.from(sanitized).reduce(function(sum, number, index14) {
          if (index14 === 0) {
            var code = ALPHABET_CODES[number];
            return code % 10 * 9 + Math.floor(code / 10);
          }
          if (index14 === 9) {
            return (10 - sum % 10 - Number(number)) % 10 === 0;
          }
          return sum + Number(number) * (9 - index14);
        }, 0);
      }, "zhTW"), "zhTW"),
      PK: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PK(str) {
        var CNIC = /^[1-7][0-9]{4}-[0-9]{7}-[1-9]$/;
        var sanitized = str.trim();
        return CNIC.test(sanitized);
      }, "PK"), "PK")
    };
    function isIdentityCard(str, locale) {
      (0, _assertString.default)(str);
      if (locale in validators) {
        return validators[locale](str);
      } else if (locale === "any") {
        for (var key2 in validators) {
          if (validators.hasOwnProperty(key2)) {
            var validator3 = validators[key2];
            if (validator3(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isIdentityCard, "isIdentityCard");
    __name2(isIdentityCard, "isIdentityCard");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isEAN = __commonJS({
  "../../node_modules/validator/lib/isEAN.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEAN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var LENGTH_EAN_8 = 8;
    var LENGTH_EAN_14 = 14;
    var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
    function getPositionWeightThroughLengthAndIndex(length, index14) {
      if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
        return index14 % 2 === 0 ? 3 : 1;
      }
      return index14 % 2 === 0 ? 1 : 3;
    }
    __name(getPositionWeightThroughLengthAndIndex, "getPositionWeightThroughLengthAndIndex");
    __name2(getPositionWeightThroughLengthAndIndex, "getPositionWeightThroughLengthAndIndex");
    function calculateCheckDigit(ean) {
      var checksum = ean.slice(0, -1).split("").map(function(char, index14) {
        return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index14);
      }).reduce(function(acc, partialSum) {
        return acc + partialSum;
      }, 0);
      var remainder = 10 - checksum % 10;
      return remainder < 10 ? remainder : 0;
    }
    __name(calculateCheckDigit, "calculateCheckDigit");
    __name2(calculateCheckDigit, "calculateCheckDigit");
    function isEAN(str) {
      (0, _assertString.default)(str);
      var actualCheckDigit = Number(str.slice(-1));
      return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
    }
    __name(isEAN, "isEAN");
    __name2(isEAN, "isEAN");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISIN = __commonJS({
  "../../node_modules/validator/lib/isISIN.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISIN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
    function isISIN(str) {
      (0, _assertString.default)(str);
      if (!isin.test(str)) {
        return false;
      }
      var double = true;
      var sum = 0;
      for (var i = str.length - 2; i >= 0; i--) {
        if (str[i] >= "A" && str[i] <= "Z") {
          var value = str[i].charCodeAt(0) - 55;
          var lo = value % 10;
          var hi = Math.trunc(value / 10);
          for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
            var digit = _arr[_i];
            if (double) {
              if (digit >= 5) {
                sum += 1 + (digit - 5) * 2;
              } else {
                sum += digit * 2;
              }
            } else {
              sum += digit;
            }
            double = !double;
          }
        } else {
          var _digit = str[i].charCodeAt(0) - "0".charCodeAt(0);
          if (double) {
            if (_digit >= 5) {
              sum += 1 + (_digit - 5) * 2;
            } else {
              sum += _digit * 2;
            }
          } else {
            sum += _digit;
          }
          double = !double;
        }
      }
      var check = Math.trunc((sum + 9) / 10) * 10 - sum;
      return +str[str.length - 1] === check;
    }
    __name(isISIN, "isISIN");
    __name2(isISIN, "isISIN");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISBN = __commonJS({
  "../../node_modules/validator/lib/isISBN.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISBN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
    var possibleIsbn13 = /^(?:[0-9]{13})$/;
    var factor = [1, 3];
    function isISBN(isbn, options2) {
      (0, _assertString.default)(isbn);
      var version = String((options2 === null || options2 === void 0 ? void 0 : options2.version) || options2);
      if (!(options2 !== null && options2 !== void 0 && options2.version || options2)) {
        return isISBN(isbn, {
          version: 10
        }) || isISBN(isbn, {
          version: 13
        });
      }
      var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
      var checksum = 0;
      if (version === "10") {
        if (!possibleIsbn10.test(sanitizedIsbn)) {
          return false;
        }
        for (var i = 0; i < version - 1; i++) {
          checksum += (i + 1) * sanitizedIsbn.charAt(i);
        }
        if (sanitizedIsbn.charAt(9) === "X") {
          checksum += 10 * 10;
        } else {
          checksum += 10 * sanitizedIsbn.charAt(9);
        }
        if (checksum % 11 === 0) {
          return true;
        }
      } else if (version === "13") {
        if (!possibleIsbn13.test(sanitizedIsbn)) {
          return false;
        }
        for (var _i = 0; _i < 12; _i++) {
          checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
        }
        if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) {
          return true;
        }
      }
      return false;
    }
    __name(isISBN, "isISBN");
    __name2(isISBN, "isISBN");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISSN = __commonJS({
  "../../node_modules/validator/lib/isISSN.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISSN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var issn = "^\\d{4}-?\\d{3}[\\dX]$";
    function isISSN(str) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      var testIssn = issn;
      testIssn = options2.require_hyphen ? testIssn.replace("?", "") : testIssn;
      testIssn = options2.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
      if (!testIssn.test(str)) {
        return false;
      }
      var digits = str.replace("-", "").toUpperCase();
      var checksum = 0;
      for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        checksum += (digit === "X" ? 10 : +digit) * (8 - i);
      }
      return checksum % 11 === 0;
    }
    __name(isISSN, "isISSN");
    __name2(isISSN, "isISSN");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_algorithms = __commonJS({
  "../../node_modules/validator/lib/util/algorithms.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.iso7064Check = iso7064Check;
    exports.luhnCheck = luhnCheck;
    exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
    exports.verhoeffCheck = verhoeffCheck;
    function iso7064Check(str) {
      var checkvalue = 10;
      for (var i = 0; i < str.length - 1; i++) {
        checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
      }
      checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
      return checkvalue === parseInt(str[10], 10);
    }
    __name(iso7064Check, "iso7064Check");
    __name2(iso7064Check, "iso7064Check");
    function luhnCheck(str) {
      var checksum = 0;
      var second = false;
      for (var i = str.length - 1; i >= 0; i--) {
        if (second) {
          var product = parseInt(str[i], 10) * 2;
          if (product > 9) {
            checksum += product.toString().split("").map(function(a) {
              return parseInt(a, 10);
            }).reduce(function(a, b) {
              return a + b;
            }, 0);
          } else {
            checksum += product;
          }
        } else {
          checksum += parseInt(str[i], 10);
        }
        second = !second;
      }
      return checksum % 10 === 0;
    }
    __name(luhnCheck, "luhnCheck");
    __name2(luhnCheck, "luhnCheck");
    function reverseMultiplyAndSum(digits, base2) {
      var total = 0;
      for (var i = 0; i < digits.length; i++) {
        total += digits[i] * (base2 - i);
      }
      return total;
    }
    __name(reverseMultiplyAndSum, "reverseMultiplyAndSum");
    __name2(reverseMultiplyAndSum, "reverseMultiplyAndSum");
    function verhoeffCheck(str) {
      var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
      var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
      var str_copy = str.split("").reverse().join("");
      var checksum = 0;
      for (var i = 0; i < str_copy.length; i++) {
        checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
      }
      return checksum === 0;
    }
    __name(verhoeffCheck, "verhoeffCheck");
    __name2(verhoeffCheck, "verhoeffCheck");
  }
});
var require_isTaxID = __commonJS({
  "../../node_modules/validator/lib/isTaxID.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isTaxID;
    var _assertString = _interopRequireDefault(require_assertString());
    var algorithms = _interopRequireWildcard(require_algorithms());
    var _isDate = _interopRequireDefault(require_isDate());
    function _interopRequireWildcard(e3, t2) {
      if ("function" == typeof WeakMap) var r3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
      return (_interopRequireWildcard = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function _interopRequireWildcard2(e4, t3) {
        if (!t3 && e4 && e4.__esModule) return e4;
        var o2, i, f = { __proto__: null, default: e4 };
        if (null === e4 || "object" != _typeof(e4) && "function" != typeof e4) return f;
        if (o2 = t3 ? n2 : r3) {
          if (o2.has(e4)) return o2.get(e4);
          o2.set(e4, f);
        }
        for (var _t in e4) "default" !== _t && {}.hasOwnProperty.call(e4, _t) && ((i = (o2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(e4, _t)) && (i.get || i.set) ? o2(f, _t, i) : f[_t] = e4[_t]);
        return f;
      }, "_interopRequireWildcard2"), "_interopRequireWildcard"))(e3, t2);
    }
    __name(_interopRequireWildcard, "_interopRequireWildcard");
    __name2(_interopRequireWildcard, "_interopRequireWildcard");
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _toConsumableArray(r3) {
      return _arrayWithoutHoles(r3) || _iterableToArray(r3) || _unsupportedIterableToArray(r3) || _nonIterableSpread();
    }
    __name(_toConsumableArray, "_toConsumableArray");
    __name2(_toConsumableArray, "_toConsumableArray");
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    __name(_nonIterableSpread, "_nonIterableSpread");
    __name2(_nonIterableSpread, "_nonIterableSpread");
    function _unsupportedIterableToArray(r3, a) {
      if (r3) {
        if ("string" == typeof r3) return _arrayLikeToArray(r3, a);
        var t2 = {}.toString.call(r3).slice(8, -1);
        return "Object" === t2 && r3.constructor && (t2 = r3.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r3) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r3, a) : void 0;
      }
    }
    __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    __name2(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    function _iterableToArray(r3) {
      if ("undefined" != typeof Symbol && null != r3[Symbol.iterator] || null != r3["@@iterator"]) return Array.from(r3);
    }
    __name(_iterableToArray, "_iterableToArray");
    __name2(_iterableToArray, "_iterableToArray");
    function _arrayWithoutHoles(r3) {
      if (Array.isArray(r3)) return _arrayLikeToArray(r3);
    }
    __name(_arrayWithoutHoles, "_arrayWithoutHoles");
    __name2(_arrayWithoutHoles, "_arrayWithoutHoles");
    function _arrayLikeToArray(r3, a) {
      (null == a || a > r3.length) && (a = r3.length);
      for (var e3 = 0, n2 = Array(a); e3 < a; e3++) n2[e3] = r3[e3];
      return n2;
    }
    __name(_arrayLikeToArray, "_arrayLikeToArray");
    __name2(_arrayLikeToArray, "_arrayLikeToArray");
    function bgBgCheck(tin) {
      var century_year = tin.slice(0, 2);
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 40) {
        month -= 40;
        century_year = "20".concat(century_year);
      } else if (month > 20) {
        month -= 20;
        century_year = "18".concat(century_year);
      } else {
        century_year = "19".concat(century_year);
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      var checksum = 0;
      for (var i = 0; i < multip_lookup.length; i++) {
        checksum += digits[i] * multip_lookup[i];
      }
      checksum = checksum % 11 === 10 ? 0 : checksum % 11;
      return checksum === digits[9];
    }
    __name(bgBgCheck, "bgBgCheck");
    __name2(bgBgCheck, "bgBgCheck");
    function isCanadianSIN(input) {
      var digitsArray = input.split("");
      var even = digitsArray.filter(function(_, idx) {
        return idx % 2;
      }).map(function(i) {
        return Number(i) * 2;
      }).join("").split("");
      var total = digitsArray.filter(function(_, idx) {
        return !(idx % 2);
      }).concat(even).map(function(i) {
        return Number(i);
      }).reduce(function(acc, cur) {
        return acc + cur;
      });
      return total % 10 === 0;
    }
    __name(isCanadianSIN, "isCanadianSIN");
    __name2(isCanadianSIN, "isCanadianSIN");
    function csCzCheck(tin) {
      tin = tin.replace(/\W/, "");
      var full_year = parseInt(tin.slice(0, 2), 10);
      if (tin.length === 10) {
        if (full_year < 54) {
          full_year = "20".concat(full_year);
        } else {
          full_year = "19".concat(full_year);
        }
      } else {
        if (tin.slice(6) === "000") {
          return false;
        }
        if (full_year < 54) {
          full_year = "19".concat(full_year);
        } else {
          return false;
        }
      }
      if (full_year.length === 3) {
        full_year = [full_year.slice(0, 2), "0", full_year.slice(2)].join("");
      }
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 50) {
        month -= 50;
      }
      if (month > 20) {
        if (parseInt(full_year, 10) < 2004) {
          return false;
        }
        month -= 20;
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      if (tin.length === 10) {
        if (parseInt(tin, 10) % 11 !== 0) {
          var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
          if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
            if (parseInt(tin.slice(9), 10) !== 0) {
              return false;
            }
          } else {
            return false;
          }
        }
      }
      return true;
    }
    __name(csCzCheck, "csCzCheck");
    __name2(csCzCheck, "csCzCheck");
    function deAtCheck(tin) {
      return algorithms.luhnCheck(tin);
    }
    __name(deAtCheck, "deAtCheck");
    __name2(deAtCheck, "deAtCheck");
    function deDeCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var occurrences = [];
      for (var i = 0; i < digits.length - 1; i++) {
        occurrences.push("");
        for (var j = 0; j < digits.length - 1; j++) {
          if (digits[i] === digits[j]) {
            occurrences[i] += j;
          }
        }
      }
      occurrences = occurrences.filter(function(a) {
        return a.length > 1;
      });
      if (occurrences.length !== 2 && occurrences.length !== 3) {
        return false;
      }
      if (occurrences[0].length === 3) {
        var trip_locations = occurrences[0].split("").map(function(a) {
          return parseInt(a, 10);
        });
        var recurrent = 0;
        for (var _i = 0; _i < trip_locations.length - 1; _i++) {
          if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
            recurrent += 1;
          }
        }
        if (recurrent === 2) {
          return false;
        }
      }
      return algorithms.iso7064Check(tin);
    }
    __name(deDeCheck, "deDeCheck");
    __name2(deDeCheck, "deDeCheck");
    function dkDkCheck(tin) {
      tin = tin.replace(/\W/, "");
      var year = parseInt(tin.slice(4, 6), 10);
      var century_digit = tin.slice(6, 7);
      switch (century_digit) {
        case "0":
        case "1":
        case "2":
        case "3":
          year = "19".concat(year);
          break;
        case "4":
        case "9":
          if (year < 37) {
            year = "20".concat(year);
          } else {
            year = "19".concat(year);
          }
          break;
        default:
          if (year < 37) {
            year = "20".concat(year);
          } else if (year > 58) {
            year = "18".concat(year);
          } else {
            return false;
          }
          break;
      }
      if (year.length === 3) {
        year = [year.slice(0, 2), "0", year.slice(2)].join("");
      }
      var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      var weight = 4;
      for (var i = 0; i < 9; i++) {
        checksum += digits[i] * weight;
        weight -= 1;
        if (weight === 1) {
          weight = 7;
        }
      }
      checksum %= 11;
      if (checksum === 1) {
        return false;
      }
      return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
    }
    __name(dkDkCheck, "dkDkCheck");
    __name2(dkDkCheck, "dkDkCheck");
    function elCyCheck(tin) {
      var digits = tin.slice(0, 8).split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      for (var i = 1; i < digits.length; i += 2) {
        checksum += digits[i];
      }
      for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
        if (digits[_i2] < 2) {
          checksum += 1 - digits[_i2];
        } else {
          checksum += 2 * (digits[_i2] - 2) + 5;
          if (digits[_i2] > 4) {
            checksum += 2;
          }
        }
      }
      return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
    }
    __name(elCyCheck, "elCyCheck");
    __name2(elCyCheck, "elCyCheck");
    function elGrCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      for (var i = 0; i < 8; i++) {
        checksum += digits[i] * Math.pow(2, 8 - i);
      }
      return checksum % 11 % 10 === digits[8];
    }
    __name(elGrCheck, "elGrCheck");
    __name2(elGrCheck, "elGrCheck");
    function enIeCheck(tin) {
      var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
      }), 8);
      if (tin.length === 9 && tin[8] !== "W") {
        checksum += (tin[8].charCodeAt(0) - 64) * 9;
      }
      checksum %= 23;
      if (checksum === 0) {
        return tin[7].toUpperCase() === "W";
      }
      return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
    }
    __name(enIeCheck, "enIeCheck");
    __name2(enIeCheck, "enIeCheck");
    var enUsCampusPrefix = {
      andover: ["10", "12"],
      atlanta: ["60", "67"],
      austin: ["50", "53"],
      brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
      cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
      fresno: ["15", "24"],
      internet: ["20", "26", "27", "45", "46", "47"],
      kansas: ["40", "44"],
      memphis: ["94", "95"],
      ogden: ["80", "90"],
      philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
      sba: ["31"]
    };
    function enUsGetPrefixes() {
      var prefixes = [];
      for (var location in enUsCampusPrefix) {
        if (enUsCampusPrefix.hasOwnProperty(location)) {
          prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
        }
      }
      return prefixes;
    }
    __name(enUsGetPrefixes, "enUsGetPrefixes");
    __name2(enUsGetPrefixes, "enUsGetPrefixes");
    function enUsCheck(tin) {
      return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
    }
    __name(enUsCheck, "enUsCheck");
    __name2(enUsCheck, "enUsCheck");
    function esArCheck(tin) {
      var accum = 0;
      var digits = tin.split("");
      var digit = parseInt(digits.pop(), 10);
      for (var i = 0; i < digits.length; i++) {
        accum += digits[9 - i] * (2 + i % 6);
      }
      var verif = 11 - accum % 11;
      if (verif === 11) {
        verif = 0;
      } else if (verif === 10) {
        verif = 9;
      }
      return digit === verif;
    }
    __name(esArCheck, "esArCheck");
    __name2(esArCheck, "esArCheck");
    function esEsCheck(tin) {
      var chars2 = tin.toUpperCase().split("");
      if (isNaN(parseInt(chars2[0], 10)) && chars2.length > 1) {
        var lead_replace = 0;
        switch (chars2[0]) {
          case "Y":
            lead_replace = 1;
            break;
          case "Z":
            lead_replace = 2;
            break;
          default:
        }
        chars2.splice(0, 1, lead_replace);
      } else {
        while (chars2.length < 9) {
          chars2.unshift(0);
        }
      }
      var lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      chars2 = chars2.join("");
      var checksum = parseInt(chars2.slice(0, 8), 10) % 23;
      return chars2[8] === lookup[checksum];
    }
    __name(esEsCheck, "esEsCheck");
    __name2(esEsCheck, "esEsCheck");
    function etEeCheck(tin) {
      var full_year = tin.slice(1, 3);
      var century_digit = tin.slice(0, 1);
      switch (century_digit) {
        case "1":
        case "2":
          full_year = "18".concat(full_year);
          break;
        case "3":
        case "4":
          full_year = "19".concat(full_year);
          break;
        default:
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      var weight = 1;
      for (var i = 0; i < 10; i++) {
        checksum += digits[i] * weight;
        weight += 1;
        if (weight === 10) {
          weight = 1;
        }
      }
      if (checksum % 11 === 10) {
        checksum = 0;
        weight = 3;
        for (var _i3 = 0; _i3 < 10; _i3++) {
          checksum += digits[_i3] * weight;
          weight += 1;
          if (weight === 10) {
            weight = 1;
          }
        }
        if (checksum % 11 === 10) {
          return digits[10] === 0;
        }
      }
      return checksum % 11 === digits[10];
    }
    __name(etEeCheck, "etEeCheck");
    __name2(etEeCheck, "etEeCheck");
    function fiFiCheck(tin) {
      var full_year = tin.slice(4, 6);
      var century_symbol = tin.slice(6, 7);
      switch (century_symbol) {
        case "+":
          full_year = "18".concat(full_year);
          break;
        case "-":
          full_year = "19".concat(full_year);
          break;
        default:
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
      if (checksum < 10) {
        return checksum === parseInt(tin.slice(10), 10);
      }
      checksum -= 10;
      var letters_lookup = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
      return letters_lookup[checksum] === tin.slice(10);
    }
    __name(fiFiCheck, "fiFiCheck");
    __name2(fiFiCheck, "fiFiCheck");
    function frBeCheck(tin) {
      if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
        var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      }
      var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
      var checkdigits = parseInt(tin.slice(9, 11), 10);
      if (checksum !== checkdigits) {
        checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
        if (checksum !== checkdigits) {
          return false;
        }
      }
      return true;
    }
    __name(frBeCheck, "frBeCheck");
    __name2(frBeCheck, "frBeCheck");
    function frFrCheck(tin) {
      tin = tin.replace(/\s/g, "");
      var checksum = parseInt(tin.slice(0, 10), 10) % 511;
      var checkdigits = parseInt(tin.slice(10, 13), 10);
      return checksum === checkdigits;
    }
    __name(frFrCheck, "frFrCheck");
    __name2(frFrCheck, "frFrCheck");
    function frLuCheck(tin) {
      var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      if (!algorithms.luhnCheck(tin.slice(0, 12))) {
        return false;
      }
      return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
    }
    __name(frLuCheck, "frLuCheck");
    __name2(frLuCheck, "frLuCheck");
    function hrHrCheck(tin) {
      return algorithms.iso7064Check(tin);
    }
    __name(hrHrCheck, "hrHrCheck");
    __name2(hrHrCheck, "hrHrCheck");
    function huHuCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 8;
      for (var i = 1; i < 9; i++) {
        checksum += digits[i] * (i + 1);
      }
      return checksum % 11 === digits[9];
    }
    __name(huHuCheck, "huHuCheck");
    __name2(huHuCheck, "huHuCheck");
    function itItNameCheck(name) {
      var vowelflag = false;
      var xflag = false;
      for (var i = 0; i < 3; i++) {
        if (!vowelflag && /[AEIOU]/.test(name[i])) {
          vowelflag = true;
        } else if (!xflag && vowelflag && name[i] === "X") {
          xflag = true;
        } else if (i > 0) {
          if (vowelflag && !xflag) {
            if (!/[AEIOU]/.test(name[i])) {
              return false;
            }
          }
          if (xflag) {
            if (!/X/.test(name[i])) {
              return false;
            }
          }
        }
      }
      return true;
    }
    __name(itItNameCheck, "itItNameCheck");
    __name2(itItNameCheck, "itItNameCheck");
    function itItCheck(tin) {
      var chars2 = tin.toUpperCase().split("");
      if (!itItNameCheck(chars2.slice(0, 3))) {
        return false;
      }
      if (!itItNameCheck(chars2.slice(3, 6))) {
        return false;
      }
      var number_locations = [6, 7, 9, 10, 12, 13, 14];
      var number_replace = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
      };
      for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
        var i = _number_locations[_i4];
        if (chars2[i] in number_replace) {
          chars2.splice(i, 1, number_replace[chars2[i]]);
        }
      }
      var month_replace = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
      };
      var month = month_replace[chars2[8]];
      var day = parseInt(chars2[9] + chars2[10], 10);
      if (day > 40) {
        day -= 40;
      }
      if (day < 10) {
        day = "0".concat(day);
      }
      var date = "".concat(chars2[6]).concat(chars2[7], "/").concat(month, "/").concat(day);
      if (!(0, _isDate.default)(date, "YY/MM/DD")) {
        return false;
      }
      var checksum = 0;
      for (var _i5 = 1; _i5 < chars2.length - 1; _i5 += 2) {
        var char_to_int = parseInt(chars2[_i5], 10);
        if (isNaN(char_to_int)) {
          char_to_int = chars2[_i5].charCodeAt(0) - 65;
        }
        checksum += char_to_int;
      }
      var odd_convert = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
      };
      for (var _i6 = 0; _i6 < chars2.length - 1; _i6 += 2) {
        var _char_to_int = 0;
        if (chars2[_i6] in odd_convert) {
          _char_to_int = odd_convert[chars2[_i6]];
        } else {
          var multiplier = parseInt(chars2[_i6], 10);
          _char_to_int = 2 * multiplier + 1;
          if (multiplier > 4) {
            _char_to_int += 2;
          }
        }
        checksum += _char_to_int;
      }
      if (String.fromCharCode(65 + checksum % 26) !== chars2[15]) {
        return false;
      }
      return true;
    }
    __name(itItCheck, "itItCheck");
    __name2(itItCheck, "itItCheck");
    function lvLvCheck(tin) {
      tin = tin.replace(/\W/, "");
      var day = tin.slice(0, 2);
      if (day !== "32") {
        var month = tin.slice(2, 4);
        if (month !== "00") {
          var full_year = tin.slice(4, 6);
          switch (tin[6]) {
            case "0":
              full_year = "18".concat(full_year);
              break;
            case "1":
              full_year = "19".concat(full_year);
              break;
            default:
              full_year = "20".concat(full_year);
              break;
          }
          var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
          if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
        }
        var checksum = 1101;
        var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        for (var i = 0; i < tin.length - 1; i++) {
          checksum -= parseInt(tin[i], 10) * multip_lookup[i];
        }
        return parseInt(tin[10], 10) === checksum % 11;
      }
      return true;
    }
    __name(lvLvCheck, "lvLvCheck");
    __name2(lvLvCheck, "lvLvCheck");
    function mtMtCheck(tin) {
      if (tin.length !== 9) {
        var chars2 = tin.toUpperCase().split("");
        while (chars2.length < 8) {
          chars2.unshift(0);
        }
        switch (tin[7]) {
          case "A":
          case "P":
            if (parseInt(chars2[6], 10) === 0) {
              return false;
            }
            break;
          default: {
            var first_part = parseInt(chars2.join("").slice(0, 5), 10);
            if (first_part > 32e3) {
              return false;
            }
            var second_part = parseInt(chars2.join("").slice(5, 7), 10);
            if (first_part === second_part) {
              return false;
            }
          }
        }
      }
      return true;
    }
    __name(mtMtCheck, "mtMtCheck");
    __name2(mtMtCheck, "mtMtCheck");
    function nlNlCheck(tin) {
      return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11 === parseInt(tin[8], 10);
    }
    __name(nlNlCheck, "nlNlCheck");
    __name2(nlNlCheck, "nlNlCheck");
    function plPlCheck(tin) {
      if (tin.length === 10) {
        var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        var _checksum = 0;
        for (var i = 0; i < lookup.length; i++) {
          _checksum += parseInt(tin[i], 10) * lookup[i];
        }
        _checksum %= 11;
        if (_checksum === 10) {
          return false;
        }
        return _checksum === parseInt(tin[9], 10);
      }
      var full_year = tin.slice(0, 2);
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 80) {
        full_year = "18".concat(full_year);
        month -= 80;
      } else if (month > 60) {
        full_year = "22".concat(full_year);
        month -= 60;
      } else if (month > 40) {
        full_year = "21".concat(full_year);
        month -= 40;
      } else if (month > 20) {
        full_year = "20".concat(full_year);
        month -= 20;
      } else {
        full_year = "19".concat(full_year);
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var checksum = 0;
      var multiplier = 1;
      for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
        checksum += parseInt(tin[_i7], 10) * multiplier % 10;
        multiplier += 2;
        if (multiplier > 10) {
          multiplier = 1;
        } else if (multiplier === 5) {
          multiplier += 2;
        }
      }
      checksum = 10 - checksum % 10;
      return checksum === parseInt(tin[10], 10);
    }
    __name(plPlCheck, "plPlCheck");
    __name2(plPlCheck, "plPlCheck");
    function ptBrCheck(tin) {
      if (tin.length === 11) {
        var _sum;
        var remainder;
        _sum = 0;
        if (
          // Reject known invalid CPFs
          tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000"
        ) return false;
        for (var i = 1; i <= 9; i++) _sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
        _sum = 0;
        for (var _i8 = 1; _i8 <= 10; _i8++) _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
        return true;
      }
      if (
        // Reject know invalid CNPJs
        tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999"
      ) {
        return false;
      }
      var length = tin.length - 2;
      var identifiers = tin.substring(0, length);
      var verificators = tin.substring(length);
      var sum = 0;
      var pos = length - 7;
      for (var _i9 = length; _i9 >= 1; _i9--) {
        sum += identifiers.charAt(length - _i9) * pos;
        pos -= 1;
        if (pos < 2) {
          pos = 9;
        }
      }
      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(verificators.charAt(0), 10)) {
        return false;
      }
      length += 1;
      identifiers = tin.substring(0, length);
      sum = 0;
      pos = length - 7;
      for (var _i0 = length; _i0 >= 1; _i0--) {
        sum += identifiers.charAt(length - _i0) * pos;
        pos -= 1;
        if (pos < 2) {
          pos = 9;
        }
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(verificators.charAt(1), 10)) {
        return false;
      }
      return true;
    }
    __name(ptBrCheck, "ptBrCheck");
    __name2(ptBrCheck, "ptBrCheck");
    function ptPtCheck(tin) {
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11;
      if (checksum > 9) {
        return parseInt(tin[8], 10) === 0;
      }
      return checksum === parseInt(tin[8], 10);
    }
    __name(ptPtCheck, "ptPtCheck");
    __name2(ptPtCheck, "ptPtCheck");
    function roRoCheck(tin) {
      if (tin.slice(0, 4) !== "9000") {
        var full_year = tin.slice(1, 3);
        switch (tin[0]) {
          case "1":
          case "2":
            full_year = "19".concat(full_year);
            break;
          case "3":
          case "4":
            full_year = "18".concat(full_year);
            break;
          case "5":
          case "6":
            full_year = "20".concat(full_year);
            break;
          default:
        }
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (date.length === 8) {
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
        var checksum = 0;
        for (var i = 0; i < multipliers.length; i++) {
          checksum += digits[i] * multipliers[i];
        }
        if (checksum % 11 === 10) {
          return digits[12] === 1;
        }
        return digits[12] === checksum % 11;
      }
      return true;
    }
    __name(roRoCheck, "roRoCheck");
    __name2(roRoCheck, "roRoCheck");
    function skSkCheck(tin) {
      if (tin.length === 9) {
        tin = tin.replace(/\W/, "");
        if (tin.slice(6) === "000") {
          return false;
        }
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (full_year > 53) {
          return false;
        }
        if (full_year < 10) {
          full_year = "190".concat(full_year);
        } else {
          full_year = "19".concat(full_year);
        }
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) {
          month -= 50;
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
      }
      return true;
    }
    __name(skSkCheck, "skSkCheck");
    __name2(skSkCheck, "skSkCheck");
    function slSiCheck(tin) {
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
      }), 8) % 11;
      if (checksum === 10) {
        return parseInt(tin[7], 10) === 0;
      }
      return checksum === parseInt(tin[7], 10);
    }
    __name(slSiCheck, "slSiCheck");
    __name2(slSiCheck, "slSiCheck");
    function svSeCheck(tin) {
      var tin_copy = tin.slice(0);
      if (tin.length > 11) {
        tin_copy = tin_copy.slice(2);
      }
      var full_year = "";
      var month = tin_copy.slice(2, 4);
      var day = parseInt(tin_copy.slice(4, 6), 10);
      if (tin.length > 11) {
        full_year = tin.slice(0, 4);
      } else {
        full_year = tin.slice(0, 2);
        if (tin.length === 11 && day < 60) {
          var current_year = (/* @__PURE__ */ new Date()).getFullYear().toString();
          var current_century = parseInt(current_year.slice(0, 2), 10);
          current_year = parseInt(current_year, 10);
          if (tin[6] === "-") {
            if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
              full_year = "".concat(current_century - 1).concat(full_year);
            } else {
              full_year = "".concat(current_century).concat(full_year);
            }
          } else {
            full_year = "".concat(current_century - 1).concat(full_year);
            if (current_year - parseInt(full_year, 10) < 100) {
              return false;
            }
          }
        }
      }
      if (day > 60) {
        day -= 60;
      }
      if (day < 10) {
        day = "0".concat(day);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(day);
      if (date.length === 8) {
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      return algorithms.luhnCheck(tin.replace(/\W/, ""));
    }
    __name(svSeCheck, "svSeCheck");
    __name2(svSeCheck, "svSeCheck");
    function ukUaCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var multipliers = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
      var checksum = 0;
      for (var i = 0; i < multipliers.length; i++) {
        checksum += digits[i] * multipliers[i];
      }
      return checksum % 11 === 10 ? digits[9] === 0 : digits[9] === checksum % 11;
    }
    __name(ukUaCheck, "ukUaCheck");
    __name2(ukUaCheck, "ukUaCheck");
    var taxIdFormat = {
      "bg-BG": /^\d{10}$/,
      "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
      "de-AT": /^\d{9}$/,
      "de-DE": /^[1-9]\d{10}$/,
      "dk-DK": /^\d{6}-{0,1}\d{4}$/,
      "el-CY": /^[09]\d{7}[A-Z]$/,
      "el-GR": /^([0-4]|[7-9])\d{8}$/,
      "en-CA": /^\d{9}$/,
      "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
      "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
      "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
      "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
      "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
      "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
      "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
      "fr-BE": /^\d{11}$/,
      "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
      // Conforms both to official spec and provided example
      "fr-LU": /^\d{13}$/,
      "hr-HR": /^\d{11}$/,
      "hu-HU": /^8\d{9}$/,
      "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
      "lv-LV": /^\d{6}-{0,1}\d{5}$/,
      // Conforms both to DG TAXUD spec and original research
      "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
      "nl-NL": /^\d{9}$/,
      "pl-PL": /^\d{10,11}$/,
      "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
      "pt-PT": /^\d{9}$/,
      "ro-RO": /^\d{13}$/,
      "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
      "sl-SI": /^[1-9]\d{7}$/,
      "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
      "uk-UA": /^\d{10}$/
    };
    taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
    taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
    taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
    taxIdFormat["fr-CA"] = taxIdFormat["en-CA"];
    var taxIdCheck = {
      "bg-BG": bgBgCheck,
      "cs-CZ": csCzCheck,
      "de-AT": deAtCheck,
      "de-DE": deDeCheck,
      "dk-DK": dkDkCheck,
      "el-CY": elCyCheck,
      "el-GR": elGrCheck,
      "en-CA": isCanadianSIN,
      "en-IE": enIeCheck,
      "en-US": enUsCheck,
      "es-AR": esArCheck,
      "es-ES": esEsCheck,
      "et-EE": etEeCheck,
      "fi-FI": fiFiCheck,
      "fr-BE": frBeCheck,
      "fr-FR": frFrCheck,
      "fr-LU": frLuCheck,
      "hr-HR": hrHrCheck,
      "hu-HU": huHuCheck,
      "it-IT": itItCheck,
      "lv-LV": lvLvCheck,
      "mt-MT": mtMtCheck,
      "nl-NL": nlNlCheck,
      "pl-PL": plPlCheck,
      "pt-BR": ptBrCheck,
      "pt-PT": ptPtCheck,
      "ro-RO": roRoCheck,
      "sk-SK": skSkCheck,
      "sl-SI": slSiCheck,
      "sv-SE": svSeCheck,
      "uk-UA": ukUaCheck
    };
    taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
    taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
    taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
    taxIdCheck["fr-CA"] = taxIdCheck["en-CA"];
    var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
    var sanitizeRegexes = {
      "de-AT": allsymbols,
      "de-DE": /[\/\\]/g,
      "fr-BE": allsymbols
    };
    sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
    function isTaxID(str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      (0, _assertString.default)(str);
      var strcopy = str.slice(0);
      if (locale in taxIdFormat) {
        if (locale in sanitizeRegexes) {
          strcopy = strcopy.replace(sanitizeRegexes[locale], "");
        }
        if (!taxIdFormat[locale].test(strcopy)) {
          return false;
        }
        if (locale in taxIdCheck) {
          return taxIdCheck[locale](strcopy);
        }
        return true;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isTaxID, "isTaxID");
    __name2(isTaxID, "isTaxID");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMobilePhone = __commonJS({
  "../../node_modules/validator/lib/isMobilePhone.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMobilePhone;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var phones = {
      "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
      "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
      "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
      "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
      "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
      "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
      "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
      "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
      "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
      "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
      "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
      "ar-OM": /^((\+|00)968)?([79][1-9])\d{6}$/,
      "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
      "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
      "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
      "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
      "ar-TN": /^(\+?216)?[2459]\d{7}$/,
      "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
      "ar-QA": /^(\+?974|0)?([3567]\d{7})$/,
      "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
      "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
      "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
      "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
      "ca-AD": /^(\+376)?[346]\d{5}$/,
      "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
      "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
      "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
      "de-LU": /^(\+352)?((6\d1)\d{6})$/,
      "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
      "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
      "el-CY": /^(\+?357?)?(9(9|7|6|5|4)\d{6})$/,
      "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
      "en-AU": /^(\+?61|0)4\d{8}$/,
      "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
      "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
      "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
      "en-GB": /^(\+?44|0)7[1-9]\d{8}$/,
      "en-GG": /^(\+?44|0)1481\d{6}$/,
      "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|53|28|55|59)\d{7}$/,
      "en-GY": /^(\+592|0)6\d{6}$/,
      "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
      "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
      "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
      "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
      "en-JM": /^(\+?876)?\d{7}$/,
      "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
      "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
      "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
      "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
      "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
      "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
      "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
      "en-MU": /^(\+?230|0)?\d{8}$/,
      "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
      "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
      "en-NG": /^(\+?234|0)?[789]\d{9}$/,
      "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
      "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
      "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
      "en-PH": /^(09|\+639)\d{9}$/,
      "en-RW": /^(\+?250|0)?[7]\d{8}$/,
      "en-SG": /^(\+65)?[3689]\d{7}$/,
      "en-SL": /^(\+?232|0)\d{8}$/,
      "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
      "en-UG": /^(\+?256|0)?[7]\d{8}$/,
      "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
      "en-ZA": /^(\+?27|0)\d{9}$/,
      "en-ZM": /^(\+?26)?0[79][567]\d{7}$/,
      "en-ZW": /^(\+263)[0-9]{9}$/,
      "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
      "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
      "es-BO": /^(\+?591)?(6|7)\d{7}$/,
      "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
      "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
      "es-CR": /^(\+506)?[2-8]\d{7}$/,
      "es-CU": /^(\+53|0053)?5\d{7}$/,
      "es-DO": /^(\+?1)?8[024]9\d{7}$/,
      "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
      "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
      "es-ES": /^(\+?34)?[6|7]\d{8}$/,
      "es-GT": /^(\+?502)?[2|6|7]\d{7}$/,
      "es-PE": /^(\+?51)?9\d{8}$/,
      "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
      "es-NI": /^(\+?505)\d{7,8}$/,
      "es-PA": /^(\+?507)\d{7,8}$/,
      "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
      "es-SV": /^(\+?503)?[67]\d{7}$/,
      "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
      "es-VE": /^(\+?58)?(2|4)\d{9}$/,
      "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
      "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
      "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
      "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
      "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "fr-BF": /^(\+226|0)[67]\d{7}$/,
      "fr-BJ": /^(\+229)\d{8}$/,
      "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
      "fr-CM": /^(\+?237)6[0-9]{8}$/,
      "fr-FR": /^(\+?33|0)[67]\d{8}$/,
      "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
      "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
      "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
      "fr-PF": /^(\+?689)?8[789]\d{6}$/,
      "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
      "fr-WF": /^(\+681)?\d{6}$/,
      "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
      "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
      "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
      "ir-IR": /^(\+98|0)?9\d{9}$/,
      "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
      "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
      "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
      "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
      "kk-KZ": /^(\+?7|8)?7\d{9}$/,
      "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
      "ky-KG": /^(\+996\s?)?(22[0-9]|50[0-9]|55[0-9]|70[0-9]|75[0-9]|77[0-9]|880|990|995|996|997|998)\s?\d{3}\s?\d{3}$/,
      "lt-LT": /^(\+370|8)\d{8}$/,
      "lv-LV": /^(\+?371)2\d{7}$/,
      "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
      "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
      "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
      "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
      "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
      "nb-NO": /^(\+?47)?[49]\d{7}$/,
      "ne-NP": /^(\+?977)?9[78]\d{8}$/,
      "nl-BE": /^(\+?32|0)4\d{8}$/,
      "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
      "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
      "nn-NO": /^(\+?47)?[49]\d{7}$/,
      "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
      "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
      "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
      "pt-AO": /^(\+?244)?9\d{8}$/,
      "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
      "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
      "ru-RU": /^(\+?7|8)?9\d{9}$/,
      "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
      "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
      "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
      "sq-AL": /^(\+355|0)6[2-9]\d{7}$/,
      "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
      "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
      "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
      "th-TH": /^(\+66|66|0)\d{9}$/,
      "tr-TR": /^(\+?90|0)?5\d{9}$/,
      "tk-TM": /^(\+993|993|8)\d{8}$/,
      "uk-UA": /^(\+?38)?0(50|6[36-8]|7[357]|9[1-9])\d{7}$/,
      "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
      "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
      "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
      "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
      "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
      "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
      "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
      "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/,
      "mk-MK": /^(\+?389|0)?((?:2[2-9]\d{6}|(?:3[1-4]|4[2-8])\d{6}|500\d{5}|5[2-9]\d{6}|7[0-9][2-9]\d{5}|8[1-9]\d{6}|800\d{5}|8009\d{4}))$/
    };
    phones["en-CA"] = phones["en-US"];
    phones["fr-CA"] = phones["en-CA"];
    phones["fr-BE"] = phones["nl-BE"];
    phones["zh-HK"] = phones["en-HK"];
    phones["zh-MO"] = phones["en-MO"];
    phones["ga-IE"] = phones["en-IE"];
    phones["fr-CH"] = phones["de-CH"];
    phones["it-CH"] = phones["fr-CH"];
    function isMobilePhone(str, locale, options2) {
      (0, _assertString.default)(str);
      if (options2 && options2.strictMode && !str.startsWith("+")) {
        return false;
      }
      if (Array.isArray(locale)) {
        return locale.some(function(key3) {
          if (phones.hasOwnProperty(key3)) {
            var phone2 = phones[key3];
            if (phone2.test(str)) {
              return true;
            }
          }
          return false;
        });
      } else if (locale in phones) {
        return phones[locale].test(str);
      } else if (!locale || locale === "any") {
        for (var key2 in phones) {
          if (phones.hasOwnProperty(key2)) {
            var phone = phones[key2];
            if (phone.test(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isMobilePhone, "isMobilePhone");
    __name2(isMobilePhone, "isMobilePhone");
    var locales = exports.locales = Object.keys(phones);
  }
});
var require_isEthereumAddress = __commonJS({
  "../../node_modules/validator/lib/isEthereumAddress.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEthereumAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var eth = /^(0x)[0-9a-f]{40}$/i;
    function isEthereumAddress(str) {
      (0, _assertString.default)(str);
      return eth.test(str);
    }
    __name(isEthereumAddress, "isEthereumAddress");
    __name2(isEthereumAddress, "isEthereumAddress");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isCurrency = __commonJS({
  "../../node_modules/validator/lib/isCurrency.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCurrency;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function currencyRegex(options2) {
      var decimal_digits = "\\d{".concat(options2.digits_after_decimal[0], "}");
      options2.digits_after_decimal.forEach(function(digit, index14) {
        if (index14 !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
      });
      var symbol = "(".concat(options2.symbol.replace(/\W/, function(m) {
        return "\\".concat(m);
      }), ")").concat(options2.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options2.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = ["0", whole_dollar_amount_without_sep, whole_dollar_amount_with_sep], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options2.decimal_separator, "(").concat(decimal_digits, "))").concat(options2.require_decimal ? "" : "?");
      var pattern2 = whole_dollar_amount + (options2.allow_decimal || options2.require_decimal ? decimal_amount : "");
      if (options2.allow_negatives && !options2.parens_for_negatives) {
        if (options2.negative_sign_after_digits) {
          pattern2 += negative;
        } else if (options2.negative_sign_before_digits) {
          pattern2 = negative + pattern2;
        }
      }
      if (options2.allow_negative_sign_placeholder) {
        pattern2 = "( (?!\\-))?".concat(pattern2);
      } else if (options2.allow_space_after_symbol) {
        pattern2 = " ?".concat(pattern2);
      } else if (options2.allow_space_after_digits) {
        pattern2 += "( (?!$))?";
      }
      if (options2.symbol_after_digits) {
        pattern2 += symbol;
      } else {
        pattern2 = symbol + pattern2;
      }
      if (options2.allow_negatives) {
        if (options2.parens_for_negatives) {
          pattern2 = "(\\(".concat(pattern2, "\\)|").concat(pattern2, ")");
        } else if (!(options2.negative_sign_before_digits || options2.negative_sign_after_digits)) {
          pattern2 = negative + pattern2;
        }
      }
      return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern2, "$"));
    }
    __name(currencyRegex, "currencyRegex");
    __name2(currencyRegex, "currencyRegex");
    var default_currency_options = {
      symbol: "$",
      require_symbol: false,
      allow_space_after_symbol: false,
      symbol_after_digits: false,
      allow_negatives: true,
      parens_for_negatives: false,
      negative_sign_before_digits: false,
      negative_sign_after_digits: false,
      allow_negative_sign_placeholder: false,
      thousands_separator: ",",
      decimal_separator: ".",
      allow_decimal: true,
      require_decimal: false,
      digits_after_decimal: [2],
      allow_space_after_digits: false
    };
    function isCurrency(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, default_currency_options);
      return currencyRegex(options2).test(str);
    }
    __name(isCurrency, "isCurrency");
    __name2(isCurrency, "isCurrency");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isBtcAddress = __commonJS({
  "../../node_modules/validator/lib/isBtcAddress.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBtcAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var bech32 = /^(bc1|tb1|bc1p|tb1p)[ac-hj-np-z02-9]{39,58}$/;
    var base58 = /^(1|2|3|m)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
    function isBtcAddress(str) {
      (0, _assertString.default)(str);
      return bech32.test(str) || base58.test(str);
    }
    __name(isBtcAddress, "isBtcAddress");
    __name2(isBtcAddress, "isBtcAddress");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISO6346 = __commonJS({
  "../../node_modules/validator/lib/isISO6346.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isFreightContainerID = void 0;
    exports.isISO6346 = isISO6346;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
    var isDigit = /^[0-9]$/;
    function isISO6346(str) {
      (0, _assertString.default)(str);
      str = str.toUpperCase();
      if (!isISO6346Str.test(str)) return false;
      if (str.length === 11) {
        var sum = 0;
        for (var i = 0; i < str.length - 1; i++) {
          if (!isDigit.test(str[i])) {
            var convertedCode = void 0;
            var letterCode = str.charCodeAt(i) - 55;
            if (letterCode < 11) convertedCode = letterCode;
            else if (letterCode >= 11 && letterCode <= 20) convertedCode = 12 + letterCode % 11;
            else if (letterCode >= 21 && letterCode <= 30) convertedCode = 23 + letterCode % 21;
            else convertedCode = 34 + letterCode % 31;
            sum += convertedCode * Math.pow(2, i);
          } else sum += str[i] * Math.pow(2, i);
        }
        var checkSumDigit = sum % 11;
        if (checkSumDigit === 10) checkSumDigit = 0;
        return Number(str[str.length - 1]) === checkSumDigit;
      }
      return true;
    }
    __name(isISO6346, "isISO6346");
    __name2(isISO6346, "isISO6346");
    var isFreightContainerID = exports.isFreightContainerID = isISO6346;
  }
});
var require_isISO6391 = __commonJS({
  "../../node_modules/validator/lib/isISO6391.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO6391;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var isISO6391Set = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
    function isISO6391(str) {
      (0, _assertString.default)(str);
      return isISO6391Set.has(str);
    }
    __name(isISO6391, "isISO6391");
    __name2(isISO6391, "isISO6391");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISO8601 = __commonJS({
  "../../node_modules/validator/lib/isISO8601.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO8601;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    var isValidDate = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function isValidDate2(str) {
      var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
      if (ordinalMatch) {
        var oYear = Number(ordinalMatch[1]);
        var oDay = Number(ordinalMatch[2]);
        if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
        return oDay <= 365;
      }
      var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
      var year = match[1];
      var month = match[2];
      var day = match[3];
      var monthString = month ? "0".concat(month).slice(-2) : month;
      var dayString = day ? "0".concat(day).slice(-2) : day;
      var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
      if (month && day) {
        return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
      }
      return true;
    }, "isValidDate2"), "isValidDate");
    function isISO8601(str) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      var check = options2.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
      if (check && options2.strict) return isValidDate(str);
      return check;
    }
    __name(isISO8601, "isISO8601");
    __name2(isISO8601, "isISO8601");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isRFC3339 = __commonJS({
  "../../node_modules/validator/lib/isRFC3339.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isRFC3339;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var dateFullYear = /[0-9]{4}/;
    var dateMonth = /(0[1-9]|1[0-2])/;
    var dateMDay = /([12]\d|0[1-9]|3[01])/;
    var timeHour = /([01][0-9]|2[0-3])/;
    var timeMinute = /[0-5][0-9]/;
    var timeSecond = /([0-5][0-9]|60)/;
    var timeSecFrac = /(\.[0-9]+)?/;
    var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
    var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
    var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
    var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
    var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
    var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
    function isRFC3339(str) {
      (0, _assertString.default)(str);
      return rfc3339.test(str);
    }
    __name(isRFC3339, "isRFC3339");
    __name2(isRFC3339, "isRFC3339");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISO15924 = __commonJS({
  "../../node_modules/validator/lib/isISO15924.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ScriptCodes = void 0;
    exports.default = isISO15924;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validISO15924Codes = /* @__PURE__ */ new Set(["Adlm", "Afak", "Aghb", "Ahom", "Arab", "Aran", "Armi", "Armn", "Avst", "Bali", "Bamu", "Bass", "Batk", "Beng", "Bhks", "Blis", "Bopo", "Brah", "Brai", "Bugi", "Buhd", "Cakm", "Cans", "Cari", "Cham", "Cher", "Chis", "Chrs", "Cirt", "Copt", "Cpmn", "Cprt", "Cyrl", "Cyrs", "Deva", "Diak", "Dogr", "Dsrt", "Dupl", "Egyd", "Egyh", "Egyp", "Elba", "Elym", "Ethi", "Gara", "Geok", "Geor", "Glag", "Gong", "Gonm", "Goth", "Gran", "Grek", "Gujr", "Gukh", "Guru", "Hanb", "Hang", "Hani", "Hano", "Hans", "Hant", "Hatr", "Hebr", "Hira", "Hluw", "Hmng", "Hmnp", "Hrkt", "Hung", "Inds", "Ital", "Jamo", "Java", "Jpan", "Jurc", "Kali", "Kana", "Kawi", "Khar", "Khmr", "Khoj", "Kitl", "Kits", "Knda", "Kore", "Kpel", "Krai", "Kthi", "Lana", "Laoo", "Latf", "Latg", "Latn", "Leke", "Lepc", "Limb", "Lina", "Linb", "Lisu", "Loma", "Lyci", "Lydi", "Mahj", "Maka", "Mand", "Mani", "Marc", "Maya", "Medf", "Mend", "Merc", "Mero", "Mlym", "Modi", "Mong", "Moon", "Mroo", "Mtei", "Mult", "Mymr", "Nagm", "Nand", "Narb", "Nbat", "Newa", "Nkdb", "Nkgb", "Nkoo", "Nshu", "Ogam", "Olck", "Onao", "Orkh", "Orya", "Osge", "Osma", "Ougr", "Palm", "Pauc", "Pcun", "Pelm", "Perm", "Phag", "Phli", "Phlp", "Phlv", "Phnx", "Plrd", "Piqd", "Prti", "Psin", "Qaaa", "Qaab", "Qaac", "Qaad", "Qaae", "Qaaf", "Qaag", "Qaah", "Qaai", "Qaaj", "Qaak", "Qaal", "Qaam", "Qaan", "Qaao", "Qaap", "Qaaq", "Qaar", "Qaas", "Qaat", "Qaau", "Qaav", "Qaaw", "Qaax", "Qaay", "Qaaz", "Qaba", "Qabb", "Qabc", "Qabd", "Qabe", "Qabf", "Qabg", "Qabh", "Qabi", "Qabj", "Qabk", "Qabl", "Qabm", "Qabn", "Qabo", "Qabp", "Qabq", "Qabr", "Qabs", "Qabt", "Qabu", "Qabv", "Qabw", "Qabx", "Ranj", "Rjng", "Rohg", "Roro", "Runr", "Samr", "Sara", "Sarb", "Saur", "Sgnw", "Shaw", "Shrd", "Shui", "Sidd", "Sidt", "Sind", "Sinh", "Sogd", "Sogo", "Sora", "Soyo", "Sund", "Sunu", "Sylo", "Syrc", "Syre", "Syrj", "Syrn", "Tagb", "Takr", "Tale", "Talu", "Taml", "Tang", "Tavt", "Tayo", "Telu", "Teng", "Tfng", "Tglg", "Thaa", "Thai", "Tibt", "Tirh", "Tnsa", "Todr", "Tols", "Toto", "Tutg", "Ugar", "Vaii", "Visp", "Vith", "Wara", "Wcho", "Wole", "Xpeo", "Xsux", "Yezi", "Yiii", "Zanb", "Zinh", "Zmth", "Zsye", "Zsym", "Zxxx", "Zyyy", "Zzzz"]);
    function isISO15924(str) {
      (0, _assertString.default)(str);
      return validISO15924Codes.has(str);
    }
    __name(isISO15924, "isISO15924");
    __name2(isISO15924, "isISO15924");
    var ScriptCodes = exports.ScriptCodes = validISO15924Codes;
  }
});
var require_isISO31661Alpha3 = __commonJS({
  "../../node_modules/validator/lib/isISO31661Alpha3.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO31661Alpha3;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validISO31661Alpha3CountriesCodes = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
    function isISO31661Alpha3(str) {
      (0, _assertString.default)(str);
      return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
    }
    __name(isISO31661Alpha3, "isISO31661Alpha3");
    __name2(isISO31661Alpha3, "isISO31661Alpha3");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISO31661Numeric = __commonJS({
  "../../node_modules/validator/lib/isISO31661Numeric.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO31661Numeric;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validISO31661NumericCountriesCodes = /* @__PURE__ */ new Set(["004", "008", "010", "012", "016", "020", "024", "028", "031", "032", "036", "040", "044", "048", "050", "051", "052", "056", "060", "064", "068", "070", "072", "074", "076", "084", "086", "090", "092", "096", "100", "104", "108", "112", "116", "120", "124", "132", "136", "140", "144", "148", "152", "156", "158", "162", "166", "170", "174", "175", "178", "180", "184", "188", "191", "192", "196", "203", "204", "208", "212", "214", "218", "222", "226", "231", "232", "233", "234", "238", "239", "242", "246", "248", "250", "254", "258", "260", "262", "266", "268", "270", "275", "276", "288", "292", "296", "300", "304", "308", "312", "316", "320", "324", "328", "332", "334", "336", "340", "344", "348", "352", "356", "360", "364", "368", "372", "376", "380", "384", "388", "392", "398", "400", "404", "408", "410", "414", "417", "418", "422", "426", "428", "430", "434", "438", "440", "442", "446", "450", "454", "458", "462", "466", "470", "474", "478", "480", "484", "492", "496", "498", "499", "500", "504", "508", "512", "516", "520", "524", "528", "531", "533", "534", "535", "540", "548", "554", "558", "562", "566", "570", "574", "578", "580", "581", "583", "584", "585", "586", "591", "598", "600", "604", "608", "612", "616", "620", "624", "626", "630", "634", "638", "642", "643", "646", "652", "654", "659", "660", "662", "663", "666", "670", "674", "678", "682", "686", "688", "690", "694", "702", "703", "704", "705", "706", "710", "716", "724", "728", "729", "732", "740", "744", "748", "752", "756", "760", "762", "764", "768", "772", "776", "780", "784", "788", "792", "795", "796", "798", "800", "804", "807", "818", "826", "831", "832", "833", "834", "840", "850", "854", "858", "860", "862", "876", "882", "887", "894"]);
    function isISO31661Numeric(str) {
      (0, _assertString.default)(str);
      return validISO31661NumericCountriesCodes.has(str);
    }
    __name(isISO31661Numeric, "isISO31661Numeric");
    __name2(isISO31661Numeric, "isISO31661Numeric");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isISO4217 = __commonJS({
  "../../node_modules/validator/lib/isISO4217.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrencyCodes = void 0;
    exports.default = isISO4217;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validISO4217CurrencyCodes = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VED", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
    function isISO4217(str) {
      (0, _assertString.default)(str);
      return validISO4217CurrencyCodes.has(str.toUpperCase());
    }
    __name(isISO4217, "isISO4217");
    __name2(isISO4217, "isISO4217");
    var CurrencyCodes = exports.CurrencyCodes = validISO4217CurrencyCodes;
  }
});
var require_isBase32 = __commonJS({
  "../../node_modules/validator/lib/isBase32.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase32;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var base32 = /^[A-Z2-7]+=*$/;
    var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
    var defaultBase32Options = {
      crockford: false
    };
    function isBase32(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, defaultBase32Options);
      if (options2.crockford) {
        return crockfordBase32.test(str);
      }
      var len = str.length;
      if (len % 8 === 0 && base32.test(str)) {
        return true;
      }
      return false;
    }
    __name(isBase32, "isBase32");
    __name2(isBase32, "isBase32");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isBase58 = __commonJS({
  "../../node_modules/validator/lib/isBase58.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase58;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
    function isBase58(str) {
      (0, _assertString.default)(str);
      if (base58Reg.test(str)) {
        return true;
      }
      return false;
    }
    __name(isBase58, "isBase58");
    __name2(isBase58, "isBase58");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isDataURI = __commonJS({
  "../../node_modules/validator/lib/isDataURI.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDataURI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
    var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
    var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
    function isDataURI(str) {
      (0, _assertString.default)(str);
      var data = str.split(",");
      if (data.length < 2) {
        return false;
      }
      var attributes2 = data.shift().trim().split(";");
      var schemeAndMediaType = attributes2.shift();
      if (schemeAndMediaType.slice(0, 5) !== "data:") {
        return false;
      }
      var mediaType = schemeAndMediaType.slice(5);
      if (mediaType !== "" && !validMediaType.test(mediaType)) {
        return false;
      }
      for (var i = 0; i < attributes2.length; i++) {
        if (!(i === attributes2.length - 1 && attributes2[i].toLowerCase() === "base64") && !validAttribute.test(attributes2[i])) {
          return false;
        }
      }
      for (var _i = 0; _i < data.length; _i++) {
        if (!validData.test(data[_i])) {
          return false;
        }
      }
      return true;
    }
    __name(isDataURI, "isDataURI");
    __name2(isDataURI, "isDataURI");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMagnetURI = __commonJS({
  "../../node_modules/validator/lib/isMagnetURI.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMagnetURI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
    function isMagnetURI(url) {
      (0, _assertString.default)(url);
      if (url.indexOf("magnet:?") !== 0) {
        return false;
      }
      return magnetURIComponent.test(url);
    }
    __name(isMagnetURI, "isMagnetURI");
    __name2(isMagnetURI, "isMagnetURI");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_rtrim = __commonJS({
  "../../node_modules/validator/lib/rtrim.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rtrim;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function rtrim(str, chars2) {
      (0, _assertString.default)(str);
      if (chars2) {
        var pattern2 = new RegExp("[".concat(chars2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return str.replace(pattern2, "");
      }
      var strIndex = str.length - 1;
      while (/\s/.test(str.charAt(strIndex))) {
        strIndex -= 1;
      }
      return str.slice(0, strIndex + 1);
    }
    __name(rtrim, "rtrim");
    __name2(rtrim, "rtrim");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_ltrim = __commonJS({
  "../../node_modules/validator/lib/ltrim.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ltrim;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function ltrim(str, chars2) {
      (0, _assertString.default)(str);
      var pattern2 = chars2 ? new RegExp("^[".concat(chars2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
      return str.replace(pattern2, "");
    }
    __name(ltrim, "ltrim");
    __name2(ltrim, "ltrim");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_trim = __commonJS({
  "../../node_modules/validator/lib/trim.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = trim;
    var _rtrim = _interopRequireDefault(require_rtrim());
    var _ltrim = _interopRequireDefault(require_ltrim());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function trim(str, chars2) {
      return (0, _rtrim.default)((0, _ltrim.default)(str, chars2), chars2);
    }
    __name(trim, "trim");
    __name2(trim, "trim");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMailtoURI = __commonJS({
  "../../node_modules/validator/lib/isMailtoURI.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMailtoURI;
    var _trim = _interopRequireDefault(require_trim());
    var _isEmail = _interopRequireDefault(require_isEmail());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function _slicedToArray(r3, e3) {
      return _arrayWithHoles(r3) || _iterableToArrayLimit(r3, e3) || _unsupportedIterableToArray(r3, e3) || _nonIterableRest();
    }
    __name(_slicedToArray, "_slicedToArray");
    __name2(_slicedToArray, "_slicedToArray");
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    __name(_nonIterableRest, "_nonIterableRest");
    __name2(_nonIterableRest, "_nonIterableRest");
    function _iterableToArrayLimit(r3, l) {
      var t2 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
      if (null != t2) {
        var e3, n2, i, u, a = [], f = true, o2 = false;
        try {
          if (i = (t2 = t2.call(r3)).next, 0 === l) {
            if (Object(t2) !== t2) return;
            f = false;
          } else for (; !(f = (e3 = i.call(t2)).done) && (a.push(e3.value), a.length !== l); f = true) ;
        } catch (r4) {
          o2 = true, n2 = r4;
        } finally {
          try {
            if (!f && null != t2.return && (u = t2.return(), Object(u) !== u)) return;
          } finally {
            if (o2) throw n2;
          }
        }
        return a;
      }
    }
    __name(_iterableToArrayLimit, "_iterableToArrayLimit");
    __name2(_iterableToArrayLimit, "_iterableToArrayLimit");
    function _arrayWithHoles(r3) {
      if (Array.isArray(r3)) return r3;
    }
    __name(_arrayWithHoles, "_arrayWithHoles");
    __name2(_arrayWithHoles, "_arrayWithHoles");
    function _createForOfIteratorHelper(r3, e3) {
      var t2 = "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
      if (!t2) {
        if (Array.isArray(r3) || (t2 = _unsupportedIterableToArray(r3)) || e3 && r3 && "number" == typeof r3.length) {
          t2 && (r3 = t2);
          var _n = 0, F = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function F2() {
          }, "F2"), "F");
          return { s: F, n: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function n2() {
            return _n >= r3.length ? { done: true } : { done: false, value: r3[_n++] };
          }, "n2"), "n"), e: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function e4(r4) {
            throw r4;
          }, "e4"), "e"), f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o2, a = true, u = false;
      return { s: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function s3() {
        t2 = t2.call(r3);
      }, "s3"), "s"), n: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function n2() {
        var r4 = t2.next();
        return a = r4.done, r4;
      }, "n2"), "n"), e: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function e4(r4) {
        u = true, o2 = r4;
      }, "e4"), "e"), f: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function f() {
        try {
          a || null == t2.return || t2.return();
        } finally {
          if (u) throw o2;
        }
      }, "f"), "f") };
    }
    __name(_createForOfIteratorHelper, "_createForOfIteratorHelper");
    __name2(_createForOfIteratorHelper, "_createForOfIteratorHelper");
    function _unsupportedIterableToArray(r3, a) {
      if (r3) {
        if ("string" == typeof r3) return _arrayLikeToArray(r3, a);
        var t2 = {}.toString.call(r3).slice(8, -1);
        return "Object" === t2 && r3.constructor && (t2 = r3.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r3) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r3, a) : void 0;
      }
    }
    __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    __name2(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    function _arrayLikeToArray(r3, a) {
      (null == a || a > r3.length) && (a = r3.length);
      for (var e3 = 0, n2 = Array(a); e3 < a; e3++) n2[e3] = r3[e3];
      return n2;
    }
    __name(_arrayLikeToArray, "_arrayLikeToArray");
    __name2(_arrayLikeToArray, "_arrayLikeToArray");
    function parseMailtoQueryString(queryString) {
      var allowedParams = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), query = {
        cc: "",
        bcc: ""
      };
      var isParseFailed = false;
      var queryParams = queryString.split("&");
      if (queryParams.length > 4) {
        return false;
      }
      var _iterator = _createForOfIteratorHelper(queryParams), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var q = _step.value;
          var _q$split = q.split("="), _q$split2 = _slicedToArray(_q$split, 2), key2 = _q$split2[0], value = _q$split2[1];
          if (key2 && !allowedParams.has(key2)) {
            isParseFailed = true;
            break;
          }
          if (value && (key2 === "cc" || key2 === "bcc")) {
            query[key2] = value;
          }
          if (key2) {
            allowedParams.delete(key2);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return isParseFailed ? false : query;
    }
    __name(parseMailtoQueryString, "parseMailtoQueryString");
    __name2(parseMailtoQueryString, "parseMailtoQueryString");
    function isMailtoURI(url, options2) {
      (0, _assertString.default)(url);
      if (url.indexOf("mailto:") !== 0) {
        return false;
      }
      var _url$replace$split = url.replace("mailto:", "").split("?"), _url$replace$split2 = _slicedToArray(_url$replace$split, 2), to = _url$replace$split2[0], _url$replace$split2$ = _url$replace$split2[1], queryString = _url$replace$split2$ === void 0 ? "" : _url$replace$split2$;
      if (!to && !queryString) {
        return true;
      }
      var query = parseMailtoQueryString(queryString);
      if (!query) {
        return false;
      }
      return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(",").every(function(email) {
        email = (0, _trim.default)(email, " ");
        if (email) {
          return (0, _isEmail.default)(email, options2);
        }
        return true;
      });
    }
    __name(isMailtoURI, "isMailtoURI");
    __name2(isMailtoURI, "isMailtoURI");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isMimeType = __commonJS({
  "../../node_modules/validator/lib/isMimeType.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMimeType;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i;
    var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
    var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
    function isMimeType(str) {
      (0, _assertString.default)(str);
      return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
    }
    __name(isMimeType, "isMimeType");
    __name2(isMimeType, "isMimeType");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isLatLong = __commonJS({
  "../../node_modules/validator/lib/isLatLong.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLatLong;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    var _includesString = _interopRequireDefault(require_includesString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
    var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
    var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
    var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
    var defaultLatLongOptions = {
      checkDMS: false
    };
    function isLatLong(str, options2) {
      (0, _assertString.default)(str);
      options2 = (0, _merge.default)(options2, defaultLatLongOptions);
      if (!(0, _includesString.default)(str, ",")) return false;
      var pair = str.split(",");
      if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("(")) return false;
      if (options2.checkDMS) {
        return latDMS.test(pair[0]) && longDMS.test(pair[1]);
      }
      return lat.test(pair[0]) && long.test(pair[1]);
    }
    __name(isLatLong, "isLatLong");
    __name2(isLatLong, "isLatLong");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isPostalCode = __commonJS({
  "../../node_modules/validator/lib/isPostalCode.js"(exports) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPostalCode;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var threeDigit = /^\d{3}$/;
    var fourDigit = /^\d{4}$/;
    var fiveDigit = /^\d{5}$/;
    var sixDigit = /^\d{6}$/;
    var patterns = {
      AD: /^AD\d{3}$/,
      AT: fourDigit,
      AU: fourDigit,
      AZ: /^AZ\d{4}$/,
      BA: /^([7-8]\d{4}$)/,
      BD: /^([1-8][0-9]{3}|9[0-4][0-9]{2})$/,
      BE: fourDigit,
      BG: fourDigit,
      BR: /^\d{5}-?\d{3}$/,
      BY: /^2[1-4]\d{4}$/,
      CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
      CH: fourDigit,
      CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
      CO: /^(05|08|11|13|15|17|18|19|20|23|25|27|41|44|47|50|52|54|63|66|68|70|73|76|81|85|86|88|91|94|95|97|99)(\d{4})$/,
      CZ: /^\d{3}\s?\d{2}$/,
      DE: fiveDigit,
      DK: fourDigit,
      DO: fiveDigit,
      DZ: fiveDigit,
      EE: fiveDigit,
      ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
      FI: fiveDigit,
      FR: /^(?:(?:0[1-9]|[1-8]\d|9[0-5])\d{3}|97[1-46]\d{2})$/,
      GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
      GR: /^\d{3}\s?\d{2}$/,
      HR: /^([1-5]\d{4}$)/,
      HT: /^HT\d{4}$/,
      HU: fourDigit,
      ID: fiveDigit,
      IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
      IL: /^(\d{5}|\d{7})$/,
      IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
      IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
      IS: threeDigit,
      IT: fiveDigit,
      JP: /^\d{3}\-\d{4}$/,
      KE: fiveDigit,
      KR: /^(\d{5}|\d{6})$/,
      LI: /^(948[5-9]|949[0-7])$/,
      LT: /^LT\-\d{5}$/,
      LU: fourDigit,
      LV: /^LV\-\d{4}$/,
      LK: fiveDigit,
      MG: threeDigit,
      MX: fiveDigit,
      MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
      MY: fiveDigit,
      NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
      NO: fourDigit,
      NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
      NZ: fourDigit,
      // https://www.pakpost.gov.pk/postcodes.php
      PK: fiveDigit,
      PL: /^\d{2}\-\d{3}$/,
      PR: /^00[679]\d{2}([ -]\d{4})?$/,
      PT: /^\d{4}\-\d{3}?$/,
      RO: sixDigit,
      RU: sixDigit,
      SA: fiveDigit,
      SE: /^[1-9]\d{2}\s?\d{2}$/,
      SG: sixDigit,
      SI: fourDigit,
      SK: /^\d{3}\s?\d{2}$/,
      TH: fiveDigit,
      TN: fourDigit,
      TW: /^\d{3}(\d{2,3})?$/,
      UA: fiveDigit,
      US: /^\d{5}(-\d{4})?$/,
      ZA: fourDigit,
      ZM: fiveDigit
    };
    var locales = exports.locales = Object.keys(patterns);
    function isPostalCode(str, locale) {
      (0, _assertString.default)(str);
      if (locale in patterns) {
        return patterns[locale].test(str);
      } else if (locale === "any") {
        for (var key2 in patterns) {
          if (patterns.hasOwnProperty(key2)) {
            var pattern2 = patterns[key2];
            if (pattern2.test(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isPostalCode, "isPostalCode");
    __name2(isPostalCode, "isPostalCode");
  }
});
var require_escape = __commonJS({
  "../../node_modules/validator/lib/escape.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escape;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function escape(str) {
      (0, _assertString.default)(str);
      return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
    }
    __name(escape, "escape");
    __name2(escape, "escape");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_unescape = __commonJS({
  "../../node_modules/validator/lib/unescape.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = unescape;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function unescape(str) {
      (0, _assertString.default)(str);
      return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
    }
    __name(unescape, "unescape");
    __name2(unescape, "unescape");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_blacklist = __commonJS({
  "../../node_modules/validator/lib/blacklist.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = blacklist;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function blacklist(str, chars2) {
      (0, _assertString.default)(str);
      return str.replace(new RegExp("[".concat(chars2, "]+"), "g"), "");
    }
    __name(blacklist, "blacklist");
    __name2(blacklist, "blacklist");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_stripLow = __commonJS({
  "../../node_modules/validator/lib/stripLow.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = stripLow;
    var _assertString = _interopRequireDefault(require_assertString());
    var _blacklist = _interopRequireDefault(require_blacklist());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function stripLow(str, keep_new_lines) {
      (0, _assertString.default)(str);
      var chars2 = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
      return (0, _blacklist.default)(str, chars2);
    }
    __name(stripLow, "stripLow");
    __name2(stripLow, "stripLow");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_whitelist = __commonJS({
  "../../node_modules/validator/lib/whitelist.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = whitelist;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function whitelist(str, chars2) {
      (0, _assertString.default)(str);
      return str.replace(new RegExp("[^".concat(chars2, "]+"), "g"), "");
    }
    __name(whitelist, "whitelist");
    __name2(whitelist, "whitelist");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isWhitelisted = __commonJS({
  "../../node_modules/validator/lib/isWhitelisted.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isWhitelisted;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    function isWhitelisted(str, chars2) {
      (0, _assertString.default)(str);
      for (var i = str.length - 1; i >= 0; i--) {
        if (chars2.indexOf(str[i]) === -1) {
          return false;
        }
      }
      return true;
    }
    __name(isWhitelisted, "isWhitelisted");
    __name2(isWhitelisted, "isWhitelisted");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_normalizeEmail = __commonJS({
  "../../node_modules/validator/lib/normalizeEmail.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = normalizeEmail;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var default_normalize_email_options = {
      // The following options apply to all email addresses
      // Lowercases the local part of the email address.
      // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
      // The domain is always lowercased, as per RFC 1035
      all_lowercase: true,
      // The following conversions are specific to GMail
      // Lowercases the local part of the GMail address (known to be case-insensitive)
      gmail_lowercase: true,
      // Removes dots from the local part of the email address, as that's ignored by GMail
      gmail_remove_dots: true,
      // Removes the subaddress (e.g. "+foo") from the email address
      gmail_remove_subaddress: true,
      // Conversts the googlemail.com domain to gmail.com
      gmail_convert_googlemaildotcom: true,
      // The following conversions are specific to Outlook.com / Windows Live / Hotmail
      // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
      outlookdotcom_lowercase: true,
      // Removes the subaddress (e.g. "+foo") from the email address
      outlookdotcom_remove_subaddress: true,
      // The following conversions are specific to Yahoo
      // Lowercases the local part of the Yahoo address (known to be case-insensitive)
      yahoo_lowercase: true,
      // Removes the subaddress (e.g. "-foo") from the email address
      yahoo_remove_subaddress: true,
      // The following conversions are specific to Yandex
      // Lowercases the local part of the Yandex address (known to be case-insensitive)
      yandex_lowercase: true,
      // all yandex domains are equal, this explicitly sets the domain to 'yandex.ru'
      yandex_convert_yandexru: true,
      // The following conversions are specific to iCloud
      // Lowercases the local part of the iCloud address (known to be case-insensitive)
      icloud_lowercase: true,
      // Removes the subaddress (e.g. "+foo") from the email address
      icloud_remove_subaddress: true
    };
    var icloud_domains = ["icloud.com", "me.com"];
    var outlookdotcom_domains = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"];
    var yahoo_domains = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
    var yandex_domains = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
    function dotsReplacer(match) {
      if (match.length > 1) {
        return match;
      }
      return "";
    }
    __name(dotsReplacer, "dotsReplacer");
    __name2(dotsReplacer, "dotsReplacer");
    function normalizeEmail(email, options2) {
      options2 = (0, _merge.default)(options2, default_normalize_email_options);
      var raw_parts = email.split("@");
      var domain = raw_parts.pop();
      var user = raw_parts.join("@");
      var parts = [user, domain];
      parts[1] = parts[1].toLowerCase();
      if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
        if (options2.gmail_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (options2.gmail_remove_dots) {
          parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
        }
        if (!parts[0].length) {
          return false;
        }
        if (options2.all_lowercase || options2.gmail_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        parts[1] = options2.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
      } else if (icloud_domains.indexOf(parts[1]) >= 0) {
        if (options2.icloud_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options2.all_lowercase || options2.icloud_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
        if (options2.outlookdotcom_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options2.all_lowercase || options2.outlookdotcom_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
        if (options2.yahoo_remove_subaddress) {
          var components = parts[0].split("-");
          parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options2.all_lowercase || options2.yahoo_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (yandex_domains.indexOf(parts[1]) >= 0) {
        if (options2.all_lowercase || options2.yandex_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        parts[1] = options2.yandex_convert_yandexru ? "yandex.ru" : parts[1];
      } else if (options2.all_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
      return parts.join("@");
    }
    __name(normalizeEmail, "normalizeEmail");
    __name2(normalizeEmail, "normalizeEmail");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isSlug = __commonJS({
  "../../node_modules/validator/lib/isSlug.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSlug;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function isSlug(str) {
      (0, _assertString.default)(str);
      return charsetRegex.test(str);
    }
    __name(isSlug, "isSlug");
    __name2(isSlug, "isSlug");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isLicensePlate = __commonJS({
  "../../node_modules/validator/lib/isLicensePlate.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLicensePlate;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var validators = {
      "cs-CZ": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function csCZ(str) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
      }, "csCZ"), "csCZ"),
      "de-DE": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function deDE(str) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
      }, "deDE"), "deDE"),
      "de-LI": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function deLI(str) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
      }, "deLI"), "deLI"),
      "en-IN": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function enIN(str) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
      }, "enIN"), "enIN"),
      "en-SG": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function enSG(str) {
        return /^[A-Z]{3}[ -]?[\d]{4}[ -]?[A-Z]{1}$/.test(str);
      }, "enSG"), "enSG"),
      "es-AR": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function esAR(str) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
      }, "esAR"), "esAR"),
      "fi-FI": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function fiFI(str) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
      }, "fiFI"), "fiFI"),
      "hu-HU": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function huHU(str) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
      }, "huHU"), "huHU"),
      "pt-BR": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function ptBR(str) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
      }, "ptBR"), "ptBR"),
      "pt-PT": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function ptPT(str) {
        return /^(([A-Z]{2}[ -·]?[0-9]{2}[ -·]?[0-9]{2})|([0-9]{2}[ -·]?[A-Z]{2}[ -·]?[0-9]{2})|([0-9]{2}[ -·]?[0-9]{2}[ -·]?[A-Z]{2})|([A-Z]{2}[ -·]?[0-9]{2}[ -·]?[A-Z]{2}))$/.test(str);
      }, "ptPT"), "ptPT"),
      "sq-AL": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function sqAL(str) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
      }, "sqAL"), "sqAL"),
      "sv-SE": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function svSE(str) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
      }, "svSE"), "svSE"),
      "en-PK": /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function enPK(str) {
        return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(str.trim());
      }, "enPK"), "enPK")
    };
    function isLicensePlate(str, locale) {
      (0, _assertString.default)(str);
      if (locale in validators) {
        return validators[locale](str);
      } else if (locale === "any") {
        for (var key2 in validators) {
          var validator3 = validators[key2];
          if (validator3(str)) {
            return true;
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    __name(isLicensePlate, "isLicensePlate");
    __name2(isLicensePlate, "isLicensePlate");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isStrongPassword = __commonJS({
  "../../node_modules/validator/lib/isStrongPassword.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isStrongPassword;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var upperCaseRegex = /^[A-Z]$/;
    var lowerCaseRegex = /^[a-z]$/;
    var numberRegex = /^[0-9]$/;
    var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/;
    var defaultOptions = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    };
    function countChars(str) {
      var result = {};
      Array.from(str).forEach(function(char) {
        var curVal = result[char];
        if (curVal) {
          result[char] += 1;
        } else {
          result[char] = 1;
        }
      });
      return result;
    }
    __name(countChars, "countChars");
    __name2(countChars, "countChars");
    function analyzePassword(password) {
      var charMap = countChars(password);
      var analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
      };
      Object.keys(charMap).forEach(function(char) {
        if (upperCaseRegex.test(char)) {
          analysis.uppercaseCount += charMap[char];
        } else if (lowerCaseRegex.test(char)) {
          analysis.lowercaseCount += charMap[char];
        } else if (numberRegex.test(char)) {
          analysis.numberCount += charMap[char];
        } else if (symbolRegex.test(char)) {
          analysis.symbolCount += charMap[char];
        }
      });
      return analysis;
    }
    __name(analyzePassword, "analyzePassword");
    __name2(analyzePassword, "analyzePassword");
    function scorePassword(analysis, scoringOptions) {
      var points = 0;
      points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
      points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
      if (analysis.lowercaseCount > 0) {
        points += scoringOptions.pointsForContainingLower;
      }
      if (analysis.uppercaseCount > 0) {
        points += scoringOptions.pointsForContainingUpper;
      }
      if (analysis.numberCount > 0) {
        points += scoringOptions.pointsForContainingNumber;
      }
      if (analysis.symbolCount > 0) {
        points += scoringOptions.pointsForContainingSymbol;
      }
      return points;
    }
    __name(scorePassword, "scorePassword");
    __name2(scorePassword, "scorePassword");
    function isStrongPassword(str) {
      var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      (0, _assertString.default)(str);
      var analysis = analyzePassword(str);
      options2 = (0, _merge.default)(options2 || {}, defaultOptions);
      if (options2.returnScore) {
        return scorePassword(analysis, options2);
      }
      return analysis.length >= options2.minLength && analysis.lowercaseCount >= options2.minLowercase && analysis.uppercaseCount >= options2.minUppercase && analysis.numberCount >= options2.minNumbers && analysis.symbolCount >= options2.minSymbols;
    }
    __name(isStrongPassword, "isStrongPassword");
    __name2(isStrongPassword, "isStrongPassword");
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
var require_isVAT = __commonJS({
  "../../node_modules/validator/lib/isVAT.js"(exports) {
    "use strict";
    init_checked_fetch();
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVAT;
    exports.vatMatchers = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var algorithms = _interopRequireWildcard(require_algorithms());
    function _interopRequireWildcard(e3, t2) {
      if ("function" == typeof WeakMap) var r3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
      return (_interopRequireWildcard = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function _interopRequireWildcard2(e4, t3) {
        if (!t3 && e4 && e4.__esModule) return e4;
        var o2, i, f = { __proto__: null, default: e4 };
        if (null === e4 || "object" != _typeof(e4) && "function" != typeof e4) return f;
        if (o2 = t3 ? n2 : r3) {
          if (o2.has(e4)) return o2.get(e4);
          o2.set(e4, f);
        }
        for (var _t in e4) "default" !== _t && {}.hasOwnProperty.call(e4, _t) && ((i = (o2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(e4, _t)) && (i.get || i.set) ? o2(f, _t, i) : f[_t] = e4[_t]);
        return f;
      }, "_interopRequireWildcard2"), "_interopRequireWildcard"))(e3, t2);
    }
    __name(_interopRequireWildcard, "_interopRequireWildcard");
    __name2(_interopRequireWildcard, "_interopRequireWildcard");
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var AU = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function AU2(str) {
      var match = str.match(/^(AU)?(\d{11})$/);
      if (!match) {
        return false;
      }
      var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      str = str.replace(/^AU/, "");
      var ABN = (parseInt(str.slice(0, 1), 10) - 1).toString() + str.slice(1);
      var total = 0;
      for (var i = 0; i < 11; i++) {
        total += weights[i] * ABN.charAt(i);
      }
      return total !== 0 && total % 89 === 0;
    }, "AU2"), "AU");
    var CH = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CH2(str) {
      var hasValidCheckNumber = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hasValidCheckNumber2(digits) {
        var lastDigit = digits.pop();
        var weights = [5, 4, 3, 2, 7, 6, 5, 4];
        var calculatedCheckNumber = (11 - digits.reduce(function(acc, el, idx) {
          return acc + el * weights[idx];
        }, 0) % 11) % 11;
        return lastDigit === calculatedCheckNumber;
      }, "hasValidCheckNumber2"), "hasValidCheckNumber");
      return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function(el) {
        return +el;
      }));
    }, "CH2"), "CH");
    var PT = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PT2(str) {
      var match = str.match(/^(PT)?(\d{9})$/);
      if (!match) {
        return false;
      }
      var tin = match[2];
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11;
      if (checksum > 9) {
        return parseInt(tin[8], 10) === 0;
      }
      return checksum === parseInt(tin[8], 10);
    }, "PT2"), "PT");
    var vatMatchers = exports.vatMatchers = {
      /**
       * European Union VAT identification numbers
       */
      AT: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function AT(str) {
        return /^(AT)?U\d{8}$/.test(str);
      }, "AT"), "AT"),
      BE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function BE(str) {
        return /^(BE)?\d{10}$/.test(str);
      }, "BE"), "BE"),
      BG: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function BG(str) {
        return /^(BG)?\d{9,10}$/.test(str);
      }, "BG"), "BG"),
      HR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function HR(str) {
        return /^(HR)?\d{11}$/.test(str);
      }, "HR"), "HR"),
      CY: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CY(str) {
        return /^(CY)?\w{9}$/.test(str);
      }, "CY"), "CY"),
      CZ: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CZ(str) {
        return /^(CZ)?\d{8,10}$/.test(str);
      }, "CZ"), "CZ"),
      DK: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function DK(str) {
        return /^(DK)?\d{8}$/.test(str);
      }, "DK"), "DK"),
      EE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function EE(str) {
        return /^(EE)?\d{9}$/.test(str);
      }, "EE"), "EE"),
      FI: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function FI(str) {
        return /^(FI)?\d{8}$/.test(str);
      }, "FI"), "FI"),
      FR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function FR(str) {
        return /^(FR)([A-Z0-9]{2}\d{9})$/.test(str);
      }, "FR"), "FR"),
      DE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function DE(str) {
        return /^(DE)?\d{9}$/.test(str);
      }, "DE"), "DE"),
      EL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function EL(str) {
        return /^(EL)?\d{9}$/.test(str);
      }, "EL"), "EL"),
      HU: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function HU(str) {
        return /^(HU)?\d{8}$/.test(str);
      }, "HU"), "HU"),
      IE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IE(str) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
      }, "IE"), "IE"),
      IT: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IT(str) {
        return /^(IT)?\d{11}$/.test(str);
      }, "IT"), "IT"),
      LV: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function LV(str) {
        return /^(LV)?\d{11}$/.test(str);
      }, "LV"), "LV"),
      LT: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function LT(str) {
        return /^(LT)?\d{9,12}$/.test(str);
      }, "LT"), "LT"),
      LU: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function LU(str) {
        return /^(LU)?\d{8}$/.test(str);
      }, "LU"), "LU"),
      MT: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function MT(str) {
        return /^(MT)?\d{8}$/.test(str);
      }, "MT"), "MT"),
      NL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function NL(str) {
        return /^(NL)?\d{9}B\d{2}$/.test(str);
      }, "NL"), "NL"),
      PL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PL(str) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
      }, "PL"), "PL"),
      PT,
      RO: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function RO(str) {
        return /^(RO)?\d{2,10}$/.test(str);
      }, "RO"), "RO"),
      SK: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function SK(str) {
        return /^(SK)?\d{10}$/.test(str);
      }, "SK"), "SK"),
      SI: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function SI(str) {
        return /^(SI)?\d{8}$/.test(str);
      }, "SI"), "SI"),
      ES: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function ES(str) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(str);
      }, "ES"), "ES"),
      SE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function SE(str) {
        return /^(SE)?\d{12}$/.test(str);
      }, "SE"), "SE"),
      /**
       * VAT numbers of non-EU countries
       */
      AL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function AL(str) {
        return /^(AL)?\w{9}[A-Z]$/.test(str);
      }, "AL"), "AL"),
      MK: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function MK(str) {
        return /^(MK)?\d{13}$/.test(str);
      }, "MK"), "MK"),
      AU,
      BY: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function BY(str) {
        return /^(УНП )?\d{9}$/.test(str);
      }, "BY"), "BY"),
      CA: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CA(str) {
        return /^(CA)?\d{9}$/.test(str);
      }, "CA"), "CA"),
      IS: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IS(str) {
        return /^(IS)?\d{5,6}$/.test(str);
      }, "IS"), "IS"),
      IN: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IN(str) {
        return /^(IN)?\d{15}$/.test(str);
      }, "IN"), "IN"),
      ID: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function ID(str) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
      }, "ID"), "ID"),
      IL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function IL(str) {
        return /^(IL)?\d{9}$/.test(str);
      }, "IL"), "IL"),
      KZ: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function KZ(str) {
        return /^(KZ)?\d{12}$/.test(str);
      }, "KZ"), "KZ"),
      NZ: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function NZ(str) {
        return /^(NZ)?\d{9}$/.test(str);
      }, "NZ"), "NZ"),
      NG: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function NG(str) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
      }, "NG"), "NG"),
      NO: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function NO(str) {
        return /^(NO)?\d{9}MVA$/.test(str);
      }, "NO"), "NO"),
      PH: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PH(str) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
      }, "PH"), "PH"),
      RU: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function RU(str) {
        return /^(RU)?(\d{10}|\d{12})$/.test(str);
      }, "RU"), "RU"),
      SM: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function SM(str) {
        return /^(SM)?\d{5}$/.test(str);
      }, "SM"), "SM"),
      SA: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function SA(str) {
        return /^(SA)?\d{15}$/.test(str);
      }, "SA"), "SA"),
      RS: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function RS(str) {
        return /^(RS)?\d{9}$/.test(str);
      }, "RS"), "RS"),
      CH,
      TR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function TR(str) {
        return /^(TR)?\d{10}$/.test(str);
      }, "TR"), "TR"),
      UA: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function UA(str) {
        return /^(UA)?\d{12}$/.test(str);
      }, "UA"), "UA"),
      GB: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function GB(str) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
      }, "GB"), "GB"),
      UZ: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function UZ(str) {
        return /^(UZ)?\d{9}$/.test(str);
      }, "UZ"), "UZ"),
      /**
       * VAT numbers of Latin American countries
       */
      AR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function AR(str) {
        return /^(AR)?\d{11}$/.test(str);
      }, "AR"), "AR"),
      BO: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function BO(str) {
        return /^(BO)?\d{7}$/.test(str);
      }, "BO"), "BO"),
      BR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function BR(str) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
      }, "BR"), "BR"),
      CL: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CL(str) {
        return /^(CL)?\d{8}-\d{1}$/.test(str);
      }, "CL"), "CL"),
      CO: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CO(str) {
        return /^(CO)?\d{10}$/.test(str);
      }, "CO"), "CO"),
      CR: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function CR(str) {
        return /^(CR)?\d{9,12}$/.test(str);
      }, "CR"), "CR"),
      EC: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function EC(str) {
        return /^(EC)?\d{13}$/.test(str);
      }, "EC"), "EC"),
      SV: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function SV(str) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
      }, "SV"), "SV"),
      GT: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function GT(str) {
        return /^(GT)?\d{7}-\d{1}$/.test(str);
      }, "GT"), "GT"),
      HN: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function HN(str) {
        return /^(HN)?$/.test(str);
      }, "HN"), "HN"),
      MX: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function MX(str) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
      }, "MX"), "MX"),
      NI: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function NI(str) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
      }, "NI"), "NI"),
      PA: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PA(str) {
        return /^(PA)?$/.test(str);
      }, "PA"), "PA"),
      PY: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PY(str) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(str);
      }, "PY"), "PY"),
      PE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function PE(str) {
        return /^(PE)?\d{11}$/.test(str);
      }, "PE"), "PE"),
      DO: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function DO(str) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
      }, "DO"), "DO"),
      UY: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function UY(str) {
        return /^(UY)?\d{12}$/.test(str);
      }, "UY"), "UY"),
      VE: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function VE(str) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
      }, "VE"), "VE")
    };
    function isVAT(str, countryCode) {
      (0, _assertString.default)(str);
      (0, _assertString.default)(countryCode);
      if (countryCode in vatMatchers) {
        return vatMatchers[countryCode](str);
      }
      throw new Error("Invalid country code: '".concat(countryCode, "'"));
    }
    __name(isVAT, "isVAT");
    __name2(isVAT, "isVAT");
  }
});
var require_validator = __commonJS({
  "../../node_modules/validator/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    function _typeof(o2) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, _typeof(o2);
    }
    __name(_typeof, "_typeof");
    __name2(_typeof, "_typeof");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _toDate = _interopRequireDefault(require_toDate());
    var _toFloat = _interopRequireDefault(require_toFloat());
    var _toInt = _interopRequireDefault(require_toInt());
    var _toBoolean = _interopRequireDefault(require_toBoolean());
    var _equals = _interopRequireDefault(require_equals());
    var _contains = _interopRequireDefault(require_contains());
    var _matches = _interopRequireDefault(require_matches());
    var _isEmail = _interopRequireDefault(require_isEmail());
    var _isURL = _interopRequireDefault(require_isURL());
    var _isMACAddress = _interopRequireDefault(require_isMACAddress());
    var _isIP = _interopRequireDefault(require_isIP());
    var _isIPRange = _interopRequireDefault(require_isIPRange());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isDate = _interopRequireDefault(require_isDate());
    var _isTime = _interopRequireDefault(require_isTime());
    var _isBoolean = _interopRequireDefault(require_isBoolean());
    var _isLocale = _interopRequireDefault(require_isLocale());
    var _isAbaRouting = _interopRequireDefault(require_isAbaRouting());
    var _isAlpha = _interopRequireWildcard(require_isAlpha());
    var _isAlphanumeric = _interopRequireWildcard(require_isAlphanumeric());
    var _isNumeric = _interopRequireDefault(require_isNumeric());
    var _isPassportNumber = _interopRequireWildcard(require_isPassportNumber());
    var _isPort = _interopRequireDefault(require_isPort());
    var _isLowercase = _interopRequireDefault(require_isLowercase());
    var _isUppercase = _interopRequireDefault(require_isUppercase());
    var _isIMEI = _interopRequireDefault(require_isIMEI());
    var _isAscii = _interopRequireDefault(require_isAscii());
    var _isFullWidth = _interopRequireDefault(require_isFullWidth());
    var _isHalfWidth = _interopRequireDefault(require_isHalfWidth());
    var _isVariableWidth = _interopRequireDefault(require_isVariableWidth());
    var _isMultibyte = _interopRequireDefault(require_isMultibyte());
    var _isSemVer = _interopRequireDefault(require_isSemVer());
    var _isSurrogatePair = _interopRequireDefault(require_isSurrogatePair());
    var _isInt = _interopRequireDefault(require_isInt());
    var _isFloat = _interopRequireWildcard(require_isFloat());
    var _isDecimal = _interopRequireDefault(require_isDecimal());
    var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
    var _isOctal = _interopRequireDefault(require_isOctal());
    var _isDivisibleBy = _interopRequireDefault(require_isDivisibleBy());
    var _isHexColor = _interopRequireDefault(require_isHexColor());
    var _isRgbColor = _interopRequireDefault(require_isRgbColor());
    var _isHSL = _interopRequireDefault(require_isHSL());
    var _isISRC = _interopRequireDefault(require_isISRC());
    var _isIBAN = _interopRequireWildcard(require_isIBAN());
    var _isBIC = _interopRequireDefault(require_isBIC());
    var _isMD = _interopRequireDefault(require_isMD5());
    var _isHash = _interopRequireDefault(require_isHash());
    var _isJWT = _interopRequireDefault(require_isJWT());
    var _isJSON = _interopRequireDefault(require_isJSON());
    var _isEmpty = _interopRequireDefault(require_isEmpty());
    var _isLength = _interopRequireDefault(require_isLength());
    var _isByteLength = _interopRequireDefault(require_isByteLength());
    var _isULID = _interopRequireDefault(require_isULID());
    var _isUUID = _interopRequireDefault(require_isUUID());
    var _isMongoId = _interopRequireDefault(require_isMongoId());
    var _isAfter = _interopRequireDefault(require_isAfter());
    var _isBefore = _interopRequireDefault(require_isBefore());
    var _isIn = _interopRequireDefault(require_isIn());
    var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
    var _isCreditCard = _interopRequireDefault(require_isCreditCard());
    var _isIdentityCard = _interopRequireDefault(require_isIdentityCard());
    var _isEAN = _interopRequireDefault(require_isEAN());
    var _isISIN = _interopRequireDefault(require_isISIN());
    var _isISBN = _interopRequireDefault(require_isISBN());
    var _isISSN = _interopRequireDefault(require_isISSN());
    var _isTaxID = _interopRequireDefault(require_isTaxID());
    var _isMobilePhone = _interopRequireWildcard(require_isMobilePhone());
    var _isEthereumAddress = _interopRequireDefault(require_isEthereumAddress());
    var _isCurrency = _interopRequireDefault(require_isCurrency());
    var _isBtcAddress = _interopRequireDefault(require_isBtcAddress());
    var _isISO = require_isISO6346();
    var _isISO2 = _interopRequireDefault(require_isISO6391());
    var _isISO3 = _interopRequireDefault(require_isISO8601());
    var _isRFC = _interopRequireDefault(require_isRFC3339());
    var _isISO4 = _interopRequireDefault(require_isISO15924());
    var _isISO31661Alpha = _interopRequireDefault(require_isISO31661Alpha2());
    var _isISO31661Alpha2 = _interopRequireDefault(require_isISO31661Alpha3());
    var _isISO31661Numeric = _interopRequireDefault(require_isISO31661Numeric());
    var _isISO5 = _interopRequireDefault(require_isISO4217());
    var _isBase = _interopRequireDefault(require_isBase32());
    var _isBase2 = _interopRequireDefault(require_isBase58());
    var _isBase3 = _interopRequireDefault(require_isBase64());
    var _isDataURI = _interopRequireDefault(require_isDataURI());
    var _isMagnetURI = _interopRequireDefault(require_isMagnetURI());
    var _isMailtoURI = _interopRequireDefault(require_isMailtoURI());
    var _isMimeType = _interopRequireDefault(require_isMimeType());
    var _isLatLong = _interopRequireDefault(require_isLatLong());
    var _isPostalCode = _interopRequireWildcard(require_isPostalCode());
    var _ltrim = _interopRequireDefault(require_ltrim());
    var _rtrim = _interopRequireDefault(require_rtrim());
    var _trim = _interopRequireDefault(require_trim());
    var _escape = _interopRequireDefault(require_escape());
    var _unescape = _interopRequireDefault(require_unescape());
    var _stripLow = _interopRequireDefault(require_stripLow());
    var _whitelist = _interopRequireDefault(require_whitelist());
    var _blacklist = _interopRequireDefault(require_blacklist());
    var _isWhitelisted = _interopRequireDefault(require_isWhitelisted());
    var _normalizeEmail = _interopRequireDefault(require_normalizeEmail());
    var _isSlug = _interopRequireDefault(require_isSlug());
    var _isLicensePlate = _interopRequireDefault(require_isLicensePlate());
    var _isStrongPassword = _interopRequireDefault(require_isStrongPassword());
    var _isVAT = _interopRequireDefault(require_isVAT());
    function _interopRequireWildcard(e3, t2) {
      if ("function" == typeof WeakMap) var r3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
      return (_interopRequireWildcard = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function _interopRequireWildcard2(e4, t3) {
        if (!t3 && e4 && e4.__esModule) return e4;
        var o2, i, f = { __proto__: null, default: e4 };
        if (null === e4 || "object" != _typeof(e4) && "function" != typeof e4) return f;
        if (o2 = t3 ? n2 : r3) {
          if (o2.has(e4)) return o2.get(e4);
          o2.set(e4, f);
        }
        for (var _t in e4) "default" !== _t && {}.hasOwnProperty.call(e4, _t) && ((i = (o2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(e4, _t)) && (i.get || i.set) ? o2(f, _t, i) : f[_t] = e4[_t]);
        return f;
      }, "_interopRequireWildcard2"), "_interopRequireWildcard"))(e3, t2);
    }
    __name(_interopRequireWildcard, "_interopRequireWildcard");
    __name2(_interopRequireWildcard, "_interopRequireWildcard");
    function _interopRequireDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    __name2(_interopRequireDefault, "_interopRequireDefault");
    var version = "13.15.23";
    var validator3 = {
      version,
      toDate: _toDate.default,
      toFloat: _toFloat.default,
      toInt: _toInt.default,
      toBoolean: _toBoolean.default,
      equals: _equals.default,
      contains: _contains.default,
      matches: _matches.default,
      isEmail: _isEmail.default,
      isURL: _isURL.default,
      isMACAddress: _isMACAddress.default,
      isIP: _isIP.default,
      isIPRange: _isIPRange.default,
      isFQDN: _isFQDN.default,
      isBoolean: _isBoolean.default,
      isIBAN: _isIBAN.default,
      isBIC: _isBIC.default,
      isAbaRouting: _isAbaRouting.default,
      isAlpha: _isAlpha.default,
      isAlphaLocales: _isAlpha.locales,
      isAlphanumeric: _isAlphanumeric.default,
      isAlphanumericLocales: _isAlphanumeric.locales,
      isNumeric: _isNumeric.default,
      isPassportNumber: _isPassportNumber.default,
      passportNumberLocales: _isPassportNumber.locales,
      isPort: _isPort.default,
      isLowercase: _isLowercase.default,
      isUppercase: _isUppercase.default,
      isAscii: _isAscii.default,
      isFullWidth: _isFullWidth.default,
      isHalfWidth: _isHalfWidth.default,
      isVariableWidth: _isVariableWidth.default,
      isMultibyte: _isMultibyte.default,
      isSemVer: _isSemVer.default,
      isSurrogatePair: _isSurrogatePair.default,
      isInt: _isInt.default,
      isIMEI: _isIMEI.default,
      isFloat: _isFloat.default,
      isFloatLocales: _isFloat.locales,
      isDecimal: _isDecimal.default,
      isHexadecimal: _isHexadecimal.default,
      isOctal: _isOctal.default,
      isDivisibleBy: _isDivisibleBy.default,
      isHexColor: _isHexColor.default,
      isRgbColor: _isRgbColor.default,
      isHSL: _isHSL.default,
      isISRC: _isISRC.default,
      isMD5: _isMD.default,
      isHash: _isHash.default,
      isJWT: _isJWT.default,
      isJSON: _isJSON.default,
      isEmpty: _isEmpty.default,
      isLength: _isLength.default,
      isLocale: _isLocale.default,
      isByteLength: _isByteLength.default,
      isULID: _isULID.default,
      isUUID: _isUUID.default,
      isMongoId: _isMongoId.default,
      isAfter: _isAfter.default,
      isBefore: _isBefore.default,
      isIn: _isIn.default,
      isLuhnNumber: _isLuhnNumber.default,
      isCreditCard: _isCreditCard.default,
      isIdentityCard: _isIdentityCard.default,
      isEAN: _isEAN.default,
      isISIN: _isISIN.default,
      isISBN: _isISBN.default,
      isISSN: _isISSN.default,
      isMobilePhone: _isMobilePhone.default,
      isMobilePhoneLocales: _isMobilePhone.locales,
      isPostalCode: _isPostalCode.default,
      isPostalCodeLocales: _isPostalCode.locales,
      isEthereumAddress: _isEthereumAddress.default,
      isCurrency: _isCurrency.default,
      isBtcAddress: _isBtcAddress.default,
      isISO6346: _isISO.isISO6346,
      isFreightContainerID: _isISO.isFreightContainerID,
      isISO6391: _isISO2.default,
      isISO8601: _isISO3.default,
      isISO15924: _isISO4.default,
      isRFC3339: _isRFC.default,
      isISO31661Alpha2: _isISO31661Alpha.default,
      isISO31661Alpha3: _isISO31661Alpha2.default,
      isISO31661Numeric: _isISO31661Numeric.default,
      isISO4217: _isISO5.default,
      isBase32: _isBase.default,
      isBase58: _isBase2.default,
      isBase64: _isBase3.default,
      isDataURI: _isDataURI.default,
      isMagnetURI: _isMagnetURI.default,
      isMailtoURI: _isMailtoURI.default,
      isMimeType: _isMimeType.default,
      isLatLong: _isLatLong.default,
      ltrim: _ltrim.default,
      rtrim: _rtrim.default,
      trim: _trim.default,
      escape: _escape.default,
      unescape: _unescape.default,
      stripLow: _stripLow.default,
      whitelist: _whitelist.default,
      blacklist: _blacklist.default,
      isWhitelisted: _isWhitelisted.default,
      normalizeEmail: _normalizeEmail.default,
      toString,
      isSlug: _isSlug.default,
      isStrongPassword: _isStrongPassword.default,
      isTaxID: _isTaxID.default,
      isDate: _isDate.default,
      isTime: _isTime.default,
      isLicensePlate: _isLicensePlate.default,
      isVAT: _isVAT.default,
      ibanLocales: _isIBAN.locales
    };
    var _default = exports.default = validator3;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});
function isValidEmail(email) {
  if (!email || typeof email !== "string") {
    return false;
  }
  if (email.length > MAX_LENGTHS.email) {
    return false;
  }
  return import_validator.default.isEmail(email, {
    allow_display_name: false,
    require_tld: true,
    allow_ip_domain: false
  });
}
__name(isValidEmail, "isValidEmail");
function validateLength(value, fieldName, maxLength, required = false) {
  if (!value || value.trim().length === 0) {
    if (required) {
      return `${fieldName} is required`;
    }
    return null;
  }
  if (value.length > maxLength) {
    return `${fieldName} must be ${maxLength} characters or less`;
  }
  return null;
}
__name(validateLength, "validateLength");
function validateFields(validations) {
  for (const error2 of validations) {
    if (error2) {
      return error2;
    }
  }
  return null;
}
__name(validateFields, "validateFields");
var import_validator;
var MAX_LENGTHS;
var init_validation = __esm({
  "../output/server/chunks/validation.js"() {
    init_checked_fetch();
    import_validator = __toESM(require_validator(), 1);
    MAX_LENGTHS = {
      name: 100,
      email: 254,
      // RFC 5321 maximum
      description: 5e3,
      notes: 1e3,
      slug: 50
    };
    __name2(isValidEmail, "isValidEmail");
    __name2(validateLength, "validateLength");
    __name2(validateFields, "validateFields");
  }
});
var page_server_ts_exports8 = {};
__export(page_server_ts_exports8, {
  actions: /* @__PURE__ */ __name(() => actions3, "actions"),
  load: /* @__PURE__ */ __name(() => load9, "load")
});
var load9;
var actions3;
var init_page_server_ts8 = __esm({
  "../output/server/entries/pages/dashboard/event-types/_id_/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    init_validation();
    load9 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      const db = event.platform?.env?.DB;
      if (!db) {
        throw error(500, "Database not available");
      }
      const eventTypeId = event.params.id;
      const user = await db.prepare("SELECT google_refresh_token, outlook_refresh_token, settings FROM users WHERE id = ?").bind(userId).first();
      const outlookConfigured = !!(event.platform?.env?.MICROSOFT_CLIENT_ID && event.platform?.env?.MICROSOFT_CLIENT_SECRET);
      let userSettings = {};
      try {
        userSettings = user?.settings ? JSON.parse(user.settings) : {};
      } catch {
        userSettings = {};
      }
      const eventType = await db.prepare(
        `SELECT id, name, slug, duration_minutes as duration, description, is_active, cover_image,
				availability_calendars, invite_calendar
			FROM event_types
			WHERE id = ? AND user_id = ?`
      ).bind(eventTypeId, userId).first();
      if (!eventType) {
        throw error(404, "Event type not found");
      }
      return {
        eventType,
        googleConnected: !!user?.google_refresh_token,
        outlookConnected: !!user?.outlook_refresh_token,
        outlookConfigured,
        defaultAvailabilityCalendars: userSettings.defaultAvailabilityCalendars,
        defaultInviteCalendar: userSettings.defaultInviteCalendar
      };
    }, "load");
    actions3 = {
      default: /* @__PURE__ */ __name2(async (event) => {
        const userId = await getCurrentUser(event);
        if (!userId) {
          throw redirect(302, "/auth/login");
        }
        const db = event.platform?.env?.DB;
        if (!db) {
          return fail(500, { error: "Database not available" });
        }
        const eventTypeId = event.params.id;
        const existing = await db.prepare("SELECT id FROM event_types WHERE id = ? AND user_id = ?").bind(eventTypeId, userId).first();
        if (!existing) {
          return fail(404, { error: "Event type not found" });
        }
        const formData = await event.request.formData();
        const name = formData.get("name");
        const slug = formData.get("slug");
        const duration = formData.get("duration");
        const description = formData.get("description") || "";
        const isActive = formData.get("is_active") === "on";
        const coverImage = formData.get("cover_image") || null;
        const overrideCalendarSettings = formData.get("override_calendar_settings") === "on";
        const availabilityCalendars = overrideCalendarSettings ? formData.get("availability_calendars") || "both" : null;
        const inviteCalendar = overrideCalendarSettings ? formData.get("invite_calendar") || "google" : null;
        if (!name || !slug || !duration) {
          return fail(400, { error: "Missing required fields" });
        }
        const lengthError = validateFields([
          validateLength(name.toString(), "Name", MAX_LENGTHS.name, true),
          validateLength(slug.toString(), "Slug", MAX_LENGTHS.slug, true),
          validateLength(description.toString(), "Description", MAX_LENGTHS.description, false)
        ]);
        if (lengthError) {
          return fail(400, { error: lengthError });
        }
        const slugStr = slug.toString().toLowerCase();
        if (!/^[a-z0-9-]+$/.test(slugStr)) {
          return fail(400, {
            error: "Slug can only contain lowercase letters, numbers, and hyphens"
          });
        }
        try {
          const slugExists = await db.prepare("SELECT id FROM event_types WHERE user_id = ? AND slug = ? AND id != ?").bind(userId, slugStr, eventTypeId).first();
          if (slugExists) {
            return fail(400, { error: "An event type with this slug already exists" });
          }
          await db.prepare(
            `UPDATE event_types
					SET name = ?, slug = ?, duration_minutes = ?, description = ?, is_active = ?, cover_image = ?,
						availability_calendars = ?, invite_calendar = ?
					WHERE id = ? AND user_id = ?`
          ).bind(
            name.toString(),
            slugStr,
            parseInt(duration.toString()),
            description.toString(),
            isActive ? 1 : 0,
            coverImage ? coverImage.toString() : null,
            availabilityCalendars.toString(),
            inviteCalendar.toString(),
            eventTypeId,
            userId
          ).run();
          throw redirect(302, "/dashboard");
        } catch (error2) {
          if (error2?.status === 302) throw error2;
          console.error("Error updating event type:", error2);
          return fail(500, { error: "Failed to update event type" });
        }
      }, "default")
    };
  }
});
function SimpleWysiwyg($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = "", placeholder = "Enter description..." } = $$props;
    $$renderer2.push(`<div class="border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"><div class="flex items-center gap-1 p-2 bg-gray-50 border-b border-gray-300"><button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Bold"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path><path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path></svg></button> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Italic"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg></button> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3v7a6 6 0 0012 0V3"></path><line x1="4" y1="21" x2="20" y2="21"></line></svg></button> <div class="w-px h-5 bg-gray-300 mx-1"></div> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Bullet List"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><circle cx="4" cy="6" r="1" fill="currentColor"></circle><circle cx="4" cy="12" r="1" fill="currentColor"></circle><circle cx="4" cy="18" r="1" fill="currentColor"></circle></svg></button> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Numbered List"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><text x="3" y="7" font-size="6" fill="currentColor" stroke="none">1</text><text x="3" y="13" font-size="6" fill="currentColor" stroke="none">2</text><text x="3" y="19" font-size="6" fill="currentColor" stroke="none">3</text></svg></button></div> <div contenteditable="true" class="min-h-[120px] p-3 outline-none prose prose-sm max-w-none svelte-15chj8b"${attr(
      "data-placeholder",
      // Set initial content only once when editor is mounted
      placeholder
    )}></div></div>`);
    bind_props($$props, { value });
  });
}
__name(SimpleWysiwyg, "SimpleWysiwyg");
var init_SimpleWysiwyg = __esm({
  "../output/server/chunks/SimpleWysiwyg.js"() {
    init_checked_fetch();
    init_index2();
    __name2(SimpleWysiwyg, "SimpleWysiwyg");
  }
});
var page_svelte_exports8 = {};
__export(page_svelte_exports8, {
  default: /* @__PURE__ */ __name(() => _page8, "default")
});
function _page8($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    let name = data.eventType.name;
    let slug = data.eventType.slug;
    let duration = data.eventType.duration;
    let description = data.eventType.description || "";
    let isActive = data.eventType.is_active === 1;
    let coverImage = data.eventType.cover_image || "";
    let saving = false;
    let uploadingCover = false;
    const hasGoogle = data.googleConnected;
    const hasOutlook = data.outlookConnected && data.outlookConfigured;
    const hasCustomSettings = !!(data.eventType.availability_calendars || data.eventType.invite_calendar);
    let overrideCalendarSettings = hasCustomSettings;
    function getGlobalAvailability() {
      if (data.defaultAvailabilityCalendars) return data.defaultAvailabilityCalendars;
      if (hasGoogle && hasOutlook) return "both";
      if (hasOutlook) return "outlook";
      return "google";
    }
    __name(getGlobalAvailability, "getGlobalAvailability");
    __name2(getGlobalAvailability, "getGlobalAvailability");
    function getGlobalInviteCalendar() {
      if (data.defaultInviteCalendar) return data.defaultInviteCalendar;
      if (hasGoogle) return "google";
      if (hasOutlook) return "outlook";
      return "google";
    }
    __name(getGlobalInviteCalendar, "getGlobalInviteCalendar");
    __name2(getGlobalInviteCalendar, "getGlobalInviteCalendar");
    function getDefaultAvailability() {
      if (data.eventType.availability_calendars) return data.eventType.availability_calendars;
      return getGlobalAvailability();
    }
    __name(getDefaultAvailability, "getDefaultAvailability");
    __name2(getDefaultAvailability, "getDefaultAvailability");
    function getDefaultInviteCalendar() {
      if (data.eventType.invite_calendar) return data.eventType.invite_calendar;
      return getGlobalInviteCalendar();
    }
    __name(getDefaultInviteCalendar, "getDefaultInviteCalendar");
    __name2(getDefaultInviteCalendar, "getDefaultInviteCalendar");
    let availabilityCalendars = getDefaultAvailability();
    let inviteCalendar = getDefaultInviteCalendar();
    function getAvailabilityLabel(val) {
      if (val === "both") return "Both calendars";
      if (val === "outlook") return "Outlook Calendar";
      return "Google Calendar";
    }
    __name(getAvailabilityLabel, "getAvailabilityLabel");
    __name2(getAvailabilityLabel, "getAvailabilityLabel");
    function getInviteLabel(val) {
      if (val === "outlook") return "Outlook (Microsoft Teams)";
      return "Google Calendar (Google Meet)";
    }
    __name(getInviteLabel, "getInviteLabel");
    __name2(getInviteLabel, "getInviteLabel");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-600 hover:text-gray-900">\u2190 Back to Dashboard</a> <h1 class="text-2xl font-bold text-gray-900">Edit Event Type</h1></div></div></header> <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
      if (form?.error) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">Error: ${escape_html(form.error)}</div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="bg-white rounded-lg shadow-sm p-6"><form method="POST"><div class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Event Name *</label> <input type="text" id="name" name="name"${attr("value", name)} required placeholder="e.g., 30 Minute Meeting" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label for="slug" class="block text-sm font-medium text-gray-700 mb-2">URL Slug *</label> <input type="text" id="slug" name="slug"${attr("value", slug)} required pattern="[a-z0-9-]+" placeholder="e.g., 30min" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/> <p class="text-xs text-gray-500 mt-1">Only lowercase letters, numbers, and hyphens. This will be part of your booking URL.</p></div> <div><label for="duration" class="block text-sm font-medium text-gray-700 mb-2">Duration (minutes) *</label> `);
      $$renderer3.select(
        {
          id: "duration",
          name: "duration",
          value: duration,
          required: true,
          class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        },
        ($$renderer4) => {
          $$renderer4.option({ value: 15 }, ($$renderer5) => {
            $$renderer5.push(`15 minutes`);
          });
          $$renderer4.option({ value: 30 }, ($$renderer5) => {
            $$renderer5.push(`30 minutes`);
          });
          $$renderer4.option({ value: 45 }, ($$renderer5) => {
            $$renderer5.push(`45 minutes`);
          });
          $$renderer4.option({ value: 60 }, ($$renderer5) => {
            $$renderer5.push(`60 minutes`);
          });
          $$renderer4.option({ value: 90 }, ($$renderer5) => {
            $$renderer5.push(`90 minutes`);
          });
          $$renderer4.option({ value: 120 }, ($$renderer5) => {
            $$renderer5.push(`2 hours`);
          });
        }
      );
      $$renderer3.push(`</div> <div><label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label> `);
      SimpleWysiwyg($$renderer3, {
        placeholder: "Describe what this meeting is for...",
        get value() {
          return description;
        },
        set value($$value) {
          description = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <input type="hidden" name="description"${attr("value", description)}/></div> <div><label class="block text-sm font-medium text-gray-700 mb-2">Cover Image</label> <p class="text-xs text-gray-500 mb-3">This image will be displayed at the top of your booking page (like Calendly)</p> `);
      if (coverImage) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="relative mb-3 p-4 bg-gray-100 rounded-lg"><img${attr("src", coverImage)} alt="Cover preview" class="max-h-20 w-auto object-contain mx-auto"/> <button type="button" class="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <label${attr_class(`flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition ${stringify2(coverImage ? "hidden" : "")}`)}><input type="file" accept="image/*" class="hidden"${attr("disabled", uploadingCover, true)}/> `);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="text-center"><svg class="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p class="text-sm text-gray-500">Click to upload cover image</p> <p class="text-xs text-gray-400">Max 2MB</p></div>`);
      }
      $$renderer3.push(`<!--]--></label> <input type="hidden" name="cover_image"${attr("value", coverImage)}/></div> `);
      if (hasGoogle || hasOutlook) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="border-t border-gray-200 pt-6"><h3 class="text-sm font-medium text-gray-900 mb-4">Calendar Settings</h3> <div class="mb-4 p-3 bg-gray-50 rounded-lg text-sm"><p class="text-gray-600 mb-1"><span class="font-medium">Check availability from:</span> ${escape_html(getAvailabilityLabel(getGlobalAvailability()))}</p> <p class="text-gray-600"><span class="font-medium">Send invite via:</span> ${escape_html(getInviteLabel(getGlobalInviteCalendar()))}</p> <p class="text-xs text-gray-500 mt-2">These are your global settings. <a href="/dashboard" class="text-blue-600 hover:underline">Change in Dashboard</a></p></div> <div class="flex items-center mb-4"><input type="checkbox" id="override_calendar_settings" name="override_calendar_settings"${attr("checked", overrideCalendarSettings, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"/> <label for="override_calendar_settings" class="ml-2 text-sm text-gray-700">Override global calendar settings for this event type</label></div> `);
        if (overrideCalendarSettings) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="mb-4"><label for="availability_calendars" class="block text-sm font-medium text-gray-700 mb-2">Check availability from</label> `);
          $$renderer3.select(
            {
              id: "availability_calendars",
              name: "availability_calendars",
              value: availabilityCalendars,
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            },
            ($$renderer4) => {
              if (hasGoogle && hasOutlook) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "both" }, ($$renderer5) => {
                  $$renderer5.push(`Both Google &amp; Outlook calendars`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
              if (hasGoogle) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "google" }, ($$renderer5) => {
                  $$renderer5.push(`Google Calendar only`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
              if (hasOutlook) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "outlook" }, ($$renderer5) => {
                  $$renderer5.push(`Outlook Calendar only`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
          );
          $$renderer3.push(` <p class="text-xs text-gray-500 mt-1">Which calendars to check when showing available time slots</p></div> <div><label for="invite_calendar" class="block text-sm font-medium text-gray-700 mb-2">Send calendar invite via</label> `);
          $$renderer3.select(
            {
              id: "invite_calendar",
              name: "invite_calendar",
              value: inviteCalendar,
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            },
            ($$renderer4) => {
              if (hasGoogle) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "google" }, ($$renderer5) => {
                  $$renderer5.push(`Google Calendar (with Google Meet)`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
              if (hasOutlook) {
                $$renderer4.push("<!--[-->");
                $$renderer4.option({ value: "outlook" }, ($$renderer5) => {
                  $$renderer5.push(`Outlook Calendar (with Microsoft Teams)`);
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
          );
          $$renderer3.push(` <p class="text-xs text-gray-500 mt-1">The attendee will receive an invite from this calendar with the meeting link</p></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="border-t border-gray-200 pt-6"><p class="text-sm text-gray-500">Connect a calendar in <a href="/dashboard" class="text-blue-600 hover:underline">Dashboard Settings</a> to configure calendar options.</p></div>`);
      }
      $$renderer3.push(`<!--]--> <div class="flex items-center"><input type="checkbox" id="is_active" name="is_active"${attr("checked", isActive, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"/> <label for="is_active" class="ml-2 text-sm text-gray-700">Active (allow people to book this event type)</label></div> <div class="flex gap-4 pt-4"><button type="submit"${attr("disabled", saving, true)} class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50">${escape_html("Save Changes")}</button> <a href="/dashboard" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Cancel</a></div></div></form></div></main></div>`);
    }
    __name($$render_inner, "$$render_inner");
    __name2($$render_inner, "$$render_inner");
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
__name(_page8, "_page8");
var init_page_svelte8 = __esm({
  "../output/server/entries/pages/dashboard/event-types/_id_/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_internal();
    init_exports2();
    init_utils2();
    init_server();
    init_state_svelte();
    init_SimpleWysiwyg();
    init_context();
    __name2(_page8, "_page");
  }
});
var __exports10 = {};
__export(__exports10, {
  component: /* @__PURE__ */ __name(() => component10, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts10, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports10, "imports"),
  index: /* @__PURE__ */ __name(() => index10, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports8, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id8, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets10, "stylesheets")
});
var index10;
var component_cache10;
var component10;
var server_id8;
var imports10;
var stylesheets10;
var fonts10;
var init__10 = __esm({
  "../output/server/nodes/9.js"() {
    init_checked_fetch();
    init_page_server_ts8();
    index10 = 9;
    component10 = /* @__PURE__ */ __name2(async () => component_cache10 ??= (await Promise.resolve().then(() => (init_page_svelte8(), page_svelte_exports8))).default, "component");
    server_id8 = "src/routes/dashboard/event-types/[id]/+page.server.ts";
    imports10 = ["_app/immutable/nodes/9.BVti87ks.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/B4Bv1KaN.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/dm5yZCSw.js", "_app/immutable/chunks/DZq_RO9z.js", "_app/immutable/chunks/vr9HFtWH.js", "_app/immutable/chunks/3dsfsjWY.js"];
    stylesheets10 = ["_app/immutable/assets/SimpleWysiwyg.CkPInVwj.css"];
    fonts10 = [];
  }
});
var page_server_ts_exports9 = {};
__export(page_server_ts_exports9, {
  actions: /* @__PURE__ */ __name(() => actions4, "actions"),
  load: /* @__PURE__ */ __name(() => load10, "load")
});
var load10;
var actions4;
var init_page_server_ts9 = __esm({
  "../output/server/entries/pages/dashboard/event-types/new/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    init_validation();
    load10 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      const db = event.platform?.env?.DB;
      if (!db) {
        return {
          googleConnected: false,
          outlookConnected: false,
          outlookConfigured: false,
          defaultAvailabilityCalendars: void 0,
          defaultInviteCalendar: void 0
        };
      }
      const user = await db.prepare("SELECT google_refresh_token, outlook_refresh_token, settings FROM users WHERE id = ?").bind(userId).first();
      const outlookConfigured = !!(event.platform?.env?.MICROSOFT_CLIENT_ID && event.platform?.env?.MICROSOFT_CLIENT_SECRET);
      let userSettings = {};
      try {
        userSettings = user?.settings ? JSON.parse(user.settings) : {};
      } catch {
        userSettings = {};
      }
      return {
        googleConnected: !!user?.google_refresh_token,
        outlookConnected: !!user?.outlook_refresh_token,
        outlookConfigured,
        defaultAvailabilityCalendars: userSettings.defaultAvailabilityCalendars,
        defaultInviteCalendar: userSettings.defaultInviteCalendar
      };
    }, "load");
    actions4 = {
      default: /* @__PURE__ */ __name2(async (event) => {
        const userId = await getCurrentUser(event);
        if (!userId) {
          throw redirect(302, "/auth/login");
        }
        const db = event.platform?.env?.DB;
        if (!db) {
          return fail(500, { error: "Database not available" });
        }
        const formData = await event.request.formData();
        const name = formData.get("name");
        const slug = formData.get("slug");
        const duration = formData.get("duration");
        const description = formData.get("description") || "";
        const isActive = formData.get("is_active") === "on";
        const coverImage = formData.get("cover_image") || "";
        const overrideCalendarSettings = formData.get("override_calendar_settings") === "on";
        const availabilityCalendars = overrideCalendarSettings ? formData.get("availability_calendars") || "both" : null;
        const inviteCalendar = overrideCalendarSettings ? formData.get("invite_calendar") || "google" : null;
        if (!name || !slug || !duration) {
          return fail(400, { error: "Missing required fields" });
        }
        const lengthError = validateFields([
          validateLength(name.toString(), "Name", MAX_LENGTHS.name, true),
          validateLength(slug.toString(), "Slug", MAX_LENGTHS.slug, true),
          validateLength(description.toString(), "Description", MAX_LENGTHS.description, false)
        ]);
        if (lengthError) {
          return fail(400, { error: lengthError });
        }
        const slugStr = slug.toString().toLowerCase();
        if (!/^[a-z0-9-]+$/.test(slugStr)) {
          return fail(400, { error: "Slug can only contain lowercase letters, numbers, and hyphens" });
        }
        try {
          const existing = await db.prepare("SELECT id FROM event_types WHERE user_id = ? AND slug = ?").bind(userId, slugStr).first();
          if (existing) {
            return fail(400, { error: "An event type with this slug already exists" });
          }
          await db.prepare(
            `INSERT INTO event_types (user_id, name, slug, duration_minutes, description, is_active, cover_image, availability_calendars, invite_calendar, created_at)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`
          ).bind(userId, name, slugStr, parseInt(duration.toString()), description, isActive ? 1 : 0, coverImage, availabilityCalendars, inviteCalendar).run();
          throw redirect(302, "/dashboard");
        } catch (error2) {
          if (error2?.status === 302) throw error2;
          console.error("Error creating event type:", error2);
          return fail(500, { error: "Failed to create event type" });
        }
      }, "default")
    };
  }
});
var page_svelte_exports9 = {};
__export(page_svelte_exports9, {
  default: /* @__PURE__ */ __name(() => _page9, "default")
});
function _page9($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    let name = "";
    let slug = "";
    let duration = 30;
    let description = "";
    let isActive = true;
    let coverImage = "";
    let saving = false;
    let uploadingCover = false;
    const hasGoogle = data.googleConnected;
    const hasOutlook = data.outlookConnected && data.outlookConfigured;
    let overrideCalendarSettings = false;
    function getDefaultAvailability() {
      if (data.defaultAvailabilityCalendars) return data.defaultAvailabilityCalendars;
      if (hasGoogle && hasOutlook) return "both";
      if (hasOutlook) return "outlook";
      return "google";
    }
    __name(getDefaultAvailability, "getDefaultAvailability");
    __name2(getDefaultAvailability, "getDefaultAvailability");
    function getDefaultInviteCalendar() {
      if (data.defaultInviteCalendar) return data.defaultInviteCalendar;
      if (hasGoogle) return "google";
      if (hasOutlook) return "outlook";
      return "google";
    }
    __name(getDefaultInviteCalendar, "getDefaultInviteCalendar");
    __name2(getDefaultInviteCalendar, "getDefaultInviteCalendar");
    getDefaultAvailability();
    getDefaultInviteCalendar();
    function getAvailabilityLabel(val) {
      if (val === "both") return "Both calendars";
      if (val === "outlook") return "Outlook Calendar";
      return "Google Calendar";
    }
    __name(getAvailabilityLabel, "getAvailabilityLabel");
    __name2(getAvailabilityLabel, "getAvailabilityLabel");
    function getInviteLabel(val) {
      if (val === "outlook") return "Outlook (Microsoft Teams)";
      return "Google Calendar (Google Meet)";
    }
    __name(getInviteLabel, "getInviteLabel");
    __name2(getInviteLabel, "getInviteLabel");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-gray-50"><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center gap-4"><a href="/dashboard" class="text-gray-600 hover:text-gray-900">\u2190 Back to Dashboard</a> <h1 class="text-2xl font-bold text-gray-900">Create Event Type</h1></div></div></header> <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
      if (form?.error) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">Error: ${escape_html(form.error)}</div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="bg-white rounded-lg shadow-sm p-6"><form method="POST"><div class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Event Name *</label> <input type="text" id="name" name="name"${attr("value", name)} required placeholder="e.g., 30 Minute Meeting" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label for="slug" class="block text-sm font-medium text-gray-700 mb-2">URL Slug *</label> <input type="text" id="slug" name="slug"${attr("value", slug)} required pattern="[a-z0-9-]+" placeholder="e.g., 30min" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"/> <p class="text-xs text-gray-500 mt-1">Only lowercase letters, numbers, and hyphens. This will be part of your booking URL.</p></div> <div><label for="duration" class="block text-sm font-medium text-gray-700 mb-2">Duration (minutes) *</label> `);
      $$renderer3.select(
        {
          id: "duration",
          name: "duration",
          value: duration,
          required: true,
          class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        },
        ($$renderer4) => {
          $$renderer4.option({ value: 15 }, ($$renderer5) => {
            $$renderer5.push(`15 minutes`);
          });
          $$renderer4.option({ value: 30 }, ($$renderer5) => {
            $$renderer5.push(`30 minutes`);
          });
          $$renderer4.option({ value: 45 }, ($$renderer5) => {
            $$renderer5.push(`45 minutes`);
          });
          $$renderer4.option({ value: 60 }, ($$renderer5) => {
            $$renderer5.push(`60 minutes`);
          });
          $$renderer4.option({ value: 90 }, ($$renderer5) => {
            $$renderer5.push(`90 minutes`);
          });
          $$renderer4.option({ value: 120 }, ($$renderer5) => {
            $$renderer5.push(`2 hours`);
          });
        }
      );
      $$renderer3.push(`</div> <div><label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label> `);
      SimpleWysiwyg($$renderer3, {
        placeholder: "Describe what this meeting is for...",
        get value() {
          return description;
        },
        set value($$value) {
          description = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <input type="hidden" name="description"${attr("value", description)}/></div> <div><label class="block text-sm font-medium text-gray-700 mb-2">Cover Image</label> <p class="text-xs text-gray-500 mb-3">This image will be displayed at the top of your booking page</p> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <label${attr_class(`flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition ${stringify2("")}`)}><input type="file" accept="image/*" class="hidden"${attr("disabled", uploadingCover, true)}/> `);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="text-center"><svg class="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p class="text-sm text-gray-500">Click to upload cover image</p> <p class="text-xs text-gray-400">Max 2MB</p></div>`);
      }
      $$renderer3.push(`<!--]--></label> <input type="hidden" name="cover_image"${attr("value", coverImage)}/></div> `);
      if (hasGoogle || hasOutlook) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="border-t border-gray-200 pt-6"><h3 class="text-sm font-medium text-gray-900 mb-4">Calendar Settings</h3> <div class="mb-4 p-3 bg-gray-50 rounded-lg text-sm"><p class="text-gray-600 mb-1"><span class="font-medium">Check availability from:</span> ${escape_html(getAvailabilityLabel(getDefaultAvailability()))}</p> <p class="text-gray-600"><span class="font-medium">Send invite via:</span> ${escape_html(getInviteLabel(getDefaultInviteCalendar()))}</p> <p class="text-xs text-gray-500 mt-2">These are your global settings. <a href="/dashboard" class="text-blue-600 hover:underline">Change in Dashboard</a></p></div> <div class="flex items-center mb-4"><input type="checkbox" id="override_calendar_settings" name="override_calendar_settings"${attr("checked", overrideCalendarSettings, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"/> <label for="override_calendar_settings" class="ml-2 text-sm text-gray-700">Override global calendar settings for this event type</label></div> `);
        {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="border-t border-gray-200 pt-6"><p class="text-sm text-gray-500">Connect a calendar in <a href="/dashboard" class="text-blue-600 hover:underline">Dashboard Settings</a> to configure calendar options.</p></div>`);
      }
      $$renderer3.push(`<!--]--> <div class="flex items-center"><input type="checkbox" id="is_active" name="is_active"${attr("checked", isActive, true)} class="h-4 w-4 text-blue-600 rounded border-gray-300"/> <label for="is_active" class="ml-2 text-sm text-gray-700">Active (allow people to book this event type)</label></div> <div class="flex gap-4 pt-4"><button type="submit"${attr("disabled", saving, true)} class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50">${escape_html("Create Event Type")}</button> <a href="/dashboard" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Cancel</a></div></div></form></div></main></div>`);
    }
    __name($$render_inner, "$$render_inner");
    __name2($$render_inner, "$$render_inner");
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
__name(_page9, "_page9");
var init_page_svelte9 = __esm({
  "../output/server/entries/pages/dashboard/event-types/new/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_internal();
    init_exports2();
    init_utils2();
    init_server();
    init_state_svelte();
    init_SimpleWysiwyg();
    init_context();
    __name2(_page9, "_page");
  }
});
var __exports11 = {};
__export(__exports11, {
  component: /* @__PURE__ */ __name(() => component11, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts11, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports11, "imports"),
  index: /* @__PURE__ */ __name(() => index11, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports9, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id9, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets11, "stylesheets")
});
var index11;
var component_cache11;
var component11;
var server_id9;
var imports11;
var stylesheets11;
var fonts11;
var init__11 = __esm({
  "../output/server/nodes/10.js"() {
    init_checked_fetch();
    init_page_server_ts9();
    index11 = 10;
    component11 = /* @__PURE__ */ __name2(async () => component_cache11 ??= (await Promise.resolve().then(() => (init_page_svelte9(), page_svelte_exports9))).default, "component");
    server_id9 = "src/routes/dashboard/event-types/new/+page.server.ts";
    imports11 = ["_app/immutable/nodes/10.DhudEfs1.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/B4Bv1KaN.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/dm5yZCSw.js", "_app/immutable/chunks/DZq_RO9z.js", "_app/immutable/chunks/vr9HFtWH.js", "_app/immutable/chunks/3dsfsjWY.js"];
    stylesheets11 = ["_app/immutable/assets/SimpleWysiwyg.CkPInVwj.css"];
    fonts11 = [];
  }
});
var page_server_ts_exports10 = {};
__export(page_server_ts_exports10, {
  load: /* @__PURE__ */ __name(() => load11, "load")
});
var load11;
var init_page_server_ts10 = __esm({
  "../output/server/entries/pages/reschedule/_id_/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    load11 = /* @__PURE__ */ __name2(async ({ params, platform }) => {
      const db = platform?.env?.DB;
      const env2 = platform?.env;
      if (!db || !env2) {
        throw error(500, "Database not available");
      }
      const bookingId = params.id;
      const booking = await db.prepare(
        `SELECT b.id, b.start_time, b.end_time, b.attendee_name, b.attendee_email, b.attendee_notes,
			b.status, e.id as event_type_id, e.name as event_name, e.slug as event_slug,
			e.duration_minutes as duration, e.description, e.cover_image, e.invite_calendar,
			u.name as host_name, u.profile_image, u.brand_color, u.settings
			FROM bookings b
			JOIN event_types e ON b.event_type_id = e.id
			JOIN users u ON b.user_id = u.id
			WHERE b.id = ?`
      ).bind(bookingId).first();
      if (!booking) {
        throw error(404, "Booking not found");
      }
      if (booking.status === "canceled") {
        throw error(400, "Cannot reschedule a canceled booking");
      }
      let timeFormat = "12h";
      try {
        const settings = booking.settings ? JSON.parse(booking.settings) : {};
        timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
      } catch {
      }
      return {
        booking: {
          id: booking.id,
          startTime: booking.start_time,
          endTime: booking.end_time,
          attendeeName: booking.attendee_name,
          attendeeEmail: booking.attendee_email,
          attendeeNotes: booking.attendee_notes,
          eventName: booking.event_name,
          eventSlug: booking.event_slug,
          duration: booking.duration,
          description: booking.description,
          coverImage: booking.cover_image,
          inviteCalendar: booking.invite_calendar || "google",
          hostName: booking.host_name,
          profileImage: booking.profile_image,
          brandColor: booking.brand_color || "#3b82f6"
        },
        timeFormat,
        appUrl: env2.APP_URL || ""
      };
    }, "load");
  }
});
var page_svelte_exports10 = {};
__export(page_svelte_exports10, {
  default: /* @__PURE__ */ __name(() => _page10, "default")
});
function _page10($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const brandColor = data.booking.brandColor;
    const colors = createBrandColors(brandColor);
    let selectedDate = null;
    let selectedSlot = null;
    let availableSlots = [];
    let loading = false;
    let rescheduleStatus = "idle";
    let availableDates = /* @__PURE__ */ new Set();
    let selectedTimezone = detectTimezone();
    let currentMonth = /* @__PURE__ */ new Date();
    const use12Hour = data.timeFormat !== "24h";
    function formatTime(isoStr) {
      const date = new Date(isoStr);
      return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: use12Hour,
        timeZone: selectedTimezone
      }).format(date);
    }
    __name(formatTime, "formatTime");
    __name2(formatTime, "formatTime");
    function formatOriginalDateTime(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: use12Hour,
        timeZone: selectedTimezone
      }).format(date);
    }
    __name(formatOriginalDateTime, "formatOriginalDateTime");
    __name2(formatOriginalDateTime, "formatOriginalDateTime");
    function prevMonth() {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      fetchMonthAvailability();
    }
    __name(prevMonth, "prevMonth");
    __name2(prevMonth, "prevMonth");
    function nextMonth() {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      fetchMonthAvailability();
    }
    __name(nextMonth, "nextMonth");
    __name2(nextMonth, "nextMonth");
    async function fetchMonthAvailability() {
      try {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth() + 1;
        const monthStr = `${year}-${String(month).padStart(2, "0")}`;
        const response = await fetch(`/api/availability/month?event=${data.booking.eventSlug}&month=${monthStr}`);
        if (!response.ok) throw new Error("Failed to fetch availability");
        const result = await response.json();
        availableDates = new Set(result.availableDates || []);
      } catch (error2) {
        console.error("Error fetching month availability:", error2);
        availableDates = /* @__PURE__ */ new Set();
      } finally {
      }
    }
    __name(fetchMonthAvailability, "fetchMonthAvailability");
    __name2(fetchMonthAvailability, "fetchMonthAvailability");
    async function handleDateSelect(dateStr) {
      selectedDate = dateStr;
      selectedSlot = null;
      loading = true;
      try {
        const response = await fetch(`/api/availability?event=${data.booking.eventSlug}&date=${dateStr}`);
        if (!response.ok) throw new Error("Failed to fetch availability");
        const result = await response.json();
        availableSlots = result.slots || [];
      } catch (error2) {
        console.error("Error fetching availability:", error2);
        availableSlots = [];
      } finally {
        loading = false;
      }
    }
    __name(handleDateSelect, "handleDateSelect");
    __name2(handleDateSelect, "handleDateSelect");
    head("sewpl5", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Reschedule Meeting</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"${attr_style(`--brand-color: ${stringify2(brandColor)}; --brand-light: ${stringify2(colors.light)}; --brand-lighter: ${stringify2(colors.lighter)}; --brand-dark: ${stringify2(colors.dark)}; --brand-rgb: ${stringify2(colors.rgb.r)}, ${stringify2(colors.rgb.g)}, ${stringify2(colors.rgb.b)};`)}>`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg overflow-hidden flex transition-all duration-300 ease-in-out"${attr_style(`width: ${stringify2(selectedDate ? "920px" : "650px")}`)}><div class="w-72 border-r border-gray-200 flex flex-col flex-shrink-0">`);
      if (data.booking.coverImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="p-6 pb-4 flex justify-center"><img${attr("src", data.booking.coverImage)} alt="" class="max-h-16 w-auto object-contain"/></div> <div class="border-b border-gray-200 mx-6"></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex-1 p-6"><div class="mb-6">`);
      if (data.booking.profileImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", data.booking.profileImage)}${attr("alt", data.booking.hostName)} class="w-12 h-12 rounded-full object-cover mb-3"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-3" style="background-color: var(--brand-color)">${escape_html(data.booking.hostName?.charAt(0) || "H")}</div>`);
      }
      $$renderer2.push(`<!--]--> <p class="text-sm font-medium text-gray-600 mb-1">${escape_html(data.booking.hostName)}</p> <h1 class="text-2xl font-bold text-gray-900">${escape_html(data.booking.eventName)}</h1></div> <div class="space-y-4 text-sm text-gray-600"><div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(data.booking.duration)} min</span></div> <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> <span>${escape_html(data.booking.inviteCalendar === "outlook" ? "Microsoft Teams" : "Google Meet")}</span></div></div> <div class="mt-6 pt-6 border-t border-gray-200"><p class="text-xs font-semibold text-gray-500 uppercase mb-2">Current booking</p> <div class="bg-red-50 rounded-lg p-3 text-sm"><p class="font-medium text-red-900">${escape_html(formatOriginalDateTime(data.booking.startTime))}</p> <p class="text-red-700">${escape_html(data.booking.attendeeName)}</p> <p class="text-red-600 text-xs">${escape_html(data.booking.attendeeEmail)}</p></div></div> `);
      if (selectedSlot) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mt-4"><p class="text-xs font-semibold text-gray-500 uppercase mb-2">New time</p> <div class="bg-green-50 rounded-lg p-3 text-sm"><p class="font-medium text-green-900">${escape_html(formatTime(selectedSlot.start))} - ${escape_html(formatTime(selectedSlot.end))}</p> <p class="text-green-700">${escape_html(selectedDate ? formatSelectedDate(selectedDate) : "")}</p></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="flex-1 p-6">`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex items-stretch"><div class="w-80"><h2 class="text-xl font-semibold text-gray-900 mb-6">Select a New Date &amp; Time</h2> `);
      BookingCalendar($$renderer2, {
        currentMonth,
        selectedDate,
        availableDates,
        brandColor,
        brandLighter: colors.lighter,
        brandDark: colors.dark,
        onDateSelect: handleDateSelect,
        onPrevMonth: prevMonth,
        onNextMonth: nextMonth
      });
      $$renderer2.push(`<!----> <div class="mt-6 relative"><p class="text-sm font-semibold text-gray-900 mb-2">Time zone</p> <button type="button" class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(selectedTimezone)} (${escape_html(getCurrentTime(selectedTimezone, use12Hour))})</span> <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div> `);
      if (selectedDate) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="w-52 ml-6 border-l border-gray-200 pl-6 flex flex-col" style="max-height: 400px;"><h3 class="text-sm font-medium text-gray-500 mb-4 flex-shrink-0">${escape_html(formatSelectedDate(selectedDate).split(",")[0])}</h3> `);
        if (loading) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex items-center justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent" style="border-color: var(--brand-color); border-top-color: transparent"></div></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (availableSlots.length === 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="text-sm text-gray-500 py-4">No available times</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="space-y-2 overflow-y-auto flex-1 pr-2 pb-2 scrollbar-thin"><!--[-->`);
            const each_array = ensure_array_like(availableSlots);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let slot2 = each_array[$$index];
              if (selectedSlot === slot2) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<button type="button" class="w-full py-2.5 px-3 border-2 border-gray-900 bg-gray-900 text-white rounded-lg text-sm font-semibold">${escape_html(formatTime(slot2.start))}</button>`);
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(`<button type="button" class="w-full py-2.5 px-3 border-2 rounded-lg text-sm font-semibold transition" style="border-color: var(--brand-color); color: var(--brand-color)">${escape_html(formatTime(slot2.start))}</button>`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]--></div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (selectedSlot) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mt-6 pt-6 border-t border-gray-200"><button${attr("disabled", rescheduleStatus === "submitting", true)} class="w-full py-3 px-6 text-white rounded-full font-semibold transition disabled:opacity-50" style="background-color: var(--brand-color)">${escape_html("Confirm Reschedule")}</button></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="mt-4 text-center"><a${attr("href", `/cancel/${stringify2(data.booking.id)}`)} class="text-sm text-gray-500 hover:text-red-600 transition">Or cancel this meeting instead</a></div></div></div> `);
      Footer($$renderer2, { class: "mt-6" });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
__name(_page10, "_page10");
var init_page_svelte10 = __esm({
  "../output/server/entries/pages/reschedule/_id_/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_BookingCalendar();
    init_Footer();
    init_dateFormatters();
    init_context();
    __name2(_page10, "_page");
  }
});
var __exports12 = {};
__export(__exports12, {
  component: /* @__PURE__ */ __name(() => component12, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts12, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports12, "imports"),
  index: /* @__PURE__ */ __name(() => index12, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports10, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id10, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets12, "stylesheets")
});
var index12;
var component_cache12;
var component12;
var server_id10;
var imports12;
var stylesheets12;
var fonts12;
var init__12 = __esm({
  "../output/server/nodes/11.js"() {
    init_checked_fetch();
    init_page_server_ts10();
    index12 = 11;
    component12 = /* @__PURE__ */ __name2(async () => component_cache12 ??= (await Promise.resolve().then(() => (init_page_svelte10(), page_svelte_exports10))).default, "component");
    server_id10 = "src/routes/reschedule/[id]/+page.server.ts";
    imports12 = ["_app/immutable/nodes/11.CubpXAdL.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/DKg4GSHA.js", "_app/immutable/chunks/iqOSawfn.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/3dsfsjWY.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/-WyYYBJa.js", "_app/immutable/chunks/C1Rppsd0.js", "_app/immutable/chunks/vr9HFtWH.js", "_app/immutable/chunks/BFozC6y8.js", "_app/immutable/chunks/BjWePiXU.js"];
    stylesheets12 = [];
    fonts12 = [];
  }
});
var page_server_ts_exports11 = {};
__export(page_server_ts_exports11, {
  actions: /* @__PURE__ */ __name(() => actions5, "actions"),
  load: /* @__PURE__ */ __name(() => load12, "load")
});
var load12;
var actions5;
var init_page_server_ts11 = __esm({
  "../output/server/entries/pages/reschedule-response/_token_/_page.server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_google_calendar();
    init_index3();
    load12 = /* @__PURE__ */ __name2(async ({ params, url, platform }) => {
      const db = platform?.env?.DB;
      if (!db) {
        throw error(500, "Database not available");
      }
      const token = params.token;
      const action = url.searchParams.get("action");
      const proposal = await db.prepare(
        `SELECT p.id, p.booking_id, p.proposed_start_time, p.proposed_end_time, p.message, p.status, p.proposed_by,
			b.attendee_name, b.attendee_email, b.start_time as original_start_time, b.end_time as original_end_time,
			b.google_event_id, b.attendee_notes,
			e.name as event_name, e.slug as event_slug, e.duration_minutes,
			u.id as user_id, u.name as host_name, u.email as host_email, u.brand_color, u.settings
			FROM reschedule_proposals p
			JOIN bookings b ON p.booking_id = b.id
			JOIN event_types e ON b.event_type_id = e.id
			JOIN users u ON b.user_id = u.id
			WHERE p.response_token = ?`
      ).bind(token).first();
      if (!proposal) {
        throw error(404, "Reschedule proposal not found or has expired");
      }
      if (proposal.status !== "pending") {
        return {
          proposal,
          alreadyResponded: true,
          action
        };
      }
      return {
        proposal,
        alreadyResponded: false,
        action
      };
    }, "load");
    actions5 = {
      accept: /* @__PURE__ */ __name2(async ({ params, platform }) => {
        const db = platform?.env?.DB;
        const env2 = platform?.env;
        if (!db || !env2) {
          return fail(500, { error: "Database not available" });
        }
        const token = params.token;
        try {
          const proposal = await db.prepare(
            `SELECT p.id, p.booking_id, p.proposed_start_time, p.proposed_end_time, p.status,
					b.attendee_name, b.attendee_email, b.google_event_id, b.attendee_notes,
					b.start_time as original_start_time, b.end_time as original_end_time,
					e.id as event_type_id, e.name as event_name, e.description as event_description, e.duration_minutes,
					u.id as user_id, u.name as host_name, u.email as host_email, u.contact_email, u.brand_color, u.settings
					FROM reschedule_proposals p
					JOIN bookings b ON p.booking_id = b.id
					JOIN event_types e ON b.event_type_id = e.id
					JOIN users u ON b.user_id = u.id
					WHERE p.response_token = ?`
          ).bind(token).first();
          if (!proposal || proposal.status !== "pending") {
            return fail(400, { error: "Proposal already responded to or expired" });
          }
          if (proposal.google_event_id) {
            try {
              const accessToken = await getValidAccessToken(
                db,
                proposal.user_id,
                env2.GOOGLE_CLIENT_ID,
                env2.GOOGLE_CLIENT_SECRET
              );
              await cancelCalendarEvent(accessToken, proposal.google_event_id);
            } catch (err) {
              console.error("Failed to cancel old calendar event:", err);
            }
          }
          let newMeetingUrl = null;
          let newGoogleEventId = null;
          try {
            const accessToken = await getValidAccessToken(
              db,
              proposal.user_id,
              env2.GOOGLE_CLIENT_ID,
              env2.GOOGLE_CLIENT_SECRET
            );
            const calendarEvent = await createCalendarEvent(accessToken, {
              summary: `${proposal.event_name} with ${proposal.attendee_name}`,
              description: proposal.attendee_notes || "",
              startTime: proposal.proposed_start_time,
              endTime: proposal.proposed_end_time,
              attendeeEmail: proposal.attendee_email,
              hostEmail: proposal.host_email
            });
            newGoogleEventId = calendarEvent.id;
            newMeetingUrl = calendarEvent.hangoutLink || null;
          } catch (err) {
            console.error("Failed to create new calendar event:", err);
          }
          await db.prepare(
            `UPDATE bookings
					SET start_time = ?, end_time = ?, status = 'confirmed', google_event_id = ?, meeting_url = ?
					WHERE id = ?`
          ).bind(
            proposal.proposed_start_time,
            proposal.proposed_end_time,
            newGoogleEventId,
            newMeetingUrl,
            proposal.booking_id
          ).run();
          await db.prepare(`UPDATE reschedule_proposals SET status = 'accepted', responded_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(proposal.id).run();
          if (env2.EMAILIT_API_KEY) {
            try {
              let timeFormat = "12h";
              try {
                const settings = proposal.settings ? JSON.parse(proposal.settings) : {};
                timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
              } catch {
              }
              await sendAdminRescheduleNotification(
                {
                  attendeeName: proposal.attendee_name,
                  attendeeEmail: proposal.attendee_email,
                  eventName: proposal.event_name,
                  eventDescription: proposal.event_description || "",
                  startTime: new Date(proposal.proposed_start_time),
                  endTime: new Date(proposal.proposed_end_time),
                  oldStartTime: new Date(proposal.original_start_time),
                  oldEndTime: new Date(proposal.original_end_time),
                  meetingUrl: newMeetingUrl,
                  bookingId: proposal.booking_id,
                  hostName: proposal.host_name,
                  hostEmail: proposal.host_email,
                  appUrl: env2.APP_URL || "",
                  timeFormat,
                  brandColor: proposal.brand_color || "#3b82f6",
                  attendeeNotes: proposal.attendee_notes
                },
                proposal.host_email,
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || proposal.host_email
                }
              );
            } catch (emailErr) {
              console.error("Failed to send admin reschedule notification:", emailErr);
            }
          }
          throw redirect(303, `/reschedule-response/${token}?success=accepted`);
        } catch (err) {
          if (err?.status === 303) throw err;
          console.error("Accept proposal error:", err);
          return fail(500, { error: "Failed to accept proposal" });
        }
      }, "accept"),
      decline: /* @__PURE__ */ __name2(async ({ params, platform }) => {
        const db = platform?.env?.DB;
        const env2 = platform?.env;
        if (!db || !env2) {
          return fail(500, { error: "Database not available" });
        }
        const token = params.token;
        try {
          const proposal = await db.prepare(
            `SELECT p.id, p.booking_id, p.status, p.proposed_start_time, p.proposed_end_time,
					b.google_event_id, b.attendee_name, b.attendee_email, b.attendee_notes,
					b.start_time as original_start_time, b.end_time as original_end_time,
					e.name as event_name, e.description as event_description,
					u.id as user_id, u.name as host_name, u.email as host_email, u.brand_color, u.settings
					FROM reschedule_proposals p
					JOIN bookings b ON p.booking_id = b.id
					JOIN event_types e ON b.event_type_id = e.id
					JOIN users u ON b.user_id = u.id
					WHERE p.response_token = ?`
          ).bind(token).first();
          if (!proposal || proposal.status !== "pending") {
            return fail(400, { error: "Proposal already responded to or expired" });
          }
          if (proposal.google_event_id) {
            try {
              const accessToken = await getValidAccessToken(
                db,
                proposal.user_id,
                env2.GOOGLE_CLIENT_ID,
                env2.GOOGLE_CLIENT_SECRET
              );
              await cancelCalendarEvent(accessToken, proposal.google_event_id);
            } catch (err) {
              console.error("Failed to cancel calendar event:", err);
            }
          }
          await db.prepare(`UPDATE bookings SET status = 'canceled', canceled_at = CURRENT_TIMESTAMP, canceled_by = 'attendee' WHERE id = ?`).bind(proposal.booking_id).run();
          await db.prepare(`UPDATE reschedule_proposals SET status = 'declined', responded_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(proposal.id).run();
          if (env2.EMAILIT_API_KEY) {
            try {
              let timeFormat = "12h";
              try {
                const settings = proposal.settings ? JSON.parse(proposal.settings) : {};
                timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
              } catch {
              }
              await sendAdminCancellationNotification(
                {
                  attendeeName: proposal.attendee_name,
                  attendeeEmail: proposal.attendee_email,
                  eventName: proposal.event_name,
                  eventDescription: proposal.event_description || "",
                  startTime: new Date(proposal.original_start_time),
                  endTime: new Date(proposal.original_end_time),
                  meetingUrl: null,
                  bookingId: proposal.booking_id,
                  hostName: proposal.host_name,
                  hostEmail: proposal.host_email,
                  appUrl: env2.APP_URL || "",
                  timeFormat,
                  brandColor: proposal.brand_color || "#3b82f6",
                  attendeeNotes: proposal.attendee_notes,
                  customMessage: "Attendee declined the reschedule proposal and cancelled the meeting."
                },
                proposal.host_email,
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || proposal.host_email
                }
              );
            } catch (emailErr) {
              console.error("Failed to send admin cancellation notification:", emailErr);
            }
          }
          throw redirect(303, `/reschedule-response/${token}?success=declined`);
        } catch (err) {
          if (err?.status === 303) throw err;
          console.error("Decline proposal error:", err);
          return fail(500, { error: "Failed to decline proposal" });
        }
      }, "decline")
    };
  }
});
var page_svelte_exports11 = {};
__export(page_svelte_exports11, {
  default: /* @__PURE__ */ __name(() => _page11, "default")
});
function _page11($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, form } = $$props;
    const success = store_get($$store_subs ??= {}, "$page", page2).url.searchParams.get("success");
    const action = data.action;
    const brandColor = data.proposal?.brand_color || "#3b82f6";
    function formatDateTime(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }).format(date);
    }
    __name(formatDateTime, "formatDateTime");
    __name2(formatDateTime, "formatDateTime");
    function formatDate(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(date);
    }
    __name(formatDate, "formatDate");
    __name2(formatDate, "formatDate");
    function formatTime(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).format(date);
    }
    __name(formatTime, "formatTime");
    __name2(formatTime, "formatTime");
    head("syf5od", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Reschedule Response</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">`);
    if (success === "accepted") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center"><div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h1 class="text-2xl font-semibold text-gray-900 mb-2">Meeting Rescheduled!</h1> <p class="text-gray-600 mb-6">Your meeting has been confirmed for the new time. A calendar update has been sent to your email.</p> <div class="bg-gray-50 rounded-lg p-4 text-left"><p class="font-semibold text-gray-900 mb-2">${escape_html(data.proposal?.event_name)}</p> <p class="text-sm text-gray-600">${escape_html(formatDateTime(data.proposal?.proposed_start_time || ""))}</p></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (success === "declined") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center"><div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div> <h1 class="text-2xl font-semibold text-gray-900 mb-2">Meeting Cancelled</h1> <p class="text-gray-600 mb-6">The meeting has been cancelled. The host has been notified.</p> <a${attr("href", `/${stringify2(data.proposal?.event_slug)}`)} class="inline-block px-6 py-3 text-white rounded-lg transition"${attr_style(`background-color: ${stringify2(brandColor)}`)}>Book a New Time</a></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (data.alreadyResponded) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center"><div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div> <h1 class="text-2xl font-semibold text-gray-900 mb-2">Already Responded</h1> <p class="text-gray-600">This reschedule request has already been ${escape_html(data.proposal?.status)}.</p></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (action === "counter") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center"><h1 class="text-2xl font-semibold text-gray-900 mb-4">Propose Different Time</h1> <p class="text-gray-600 mb-6">You'll be redirected to choose a different time for your meeting.</p> <a${attr("href", `/reschedule/${stringify2(data.proposal?.booking_id)}`)} class="inline-block px-6 py-3 text-white rounded-lg transition"${attr_style(`background-color: ${stringify2(brandColor)}`)}>Choose Different Time</a></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full"><h1 class="text-2xl font-semibold text-gray-900 mb-2 text-center">Reschedule Request</h1> <p class="text-gray-600 mb-6 text-center"><strong>${escape_html(data.proposal?.host_name)}</strong> would like to reschedule your meeting.</p> `);
            if (form?.error) {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">${escape_html(form.error)}</div>`);
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]--> `);
            if (data.proposal?.message) {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6"><p class="text-sm text-amber-800">${escape_html(data.proposal.message)}</p></div>`);
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]--> <div class="space-y-4 mb-6"><div class="bg-red-50 border border-red-200 rounded-lg p-4"><div class="text-xs font-semibold text-red-700 uppercase mb-2">Original Time</div> <div class="text-gray-900 line-through"><p class="font-medium">${escape_html(formatDate(data.proposal?.original_start_time || ""))}</p> <p class="text-sm">${escape_html(formatTime(data.proposal?.original_start_time || ""))} - ${escape_html(formatTime(data.proposal?.original_end_time || ""))}</p></div></div> <div class="bg-green-50 border border-green-200 rounded-lg p-4"><div class="text-xs font-semibold text-green-700 uppercase mb-2">Proposed New Time</div> <div class="text-gray-900"><p class="font-medium">${escape_html(formatDate(data.proposal?.proposed_start_time || ""))}</p> <p class="text-sm">${escape_html(formatTime(data.proposal?.proposed_start_time || ""))} - ${escape_html(formatTime(data.proposal?.proposed_end_time || ""))}</p></div></div></div> <div class="bg-gray-50 rounded-lg p-4 mb-6"><p class="text-sm"><span class="text-gray-600">Meeting:</span> <span class="font-medium">${escape_html(data.proposal?.event_name)}</span></p> <p class="text-sm"><span class="text-gray-600">With:</span> <span class="font-medium">${escape_html(data.proposal?.host_name)}</span></p></div> <div class="space-y-3"><form method="POST" action="?/accept"><button type="submit" class="w-full px-6 py-3 text-white rounded-lg font-medium transition bg-green-600 hover:bg-green-700">Accept New Time</button></form> <form method="POST" action="?/decline"><button type="submit" class="w-full px-6 py-3 text-white rounded-lg font-medium transition bg-red-600 hover:bg-red-700">Decline &amp; Cancel Meeting</button></form> <a${attr("href", `/reschedule/${stringify2(data.proposal?.booking_id)}`)} class="block w-full px-6 py-3 text-center rounded-lg font-medium transition border-2 hover:bg-gray-50"${attr_style(`border-color: ${stringify2(brandColor)}; color: ${stringify2(brandColor)}`)}>Propose Different Time</a></div></div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> `);
    Footer($$renderer2, { class: "mt-6" });
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
__name(_page11, "_page11");
var init_page_svelte11 = __esm({
  "../output/server/entries/pages/reschedule-response/_token_/_page.svelte.js"() {
    init_checked_fetch();
    init_index2();
    init_internal();
    init_exports2();
    init_utils2();
    init_server();
    init_state_svelte();
    init_stores();
    init_Footer();
    init_context();
    __name2(_page11, "_page");
  }
});
var __exports13 = {};
__export(__exports13, {
  component: /* @__PURE__ */ __name(() => component13, "component"),
  fonts: /* @__PURE__ */ __name(() => fonts13, "fonts"),
  imports: /* @__PURE__ */ __name(() => imports13, "imports"),
  index: /* @__PURE__ */ __name(() => index13, "index"),
  server: /* @__PURE__ */ __name(() => page_server_ts_exports11, "server"),
  server_id: /* @__PURE__ */ __name(() => server_id11, "server_id"),
  stylesheets: /* @__PURE__ */ __name(() => stylesheets13, "stylesheets")
});
var index13;
var component_cache13;
var component13;
var server_id11;
var imports13;
var stylesheets13;
var fonts13;
var init__13 = __esm({
  "../output/server/nodes/12.js"() {
    init_checked_fetch();
    init_page_server_ts11();
    index13 = 12;
    component13 = /* @__PURE__ */ __name2(async () => component_cache13 ??= (await Promise.resolve().then(() => (init_page_svelte11(), page_svelte_exports11))).default, "component");
    server_id11 = "src/routes/reschedule-response/[token]/+page.server.ts";
    imports13 = ["_app/immutable/nodes/12.fm8yV1pT.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/iqOSawfn.js", "_app/immutable/chunks/R6z4UYL7.js", "_app/immutable/chunks/pK6643e_.js", "_app/immutable/chunks/3dsfsjWY.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/chunks/B4Bv1KaN.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/BI5nyQHI.js", "_app/immutable/chunks/BXbUNSRB.js", "_app/immutable/chunks/CSjB5q8c.js"];
    stylesheets13 = [];
    fonts13 = [];
  }
});
function getOutlookAuthUrl(clientId, redirectUri, state2) {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "offline_access Calendars.ReadWrite User.Read",
    state: state2,
    response_mode: "query"
  });
  return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`;
}
__name(getOutlookAuthUrl, "getOutlookAuthUrl");
async function exchangeOutlookCode(code, clientId, clientSecret, redirectUri) {
  const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    }).toString()
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to exchange Outlook code: ${error2}`);
  }
  return response.json();
}
__name(exchangeOutlookCode, "exchangeOutlookCode");
async function refreshOutlookAccessToken(refreshToken, clientId, clientSecret) {
  const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    }).toString()
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to refresh Outlook token: ${error2}`);
  }
  return response.json();
}
__name(refreshOutlookAccessToken, "refreshOutlookAccessToken");
async function getOutlookBusyTimes(accessToken, startDate, endDate) {
  const startISO = startDate.toISOString();
  const endISO = endDate.toISOString();
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${encodeURIComponent(startISO)}&endDateTime=${encodeURIComponent(endISO)}&$select=start,end,showAs`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    }
  );
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to fetch Outlook busy times: ${error2}`);
  }
  const data = await response.json();
  return data.value.filter((event) => event.showAs === "busy" || event.showAs === "tentative").map((event) => ({
    // Microsoft returns times without Z suffix, they're in the specified timezone
    // Convert to ISO format
    start: (/* @__PURE__ */ new Date(event.start.dateTime + "Z")).toISOString(),
    end: (/* @__PURE__ */ new Date(event.end.dateTime + "Z")).toISOString()
  }));
}
__name(getOutlookBusyTimes, "getOutlookBusyTimes");
async function createOutlookCalendarEvent(accessToken, event) {
  const body2 = {
    subject: event.summary,
    body: {
      contentType: "text",
      content: event.description || ""
    },
    start: {
      dateTime: event.startTime.replace("Z", ""),
      timeZone: "UTC"
    },
    end: {
      dateTime: event.endTime.replace("Z", ""),
      timeZone: "UTC"
    },
    attendees: [
      {
        emailAddress: {
          address: event.attendeeEmail
        },
        type: "required"
      }
    ]
  };
  {
    body2.isOnlineMeeting = true;
  }
  let response = await fetch("https://graph.microsoft.com/v1.0/me/events", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body2)
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to create Outlook calendar event: ${error2}`);
  }
  return response.json();
}
__name(createOutlookCalendarEvent, "createOutlookCalendarEvent");
async function cancelOutlookCalendarEvent(accessToken, eventId) {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/me/events/${eventId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  if (!response.ok && response.status !== 404) {
    const error2 = await response.text();
    throw new Error(`Failed to cancel Outlook calendar event: ${error2}`);
  }
}
__name(cancelOutlookCalendarEvent, "cancelOutlookCalendarEvent");
async function getValidOutlookAccessToken(db, userId, clientId, clientSecret) {
  const user = await db.prepare("SELECT outlook_refresh_token FROM users WHERE id = ?").bind(userId).first();
  if (!user?.outlook_refresh_token) {
    throw new Error("User not connected to Outlook Calendar");
  }
  const tokens = await refreshOutlookAccessToken(
    user.outlook_refresh_token,
    clientId,
    clientSecret
  );
  if (tokens.refresh_token && tokens.refresh_token !== user.outlook_refresh_token) {
    await db.prepare("UPDATE users SET outlook_refresh_token = ? WHERE id = ?").bind(tokens.refresh_token, userId).run();
  }
  return tokens.access_token;
}
__name(getValidOutlookAccessToken, "getValidOutlookAccessToken");
async function getOutlookUserProfile(accessToken) {
  const response = await fetch("https://graph.microsoft.com/v1.0/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!response.ok) {
    const error2 = await response.text();
    throw new Error(`Failed to get Outlook user profile: ${error2}`);
  }
  const data = await response.json();
  return {
    email: data.mail || data.userPrincipalName,
    name: data.displayName
  };
}
__name(getOutlookUserProfile, "getOutlookUserProfile");
var init_outlook_calendar = __esm({
  "../output/server/chunks/outlook-calendar.js"() {
    init_checked_fetch();
    __name2(getOutlookAuthUrl, "getOutlookAuthUrl");
    __name2(exchangeOutlookCode, "exchangeOutlookCode");
    __name2(refreshOutlookAccessToken, "refreshOutlookAccessToken");
    __name2(getOutlookBusyTimes, "getOutlookBusyTimes");
    __name2(createOutlookCalendarEvent, "createOutlookCalendarEvent");
    __name2(cancelOutlookCalendarEvent, "cancelOutlookCalendarEvent");
    __name2(getValidOutlookAccessToken, "getValidOutlookAccessToken");
    __name2(getOutlookUserProfile, "getOutlookUserProfile");
  }
});
var server_ts_exports = {};
__export(server_ts_exports, {
  GET: /* @__PURE__ */ __name(() => GET, "GET")
});
var GET;
var init_server_ts = __esm({
  "../output/server/entries/endpoints/api/availability/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_google_calendar();
    init_outlook_calendar();
    GET = /* @__PURE__ */ __name2(async ({ url, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const eventSlug = url.searchParams.get("event");
      const date = url.searchParams.get("date");
      if (!eventSlug || !date) {
        throw error(400, "Missing required parameters");
      }
      try {
        let createDateInTimezone = /* @__PURE__ */ __name2(function(dateStr, timeStr, timezone) {
          const [hour, minute] = timeStr.split(":").map(Number);
          const dateTimeStr = `${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          });
          const targetDate = /* @__PURE__ */ new Date(dateTimeStr + "Z");
          const utcStr = targetDate.toISOString();
          const parts = formatter.formatToParts(targetDate);
          const tzHour = parseInt(parts.find((p) => p.type === "hour")?.value || "0");
          const tzMinute = parseInt(parts.find((p) => p.type === "minute")?.value || "0");
          const targetMinutes = hour * 60 + minute;
          const actualMinutes = tzHour * 60 + tzMinute;
          let offsetMinutes = actualMinutes - targetMinutes;
          if (offsetMinutes > 12 * 60) offsetMinutes -= 24 * 60;
          if (offsetMinutes < -12 * 60) offsetMinutes += 24 * 60;
          return new Date(targetDate.getTime() - offsetMinutes * 60 * 1e3);
        }, "createDateInTimezone");
        const db = env2.DB;
        const cacheKey = `availability:${eventSlug}:${date}`;
        const cached = await env2.KV.get(cacheKey);
        if (cached) {
          return json(JSON.parse(cached));
        }
        const user = await db.prepare("SELECT id, slug, timezone, settings FROM users LIMIT 1").first();
        if (!user) {
          throw error(404, "User not found");
        }
        const userTimezone = user.timezone || "UTC";
        let userSettings = {};
        try {
          userSettings = user.settings ? JSON.parse(user.settings) : {};
        } catch {
          userSettings = {};
        }
        const eventType = await db.prepare("SELECT id, duration_minutes as duration, availability_calendars FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1").bind(user.id, eventSlug).first();
        if (!eventType) {
          throw error(404, "Event type not found or inactive");
        }
        const availabilityCalendars = eventType.availability_calendars || userSettings.defaultAvailabilityCalendars || "both";
        const useGoogleCalendar = availabilityCalendars === "google" || availabilityCalendars === "both";
        const useOutlookCalendar = availabilityCalendars === "outlook" || availabilityCalendars === "both";
        const requestedDate = new Date(date);
        const dayOfWeek = requestedDate.getDay();
        const availabilityRules = await db.prepare(
          `SELECT start_time, end_time
				FROM availability_rules
				WHERE user_id = ? AND day_of_week = ?
				ORDER BY start_time`
        ).bind(user.id, dayOfWeek).all();
        if (!availabilityRules.results || availabilityRules.results.length === 0) {
          return json({ slots: [] });
        }
        const startOfDay = new Date(requestedDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(requestedDate);
        endOfDay.setHours(23, 59, 59, 999);
        let busySlots = [];
        if (useGoogleCalendar) {
          try {
            const accessToken = await getValidAccessToken(
              db,
              user.id,
              env2.GOOGLE_CLIENT_ID,
              env2.GOOGLE_CLIENT_SECRET
            );
            const selectedCalendars = userSettings.selectedGoogleCalendars;
            const googleBusy = await getBusyTimes(accessToken, startOfDay, endOfDay, selectedCalendars);
            busySlots.push(...googleBusy);
          } catch (err) {
            console.error("Error fetching Google Calendar busy times:", err);
          }
        }
        if (useOutlookCalendar && env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET) {
          try {
            const outlookToken = await getValidOutlookAccessToken(
              db,
              user.id,
              env2.MICROSOFT_CLIENT_ID,
              env2.MICROSOFT_CLIENT_SECRET
            );
            const outlookBusy = await getOutlookBusyTimes(outlookToken, startOfDay, endOfDay);
            busySlots.push(...outlookBusy);
          } catch (err) {
            console.error("Error fetching Outlook Calendar busy times:", err);
          }
        }
        const bookings = await db.prepare(
          `SELECT start_time, end_time
				FROM bookings
				WHERE user_id = ? AND DATE(start_time) = ? AND status = 'confirmed'
				ORDER BY start_time`
        ).bind(user.id, date).all();
        const allBusySlots = [
          ...busySlots.map((slot2) => ({
            start: slot2.start,
            end: slot2.end
          })),
          ...bookings.results.map((booking) => ({
            start: booking.start_time,
            end: booking.end_time
          }))
        ];
        const slots = [];
        for (const rule of availabilityRules.results) {
          let currentTime = createDateInTimezone(date, rule.start_time, userTimezone);
          const endTime = createDateInTimezone(date, rule.end_time, userTimezone);
          const slotIncrement = Math.min(30, eventType.duration);
          while (currentTime < endTime) {
            const slotEnd = new Date(currentTime);
            slotEnd.setMinutes(slotEnd.getMinutes() + eventType.duration);
            if (slotEnd > endTime) {
              break;
            }
            if (currentTime < /* @__PURE__ */ new Date()) {
              currentTime.setMinutes(currentTime.getMinutes() + slotIncrement);
              continue;
            }
            const hasConflict = allBusySlots.some((busy) => {
              const busyStart = new Date(busy.start);
              const busyEnd = new Date(busy.end);
              return currentTime >= busyStart && currentTime < busyEnd || slotEnd > busyStart && slotEnd <= busyEnd || currentTime <= busyStart && slotEnd >= busyEnd;
            });
            if (!hasConflict) {
              slots.push({
                start: currentTime.toISOString(),
                end: slotEnd.toISOString()
              });
            }
            currentTime.setMinutes(currentTime.getMinutes() + slotIncrement);
          }
        }
        await env2.KV.put(cacheKey, JSON.stringify({ slots }), { expirationTtl: 300 });
        return json({ slots });
      } catch (err) {
        console.error("Availability API error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to fetch availability");
      }
    }, "GET");
  }
});
var server_ts_exports2 = {};
__export(server_ts_exports2, {
  GET: /* @__PURE__ */ __name(() => GET2, "GET")
});
var GET2;
var init_server_ts2 = __esm({
  "../output/server/entries/endpoints/api/availability/month/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_google_calendar();
    init_outlook_calendar();
    GET2 = /* @__PURE__ */ __name2(async ({ url, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const eventSlug = url.searchParams.get("event");
      const month = url.searchParams.get("month");
      if (!eventSlug || !month) {
        throw error(400, "Missing required parameters");
      }
      try {
        let createDateInTimezone = /* @__PURE__ */ __name2(function(dateStr, timeStr, timezone) {
          const [hour, minute] = timeStr.split(":").map(Number);
          const dateTimeStr = `${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          });
          const targetDate = /* @__PURE__ */ new Date(dateTimeStr + "Z");
          const parts = formatter.formatToParts(targetDate);
          const tzHour = parseInt(parts.find((p) => p.type === "hour")?.value || "0");
          const tzMinute = parseInt(parts.find((p) => p.type === "minute")?.value || "0");
          const targetMinutes = hour * 60 + minute;
          const actualMinutes = tzHour * 60 + tzMinute;
          let offsetMinutes = actualMinutes - targetMinutes;
          if (offsetMinutes > 12 * 60) offsetMinutes -= 24 * 60;
          if (offsetMinutes < -12 * 60) offsetMinutes += 24 * 60;
          return new Date(targetDate.getTime() - offsetMinutes * 60 * 1e3);
        }, "createDateInTimezone");
        const db = env2.DB;
        const cacheKey = `availability:month:${eventSlug}:${month}`;
        const cached = await env2.KV.get(cacheKey);
        if (cached) {
          return json(JSON.parse(cached));
        }
        const user = await db.prepare("SELECT id, slug, timezone, settings FROM users LIMIT 1").first();
        if (!user) {
          throw error(404, "User not found");
        }
        const userTimezone = user.timezone || "UTC";
        let userSettings = {};
        try {
          userSettings = user.settings ? JSON.parse(user.settings) : {};
        } catch {
          userSettings = {};
        }
        const eventType = await db.prepare("SELECT id, duration_minutes as duration, availability_calendars FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1").bind(user.id, eventSlug).first();
        if (!eventType) {
          throw error(404, "Event type not found or inactive");
        }
        const availabilityCalendars = eventType.availability_calendars || userSettings.defaultAvailabilityCalendars || "both";
        const useGoogleCalendar = availabilityCalendars === "google" || availabilityCalendars === "both";
        const useOutlookCalendar = availabilityCalendars === "outlook" || availabilityCalendars === "both";
        const allRules = await db.prepare(
          `SELECT day_of_week, start_time, end_time
				FROM availability_rules
				WHERE user_id = ?
				ORDER BY day_of_week, start_time`
        ).bind(user.id).all();
        const rulesByDay = /* @__PURE__ */ new Map();
        for (const rule of allRules.results || []) {
          if (!rulesByDay.has(rule.day_of_week)) {
            rulesByDay.set(rule.day_of_week, []);
          }
          rulesByDay.get(rule.day_of_week).push({ start_time: rule.start_time, end_time: rule.end_time });
        }
        const [year, monthNum] = month.split("-").map(Number);
        const firstDay = new Date(year, monthNum - 1, 1);
        const lastDay = new Date(year, monthNum, 0);
        const today = /* @__PURE__ */ new Date();
        today.setHours(0, 0, 0, 0);
        const maxDate = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1e3);
        let busySlots = [];
        if (useGoogleCalendar) {
          try {
            const accessToken = await getValidAccessToken(
              db,
              user.id,
              env2.GOOGLE_CLIENT_ID,
              env2.GOOGLE_CLIENT_SECRET
            );
            const selectedCalendars = userSettings.selectedGoogleCalendars;
            const googleBusy = await getBusyTimes(accessToken, firstDay, lastDay, selectedCalendars);
            busySlots.push(...googleBusy);
          } catch (err) {
            console.error("Error fetching Google Calendar busy times:", err);
          }
        }
        if (useOutlookCalendar && env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET) {
          try {
            const outlookToken = await getValidOutlookAccessToken(
              db,
              user.id,
              env2.MICROSOFT_CLIENT_ID,
              env2.MICROSOFT_CLIENT_SECRET
            );
            const outlookBusy = await getOutlookBusyTimes(outlookToken, firstDay, lastDay);
            busySlots.push(...outlookBusy);
          } catch (err) {
            console.error("Error fetching Outlook Calendar busy times:", err);
          }
        }
        const bookings = await db.prepare(
          `SELECT start_time, end_time
				FROM bookings
				WHERE user_id = ? AND start_time >= ? AND start_time <= ? AND status = 'confirmed'
				ORDER BY start_time`
        ).bind(user.id, firstDay.toISOString(), lastDay.toISOString()).all();
        const allBusySlots = [
          ...busySlots,
          ...bookings.results.map((b) => ({ start: b.start_time, end: b.end_time }))
        ];
        const availableDates = [];
        for (let day = 1; day <= lastDay.getDate(); day++) {
          const date = new Date(year, monthNum - 1, day);
          if (date < today || date > maxDate) continue;
          const dayOfWeek = date.getDay();
          const rules = rulesByDay.get(dayOfWeek);
          if (!rules || rules.length === 0) continue;
          const dateStr = `${year}-${String(monthNum).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          let hasAvailableSlot = false;
          for (const rule of rules) {
            if (hasAvailableSlot) break;
            let currentTime = createDateInTimezone(dateStr, rule.start_time, userTimezone);
            const endTime = createDateInTimezone(dateStr, rule.end_time, userTimezone);
            const slotIncrement = Math.min(30, eventType.duration);
            while (currentTime < endTime && !hasAvailableSlot) {
              const slotEnd = new Date(currentTime);
              slotEnd.setMinutes(slotEnd.getMinutes() + eventType.duration);
              if (slotEnd > endTime) break;
              if (currentTime < /* @__PURE__ */ new Date()) {
                currentTime.setMinutes(currentTime.getMinutes() + slotIncrement);
                continue;
              }
              const hasConflict = allBusySlots.some((busy) => {
                const busyStart = new Date(busy.start);
                const busyEnd = new Date(busy.end);
                return currentTime >= busyStart && currentTime < busyEnd || slotEnd > busyStart && slotEnd <= busyEnd || currentTime <= busyStart && slotEnd >= busyEnd;
              });
              if (!hasConflict) {
                hasAvailableSlot = true;
              }
              currentTime.setMinutes(currentTime.getMinutes() + slotIncrement);
            }
          }
          if (hasAvailableSlot) {
            availableDates.push(dateStr);
          }
        }
        await env2.KV.put(cacheKey, JSON.stringify({ availableDates }), { expirationTtl: 300 });
        return json({ availableDates });
      } catch (err) {
        console.error("Monthly availability API error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to fetch monthly availability");
      }
    }, "GET");
  }
});
var server_ts_exports3 = {};
__export(server_ts_exports3, {
  POST: /* @__PURE__ */ __name(() => POST, "POST")
});
var POST;
var init_server_ts3 = __esm({
  "../output/server/entries/endpoints/api/bookings/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_google_calendar();
    init_outlook_calendar();
    init_index3();
    init_validation();
    POST = /* @__PURE__ */ __name2(async ({ request, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      try {
        const body2 = await request.json();
        const { eventSlug, startTime, endTime, attendeeName, attendeeEmail, notes, turnstileToken, timezone } = body2;
        if (!eventSlug || !startTime || !endTime || !attendeeName || !attendeeEmail) {
          throw error(400, "Missing required fields");
        }
        const lengthError = validateFields([
          validateLength(attendeeName, "Name", MAX_LENGTHS.name, true),
          validateLength(attendeeEmail, "Email", MAX_LENGTHS.email, true),
          validateLength(notes, "Notes", MAX_LENGTHS.notes, false)
        ]);
        if (lengthError) {
          throw error(400, lengthError);
        }
        if (!isValidEmail(attendeeEmail)) {
          throw error(400, "Invalid email address");
        }
        if (turnstileToken) {
          const turnstileResponse = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                secret: env2.TURNSTILE_SECRET_KEY || "",
                response: turnstileToken
              })
            }
          );
          const turnstileResult = await turnstileResponse.json();
          if (!turnstileResult.success) {
            throw error(400, "Turnstile verification failed");
          }
        }
        const db = env2.DB;
        const user = await db.prepare("SELECT id, email, name, slug, contact_email, settings, brand_color, outlook_refresh_token FROM users LIMIT 1").first();
        if (!user) {
          throw error(404, "User not found");
        }
        const eventType = await db.prepare("SELECT id, name, duration_minutes as duration, description, invite_calendar FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1").bind(user.id, eventSlug).first();
        if (!eventType) {
          throw error(404, "Event type not found or inactive");
        }
        let userSettings = {};
        try {
          userSettings = user.settings ? JSON.parse(user.settings) : {};
        } catch {
          userSettings = {};
        }
        const outlookConnected = !!user.outlook_refresh_token;
        const outlookConfigured = !!(env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET);
        let inviteCalendar = eventType.invite_calendar || userSettings.defaultInviteCalendar || "google";
        if (inviteCalendar === "outlook" && (!outlookConnected || !outlookConfigured)) {
          inviteCalendar = "google";
        }
        const startDateTime = new Date(startTime);
        const endDateTime = new Date(endTime);
        const conflict = await db.prepare(
          `SELECT id FROM bookings
				WHERE user_id = ? AND status = 'confirmed'
				AND (
					(start_time <= ? AND end_time > ?)
					OR (start_time < ? AND end_time >= ?)
					OR (start_time >= ? AND end_time <= ?)
				)`
        ).bind(user.id, startTime, startTime, endTime, endTime, startTime, endTime).first();
        if (conflict) {
          throw error(409, "This time slot is no longer available");
        }
        let googleEventId = null;
        let outlookEventId = null;
        let meetingUrl = null;
        if (inviteCalendar === "google") {
          try {
            const accessToken = await getValidAccessToken(
              db,
              user.id,
              env2.GOOGLE_CLIENT_ID,
              env2.GOOGLE_CLIENT_SECRET
            );
            const calendarEvent = await createCalendarEvent(accessToken, {
              summary: `${eventType.name} with ${attendeeName}`,
              description: `${eventType.description || ""}

Attendee: ${attendeeName} (${attendeeEmail})${notes ? `

Notes from attendee:
${notes}` : ""}`,
              start: {
                dateTime: startDateTime.toISOString(),
                timeZone: "UTC"
              },
              end: {
                dateTime: endDateTime.toISOString(),
                timeZone: "UTC"
              },
              attendees: [
                { email: attendeeEmail }
              ],
              conferenceData: {
                createRequest: {
                  requestId: crypto.randomUUID(),
                  conferenceSolutionKey: { type: "hangoutsMeet" }
                }
              }
            });
            googleEventId = calendarEvent.id;
            meetingUrl = calendarEvent.hangoutLink || null;
          } catch (err) {
            console.error("Error creating Google Calendar event:", err);
          }
        } else if (inviteCalendar === "outlook" && env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET) {
          try {
            const outlookToken = await getValidOutlookAccessToken(
              db,
              user.id,
              env2.MICROSOFT_CLIENT_ID,
              env2.MICROSOFT_CLIENT_SECRET
            );
            const outlookEvent = await createOutlookCalendarEvent(outlookToken, {
              summary: `${eventType.name} with ${attendeeName}`,
              description: `${eventType.description || ""}

Attendee: ${attendeeName} (${attendeeEmail})${notes ? `

Notes from attendee:
${notes}` : ""}`,
              startTime: startDateTime.toISOString(),
              endTime: endDateTime.toISOString(),
              attendeeEmail,
              hostEmail: user.email,
              createTeamsMeeting: true
            });
            outlookEventId = outlookEvent.id;
            if (outlookEvent.onlineMeeting?.joinUrl) {
              meetingUrl = outlookEvent.onlineMeeting.joinUrl;
            }
          } catch (err) {
            console.error("Error creating Outlook Calendar event:", err);
          }
        }
        const result = await db.prepare(
          `INSERT INTO bookings (
					user_id, event_type_id, start_time, end_time,
					attendee_name, attendee_email, attendee_notes, status,
					google_event_id, outlook_event_id, meeting_url, created_at
				) VALUES (?, ?, ?, ?, ?, ?, ?, 'confirmed', ?, ?, ?, CURRENT_TIMESTAMP)`
        ).bind(
          user.id,
          eventType.id,
          startTime,
          endTime,
          attendeeName,
          attendeeEmail,
          notes || null,
          googleEventId,
          outlookEventId,
          meetingUrl
        ).run();
        const dateStr = startDateTime.toISOString().split("T")[0];
        const cacheKey = `availability:${eventSlug}:${dateStr}`;
        await env2.KV.delete(cacheKey);
        if (env2.EMAILIT_API_KEY) {
          try {
            let timeFormat = "12h";
            try {
              const settings = user.settings ? JSON.parse(user.settings) : {};
              timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
            } catch {
            }
            const replyToEmail = user.contact_email || user.email;
            const bookingResult = await db.prepare("SELECT id FROM bookings WHERE google_event_id = ? OR outlook_event_id = ? OR (user_id = ? AND start_time = ? AND attendee_email = ?)").bind(googleEventId, outlookEventId, user.id, startTime, attendeeEmail).first();
            const bookingId = bookingResult?.id || result.meta.last_row_id?.toString() || "";
            const templates = await getEmailTemplates(db, user.id);
            const confirmationEnabled = isEmailEnabled(templates, "confirmation");
            const emailData = {
              attendeeName,
              attendeeEmail,
              eventName: eventType.name,
              eventDescription: eventType.description || "",
              startTime: startDateTime,
              endTime: endDateTime,
              meetingUrl,
              meetingType: inviteCalendar === "outlook" ? "teams" : "google_meet",
              bookingId,
              hostName: user.name,
              hostEmail: user.email,
              hostContactEmail: user.contact_email || void 0,
              appUrl: env2.APP_URL || "",
              timeFormat,
              timezone: timezone || "UTC",
              brandColor: user.brand_color || void 0,
              attendeeNotes: notes || void 0
            };
            if (confirmationEnabled) {
              const template = templates.get("confirmation");
              await sendBookingEmail(
                {
                  ...emailData,
                  customMessage: template?.custom_message
                },
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || user.email,
                  replyTo: replyToEmail
                },
                template?.subject || void 0
              );
            }
            await sendAdminNotificationEmail(
              emailData,
              user.contact_email || user.email,
              {
                apiKey: env2.EMAILIT_API_KEY,
                from: env2.EMAIL_FROM || user.email
              }
            );
            const reminderTypes = ["reminder_24h", "reminder_1h"];
            const reminderOffsets = {
              "reminder_24h": 24 * 60 * 60 * 1e3,
              // 24 hours
              "reminder_1h": 60 * 60 * 1e3
              // 1 hour
            };
            for (const reminderType of reminderTypes) {
              if (isEmailEnabled(templates, reminderType)) {
                const scheduledFor = new Date(startDateTime.getTime() - reminderOffsets[reminderType]);
                if (scheduledFor > /* @__PURE__ */ new Date()) {
                  await db.prepare(`INSERT INTO scheduled_emails (booking_id, template_type, scheduled_for) VALUES (?, ?, ?)`).bind(bookingId, reminderType, scheduledFor.toISOString()).run();
                }
              }
            }
          } catch (emailError) {
            console.error("Failed to send confirmation email:", emailError);
          }
        }
        return json({
          success: true,
          bookingId: result.meta.last_row_id,
          meetingUrl,
          meetingType: inviteCalendar === "outlook" ? "teams" : "google_meet"
        });
      } catch (err) {
        console.error("Booking creation error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to create booking");
      }
    }, "POST");
  }
});
var server_ts_exports4 = {};
__export(server_ts_exports4, {
  POST: /* @__PURE__ */ __name(() => POST2, "POST")
});
var POST2;
var init_server_ts4 = __esm({
  "../output/server/entries/endpoints/api/bookings/cancel/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    init_google_calendar();
    init_outlook_calendar();
    init_index3();
    POST2 = /* @__PURE__ */ __name2(async (event) => {
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const db = env2.DB;
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      try {
        const body2 = await event.request.json();
        const { bookingId, message } = body2;
        if (!bookingId) {
          throw error(400, "Booking ID is required");
        }
        const booking = await db.prepare(
          `SELECT b.id, b.user_id, b.google_event_id, b.outlook_event_id, b.status, b.start_time, b.end_time,
				b.attendee_name, b.attendee_email,
				e.name as event_name, e.slug as event_slug, e.description as event_description,
				u.name as host_name, u.email as host_email, u.contact_email, u.settings, u.brand_color
				FROM bookings b
				JOIN event_types e ON b.event_type_id = e.id
				JOIN users u ON b.user_id = u.id
				WHERE b.id = ?`
        ).bind(bookingId).first();
        if (!booking) {
          throw error(404, "Booking not found");
        }
        if (booking.user_id !== userId) {
          throw error(403, "You do not have permission to cancel this booking");
        }
        if (booking.status === "canceled") {
          throw error(400, "Booking is already canceled");
        }
        if (booking.google_event_id) {
          try {
            const accessToken = await getValidAccessToken(
              db,
              booking.user_id,
              env2.GOOGLE_CLIENT_ID,
              env2.GOOGLE_CLIENT_SECRET
            );
            await cancelCalendarEvent(accessToken, booking.google_event_id);
          } catch (err) {
            console.error("Failed to cancel Google Calendar event:", err);
          }
        }
        if (booking.outlook_event_id && env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET) {
          try {
            const outlookToken = await getValidOutlookAccessToken(
              db,
              booking.user_id,
              env2.MICROSOFT_CLIENT_ID,
              env2.MICROSOFT_CLIENT_SECRET
            );
            await cancelOutlookCalendarEvent(outlookToken, booking.outlook_event_id);
          } catch (err) {
            console.error("Failed to cancel Outlook Calendar event:", err);
          }
        }
        await db.prepare("UPDATE bookings SET status = ?, canceled_at = CURRENT_TIMESTAMP, canceled_by = ?, cancellation_reason = ? WHERE id = ?").bind("canceled", "host", message || null, bookingId).run();
        await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled' WHERE booking_id = ? AND status = 'pending'`).bind(bookingId).run();
        if (env2.EMAILIT_API_KEY) {
          try {
            let timeFormat = "12h";
            try {
              const settings = booking.settings ? JSON.parse(booking.settings) : {};
              timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
            } catch {
            }
            const replyToEmail = booking.contact_email || booking.host_email;
            const templates = await getEmailTemplates(db, booking.user_id);
            if (isEmailEnabled(templates, "cancellation")) {
              const template = templates.get("cancellation");
              await sendCancellationEmail(
                {
                  attendeeName: booking.attendee_name,
                  attendeeEmail: booking.attendee_email,
                  eventName: booking.event_name,
                  eventSlug: booking.event_slug,
                  eventDescription: booking.event_description || "",
                  startTime: new Date(booking.start_time),
                  endTime: new Date(booking.end_time),
                  meetingUrl: null,
                  bookingId: booking.id,
                  hostName: booking.host_name,
                  hostEmail: booking.host_email,
                  hostContactEmail: booking.contact_email || void 0,
                  appUrl: env2.APP_URL || "",
                  customMessage: message || template?.custom_message || null,
                  timeFormat,
                  brandColor: booking.brand_color || void 0
                },
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || booking.host_email,
                  replyTo: replyToEmail
                },
                template?.subject || void 0
              );
            }
          } catch (emailErr) {
            console.error("Failed to send cancellation email:", emailErr);
          }
        }
        return json({ success: true });
      } catch (err) {
        console.error("Cancel booking error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to cancel booking");
      }
    }, "POST");
  }
});
var server_ts_exports5 = {};
__export(server_ts_exports5, {
  POST: /* @__PURE__ */ __name(() => POST3, "POST")
});
async function sendRescheduleProposalEmail(data, config) {
  const formatDate = /* @__PURE__ */ __name2((date) => date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }), "formatDate");
  const formatTime = /* @__PURE__ */ __name2((date) => date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: data.timeFormat === "12h" }), "formatTime");
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Reschedule Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6;">
	<table role="presentation" style="width: 100%; border-collapse: collapse;">
		<tr>
			<td align="center" style="padding: 40px 20px;">
				<table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
					<!-- Header -->
					<tr>
						<td style="padding: 40px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); text-align: center;">
							<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Reschedule Request</h1>
						</td>
					</tr>

					<!-- Body -->
					<tr>
						<td style="padding: 40px;">
							<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
								Hi <strong>${data.attendeeName}</strong>,
							</p>
							<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
								<strong>${data.hostName}</strong> would like to reschedule your meeting.
							</p>

							${data.message ? `
							<div style="margin: 0 0 30px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #f59e0b;">
								<p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 22px;">${data.message}</p>
							</div>
							` : ""}

							<!-- Time comparison -->
							<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
								<tr>
									<td style="width: 48%; vertical-align: top;">
										<div style="background-color: #fef2f2; border-radius: 8px; padding: 16px; border: 1px solid #fecaca;">
											<div style="color: #991b1b; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">Original Time</div>
											<div style="color: #111827; font-size: 15px; font-weight: 500; text-decoration: line-through;">${formatDate(data.oldStartTime)}</div>
											<div style="color: #6b7280; font-size: 14px; text-decoration: line-through;">${formatTime(data.oldStartTime)} - ${formatTime(data.oldEndTime)}</div>
										</div>
									</td>
									<td style="width: 4%; text-align: center; vertical-align: middle;">
										<span style="color: #9ca3af; font-size: 20px;">\u2192</span>
									</td>
									<td style="width: 48%; vertical-align: top;">
										<div style="background-color: #f0fdf4; border-radius: 8px; padding: 16px; border: 1px solid #bbf7d0;">
											<div style="color: #166534; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">Proposed Time</div>
											<div style="color: #111827; font-size: 15px; font-weight: 500;">${formatDate(data.newStartTime)}</div>
											<div style="color: #6b7280; font-size: 14px;">${formatTime(data.newStartTime)} - ${formatTime(data.newEndTime)}</div>
										</div>
									</td>
								</tr>
							</table>

							<!-- Action buttons -->
							<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
								<tr>
									<td align="center">
										<a href="${data.responseUrl}?action=accept" style="display: inline-block; padding: 14px 28px; background-color: #10b981; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin: 0 8px;">Accept New Time</a>
										<a href="${data.responseUrl}?action=decline" style="display: inline-block; padding: 14px 28px; background-color: #ef4444; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin: 0 8px;">Decline</a>
									</td>
								</tr>
							</table>

							<p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 20px; text-align: center;">
								Or <a href="${data.responseUrl}?action=counter" style="color: ${data.brandColor}; text-decoration: none;">propose a different time</a>
							</p>
						</td>
					</tr>

					<!-- Footer -->
					<tr>
						<td style="padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
							<p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 18px; text-align: center;">
								This reschedule request was sent by ${data.hostName}.<br>
								Powered by <a href="https://github.com/dennisklappe/CloudMeet" style="color: #6b7280; text-decoration: none;">CloudMeet</a>
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
	`;
  const response = await fetch("https://api.emailit.com/v1/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      from: `${data.hostName} <${config.from}>`,
      to: data.attendeeEmail,
      reply_to: config.replyTo,
      subject: `Reschedule Request: ${data.eventName} with ${data.hostName}`,
      html: htmlBody
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send email: ${errorText}`);
  }
}
__name(sendRescheduleProposalEmail, "sendRescheduleProposalEmail");
var POST3;
var init_server_ts5 = __esm({
  "../output/server/entries/endpoints/api/bookings/propose-reschedule/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    POST3 = /* @__PURE__ */ __name2(async (event) => {
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const db = env2.DB;
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      try {
        const body2 = await event.request.json();
        const { bookingId, proposedStartTime, proposedEndTime, message } = body2;
        if (!bookingId || !proposedStartTime || !proposedEndTime) {
          throw error(400, "Booking ID and proposed times are required");
        }
        const booking = await db.prepare(
          `SELECT b.id, b.user_id, b.status, b.start_time, b.end_time,
				b.attendee_name, b.attendee_email, b.attendee_notes,
				e.name as event_name, e.slug as event_slug,
				u.name as host_name, u.email as host_email, u.contact_email, u.settings, u.brand_color
				FROM bookings b
				JOIN event_types e ON b.event_type_id = e.id
				JOIN users u ON b.user_id = u.id
				WHERE b.id = ?`
        ).bind(bookingId).first();
        if (!booking) {
          throw error(404, "Booking not found");
        }
        if (booking.user_id !== userId) {
          throw error(403, "You do not have permission to reschedule this booking");
        }
        if (booking.status !== "confirmed") {
          throw error(400, "Only confirmed bookings can be rescheduled");
        }
        const responseToken = crypto.randomUUID();
        await db.prepare(
          `INSERT INTO reschedule_proposals
				(booking_id, proposed_start_time, proposed_end_time, message, proposed_by, response_token, expires_at)
				VALUES (?, ?, ?, ?, 'host', ?, datetime('now', '+7 days'))`
        ).bind(bookingId, proposedStartTime, proposedEndTime, message || null, responseToken).run();
        await db.prepare(`UPDATE bookings SET status = 'rescheduled' WHERE id = ?`).bind(bookingId).run();
        if (env2.EMAILIT_API_KEY) {
          try {
            let timeFormat = "12h";
            try {
              const settings = booking.settings ? JSON.parse(booking.settings) : {};
              timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
            } catch {
            }
            const appUrl = env2.APP_URL || "";
            const responseUrl = `${appUrl}/reschedule-response/${responseToken}`;
            await sendRescheduleProposalEmail(
              {
                attendeeName: booking.attendee_name,
                attendeeEmail: booking.attendee_email,
                eventName: booking.event_name,
                eventSlug: booking.event_slug,
                hostName: booking.host_name,
                hostEmail: booking.host_email,
                oldStartTime: new Date(booking.start_time),
                oldEndTime: new Date(booking.end_time),
                newStartTime: new Date(proposedStartTime),
                newEndTime: new Date(proposedEndTime),
                message: message || null,
                responseUrl,
                appUrl,
                timeFormat,
                brandColor: booking.brand_color || "#3b82f6"
              },
              {
                apiKey: env2.EMAILIT_API_KEY,
                from: env2.EMAIL_FROM || booking.host_email,
                replyTo: booking.contact_email || booking.host_email
              }
            );
          } catch (emailErr) {
            console.error("Failed to send reschedule proposal email:", emailErr);
          }
        }
        return json({ success: true, responseToken });
      } catch (err) {
        console.error("Propose reschedule error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to create reschedule proposal");
      }
    }, "POST");
    __name2(sendRescheduleProposalEmail, "sendRescheduleProposalEmail");
  }
});
var server_ts_exports6 = {};
__export(server_ts_exports6, {
  POST: /* @__PURE__ */ __name(() => POST4, "POST")
});
var POST4;
var init_server_ts6 = __esm({
  "../output/server/entries/endpoints/api/bookings/reschedule/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_google_calendar();
    init_index3();
    POST4 = /* @__PURE__ */ __name2(async ({ request, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      try {
        const body2 = await request.json();
        const { bookingId, newStartTime, newEndTime, timezone } = body2;
        if (!bookingId || !newStartTime || !newEndTime) {
          throw error(400, "Missing required fields");
        }
        const db = env2.DB;
        const originalBooking = await db.prepare(
          `SELECT b.id, b.user_id, b.event_type_id, b.start_time, b.end_time,
				b.attendee_name, b.attendee_email, b.attendee_notes, b.google_event_id,
				e.name as event_name, e.slug as event_slug, e.description as event_description,
				e.duration_minutes as duration,
				u.id as host_user_id, u.name as host_name, u.email as host_email,
				u.contact_email, u.settings, u.brand_color
				FROM bookings b
				JOIN event_types e ON b.event_type_id = e.id
				JOIN users u ON b.user_id = u.id
				WHERE b.id = ? AND b.status IN ('confirmed', 'rescheduled')`
        ).bind(bookingId).first();
        if (!originalBooking) {
          throw error(404, "Booking not found or already cancelled");
        }
        const newStartDateTime = new Date(newStartTime);
        const newEndDateTime = new Date(newEndTime);
        const oldStartDateTime = new Date(originalBooking.start_time);
        const oldEndDateTime = new Date(originalBooking.end_time);
        const conflict = await db.prepare(
          `SELECT id FROM bookings
				WHERE user_id = ? AND status = 'confirmed' AND id != ?
				AND (
					(start_time <= ? AND end_time > ?)
					OR (start_time < ? AND end_time >= ?)
					OR (start_time >= ? AND end_time <= ?)
				)`
        ).bind(
          originalBooking.user_id,
          bookingId,
          newStartTime,
          newStartTime,
          newEndTime,
          newEndTime,
          newStartTime,
          newEndTime
        ).first();
        if (conflict) {
          throw error(409, "This time slot is no longer available");
        }
        let newCalendarEventId = null;
        let newMeetingUrl = null;
        try {
          const accessToken = await getValidAccessToken(
            db,
            originalBooking.user_id,
            env2.GOOGLE_CLIENT_ID,
            env2.GOOGLE_CLIENT_SECRET
          );
          if (originalBooking.google_event_id) {
            try {
              await cancelCalendarEvent(accessToken, originalBooking.google_event_id);
            } catch (err) {
              console.error("Error cancelling old Google Calendar event:", err);
            }
          }
          const notes = originalBooking.attendee_notes;
          const calendarEvent = await createCalendarEvent(accessToken, {
            summary: `${originalBooking.event_name} with ${originalBooking.attendee_name}`,
            description: `${originalBooking.event_description || ""}

Attendee: ${originalBooking.attendee_name} (${originalBooking.attendee_email})${notes ? `

Notes from attendee:
${notes}` : ""}`,
            start: {
              dateTime: newStartDateTime.toISOString(),
              timeZone: "UTC"
            },
            end: {
              dateTime: newEndDateTime.toISOString(),
              timeZone: "UTC"
            },
            attendees: [
              { email: originalBooking.attendee_email }
            ],
            conferenceData: {
              createRequest: {
                requestId: crypto.randomUUID(),
                conferenceSolutionKey: { type: "hangoutsMeet" }
              }
            }
          });
          newCalendarEventId = calendarEvent.id;
          newMeetingUrl = calendarEvent.hangoutLink || calendarEvent.htmlLink || null;
        } catch (err) {
          console.error("Error with Google Calendar:", err);
        }
        await db.prepare(
          `UPDATE bookings SET
					start_time = ?,
					end_time = ?,
					google_event_id = ?,
					meeting_url = ?,
					status = 'confirmed'
				WHERE id = ?`
        ).bind(
          newStartTime,
          newEndTime,
          newCalendarEventId,
          newMeetingUrl,
          bookingId
        ).run();
        await db.prepare(`UPDATE reschedule_proposals SET status = 'counter_proposed', responded_at = CURRENT_TIMESTAMP WHERE booking_id = ? AND status = 'pending'`).bind(bookingId).run();
        await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled' WHERE booking_id = ? AND status = 'pending'`).bind(bookingId).run();
        const oldDateStr = oldStartDateTime.toISOString().split("T")[0];
        const newDateStr = newStartDateTime.toISOString().split("T")[0];
        await env2.KV.delete(`availability:${originalBooking.event_slug}:${oldDateStr}`);
        await env2.KV.delete(`availability:${originalBooking.event_slug}:${newDateStr}`);
        if (env2.EMAILIT_API_KEY) {
          try {
            let timeFormat = "12h";
            try {
              const settings = originalBooking.settings ? JSON.parse(originalBooking.settings) : {};
              timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
            } catch {
            }
            const replyToEmail = originalBooking.contact_email || originalBooking.host_email;
            const templates = await getEmailTemplates(db, originalBooking.user_id);
            if (isEmailEnabled(templates, "reschedule")) {
              const template = templates.get("reschedule");
              await sendRescheduleEmail(
                {
                  attendeeName: originalBooking.attendee_name,
                  attendeeEmail: originalBooking.attendee_email,
                  eventName: originalBooking.event_name,
                  eventDescription: originalBooking.event_description || "",
                  startTime: newStartDateTime,
                  endTime: newEndDateTime,
                  oldStartTime: oldStartDateTime,
                  oldEndTime: oldEndDateTime,
                  meetingUrl: newMeetingUrl,
                  bookingId: originalBooking.id,
                  hostName: originalBooking.host_name,
                  hostEmail: originalBooking.host_email,
                  hostContactEmail: originalBooking.contact_email || void 0,
                  appUrl: env2.APP_URL || "",
                  timeFormat,
                  timezone: timezone || "UTC",
                  brandColor: originalBooking.brand_color || void 0,
                  attendeeNotes: originalBooking.attendee_notes
                },
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || originalBooking.host_email,
                  replyTo: replyToEmail
                },
                template?.subject || void 0
              );
            }
            try {
              await sendAdminRescheduleNotification(
                {
                  attendeeName: originalBooking.attendee_name,
                  attendeeEmail: originalBooking.attendee_email,
                  eventName: originalBooking.event_name,
                  eventDescription: originalBooking.event_description || "",
                  startTime: newStartDateTime,
                  endTime: newEndDateTime,
                  oldStartTime: oldStartDateTime,
                  oldEndTime: oldEndDateTime,
                  meetingUrl: newMeetingUrl,
                  bookingId: originalBooking.id,
                  hostName: originalBooking.host_name,
                  hostEmail: originalBooking.host_email,
                  appUrl: env2.APP_URL || "",
                  timeFormat,
                  timezone: timezone || "UTC",
                  brandColor: originalBooking.brand_color || void 0,
                  attendeeNotes: originalBooking.attendee_notes
                },
                originalBooking.host_email,
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || originalBooking.host_email
                }
              );
            } catch (adminEmailErr) {
              console.error("Failed to send admin reschedule notification:", adminEmailErr);
            }
            const reminderTypes = ["reminder_24h", "reminder_1h"];
            const reminderOffsets = {
              "reminder_24h": 24 * 60 * 60 * 1e3,
              "reminder_1h": 60 * 60 * 1e3
            };
            for (const reminderType of reminderTypes) {
              if (isEmailEnabled(templates, reminderType)) {
                const scheduledFor = new Date(newStartDateTime.getTime() - reminderOffsets[reminderType]);
                if (scheduledFor > /* @__PURE__ */ new Date()) {
                  await db.prepare(`INSERT INTO scheduled_emails (booking_id, template_type, scheduled_for) VALUES (?, ?, ?)`).bind(bookingId, reminderType, scheduledFor.toISOString()).run();
                }
              }
            }
          } catch (emailError) {
            console.error("Failed to send reschedule email:", emailError);
          }
        }
        return json({
          success: true,
          bookingId,
          meetingUrl: newMeetingUrl
        });
      } catch (err) {
        console.error("Reschedule error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to reschedule booking");
      }
    }, "POST");
  }
});
var server_ts_exports7 = {};
__export(server_ts_exports7, {
  GET: /* @__PURE__ */ __name(() => GET3, "GET")
});
var GET3;
var init_server_ts7 = __esm({
  "../output/server/entries/endpoints/api/calendars/google/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    init_google_calendar();
    GET3 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      try {
        const accessToken = await getValidAccessToken(
          env2.DB,
          userId,
          env2.GOOGLE_CLIENT_ID,
          env2.GOOGLE_CLIENT_SECRET
        );
        const calendars = await listCalendars(accessToken);
        const sorted = calendars.sort((a, b) => {
          if (a.primary) return -1;
          if (b.primary) return 1;
          return a.summary.localeCompare(b.summary);
        });
        return json({ calendars: sorted });
      } catch (err) {
        console.error("Failed to list Google calendars:", err);
        throw error(500, "Failed to list calendars");
      }
    }, "GET");
  }
});
var server_ts_exports8 = {};
__export(server_ts_exports8, {
  GET: /* @__PURE__ */ __name(() => GET4, "GET")
});
var GET4;
var init_server_ts8 = __esm({
  "../output/server/entries/endpoints/api/cron/send-reminders/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_index3();
    GET4 = /* @__PURE__ */ __name2(async ({ url, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const cronSecret = url.searchParams.get("secret");
      if (env2.CRON_SECRET && cronSecret !== env2.CRON_SECRET) {
        throw error(401, "Unauthorized");
      }
      const db = env2.DB;
      const now = /* @__PURE__ */ new Date();
      try {
        const pendingEmails = await db.prepare(`
				SELECT se.id, se.booking_id, se.template_type, se.scheduled_for,
					b.attendee_name, b.attendee_email, b.start_time, b.end_time, b.meeting_url, b.status,
					e.name as event_name, e.description as event_description,
					u.id as user_id, u.name as host_name, u.email as host_email, u.contact_email, u.settings, u.brand_color
				FROM scheduled_emails se
				JOIN bookings b ON se.booking_id = b.id
				JOIN event_types e ON b.event_type_id = e.id
				JOIN users u ON b.user_id = u.id
				WHERE se.status = 'pending'
				AND se.scheduled_for <= ?
				AND b.status = 'confirmed'
				ORDER BY se.scheduled_for ASC
				LIMIT 50
			`).bind(now.toISOString()).all();
        const results = {
          processed: 0,
          sent: 0,
          skipped: 0,
          failed: 0,
          errors: []
        };
        for (const email of pendingEmails.results) {
          results.processed++;
          try {
            const meetingStart = new Date(email.start_time);
            if (meetingStart < now) {
              await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled', error_message = 'Meeting already passed' WHERE id = ?`).bind(email.id).run();
              results.skipped++;
              continue;
            }
            const templates = await getEmailTemplates(db, email.user_id);
            const template = templates.get(email.template_type);
            if (template && !template.is_enabled) {
              await db.prepare(`UPDATE scheduled_emails SET status = 'cancelled', error_message = 'Template disabled' WHERE id = ?`).bind(email.id).run();
              results.skipped++;
              continue;
            }
            if (env2.EMAILIT_API_KEY) {
              let timeFormat = "12h";
              try {
                const settings = email.settings ? JSON.parse(email.settings) : {};
                timeFormat = settings.timeFormat === "24h" ? "24h" : "12h";
              } catch {
              }
              const replyToEmail = email.contact_email || email.host_email;
              await sendReminderEmail(
                {
                  attendeeName: email.attendee_name,
                  attendeeEmail: email.attendee_email,
                  eventName: email.event_name,
                  eventDescription: email.event_description || "",
                  startTime: new Date(email.start_time),
                  endTime: new Date(email.end_time),
                  meetingUrl: email.meeting_url,
                  bookingId: email.booking_id,
                  hostName: email.host_name,
                  hostEmail: email.host_email,
                  hostContactEmail: email.contact_email || void 0,
                  appUrl: env2.APP_URL || "",
                  customMessage: template?.custom_message,
                  timeFormat,
                  brandColor: email.brand_color || void 0
                },
                email.template_type,
                {
                  apiKey: env2.EMAILIT_API_KEY,
                  from: env2.EMAIL_FROM || email.host_email,
                  replyTo: replyToEmail
                },
                template?.subject || void 0
              );
              await db.prepare(`UPDATE scheduled_emails SET status = 'sent', sent_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(email.id).run();
              results.sent++;
            } else {
              await db.prepare(`UPDATE scheduled_emails SET status = 'failed', error_message = 'Email API not configured' WHERE id = ?`).bind(email.id).run();
              results.failed++;
            }
          } catch (err) {
            console.error(`Failed to send reminder email ${email.id}:`, err);
            await db.prepare(`UPDATE scheduled_emails SET status = 'failed', error_message = ? WHERE id = ?`).bind(err.message || "Unknown error", email.id).run();
            results.failed++;
            results.errors.push(`Email ${email.id}: ${err.message}`);
          }
        }
        return json({
          success: true,
          timestamp: now.toISOString(),
          ...results
        });
      } catch (err) {
        console.error("Cron send-reminders error:", err);
        throw error(500, "Failed to process reminder emails");
      }
    }, "GET");
  }
});
var server_ts_exports9 = {};
__export(server_ts_exports9, {
  GET: /* @__PURE__ */ __name(() => GET5, "GET"),
  PUT: /* @__PURE__ */ __name(() => PUT, "PUT")
});
var DEFAULT_TEMPLATES;
var GET5;
var PUT;
var init_server_ts9 = __esm({
  "../output/server/entries/endpoints/api/email-templates/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    DEFAULT_TEMPLATES = [
      {
        template_type: "confirmation",
        name: "Booking Confirmation",
        description: "Sent when someone books a meeting with you",
        default_subject: "Meeting Confirmed: {event_name} with {host_name}"
      },
      {
        template_type: "cancellation",
        name: "Cancellation Notice",
        description: "Sent when a meeting is cancelled",
        default_subject: "Meeting Cancelled: {event_name}"
      },
      {
        template_type: "reschedule",
        name: "Reschedule Confirmation",
        description: "Sent when a meeting is rescheduled",
        default_subject: "Meeting Rescheduled: {event_name} with {host_name}"
      },
      {
        template_type: "reminder_24h",
        name: "24 Hour Reminder",
        description: "Sent 24 hours before the meeting",
        default_subject: "Reminder: {event_name} tomorrow with {host_name}"
      },
      {
        template_type: "reminder_1h",
        name: "1 Hour Reminder",
        description: "Sent 1 hour before the meeting",
        default_subject: "Reminder: {event_name} starts in 1 hour"
      }
    ];
    GET5 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const db = env2.DB;
      try {
        const templates = await db.prepare("SELECT id, template_type, is_enabled, subject, custom_message FROM email_templates WHERE user_id = ?").bind(userId).all();
        const templateMap = new Map(templates.results.map((t2) => [t2.template_type, t2]));
        const result = DEFAULT_TEMPLATES.map((def) => {
          const saved = templateMap.get(def.template_type);
          return {
            ...def,
            id: saved?.id || null,
            is_enabled: saved ? saved.is_enabled === 1 : true,
            subject: saved?.subject || def.default_subject,
            custom_message: saved?.custom_message || null
          };
        });
        return json({ templates: result });
      } catch (err) {
        console.error("Email templates GET error:", err);
        throw error(500, "Failed to fetch email templates");
      }
    }, "GET");
    PUT = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const db = env2.DB;
      try {
        const body2 = await event.request.json();
        const { template_type, is_enabled, subject, custom_message } = body2;
        const validTypes = DEFAULT_TEMPLATES.map((t2) => t2.template_type);
        if (!validTypes.includes(template_type)) {
          throw error(400, "Invalid template type");
        }
        await db.prepare(`
				INSERT INTO email_templates (user_id, template_type, is_enabled, subject, custom_message, updated_at)
				VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
				ON CONFLICT(user_id, template_type)
				DO UPDATE SET is_enabled = excluded.is_enabled, subject = excluded.subject, custom_message = excluded.custom_message, updated_at = CURRENT_TIMESTAMP
			`).bind(userId, template_type, is_enabled ? 1 : 0, subject || null, custom_message || null).run();
        return json({ success: true });
      } catch (err) {
        console.error("Email templates PUT error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to update email template");
      }
    }, "PUT");
  }
});
var server_ts_exports10 = {};
__export(server_ts_exports10, {
  GET: /* @__PURE__ */ __name(() => GET6, "GET")
});
var GET6;
var init_server_ts10 = __esm({
  "../output/server/entries/endpoints/api/event-type/_slug_/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    GET6 = /* @__PURE__ */ __name2(async ({ params, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const slug = params.slug;
      const db = env2.DB;
      try {
        const user = await db.prepare("SELECT id, slug, name, profile_image, brand_color, settings, outlook_refresh_token FROM users LIMIT 1").first();
        if (!user) {
          throw error(404, "User not found");
        }
        const eventType = await db.prepare(
          "SELECT id, name, slug, duration_minutes as duration, description, is_active, cover_image, invite_calendar FROM event_types WHERE user_id = ? AND slug = ? AND is_active = 1"
        ).bind(user.id, slug).first();
        if (!eventType) {
          throw error(404, "Event type not found or inactive");
        }
        let userSettings = {};
        try {
          userSettings = user.settings ? JSON.parse(user.settings) : {};
        } catch {
        }
        const outlookConnected = !!user.outlook_refresh_token;
        const outlookConfigured = !!(env2.MICROSOFT_CLIENT_ID && env2.MICROSOFT_CLIENT_SECRET);
        let effectiveInviteCalendar = eventType.invite_calendar || userSettings.defaultInviteCalendar || "google";
        if (effectiveInviteCalendar === "outlook" && (!outlookConnected || !outlookConfigured)) {
          effectiveInviteCalendar = "google";
        }
        return json({
          slug: eventType.slug,
          eventType: {
            ...eventType,
            invite_calendar: effectiveInviteCalendar
            // Return the effective calendar, not the stored one
          },
          user: {
            name: user.name,
            profileImage: user.profile_image,
            brandColor: user.brand_color || "#3b82f6",
            timeFormat: userSettings.timeFormat || "12h"
          }
        });
      } catch (err) {
        console.error("Event type API error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to fetch event type");
      }
    }, "GET");
  }
});
var server_ts_exports11 = {};
__export(server_ts_exports11, {
  POST: /* @__PURE__ */ __name(() => POST5, "POST"),
  PUT: /* @__PURE__ */ __name(() => PUT2, "PUT")
});
var PUT2;
var POST5;
var init_server_ts11 = __esm({
  "../output/server/entries/endpoints/api/profile/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    init_validation();
    PUT2 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const db = env2.DB;
      try {
        const body2 = await event.request.json();
        const { name, profileImage, brandColor, contactEmail, timeFormat, defaultAvailabilityCalendars, defaultInviteCalendar, selectedGoogleCalendars } = body2;
        const existingUser = await db.prepare("SELECT settings FROM users WHERE id = ?").bind(userId).first();
        let existingSettings = {};
        try {
          existingSettings = existingUser?.settings ? JSON.parse(existingUser.settings) : {};
        } catch {
          existingSettings = {};
        }
        if (name === void 0 && (defaultAvailabilityCalendars !== void 0 || defaultInviteCalendar !== void 0 || selectedGoogleCalendars !== void 0)) {
          const newSettings = {
            ...existingSettings,
            defaultAvailabilityCalendars: defaultAvailabilityCalendars ?? existingSettings.defaultAvailabilityCalendars ?? "both",
            defaultInviteCalendar: defaultInviteCalendar ?? existingSettings.defaultInviteCalendar ?? "google",
            ...selectedGoogleCalendars !== void 0 && { selectedGoogleCalendars }
          };
          await db.prepare("UPDATE users SET settings = ? WHERE id = ?").bind(JSON.stringify(newSettings), userId).run();
          return json({ success: true });
        }
        if (!name || name.trim().length === 0) {
          throw error(400, "Name is required");
        }
        const nameLengthError = validateLength(name, "Name", MAX_LENGTHS.name, true);
        if (nameLengthError) {
          throw error(400, nameLengthError);
        }
        const colorRegex = /^#[0-9A-Fa-f]{6}$/;
        const validBrandColor = brandColor && colorRegex.test(brandColor) ? brandColor : "#3b82f6";
        let validContactEmail = null;
        if (contactEmail) {
          if (!isValidEmail(contactEmail)) {
            throw error(400, "Invalid contact email address");
          }
          validContactEmail = contactEmail.trim();
        }
        const settings = JSON.stringify({
          ...existingSettings,
          timeFormat: timeFormat === "24h" ? "24h" : "12h"
        });
        await db.prepare("UPDATE users SET name = ?, profile_image = ?, brand_color = ?, contact_email = ?, settings = ? WHERE id = ?").bind(name.trim(), profileImage || null, validBrandColor, validContactEmail, settings, userId).run();
        return json({ success: true });
      } catch (err) {
        console.error("Profile update error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to update profile");
      }
    }, "PUT");
    POST5 = /* @__PURE__ */ __name2(async (event) => {
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw error(401, "Unauthorized");
      }
      const env2 = event.platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      try {
        const formData = await event.request.formData();
        const file = formData.get("image");
        if (!file || file.size === 0) {
          throw error(400, "No image provided");
        }
        if (!file.type.startsWith("image/")) {
          throw error(400, "File must be an image");
        }
        if (file.size > 2 * 1024 * 1024) {
          throw error(400, "Image must be less than 2MB");
        }
        const buffer = await file.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        const chunkSize = 8192;
        for (let i = 0; i < bytes.length; i += chunkSize) {
          const chunk = bytes.subarray(i, i + chunkSize);
          binary += String.fromCharCode.apply(null, chunk);
        }
        const base64 = btoa(binary);
        const dataUrl = `data:${file.type};base64,${base64}`;
        await env2.DB.prepare("UPDATE users SET profile_image = ? WHERE id = ?").bind(dataUrl, userId).run();
        return json({ success: true, imageUrl: dataUrl });
      } catch (err) {
        console.error("Image upload error:", err);
        if (err?.status) throw err;
        throw error(500, "Failed to upload image");
      }
    }, "POST");
  }
});
var server_ts_exports12 = {};
__export(server_ts_exports12, {
  GET: /* @__PURE__ */ __name(() => GET7, "GET")
});
var GET7;
var init_server_ts12 = __esm({
  "../output/server/entries/endpoints/auth/callback/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    GET7 = /* @__PURE__ */ __name2(async ({ url, platform, cookies }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw error(500, "Platform env not available");
      }
      const code = url.searchParams.get("code");
      const state2 = url.searchParams.get("state");
      const errorParam = url.searchParams.get("error");
      if (errorParam) {
        throw error(400, `OAuth error: ${errorParam}`);
      }
      if (!code || !state2) {
        throw error(400, "Missing code or state parameter");
      }
      const storedState = await env2.KV.get(`oauth_state:${state2}`);
      if (!storedState) {
        throw error(400, "Invalid state parameter");
      }
      await env2.KV.delete(`oauth_state:${state2}`);
      const clientId = env2.GOOGLE_CLIENT_ID;
      const clientSecret = env2.GOOGLE_CLIENT_SECRET;
      const appUrl = env2.APP_URL;
      const adminEmail = env2.ADMIN_EMAIL;
      if (!clientId || !clientSecret || !appUrl) {
        throw error(500, "Missing OAuth configuration");
      }
      try {
        const redirectUri = `${appUrl}/auth/callback`;
        const tokens = await exchangeCodeForTokens(code, clientId, clientSecret, redirectUri);
        const userInfo = await getGoogleUserInfo(tokens.access_token);
        if (adminEmail && userInfo.email !== adminEmail) {
          throw error(403, "Access denied. Only the admin can log in.");
        }
        const db = env2.DB;
        let user = await db.prepare("SELECT id FROM users WHERE email = ?").bind(userInfo.email).first();
        if (!user) {
          const userId = crypto.randomUUID();
          const slug = userInfo.email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, "");
          await db.prepare(
            `INSERT INTO users (id, email, name, slug, google_refresh_token, created_at)
					VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`
          ).bind(
            userId,
            userInfo.email,
            userInfo.name,
            slug,
            tokens.refresh_token || null
          ).run();
          user = { id: userId };
        } else {
          await db.prepare(
            `UPDATE users
					SET google_refresh_token = COALESCE(?, google_refresh_token),
						email = ?,
						name = ?
					WHERE id = ?`
          ).bind(
            tokens.refresh_token || null,
            userInfo.email,
            userInfo.name,
            user.id
          ).run();
        }
        const sessionToken = await createSessionToken(user.id, env2.JWT_SECRET);
        cookies.set("session", sessionToken, {
          path: "/",
          httpOnly: true,
          secure: appUrl.startsWith("https"),
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7
          // 7 days
        });
        throw redirect(302, "/dashboard");
      } catch (err) {
        if (err?.status && err?.location) {
          throw err;
        }
        console.error("OAuth callback error:", err);
        throw error(500, `Authentication failed: ${err instanceof Error ? err.message : "Unknown error"}`);
      }
    }, "GET");
  }
});
var server_ts_exports13 = {};
__export(server_ts_exports13, {
  GET: /* @__PURE__ */ __name(() => GET8, "GET")
});
var GET8;
var init_server_ts13 = __esm({
  "../output/server/entries/endpoints/auth/login/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    GET8 = /* @__PURE__ */ __name2(async ({ platform, url }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw new Error("Platform env not available");
      }
      const clientId = env2.GOOGLE_CLIENT_ID;
      const appUrl = env2.APP_URL;
      if (!clientId || !appUrl) {
        throw new Error("Missing OAuth configuration");
      }
      const state2 = crypto.randomUUID();
      await env2.KV.put(`oauth_state:${state2}`, "1", { expirationTtl: 600 });
      const redirectUri = `${appUrl}/auth/callback`;
      const authUrl = getAuthUrl(clientId, redirectUri, state2);
      throw redirect(302, authUrl);
    }, "GET");
  }
});
var server_ts_exports14 = {};
__export(server_ts_exports14, {
  POST: /* @__PURE__ */ __name(() => POST6, "POST")
});
var POST6;
var init_server_ts14 = __esm({
  "../output/server/entries/endpoints/auth/logout/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    POST6 = /* @__PURE__ */ __name2(async ({ cookies }) => {
      cookies.delete("session", { path: "/" });
      throw redirect(302, "/");
    }, "POST");
  }
});
var server_ts_exports15 = {};
__export(server_ts_exports15, {
  GET: /* @__PURE__ */ __name(() => GET9, "GET")
});
var GET9;
var init_server_ts15 = __esm({
  "../output/server/entries/endpoints/auth/outlook/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_outlook_calendar();
    init_auth();
    GET9 = /* @__PURE__ */ __name2(async (event) => {
      const env2 = event.platform?.env;
      if (!env2?.MICROSOFT_CLIENT_ID) {
        throw redirect(302, "/dashboard?error=outlook_not_configured");
      }
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      const state2 = `${crypto.randomUUID()}_${userId}`;
      await env2.KV.put(`outlook_oauth_state:${state2}`, userId, { expirationTtl: 600 });
      const redirectUri = `${env2.APP_URL}/auth/outlook/callback`;
      const authUrl = getOutlookAuthUrl(env2.MICROSOFT_CLIENT_ID, redirectUri, state2);
      throw redirect(302, authUrl);
    }, "GET");
  }
});
var server_ts_exports16 = {};
__export(server_ts_exports16, {
  GET: /* @__PURE__ */ __name(() => GET10, "GET")
});
var GET10;
var init_server_ts16 = __esm({
  "../output/server/entries/endpoints/auth/outlook/callback/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_outlook_calendar();
    GET10 = /* @__PURE__ */ __name2(async ({ url, platform }) => {
      const env2 = platform?.env;
      if (!env2) {
        throw redirect(302, "/dashboard?error=server_error");
      }
      const code = url.searchParams.get("code");
      const state2 = url.searchParams.get("state");
      const error2 = url.searchParams.get("error");
      if (error2) {
        console.error("Outlook OAuth error:", error2, url.searchParams.get("error_description"));
        throw redirect(302, "/dashboard?error=outlook_auth_failed");
      }
      if (!code || !state2) {
        throw redirect(302, "/dashboard?error=invalid_request");
      }
      const storedUserId = await env2.KV.get(`outlook_oauth_state:${state2}`);
      if (!storedUserId) {
        throw redirect(302, "/dashboard?error=invalid_state");
      }
      await env2.KV.delete(`outlook_oauth_state:${state2}`);
      try {
        const redirectUri = `${env2.APP_URL}/auth/outlook/callback`;
        const tokens = await exchangeOutlookCode(
          code,
          env2.MICROSOFT_CLIENT_ID,
          env2.MICROSOFT_CLIENT_SECRET,
          redirectUri
        );
        await getOutlookUserProfile(tokens.access_token);
        const db = env2.DB;
        await db.prepare("UPDATE users SET outlook_refresh_token = ? WHERE id = ?").bind(tokens.refresh_token, storedUserId).run();
        throw redirect(302, "/dashboard?success=outlook_connected");
      } catch (err) {
        if (err && typeof err === "object" && "status" in err && err.status === 302) throw err;
        console.error("Outlook OAuth callback error:", err);
        throw redirect(302, "/dashboard?error=outlook_connection_failed");
      }
    }, "GET");
  }
});
var server_ts_exports17 = {};
__export(server_ts_exports17, {
  POST: /* @__PURE__ */ __name(() => POST7, "POST")
});
var POST7;
var init_server_ts17 = __esm({
  "../output/server/entries/endpoints/auth/outlook/disconnect/_server.ts.js"() {
    init_checked_fetch();
    init_exports();
    init_auth();
    POST7 = /* @__PURE__ */ __name2(async (event) => {
      const env2 = event.platform?.env;
      if (!env2) {
        throw redirect(302, "/dashboard?error=server_error");
      }
      const userId = await getCurrentUser(event);
      if (!userId) {
        throw redirect(302, "/auth/login");
      }
      const db = env2.DB;
      await db.prepare("UPDATE users SET outlook_refresh_token = NULL WHERE id = ?").bind(userId).run();
      throw redirect(302, "/dashboard?success=outlook_disconnected");
    }, "POST");
  }
});
init_checked_fetch();
init_checked_fetch();
init_checked_fetch();
init_checked_fetch();
init_false();
init_exports();
init_internal();
init_server();
init_checked_fetch();
var base = "";
var assets = base;
var app_dir = "_app";
var relative = true;
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
__name(override, "override");
__name2(override, "override");
function reset() {
  base = initial.base;
  assets = initial.assets;
}
__name(reset, "reset");
__name2(reset, "reset");
init_checked_fetch();
init_checked_fetch();
init_checked_fetch();
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  static {
    __name(this, "DevalueError");
  }
  static {
    __name2(this, "DevalueError");
  }
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
__name(is_primitive, "is_primitive");
__name2(is_primitive, "is_primitive");
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
__name(is_plain_object, "is_plain_object");
__name2(is_plain_object, "is_plain_object");
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
__name(get_type, "get_type");
__name2(get_type, "get_type");
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
__name(get_escaped_char, "get_escaped_char");
__name2(get_escaped_char, "get_escaped_char");
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
__name(stringify_string, "stringify_string");
__name2(stringify_string, "stringify_string");
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
__name(enumerable_symbols, "enumerable_symbols");
__name2(enumerable_symbols, "enumerable_symbols");
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}
__name(stringify_key, "stringify_key");
__name2(stringify_key, "stringify_key");
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing, (value2) => uneval(value2, replacer));
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          walk(thing.buffer);
          return;
        case "ArrayBuffer":
          return;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  __name(walk, "walk");
  __name2(walk, "walk");
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify4(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify4(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(thing.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(thing.toString())})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify4(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify4).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let str2 = `new ${type}`;
        if (counts.get(thing.buffer) === 1) {
          const array2 = new thing.constructor(thing.buffer);
          str2 += `([${array2}])`;
        } else {
          str2 += `([${stringify4(thing.buffer)}])`;
        }
        const a = thing.byteOffset;
        const b = a + thing.byteLength;
        if (a > 0 || b !== thing.buffer.byteLength) {
          const m = +/(\d+)/.exec(type)[1] / 8;
          str2 += `.subarray(${a / m},${b / m})`;
        }
        return str2;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${type}.from(${stringify_string(thing.toString())})`;
      default:
        const keys2 = Object.keys(thing);
        const obj = keys2.map((key2) => `${safe_key(key2)}:${stringify4(thing[key2])}`).join(",");
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return keys2.length > 0 ? `{${obj},__proto__:null}` : `{__proto__:null}`;
        }
        return `{${obj}}`;
    }
  }
  __name(stringify4, "stringify4");
  __name2(stringify4, "stringify");
  const str = stringify4(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify4(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify4(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify4(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify4(k)}, ${stringify4(v)})`).join(".")}`
          );
          break;
        case "ArrayBuffer":
          values.push(
            `new Uint8Array([${new Uint8Array(thing).join(",")}]).buffer`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify4(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
__name(uneval, "uneval");
__name2(uneval, "uneval");
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
__name(get_name, "get_name");
__name2(get_name, "get_name");
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
__name(escape_unsafe_char, "escape_unsafe_char");
__name2(escape_unsafe_char, "escape_unsafe_char");
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
__name(escape_unsafe_chars, "escape_unsafe_chars");
__name2(escape_unsafe_chars, "escape_unsafe_chars");
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
__name(safe_key, "safe_key");
__name2(safe_key, "safe_key");
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
__name(safe_prop, "safe_prop");
__name2(safe_prop, "safe_prop");
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}
__name(stringify_primitive, "stringify_primitive");
__name2(stringify_primitive, "stringify_primitive");
init_checked_fetch();
init_checked_fetch();
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }
  return binaryToAscii(binaryString);
}
__name(encode64, "encode64");
__name2(encode64, "encode64");
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    dv.setUint8(i, binaryString.charCodeAt(i));
  }
  return arraybuffer;
}
__name(decode64, "decode64");
__name2(decode64, "decode64");
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;
  for (let i = 0; i < data.length; i++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 16711680) >> 16);
      output += String.fromCharCode((buffer & 65280) >> 8);
      output += String.fromCharCode(buffer & 255);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 65280) >> 8);
    output += String.fromCharCode(buffer & 255);
  }
  return output;
}
__name(asciiToBinary, "asciiToBinary");
__name2(asciiToBinary, "asciiToBinary");
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 3) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 15) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}
__name(binaryToAscii, "binaryToAscii");
__name2(binaryToAscii, "binaryToAscii");
init_checked_fetch();
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
__name(parse, "parse");
__name2(parse, "parse");
function unflatten(parsed, revivers) {
  if (typeof parsed === "number") return hydrate2(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  function hydrate2(index14, standalone = false) {
    if (index14 === UNDEFINED) return void 0;
    if (index14 === NAN) return NaN;
    if (index14 === POSITIVE_INFINITY) return Infinity;
    if (index14 === NEGATIVE_INFINITY) return -Infinity;
    if (index14 === NEGATIVE_ZERO) return -0;
    if (standalone || typeof index14 !== "number") {
      throw new Error(`Invalid input`);
    }
    if (index14 in hydrated) return hydrated[index14];
    const value = values[index14];
    if (!value || typeof value !== "object") {
      hydrated[index14] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers?.[type];
        if (reviver) {
          let i = value[1];
          if (typeof i !== "number") {
            i = values.push(value[1]) - 1;
          }
          return hydrated[index14] = reviver(hydrate2(i));
        }
        switch (type) {
          case "Date":
            hydrated[index14] = new Date(value[1]);
            break;
          case "Set":
            const set2 = /* @__PURE__ */ new Set();
            hydrated[index14] = set2;
            for (let i = 1; i < value.length; i += 1) {
              set2.add(hydrate2(value[i]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index14] = map;
            for (let i = 1; i < value.length; i += 2) {
              map.set(hydrate2(value[i]), hydrate2(value[i + 1]));
            }
            break;
          case "RegExp":
            hydrated[index14] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index14] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index14] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index14] = obj;
            for (let i = 1; i < value.length; i += 2) {
              obj[value[i]] = hydrate2(value[i + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type];
            const typedArray = new TypedArrayConstructor(hydrate2(value[1]));
            hydrated[index14] = value[2] !== void 0 ? typedArray.subarray(value[2], value[3]) : typedArray;
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated[index14] = arraybuffer;
            break;
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const temporalName = type.slice(9);
            hydrated[index14] = Temporal[temporalName].from(value[1]);
            break;
          }
          case "URL": {
            const url = new URL(value[1]);
            hydrated[index14] = url;
            break;
          }
          case "URLSearchParams": {
            const url = new URLSearchParams(value[1]);
            hydrated[index14] = url;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else {
        const array2 = new Array(value.length);
        hydrated[index14] = array2;
        for (let i = 0; i < value.length; i += 1) {
          const n2 = value[i];
          if (n2 === HOLE) continue;
          array2[i] = hydrate2(n2);
        }
      }
    } else {
      const object = {};
      hydrated[index14] = object;
      for (const key2 in value) {
        if (key2 === "__proto__") {
          throw new Error("Cannot parse an object with a `__proto__` property");
        }
        const n2 = value[key2];
        object[key2] = hydrate2(n2);
      }
    }
    return hydrated[index14];
  }
  __name(hydrate2, "hydrate2");
  __name2(hydrate2, "hydrate");
  return hydrate2(0);
}
__name(unflatten, "unflatten");
__name2(unflatten, "unflatten");
init_checked_fetch();
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    if (indexes.has(thing)) return indexes.get(thing);
    const index15 = p++;
    indexes.set(thing, index15);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index15] = `["${key2}",${flatten(value2)}]`;
        return index15;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "URL":
          str = `["URL",${stringify_string(thing.toString())}]`;
          break;
        case "URLSearchParams":
          str = `["URLSearchParams",${stringify_string(thing.toString())}]`;
          break;
        case "RegExp":
          const { source: source2, flags: flags2 } = thing;
          str = flags2 ? `["RegExp",${stringify_string(source2)},"${flags2}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          str = '["' + type + '",' + flatten(typedArray.buffer);
          const a = thing.byteOffset;
          const b = a + thing.byteLength;
          if (a > 0 || b !== typedArray.buffer.byteLength) {
            const m = +/(\d+)/.exec(type)[1] / 8;
            str += `,${a / m},${b / m}`;
          }
          str += "]";
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base64 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base64}"]`;
          break;
        }
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          str = `["${type}",${stringify_string(thing.toString())}]`;
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index15] = str;
    return index15;
  }
  __name(flatten, "flatten");
  __name2(flatten, "flatten");
  const index14 = flatten(value);
  if (index14 < 0) return `${index14}`;
  return `[${stringified.join(",")}]`;
}
__name(stringify, "stringify");
__name2(stringify, "stringify");
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
__name(stringify_primitive2, "stringify_primitive2");
__name2(stringify_primitive2, "stringify_primitive");
init_exports2();
init_utils2();
init_chunks();
init_checked_fetch();
init_index2();
init_context();
init_clsx();
var public_env = {};
function set_private_env(environment) {
}
__name(set_private_env, "set_private_env");
__name2(set_private_env, "set_private_env");
function set_public_env(environment) {
  public_env = environment;
}
__name(set_public_env, "set_public_env");
__name2(set_public_env, "set_public_env");
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
__name(hydration_mismatch, "hydration_mismatch");
__name2(hydration_mismatch, "hydration_mismatch");
function svelte_boundary_reset_noop() {
  {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}
__name(svelte_boundary_reset_noop, "svelte_boundary_reset_noop");
__name2(svelte_boundary_reset_noop, "svelte_boundary_reset_noop");
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
__name(set_hydrating, "set_hydrating");
__name2(set_hydrating, "set_hydrating");
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
__name(set_hydrate_node, "set_hydrate_node");
__name2(set_hydrate_node, "set_hydrate_node");
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(hydrate_node)
  );
}
__name(hydrate_next, "hydrate_next");
__name2(hydrate_next, "hydrate_next");
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
__name(next, "next");
__name2(next, "next");
function skip_nodes(remove = true) {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    if (remove) node.remove();
    node = next2;
  }
}
__name(skip_nodes, "skip_nodes");
__name2(skip_nodes, "skip_nodes");
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}
__name(createSubscriber, "createSubscriber");
__name2(createSubscriber, "createSubscriber");
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED | BOUNDARY_EFFECT;
function boundary(node, props, children) {
  new Boundary(node, props, children);
}
__name(boundary, "boundary");
__name2(boundary, "boundary");
var Boundary = class {
  static {
    __name(this, "Boundary");
  }
  static {
    __name2(this, "Boundary");
  }
  /** @type {Boundary | null} */
  parent;
  #pending = false;
  /** @type {TemplateNode} */
  #anchor;
  /** @type {TemplateNode | null} */
  #hydrate_open = hydrating ? hydrate_node : null;
  /** @type {BoundaryProps} */
  #props;
  /** @type {((anchor: Node) => void)} */
  #children;
  /** @type {Effect} */
  #effect;
  /** @type {Effect | null} */
  #main_effect = null;
  /** @type {Effect | null} */
  #pending_effect = null;
  /** @type {Effect | null} */
  #failed_effect = null;
  /** @type {DocumentFragment | null} */
  #offscreen_fragment = null;
  /** @type {TemplateNode | null} */
  #pending_anchor = null;
  #local_pending_count = 0;
  #pending_count = 0;
  #is_creating_fallback = false;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #effect_pending = null;
  #effect_pending_subscriber = createSubscriber(() => {
    this.#effect_pending = source(this.#local_pending_count);
    return () => {
      this.#effect_pending = null;
    };
  });
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(node, props, children) {
    this.#anchor = node;
    this.#props = props;
    this.#children = children;
    this.parent = /** @type {Effect} */
    active_effect.b;
    this.#pending = !!this.#props.pending;
    this.#effect = block(() => {
      active_effect.b = this;
      if (hydrating) {
        const comment = this.#hydrate_open;
        hydrate_next();
        const server_rendered_pending = (
          /** @type {Comment} */
          comment.nodeType === COMMENT_NODE && /** @type {Comment} */
          comment.data === HYDRATION_START_ELSE
        );
        if (server_rendered_pending) {
          this.#hydrate_pending_content();
        } else {
          this.#hydrate_resolved_content();
        }
      } else {
        var anchor = this.#get_anchor();
        try {
          this.#main_effect = branch(() => children(anchor));
        } catch (error2) {
          this.error(error2);
        }
        if (this.#pending_count > 0) {
          this.#show_pending_snippet();
        } else {
          this.#pending = false;
        }
      }
      return () => {
        this.#pending_anchor?.remove();
      };
    }, flags);
    if (hydrating) {
      this.#anchor = hydrate_node;
    }
  }
  #hydrate_resolved_content() {
    try {
      this.#main_effect = branch(() => this.#children(this.#anchor));
    } catch (error2) {
      this.error(error2);
    }
    this.#pending = false;
  }
  #hydrate_pending_content() {
    const pending = this.#props.pending;
    if (!pending) {
      return;
    }
    this.#pending_effect = branch(() => pending(this.#anchor));
    Batch.enqueue(() => {
      var anchor = this.#get_anchor();
      this.#main_effect = this.#run(() => {
        Batch.ensure();
        return branch(() => this.#children(anchor));
      });
      if (this.#pending_count > 0) {
        this.#show_pending_snippet();
      } else {
        pause_effect(
          /** @type {Effect} */
          this.#pending_effect,
          () => {
            this.#pending_effect = null;
          }
        );
        this.#pending = false;
      }
    });
  }
  #get_anchor() {
    var anchor = this.#anchor;
    if (this.#pending) {
      this.#pending_anchor = create_text();
      this.#anchor.before(this.#pending_anchor);
      anchor = this.#pending_anchor;
    }
    return anchor;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#pending || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#props.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #run(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(this.#effect);
    set_active_reaction(this.#effect);
    set_component_context(this.#effect.ctx);
    try {
      return fn();
    } catch (e3) {
      handle_error(e3);
      return null;
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  }
  #show_pending_snippet() {
    const pending = (
      /** @type {(anchor: Node) => void} */
      this.#props.pending
    );
    if (this.#main_effect !== null) {
      this.#offscreen_fragment = document.createDocumentFragment();
      this.#offscreen_fragment.append(
        /** @type {TemplateNode} */
        this.#pending_anchor
      );
      move_effect(this.#main_effect, this.#offscreen_fragment);
    }
    if (this.#pending_effect === null) {
      this.#pending_effect = branch(() => pending(this.#anchor));
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #update_pending_count(d) {
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        this.parent.#update_pending_count(d);
      }
      return;
    }
    this.#pending_count += d;
    if (this.#pending_count === 0) {
      this.#pending = false;
      if (this.#pending_effect) {
        pause_effect(this.#pending_effect, () => {
          this.#pending_effect = null;
        });
      }
      if (this.#offscreen_fragment) {
        this.#anchor.before(this.#offscreen_fragment);
        this.#offscreen_fragment = null;
      }
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(d) {
    this.#update_pending_count(d);
    this.#local_pending_count += d;
    if (this.#effect_pending) {
      internal_set(this.#effect_pending, this.#local_pending_count);
    }
  }
  get_effect_pending() {
    this.#effect_pending_subscriber();
    return get(
      /** @type {Source<number>} */
      this.#effect_pending
    );
  }
  /** @param {unknown} error */
  error(error2) {
    var onerror = this.#props.onerror;
    let failed = this.#props.failed;
    if (this.#is_creating_fallback || !onerror && !failed) {
      throw error2;
    }
    if (this.#main_effect) {
      destroy_effect(this.#main_effect);
      this.#main_effect = null;
    }
    if (this.#pending_effect) {
      destroy_effect(this.#pending_effect);
      this.#pending_effect = null;
    }
    if (this.#failed_effect) {
      destroy_effect(this.#failed_effect);
      this.#failed_effect = null;
    }
    if (hydrating) {
      set_hydrate_node(
        /** @type {TemplateNode} */
        this.#hydrate_open
      );
      next();
      set_hydrate_node(skip_nodes());
    }
    var did_reset = false;
    var calling_on_error = false;
    const reset2 = /* @__PURE__ */ __name2(() => {
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      Batch.ensure();
      this.#local_pending_count = 0;
      if (this.#failed_effect !== null) {
        pause_effect(this.#failed_effect, () => {
          this.#failed_effect = null;
        });
      }
      this.#pending = this.has_pending_snippet();
      this.#main_effect = this.#run(() => {
        this.#is_creating_fallback = false;
        return branch(() => this.#children(this.#anchor));
      });
      if (this.#pending_count > 0) {
        this.#show_pending_snippet();
      } else {
        this.#pending = false;
      }
    }, "reset");
    var previous_reaction = active_reaction;
    try {
      set_active_reaction(null);
      calling_on_error = true;
      onerror?.(error2, reset2);
      calling_on_error = false;
    } catch (error22) {
      invoke_error_boundary(error22, this.#effect && this.#effect.parent);
    } finally {
      set_active_reaction(previous_reaction);
    }
    if (failed) {
      queue_micro_task(() => {
        this.#failed_effect = this.#run(() => {
          Batch.ensure();
          this.#is_creating_fallback = true;
          try {
            return branch(() => {
              failed(
                this.#anchor,
                () => error2,
                () => reset2
              );
            });
          } catch (error22) {
            invoke_error_boundary(
              error22,
              /** @type {Effect} */
              this.#effect.parent
            );
            return null;
          } finally {
            this.#is_creating_fallback = false;
          }
        });
      });
    }
  }
};
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
var last_propagated_event = null;
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  last_propagated_event = event;
  var path_idx = 0;
  var handled_at = last_propagated_event === event && event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          delegated.call(current_target, event);
        }
      } catch (error2) {
        if (throw_error) {
          other_errors.push(error2);
        } else {
          throw_error = error2;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error2 of other_errors) {
        queueMicrotask(() => {
          throw error2;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
__name(handle_event_propagation, "handle_event_propagation");
__name2(handle_event_propagation, "handle_event_propagation");
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  if (effect.nodes_start === null) {
    effect.nodes_start = start;
    effect.nodes_end = end;
  }
}
__name(assign_nodes, "assign_nodes");
__name2(assign_nodes, "assign_nodes");
function mount(component14, options2) {
  return _mount(component14, options2);
}
__name(mount, "mount");
__name2(mount, "mount");
function hydrate(component14, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    const instance = _mount(component14, { ...options2, anchor });
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error2) {
    if (error2 instanceof Error && error2.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error2;
    }
    if (error2 !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error2);
    }
    if (options2.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component14, options2);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
__name(hydrate, "hydrate");
__name2(hydrate, "hydrate");
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context: context2, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = /* @__PURE__ */ __name2((events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n2 = document_listeners.get(event_name);
      if (n2 === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n2 + 1);
      }
    }
  }, "event_handle");
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component14 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: /* @__PURE__ */ __name2(() => {
        }, "pending")
      },
      (anchor_node2) => {
        if (context2) {
          push2({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context2;
        }
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node2,
            null
          );
        }
        component14 = Component(anchor_node2, props) || {};
        if (hydrating) {
          active_effect.nodes_end = hydrate_node;
          if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
          hydrate_node.data !== HYDRATION_END) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
        }
        if (context2) {
          pop2();
        }
      }
    );
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n2 = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n2 === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n2);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component14, unmount2);
  return component14;
}
__name(_mount, "_mount");
__name2(_mount, "_mount");
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component14, options2) {
  const fn = mounted_components.get(component14);
  if (fn) {
    mounted_components.delete(component14);
    return fn(options2);
  }
  return Promise.resolve();
}
__name(unmount, "unmount");
__name2(unmount, "unmount");
function asClassComponent$1(component14) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component14,
        ...options2
      });
    }
  };
}
__name(asClassComponent$1, "asClassComponent$1");
__name2(asClassComponent$1, "asClassComponent$1");
var Svelte4Component = class {
  static {
    __name(this, "Svelte4Component");
  }
  static {
    __name2(this, "Svelte4Component");
  }
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = /* @__PURE__ */ __name2((key2, value) => {
      var s3 = /* @__PURE__ */ mutable_source(value, false, false);
      sources.set(key2, s3);
      return s3;
    }, "add_source");
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = /* @__PURE__ */ __name2((...args) => callback.call(this, ...args), "cb");
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
__name(set_read_implementation, "set_read_implementation");
__name2(set_read_implementation, "set_read_implementation");
function asClassComponent(component14) {
  const component_constructor = asClassComponent$1(component14);
  const _render = /* @__PURE__ */ __name2((props, { context: context2 } = {}) => {
    const result = render(component14, { props, context: context2 });
    const munged = Object.defineProperties(
      /** @type {LegacyRenderResult & PromiseLike<LegacyRenderResult>} */
      {},
      {
        css: {
          value: { code: "", map: null }
        },
        head: {
          get: /* @__PURE__ */ __name2(() => result.head, "get")
        },
        html: {
          get: /* @__PURE__ */ __name2(() => result.body, "get")
        },
        then: {
          /**
           * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
           *
           * @template TResult1
           * @template [TResult2=never]
           * @param { (value: LegacyRenderResult) => TResult1 } onfulfilled
           * @param { (reason: unknown) => TResult2 } onrejected
           */
          value: /* @__PURE__ */ __name2((onfulfilled, onrejected) => {
            {
              const user_result = onfulfilled({
                css: munged.css,
                head: munged.head,
                html: munged.html
              });
              return Promise.resolve(user_result);
            }
          }, "value")
        }
      }
    );
    return munged;
  }, "_render");
  component_constructor.render = _render;
  return component_constructor;
}
__name(asClassComponent, "asClassComponent");
__name2(asClassComponent, "asClassComponent");
function Root($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      stores: stores2,
      page: page3,
      constructors,
      components = [],
      form,
      data_0 = null,
      data_1 = null
    } = $$props;
    {
      setContext("__svelte__", stores2);
    }
    {
      stores2.page.set(page3);
    }
    const Pyramid_1 = constructors[1];
    if (constructors[1]) {
      $$renderer2.push("<!--[-->");
      const Pyramid_0 = constructors[0];
      $$renderer2.push(`<!---->`);
      Pyramid_0($$renderer2, {
        data: data_0,
        form,
        params: page3.params,
        children: /* @__PURE__ */ __name2(($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Pyramid_1($$renderer3, { data: data_1, form, params: page3.params });
          $$renderer3.push(`<!---->`);
        }, "children"),
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      const Pyramid_0 = constructors[0];
      $$renderer2.push(`<!---->`);
      Pyramid_0($$renderer2, { data: data_0, form, params: page3.params });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
__name(Root, "Root");
__name2(Root, "Root");
var root = asClassComponent(Root);
var options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: /* @__PURE__ */ __name2(({ head: head2, body: body2, assets: assets2, nonce, env: env2 }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" type="image/svg+xml" href="' + assets2 + '/favicon.svg" />\n		<link rel="icon" type="image/png" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head2 + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body2 + "</div>\n	</body>\n</html>\n", "app"),
    error: /* @__PURE__ */ __name2(({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n", "error")
  },
  version_hash: "1jqv88g"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init2;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init: init2,
    reroute,
    transport
  };
}
__name(get_hooks, "get_hooks");
__name2(get_hooks, "get_hooks");
init_checked_fetch();
init_utils2();
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function stringify3(data, transport) {
  const encoders = Object.fromEntries(Object.entries(transport).map(([k, v]) => [k, v.encode]));
  return stringify(data, encoders);
}
__name(stringify3, "stringify3");
__name2(stringify3, "stringify");
function parse_remote_arg(string, transport) {
  if (!string) return void 0;
  const json_string = text_decoder2.decode(
    // no need to add back `=` characters, atob can handle it
    base64_decode(string.replaceAll("-", "+").replaceAll("_", "/"))
  );
  const decoders = Object.fromEntries(Object.entries(transport).map(([k, v]) => [k, v.decode]));
  return parse(json_string, decoders);
}
__name(parse_remote_arg, "parse_remote_arg");
__name2(parse_remote_arg, "parse_remote_arg");
function create_remote_cache_key(id, payload) {
  return id + "/" + payload;
}
__name(create_remote_cache_key, "create_remote_cache_key");
__name2(create_remote_cache_key, "create_remote_cache_key");
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function with_resolvers() {
  let resolve2;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
__name(with_resolvers, "with_resolvers");
__name2(with_resolvers, "with_resolvers");
var NULL_BODY_STATUS = [101, 103, 204, 205, 304];
var IN_WEBCONTAINER2 = !!globalThis.process?.versions?.webcontainer;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
__name(negotiate, "negotiate");
__name2(negotiate, "negotiate");
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
__name(is_content_type, "is_content_type");
__name2(is_content_type, "is_content_type");
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
__name(is_form_content_type, "is_form_content_type");
__name2(is_form_content_type, "is_form_content_type");
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
__name(coalesce_to_error, "coalesce_to_error");
__name2(coalesce_to_error, "coalesce_to_error");
function normalize_error(error2) {
  return (
    /** @type {import('../exports/internal/index.js').Redirect | HttpError | SvelteKitError | Error} */
    error2
  );
}
__name(normalize_error, "normalize_error");
__name2(normalize_error, "normalize_error");
function get_status(error2) {
  return error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
}
__name(get_status, "get_status");
__name2(get_status, "get_status");
function get_message(error2) {
  return error2 instanceof SvelteKitError ? error2.text : "Internal Error";
}
__name(get_message, "get_message");
__name2(get_message, "get_message");
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html2(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
__name(escape_html2, "escape_html2");
__name2(escape_html2, "escape_html");
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
__name(method_not_allowed, "method_not_allowed");
__name2(method_not_allowed, "method_not_allowed");
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod && !("HEAD" in mod)) {
    allowed.push("HEAD");
  }
  return allowed;
}
__name(allowed_methods, "allowed_methods");
__name2(allowed_methods, "allowed_methods");
function get_global_name(options2) {
  return `__sveltekit_${options2.version_hash}`;
}
__name(get_global_name, "get_global_name");
__name2(get_global_name, "get_global_name");
function static_error_page(options2, status, message) {
  let page3 = options2.templates.error({ status, message: escape_html2(message) });
  return text(page3, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
__name(static_error_page, "static_error_page");
__name2(static_error_page, "static_error_page");
async function handle_fatal_error(event, state2, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = get_status(error2);
  const body2 = await handle_error_and_jsonify(event, state2, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
__name(handle_fatal_error, "handle_fatal_error");
__name2(handle_fatal_error, "handle_fatal_error");
async function handle_error_and_jsonify(event, state2, options2, error2) {
  if (error2 instanceof HttpError) {
    return { message: "Unknown Error", ...error2.body };
  }
  const status = get_status(error2);
  const message = get_message(error2);
  return await with_request_store(
    { event, state: state2 },
    () => options2.hooks.handleError({ error: error2, event, status, message })
  ) ?? { message };
}
__name(handle_error_and_jsonify, "handle_error_and_jsonify");
__name2(handle_error_and_jsonify, "handle_error_and_jsonify");
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
__name(redirect_response, "redirect_response");
__name2(redirect_response, "redirect_response");
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (${error2.path}). If you need to serialize/deserialize custom types, use transport hooks: https://svelte.dev/docs/kit/hooks#Universal-hooks-transport.`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
__name(clarify_devalue_error, "clarify_devalue_error");
__name2(clarify_devalue_error, "clarify_devalue_error");
function serialize_uses(node) {
  const uses = {};
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.dependencies = Array.from(node.uses.dependencies);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.search_params = Array.from(node.uses.search_params);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.params = Array.from(node.uses.params);
  }
  if (node.uses?.parent) uses.parent = 1;
  if (node.uses?.route) uses.route = 1;
  if (node.uses?.url) uses.url = 1;
  return uses;
}
__name(serialize_uses, "serialize_uses");
__name2(serialize_uses, "serialize_uses");
function has_prerendered_path(manifest2, pathname) {
  return manifest2._.prerendered_routes.has(pathname) || pathname.at(-1) === "/" && manifest2._.prerendered_routes.has(pathname.slice(0, -1));
}
__name(has_prerendered_path, "has_prerendered_path");
__name2(has_prerendered_path, "has_prerendered_path");
function format_server_error(status, error2, event) {
  const formatted_text = `
\x1B[1;31m[${status}] ${event.request.method} ${event.url.pathname}\x1B[0m`;
  if (status === 404) {
    return formatted_text;
  }
  return `${formatted_text}
${error2.stack}`;
}
__name(format_server_error, "format_server_error");
__name2(format_server_error, "format_server_error");
function get_node_type(node_id) {
  const parts = node_id?.split("/");
  const filename = parts?.at(-1);
  if (!filename) return "unknown";
  const dot_parts = filename.split(".");
  return dot_parts.slice(0, -1).join(".");
}
__name(get_node_type, "get_node_type");
__name2(get_node_type, "get_node_type");
async function render_endpoint(event, event_state, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && !mod.HEAD && mod.GET) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender2 = mod.prerender ?? state2.prerender_default;
  if (prerender2 && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !state2.prerendering.inside_reroute && !prerender2) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  event_state.is_endpoint_request = true;
  try {
    const response = await with_request_store(
      { event, state: event_state },
      () => handler(
        /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
        event
      )
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering && (!state2.prerendering.inside_reroute || prerender2)) {
      const cloned = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      cloned.headers.set("x-sveltekit-prerender", String(prerender2));
      if (state2.prerendering.inside_reroute && prerender2) {
        cloned.headers.set(
          "x-sveltekit-routeid",
          encodeURI(
            /** @type {string} */
            event.route.id
          )
        );
        state2.prerendering.dependencies.set(event.url.pathname, { response: cloned, body: null });
      } else {
        return cloned;
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
__name(render_endpoint, "render_endpoint");
__name2(render_endpoint, "render_endpoint");
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
__name(is_endpoint_request, "is_endpoint_request");
__name2(is_endpoint_request, "is_endpoint_request");
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
__name(compact, "compact");
__name2(compact, "compact");
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix2(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
__name(has_data_suffix2, "has_data_suffix2");
__name2(has_data_suffix2, "has_data_suffix");
function add_data_suffix2(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
__name(add_data_suffix2, "add_data_suffix2");
__name2(add_data_suffix2, "add_data_suffix");
function strip_data_suffix2(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
__name(strip_data_suffix2, "strip_data_suffix2");
__name2(strip_data_suffix2, "strip_data_suffix");
var ROUTE_SUFFIX = "/__route.js";
function has_resolution_suffix2(pathname) {
  return pathname.endsWith(ROUTE_SUFFIX);
}
__name(has_resolution_suffix2, "has_resolution_suffix2");
__name2(has_resolution_suffix2, "has_resolution_suffix");
function add_resolution_suffix2(pathname) {
  return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
__name(add_resolution_suffix2, "add_resolution_suffix2");
__name2(add_resolution_suffix2, "add_resolution_suffix");
function strip_resolution_suffix2(pathname) {
  return pathname.slice(0, -ROUTE_SUFFIX.length);
}
__name(strip_resolution_suffix2, "strip_resolution_suffix2");
__name2(strip_resolution_suffix2, "strip_resolution_suffix");
var noop_span = {
  spanContext() {
    return noop_span_context;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return false;
  },
  recordException() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  }
};
var noop_span_context = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
async function record_span({ name, attributes: attributes2, fn }) {
  {
    return fn(noop_span);
  }
}
__name(record_span, "record_span");
__name2(record_span, "record_span");
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
__name(is_action_json_request, "is_action_json_request");
__name2(is_action_json_request, "is_action_json_request");
async function handle_action_json_request(event, event_state, options2, server2) {
  const actions6 = server2?.actions;
  if (!actions6) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, event_state, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions6);
  try {
    const data = await call_action(event, event_state, actions6);
    if (BROWSER) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(
          event,
          event_state,
          options2,
          check_incorrect_fail_use(err)
        )
      },
      {
        status: get_status(err)
      }
    );
  }
}
__name(handle_action_json_request, "handle_action_json_request");
__name2(handle_action_json_request, "handle_action_json_request");
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
__name(check_incorrect_fail_use, "check_incorrect_fail_use");
__name2(check_incorrect_fail_use, "check_incorrect_fail_use");
function action_json_redirect(redirect2) {
  return action_json({
    type: "redirect",
    status: redirect2.status,
    location: redirect2.location
  });
}
__name(action_json_redirect, "action_json_redirect");
__name2(action_json_redirect, "action_json_redirect");
function action_json(data, init2) {
  return json(data, init2);
}
__name(action_json, "action_json");
__name2(action_json, "action_json");
function is_action_request(event) {
  return event.request.method === "POST";
}
__name(is_action_request, "is_action_request");
__name2(is_action_request, "is_action_request");
async function handle_action_request(event, event_state, server2) {
  const actions6 = server2?.actions;
  if (!actions6) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions6);
  try {
    const data = await call_action(event, event_state, actions6);
    if (BROWSER) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
__name(handle_action_request, "handle_action_request");
__name2(handle_action_request, "handle_action_request");
function check_named_default_separate(actions6) {
  if (actions6.default && Object.keys(actions6).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
__name(check_named_default_separate, "check_named_default_separate");
__name2(check_named_default_separate, "check_named_default_separate");
async function call_action(event, event_state, actions6) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions6[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return record_span({
    name: "sveltekit.form_action",
    attributes: {
      "http.route": event.route.id || "unknown"
    },
    fn: /* @__PURE__ */ __name2(async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const result = await with_request_store(
        { event: traced_event, state: event_state },
        () => action(traced_event)
      );
      if (result instanceof ActionFailure) {
        current2.setAttributes({
          "sveltekit.form_action.result.type": "failure",
          "sveltekit.form_action.result.status": result.status
        });
      }
      return result;
    }, "fn")
  });
}
__name(call_action, "call_action");
__name2(call_action, "call_action");
function uneval_action_response(data, route_id, transport) {
  const replacer = /* @__PURE__ */ __name2((thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
      }
    }
  }, "replacer");
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
__name(uneval_action_response, "uneval_action_response");
__name2(uneval_action_response, "uneval_action_response");
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => stringify(value, encoders), route_id);
}
__name(stringify_action_response, "stringify_action_response");
__name2(stringify_action_response, "stringify_action_response");
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "") message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
__name(try_serialize, "try_serialize");
__name2(try_serialize, "try_serialize");
function create_async_iterator() {
  let resolved = -1;
  let returned = -1;
  const deferred2 = [];
  return {
    iterate: /* @__PURE__ */ __name2((transform = (x) => x) => {
      return {
        [Symbol.asyncIterator]() {
          return {
            next: /* @__PURE__ */ __name2(async () => {
              const next2 = deferred2[++returned];
              if (!next2) return { value: null, done: true };
              const value = await next2.promise;
              return { value: transform(value), done: false };
            }, "next")
          };
        }
      };
    }, "iterate"),
    add: /* @__PURE__ */ __name2((promise) => {
      deferred2.push(with_resolvers());
      void promise.then((value) => {
        deferred2[++resolved].resolve(value);
      });
    }, "add")
  };
}
__name(create_async_iterator, "create_async_iterator");
__name2(create_async_iterator, "create_async_iterator");
function server_data_serializer(event, event_state, options2) {
  let promise_id = 1;
  let max_nodes = -1;
  const iterator = create_async_iterator();
  const global = get_global_name(options2);
  function get_replacer(index14) {
    return /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function replacer(thing) {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        const promise = thing.then(
          /** @param {any} data */
          (data) => ({ data })
        ).catch(
          /** @param {any} error */
          async (error2) => ({
            error: await handle_error_and_jsonify(event, event_state, options2, error2)
          })
        ).then(
          /**
           * @param {{data: any; error: any}} result
           */
          async ({ data, error: error2 }) => {
            let str;
            try {
              str = uneval(error2 ? [, error2] : [data], replacer);
            } catch {
              error2 = await handle_error_and_jsonify(
                event,
                event_state,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              data = void 0;
              str = uneval([, error2], replacer);
            }
            return {
              index: index14,
              str: `${global}.resolve(${id}, ${str.includes("app.decode") ? `(app) => ${str}` : `() => ${str}`})`
            };
          }
        );
        iterator.add(promise);
        return `${global}.defer(${id})`;
      } else {
        for (const key2 in options2.hooks.transport) {
          const encoded = options2.hooks.transport[key2].encode(thing);
          if (encoded) {
            return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
          }
        }
      }
    }, "replacer"), "replacer");
  }
  __name(get_replacer, "get_replacer");
  __name2(get_replacer, "get_replacer");
  const strings = (
    /** @type {string[]} */
    []
  );
  return {
    set_max_nodes(i) {
      max_nodes = i;
    },
    add_node(i, node) {
      try {
        if (!node) {
          strings[i] = "null";
          return;
        }
        const payload = { type: "data", data: node.data, uses: serialize_uses(node) };
        if (node.slash) payload.slash = node.slash;
        strings[i] = uneval(payload, get_replacer(i));
      } catch (e3) {
        e3.path = e3.path.slice(1);
        throw new Error(clarify_devalue_error(
          event,
          /** @type {any} */
          e3
        ));
      }
    },
    get_data(csp) {
      const open = `<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>`;
      const close = `<\/script>
`;
      return {
        data: `[${compact(max_nodes > -1 ? strings.slice(0, max_nodes) : strings).join(",")}]`,
        chunks: promise_id > 1 ? iterator.iterate(({ index: index14, str }) => {
          if (max_nodes > -1 && index14 >= max_nodes) {
            return "";
          }
          return open + str + close;
        }) : null
      };
    }
  };
}
__name(server_data_serializer, "server_data_serializer");
__name2(server_data_serializer, "server_data_serializer");
function server_data_serializer_json(event, event_state, options2) {
  let promise_id = 1;
  const iterator = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: /* @__PURE__ */ __name2((thing) => {
      if (typeof thing?.then !== "function") {
        return;
      }
      const id = promise_id++;
      let key2 = "data";
      const promise = thing.catch(
        /** @param {any} e */
        async (e3) => {
          key2 = "error";
          return handle_error_and_jsonify(
            event,
            event_state,
            options2,
            /** @type {any} */
            e3
          );
        }
      ).then(
        /** @param {any} value */
        async (value) => {
          let str;
          try {
            str = stringify(value, reducers);
          } catch {
            const error2 = await handle_error_and_jsonify(
              event,
              event_state,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            key2 = "error";
            str = stringify(error2, reducers);
          }
          return `{"type":"chunk","id":${id},"${key2}":${str}}
`;
        }
      );
      iterator.add(promise);
      return id;
    }, "Promise")
  };
  const strings = (
    /** @type {string[]} */
    []
  );
  return {
    add_node(i, node) {
      try {
        if (!node) {
          strings[i] = "null";
          return;
        }
        if (node.type === "error" || node.type === "skip") {
          strings[i] = JSON.stringify(node);
          return;
        }
        strings[i] = `{"type":"data","data":${stringify(node.data, reducers)},"uses":${JSON.stringify(
          serialize_uses(node)
        )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
      } catch (e3) {
        e3.path = "data" + e3.path;
        throw new Error(clarify_devalue_error(
          event,
          /** @type {any} */
          e3
        ));
      }
    },
    get_data() {
      return {
        data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
        chunks: promise_id > 1 ? iterator.iterate() : null
      };
    }
  };
}
__name(server_data_serializer_json, "server_data_serializer_json");
__name2(server_data_serializer_json, "server_data_serializer_json");
async function load_server_data({ event, event_state, state: state2, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const load13 = node.server.load;
  const slash = node.server.trailingSlash;
  if (!load13) {
    return { type: "data", data: null, uses, slash };
  }
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state2.prerendering) {
    disable_search(url);
  }
  const result = await record_span({
    name: "sveltekit.load",
    attributes: {
      "sveltekit.load.node_id": node.server_id || "unknown",
      "sveltekit.load.node_type": get_node_type(node.server_id),
      "http.route": event.route.id || "unknown"
    },
    fn: /* @__PURE__ */ __name2(async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const result2 = await with_request_store(
        { event: traced_event, state: event_state },
        () => load13.call(null, {
          ...traced_event,
          fetch: /* @__PURE__ */ __name2((info, init2) => {
            new URL(info instanceof Request ? info.url : info, event.url);
            return event.fetch(info, init2);
          }, "fetch"),
          /** @param {string[]} deps */
          depends: /* @__PURE__ */ __name2((...deps) => {
            for (const dep of deps) {
              const { href } = new URL(dep, event.url);
              uses.dependencies.add(href);
            }
          }, "depends"),
          params: new Proxy(event.params, {
            get: /* @__PURE__ */ __name2((target, key2) => {
              if (is_tracking) {
                uses.params.add(key2);
              }
              return target[
                /** @type {string} */
                key2
              ];
            }, "get")
          }),
          parent: /* @__PURE__ */ __name2(async () => {
            if (is_tracking) {
              uses.parent = true;
            }
            return parent();
          }, "parent"),
          route: new Proxy(event.route, {
            get: /* @__PURE__ */ __name2((target, key2) => {
              if (is_tracking) {
                uses.route = true;
              }
              return target[
                /** @type {'id'} */
                key2
              ];
            }, "get")
          }),
          url,
          untrack(fn) {
            is_tracking = false;
            try {
              return fn();
            } finally {
              is_tracking = true;
            }
          }
        })
      );
      return result2;
    }, "fn")
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash
  };
}
__name(load_server_data, "load_server_data");
__name2(load_server_data, "load_server_data");
async function load_data({
  event,
  event_state,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  const load13 = node?.universal?.load;
  if (!load13) {
    return server_data_node?.data ?? null;
  }
  const result = await record_span({
    name: "sveltekit.load",
    attributes: {
      "sveltekit.load.node_id": node.universal_id || "unknown",
      "sveltekit.load.node_type": get_node_type(node.universal_id),
      "http.route": event.route.id || "unknown"
    },
    fn: /* @__PURE__ */ __name2(async (current2) => {
      const traced_event = merge_tracing(event, current2);
      return await with_request_store(
        { event: traced_event, state: event_state },
        () => load13.call(null, {
          url: event.url,
          params: event.params,
          data: server_data_node?.data ?? null,
          route: event.route,
          fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
          setHeaders: event.setHeaders,
          depends: /* @__PURE__ */ __name2(() => {
          }, "depends"),
          parent,
          untrack: /* @__PURE__ */ __name2((fn) => fn(), "untrack"),
          tracing: traced_event.tracing
        })
      );
    }, "fn")
  });
  return result ?? null;
}
__name(load_data, "load_data");
__name2(load_data, "load_data");
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = /* @__PURE__ */ __name2(async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else if (url.protocol === "https:" || url.protocol === "http:") {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    let teed_body;
    const proxy2 = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        __name(push_fetched, "push_fetched");
        __name2(push_fetched, "push_fetched");
        if (key2 === "body") {
          if (response2.body === null) {
            return null;
          }
          if (teed_body) {
            return teed_body;
          }
          const [a, b] = response2.body.tee();
          void (async () => {
            let result = new Uint8Array();
            for await (const chunk of a) {
              const combined = new Uint8Array(result.length + chunk.length);
              combined.set(result, 0);
              combined.set(chunk, result.length);
              result = combined;
            }
            if (dependency) {
              dependency.body = new Uint8Array(result);
            }
            void push_fetched(base64_encode(result), true);
          })();
          return teed_body = b;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            const bytes = new Uint8Array(buffer);
            if (dependency) {
              dependency.body = bytes;
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(base64_encode(bytes), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (body2 === "" && NULL_BODY_STATUS.includes(response2.status)) {
            await push_fetched(void 0, false);
            return void 0;
          }
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        __name(text2, "text2");
        __name2(text2, "text2");
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            const body2 = await text2();
            return body2 ? JSON.parse(body2) : void 0;
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get2 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get2.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy2;
  }, "universal_fetch");
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
__name(create_universal_fetch, "create_universal_fetch");
__name2(create_universal_fetch, "create_universal_fetch");
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += text_decoder2.decode(value);
  }
  return result;
}
__name(stream_to_string, "stream_to_string");
__name2(stream_to_string, "stream_to_string");
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
__name(hash, "hash");
__name2(hash, "hash");
var replacements2 = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements2).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements2[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html2(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
__name(serialize_data, "serialize_data");
__name2(serialize_data, "serialize_data");
var s = JSON.stringify;
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return btoa(String.fromCharCode(...bytes));
}
__name(sha256, "sha256");
__name2(sha256, "sha256");
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  __name(frac, "frac");
  __name2(frac, "frac");
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
__name(precompute, "precompute");
__name2(precompute, "precompute");
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
__name(reverse_endianness, "reverse_endianness");
__name2(reverse_endianness, "reverse_endianness");
function encode(str) {
  const encoded = text_encoder2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
__name(encode, "encode");
__name2(encode, "encode");
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}
__name(generate_nonce, "generate_nonce");
__name2(generate_nonce, "generate_nonce");
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  static {
    __name(this, "BaseProvider");
  }
  static {
    __name2(this, "BaseProvider");
  }
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #script_src_elem;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src_attr;
  /** @type {import('types').Csp.Source[]} */
  #style_src_elem;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#script_src_elem = [];
    this.#style_src = [];
    this.#style_src_attr = [];
    this.#style_src_elem = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    const needs_csp = /* @__PURE__ */ __name2((directive) => !!directive && !directive.some((value) => value === "unsafe-inline"), "needs_csp");
    this.#script_src_needs_csp = needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = needs_csp(script_src_elem);
    this.#style_src_needs_csp = needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (!this.#script_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.push(source2);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.push(source2);
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!this.#style_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.push(source2);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.push(source2);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = this.#directives;
      if (d["style-src-elem"] && !d["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.includes(sha256_empty_comment_hash)) {
        this.#style_src_elem.push(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        this.#style_src_elem.push(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  static {
    __name(this, "CspProvider");
  }
  static {
    __name2(this, "CspProvider");
  }
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html2(content, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  static {
    __name(this, "CspReportOnlyProvider");
  }
  static {
    __name2(this, "CspReportOnlyProvider");
  }
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  static {
    __name(this, "Csp");
  }
  static {
    __name2(this, "Csp");
  }
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender: prerender2 }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender2;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
__name(exec, "exec");
__name2(exec, "exec");
function generate_route_object(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l) => l?.[1]), leaf[1]].filter((n2) => typeof n2 === "number").map((n2) => `'${n2}': () => ${create_client_import(manifest2._.client.nodes?.[n2], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
__name(generate_route_object, "generate_route_object");
__name2(generate_route_object, "generate_route_object");
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
__name(create_client_import, "create_client_import");
__name2(create_client_import, "create_client_import");
async function resolve_route(resolved_path, url, manifest2) {
  if (!manifest2._.client.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  let route = null;
  let params = {};
  const matchers = await manifest2._.matchers();
  for (const candidate of manifest2._.client.routes) {
    const match = candidate.pattern.exec(resolved_path);
    if (!match) continue;
    const matched = exec(match, candidate.params, matchers);
    if (matched) {
      route = candidate;
      params = decode_params(matched);
      break;
    }
  }
  return create_server_routing_response(route, params, url, manifest2).response;
}
__name(resolve_route, "resolve_route");
__name2(resolve_route, "resolve_route");
function create_server_routing_response(route, params, url, manifest2) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, manifest2);
    const body2 = `${create_css_import(route, url, manifest2)}
export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body2, { headers: headers2 }), body: body2 };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
__name(create_server_routing_response, "create_server_routing_response");
__name2(create_server_routing_response, "create_server_routing_response");
function create_css_import(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  let css = "";
  for (const node of [...errors, ...layouts.map((l) => l?.[1]), leaf[1]]) {
    if (typeof node !== "number") continue;
    const node_css = manifest2._.client.css?.[node];
    for (const css_path of node_css ?? []) {
      css += `'${assets || base}/${css_path}',`;
    }
  }
  if (!css) return "";
  return `${create_client_import(
    /** @type {string} */
    manifest2._.client.start,
    url
  )}.then(x => x.load_css([${css}]));`;
}
__name(create_css_import, "create_css_import");
__name2(create_css_import, "create_css_import");
var updated = {
  ...readable(false),
  check: /* @__PURE__ */ __name2(() => false, "check")
};
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error2 = null,
  event,
  event_state,
  resolve_opts,
  action_result,
  data_serializer
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets14 = new Set(client.stylesheets);
  const fonts14 = new Set(client.fonts);
  const link_headers = /* @__PURE__ */ new Set();
  const link_tags = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  {
    if (!state2.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(
        branch2.map(({ node }) => {
          if (!node.component) {
            throw new Error(`Missing +page.svelte component for route ${event.route.id}`);
          }
          return node.component();
        })
      ),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch2.length; i += 1) {
      data2 = { ...data2, ...branch2[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    const fetch2 = globalThis.fetch;
    try {
      if (BROWSER) ;
      rendered = await with_request_store({ event, state: event_state }, async () => {
        if (relative) override({ base: base$1, assets: assets$1 });
        const maybe_promise = options2.root.render(props, render_opts);
        const rendered2 = options2.async && "then" in maybe_promise ? (
          /** @type {ReturnType<typeof options.root.render> & Promise<any>} */
          maybe_promise.then((r3) => r3)
        ) : maybe_promise;
        if (options2.async) {
          reset();
        }
        const { head: head22, html: html22, css } = options2.async ? await rendered2 : rendered2;
        return { head: head22, html: html22, css };
      });
    } finally {
      reset();
    }
    for (const { node } of branch2) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets14.add(url);
      for (const url of node.fonts) fonts14.add(url);
      if (node.inline_styles && !client.inline) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head2 = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = /* @__PURE__ */ __name2((path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  }, "prefixed");
  const style = client.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes2 = [];
    if (csp.style_needs_nonce) attributes2.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head2 += `
	<style${attributes2.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets14) {
    const path = prefixed(dep);
    const attributes2 = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes2.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        link_headers.add(`<${encodeURI(path)}>; rel="preload"; as="style"; nopush`);
      }
    }
    head2 += `
		<link href="${path}" ${attributes2.join(" ")}>`;
  }
  for (const dep of fonts14) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      link_tags.add(`<link rel="preload" as="font" type="font/${ext}" href="${path}" crossorigin>`);
      link_headers.add(
        `<${encodeURI(path)}>; rel="preload"; as="font"; type="font/${ext}"; crossorigin; nopush`
      );
    }
  }
  const global = get_global_name(options2);
  const { data, chunks } = data_serializer.get_data(csp);
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const route = manifest2._.client.routes?.find((r3) => r3.id === event.route.id) ?? null;
    if (client.uses_env_dynamic_public && state2.prerendering) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_headers.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head2 += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else {
          link_tags.add(`<link rel="modulepreload" href="${path}">`);
        }
      }
    }
    if (state2.prerendering && link_tags.size > 0) {
      head2 += Array.from(link_tags).map((tag) => `
		${tag}`).join("");
    }
    if (manifest2._.client.routes && state2.prerendering && !state2.prerendering.fallback) {
      const pathname = add_resolution_suffix2(event.url.pathname);
      state2.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), manifest2)
      );
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state2.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      let app_declaration = "";
      if (Object.keys(options2.hooks.transport).length > 0) {
        if (client.inline) {
          app_declaration = `const app = __sveltekit_${options2.version_hash}.app.app;`;
        } else if (client.app) {
          app_declaration = `const app = await import(${s(prefixed(client.app))});`;
        } else {
          app_declaration = `const { app } = await import(${s(prefixed(client.start))});`;
        }
      }
      const prelude = app_declaration ? `${app_declaration}
							const [data, error] = fn(app);` : `const [data, error] = fn();`;
      properties.push(`resolve: async (id, fn) => {
							${prelude}

							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (manifest2._.client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, manifest2).replaceAll(
            "\n",
            "\n							"
          );
          hydrate2.push(`params: ${uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const { remote_data: remote_cache } = event_state;
    let serialized_remote_data = "";
    if (remote_cache) {
      const remote = {};
      for (const [info, cache] of remote_cache) {
        if (!info.id) continue;
        for (const key2 in cache) {
          remote[create_remote_cache_key(info.id, key2)] = await cache[key2];
        }
      }
      const replacer = /* @__PURE__ */ __name2((thing) => {
        for (const key2 in options2.hooks.transport) {
          const encoded = options2.hooks.transport[key2].encode(thing);
          if (encoded) {
            return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
          }
        }
      }, "replacer");
      serialized_remote_data = `${global}.data = ${uneval(remote, replacer)};

						`;
    }
    const boot = client.inline ? `${client.inline.script}

					${serialized_remote_data}${global}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						${serialized_remote_data}kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client.start))}).then((app) => {
						${serialized_remote_data}app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      let opts = "";
      if (options2.service_worker_options != null) {
        const service_worker_options = { ...options2.service_worker_options };
        opts = `, ${s(service_worker_options)}`;
      }
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head2 = http_equiv.join("\n") + head2;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_headers.size) {
      headers2.set("link", Array.from(link_headers).join(", "));
    }
  }
  head2 += rendered.head;
  const html2 = options2.templates.app({
    head: head2,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html: html2,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller2) {
        controller2.enqueue(text_encoder2.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          if (chunk.length) controller2.enqueue(text_encoder2.encode(chunk));
        }
        controller2.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
__name(render_response, "render_response");
__name2(render_response, "render_response");
var PageNodes = class {
  static {
    __name(this, "PageNodes");
  }
  static {
    __name2(this, "PageNodes");
  }
  data;
  /**
   * @param {Array<import('types').SSRNode | undefined>} nodes
   */
  constructor(nodes) {
    this.data = nodes;
  }
  layouts() {
    return this.data.slice(0, -1);
  }
  page() {
    return this.data.at(-1);
  }
  validate() {
    for (const layout of this.layouts()) {
      if (layout) {
        validate_layout_server_exports(
          layout.server,
          /** @type {string} */
          layout.server_id
        );
        validate_layout_exports(
          layout.universal,
          /** @type {string} */
          layout.universal_id
        );
      }
    }
    const page3 = this.page();
    if (page3) {
      validate_page_server_exports(
        page3.server,
        /** @type {string} */
        page3.server_id
      );
      validate_page_exports(
        page3.universal,
        /** @type {string} */
        page3.universal_id
      );
    }
  }
  /**
   * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash'} Option
   * @param {Option} option
   * @returns {Value | undefined}
   */
  #get_option(option) {
    return this.data.reduce(
      (value, node) => {
        return node?.universal?.[option] ?? node?.server?.[option] ?? value;
      },
      /** @type {Value | undefined} */
      void 0
    );
  }
  csr() {
    return this.#get_option("csr") ?? true;
  }
  ssr() {
    return this.#get_option("ssr") ?? true;
  }
  prerender() {
    return this.#get_option("prerender") ?? false;
  }
  trailing_slash() {
    return this.#get_option("trailingSlash") ?? "never";
  }
  get_config() {
    let current2 = {};
    for (const node of this.data) {
      if (!node?.universal?.config && !node?.server?.config) continue;
      current2 = {
        ...current2,
        // TODO: should we override the server config value with the universal value similar to other page options?
        ...node?.universal?.config,
        ...node?.server?.config
      };
    }
    return Object.keys(current2).length ? current2 : void 0;
  }
  should_prerender_data() {
    return this.data.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
  }
};
async function respond_with_error({
  event,
  event_state,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const nodes = new PageNodes([default_layout]);
    const ssr2 = nodes.ssr();
    const csr = nodes.csr();
    const data_serializer = server_data_serializer(event, event_state, options2);
    if (ssr2) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        event_state,
        state: state2,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: /* @__PURE__ */ __name2(async () => ({}), "parent")
      });
      const server_data = await server_data_promise;
      data_serializer.add_node(0, server_data);
      const data = await load_data({
        event,
        event_state,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: /* @__PURE__ */ __name2(async () => ({}), "parent"),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr: ssr2,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, event_state, options2, error2),
      branch: branch2,
      fetched,
      event,
      event_state,
      resolve_opts,
      data_serializer
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      get_status(e3),
      (await handle_error_and_jsonify(event, event_state, options2, e3)).message
    );
  }
}
__name(respond_with_error, "respond_with_error");
__name2(respond_with_error, "respond_with_error");
async function handle_remote_call(event, state2, options2, manifest2, id) {
  return record_span({
    name: "sveltekit.remote.call",
    attributes: {},
    fn: /* @__PURE__ */ __name2((current2) => {
      const traced_event = merge_tracing(event, current2);
      return with_request_store(
        { event: traced_event, state: state2 },
        () => handle_remote_call_internal(traced_event, state2, options2, manifest2, id)
      );
    }, "fn")
  });
}
__name(handle_remote_call, "handle_remote_call");
__name2(handle_remote_call, "handle_remote_call");
async function handle_remote_call_internal(event, state2, options2, manifest2, id) {
  const [hash2, name, additional_args] = id.split("/");
  const remotes = manifest2._.remotes;
  if (!remotes[hash2]) error(404);
  const module = await remotes[hash2]();
  const fn = module.default[name];
  if (!fn) error(404);
  const info = fn.__;
  const transport = options2.hooks.transport;
  event.tracing.current.setAttributes({
    "sveltekit.remote.call.type": info.type,
    "sveltekit.remote.call.name": info.name
  });
  let form_client_refreshes;
  try {
    if (info.type === "query_batch") {
      if (event.request.method !== "POST") {
        throw new SvelteKitError(
          405,
          "Method Not Allowed",
          `\`query.batch\` functions must be invoked via POST request, not ${event.request.method}`
        );
      }
      const { payloads } = await event.request.json();
      const args = payloads.map((payload2) => parse_remote_arg(payload2, transport));
      const get_result = await with_request_store({ event, state: state2 }, () => info.run(args));
      const results = await Promise.all(
        args.map(async (arg, i) => {
          try {
            return { type: "result", data: get_result(arg, i) };
          } catch (error2) {
            return {
              type: "error",
              error: await handle_error_and_jsonify(event, state2, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500
            };
          }
        })
      );
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          result: stringify3(results, transport)
        }
      );
    }
    if (info.type === "form") {
      if (event.request.method !== "POST") {
        throw new SvelteKitError(
          405,
          "Method Not Allowed",
          `\`form\` functions must be invoked via POST request, not ${event.request.method}`
        );
      }
      if (!is_form_content_type(event.request)) {
        throw new SvelteKitError(
          415,
          "Unsupported Media Type",
          `\`form\` functions expect form-encoded data \u2014 received ${event.request.headers.get(
            "content-type"
          )}`
        );
      }
      const form_data = await event.request.formData();
      form_client_refreshes = /** @type {string[]} */
      JSON.parse(
        /** @type {string} */
        form_data.get("sveltekit:remote_refreshes") ?? "[]"
      );
      form_data.delete("sveltekit:remote_refreshes");
      if (additional_args) {
        form_data.set("sveltekit:id", decodeURIComponent(additional_args));
      }
      const fn2 = info.fn;
      const data2 = await with_request_store({ event, state: state2 }, () => fn2(form_data));
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          result: stringify3(data2, transport),
          refreshes: data2.issues ? {} : await serialize_refreshes(form_client_refreshes)
        }
      );
    }
    if (info.type === "command") {
      const { payload: payload2, refreshes } = await event.request.json();
      const arg = parse_remote_arg(payload2, transport);
      const data2 = await with_request_store({ event, state: state2 }, () => fn(arg));
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          result: stringify3(data2, transport),
          refreshes: await serialize_refreshes(refreshes)
        }
      );
    }
    const payload = info.type === "prerender" ? additional_args : (
      /** @type {string} */
      // new URL(...) necessary because we're hiding the URL from the user in the event object
      new URL(event.request.url).searchParams.get("payload")
    );
    const data = await with_request_store(
      { event, state: state2 },
      () => fn(parse_remote_arg(payload, transport))
    );
    return json(
      /** @type {RemoteFunctionResponse} */
      {
        type: "result",
        result: stringify3(data, transport)
      }
    );
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "redirect",
          location: error2.location,
          refreshes: await serialize_refreshes(form_client_refreshes ?? [])
        }
      );
    }
    const status = error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
    return json(
      /** @type {RemoteFunctionResponse} */
      {
        type: "error",
        error: await handle_error_and_jsonify(event, state2, options2, error2),
        status
      },
      {
        // By setting a non-200 during prerendering we fail the prerender process (unless handleHttpError handles it).
        // Errors at runtime will be passed to the client and are handled there
        status: state2.prerendering ? status : void 0,
        headers: {
          "cache-control": "private, no-store"
        }
      }
    );
  }
  async function serialize_refreshes(client_refreshes) {
    const refreshes = state2.refreshes ?? {};
    for (const key2 of client_refreshes) {
      if (refreshes[key2] !== void 0) continue;
      const [hash3, name2, payload] = key2.split("/");
      const loader = manifest2._.remotes[hash3];
      const fn2 = (await loader?.())?.default?.[name2];
      if (!fn2) error(400, "Bad Request");
      refreshes[key2] = with_request_store(
        { event, state: state2 },
        () => fn2(parse_remote_arg(payload, transport))
      );
    }
    if (Object.keys(refreshes).length === 0) {
      return void 0;
    }
    return stringify3(
      Object.fromEntries(
        await Promise.all(
          Object.entries(refreshes).map(async ([key2, promise]) => [key2, await promise])
        )
      ),
      transport
    );
  }
  __name(serialize_refreshes, "serialize_refreshes");
  __name2(serialize_refreshes, "serialize_refreshes");
}
__name(handle_remote_call_internal, "handle_remote_call_internal");
__name2(handle_remote_call_internal, "handle_remote_call_internal");
async function handle_remote_form_post(event, state2, manifest2, id) {
  return record_span({
    name: "sveltekit.remote.form.post",
    attributes: {},
    fn: /* @__PURE__ */ __name2((current2) => {
      const traced_event = merge_tracing(event, current2);
      return with_request_store(
        { event: traced_event, state: state2 },
        () => handle_remote_form_post_internal(traced_event, state2, manifest2, id)
      );
    }, "fn")
  });
}
__name(handle_remote_form_post, "handle_remote_form_post");
__name2(handle_remote_form_post, "handle_remote_form_post");
async function handle_remote_form_post_internal(event, state2, manifest2, id) {
  const [hash2, name, action_id] = id.split("/");
  const remotes = manifest2._.remotes;
  const module = await remotes[hash2]?.();
  let form = (
    /** @type {RemoteForm<any, any>} */
    module?.default[name]
  );
  if (!form) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  if (action_id) {
    form = with_request_store({ event, state: state2 }, () => form.for(JSON.parse(action_id)));
  }
  try {
    const form_data = await event.request.formData();
    const fn = (
      /** @type {RemoteInfo & { type: 'form' }} */
      /** @type {any} */
      form.__.fn
    );
    if (action_id && !form_data.has("id")) {
      form_data.set("sveltekit:id", decodeURIComponent(action_id));
    }
    await with_request_store({ event, state: state2 }, () => fn(form_data));
    return {
      type: "success",
      status: 200
    };
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
__name(handle_remote_form_post_internal, "handle_remote_form_post_internal");
__name2(handle_remote_form_post_internal, "handle_remote_form_post_internal");
function get_remote_id(url) {
  return url.pathname.startsWith(`${base}/${app_dir}/remote/`) && url.pathname.replace(`${base}/${app_dir}/remote/`, "");
}
__name(get_remote_id, "get_remote_id");
__name2(get_remote_id, "get_remote_id");
function get_remote_action(url) {
  return url.searchParams.get("/remote");
}
__name(get_remote_action, "get_remote_action");
__name2(get_remote_action, "get_remote_action");
var MAX_DEPTH = 10;
async function render_page(event, event_state, page3, options2, manifest2, state2, nodes, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page3.leaf]();
    return handle_action_json_request(event, event_state, options2, node?.server);
  }
  try {
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.page()
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      const remote_id = get_remote_action(event.url);
      if (remote_id) {
        action_result = await handle_remote_form_post(event, event_state, manifest2, remote_id);
      } else {
        action_result = await handle_action_request(event, event_state, leaf_node.server);
      }
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender = nodes.prerender();
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const should_prerender_data = nodes.should_prerender_data();
    const data_pathname = add_data_suffix2(event.url.pathname);
    const fetched = [];
    const ssr2 = nodes.ssr();
    const csr = nodes.csr();
    if (ssr2 === false && !(state2.prerendering && should_prerender_data)) {
      if (BROWSER && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr
        },
        status,
        error: null,
        event,
        event_state,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts,
        data_serializer: server_data_serializer(event, event_state, options2)
      });
    }
    const branch2 = [];
    let load_error = null;
    const data_serializer = server_data_serializer(event, event_state, options2);
    const data_serializer_json = state2.prerendering && should_prerender_data ? server_data_serializer_json(event, event_state, options2) : null;
    const server_promises = nodes.data.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          const server_data = await load_server_data({
            event,
            event_state,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name2(async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }, "parent")
          });
          if (node) {
            data_serializer.add_node(i, server_data);
          }
          data_serializer_json?.add_node(i, server_data);
          return server_data;
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.data.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            event_state,
            fetched,
            node,
            parent: /* @__PURE__ */ __name2(async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            }, "parent"),
            resolve_opts,
            server_data_promise: server_promises[i],
            state: state2,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.data.length; i += 1) {
      const node = nodes.data[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch2.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error2 = await handle_error_and_jsonify(event, event_state, options2, err);
          while (i--) {
            if (page3.errors[i]) {
              const index14 = (
                /** @type {number} */
                page3.errors[i]
              );
              const node2 = await manifest2._.nodes[index14]();
              let j = i;
              while (!branch2[j]) j -= 1;
              data_serializer.set_max_nodes(j + 1);
              const layouts = compact(branch2.slice(0, j + 1));
              const nodes2 = new PageNodes(layouts.map((layout) => layout.node));
              return await render_response({
                event,
                event_state,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: {
                  ssr: nodes2.ssr(),
                  csr: nodes2.csr()
                },
                status: status2,
                error: error2,
                branch: layouts.concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                data_serializer
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state2.prerendering && data_serializer_json) {
      let { data, chunks } = data_serializer_json.get_data();
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      event_state,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr,
        ssr: ssr2
      },
      status,
      error: null,
      branch: ssr2 === false ? [] : compact(branch2),
      action_result,
      fetched,
      data_serializer: ssr2 === false ? server_data_serializer(event, event_state, options2) : data_serializer
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      event_state,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
__name(render_page, "render_page");
__name2(render_page, "render_page");
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
__name(once, "once");
__name2(once, "once");
async function render_data(event, event_state, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            event_state,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name2(async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }, "parent")
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, event_state, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : void 0
            }
          );
        })
      )
    );
    const data_serializer = server_data_serializer_json(event, event_state, options2);
    for (let i = 0; i < nodes.length; i++) data_serializer.add_node(i, nodes[i]);
    const { data, chunks } = data_serializer.get_data();
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller2) {
          controller2.enqueue(text_encoder2.encode(data));
          for await (const chunk of chunks) {
            controller2.enqueue(text_encoder2.encode(chunk));
          }
          controller2.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, event_state, options2, error2), 500);
    }
  }
}
__name(render_data, "render_data");
__name2(render_data, "render_data");
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
__name(json_response, "json_response");
__name2(json_response, "json_response");
function redirect_json_response(redirect2) {
  return json_response(
    /** @type {import('types').ServerRedirectNode} */
    {
      type: "redirect",
      location: redirect2.location
    }
  );
}
__name(redirect_json_response, "redirect_json_response");
__name2(redirect_json_response, "redirect_json_response");
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
__name(validate_options, "validate_options");
__name2(validate_options, "validate_options");
function generate_cookie_key(domain, path, name) {
  return `${domain || ""}${path}?${encodeURIComponent(name)}`;
}
__name(generate_cookie_key, "generate_cookie_key");
__name2(generate_cookie_key, "generate_cookie_key");
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: /* @__PURE__ */ __name2((value) => value, "decode") });
  let normalized_url;
  const new_cookies = /* @__PURE__ */ new Map();
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name, opts) {
      const best_match = Array.from(new_cookies.values()).filter((c2) => {
        return c2.name === name && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path);
      }).sort((a, b) => b.options.path.length - a.options.path.length)[0];
      if (best_match) {
        return best_match.options.maxAge === 0 ? void 0 : best_match.value;
      }
      const req_cookies = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const lookup = /* @__PURE__ */ new Map();
      for (const c2 of new_cookies.values()) {
        if (domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
          const existing = lookup.get(c2.name);
          if (!existing || c2.options.path.length > existing.options.path.length) {
            lookup.set(c2.name, c2);
          }
        }
      }
      for (const c2 of lookup.values()) {
        cookies2[c2.name] = c2.value;
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        if (!normalized_url) {
          throw new Error("Cannot serialize cookies until after the route is determined");
        }
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const cookie of new_cookies.values()) {
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: /* @__PURE__ */ __name2((value) => value, "decode") });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  __name(get_cookie_header, "get_cookie_header");
  __name2(get_cookie_header, "get_cookie_header");
  const internal_queue = [];
  function set_internal(name, value, options2) {
    if (!normalized_url) {
      internal_queue.push(() => set_internal(name, value, options2));
      return;
    }
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    const cookie_key = generate_cookie_key(options2.domain, path, name);
    const cookie = { name, value, options: { ...options2, path } };
    new_cookies.set(cookie_key, cookie);
  }
  __name(set_internal, "set_internal");
  __name2(set_internal, "set_internal");
  function set_trailing_slash(trailing_slash) {
    normalized_url = normalize_path(url.pathname, trailing_slash);
    internal_queue.forEach((fn) => fn());
  }
  __name(set_trailing_slash, "set_trailing_slash");
  __name2(set_trailing_slash, "set_trailing_slash");
  return { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash };
}
__name(get_cookies, "get_cookies");
__name2(get_cookies, "get_cookies");
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
__name(domain_matches, "domain_matches");
__name2(domain_matches, "domain_matches");
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
__name(path_matches, "path_matches");
__name2(path_matches, "path_matches");
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix2(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
__name(add_cookies_to_headers, "add_cookies_to_headers");
__name2(add_cookies_to_headers, "add_cookies_to_headers");
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = /* @__PURE__ */ __name2(async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: /* @__PURE__ */ __name2(async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (has_prerendered_path(manifest2, base + decoded)) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await internal_fetch(request, options2, manifest2, state2);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: /* @__PURE__ */ __name2((value2) => value2, "encode"),
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }, "fetch")
    });
  }, "server_fetch");
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
__name(create_fetch, "create_fetch");
__name2(create_fetch, "create_fetch");
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
__name(normalize_fetch_input, "normalize_fetch_input");
__name2(normalize_fetch_input, "normalize_fetch_input");
async function internal_fetch(request, options2, manifest2, state2) {
  if (request.signal) {
    if (request.signal.aborted) {
      throw new DOMException("The operation was aborted.", "AbortError");
    }
    let remove_abort_listener = /* @__PURE__ */ __name2(() => {
    }, "remove_abort_listener");
    const abort_promise = new Promise((_, reject) => {
      const on_abort = /* @__PURE__ */ __name2(() => {
        reject(new DOMException("The operation was aborted.", "AbortError"));
      }, "on_abort");
      request.signal.addEventListener("abort", on_abort, { once: true });
      remove_abort_listener = /* @__PURE__ */ __name2(() => request.signal.removeEventListener("abort", on_abort), "remove_abort_listener");
    });
    const result = await Promise.race([
      respond(request, options2, manifest2, {
        ...state2,
        depth: state2.depth + 1
      }),
      abort_promise
    ]);
    remove_abort_listener();
    return result;
  } else {
    return await respond(request, options2, manifest2, {
      ...state2,
      depth: state2.depth + 1
    });
  }
}
__name(internal_fetch, "internal_fetch");
__name2(internal_fetch, "internal_fetch");
var body;
var etag;
var headers;
function get_public_env(request) {
  body ??= `export const env=${JSON.stringify(public_env)}`;
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
__name(get_public_env, "get_public_env");
__name2(get_public_env, "get_public_env");
var default_transform = /* @__PURE__ */ __name2(({ html: html2 }) => html2, "default_transform");
var default_filter = /* @__PURE__ */ __name2(() => false, "default_filter");
var default_preload = /* @__PURE__ */ __name2(({ type }) => type === "js" || type === "css", "default_preload");
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
var respond = propagate_context(internal_respond);
async function internal_respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  const is_route_resolution_request = has_resolution_suffix2(url.pathname);
  const is_data_request = has_data_suffix2(url.pathname);
  const remote_id = get_remote_id(url);
  {
    const request_origin = request.headers.get("origin");
    if (remote_id) {
      if (request.method !== "GET" && request_origin !== url.origin) {
        const message = "Cross-site remote requests are forbidden";
        return json({ message }, { status: 403 });
      }
    } else if (options2.csrf_check_origin) {
      const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request_origin !== url.origin && (!request_origin || !options2.csrf_trusted_origins.includes(request_origin));
      if (forbidden) {
        const message = `Cross-site ${request.method} form submissions are forbidden`;
        const opts = { status: 403 };
        if (request.headers.get("accept") === "application/json") {
          return json({ message }, opts);
        }
        return text(message, opts);
      }
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_suffix2(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix2(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  } else if (remote_id) {
    url.pathname = request.headers.get("x-sveltekit-pathname") ?? base;
    url.search = request.headers.get("x-sveltekit-search") ?? "";
  }
  const headers2 = {};
  const { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash } = get_cookies(
    request,
    url
  );
  const event_state = {
    prerendering: state2.prerendering,
    transport: options2.hooks.transport,
    handleValidationError: options2.hooks.handleValidationError,
    tracing: {
      record_span
    },
    is_in_remote_function: false
  };
  const event = {
    cookies,
    // @ts-expect-error `fetch` needs to be created after the `event` itself
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params: {},
    platform: state2.platform,
    request,
    route: { id: null },
    setHeaders: /* @__PURE__ */ __name2((new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    }, "setHeaders"),
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0,
    isRemoteRequest: !!remote_id
  };
  event.fetch = create_fetch({
    event,
    options: options2,
    manifest: manifest2,
    state: state2,
    get_cookie_header,
    set_internal
  });
  if (state2.emulator?.platform) {
    event.platform = await state2.emulator.platform({
      config: {},
      prerender: !!state2.prerendering?.fallback
    });
  }
  let resolved_path = url.pathname;
  if (!remote_id) {
    const prerendering_reroute_state = state2.prerendering?.inside_reroute;
    try {
      if (state2.prerendering) state2.prerendering.inside_reroute = true;
      resolved_path = await options2.hooks.reroute({ url: new URL(url), fetch: event.fetch }) ?? url.pathname;
    } catch {
      return text("Internal Server Error", {
        status: 500
      });
    } finally {
      if (state2.prerendering) state2.prerendering.inside_reroute = prerendering_reroute_state;
    }
  }
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  if (resolved_path !== url.pathname && !state2.prerendering?.fallback && has_prerendered_path(manifest2, resolved_path)) {
    const url2 = new URL(request.url);
    url2.pathname = is_data_request ? add_data_suffix2(resolved_path) : is_route_resolution_request ? add_resolution_suffix2(resolved_path) : resolved_path;
    const response = await fetch(url2, request);
    const headers22 = new Headers(response.headers);
    if (headers22.has("content-encoding")) {
      headers22.delete("content-encoding");
      headers22.delete("content-length");
    }
    return new Response(response.body, {
      headers: headers22,
      status: response.status,
      statusText: response.statusText
    });
  }
  let route = null;
  if (base && !state2.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest2);
  }
  if (resolved_path === `/${app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (!remote_id && resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(resolved_path);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        event.route = { id: route.id };
        event.params = decode_params(matched);
        break;
      }
    }
  }
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  let trailing_slash = "never";
  try {
    const page_nodes = route?.page ? new PageNodes(await load_page_nodes(route.page, manifest2)) : void 0;
    if (route && !remote_id) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (page_nodes) {
        if (BROWSER) ;
        trailing_slash = page_nodes.trailing_slash();
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash ?? "never";
        if (BROWSER) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash);
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state2.before_handle || state2.emulator?.platform) {
        let config = {};
        let prerender2 = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender2 = node.prerender ?? prerender2;
        } else if (page_nodes) {
          config = page_nodes.get_config() ?? config;
          prerender2 = page_nodes.prerender();
        }
        if (state2.before_handle) {
          state2.before_handle(event, config, prerender2);
        }
        if (state2.emulator?.platform) {
          event.platform = await state2.emulator.platform({ config, prerender: prerender2 });
        }
      }
    }
    set_trailing_slash(trailing_slash);
    if (state2.prerendering && !state2.prerendering.fallback && !state2.prerendering.inside_reroute) {
      disable_search(url);
    }
    const response = await record_span({
      name: "sveltekit.handle.root",
      attributes: {
        "http.route": event.route.id || "unknown",
        "http.method": event.request.method,
        "http.url": event.url.href,
        "sveltekit.is_data_request": is_data_request,
        "sveltekit.is_sub_request": event.isSubRequest
      },
      fn: /* @__PURE__ */ __name2(async (root_span) => {
        const traced_event = {
          ...event,
          tracing: {
            enabled: false,
            root: root_span,
            current: root_span
          }
        };
        return await with_request_store(
          { event: traced_event, state: event_state },
          () => options2.hooks.handle({
            event: traced_event,
            resolve: /* @__PURE__ */ __name2((event2, opts) => {
              return record_span({
                name: "sveltekit.resolve",
                attributes: {
                  "http.route": event2.route.id || "unknown"
                },
                fn: /* @__PURE__ */ __name2((resolve_span) => {
                  return with_request_store(
                    null,
                    () => resolve2(merge_tracing(event2, resolve_span), page_nodes, opts).then(
                      (response2) => {
                        for (const key2 in headers2) {
                          const value = headers2[key2];
                          response2.headers.set(
                            key2,
                            /** @type {string} */
                            value
                          );
                        }
                        add_cookies_to_headers(response2.headers, new_cookies.values());
                        if (state2.prerendering && event2.route.id !== null) {
                          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
                        }
                        resolve_span.setAttributes({
                          "http.response.status_code": response2.status,
                          "http.response.body.size": response2.headers.get("content-length") || "unknown"
                        });
                        return response2;
                      }
                    )
                  );
                }, "fn")
              });
            }, "resolve")
          })
        );
      }, "fn")
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request || remote_id ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, new_cookies.values());
      return response;
    }
    return await handle_fatal_error(event, event_state, options2, e3);
  }
  async function resolve2(event2, page_nodes, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts,
          data_serializer: server_data_serializer(event2, event_state, options2)
        });
      }
      if (remote_id) {
        return await handle_remote_call(event2, event_state, options2, manifest2, remote_id);
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response2;
        if (is_data_request) {
          response2 = await render_data(
            event2,
            event_state,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response2 = await render_endpoint(event2, event_state, await route.endpoint(), state2);
        } else if (route.page) {
          if (!page_nodes) {
            throw new Error("page_nodes not found. This should never happen");
          } else if (page_methods.has(method)) {
            response2 = await render_page(
              event2,
              event_state,
              route.page,
              options2,
              manifest2,
              state2,
              page_nodes,
              resolve_opts
            );
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response2 = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response2 = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("Route is neither page nor endpoint. This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response2.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response2 = new Response(response2.body, {
              status: response2.status,
              statusText: response2.statusText,
              headers: new Headers(response2.headers)
            });
            response2.headers.append("Vary", "Accept");
          }
        }
        return response2;
      }
      if (state2.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        if (BROWSER && event2.url.pathname === "/.well-known/appspecific/com.chrome.devtools.json") ;
        return await respond_with_error({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      const response = await fetch(request);
      return new Response(response.body, response);
    } catch (e3) {
      return await handle_fatal_error(event2, event_state, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  __name(resolve2, "resolve2");
  __name2(resolve2, "resolve2");
}
__name(internal_respond, "internal_respond");
__name2(internal_respond, "internal_respond");
function load_page_nodes(page3, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page3.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
    manifest2._.nodes[page3.leaf]()
  ]);
}
__name(load_page_nodes, "load_page_nodes");
__name2(load_page_nodes, "load_page_nodes");
function propagate_context(fn) {
  return async (req, ...rest) => {
    {
      return fn(req, ...rest);
    }
  };
}
__name(propagate_context, "propagate_context");
__name2(propagate_context, "propagate_context");
function filter_env(env2, allowed, disallowed) {
  return Object.fromEntries(
    Object.entries(env2).filter(
      ([k]) => k.startsWith(allowed) && (disallowed === "" || !k.startsWith(disallowed))
    )
  );
}
__name(filter_env, "filter_env");
__name2(filter_env, "filter_env");
function set_app(value) {
}
__name(set_app, "set_app");
__name2(set_app, "set_app");
var init_promise;
var current = null;
var Server = class {
  static {
    __name(this, "Server");
  }
  static {
    __name2(this, "Server");
  }
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
    if (IN_WEBCONTAINER2) {
      const respond2 = this.respond.bind(this);
      this.respond = async (...args) => {
        const { promise, resolve: resolve2 } = (
          /** @type {PromiseWithResolvers<void>} */
          with_resolvers()
        );
        const previous = current;
        current = promise;
        await previous;
        return respond2(...args).finally(resolve2);
      };
    }
  }
  /**
   * @param {import('@sveltejs/kit').ServerInitOptions} opts
   */
  async init({ env: env2, read }) {
    const { env_public_prefix, env_private_prefix } = this.#options;
    set_private_env(filter_env(env2, env_private_prefix, env_public_prefix));
    set_public_env(filter_env(env2, env_public_prefix, env_private_prefix));
    if (read) {
      const wrapped_read = /* @__PURE__ */ __name2((file) => {
        const result = read(file);
        if (result instanceof ReadableStream) {
          return result;
        } else {
          return new ReadableStream({
            async start(controller2) {
              try {
                const stream = await Promise.resolve(result);
                if (!stream) {
                  controller2.close();
                  return;
                }
                const reader = stream.getReader();
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  controller2.enqueue(value);
                }
                controller2.close();
              } catch (error2) {
                controller2.error(error2);
              }
            }
          });
        }
      }, "wrapped_read");
      set_read_implementation(wrapped_read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ status, error: error2, event }) => {
            const error_message = format_server_error(
              status,
              /** @type {Error} */
              error2,
              event
            );
            console.error(error_message);
          }),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          handleValidationError: module.handleValidationError || (({ issues }) => {
            console.error("Remote function schema validation failed:", issues);
            return { message: "Bad Request" };
          }),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        set_app({
          decoders: module.transport ? Object.fromEntries(Object.entries(module.transport).map(([k, v]) => [k, v.decode])) : {}
        });
        if (module.init) {
          await module.init();
        }
      } catch (e3) {
        {
          throw e3;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
init_checked_fetch();
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  __name(__memo, "__memo");
  __name2(__memo, "__memo");
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["availability/defaults.json", "availability/timezones.json", "cache-warming.json", "favicon.png", "favicon.svg", "screenshot.png"]),
    mimeTypes: { ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml" },
    _: {
      client: { start: "_app/immutable/entry/start.RD3hqIEy.js", app: "_app/immutable/entry/app.DgkgMGf2.js", imports: ["_app/immutable/entry/start.RD3hqIEy.js", "_app/immutable/chunks/CWkUecql.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/B5_C4Q4i.js", "_app/immutable/entry/app.DgkgMGf2.js", "_app/immutable/chunks/PPVm8Dsz.js", "_app/immutable/chunks/DQ3BFWhX.js", "_app/immutable/chunks/CySGt9vl.js", "_app/immutable/chunks/DsnmJJEf.js", "_app/immutable/chunks/CdhubeB1.js", "_app/immutable/chunks/u6AVuwMs.js", "_app/immutable/chunks/vr9HFtWH.js", "_app/immutable/chunks/3dsfsjWY.js", "_app/immutable/chunks/B5_C4Q4i.js"], stylesheets: [], fonts: [], uses_env_dynamic_public: false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9))),
        __memo(() => Promise.resolve().then(() => (init__10(), __exports10))),
        __memo(() => Promise.resolve().then(() => (init__11(), __exports11))),
        __memo(() => Promise.resolve().then(() => (init__12(), __exports12))),
        __memo(() => Promise.resolve().then(() => (init__13(), __exports13)))
      ],
      remotes: {},
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/api/availability",
          pattern: /^\/api\/availability\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts(), server_ts_exports)))
        },
        {
          id: "/api/availability/month",
          pattern: /^\/api\/availability\/month\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts2(), server_ts_exports2)))
        },
        {
          id: "/api/bookings",
          pattern: /^\/api\/bookings\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts3(), server_ts_exports3)))
        },
        {
          id: "/api/bookings/cancel",
          pattern: /^\/api\/bookings\/cancel\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts4(), server_ts_exports4)))
        },
        {
          id: "/api/bookings/propose-reschedule",
          pattern: /^\/api\/bookings\/propose-reschedule\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts5(), server_ts_exports5)))
        },
        {
          id: "/api/bookings/reschedule",
          pattern: /^\/api\/bookings\/reschedule\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts6(), server_ts_exports6)))
        },
        {
          id: "/api/calendars/google",
          pattern: /^\/api\/calendars\/google\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts7(), server_ts_exports7)))
        },
        {
          id: "/api/cron/send-reminders",
          pattern: /^\/api\/cron\/send-reminders\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts8(), server_ts_exports8)))
        },
        {
          id: "/api/email-templates",
          pattern: /^\/api\/email-templates\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts9(), server_ts_exports9)))
        },
        {
          id: "/api/event-type/[slug]",
          pattern: /^\/api\/event-type\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts10(), server_ts_exports10)))
        },
        {
          id: "/api/profile",
          pattern: /^\/api\/profile\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts11(), server_ts_exports11)))
        },
        {
          id: "/auth/callback",
          pattern: /^\/auth\/callback\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts12(), server_ts_exports12)))
        },
        {
          id: "/auth/login",
          pattern: /^\/auth\/login\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts13(), server_ts_exports13)))
        },
        {
          id: "/auth/logout",
          pattern: /^\/auth\/logout\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts14(), server_ts_exports14)))
        },
        {
          id: "/auth/outlook",
          pattern: /^\/auth\/outlook\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts15(), server_ts_exports15)))
        },
        {
          id: "/auth/outlook/callback",
          pattern: /^\/auth\/outlook\/callback\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts16(), server_ts_exports16)))
        },
        {
          id: "/auth/outlook/disconnect",
          pattern: /^\/auth\/outlook\/disconnect\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts17(), server_ts_exports17)))
        },
        {
          id: "/cancel/[id]",
          pattern: /^\/cancel\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/dashboard",
          pattern: /^\/dashboard\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/dashboard/availability",
          pattern: /^\/dashboard\/availability\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/dashboard/calendars",
          pattern: /^\/dashboard\/calendars\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/dashboard/emails",
          pattern: /^\/dashboard\/emails\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        },
        {
          id: "/dashboard/event-types/new",
          pattern: /^\/dashboard\/event-types\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 10 },
          endpoint: null
        },
        {
          id: "/dashboard/event-types/[id]",
          pattern: /^\/dashboard\/event-types\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 9 },
          endpoint: null
        },
        {
          id: "/reschedule-response/[token]",
          pattern: /^\/reschedule-response\/([^/]+?)\/?$/,
          params: [{ "name": "token", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 12 },
          endpoint: null
        },
        {
          id: "/reschedule/[id]",
          pattern: /^\/reschedule\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 11 },
          endpoint: null
        },
        {
          id: "/[slug]",
          pattern: /^\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      prerendered_routes: /* @__PURE__ */ new Set([]),
      matchers: /* @__PURE__ */ __name2(async () => {
        return {};
      }, "matchers"),
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);
var base_path = "";
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let r3 = await e3.match(t2);
  return n2 && r3 && (r3 = new Response(null, r3)), r3;
}
__name(e, "e");
__name2(e, "e");
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && r2(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
__name(t, "t");
__name2(t, "t");
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r2(e3) {
  if (!n.has(e3.status)) return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*")) return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
__name(r2, "r2");
__name2(r2, "r");
function o(n2) {
  return async function(r3, o2) {
    let a = await e(n2, r3);
    if (a) return a;
    o2.defer((e3) => {
      t(n2, r3, e3, o2);
    });
  };
}
__name(o, "o");
__name2(o, "o");
var s2 = caches.default;
var c = t.bind(0, s2);
var r22 = e.bind(0, s2);
var e2 = o.bind(0, s2);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}`;
var immutable = `${app_path}/immutable/`;
var version_file = `${app_path}/version.json`;
var origin;
var initialized = server.init({
  // @ts-expect-error env contains environment variables and bindings
  env,
  read: /* @__PURE__ */ __name2(async (file) => {
    const url = `${origin}/${file}`;
    const response = await /** @type {{ ASSETS: { fetch: typeof fetch } }} */
    env.ASSETS.fetch(
      url
    );
    if (!response.ok) {
      throw new Error(
        `read(...) failed: could not fetch ${url} (${response.status} ${response.statusText})`
      );
    }
    return response.body;
  }, "read")
});
var worker_default = {
  /**
   * @param {Request} req
   * @param {{ ASSETS: { fetch: typeof fetch } }} env
   * @param {ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(req, env2, ctx) {
    if (!origin) {
      origin = new URL(req.url).origin;
      await initialized;
    }
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r22(req);
    if (res) return res;
    let { pathname, search } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.slice(base_path.length + 1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {
      res = await env2.ASSETS.fetch(req);
    } else if (location && prerendered.has(location)) {
      if (search) location += search;
      res = new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    } else {
      res = await server.respond(req, {
        platform: {
          env: env2,
          ctx,
          context: ctx,
          // deprecated in favor of ctx
          // @ts-expect-error webworker types from worktop are not compatible with Cloudflare Workers types
          caches,
          // @ts-expect-error the type is correct but ts is confused because platform.cf uses the type from index.ts while req.cf uses the type from index.d.ts
          cf: req.cf
        },
        getClientAddress() {
          return (
            /** @type {string} */
            req.headers.get("cf-connecting-ip")
          );
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c(req, res, ctx) : res;
  }
};
init_checked_fetch();
var drainBody = /* @__PURE__ */ __name2(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
init_checked_fetch();
function reduceError(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError(e3.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e3) {
    const error2 = reduceError(e3);
    return Response.json(error2, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;
init_checked_fetch();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head2, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head2(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller2 = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller2, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller2 = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller2);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-txRYVd/z07v2xv5eoi.js
var define_ROUTES_default = {
  version: 1,
  description: "Generated by @sveltejs/adapter-cloudflare",
  include: [
    "/*"
  ],
  exclude: [
    "/_app/immutable/*",
    "/_app/version.json",
    "/availability/defaults.json",
    "/availability/timezones.json",
    "/cache-warming.json",
    "/favicon.png",
    "/favicon.svg",
    "/screenshot.png"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env2, context2) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env2.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env2, context2);
      }
    }
    return env2.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError2(e3.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e3) {
    const error2 = reduceError2(e3);
    return Response.json(error2, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-Ye7rNY/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env2, ctx, dispatch, middlewareChain) {
  const [head2, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head2(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env2, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-Ye7rNY/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller2 = new __Facade_ScheduledController__2(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller2, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller2 = new __Facade_ScheduledController__2(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller2);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=z07v2xv5eoi.js.map
