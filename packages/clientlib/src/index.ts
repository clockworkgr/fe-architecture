
/*
  Assume this is our client library.
  It must accept a config of sorts (e.g. additional chains, keyhashes etc)
  Provides methods to access data
*/
export enum Department  {
  first='first',
  second='second'  
}
export type ClientData = {
  name: string;
  surname: string;
  department: Department;
}
export class ClientLib {
  
  private config:string;
  
  constructor(config:string) {
    this.config=config;
  }
  getData():ClientData[] {
    return [{
      name: 'alex',
      surname: 'm',
      department: Department.first
    },
    {
      name: 'john',
      surname: 'dow',
      department: Department.second
    }]
  }
}