<template>
  <wx-open-launch-weapp
    style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
    :username="username"
    :path="path"
  >
    <script type="text/wxtag-template">
      <style>
        .btn {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      </style>
      <button class="btn"></button>
    </script>
  </wx-open-launch-weapp>
</template>

<script>
// 公众号跳转小程序
// import wxSDK from 'weixin-js-sdk'

export default {
  name: 'openLaunchApp',
  props: {},
  data () {
    return {
      username: '', // 小程序原始id, 要区分环境，测试和线上是不一样的
      path: '' // 小程序地址
    }
  },
  created () {
    // 处理参数
    this.getUrlParams()
  },
  mounted () {
    // 微信配置部分
    this.getWxConfig()
  },
  methods: {
    // 处理参数
    getUrlParams () {
     
    },
    // 微信配置部分
    getWxConfig () {
     
    }
  }
}
</script>

<style lang="less" scoped></style>
