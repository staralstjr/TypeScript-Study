/**
 * 제네릭
 * : 일괄적인, 포괄적인 이라는 뜻을 가졌다.
 * - 우리가 원하는 대로 함수의 인수에 따라서 반환 값의 타입을
 *   가변적으로 정해줄 수 있다.
 * - 모든 타입에 두루두루 쓸 수 있는 범용적인 함수다!
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

if (typeof num === 'number') {
  num.toFixed();
}

let bool = func(true);

let str = func('string');

let arr = func<[number, number, number]>([1, 2, 3]);

console.log(arr);
