<template>
  <div class="bigger">
    <div class="close" ref="Add3" @click.stop="to('Add6', 'active')">
      <p class="el-icon-arrow-right" ref="Add6"></p>
      <span class="xt">系统类型</span>
    </div>
    <el-checkbox-group
      v-model="checkList"
      ref="Add7"
      v-bind:style="{ display: active }"
    >
      <el-checkbox label="分配的任务"></el-checkbox>
      <el-checkbox label="需联系的线索"></el-checkbox>
      <el-checkbox label="需联系的客户"></el-checkbox>
      <el-checkbox label="需联系的商机"></el-checkbox>
      <el-checkbox label="预计成交的商机"></el-checkbox>
      <el-checkbox label="即将到期的合同"></el-checkbox>
      <el-checkbox label="计划回款"></el-checkbox>
    </el-checkbox-group>
    <div class="close" ref="Add4" @click.stop="to('Add44', 'ard')">
      <p class="el-icon-arrow-right" ref="Add44"></p>
      <span class="xt">自定义类型</span>
    </div>
    <el-checkbox-group
      v-model="checkList"
      ref="Add8"
      v-bind:style="{ display: ard }"
    >
      <el-checkbox label="开会"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
let i = 0;
export default {
  name: "Selector",
  data() {
    return {
      value: new Date(),
      active: "none",
      ard: "none",
      checkList: [
        "分配的任务",
        "需联系的线索",
        "需联系的客户",
        "需联系的商机",
        "预计成交的商机",
        "即将到期的合同",
        "计划回款",
        "开会",
      ],
    };
  },
  methods: {
    to: function (m, r) {
      if (i == 0) {
        this.$refs[m].className = "el-icon-arrow-down";
        this[r] = "block";
        i = 1;
      } else {
        this.$refs[m].className = "el-icon-arrow-right";
        this[r] = "none";
        i = 0;
      }
    },
  },
};
</script>
<style scoped lang="scss" >
// 选择器
.close {
  height: 60px;
  cursor: pointer;
  .xt {
    padding-left: 2px;
    float: left;
    font-size: 16px;
    padding-top: 20px;
  }

  .el-icon-arrow-right,
  .el-icon-arrow-down {
    float: left;
    padding-top: 7px;
  }
}
// 弹出框
.el-checkbox {
  height: 20px;
  display: block;
  text-align: left;
  margin-top: 10px;
}
</style>
<style>
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266 !important;
}
</style>