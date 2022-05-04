# 27일차 배열, 조건문

## 메서드란?

-> 메서드는 자료형에 포함된 함수이다. 하지만 전역 함수와 구분하기 위해 함수라고 말하지 않고 (빌트인) 메소드라고 일컫는다. 메소드는 원본 배열을 수정하는 메소드와 원본 배열을 수정하지 않는 배열이 있기 때문에 구분해서 사용해야 한다.

<br>

- unshift() : 배열의 맨 앞에 1개 이상의 요소를 추가하고, 배열의 새로운 길이를 반환할 수 있다.

- shift() :배열 내에서 0번째 인덱스에 오는 첫 번째 요소를 제거해 나머지 값의 위치를 한 칸씩 앞으로 오게끔 만든다. 매개변수가 없으며 제거된 첫 번째 요소를 반환할 수 있다는 특징이 있다. 빈 배열에서 사용하거나 배열의 length가 0일 경우 undefined를 반환한다.

- push() : 배열의 맨 끝에 1개 이상의 요소를 추가하고, 배열의 새로운 길이를 반환할 수 있다.

- pop() : 배열 내에 존재하는 요소의 맨 마지막 요소를 제거하고 해당 요소를 호출자에게 반환한다. 빈 배열에서 사용할 경우 undefined를 반환한다.

- reverse() : 배열 내 요소의 순서를 거꾸로 뒤집고 마지막 위치에 있는 인덱스의 요소가 0번째 위치에 오게 된다. 해당 메소드는 원본 배열을 변형시키고 그 참조를 반환한다는 특징이 있다.

- indexOf() : 배열에서 지정한 요소를 찾아 해당 요소의 인덱스를 탐색한다. 배열에 존재하지 않는 요소를 찾거나 해당 인덱스에서 지정된 요소가 탐색되지 않을 시 `-1`을 출력한다.
  첫 번째 매개변수에는 탐색하고자 하는 요소를 입력한다.
  두 번째 매개변수에는 탐색을 시작하고자 하는 인덱스를 입력하며 두 번째 매개변수는 생략할 수 있다.

- fill() : 배열 내 원하는 요소를 같은 값으로 채울 수 있다. 해당 메소드는 원본을 변경하는 메소드로, 복사본이 아닌 this 객체로 변경해 반환한다는 특징이 있다.

- flat() : Array.prototype.flat() 메소드는 배열 구조 내에 또 다른 배열 요소를 지정한 깊이까지 이어 붙인 새로운 배열을 생성한다. 기본값은 1이며 괄호 안에 들어간 숫자 만큼의 차원을 평탄화해주는 메소드이다. 매개변수에 infinity를 넣고 사용하면 하위배열이 없을 때 까지 평탄화가 이뤄진다. 빈 요소가 있을 경우 무시된다.

- includes() : `Array.prototype.includes()` 메소드는 배열이 특정 값이 포함되어있는지 확인할 수 있다. 탐색하려는 요소가 문자열일 경우에는 대소문자를 구분한다.
  첫 번째 매개변수에는 탐색하고자 하는 요소를 입력한다.
  두 번째 매개변수에는 탐색을 시작하고자 하는 인덱스를 입력한다. 생략이 가능하며, 값이 없는 경우에는 전체 요소를 대상으로 탐색한다.
  음수를 입력할 경우, 맨 뒤에 있는 인덱스를 `-1`으로 간주해 뒤에서부터 세기 시작한다. 배열의 길이보다 같거나 큰 수를 입력한 경우, `false`를 반환하며 배열을 탐색하지 않는다.

- find() : Array.prototype.find() 메소드는 배열에서 특정 조건에 부합하는 1개의 값을 찾아 반환한다. Array.prototype.filter() 메소드와 문법이 유사하지만, 단 하나의 요소 만을 찾는다는 점이 다르며 하나의 값만 찾기 때문에 Array.prototype.filter() 보다 성능이 우수하다. 어떤 요소도 특정 조건에 부합하지 못하면 undefined를 반환한다.

- filter() : Array.prototype.filter() 메소드는 배열에서 특정 조건에 부합하는 값을 찾고 그 값들로 이루어진 새로운 배열을 만들어 출력한다. 어떤 요소도 특정 조건에 부합하지 못하면 빈 배열을 반환한다. 해당 메소드는 숫자, 문자열, boolean과 같은 원시값 뿐 아니라 json 같은 객체를 사용해서 true인 값을 판별할 수 있다. 콜백함수의 반환값이 true인 모든 요소를 모아 새로운 배열로 만들어 출력하며 true가 아닌 요소들은 건너뛰며 새로운 배열에 포함시키지 않는다.

