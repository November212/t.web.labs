interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
}
interface Employee extends Person {
    employeeId: string;
    department: string;
}
const person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
};

export {};
