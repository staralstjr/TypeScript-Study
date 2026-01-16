// object (객체 리터럴 타입)
// 객체에 타입을 주는 방법 - 타입스크립트의 구조적 타입 시스템
// property based system
let user = {
    id: 1,
    name: '이정환',
};
user = {
    name: '홍길동',
};
user.id = 2;
// ------------------------------------------------
let config = {
    apiKey: 'My API KEY',
};
export {};
// config.apiKey = "hacked"; 불가능
// 이런식으로 절대 바뀌어서는 안되는 apiKey같은 값들은 앞에
// readonly를 붙여서 수정할 수 없게 만들 수 있다.
