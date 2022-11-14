<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://quasar.dev/" target="_blank">
      <img height="40px" src="./assets/quasar.svg" class="logo SP" alt="SP logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img height="40px" src="./assets/pinia.svg" class="logo SP" alt="SP logo" />
    </a>
    <a href="https://github.com/axios/axios" target="_blank">
      <img height="40px" src="./assets/v3-dark.svg" class="logo SP" alt="SP logo" />
    </a>
    <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration" target="_blank">
      <img src="./assets/icons8-microsoft-sharepoint-2019-144.svg" class="logo SP" alt="SP logo" />
    </a>
    
  </div>
  <HelloWorld msg="Vite + Vue + Quasar + Pinia + Axios + SharePoint (Odata API)" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
