class Student {
  constructor(rollNo, name, age) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
  }

  // Read
  getRollNo() {
    return this.rollNo;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }

  // update values
  setRollNo(rollNo) {
    this.rollNo = rollNo;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }
}

// Creating objects
const std1 = new Student(1001, "Ram", 20);
const std2 = new Student(1002, "Sam", 21);

// read values
console.log(std1.getRollNo());
console.log(std1.getName());
console.log(std1.getAge());

console.log(std2.getRollNo());
console.log(std2.getName());
console.log(std2.getAge());

// update values
std1.setRollNo(1100);
console.log(std1.getRollNo());