- findIndex() : Array.prototype.findIndex() 메소드는 주어진 조건에 부합하는 배열의 맨 첫 번째 요소의 인덱스를 반환한다. Array.prototype.find() 메소드와 비슷하지만 Array.prototype.find() 메소드는 여기서 첫 번째 인덱스가 아닌 첫 번째 요소를 반환한다는 차이가 있다. 배열 내에서 조건에 부합하는 요소가 존재하지 않으면 -1을 반환한다.

- map() : Array.prototype.map() 메소드는 배열 내에 있는 요소에 오름차순으로 접근해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 해당 메소드를 사용해 기존의 값을 재정의할 수도 있지만 새로운 형태의 값을 정의하는 것 또한 가능하다. 또, 객체나 json 형태의 데이터를 탐색하는 용도로 사용할 수 있기도 하며 이 과정에서 새로운 형태의 값을 정의하는 경우가 많다. 이러한 방식은 다른 순회하는 Array.prototype.filter() 메소드나 Array.prototype.find() 메소드, Array.prototype.forEach() 메소드 에서도 사용 가능하다.

- forEach() : Array.prototype.forEach() 메소드는 배열의 각 요소에 콜백을 1회 씩 실행하며 희소 배열과 같이 초기화 및 삭제되지 않은 인덱스 속성에 대해서는 실행하지 않는다. 콜백은 요소 값, 요소 인덱스, 순회 중인 배열과 같은 세 인수와 함께 호출된다. 배열을 직접적으로 변형하는 메소드는 아니지만 콜백이 변형할 수 있다는 특징이 있다. Array.prototype.map()은 새로운 배열을 생성하는 반면 Array.prototype.forEach()는 순회만 한다는 차이점이 있다.

- reduce() : Array.prototype.reduce() 메소드는 배열 내의 각 요소에 주어진 reducer 함수를 실행하고, 단 1개의 결과값을 반환한다. 해당 메소드는 4개의 매개변수를 갖는다. 바로 직전 콜백함수의 반환값을 누적하는 누적값, 그리고 순회를 돌고 있는 현재값, 현재 돌고 있는 요소의 index, array 전체이다. 보통 index와 array를 생략하고 많이 사용한다.

- Array.from() : 배열, 문자열 등 처럼 반복이 가능한 객체 (Iterable object) 혹은 유사 배열을 받아 새로운 배열 객체를 만든다. 여러 객체를 배열로 만들 때 주로 사용되며 객체 내의 모든 요소를 새로운 배열로 얕은 복사를 한다.

- concat() : 매개변수로 주어진 값 또는 배열을 이용해서 기존의 배열에 존재하던 요소를 사용해 새로운 배열을 만들 수 있고 기존 배열에 새로운 요소를 추가할 수도 있다. 주로 배열을 합치고자 할 때 자주 사용된다. 기존의 배열을 변경하지 않으며, 추가된 새로운 배열을 반환한다는 특징이 있다.

- sort() : 유니코드 코드 포인트에 의해 배열 내 요소를 오름차순으로 정렬하는데 이 과정에서 요소를 문자열로 취급해 재정렬한다. 해당 메소드를 사용하면 배열이 반환되지만 반환값이 사용되는 비중이 적은데 이는 복사본이 만들어지는 것이 아니라 배열 자체가 변경되기 때문이다.

