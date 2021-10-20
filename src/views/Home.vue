<template>
  <div class="home container">
    <h1>This is the Home page</h1>
    <!-- <div>
      <b-table striped hover :items="records"></b-table>
    </div> -->

    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Activity Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <RowRecord
            v-for="record in records"
            :key="record.updatedAt"
            :record="record"
          />

          <tr>
            <td></td>
            <td>Test</td>
            <td>Test</td>
            <td>10-10-10</td>
            <td>10-10-10</td>
            <td>completed</td>
            <td>complete delete add2G-Calendar</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import RowRecord from "../components/RowRecord.vue";

export default {
  name: "Home",
  components: { RowRecord },
  computed: {
    activities() {
      return this.$store.state.activities;
    },
    records() {
      let records = this.$store.state.records
        .filter((record) => record.status !== "hidden")
        .map((record, index) => {
          return {
            number: index + 1,
            id: record.id,
            recordName: record.Activity.title,
            recordDescription: record.Activity.description,
            recordStatus: record.status,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
          };
        });

      return records;
    },
  },
  methods: {
    fetchActivities() {
      this.$store.dispatch("fetchActivities");
    },
    fetchRecords() {
      this.$store.dispatch("fetchRecords");
    },
  },
  created() {
    this.fetchActivities();
    this.fetchRecords();
  },
};
</script>
