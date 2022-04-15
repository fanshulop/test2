<template>
  <div>
    <!-- vue指令-v-bind属性动态赋值 -->
    <a v-bind:href="url">我是a标签</a>
  </div>
</template>
 
<script>
export default {
  data() {
    // 格式固定, 定义vue数据之处
    return {
      // key相当于变量名
      url: "http://www.baidu.com",
    };
  },
};
</script>