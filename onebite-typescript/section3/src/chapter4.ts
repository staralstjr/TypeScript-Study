/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = 'hello';

a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

// DOG, PERSON 밑으로 내렸음

type Union1 = Dog | Person;

let union1: Union1 = {
  name: 'ㅎㅎ',
  color: 'dd',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// let union4: Union1 = {
//   name: "dmd?",
// }
// color도 없고 language도 없어서, Dog 객체도 아니고 Person 객체도 아니기 때문에

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
