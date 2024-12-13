<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.editValue"
          :name="editUser.editKey"
          :label="editUser.label"
          :placeholder="`请输入${editUser.label}`"
          :rules="[{ required: true, message: '请填写用户名' }]"
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
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import request from "../plugins/request.ts";
import {showSuccessToast} from "vant";
import {getCurrentUser} from "../services/user.ts";

const route = useRoute();
const editUser = ref({
  editKey: route.query.key,
  editValue: route.query.value,
  label: route.query.label,
})
const router = useRouter();
let currentUser;
const onSubmit = async () => {
  const res = await request.post('/user/update', {
    id: currentUser.id,
    [editUser.value.editKey]: editUser.value.editValue
  })
  if (res.code === 0 && res.data) {
    showSuccessToast('修改成功')
    router.back();
  }
};

onMounted(async () => {
  currentUser = await getCurrentUser();
  console.log(currentUser)
})
</script>
<style scoped>

</style>