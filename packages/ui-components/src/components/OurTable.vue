<script setup lang="ts">import { computed } from 'vue';


const props = defineProps<{ data: Array<Record<string,unknown>> }>()
const headers= computed( () => { return props.data.length>0 ? Object.keys(props.data[0]) : [] });

</script>

<template>
<table>
  <thead>
    <tr>
      <th v-for="key in headers" :key="'header-'+key">
      {{ key }}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item,index in data" :key="'item-'+index">
      <td v-for="key in headers" :key="'item-'+index+'-header-'+key">
      {{ item[key] }}
      </td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
tbody tr:nth-child(odd){
  background-color: #4C8BF5;
  color: #fff;
}
</style>
