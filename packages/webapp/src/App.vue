<script setup lang="ts">
/*
This is one of our apps.

It creates an empty pinia store and simply imports components from either the ui-components or logic-components library.
It only needs to instantiate the "special" client library store.
*/
import { useClientLib} from '@clockwork-projects/stores';
import { Layout } from '@clockwork-projects/ui-components';
import { EmployeeTable } from '@clockwork-projects/logic-components';
import '@clockwork-projects/logic-components/dist/style.css';
const clientStore = useClientLib();
clientStore.initialize('a config');
</script>

<template>
   <Layout>
     <EmployeeTable/>
   </Layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
