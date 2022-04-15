<template>
  <el-button :plain="true" @click="open2">成功</el-button>
</template>

<script>
export default {
  name: "Message",
  methods: {
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
  },
};
</script>
