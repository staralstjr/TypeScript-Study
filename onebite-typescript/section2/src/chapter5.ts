// enum 타입
/*  여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는
    JavaScript에는 없음
    원래 타입스크립트를 실행했을 때 자바스크립트의 파일에서는 타입 선언한게 다 사라진다. 근데 enum 타입은 사라지지 않는다.*/

enum Role { // 숫자형 이넘
  ADMIN, // 숫자 입력 안해도 자동으로 0, 1, 2 순서로 할당시킨다, default값을 첫 원소에 주면 그 밑으로 자동으로 할당됨
  USER = 10,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // <- 0은 관리자
  language: Language.korean,
};
const user2 = {
  name: '홍길동',
  role: Role.USER, // <- 일반 유저
};
const user3 = {
  name: '아무개',
  role: Role.GUEST, // <- 게스트
};

console.log(user1, user2, user3);
