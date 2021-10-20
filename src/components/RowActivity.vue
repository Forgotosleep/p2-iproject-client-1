<template>
  <tr>
    <td class="col-1">{{ activity.number }}</td>
    <td class="col-4">{{ activity.name }}</td>
    <td>{{ activity.description }}</td>
    <td>
      <button>Edit</button>
      <button>Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "RowActivity",
  props: ["activity"],
  methods: {
    fetchActivities() {
      this.$store.dispatch("fetchActivities");
    },
    editActivity() {},
    deleteActivity() {},
  },
  created() {
    this.fetchActivities();
  },
};
</script>

<style></style>
