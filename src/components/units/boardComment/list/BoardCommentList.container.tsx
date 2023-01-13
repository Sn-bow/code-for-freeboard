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
    // boardCommentId 에서 event.target.id 로 id값을 받아올 경우에 이벤트 버블링 효과가 나올 수 있다.
    // 그러므로 event.currentTarget.id 로 내가 클릭한 태그에 대해서의 id 값을 가지고 오고 클릭 이벤트시 부모 이벤트가 실행되지 않도록 event.StopPropagation() 을 실행 시켜준다.!!!!
    // const onClickDelete = async (event) => {
    //     const myPassword = prompt("비밀번호를 입력해주세요")
    //     try {
    //         await deleteBoardComment({
    //             variables: {
    //                 password: myPassword,
    //                 boardCommentId: event.currentTarget.id,
    //             },
    //             refetchQueryies: [
    //                 {
    //                     query: FETCH_BOARD_COMMENTS,
    //                     variables: { boardId: router.query.id }
    //                 }
    //             ]
    //         })
    //     }
    // }


    return (
        <BoardCommentListUI
            data={data} />
    )
}

export default BoardCommentList