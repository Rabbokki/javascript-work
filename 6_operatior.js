//산술 연산자
console.log(10 + 10);
console.log(7 % 3);

//증감 연산자
console.log('==== 증감 연산자 ====');
let num = 1;
num++;
console.log(num);

console.log("=====간단한 타입 변환====");
let sample = '99';
console.log(typeof sample);
console.log(+sample);
console.log(typeof +sample);

//비교 연산자
console.log("==비교 연산자");
console.log(3 == 3);
console.log(3 == '3');

console.log("===비교 연산자");
console.log(3 === 3);
console.log(3 === '3');

//삼항연산자
console.log(10 > 0 ? '10은 0보다 큼' : 'ㄴㄴ');

//논리연산자 (and : &&, or : ||)

//단축 평가 (많이씀)
console.log('---------------------');
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false ? '아이브' : 'true');

console.log('--------------');
console.log(false && '뉴진스');

console.log(true && true && '아일릿');
console.log(true && false && '아일릿');

console.log('--------------');
let name;
console.log(name);

// 널이거나 언디파인드면 ?? 다음꺼를 출력
name = name ?? '재정';
console.log(name);

name = 'asd' && '아이브';
console.log(name);

// 스크립트에서 false로 보는 애들
// false, null, 0, undefined,''