import { useRouter } from 'next/router'
import FETCH_BOARD from './BoardDetail.mutation'
import { useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'

const BoardDetail = () => {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })

    return (
        <BoardDetailUI data={data} />
    )
}

export default BoardDetail