<template>
  <van-cell title="当前用户" :value="user?.username"/>
  <van-cell title="修改信息" is-link to="/user/update"/>
  <van-cell title="我管理的队伍" is-link to="/team/create"/>
  <van-cell title="我加入的队伍" is-link to="/team/join"/>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserType} from "../models/user";
import {useRouter} from "vue-router";
import request from "../plugins/request.ts";
import {showFailToast} from "vant";
import {getCurrentUser} from "../services/user.ts";

const user = ref<UserType>({
})
const router = useRouter();


onMounted(async () => {
  user.value = await getCurrentUser();
})
</script>
<style scoped>

</style>