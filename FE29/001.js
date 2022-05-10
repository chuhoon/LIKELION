let value2 = {
  피카츄: 10,
  라이츄: 20,
  파이리: 30,
  꼬부기: 40,
  버터플: 50,
  야도란: 60,
  피죤투: 70,
  또가스: 80,
  메타몽: 90,
};

for (let i in value2) {
  console.log(i);
}

for (let i in value2) {
  console.log(i + value2[i]);
}

// 키 값만 뽑아냄
Object.keys(value2);

// value 값만 뽑아냄
Object.values(value2);

// 전체적으로 뽑아냄
Object.entries(value2);
