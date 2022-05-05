export declare enum Department {
    first = "first",
    second = "second"
}
export declare type ClientData = {
    name: string;
    surname: string;
    department: Department;
};
export declare class ClientLib {
    private config;
    constructor(config: string);
    getData(): ClientData[];
}
//# sourceMappingURL=index.d.ts.map