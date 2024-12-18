<template>
  <van-cell title="当前用户" :value="user?.username"/>
  <van-cell title="修改信息" is-link to="/user/update"/>
  <van-cell title="我管理的队伍" is-link to="/team/create"/>
  <van-cell title="我加入的队伍" is-link to="/team/join"/>
  <div class="user-page-button">
    <van-space direction="vertical" fill>
      <van-button type="danger" size="large" @click="doExit()">退出</van-button>
      <van-button v-if="user?.role === 1" type="success" size="large" @click="toTagManage()">管理标签</van-button>
    </van-space>

  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {showConfirmDialog} from "vant";
import {userLogoutUsingPost} from "@/api/userController.ts";
import {useRouter} from "vue-router";

const router = useRouter()
const user = ref<API.User>({})
const doExit = () => {
  showConfirmDialog({
    title: '退出',
    message:
        '是否退出登录？',
  })
      .then(async () => {
        // on confirm
        const res = await userLogoutUsingPost()
        if (res.code === 0 && res.data){
          await router.push({
            path:'/user/login',
            replace: true
          })
        }
      })
      .catch(() => {
        // on cancel
      });
}

onMounted(async () => {
  user.value = await getCurrentUser();
})

const toTagManage = () => {
  if(user.value.role === 1){
    router.push({
      path:'/admin/tag'
    })
  }
}
</script>
<style scoped>
.user-page-button{
  padding: 10px 20px;
}
</style>