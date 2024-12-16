import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {
    Col, Icon, NavBar, Row, Tabbar, TabbarItem, Image, Button, Card, Empty, Toast, Field
    , Tag, Divider, TreeSelect, Space, Cell, CellGroup, Skeleton,
    SkeletonTitle, SkeletonImage, SkeletonAvatar, SkeletonParagraph,
    DatePicker, Popup, RadioGroup, Radio, Slider, Dialog, Loading
} from "vant";
import 'vant/lib/index.css';
import router from "./router";

const app = createApp(App);
app.use(NavBar).use(Icon).use(Space).use(Cell)
    .use(CellGroup).use(Image).use(Button)
    .use(Skeleton).use(SkeletonTitle)
    .use(SkeletonImage).use(SkeletonAvatar).use(SkeletonParagraph)
    .use(Field).use(DatePicker).use(Popup)
    .use(RadioGroup).use(Radio).use(Slider)
    .use(Card).use(Empty).use(Toast).use(Dialog)
    .use(Tabbar).use(TabbarItem).use(Row)
    .use(Col).use(Tag).use(Divider).use(Loading)
    .use(TreeSelect);
app.use(router)
app.mount('#app');
