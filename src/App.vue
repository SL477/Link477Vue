<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import Main from './components/Main.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <p>What I did following along to <a href="https://www.freecodecamp.org/news/build-a-portfolio-with-vuejs/">FreeCodeCamp VueJS tutorial</a></p>
  <Main></Main> -->
  <!-- Create a router link using the 'router-link' component and set the path using the 'to' attribute -->
  <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/projects">Projects</router-link>
        </nav>
    </header>

    <!--Render the component for the corresponding router-->
    <router-view></router-view>
</template>

<style scoped>
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
