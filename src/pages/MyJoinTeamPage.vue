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
    <team-card-list :team-list="teamList" @reload-list="loadList"/>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {TeamType} from "../models/team";
import {showFailToast} from "vant";
import TeamCardList from "../components/TeamCardList.vue";
import {listMyJoinTeamUsingGet} from "../api/teamController.ts";

const search = ref({
  searchText:''
})
const onSearch = () => {
  loadList(search.value)
}
const teamList = ref<TeamType[]>([])
const loadList = async (payload={}) => {
  const res = await listMyJoinTeamUsingGet(payload)
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