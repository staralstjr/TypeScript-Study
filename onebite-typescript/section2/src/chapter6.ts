// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// 이런식으로 any는 치트키처럼 모든 타입을 넣을 수 있고 어떤 값에도 담을 수 있다.
// 또한 타입에 내장된 모든 함수를 실행시킬수도 있다.
// 이렇게 하면 타입 에러를 모두 없애버리는 치트를 쓸 수 있지만, 실행했을 때 런타임 에러를
// 발생시키기 때문에 되도록 쓰지 않도록 해야한다.
// ------------------------------------------------------------------

// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar;
// unknownVar.toUpperCase(); -> 불가능

if (typeof unknownVar === 'number') {
  num = unknownVar;
}
// unknown은 any와 비슷하지만 다르다. 모든 타입을 넣을 수 있는건 맞다. 그러나 어떤 값에도 담을 수 있는건 아니다.
// 또한 타입에 내장된 함수의 타입이 다르다면 실행시킬 수 없다.

/* 따라서 타입을 도저히 주기 애매하거나, 값의 타입이 바뀔 것 같은 값은 any가 아닌 unknown으로 선언하도록 하자. */
