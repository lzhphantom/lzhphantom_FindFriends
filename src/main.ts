import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {Col, Icon, NavBar, Row, Tabbar, TabbarItem} from "vant";
import 'vant/lib/index.css';

const app = createApp(App);
app.use(NavBar).use(Icon)
    .use(Tabbar).use(TabbarItem).use(Row)
    .use(Col)
app.mount('#app');
