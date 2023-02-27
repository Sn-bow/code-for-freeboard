import { Rate } from 'antd'
import { MouseEvent, useState } from 'react'
import { getDate } from '../../../commons/libraries/utils'
import * as S from './BoardCommentList.style'
import { IBoardCommentElementType } from './BoardCommentList.type'

interface ICommentListItemPropsType {
    el: IBoardCommentElementType
    alertEventHandler: (event: MouseEvent<HTMLDivElement>) => void
    zzz: (event: MouseEvent<HTMLDivElement>) => void
}

const CommentListItem = (props: ICommentListItemPropsType) => {
    const { el, alertEventHandler, zzz } = props
    const [modifyState, setModifyState] = useState(false)

    const modifyHanlder = (e: MouseEvent<HTMLImageElement>) => {
        e.stopPropagation()
        setModifyState(prv => !prv)
    }

    return (
        <>
            {
                !modifyState
                    ?
                    <S.Contain id={String(el.writer)} onClick={alertEventHandler}>
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
                                        <S.PencilIconImg src='/images/boardComment/list/pencil.png' alt='pencilIcon' onClick={modifyHanlder} />
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
                    :
                    <input type='text' placeholder='수정할 내용을 입력해 주세요' />
            }
        </>
    )
}

export default CommentListItem