<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="data.username"
          name="username"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="data.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-space direction="vertical" fill>
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
        <van-button round block type="primary" @click="toRegister">
          没有账号？点我注册
        </van-button>
      </van-space>

    </div>
  </van-form>
</template>
<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import {showFailToast, showSuccessToast} from "vant";
import {doLoginUsingPost} from "../api/userController.ts";

const data = ref({
  username: '',
  password: ''
})
const route = useRoute();
const onSubmit = async () => {
  const res = await doLoginUsingPost(data.value)
  console.log(res);
  if (res.code === 0 && res.data) {
    const url = route.query?.redirect as string ?? '/'
    window.location.href = url
  } else {
    showFailToast('登录失败')
  }
};
const router = useRouter()
const toRegister = () => {
  router.push('/user/register')
}
</script>
<style scoped>

</style>