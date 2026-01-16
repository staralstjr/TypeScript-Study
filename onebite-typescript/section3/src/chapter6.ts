/**
 * 타입 단언(assertion)
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = '이정환';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '돌돌이',
  color: 'borwon',
  breed: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
console.log(num1, num2);
// let num3 = 10 as string;
// -> 슈퍼타입, 서브타입 아니어서
let num3 = 10 as unknown as string;
// 이렇게 다중단언으로 가능함 근데 이렇게 할 일이 있겠습니까?

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

// 모든 프로퍼티를 readonly로 만들고싶을때 사용한다.
// cat.name = ''

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '더이상 너의 이름을 넣지 않겠다.',
};

const len: number = post.author!.length;

// 또한 단언 자체는 캐스팅이 아닌 컴파일러의 눈속임이기 때문에 사용할 때 주의해야 한다.