```
<script>
      const cafe = ['coffee', 'cake', 'tea', 'cookie'];
      // 배열의 맨 앞으로 bread 추가
      cafe.unshift('bread');
      console.log(cafe);
      // 배열의 맨 앞 bread 삭제
      cafe.shift('bread');
      console.log(cafe);
      // 배열의 맨 뒤에 toast 추가
      cafe.push('toast');
      console.log(cafe);
      // 배열의 맨 뒤에 삭제
      cafe.pop();
      console.log(cafe);
      // 배열의 순서 뒤집기
      cafe.reverse();
      console.log(cafe);
      // 배열의 tea가 몇번째 인덱스의 위치하는지 찾아준다.
      // 배열의 없는 값일 경우 -1이 출력된다.
      search = cafe.indexOf('tea');
      console.log(search);
      // 배열을 합쳐준다. "-" 이것은 배열의 인덱스 연결시에 -를 사용해서 연결한다.
      // 전화번호 양식때 많이 사용 010-1234-5678
      const phonenumber = ['010', '1234', '5678'];
      join = phonenumber.join('-');
      console.log(join);
      // 배열을 전부 bread로 채워준다.
      // 배열의 인덱스를 지정하는데 그 인덱스 이후로 bread로 채워주다.
      // 빈 객체를 채워 넣을 때, map이랑 순차적으로 넣을 때 사용한다. 권장 X
      // fill = cafe.fill('bread');
      // console.log(fill);
      // fill1 = cafe.fill('bread', -1);
      // console.log(fill1);
      // 1번 인덱스에서 2번 인덱스까지 bread로 채운다
      // fill2 = cafe.fill('bread', 1, 3);
      // console.log(fill2);

      // 특정 요소가 포함되었는지 확인할 때 includes
      include1 = cafe.includes('bread');
      include2 = cafe.includes('cake');
      console.log(include1);
      console.log(include2);
      // 하나의 요소라도 조건을 만족하는지 확인할때는 find()
      // 배열에서 특정 조건에 부합하는 1개의 값을 찾아 반환한다.
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      find = arr.find((i) => i > 5);
      console.log(find);

      const arr2 = [
        {
          name: '안녕1',
          contents: '프론트엔드1',
          dataNum: 1,
        },
        {
          name: '안녕2',
          contents: 'contents2',
          dataNum: 2,
        },
        {
          name: '안녕3',
          contents: '프론트엔드3',
          dataNum: 3,
        },
        {
          name: 'title4',
          contents: 'contents4',
          dataNum: 4,
        },
        {
          name: 'title5',
          contents: 'contents5',
          dataNum: 5,
        },
      ];

      // 배열에서 특정 조건에 부합하는 값을 찾고 그 값들로 이루어진 새로운 배열을 만들어 출력한다.
      // 어떤 요소도 특정 조건에 부합하지 못하면 빈 배열을 반환한다.
      filter1 = arr2.filter((i) => i.dataNum > 3);
      console.log(filter1);

      filter2 = arr2.filter((i) => i.name.includes('안녕'));
      console.log(filter2);

      filter3 = arr2.filter((i) => i.contents.includes('프론트엔드'));
      console.log(filter3);

      filter4 = arr2.filter(
        (i) => i.contents.includes('프론트엔드') && i.name.includes('안녕1')
      );
      console.log(filter4);

      const cafe2 = ['coffee', 'cake', 'tea', 'cookie'];
      const cafe3 = [
        {
          item: 'coffee',
          amount: 5,
        },
        {
          item: 'cake',
          amount: 4,
        },
        {
          item: 'tea',
          amount: 7,
        },
        {
          item: 'cookie',
          amount: 3,
        },
      ];

      // 주어진 조건에 부합하는 배열의 맨 첫 번째 요소의 인덱스를 반환한다. length는 1부터 시작
      const index = cafe3.findIndex((obj) => obj.item.length <= 3);
      console.log(index);
    </script>
```

## 조건문

- **if문 CODE**

```jsx
//if

var test = 5;
if (test < 10) {
  //codes
}
```

- **if-else문 CODE**

```jsx
let x = 3;
let y = 7;

if (x == y) {
  document.write('if문으로 실행되었습니다.');
} else {
  document.write('else문으로 실행되었습니다.');
}
```

- **if문 CODE**

```jsx
let score = 69;
let money = 1000;

if (score > 90) {
  document.write('참 잘했습니다!<br>');
  money += 100000;
} else if (score > 80) {
  document.write('잘했습니다!<br>');
  money += 10000;
} else if (score > 70) {
  document.write('했습니다!<br>');
  money += 1000;
} else {
  money = 0;
}

document.write(money);
```

- **삼항 조건 연산자**

```jsx
let x = 3;

x == 4
  ? document.write('if문으로 실행되었습니다.<br>')
  : document.write('else문으로 실행되었습니다.<br>');

let result = x == 4 ? 100 : 200;
document.write(result);

document.write('<br>');

let score = 91;
let money = 1000;
score > 90
  ? (money += 100000)
  : score > 80
  ? (money += 10000)
  : score > 70
  ? (money += 1000)
  : (money = 0);

document.write(money);
```

- **Switch문 CODE**

```jsx
switch (new Date().getDay()) {
  case 0:
    document.write('일요일입니다.');
    break;
  case 1:
    document.write('월요일입니다.');
    break;
  case 2:
    document.write('2번째 case입니다.');
    break;
  case 3:
    document.write('3번째 case입니다.');
    break;
  default:
    break;
}
```
