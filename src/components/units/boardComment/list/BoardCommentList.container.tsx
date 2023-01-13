import { useRouter } from 'next/router'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.graphql'
import { useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'

const BoardCommentList = () => {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.id
        }
    })

    // 삭제하기 기능 구현해보기

    return (
        <BoardCommentListUI data={data} />
    )
}

export default BoardCommentList