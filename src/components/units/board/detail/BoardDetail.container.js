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
        } catch (error) {
            console.error(error.message)
            console.log(error.message)
            alert(error.message)
        }

    }

    return (
        <BoardDetailUI data={data} deleteClickHandler={deleteClickHandler} />
    )
}

export default BoardDetail