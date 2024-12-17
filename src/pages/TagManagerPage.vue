<template>
  <div id="tag-manager-page">
    <van-button type="primary" size="large" @click="addTagParent">添加父标签</van-button>
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item v-for="tag in tagList" :name="tag.id">
        <template #title>
          <van-space>{{ tag.tagName }}
            <van-button icon="plus" size="mini" type="success" class="add-button" @click="addTagChild(tag.id)"/>
          </van-space>
        </template>
        <van-space wrap>
          <van-tag v-for="child in tag.children" type="primary" size="large" closeable @close="deleteTag(child.id)">
            {{ child.tagName }}
          </van-tag>
        </van-space>
      </van-collapse-item>
    </van-collapse>
    <van-dialog v-model:show="showFlag" title="添加标签" show-cancel-button @confirm="doAddTag"
                @open="temp.tagName=''">
      <template #default>
        <van-field v-model="temp.tagName" label="标签" placeholder="请输入标签"/>
      </template>
    </van-dialog>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {addTagUsingPost, deleteTagUsingPost, listTagUsingGet} from "@/api/tagController.ts";
import {showConfirmDialog} from "vant";

const activeNames = ref('')

const tagList = ref([])
const showFlag = ref(false)
const temp = ref<API.TagAddRequest>({})
onMounted(() => {
  loadList()
})

const loadList = async () => {
  const res = await listTagUsingGet();
  if (res.code === 0 && res.data) {
    tagList.value = convertToTree(res.data)
  }
}

const deleteTag = (id: number) => {
  showConfirmDialog({
    title: '删除标签',
    message: '确定删除该标签吗？',
  }).then(async () => {
    const res = await deleteTagUsingPost({id})
    if (res.code === 0 && res.data) {
      await loadList()
    }
  }).catch(() => {
    // on cancel
  });

}
const addTagChild = async (id: number) => {
  showFlag.value = true;
  temp.value.parentId = id
}

const addTagParent = () => {
  showFlag.value = true;
  temp.value.isParent = 1
}

const doAddTag = async () => {
  const res = await addTagUsingPost(temp.value)
  if (res.code === 0 && res.data) {
    await loadList()
  }
  temp.value = {}
  showFlag.value = false
}

// 假设原始数据存储在一个名为flatData的数组中

const convertToTree = (data: API.TagVo[]) => {
  let map = {}, node, roots = [], i;

  // 将数据映射到id以便快速查找
  for (i = 0; i < data.length; i++) {
    map[data[i].id] = i; // id -> index in original array
    data[i].children = []; // 初始化 children 属性
  }

  for (i = 0; i < data.length; i++) {
    node = data[i];
    // 如果节点有一个父级，添加它作为父级的子项
    if (node.parentId !== null) {
      // 找到父节点并添加当前节点为其子节点
      data[map[node.parentId]].children.push(node);
    } else {
      // 没有父级意味着这是一个根节点
      roots.push(node);
    }
  }

  return roots;
}

</script>
<style scoped>
.add-button {
  width: 40px;
}
</style>