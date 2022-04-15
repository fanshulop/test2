<template>
  <el-form
    :rules="rules"
    class="dat"
    ref="form"
    :model="form"
    label-width="80px"
  >
    <el-form-item label="日程内容" prop="name">
      <el-input v-model="form.name" placeholder="请输入日期内容"></el-input>
    </el-form-item>
    <el-form-item class="dat" label="日程类型" prop="region">
      <el-select v-model="form.region" ref="dateType">
        <el-option label="开会" value="shanghai"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="dat" label="活动时间" required>
      <div class="block">
        <el-form-item prop="date1">
          <el-date-picker
            class="guu"
            v-model="form.date1"
            type="datetime"
            placeholder="选择日期时间"
            default-time="9:00:00"
            style="width: 100%"
          >
          </el-date-picker>
        </el-form-item>
      </div>
    </el-form-item>
    <el-form-item class="dat" label="活动时间" required>
      <div class="block">
        <el-form-item prop="date2">
          <el-date-picker
            class="guu"
            v-model="form.date2"
            style="width: 100%"
            type="datetime"
            placeholder="选择日期时间"
            default-time="9:00:00"
          >
          </el-date-picker>
        </el-form-item>
      </div>
    </el-form-item>
    <el-form-item class="dat">
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Form1",
  mounted() {},
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 50,
            message: "长度在 1 到 50 个字符",
            trigger: "blur",
          },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
      },
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  methods: {
    submitForm(formName) {
      let p = this.$store.state.prev;
      let e = this.$store.state.eventWal;
      let c = this.$store.state.eventBox1;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          e.style.display = "none";
          c.style.display = "none";

          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      let e = this.$store.state.eventWal;
      let c = this.$store.state.eventBox1;
      // alert("submit!");
      e.style.display = "none";
      c.style.display = "none";
      let ipt = document.querySelectorAll("input");
      ipt.style.background = "red";
    },
  },
};
</script>
<style scoped lang="scss">
.date-type {
  background-color: rgb(0, 82, 204);
  width: 10px;
  height: 10px;
  border-radius: 10px;
}
.dat ::v-deep .el-input__inner {
  height: 32px;
  width: 500px;
}
.guu {
  position: relative;
  // right: 140px;
}
</style>