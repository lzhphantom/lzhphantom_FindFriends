<template>
  <van-skeleton v-for="item in props.userList" title avatar :row="3" :loading="props.loading">
    <van-card
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
  </van-skeleton>
</template>
<script setup lang="ts">
import {UserType} from "../models/user";
import {onMounted} from "vue";

interface UserCardListProps {
  loading: true,
  userList: UserType[]
}

let props = withDefaults(defineProps<UserCardListProps>(), {
  userList: []
});
onMounted(() => {
})
</script>
<style scoped>

</style>