# 26일차

```
<script>
      // slice 잘라준다 시작인덱스~끝 인덱스까지
      var arr = [1, 2, 3];
      arr.splice(0, 1);
      console.log(arr);
      // splice 2번째 인덱스부터 1개를 삭제하고 i로 바꾼다.
      var arr2 = ['a', 'b', 'c', 'd', 'e'];
      arr2.splice(2, 1, 'i');
      console.log(arr2);
      // splice 문제
      var fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
      fish.splice(5, 1);
      console.log(fish);
      fish.splice(4, 0, '다금바리');
      console.log(fish);
      fish.splice(2, 1, '옥돔', '갈치');
      console.log(fish);
      // slice 문제
      var fish2 = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
      console.log(fish2.slice(2, 3));
      console.log(fish2.slice(5));
      // 배열 정렬
      // 한글 : 모음 순서
      // 영어 : abcde 순서
      // 숫자 : 문자열로 바꿔서 유니코드 포인터 순서대로 변환
      var loacation = ['인사동', '수원', '광장시장', '안양', '영등포'];
      console.log(loacation.sort());
      var num = [2, 10, 6, 8, 13];

      // compare 함수 오름차순, 내림차순
      console.log(
        num.sort(function (a, b) {
          return a - b;
        })
      );
      console.log(
        num.sort(function (a, b) {
          return b - a;
        })
      );

      // sort 함수 문제
      // 다음 배열에서 sort 함수를 이용해 원소의 product의 값을 기준으로 가나다순으로 정렬해보세요.
      var studentList = [
        {
          id: 1,
          product: '연필',
          stock: 10,
        },
        {
          id: 2,
          product: '색종이',
          stock: 33,
        },
        {
          id: 3,
          product: '체육복',
          stock: 2,
        },
        {
          id: 4,
          product: '만연필',
          stock: 0,
        },
      ];

      // Answer
      // 방법1
      result = studentList.sort(function (a, b) {
        let i = a.product;
        let j = b.product;
        if (i < j) {
          return -1;
        } else if (i > j) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(result);

      // 방법2
      studentList.sort((a, b) => a.product.localeCompare(b.product));
      console.log(studentList);
    </script>
```
