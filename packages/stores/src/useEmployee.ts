import { useClientLib } from './useClientLib'
import { defineStore } from 'pinia'
import { ClientData } from '@clockwork-projects/clientlib'

export const useEmployee = defineStore('employee', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      employees: [] as ClientData[]
    }
  },
  actions:  {
    load() {
      const store = useClientLib()
      this.employees = store.client.getData()
    }
  },
  getters: {
    getEmployees: (state) => state.employees
  }
})
