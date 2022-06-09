function App() {
  return <ProductList />;
}

function ProductList() {
  const productList = {
    products: [
      {
        title: '개발자 무릎 담요',
        price: 17500,
        id: 101,
      },
      {
        title: 'Hack Your Life 개발자 노트북 파우치',
        price: 29000,
        id: 102,
      },
      {
        title: '우당탕탕 라이켓의 실험실 스티커북',
        price: 29000,
        id: 103,
      },
      {
        title: '버그를 Java라 버그잡는 개리씨 키링',
        price: 29000,
        id: 104,
      },
    ],
  };

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const productArray = productList.products.map((i) => (
    <div key={i.id}>
      <h2>
        {i.id - 100} {i.title}
      </h2>
      <p>{i.price}</p>
    </div>
  ));

  return <div>{productArray}</div>;
}

export default App;
