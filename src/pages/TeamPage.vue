<template>
  <div id="teamPage">
    <van-search
        v-model="search.searchText"
        placeholder="请输入搜索队伍"
        @search="onSearch"
        clearable
        @clear="onSearch"
    >
    </van-search>
    <van-button type="primary" icon="plus" @click="doJoinTeam" class="add-button">
    </van-button>
    <van-tabs v-model:active="active" @change="changeTab">
      <van-tab title="所有" name="all"/>
      <van-tab title="公开" name="public"/>
      <van-tab title="加密" name="encrypted"/>
    </van-tabs>
    <team-card-list :team-list="teamList" @reload-list="loadList(search)"/>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {TeamType} from "../models/team";
import {showFailToast} from "vant";
import TeamCardList from "../components/TeamCardList.vue";
import {listTeamsUsingPost} from "../api/teamController.ts";

const search = ref({
  searchText:''
})
const onSearch = () => {
  loadList(search.value)
}
const router = useRouter()
const doJoinTeam = () => {
  router.push({
    path: '/team/add'
  })
}
const active = ref('all')
const changeTab = (name: string) => {
  if (name === 'all'){
    loadList()
  }else {
    loadList({
      status: name === 'public' ? 0 : 2
    })
  }

}
const teamList = ref<TeamType[]>([])
const loadList = async (payload={}) => {
  const res = await listTeamsUsingPost(payload)
  if (res.code === 0 && res.data) {
    teamList.value = res.data
  } else {
    showFailToast('加载队伍列表失败')
  }

}
onMounted(() => {
  loadList()
})
</script>
<style scoped>
#teamPage {
  padding: 20px;
}
.add-button {
  position: fixed;
  bottom: 60px;
  right: 12px;
  border-radius: 50%;
  z-index: 100;
}
</style>