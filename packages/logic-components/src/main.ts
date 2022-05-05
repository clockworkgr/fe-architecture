
/*
  Assume this is our STATEFUL/Logic components library.
  Various app/logic components are created here and exported. 
	Each can depend on one or more stores but the dependency is 
	explicitly defined in the component rather than required in the app using it.
	Components here may also make use of UI components to create larger molecules.	
*/
import EmployeeTable from "./components/EmployeeTable.vue";
export { EmployeeTable }