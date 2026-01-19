/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가 -> 업캐스팅 가능, 다운캐스팅 불가능
 * 2. 매개변수의 타입이 호환되는가 -> 업캐스팅 불가능, 다운캐스팅 가능
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number타입
let b: B = () => 10; // number 리터럴 타입

a = b;
// b = a; // 반환값 기준 다운캐스팅이니까 안됨!

/**
 * 기준 2. 매개변수가 호환되는가
 * 2-1. 매개변수의 개수가 같을 때
 */
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; -> 업캐스팅이라 불가능
dogFunc = animalFunc;

// -> 위 대입을 함수로 표현해서 이해해보자.
let whyCannotUpcasting = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); 이게 안되니까! 타입의 개수가 더 적은게 더 상위라고 했었음
};

let whyCanDownCasting = (dog: Dog) => {
  console.log(dog.name);
};

/* 2-2. 매개변수의 개수가 다를 때*/
// 매개변수의 개수가 더 적을때만 가능, 타입이 다르면 당연히 안됨
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};

let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
