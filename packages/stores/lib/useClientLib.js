import { defineStore } from 'pinia';
import { ClientLib } from '@clockwork-projects/clientlib';
export const useClientLib = defineStore('clientlib', {
    state: () => {
        return {};
    },
    actions: {
        initialize(config) {
            const client = new ClientLib(config);
            this.client = client;
        }
    },
});
