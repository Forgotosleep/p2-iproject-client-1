<template>
  <tr>
    <td>{{ record.number }}</td>
    <td>{{ record.recordName }}</td>
    <td>{{ record.recordDescription }}</td>
    <td>{{ record.recordStatus }}</td>
    <td>{{ record.createdAt }}</td>
    <td>{{ record.updatedAt }}</td>
    <td>
      <!-- Insert Buttons Here -->
      <a href="#" @click="completeRecord">Complete</a> |
      <a href="#" @click="deleteRecord">Delete</a> |
      <!-- <a href="#">Add to Google Calendar</a> -->

      <AddToCalendar
        :buttonText="'Save to calendar'"
        :details="record.recordDescription"
        :endTime="new Date(record.updatedAt)"
        :location="`Jakarta`"
        :startTime="new Date(record.createdAt)"
        :title="record.recordName"
        class=""
        type="a"
        style="transition: all 0.15s ease 0s"
      />
    </td>
  </tr>
</template>

<script>
import { AddToCalendar } from "vue-add-events-to-google-calendar";

export default {
  name: "RowRecord",
  props: ["record"],
  components: {
    AddToCalendar,
  },
  methods: {
    completeRecord() {
      this.$store.dispatch("patchRecords", { id: this.record.id });
    },
    deleteRecord() {
      this.$store.dispatch("deleteRecords", { id: this.record.id });
    },
  },
};
</script>

<style></style>
