<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-if="editUser.editKey==='gender'" :name="editUser.editKey" :label="editUser.label">
        <template #input>
          <van-radio-group v-model="editUser.editValue" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="0">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-else-if="editUser.editKey==='avatarUrl'" :name="editUser.editKey"
                 :label="editUser.label">
        <template #input>
          <van-uploader v-model="fileList" :max-count="1" accept="image/*" :after-read="doUpload"/>
        </template>
      </van-field>
      <van-field v-else
                 v-model="editUser.editValue"
                 :name="editUser.editKey"
                 :label="editUser.label"
                 :placeholder="`请输入${editUser.label}`"
                 :rules="[{ required: true, message: '请填写用户名' }]"
      />

    </van-cell-group>
    <div style="margin: 16px;" v-if="editUser.editKey!=='avatarUrl'">
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

const fileList = ref([
  { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
]);
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
const doUpload = (file) => {
  console.log(file)
  editUser.value.editValue = file.file.raw.path
}
onMounted(async () => {
  currentUser = await getCurrentUser();
  console.log(editUser.value)
  if (editUser.value.editKey === 'avatarUrl' &&
      editUser.value.editValue !==null  && editUser.value.editValue !== ''){
    fileList.value = [{ url: editUser.value.editValue }];
  }
})
</script>
<style scoped>

</style>