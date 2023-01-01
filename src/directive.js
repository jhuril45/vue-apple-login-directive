import { directiveHooks } from "./utils";

let auth2 = null;

async function login(value) {
  try {
    const data = await window.AppleID.auth.signIn();
    value.OnSuccess(data);
  } catch (error) {
    value.Onfail(error);
  }
}

function CheckComponentMethods(value) {
  if (!value.OnSuccess) {
    throw new Error(
      "The method OnSuccess must be passed"
    );
  }

  if (!value.Onfail) {
    throw new Error(
      "The method Onfail must be passed"
    );
  }
}

function initLogin(el, value) {
  CheckComponentMethods(value);

  window.AppleID.auth.init({
    clientId: value.clientId,
    scope: value.scope,
    redirectURI: value.redirectURI,
    state: value.state || "origin:web",
    usePopup: value.usePopup !== null ? value.usePopup : true,
  });

  el.removeEventListener("click", () => login(value));
  el.addEventListener("click", () => login(value));
}

function bind(el, { value }) {
  initLogin(el, value);
}

function unbind(el, { value }) {
  el.removeEventListener("click", () => login(value));
}

function update(el, { value, oldValue }) {
  initLogin(el, value);
}

const directive = {
  [directiveHooks.mounted]: bind,
  [directiveHooks.updated]: update,
  [directiveHooks.unmounted]: unbind,
};

export default directive;