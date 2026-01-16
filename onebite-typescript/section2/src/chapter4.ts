// 타입 별칭(스코프 내 중복x) type alias
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '이정환',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천ㅋㅋ',
};

let user2: User = {
  id: 1,
  name: '길홍동',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천ㅋㅋ',
};

// -------------------------------
// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumbers = {
  [key: string]: number;
  Korea: number; //required 효과인듯?
};

let countryNumbers: CountryNumbers = {
  Korea: 3,
};
