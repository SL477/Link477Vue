<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import Main from './components/Main.vue';
</script>

<template>
  
  <!--Render the component for the corresponding router-->
  <main class="page-content wrapper">
    <header>
      <nav>
          <router-link to="/">Home</router-link>&nbsp;
          <router-link to="/projects">Projects</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.page-content {
  padding: 30px 0;
  flex: 1;
}

main {
  display: block;
}

.wrapper {
    max-width: -webkit-calc(800px - (30px * 2));
    max-width: calc(800px - (30px * 2));
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
