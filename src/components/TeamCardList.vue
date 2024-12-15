<template>
  <div class="team-card-list">
    <van-card
        v-for="item in props.teamList"
        :desc="item.description"
        :title="item.name+'('+teamStatusEnum[item.status]+')'"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    >
      <template #tags>
        <van-space wrap>
          <van-tag plain :type="item.ownerUserId===user.id?'danger':'primary'" v-for="user in item.userList">
            {{ user.username }}{{ item.ownerUserId === user.id ? '(队长)' : '' }}
          </van-tag>
        </van-space>
      </template>

      <template #bottom>
        <div>
          男女比例：{{
            item.userList.filter(user => user.gender === 1).length
          }}:{{ item.userList.filter(user => user.gender === 0).length }}
        </div>
        <div>队伍人数：{{ item.userList.length }} / {{ item.maxNum }}</div>
        <div>过期时间：{{ dayjs(item.expireTime).format('YYYY-MM-DD') }}</div>
      </template>
      <template #footer>
        <van-button size="mini" type="success" @click="doJoinTeam(item)">加入队伍</van-button>
        <van-button size="mini" type="primary">查看详情</van-button>
        <van-button size="mini" type="danger">举报</van-button>
      </template>
    </van-card>
    <van-empty image="search" description="暂无数据" v-if="teamList.length===0"/>
    <van-dialog v-model:show="show" title="加密房间" show-cancel-button @confirm="doJoinTeamByPass" @open="temp.password=''">
      <template #default>
        <van-field v-model="temp.password" label="密码" placeholder="请输入密码" type="password"/>
      </template>
    </van-dialog>

  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {TeamType} from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
import dayjs from "dayjs";
import request from "../plugins/request.ts";
import {showFailToast, showSuccessToast} from "vant";

interface TeamCardListProps {
  teamList: TeamType[]
}

let props = withDefaults(defineProps<TeamCardListProps>(), {
  teamList: []
});
onMounted(() => {
})
const show = ref(false);
const temp = ref({
  password: ''
})
const doJoinTeam = async (item: TeamType) => {
  if (item.status === 2) {
    temp.value.id = item.id
    show.value = true
    return
  }
  const res = await request.post('/team/join', {id: item.id})
  if (res.code === 0 && res.data) {
    showSuccessToast('加入队伍成功')
  } else {
    showFailToast('加入队伍失败')
  }
}
const doJoinTeamByPass = async () => {
  if (temp.value.password.length === 0) {
    showFailToast('请输入密码')
    return
  }
  const res = await request.post('/team/join', temp.value)
  if (res.code === 0 && res.data) {
    showSuccessToast('加入队伍成功')
  } else {
    showFailToast('加入队伍失败')
  }
}
</script>
<style scoped>
.team-card-list :deep(.van-image img) {
  height: 128px !important;
}
</style>