import { useAuth } from '../../../src/components/commons/custom-hooks/useAuth'


const HofTest = () => {
    useAuth()
    const onClickTest = (temp: string) => () => {
        console.log(temp)
    }

    return (
        <div>
            <button onClick={onClickTest('Hof 테스트!!')}>출력 !!</button>
        </div>
    )
}

export default HofTest