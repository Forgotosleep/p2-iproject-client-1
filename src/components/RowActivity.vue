<template>
  <tr>
    <td class="col-1">{{ activity.number }}</td>
    <td class="col-4">{{ activity.name }}</td>
    <td>{{ activity.description }}</td>
    <td>
      <a href="#"
        :activity="activity"
        @click="targetActivity"
        >Edit</a
      >
       |
      <a href="#" @click="deleteActivity">
        Delete
      </a>
      <!-- <button>Delete</button> -->
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
    targetActivity() {
      this.$store.commit("TARGET_ACTIVITY", this.activity)
      this.$router.push("/edit-activity")
    },
    deleteActivity() {
      this.$store.dispatch("deleteActivity", {id : this.activity.id});
    },
  },
  created() {
    this.fetchActivities();
  },
};
</script>

<style></style>
