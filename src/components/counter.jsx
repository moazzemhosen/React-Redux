
import { addCount } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'


export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.counter)

    return (
        <div>
            <h3>Counter:{count}</h3>
            <button onClick={() => {
                dispatch(addCount(1))
            }}>ADD 1</button>
        </div>
    )
}