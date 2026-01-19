/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // 이런식으로 함수 오버로딩을 사용하려면 호출 시그니쳐 방식을 사용해야한다.
}

const person: Person = {
  name: '이정환',
  sayHi: function () {
    console.log('Hi');
  },
};

person.sayHi();
person.sayHi(1, 2);

// person.name='홍길동';
