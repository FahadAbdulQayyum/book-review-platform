// import App from "../App";
import CustomNavbar from "../components/customNav";
import Home from "../components/home";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
import { RootState } from "../store";
import ReviewForm from "../components/reviewForm";
import App from "../App";


export default function Root() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()


    return (
        <>
            {/* <>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
            </> */}
            {/* <CustomNavbar />
            <Home /> */}
            <Home />
            {/* <ReviewForm /> */}
            {/* <CustomNavbar /> */}
            {/* <App /> */}
        </>
    );
}