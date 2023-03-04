import { useState } from 'react';
import PropsTest from './PropsTest';


export default function PropsDataPrevQuiz() {

    ["철수", "영희", "훈이", "맹구"].map((el, index) => {
        console.log(`${el}는 ${index}번째 칸에 들어있습니다.`)
        return 1
    })

    const [state, setState] = useState(0)


    const onClickAddCount = () => {
        setState(qwer => qwer + 1)
    }

    return (
        <>
            <div>
                {/* <PropsTest name='name'>
                    <div>안녕하세요 JSX 입니다</div>
                </PropsTest> */}

                {
                    PropsTest({
                        name: 'name2',
                        children: <div>안녕하세요 함수입니다</div>
                    })
                }
                <div>
                    Number : {state}
                    <button onClick={onClickAddCount}>Add + 1</button>
                </div>
            </div>
        </>
    )
}