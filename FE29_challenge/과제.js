// 1번 문제
let data = [
  {
    반: 1,
    번: 1,
    이름: '호준',
    중간고사점수: 55,
  },
  {
    반: 1,
    번: 2,
    이름: '길동',
    중간고사점수: 60,
  },
  {
    반: 1,
    번: 3,
    이름: '영희',
    중간고사점수: 30,
  },
  {
    반: 1,
    번: 4,
    이름: '철수',
    중간고사점수: 20,
  },
  {
    반: 1,
    번: 5,
    이름: '규리',
    중간고사점수: 100,
  },
];

// 화살표 함수 -> 일반함수로 변경해라
// console.log(data.map((x) => x.중간고사점수));
// console.log(data.map((x) => [x.이름, x.중간고사점수]));

// 1-1번 문제 solution
console.log(
  data.map(function (a) {
    return a.중간고사점수;
  })
);

// 1-2번 문제 solution
console.log(
  data.map(function (a) {
    return [a.이름, a.중간고사점수];
  })
);

// 2번 문제
// 화살표 함수 -> 일반함수로 변경해라
let data2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let newData = data.map(a => a.map(n => n * 2));

function solution3(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      a[i][j] *= 2;
    }
  }
}

// 2번 문제 solution
console.log(solution3(data2));

// 3번 문제
// [10, 20, 30, 40] 값의 평균을 구하는 함수를 만들어주세요.

arr = [10, 20, 30, 40];

let solution4 = () => {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// 3번 문제 solution 화살표함수 사용
console.log(solution4());

/*
4번 문제
숫자단위 콤마를 찍는 함수를 만들어주세요.
*/
/*
100,000 6 1
10,000 5 1
1,000 4 1
*/

// 4번 문제 solution 정규식 사용
function moneyPointer(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
