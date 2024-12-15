


<template>
  <user-card-list :user-list="userList" />
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import request from "../plugins/request.ts";
import {showFailToast} from "vant";
import {UserType} from "../models/user";
import UserCardList from "../components/UserCardList.vue";

const userList = ref<UserType[]>([])
onMounted(async () => {
  const result = await request.get('/user/recommend',{
    params:{
      pageSize:20,
      pageNum:1
    }
  }).then((res) => {
    return res;
  }).catch((err) => {
    showFailToast('请求失败')
  })
  result.data.records.forEach(item=>{
    item.tags = JSON.parse(item.tags)
  })
  userList.value = result.data.records;
})
</script>
<style scoped>

</style>