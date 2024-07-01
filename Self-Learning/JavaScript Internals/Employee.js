function Employee(id, name) {
  this.id = id;
  this.name = name;

  Employee.count = 0;

  Employee.prototype.salary = 10;

  this.salary;
}

const employee1 = new Employee(1, "Max");
Object.getPrototypeOf(employee1);
