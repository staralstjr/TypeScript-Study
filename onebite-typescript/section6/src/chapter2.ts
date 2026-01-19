/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 * private는 그 클래스 내에서만 사용가능(상속받는 클래스에서도 사용 불가)
 * protected는 상속받는 클래스에서는 사용 가능하도록
 */

class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee('이정환', 27, 'developer');
console.log(employee);
// employee.name = '권민석';
// employee.age = 23;
// employee.position = '노무사';

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  func() {
    this.age;
    // this.name
  }
}
