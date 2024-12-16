<template>
  <van-cell center title="心动模式">
    <template #right-icon>
      <van-switch v-model="matched" @change="doMatch"/>
    </template>
  </van-cell>
  <user-card-list :user-list="userList" :loading="loading"/>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import request from "../plugins/request.ts";
import {showFailToast, showSuccessToast} from "vant";
import {UserType} from "../models/user";
import UserCardList from "../components/UserCardList.vue";

const matched = ref(false)
const userList = ref<UserType[]>([])

const recommend = async () => {
  const result = await request.get('/user/recommend',{
    params:{
      pageSize:20,
      pageNum:1
    }
  })
  result.data.records.forEach(item=>{
    item.tags = JSON.parse(item.tags)
  })
  userList.value = result.data.records;
}
onMounted(() => {
  loading.value = true
  recommend()
  loading.value = false
})

const loading = ref(true)

const doMatch = async () => {
  loading.value = true
  if (!matched.value){
    await recommend()
    loading.value = false
    return
  }
  const res = await request.get('/user/match',{
    params:{
      num:10
    }
  })
  if (res.code === 0 && res.data) {
    res.data.forEach(item=>{
      item.tags = JSON.parse(item.tags)
    })
    userList.value = res.data
  } else {
    showFailToast('匹配失败')
  }
  loading.value = false
}
</script>
<style scoped>

</style>