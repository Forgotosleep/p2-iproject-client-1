<template>
  <AddToCalendar
    :buttonText="'Save to calendar'"
    :details="`Naik Gunung`"
    :endTime="new Date()"
    :location="`Jakarta`"
    :startTime="new Date()"
    :title="`Naik Gunung`"
    class=""
    type="button"
    style="transition: all 0.15s ease 0s"
  />
</template>

<script>
import { AddToCalendar } from "vue-add-events-to-google-calendar";
export default {
  name: "Test",
  components: {
    AddToCalendar,
  },
};
</script>

<style></style>
