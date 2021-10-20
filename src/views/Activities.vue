<template>
  <div>
    <h1>This is the Activities page</h1>

    <div class="container">
      <b-table striped hover :items="activities"></b-table>
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Number</th>
            <th>Activity Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activities",
  computed: {
    activities() {
      return this.$store.state.activities;
    },
  },

  
};
</script>

<style></style>
