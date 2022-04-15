<template>
  <div class="mainBox">
    <Calendar
      :textTop="['S', 'M', 'T', 'W', 'T', 'F', 'S']"
      v-on:choseDay="clickDay"
      :sundayStart="true"
    >
    </Calendar>
  </div>
</template>
<script>
import Calendar from "vue-calendar-component";
export default {
  name: "Data1",
  components: {
    Calendar,
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
  },
};
</script>
<style scoped lang="scss">
nav {
  display: none;
}
</style>