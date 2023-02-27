import { MouseEvent } from 'react'
import { IBoardCommentElementType, IBoardCommentListProps } from './BoardCommentList.type'
import InfiniteScroll from 'react-infinite-scroller'
import CommentListItem from './BoardCommentList.item'

const BoardCommentListUI = (props: IBoardCommentListProps) => {
    const { data, onLoadMore } = props


    // 이벤트 버블링 해결법으로 currentTarget을 이용해서 onClick 이 가리키고있는 타겟을 선택하여 해결할 수있다.
    // 일반 target은 내가 선택한 태그의 타겟이다.
    const alertEventHandler = (event: MouseEvent<HTMLDivElement>) => {
        alert(`${event.currentTarget.id}님이 작성한 댓글입니다.`)
    }

    // 이벤트 버블링으로 자식을 선택하게되면 전 부모가 다 선택되는것을 알 수있다.
    const zzz = (event: MouseEvent<HTMLDivElement>) => {
        // event.stopPropagation() 를 통해서 이벤트 버블링이 되는걸 막을 수 있다.
        // 즉 상단으로 이벤트 버블링 되는걸 막을 수 있다는 뜻이다.
        event.stopPropagation()
        alert("저는 zzz 입니다.")
    }





    return (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {data?.fetchBoardComments.map((el: IBoardCommentElementType) => {
                return (
                    <CommentListItem
                        key={el._id}
                        el={el}
                        alertEventHandler={alertEventHandler}
                        zzz={zzz}
                    />
                )
            })
            }
        </InfiniteScroll>
    )
}

export default BoardCommentListUI