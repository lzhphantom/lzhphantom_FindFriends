<template>
  <form action="/">
    <van-search
        v-model="search"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>
  <van-space wrap style="padding:0 10px">
    <van-tag v-for="item in activeIds" :key="item" closeable size="large" type="primary" @close="close(item)">
      {{ item }}
    </van-tag>
  </van-space>
  <div v-if="activeIds.length===0">请选择标签</div>
  <van-divider content-position="left">标签组</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>
<script setup lang="ts">
import {ref} from "vue";

const close = (item: any) => {
  activeIds.value = activeIds.value.filter(id => id !== item)
};
const search = ref('');
const onSearch = () => {
  tagList.value = originTagList.map(parentTag => {
    const temp = [...parentTag.children];
    const tempParent = {...parentTag}
    tempParent.children = temp
        .filter(item => item.text.includes(search.value))
    return tempParent;
  })
};
const onCancel = () => {
  search.value = '';
  tagList.value = originTagList;
};


const activeIds = ref([]);
const activeIndex = ref(0);
const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
      {text: '大四', id: '大四'},
    ],
  },
  {
    text: '语言',
    children: [
      {text: '中文', id: '中文'},
      {text: '英文', id: '英文'},
    ],
  },
];
const tagList = ref(originTagList);
</script>
<style scoped>

</style>