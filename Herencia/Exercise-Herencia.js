class Person {
    static countPerson = 1;

    constructor(name, lastName, age) {
        this._idPerson = Person.countPerson++;
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    }

    getIdPerson() {
        return this._idPerson;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getLastName() {
        return this._lastName;
    }
    setLastName(lastName) {
        this._lastName = lastName;
    }
    getAge() {
        return this._age;
    }
    setAge(age) {
        this._age = age;
    }

    toString() {
        return `Name: ${this.getName()}, LastName: ${this.getLastName()},
                Age: ${this.getAge()}`;
    }
}

class Employee extends Person {
    constructor(name, lastName, age, salary) {
        super(name, lastName, age);
        this._idEmpleado = Person.countPerson++;
        this._salary = salary;
    }

    getIdEmployee() {
        return this._idEmpleado;
    }
    getSalary() {
        return this._salary;
    }
    setSalary(salary) {
        this._salary = salary;
    }
    toString() {
        return `ID: ${this.getIdEmployee()}, ${super.toString()}, Salary: ${this.getSalary()}`;
    }
}

class Client extends Person {
    constructor(name, lastName, age, dateRegister) {
        super(name, lastName, age);
        this._idClient = Person.countPerson++;
        this._dateRegister = dateRegister;
    }

    getIdClient() {
        return this._idClient;
    }
    getDateRegister() {
        return this._dateRegister;
    }
    setDateRegister(dateRegister) {
        this._dateRegister = dateRegister;
    }
    toString() {
        return `ID: ${this.getIdClient()}, ${super.toString()}, Date register: ${this.getDateRegister()}`;
    }
}

//------------ TEST ---------------//

const client1 = new Client('Test', 'test', 25, new Date().getTime());
const client2 = new Client('Test2', 'test2', 22, new Date().getTime());
const employee1 = new Employee('Ezequiel', 'Bamio', 20, 5000);

console.log('#-------- Client --------#');
console.log(client1.toString());
console.log(client2.toString());
console.log('#-------- EMPLOYEES --------#');
console.log(employee1.toString());
console.log('#-------- END --------#');