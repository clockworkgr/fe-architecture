<script setup lang="ts">
 import {useEmployee} from '@clockwork-projects/stores';
 import {OurTable} from '@clockwork-projects/ui-components';
 import '@clockwork-projects/ui-components/dist/style.css'
import { computed } from 'vue';
 const store = useEmployee();
 store.load();
 const employees = computed(() => store.getEmployees);

</script>

<template>
<OurTable :data="employees"></OurTable>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
