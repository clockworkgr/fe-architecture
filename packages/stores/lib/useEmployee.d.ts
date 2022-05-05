import { ClientData } from '@clockwork-projects/clientlib';
export declare const useEmployee: import("pinia").StoreDefinition<"employee", {
    employees: ClientData[];
}, {
    getEmployees: (state: {
        employees: {
            name: string;
            surname: string;
            department: import("@clockwork-projects/clientlib").Department;
        }[];
    } & {}) => {
        name: string;
        surname: string;
        department: import("@clockwork-projects/clientlib").Department;
    }[];
}, {
    load(): void;
}>;
//# sourceMappingURL=useEmployee.d.ts.map