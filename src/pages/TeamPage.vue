<template>
  <div id="teamPage">
    <van-button type="primary" size="large" @click="doJoinTeam">
      创建队伍
    </van-button>
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

const router = useRouter()
const doJoinTeam = () => {
  router.push({
    path: '/team/add'
  })
}
const teamList = ref<TeamType[]>([])
const loadList = async () => {
  const res = await request.post('/team/list', {})
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
</style>