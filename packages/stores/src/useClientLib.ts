import { defineStore } from 'pinia'
import { ClientLib } from '@clockwork-projects/clientlib'

type  ClientState = {
  client: ClientLib,
}
export const useClientLib = defineStore('clientlib', {  
  state: () => {
    return {} as ClientState
  },
  actions:  {
    initialize(config:string) {
      const client = new ClientLib(config);      
      this.client = client;
    }
  },
});