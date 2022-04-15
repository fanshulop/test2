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
  name: "calendar",
  components: {
    Calendar,
  },
};
</script>
