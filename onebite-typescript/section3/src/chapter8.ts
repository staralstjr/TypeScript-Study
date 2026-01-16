/**
 * 서로소 유니온 타입
 *  - 교집합이 없는 타입들로만 만든 유니온 타입을 말함 (string, number)
 *  - 타입 정의할 때 tag를 저렇게 달아주면 모두 서로소인 각각 집합이 됨.
 *  - tag가 없었으면 name을 기준으로 교집합이 여기저기 만들어졌겠지!
 */

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 서로소인 객체를 유니온

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
      break;
    }
  }

  // 위 아래 똑같은데 switch case가 더 직관적이다.

  if (user.tag === 'ADMIN') {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === 'MEMBER') {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
  }
}

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'Loading';
};
type FailedTask = {
  state: 'Failed';
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'Loading': {
      console.log('로딩 중');
      break;
    }
    case 'Failed': {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case 'SUCCESS': {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: 'Loading',
};
const failed: AsyncTask = {
  state: 'Failed',
  error: {
    message: '오류 발생 원인은',
  },
};
const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터 ~~',
  },
};
