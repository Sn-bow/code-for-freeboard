import { MouseEvent } from 'react'
import { getDate } from '../../../commons/libraries/utils'
import * as S from './BoardCommentList.style'
import { IBoardCommentElementType, IBoardCommentListProps } from './BoardCommentList.type'
import { Rate } from 'antd'

const BoardCommentListUI = (props: IBoardCommentListProps) => {
    const { data } = props


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
        <>
            {data?.fetchBoardComments.map((el: IBoardCommentElementType) => {
                return (
                    <S.Contain id={String(el.writer)} key={el._id} onClick={alertEventHandler}>
                        <S.CommentContain>
                            <S.UserImgBox>
                                <S.UserImg src='/images/common/userImg.png' alt='userIconImg' />
                            </S.UserImgBox>
                            <S.CommentBox>
                                <S.CommentUserBox onClick={zzz}>
                                    <S.UserStarBox>
                                        <S.UserName>{el.writer}</S.UserName>
                                        <S.Star><Rate defaultValue={el.rating} /></S.Star>
                                    </S.UserStarBox>
                                    <S.CommentEditBox>
                                        <S.PencilIconImg src='/images/boardComment/list/pencil.png' alt='pencilIcon' />
                                        <S.XIconImg src='/images/boardComment/list/x.png' alt='XIcon' />
                                    </S.CommentEditBox>
                                </S.CommentUserBox>
                                <S.CommentContentsBox>
                                    <S.Comment>{el.contents}</S.Comment>
                                </S.CommentContentsBox>
                            </S.CommentBox>
                        </S.CommentContain>
                        <S.CommentDateBox>
                            <S.Date>{getDate(el.createdAt)}</S.Date>
                        </S.CommentDateBox>
                    </S.Contain>
                )
            })
            }
        </>
    )
}

export default BoardCommentListUI