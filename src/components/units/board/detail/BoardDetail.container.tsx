import { useRouter } from 'next/router'
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './BoardDetail.mutation'
import { useQuery, useMutation } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { IMutation, IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types'
import { MouseEvent } from 'react'

const BoardDetail = () => {

    const router = useRouter()

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId: String(router.query.id)
        }
    })

    const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD)

    // type any 수정해야함
    const deleteClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await deleteBoard({
                variables: {
                    boardId: e.currentTarget.id
                }
            })
            alert("성공적으로 삭제 되었습니다.")
            router.push(`/boards`)
        } catch (error) {
            console.error(error)
            console.log(error)
            alert(error)
        }

    }



    const moveOnClickHandler = () => {
        alert("수정하기 페이지로 이동합니다!")
        router.push(`/boards/detail/${router.query.id}/edit`)
    }

    const moveListHandler = () => {
        alert("목록으로 이동합니다.")
        router.push(`/boards`)
    }


    // like event
    const [likeBoard] = useMutation(LIKE_BOARD)

    const likeUpHandler = async () => {
        try {
            await likeBoard({
                variables: {
                    boardId: String(router.query.id)
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: { boardId: router.query.id }
                    }
                ]
            })
        } catch (error) {
            console.log(error)
        }
    }

    // dislike event
    const [dislikeBoard] = useMutation(DISLIKE_BOARD)

    const dislikeUpHandler = async () => {
        try {
            await dislikeBoard({
                variables: {
                    boardId: String(router.query.id)
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: { boardId: router.query.id }
                    }
                ]
            })
        } catch (error) {
            if (error === Error) {
                console.log(error)
                console.error(error)
                alert(error)
            }
        }
    }

    return (
        <BoardDetailUI
            data={data}
            deleteClickHandler={deleteClickHandler}
            moveOnClickHandler={moveOnClickHandler}
            moveListHandler={moveListHandler}
            likeUpHandler={likeUpHandler}
            dislikeUpHandler={dislikeUpHandler}
        />
    )
}

export default BoardDetail