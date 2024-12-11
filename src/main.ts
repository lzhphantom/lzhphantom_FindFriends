import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {Col, Icon, NavBar, Row, Tabbar, TabbarItem, Image
    ,Tag, Divider, TreeSelect, Space, Cell, CellGroup} from "vant";
import 'vant/lib/index.css';
import router from "./router";

const app = createApp(App);
app.use(NavBar).use(Icon).use(Space).use(Cell)
    .use(CellGroup).use(Image)
    .use(Tabbar).use(TabbarItem).use(Row)
    .use(Col).use(Tag).use(Divider)
    .use(TreeSelect);
app.use(router)
app.mount('#app');
