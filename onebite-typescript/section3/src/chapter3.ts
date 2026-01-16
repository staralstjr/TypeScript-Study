/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog; // 업캐스팅

// dog = animal; // 다운캐스팅

// 따라서 Animal, Dog를 보면 알 수 있듯이, 추가 프로퍼티가 없는 조건이 더 적은 타입이 슈퍼타입이 된다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'react js',
};

book = programmingBook;

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: "reactjs",
}; // -> 프로퍼티 초과!

function func(book: Book) {}
func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: "reactjs",
}); // -> 프로퍼티 초과!

// 이런 경우에만 초과 프로퍼티 검사가 발동되지 않음
let book3: Book = programmingBook;
// 따라서 객체를 업캐스팅하려고 하는 경우는 정보를 변수로 저장하고 업캐스팅해야만 한다.
console.log(book3);
