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
import request from "../plugins/request.ts";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {showFailToast, showSuccessToast} from "vant";

const data = ref({
  username: '',
  password: ''
})
const router = useRouter();
const onSubmit = async () => {
  const res = await request.post('/user/login', data.value)
  console.log(res);
  if (res.code===0 && res.data){
    showSuccessToast('登录成功')
    router.push("/")
  }else {
    showFailToast('登录失败')
  }
};
</script>
<style scoped>

</style>