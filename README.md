# v-apple-login
A simple Vue directive to include Apple Login Button behavior in any component.

## Install

```bash
$ npm install --save vue-apple-login-directive
```

```bash
$ yarn add vue-apple-login-directive
```

## Vue2

```js
import Vue from 'vue'
import vAppleLogin from 'vue-apple-login-directive'

Vue.use(vAppleLogin)
```


## Vue 3

```js
import vAppleLogin from 'vue-apple-login-directive'
import { ref } from "vue";

<script setup>
  const appleSettings = ref({
    clientId: "apple_client_id",
    scope: "name email",
    redirectURI: "https://dev.well-scape.com/login",
    state: "origin:web",
    OnSuccess: appleCallBackSuccess,
    Onfail: appleCallBackError,
  });

  function appleCallBackSuccess(data) {
    console.log('appleCallBackSuccess', data);
  }

  function appleCallBackError(error) {
    console.log('appleCallBackError', error);
  }
</script>

<template>
  <div v-apple-login="appleSettings"></div>
</template>
```


> Looking for the [Google counterpart](https://github.com/jhuril45/vue-google-login-directive)?

## License

MIT © [Jhuril Bandola](https://github.com/jhuril45)