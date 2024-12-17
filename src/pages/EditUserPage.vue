<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-if="editUser.editKey!=='gender'"
                 v-model="editUser.editValue"
                 :name="editUser.editKey"
                 :label="editUser.label"
                 :placeholder="`请输入${editUser.label}`"
                 :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field v-if="editUser.editKey==='gender'" :name="editUser.editKey" :label="editUser.label">
        <template #input>
          <van-radio-group v-model="editUser.editValue" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="0">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
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
import {getCurrentUser} from "../services/user.ts";
import {updateUserUsingPost} from "../api/userController.ts";

const route = useRoute();
const editUser = ref({
  editKey: route.query.key,
  editValue: route.query.value,
  label: route.query.label,
})
const router = useRouter();
let currentUser = {};
const onSubmit = async () => {
  const res = await updateUserUsingPost({
    id: currentUser.id,
    [editUser.value.editKey]: editUser.value.editValue
  })
  if (res.code === 0 && res.data) {
    router.back();
  }
};

onMounted(async () => {
  currentUser = await getCurrentUser();
})
</script>
<style scoped>

</style>