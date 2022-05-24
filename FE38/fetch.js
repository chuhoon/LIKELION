fetch(
  'https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json'
)
  .then(function (response) {
    console.log(1);
    return response.json();
  })
  .then((json) => {
    let 지역 = json.find((s) => s['시·도별(1)'] == '전국');
    console.log(지역);
    console.log(지역['1차 접종 누계']);
    console.log(지역['2차 접종 퍼센트']);
  });

async function 접종퍼센트(지역) {
  const response = await fetch(
    'https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json'
  );
  const data = await response.json();
  const 접종퍼센트 = data.find((s) => s['시·도별(1)'] == 지역)[
    '2차 접종 퍼센트'
  ];
  console.log(접종퍼센트);
}

접종퍼센트('전국');

const txt = fetch('https://reqres.in/api/products/3')
  .then((response) => response.text())
  .then((text) => console.log(text));

async function getImg() {
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg = await response.blob();
  console.log(blobImg);
}
getImg();

async function printImg() {
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg = await response.blob();

  //blob을 담을 img 태그를 만든다.
  const img = document.createElement('img');
  //html body에 위에서 만든 img 태그를 삽입한다.
  document.body.append(img);
  //img 태그의 주소를 설정한다.
  img.src = URL.createObjectURL(blobImg);
}
printImg();

/*
async function request() {
  const response = await fetch('url 기입',
  {
    method: "GET", //POST, DELETE, PATH, PUT
	  headers: {
			"Content-type": "콘텐츠 형태",
			//application/json, text/plain 등
		},
		body: JSON.stringify(
			
		);
  });
  const data = await response.json();
  console.log(data);
}
request();
*/

async function get() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data);
}
get();

async function post() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      //문자열로 변환하지 않으면 에러발생
      title: '오늘의 간식',
      body: '고소미',
      userId: 3,
    }),
  });
  const data = await response.json();
  console.log(data);
}
post();
