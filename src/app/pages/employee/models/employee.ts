export interface EmployeeRes {
    employees: Employee[];
}

export interface Employee {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    basicSalary: number;
    status: string;
    group: string;
    description: string;
}

export interface AddEmployeeRes {
    status?: string;
    code: number;
}