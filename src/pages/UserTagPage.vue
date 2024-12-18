<template>
  <div id="user-tag-page">
    <van-search
        v-model="search"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
    />

    <van-divider content-position="left">已选标签</van-divider>
    <van-space wrap style="padding:0 10px">
      <van-tag v-for="item in activeIds" :key="item" closeable size="large" type="primary" @close="close(item)">
        {{ item }}
      </van-tag>
    </van-space>
    <div v-if="activeIds.length===0" class="select-tag-placeholder">请选择标签</div>
    <div class="change-btn" v-else >
      <van-button type="primary" size="large" @click="changeTag">修改标签</van-button>
    </div>

    <van-divider content-position="left">标签组</van-divider>
    <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="tagList"
        :max="10"
    />


  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {listTagTreeUsingGet} from "@/api/tagController.ts";
import {getUserTagsUsingGet, updateUserTagsUsingGet} from "@/api/userController.ts";
import router from "@/router";
import qs from 'qs';

const tagList = ref<API.TagTreeVo[]>();
const close = (item: any) => {
  activeIds.value = activeIds.value.filter(id => id !== item)
};
const search = ref('');
const onSearch = () => {
  loadTagTree({tagName: search.value})
};

const activeIds = ref([]);
const activeIndex = ref(0);
const loadTagTree = async (params = {}) => {
  const res = await listTagTreeUsingGet(params);
  if (res.code === 0 && res.data) {
    tagList.value = res.data
  }
}
onMounted(() => {
  refresh()
})

const refresh = ()=>{
  loadTagTree()
  getUserTag()
}

const getUserTag = async()=>{
  const res = await getUserTagsUsingGet()
  if(res.code===0 && res.data){
    activeIds.value = res.data
  }
}
const changeTag = async ()=>{
  const res = await updateUserTagsUsingGet({tags: activeIds.value},{
    paramsSerializer: (params) => {
      return qs.stringify(params,{indices:false})
    }
  })
  if(res.code===0 && res.data){
    router.back()
  }
}
</script>
<style scoped>
.select-tag-placeholder {
  text-align: center;
  color: #959494;
  font-size: 14px;
  font-weight: bolder;
}
.change-btn{
 padding: 10px 20px;
}
</style>