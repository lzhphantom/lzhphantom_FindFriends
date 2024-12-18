<template>
  <form action="/">
    <van-search
        v-model="search"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
    >
      <template #action>
        <van-button round size="small" type="success" @click="searchUser">搜索</van-button>
        <van-divider vertical/>
        <van-button round size="small" @click="onCancel">取消</van-button>
      </template>
    </van-search>
  </form>

  <van-divider content-position="left">已选标签</van-divider>
  <van-space wrap style="padding:0 10px">
    <van-tag v-for="item in activeIds" :key="item" closeable size="large" type="primary" @close="close(item)">
      {{ item }}
    </van-tag>
  </van-space>
  <div v-if="activeIds.length===0" class="select-tag-placeholder">请选择标签</div>
  <van-divider content-position="left">标签组</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {listTagTreeUsingGet} from "@/api/tagController.ts";

const close = (item: any) => {
  activeIds.value = activeIds.value.filter(id => id !== item)
};
const search = ref('');
const onSearch = () => {
  loadTagTree({tagName:search.value})
};
const router = useRouter()
const searchUser = () => {
  router.push({
    path:'/user/list',
    query:{
      tags: activeIds.value
    }
  })
}
const onCancel = () => {
  search.value = '';
};


const activeIds = ref([]);
const activeIndex = ref(0);
const loadTagTree = async (params={})=>{
  const res = await listTagTreeUsingGet(params);
  if(res.code===0 && res.data){
    tagList.value = res.data
  }
}
onMounted(()=>{
  loadTagTree()
})

const tagList = ref<API.TagTreeVo[]>();
</script>
<style scoped>
.select-tag-placeholder{
  text-align: center;
  color: #959494;
  font-size: 14px;
  font-weight: bolder;
}
</style>