<template>
  <div id="teamAddPage">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="data.name"
            name="name"
            label="队伍名"
            placeholder="请输入队伍名"
            :rules="[{ required: true, message: '请填写队伍名' }]"
        />
        <van-field
            v-model="data.description"
            rows="4"
            autosize
            type="textarea"
            name="description"
            label="描述"
            placeholder="请输入队伍描述"
        />
        <van-field
            v-model="data.expireTime"
            is-link
            readonly
            name="expireTime"
            label="队伍过期时间"
            placeholder="点击选择时间"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" destroy-on-close position="bottom">
          <van-date-picker
              :model-value="pickerValue"
              :min-date="new Date()"
              @confirm="onConfirm"
              @cancel="showPicker = false"
          />
        </van-popup>
        <van-field name="slider" label="队伍最大人数">
          <template #input>
            <van-slider v-model="data.maxNum" :min="2" :max="20"/>
          </template>
          <template #button>
            <van-button size="mini" type="success" disabled>{{ data.maxNum }}</van-button>
          </template>
        </van-field>
        <van-field name="radio" label="队伍类型">
          <template #input>
            <van-radio-group v-model="data.status" direction="horizontal">
              <van-radio :name="0">公开</van-radio>
              <van-radio :name="1">私有</van-radio>
              <van-radio :name="2">加密</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field v-if="Number(data.status)===2"
                   v-model="data.password"
                   type="password"
                   name="密码"
                   label="密码"
                   placeholder="请输入密码"
                   :rules="[{ required: Number(data.status)===2, message: '请输入密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          创建
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import request from "../plugins/request.ts";
import {showFailToast, showSuccessToast} from "vant";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import dayjs from "dayjs";


const data = ref({})

const showPicker = ref(false);
const pickerValue = ref([]);
const onConfirm = ({selectedValues}) => {
  data.value.expireTime = selectedValues.join('/');
  pickerValue.value = selectedValues;
  showPicker.value = false;
};
const route = useRoute()
onMounted(async ()=>{
  const res = await request.get('/team/get', {
    params:
        {id: route.query.id}
  })
  if (res.code === 0 && res.data){
    data.value = res.data
    data.value.expireTime = dayjs(data.value.expireTime).format('YYYY/MM/DD')
  }
})

const router = useRouter()
const onSubmit = async () => {
  if (data.value.status === 2 && data.value.password.length === 0) {
    showFailToast('请输入密码')
    return
  }

  data.value.expireTime = dayjs(data.value.expireTime).format('YYYY-MM-DDTHH:mm:ss')
  const res = await request.post('/team/update', data.value)
  if (res.code === 0 && res.data) {
    router.push({
      path: '/team',
      replace: true
    })
  } else {
    showFailToast('更新队伍失败')
  }
};
</script>
<style scoped>

</style>