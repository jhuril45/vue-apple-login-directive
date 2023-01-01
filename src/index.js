import directive from "./directive";
import appleApi from "./appleApi.js";

eval(appleApi)

const plugin = {
  install(Vue) {
    Vue.directive("apple-login", directive);
  },
  directive,
};

export default plugin;
