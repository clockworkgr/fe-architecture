export var Department;
(function (Department) {
    Department["first"] = "first";
    Department["second"] = "second";
})(Department || (Department = {}));
export class ClientLib {
    constructor(config) {
        this.config = config;
    }
    getData() {
        return [{
                name: 'alex',
                surname: 'm',
                department: Department.first
            },
            {
                name: 'john',
                surname: 'dow',
                department: Department.second
            }];
    }
}
