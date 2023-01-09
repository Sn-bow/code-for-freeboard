import { useState } from "react"
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import CREATE_BOARD from './BoardCreate.mutation'
import BoardCreateUI from './BoardCreate.presenter'

const BoardCreate = () => {
    // change state
    const [boardValueState, setBoardValueState] = useState({
        user: '',
        password: '',
        title: '',
        content: '',
    })
    const { user, password, title, content } = boardValueState
    console.log(user)

    // error state
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentError, setContentError] = useState('')

    // mutation & router
    const [board] = useMutation(CREATE_BOARD)
    const router = useRouter()

    // changeHandler & errorHandler
    const boardStateChangeHandler = (e) => {
        const boardState = { ...boardValueState }
        boardState[e.target.name] = e.target.value
        setBoardValueState(boardState)
        // error 초기화 조건문
        if (boardState.user) {
            setUserError("")
        }
        if (boardState.password) {
            setPasswordError("")
        }
        if (boardState.title) {
            setTitleError("")
        }
        if (boardState.content) {
            setContentError("")
        }
    }

    // onClickSubmit Handler
    const onClickSubmit = async () => {
        if (user && password && title && content) {
            try {
                const result = await board({
                    variables: {
                        createBoardInput: {
                            writer: user,
                            password: password,
                            title: title,
                            contents: content
                        }
                    }
                })
                router.push(`/boards/detail/${result.data.createBoard._id}`)
                alert("등록에 성공하셨습니다!")
            } catch (error) {
                console.log(error)
                console.error(error)
                alert(error)
            }
        }
        // error 실행 조건문
        if (!user) {
            setUserError("작성자를 적어주세요!")
        }
        if (!password) {
            setPasswordError("패스워드를 적어주세요!")
        }
        if (!title) {
            setTitleError("제목을 적어주세요!")
        }
        if (!content) {
            setContentError("내용을 적어주세요!")
        }
    }

    return (
        <BoardCreateUI
            boardStateChangeHandler={boardStateChangeHandler}
            onClickSubmit={onClickSubmit}
            userError={userError}
            passwordError={passwordError}
            titleError={titleError}
            contentError={contentError}
            user={user}
            password={password}
            title={title}
            content={content}
        />
    )
}

export default BoardCreate