import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter/counterSlice";


const Counter = () => {
  const [amount, setAmount] = useState();
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    <h1 className="title">Counter App - Redux</h1>
    <div className="counter-box">
      <h1>{countValue}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div className="buttons">
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by amount</button>
      </div>
    </div>
    </>
  );
};

export default Counter;
