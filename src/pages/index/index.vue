<template>
  <div class="m-index">
     <div class="m-index-btns">
        <van-button
          :text="dateText"
          color="#025CEA"
          round
          @click="showCustomDateDialog"
        />
        <van-button
          text="vant的Tabs切换onload失效"
          color="#7232dd"
          round
          @click="openTabsDemo"
        />
        <div class="openLaunchApp">
          <van-button
            text="H5跳转小程序"
            type="primary"
            round
          />
          <OpenLaunchApp />
        </div>
        <van-button
          text="H5与小程序联合登录"
          type="warning"
          round
          @click="openUnitLoginDemo"
        />
        <van-button
          text="数字与汉字不同字号底对齐"
          type="danger"
          round
          @click="openBottomDemo"
        />
     </div>
     <CustomDateDialog
        :show="isShowCustomDateDialog"
        @close="closeCustomDateDialog"
     />
     
  </div>
</template>
<script>
// 首页-高光功能合集
// 1. vant改装日历组件
// 2. vant的Tabs组件切换onload失效
// 3. H5跳转小程序
// 4. H5与小程序联合登录
// 5. 数字和汉字不同字号的底部对齐

import CustomDateDialog from '@/components/CustomDateDialog';
import OpenLaunchApp from '@/components/OpenLaunchApp'

export default {
  name: 'index',
  components: {
    CustomDateDialog,
    OpenLaunchApp
  },
  data() {
    return {
      dateText: 'vant自定义日期组件',
      isShowCustomDateDialog: false // 显示自定义日历弹窗
    };
  },
  mounted() {
    
  },
  methods: {
    // 显示自定义日历弹窗
    showCustomDateDialog() {
      this.isShowCustomDateDialog = true;
    },
    closeCustomDateDialog(date) {
      this.dateText = date;
      this.isShowCustomDateDialog = false;
    },
    // 跳转到tabs页面
    openTabsDemo() {

    },
    // 跳转到H5与小程序联合登录页面
    openUnitLoginDemo() {

    },
    // 跳转到数字和汉字不同字号的底部对齐的页面
    openBottomDemo() {

    }
  }
};
</script>

<style lang="less" scoped>
.m-index {
  position: relative;
  &-btns {
    display: inline-grid;
    .van-button {
      margin: 15px 0 0;
      width: 100%;
    }
    .openLaunchApp {
      position: relative;
    }
  }
}
</style>
