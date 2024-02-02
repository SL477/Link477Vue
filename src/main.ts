import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import Main from './components/Main.vue';
import Projects from './components/Projects.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// createApp(App).mount('#app')

const routes = [
    {path: '/', name: "Main", component: Main},
    {path: '/projects', name: "Projects", component: Projects},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

createApp(App).use(router).mount('#app');
