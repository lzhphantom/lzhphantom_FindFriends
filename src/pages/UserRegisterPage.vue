<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="data.userAccount"
          name="username"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账户' }]"
      />
      <van-field
          v-model="data.username"
          name="username"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
          v-model="data.userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="data.checkPassword"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="请确认密码"
          :rules="[{ required: true, message: '请确认密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-space direction="vertical" fill>
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
        <van-button round block type="primary" @click="toLogin">
          有账号？去登录
        </van-button>
      </van-space>
    </div>
  </van-form>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import {showFailToast} from "vant";
import {userRegisterUsingPost} from "../api/userController.ts";

const data = ref<API.UserRegisterRequest>({})
const router = useRouter()
const onSubmit = async () => {
  if (data.value.userPassword !== data.value.checkPassword) {
    showFailToast('两次密码不一致')
    return
  }
  const res = await userRegisterUsingPost(data.value)
  console.log(res);
  if (res.code === 0 && res.data) {
    await router.push({
      path: '/user/login',
      replace: true
    })
  } else {
    showFailToast('注册失败')
  }
};
const toLogin = () => {
  router.push('/user/login')
}
</script>
<style scoped>

</style>