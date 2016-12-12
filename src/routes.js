import Home from './Home.vue';
import Boxes from './boxes/BoxesIndex.vue';
import Notebook from './notebook/NotebookIndex.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/boxes', component: Boxes },
    { path: '/notebook', component: Notebook }
];