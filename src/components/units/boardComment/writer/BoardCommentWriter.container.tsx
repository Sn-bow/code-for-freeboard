import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.graphql'
import { ICreateBoardComment } from './BoardCommentWriter.type'
import BoardCommentWriterUI from './BoardCommentWriter.presenter'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.graphql'
import { IMutation, IMutationCreateBoardCommentArgs } from '../../../../commons/types/generated/types'


const BoardCommentWriter = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [contents, setContents] = useState('')

    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)

    const router = useRouter()

    const ConfirmHandler = async () => {
        try {
            if (contents.length <= 100) {
                const myvariables: ICreateBoardComment = {
                    boardId: String(router.query.id),
                    createBoardCommentInput: {
                        writer: user,
                        password: password,
                        contents: contents,
                        rating: 4
                    }
                }
                //refetchQueries: { query: FETCH_BOARD_COMMENTS, variables: { boardId: router.query.id } }
                await createBoardComment({
                    variables: myvariables,
                    refetchQueries: [
                        {
                            query: FETCH_BOARD_COMMENTS,
                            variables: { boardId: router.query.id }
                        }
                    ]
                })
                alert("댓글달기 성공")
                setUser("")
                setPassword("")
                setContents("")
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                console.error(error.message)
                alert(error.message)
            }
        }
    }

    const userChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const contentsChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    }


    return (
        <BoardCommentWriterUI
            user={user}
            userChangeHandler={userChangeHandler}
            password={password}
            passwordChangeHandler={passwordChangeHandler}
            contents={contents}
            contentsChangeHandler={contentsChangeHandler}
            ConfirmHandler={ConfirmHandler}
        />
    )
}

export default BoardCommentWriter