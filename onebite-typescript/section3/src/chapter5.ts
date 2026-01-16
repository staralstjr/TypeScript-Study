/**
 * 타입 추론
 */

let a = 10;
let b = 'hello';
let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterlood',
  },
  url: ['e'],
};

let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return 'hello';
}

let d; // 암묵적으로 any 타입이 되고 진화한다.
d = 10;
d.toFixed();
// 이게 ㅈㄴ 당연한거같은데 신기하지않냐고 하시는데.. any에 number값을 넣으면 number 타입이겠지

d = 'hello';
d.toUpperCase();
// 위 d값은 number, 아래 d값은 string

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
