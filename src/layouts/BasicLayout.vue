<template>

  <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>


  <div id="content">
    <router-view/>
  </div>
  <van-tabbar @change="onChange" route>
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">

import {useRouter} from "vue-router";
import {ref} from "vue";
import {routes} from "../config";

const router = useRouter();

const DEFAULT_TITLE = 'lzhphantom交友'
const title = ref(DEFAULT_TITLE)
router.beforeEach((to,from,next)=>{
  const toPath = to.path
  const route = routes.find((item)=>{
    return item.path === toPath
  })
  title.value = route.title ?? DEFAULT_TITLE
  next()
})

const onClickLeft = () => history.back();
const onClickRight = () => {
  router.push({
    path: '/search'
  })
};
// const active = ref('index');
const onChange = (index) => console.log(`标签 ${index}`);
</script>

<style scoped>
#basic-layout {
  //width: 100vh;
}
#content{
  padding-bottom: 50px;
}
</style>