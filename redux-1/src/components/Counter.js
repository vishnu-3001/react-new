import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

function Counter(){
  const counter=useSelector(state=>state.counter);
  const showCounter=useSelector(state=>state.showCounter);
  const dispatch=useDispatch();
  function incrementHandler(){
    dispatch({ type: 'increment' });
  };
  function decrementHandler(){
    dispatch({ type: 'decrement' });
  };
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
              showCounter && <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
