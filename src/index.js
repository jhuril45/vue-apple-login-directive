import directive from "./directive";
// import appleApi from "./appleApi.js";
const api_script = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'

let appleSignInAPI = document.createElement("script");
appleSignInAPI.setAttribute(
  "src",
  api_script
);
document.head.appendChild(appleSignInAPI);
// eval(appleApi)

const plugin = {
  install(Vue) {
    Vue.directive("apple-login", directive);
  },
  directive,
};

export default plugin;
