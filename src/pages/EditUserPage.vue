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
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute();
const editUser = ref({
  editKey: route.query.key,
  editValue: route.query.value,
  label: route.query.label,
})
const onSubmit = (values) => {
  console.log('submit', values);
};

onMounted(()=>{

})
</script>
<style scoped>

</style>