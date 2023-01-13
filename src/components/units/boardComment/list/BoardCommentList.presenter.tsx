import { getDate } from '../../../commons/libraries/utils'
import * as S from './BoardCommentList.style'
import { IBoardCommentListProps, IFetchBoardCommentsEL } from './BoardCommentList.type'

const BoardCommentListUI = (props: IBoardCommentListProps) => {
    const { data } = props
    return (
        <>
            {data?.fetchBoardComments.map((el: IFetchBoardCommentsEL) => {
                return (
                    <S.Contain key={el._id}>
                        <S.CommentContain>
                            <S.UserImgBox>
                                <S.UserImg src='/images/common/userImg.png' alt='userIconImg' />
                            </S.UserImgBox>
                            <S.CommentBox>
                                <S.CommentUserBox>
                                    <S.UserStarBox>
                                        <S.UserName>{el.writer}</S.UserName>
                                        <S.Star>{el.rating}</S.Star>
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