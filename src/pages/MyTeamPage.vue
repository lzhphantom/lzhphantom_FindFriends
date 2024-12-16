<template>
  <div id="myTeamPage">
    <van-search
        v-model="search.searchText"
        placeholder="请输入搜索队伍"
        @search="onSearch"
        clearable
        @clear="onSearch"
    >
    </van-search>
    <van-button type="primary" size="large" @click="doJoinTeam">
      创建队伍
    </van-button>
    <team-card-list :team-list="teamList"/>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import request from "../plugins/request.ts";
import {TeamType} from "../models/team";
import {showFailToast} from "vant";
import TeamCardList from "../components/TeamCardList.vue";

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
const teamList = ref<TeamType[]>([])
const loadList = async (payload={}) => {
  const res = await request.get('/team/list/my/create')
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
#myTeamPage {
  padding: 20px;
}
</style>