import { ChangeEvent, useState } from 'react'



const BoardSearch = () => {
    const [searchInputState, setSearchInputState] = useState('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInputState(e.target.value)
    }

    const searchFunction = () => {

    }

    return (
        <div>
            <div>
                <input type='text' placeholder='제목을 검색해주세요' onChange={changeHandler} />
            </div>
            <div>
                <input type='text' placeholder='YYYY.MM.DD' />
                <input type='text' placeholder='YYYY.MM.DD' />
            </div>
            <div>
                <button>검색하기</button>
            </div>
        </div>
    )
}

export default BoardSearch