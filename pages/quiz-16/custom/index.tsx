import { useCountUp } from '../../../src/components/commons/custom-hooks/useCountUp'



const customHookPage = () => {
    const { count, onClickCountDown, onClickCountUp } = useCountUp()

    return (
        <div>
            <button onClick={onClickCountUp}>증가</button>
            <div>{count}</div>
            <button onClick={onClickCountDown}>감소</button>
        </div>
    )
}


export default customHookPage