<template>
  <van-card
      v-for="item in userList"
      :desc="item.profile"
      :title="item.username"
      :thumb="item.avatarUrl"
      :tag="item.gender"
  >
    <template #tags>
      <van-space wrap>
        <van-tag plain type="primary" v-for="tag in item.tags">{{ tag }}</van-tag>
      </van-space>

    </template>
    <template #footer>
      <van-button size="mini" type="success">关注</van-button>
      <van-button size="mini" type="primary">联系我</van-button>
    </template>
  </van-card>
  <van-empty image="search" description="暂无数据" v-if="userList.length===0"/>
</template>
<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {UserType} from "../models/user";
import request from "../plugins/request.ts";
import {Toast} from "vant";

const route = useRoute()
const {tags} = route.query
onMounted(async () => {
  const result = await request.post('/user/search/tags', {
    tagList: tags
  }).then((res) => {
    return res;
  }).catch((err) => {
    Toast.fail('请求是吧')
  })
  result.data.records.forEach(item => {
    item.tags = JSON.parse(item.tags)
  })
  userList.value = result.data.records;
})
const userList = ref<UserType[]>([])
</script>
<style scoped>

</style>