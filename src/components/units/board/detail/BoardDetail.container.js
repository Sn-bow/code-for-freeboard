import { useRouter } from 'next/router'
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.mutation'
import { useQuery, useMutation } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'

const BoardDetail = () => {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const deleteClickHandler = async (e) => {
        try {
            await deleteBoard({
                variables: {
                    boardId: e.target.id
                }
            })
            alert("성공적으로 삭제 되었습니다.")
            router.push(`/boards`)
        } catch (error) {
            console.error(error.message)
            console.log(error.message)
            alert(error.message)
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

    return (
        <BoardDetailUI
            data={data}
            deleteClickHandler={deleteClickHandler}
            moveOnClickHandler={moveOnClickHandler}
            moveListHandler={moveListHandler}
        />
    )
}

export default BoardDetail