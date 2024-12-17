<template>
  <van-cell title="用户名" is-link @click="edit('username','用户名',user.username)" :value="user.username"/>
  <van-cell title="账号" is-link @click="edit('loginAccount','账号',user.loginAccount)" :value="user.loginAccount"/>
  <van-cell title="头像" is-link @click="edit('avatarUrl','头像',user.avatarUrl)">
    <van-image
        round
        width="5rem"
        height="5rem"
        :src="user.avatarUrl"
    />
  </van-cell>
  <van-cell title="性别" is-link @click="edit('gender','性别',user.gender)" :value="user.gender===1?'男':'女'"/>
  <van-cell title="电话" is-link @click="edit('phone','电话',user.phone)" :value="user.phone"/>
  <van-cell title="邮箱" is-link @click="edit('email','邮箱',user.email)" :value="user.email"/>
  <van-cell title="注册时间" :value="dayjs(user.createTime).format('YYYY-MM-DD')"/>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserType} from "../models/user";
import {useRouter} from "vue-router";
import {getCurrentUser} from "../services/user.ts";
import dayjs from "dayjs";

const user = ref<UserType>({})
const router = useRouter();
const edit = (key: string, label: string, value: string) => {
  router.push({
    path: '/user/edit',
    query: {
      key,
      label,
      value
    }
  })
  console.log(key, value)
}

onMounted(async () => {
  user.value = await getCurrentUser();
})
</script>
<style scoped>

</style>