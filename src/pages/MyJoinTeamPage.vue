<template>
  <div id="myJoinTeamPage">
    <van-search
        v-model="search.searchText"
        placeholder="请输入搜索队伍"
        @search="onSearch"
        clearable
        @clear="onSearch"
    >
    </van-search>
    <team-card-list :team-list="teamList" />
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
  const res = await request.get('/team/list/my/join')
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
#myJoinTeamPage {
  padding: 20px;
}
</style>