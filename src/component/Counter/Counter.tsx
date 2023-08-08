import { useDispatch, useSelector } from "react-redux";
import Button from "../../component/button/Button";
import { counterActions } from "../../store/counter/slice/counterSlice";
import { getCounterValue, } from "../../store/counter/selectors/getCounterValue/getCounterValue";
//import { getCounter } from "../../store/counter/selectors/getCounter/getCounter";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 style={{ color: "white" }} data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={increment} data-testid="increment-btn">
                increment
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
