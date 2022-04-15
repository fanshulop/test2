<template>
  <div class="biggest">
    <div class="boxs" ref="box1" style="display: none"><Form1></Form1></div>
    <div class="wall" ref="wal" style="display: none"></div>

    <div class="main">
      <el-row>
        <el-button type="primary" class="btn1" ref="btn1" @click="v_on"
          >新建日程
        </el-button>
      </el-row>
      <div class="left">
        <div class="fixed">
          <Data1></Data1>
          <Selector></Selector>
        </div>
        ，，，，，，，，，，，，，，，，，，，，，
        <span class="text-span"> 自定义类型可在后台配置 </span>
      </div>
      <div class="right">
        <el-calendar v-model="value"> </el-calendar>
      </div>
    </div>
  </div>
</template>
 
<script>
// import Message from "@/components/message.vue";
import Form1 from "@/components/form1.vue";
import Data1 from "@/components/data1.vue";
import Selector from "@/components/selector.vue";
import Vue from "vue";

export default {
  name: "HiView",
  mounted() {
    this.getDom();
    this.$store.state.eventWal = this.$refs.wal;
    this.$store.state.eventBox1 = this.$refs.box1;
    let prev = document.querySelectorAll(".prev");
    this.$store.state.prev = prev;
  },
  data() {
    return {
      value: new Date(),
    };
  },
  methods: {
    getDom() {
      //右按钮
      let a_header = document.querySelector(".el-calendar__header");
      // 添加了一个p
      let pi1 = document.createElement("p");
      pi1.className =
        "el-icon-arrow-left date-left el-button el-button--plain el-button--mini";
      // 插入
      a_header.appendChild(pi1);
      //右按钮
      // 添加了一个p
      let pi2 = document.createElement("p");
      pi2.className = "el-icon-arrow-right date-right";
      // 插入
      a_header.appendChild(pi2);
    },
    v_on() {
      this.$refs.box1.style.display = "block";
      this.$refs.wal.style.display = "block";
    },
    get() {},
  },
  components: {
    Data1,
    Selector,
    Form1,
    // Message,
  },
};
</script>
<style>
</style>
<style scoped lang="scss">
.boxs {
  width: 580px;
  height: 420px;
  position: fixed;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  z-index: 1009;
}
.wall {
  width: 100%;
  height: 710px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 1008;
}
.biggest {
  padding: 0 40px;
}
.btn1 {
  float: right;
  margin-right: 70px;
  text-align: center;
}
.left {
  position: absolute;
  width: 250px;
  margin: 20px;
  margin-top: 40px;
  padding: 10px;
  float: left;
  height: 330px;

  border: 1px #ccc solid;
  .fixed {
    height: 290px;
    overflow: auto;
  }
  .fixed ::v-deep .el-checkbox__label {
    padding-left: 20px;
  }
}
.right {
  height: 330px;
  width: 820px;
  float: left;
  padding: 10px;
  margin-left: 300px;
  border: 1px #ccc solid;
  overflow: auto;
  margin-top: 40px;
}
.right ::v-deep .el-calendar__title {
  // display: none;
  margin-left: 320px;
}
.right ::v-deep.date-left {
  position: relative;
  right: 402px;
}
.right ::v-deep.date-right {
  position: relative;
  right: 322px;
}
.right ::v-deep .el-calendar__button-group {
  position: relative;
  right: 465px;
  top: 10px;
}
.text-span {
  display: block;
  font-size: 12px;
  color: #ccc;
  padding-top: 15px;
}
#app ::v-deep nav {
  display: none;
}
</style>
