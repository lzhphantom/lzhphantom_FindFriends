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
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts">
import {useRoute} from "vue-router";
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
    showSuccessToast('登录成功')
    const url = route.query?.redirect as string ?? '/'
    window.location.href = url
  } else {
    showFailToast('登录失败')
  }
};
</script>
<style scoped>

</style>