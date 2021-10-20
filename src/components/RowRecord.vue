<template>
  <tr>
    <td>{{ record.number }}</td>
    <td>{{ record.recordName }}</td>
    <td>{{ record.recordDescription }}</td>
    <td>{{ record.recordStatus }}</td>
    <td>{{ record.createdAt }}</td>
    <td>{{ record.updatedAt }}</td>
    <td>
      Insert Buttons Here
      <button>A</button>
      <button>B</button>
      <button>C</button>
    </td>

    <!-- <add-to-calendar
      title="VueConf"
      location="WROCŁAW, POLAND"
      :start="new Date()"
      :end="new Date(new Date().setDate(new Date().getDate() + 1))"
      details="The first Official Vue.js Conference in the world!"
      inline-template
    >
        <google-calendar id="google-calendar">
          <i class="fa fa-google"></i> Add to Google calendar
        </google-calendar>
    </add-to-calendar> -->
  </tr>
</template>

<script>
// import { AddToCalendar } from 'vue-add-events-to-google-calendar';
// import AddToCalendar from "vue-add-to-calendar";
export default {
  name: "RowRecord",
  // components: { AddToCalendar },
  props: ["record"],
  data() {
    return {
      buttonText: "Add to calendar",
      details: "Details of event",
      endTime: "new Date('11/22/2019 5:00 pm')",
      location: "'mumbai'",
      startTime: "new Date('11/25/2019 6:00 pm')",
      title: "'Excellencia'",
    };
  },
};
</script>

<style></style>
