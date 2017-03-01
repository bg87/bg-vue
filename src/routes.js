import Home from './Home.vue';
import Boxes from './boxes/BoxesIndex.vue';
import Key from './key/KeyIndex.vue';
import Overview from './key/KeyOverview.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/boxes', component: Boxes },
    { path: '/key', component: Key },
    { path: '/overview', component: Overview }
];