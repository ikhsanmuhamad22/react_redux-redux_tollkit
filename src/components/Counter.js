import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispath = useDispatch();

  const handleIncrement = () => {
    return dispath(counterActions.increment());
  };
  const handleIncrease = () => {
    return dispath(counterActions.increase(5)); // {type: UNIQU_IDENTIFIER, payload: what we fill }
  };
  const handleDecrement = () => {
    return dispath(counterActions.decrement());
  };
  const handleShowCounter = () => {
    return dispath(counterActions.toggleCounter());
  };

  // this is when you use redux just redux
  // const handleIncrement = () => {
  //   return dispath({type: 'INCREMENT'});
  // };
  // const handleIncrease = () => {
  //   return dispath({type: 'INCREASE', value: 5});
  // };
  // const handleDecrement = () => {
  //   return dispath({type: 'DECREMENT'});
  // };
  // const handleShowCounter = () => {
  //   return dispath(type: 'TOGGLE');
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={handleDecrement}>decrement</button>
          <button onClick={handleIncrease}>increase 5</button>
          <button onClick={handleIncrement}>increment</button>
        </div>
      )}
      <button onClick={handleShowCounter}>Toggle button</button>
    </main>
  );
};

export default Counter;
