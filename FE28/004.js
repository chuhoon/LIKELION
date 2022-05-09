let 성비 = ['male', 'female', 'male', 'female', 'female'];

let 남성 = 0;

for (let i = 0; i < 성비.length; i++) {
  if (성비[i] == 'male') {
    남성++;
  }
}

(남성 / 성비.length) * 100 + '%';

성비.filter((i) => i == 'male').length;
