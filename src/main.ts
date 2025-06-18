import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI'
import { clickOutside } from '@/directives/clickOutside';


const app = createApp(App);

app.directive('click-outside', clickOutside);

components.forEach(component => {
  app.component(component.name as string, component);
});

app.use(router);
app.use(store);
app.mount('#app');
