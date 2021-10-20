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
      <a href="#">Delete</a> |
      <a href="#">Add to Google Calendar</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "RowRecord",
  props: ["record"],
  methods: {
    completeRecord() {
      this.$store.dispatch("patchRecords", {id: this.record.id})
    }
  }

};
</script>

<style></style>
