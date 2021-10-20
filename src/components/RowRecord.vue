<template>
  <tr>
    <td>{{record.number}}</td>
    <td>{{record.recordName}}</td>
    <td>{{record.recordDescription}}</td>
    <td>{{record.recordStatus}}</td>
    <td>{{record.createdAt}}</td>
    <td>{{record.updatedAt}}</td>
    <td>Insert Buttons Here
      <button>A</button>
      <button>B</button>
      <button>C</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "RowRecord",
  props: ["record"]
}
</script>

<style>

</style>