import { useClientLib } from './useClientLib';
import { defineStore } from 'pinia';
export const useEmployee = defineStore('employee', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            employees: []
        };
    },
    actions: {
        load() {
            const store = useClientLib();
            this.employees = store.client.getData();
        }
    },
    getters: {
        getEmployees: (state) => state.employees
    }
});
