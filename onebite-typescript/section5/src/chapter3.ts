/**
 * 선언 합침
 * - 인터페이스는 동일한 이름으로 여러개 선언가능한데 자동으로 합쳐지기 때문이다.
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; -> 중복 재정의 할 때 충돌이난다.
  age: number;
}

const person: Person = {
  name: '',
  age: 27,
};

/**
 * 모듈 보강을 할 때 사용한다.
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
