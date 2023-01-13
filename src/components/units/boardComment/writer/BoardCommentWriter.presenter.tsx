import * as S from './BoardCommentWriter.styles'
import { IBoardCommentWriterUIPropsType } from './BoardCommentWriter.type'

const BoardCommentWriterUI = (props: IBoardCommentWriterUIPropsType) => {
    const {
        user,
        password,
        contents,
        userChangeHandler,
        passwordChangeHandler,
        contentsChangeHandler,
        ConfirmHandler
    } = props


    return (
        <S.Contain>
            <S.TextBox>
                <S.VectorImg src='/images/boardComment/writer/Vector.png' alt='vector_img' />
                <S.CommentText>댓글</S.CommentText>
            </S.TextBox>
            <S.UserBox>
                <S.UserNameInputBox>
                    <S.UserNameInput value={user} type='text' placeholder='작성자' onChange={userChangeHandler} />
                </S.UserNameInputBox>
                <S.PasswordInputBox>
                    <S.PasswordInput value={password} type='password' placeholder='비밀번호' onChange={passwordChangeHandler} />
                </S.PasswordInputBox>
                <S.StarBox>
                    밤하늘의 스타 이 올 자리
                </S.StarBox>
            </S.UserBox>
            <S.WriterBox>
                <S.WriterTextArea value={contents} placeholder='개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' onChange={contentsChangeHandler} />
                <S.WriterConfirmBox>
                    <S.TextLength>{contents.length}/100</S.TextLength>
                    <S.ConfirmButton onClick={ConfirmHandler}>등록하기</S.ConfirmButton>
                </S.WriterConfirmBox>
            </S.WriterBox>
        </S.Contain>
    )
}

export default BoardCommentWriterUI