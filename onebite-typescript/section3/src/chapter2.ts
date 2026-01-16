// 타입계층도에 의해서 업캐스팅은 가능! 다운캐스팅은 불가능!

/**
 * Unknown 타입
 */

function UnknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
  // 이 사례가 바로 다운캐스팅이 안되는 경우임.
}
// ------------------------------------------------
/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
  // 이건 또 왜 안돼?
  // 다운캐스팅이라서, never타입은 모든 타입 중 가장 하위 타입으로
  // 어떠한 타입의 값이든 never타입의 값에 할당할 수 없다.
  // 따라서 어떠한 값도 할당할 수 없다.
}
// -------------------------------------------------
/**
 * void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined;
  // 업캐스팅
}
// -------------------------------------------------
/**
 * any 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar;
}
// any 타입은 치트키라 업캐스팅, 다운캐스팅 다 가능함
// 타입계층도를 다 무시해버리기 때문에 위험하다 그랬지
// 근데 또 never타입으로는 다운캐스팅할 수 없음. never타입은
// 순수한 공집합이라서. ㅋㅋ
