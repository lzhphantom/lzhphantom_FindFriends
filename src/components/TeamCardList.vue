<template>
  <div class="team-card-list">
    <van-card
        v-for="item in props.teamList"
        :desc="item.description"
        :title="item.name+'('+teamStatusEnum[item.status]+')'"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    >
      <template #tag>
        <van-tag :type="item.status===0?'primary':'danger'">{{teamStatusEnum[item.status]}}</van-tag>
      </template>
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
        <van-button
            v-if="(currentUser.id !== item.ownerUserId) && !(item.userList.find(user => user.id === currentUser.id))"
            size="mini" type="success" @click="doJoinTeam(item)">
          加入队伍
        </van-button>
        <van-button size="mini" type="primary">查看详情</van-button>
        <van-button size="mini" type="warning" @click="toUpdate(item.id)" v-if="currentUser.id === item.ownerUserId">
          更新队伍
        </van-button>
        <van-button size="mini" type="danger" v-if="currentUser.id === item.ownerUserId" @click="deleteTeam(item.id)">
          解散队伍
        </van-button>
        <van-button size="mini" type="danger" v-if="item.userList.find(user => user.id === currentUser.id)"
                    @click="quitTeam(item.id)">退出队伍
        </van-button>
      </template>
    </van-card>
    <van-empty image="search" description="暂无数据" v-if="teamList.length===0"/>
    <van-dialog v-model:show="show" title="加密房间" show-cancel-button @confirm="doJoinTeamByPass"
                @open="temp.password=''">
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
import {showFailToast} from "vant";
import {getCurrentUser} from "../services/user.ts";
import router from "../router";
import {deleteTeamUsingPost, joinTeamUsingPost, quitTeamUsingPost} from "@/api/teamController.ts";

interface TeamCardListProps {
  teamList: TeamType[]
}
const emit = defineEmits(['reload-list'])
const currentUser = ref({})
let props = withDefaults(defineProps<TeamCardListProps>(), {
  teamList: []
});
onMounted(async () => {
  currentUser.value = await getCurrentUser()
})
const show = ref(false);
const temp = ref({
  password: ''
})
/**
 * 加入队伍
 * @param item
 */
const doJoinTeam = async (item: TeamType) => {
  if (item.status === 2) {
    temp.value.id = item.id
    show.value = true
    return
  }
  const res = await joinTeamUsingPost({id: item.id})
  if (res.code === 0 && res.data) {
    emit('reload-list')
  } else {
    showFailToast('加入队伍失败')
  }
}
/**
 * 加入加密队伍
 */
const doJoinTeamByPass = async () => {
  if (temp.value.password.length === 0) {
    showFailToast('请输入密码')
    return
  }
  const res = await joinTeamUsingPost(temp.value)
  if (res.code === 0 && res.data) {
    emit('reload-list')
  } else {
    showFailToast('加入队伍失败')
  }
}
/**
 * 去更新队伍
 * @param id
 */
const toUpdate = (id: number) => {
  router.push({
    path: '/team/update',
    query: {
      id: id
    }
  })
}
/**
 * 删除队伍
 * @param id
 */
const deleteTeam = async (id: number) => {
  const res = await deleteTeamUsingPost({id: id})
  if (res.code === 0 && res.data) {
    emit('reload-list')
  } else {
    showFailToast('删除队伍失败')
  }
}
/**
 * 退出队伍
 * @param id
 */
const quitTeam = async (id: number) => {
  const res = await quitTeamUsingPost({id: id})
  if (res.code === 0 && res.data) {
    emit('reload-list')
  } else {
    showFailToast('退出队伍失败')
  }
}
</script>
<style scoped>
.team-card-list :deep(.van-image img) {
  height: 128px !important;
}
</style>