// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let st1 = 'hello';
let str2 = 'hello';
`hello`;
`hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// let numA: number = null;
// -> number에 넣을 값이 도저히 떠오르지 않는다면 null을 넣을 수 있는데
// 원래는 안되지만 tsconfig.json에 strictNullChecks에 false를 주면
// 가능하다! = 쓸 일 없겠죠~ 메이비
// 리터럴 타입 (값 자체가 타입이되는)
let numA = 10;
// numA = 12; 안됨.
let strA = 'hello';
let boolA = true;
export {};
