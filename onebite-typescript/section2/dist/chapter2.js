// 배열
// 1번방식
let numArr = [1, 2, 3];
let strArr = ['hello', 'im', 'winterlood'];
// 2번방식
let boolArr = [true, false, true];
let num2 = [3, 4, 5];
// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr = [1, 'hello'];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
let a = [[1, 2], ['hello']];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, '2', true];
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
// 튜플을 선언해도 실행할때는 자바스크립트의 배열로 인식하기 때문에
// 배열에 추가 제거하는 기능을 쓸 수는 있다만, 쓸 때 주의해야한다.
const users = [
    ['이장환', 1],
    ['이아무개', 2],
    ['김아무개', 3],
    ['박아무개', 4],
    // [5, "최아무개"], 불가능~
];
export {};
