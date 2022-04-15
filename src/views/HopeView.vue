<template>
  <div class="big">
    <div class="top">
      <span><h2>日历</h2></span>
    </div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="left">
      <!-- 日历 -->
      <div class="mainBox">
        <Calendar
          :textTop="['S', 'M', 'T', 'W', 'T', 'F', 'S']"
          v-on:choseDay="clickDay"
          :sundayStart="true"
        >
        </Calendar>
      </div>
      <!-- 选择器 -->
      <div class="close" ref="Add3" @click.stop="to">
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
      <div class="close" ref="Add4" @click.stop="to2">
        <p class="el-icon-arrow-right" ref="Add9"></p>
        <span class="xt">系统类型</span>
      </div>
      <el-checkbox-group
        v-model="checkList"
        ref="AddS"
        v-bind:style="{ display: ard }"
      >
        <el-checkbox label="开会"></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="right">
      <div id="dynamic-component-demo" class="demo">
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab-button', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
        >
          {{ tab }}
        </button>

        <component v-bind:is="currentTabComponent" class="tab"></component>
      </div>
      <el-calendar v-model="value"> </el-calendar>
    </div>
  </div>
</template>
<script>
import Calendar from "vue-calendar-component";
var i = 0;
export default {
  name: "calendar",
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
      ],
      options: [
        {
          value: "选项1",
          label: "员工",
        },
      ],
      value: "",
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
    };
  },
  components: {
    Calendar,
    tabHome: "<div>Home component</div>",
    tabPosts: "<div>Posts component</div>",
    tabArchive: "<div>Archive component</div>",
  },
  methods: {
    clickDay(today) {
      // today格式为2020/8/7 改为 20200807
      let date = today.split("/");
      if (date[1].length < 2) {
        date[1] = "0" + date[1];
      }
      if (date[2].length < 2) {
        date[2] = "0" + date[2];
      }
      date = date.join("");
    },
    to: function () {
      if (i == 0) {
        this.$refs.Add6.className = "el-icon-arrow-down";
        this.active = "block";
        i = 1;
      } else {
        this.$refs.Add6.className = "el-icon-arrow-right";
        this.active = "none";
        i = 0;
      }
    },
    to2: function () {
      if (i == 0) {
        this.$refs.Add9.className = "el-icon-arrow-down";
        this.ard = "block";
        i = 1;
      } else {
        this.$refs.Add9.className = "el-icon-arrow-right";
        this.ard = "none";
        i = 0;
      }
    },
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
};
</script>
<style scoped lang ="scss">
.el-select .el-input.is-focus .el-input__inner {
  border-color: #dcdfe6 !important;
}
.el-select-dropdown {
  width: 268px;
  padding: 0 15px;
  height: 380px;
}
nav {
  display: none;
}
.el-select {
  float: left;
  position: relative;
  bottom: 10px;
}
.el-button .el-button--plain .el-checkbox__label .el-checkbox__label {
}
.mainBox {
  width: 100%;
  .wh_content_all {
    background-color: #08214d;
    .wh_top_changge li {
      color: #1fb331;
    }
    .wh_content_item {
      .wh_item_date {
        color: #1ae558;
      }
      .wh_other_dayhide {
        color: #bfbfbf;
      }
      .wh_chose_day {
        background: #d1ff19;
        color: #0d0b0b;
      }
      .wh_isToday {
        background: #33ad53;
        color: #0d0b0b;
      }
    }
  }
}
.big {
  padding: 20px;

  /* height: 357px; */
}
.left {
  position: fixed;
  width: 250px;
  padding: 10px;
  float: left;
  height: 330px;
  overflow: auto;
  border: 1px #ccc solid;
  margin-top: 40px;
  .el-icon-caret-bottom {
    float: left;
    font-size: 20px;
  }
  .close {
    height: 60px;
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
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #000 !important;
    }
  }
  .el-checkbox {
    height: 20px;
    display: block;
    text-align: left;
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
}

.top {
  padding: 0;
  span {
    text-align: left;
    font-size: 20px;
  }
}
.wh_top_changge > li {
  padding: 15px 0px;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>