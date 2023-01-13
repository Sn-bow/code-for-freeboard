import { useRouter } from 'next/router'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.graphql'
import { useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
import { IQuery, IQueryFetchBoardCommentsArgs } from '../../../../commons/types/generated/types'

const BoardCommentList = () => {
    const router = useRouter()


    // 엄격하게 router.query.id 에대해서 설정할때 string이 아닌경우 아에 다른 페이지로 이동시키는 코드
    // if (typeof router.query.id !== "string") {
    //     router.push('/')
    //     return <></>
    // }

    const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: String(router.query.id)
        }
    })

    // 삭제하기 기능 구현해보기



    return (
        <BoardCommentListUI
            data={data} />
    )
}

export default BoardCommentList