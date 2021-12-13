class Student {
  // Constructor to initialize values
  constructor(rollNo, name, age) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
  }

  // Getters & Setter methods
  setRollNo(rollNo) {
    this.rollNo = rollNo;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }

  getRollNo() {
    return this.rollNo;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
