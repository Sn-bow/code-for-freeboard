import { ChangeEvent, useState } from "react"
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from './BoardCreate.mutation'
import BoardCreateUI from './BoardCreate.presenter'
import { IBoardCreateProps, IBoardCreateValueState, IMyvariables } from './BoardCreate.type'



const BoardCreate = (props: IBoardCreateProps) => {
    const { isEdit } = props
    // change state
    const [boardValueState, setBoardValueState] = useState<IBoardCreateValueState>({
        user: '',
        password: '',
        title: '',
        content: '',
    })
    const { user, password, title, content }: IBoardCreateValueState = boardValueState

    // error state
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentError, setContentError] = useState('')

    // mutation
    const [board] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    // router
    const router = useRouter()

    // query
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })

    // changeHandler & errorHandler
    const boardStateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
    const tesxtAreaStateChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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



    // onClickUpdate Handler
    const onClickUpdate = async () => {
        try {
            // 수정하기 값 유지 코드
            const myvariables: IMyvariables = {
                updateBoardInput: {},
                password: password,
                boardId: router.query.id
            }
            if (title) myvariables.updateBoardInput.title = title
            if (content) myvariables.updateBoardInput.contents = content

            const update = await updateBoard({
                variables: myvariables
            })
            alert("수정에 성공하셨습니다.")
            router.push(`/boards/detail/${update.data.updateBoard._id}`)
        } catch (error) {
            console.log(error)
            console.error(error)
            alert(error)
        }
    }

    // 취소하기 버튼
    const cancleHandler = () => {
        router.push(`/boards/detail/${router.query.id}`)
    }

    return (
        <BoardCreateUI
            boardStateChangeHandler={boardStateChangeHandler}
            onClickSubmit={onClickSubmit}
            userError={userError}
            passwordError={passwordError}
            titleError={titleError}
            contentError={contentError}
            onClickUpdate={onClickUpdate}
            isEdit={isEdit}
            cancleHandler={cancleHandler}
            data={data}
            tesxtAreaStateChangeHandler={tesxtAreaStateChangeHandler}
        />
    )
}

export default BoardCreate