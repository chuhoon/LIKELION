import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { soldout, sale } from '../modules/stockCounter';

function StockCounter() {
  const { message } = useSelector((state) => ({
    message: state.stockReducer.message,
  }));
  console.log(message);

  const { stock } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
  }));
  console.log(stock);

  const dispatch = useDispatch();

  const onSoldOutMessage = () => dispatch(soldout());
  const onSoldMessage = () => dispatch(sale());

  useEffect(() => {
    if (stock <= 0) {
      onSoldOutMessage();
    } else {
      onSoldMessage();
    }
  }, [stock]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default StockCounter;
