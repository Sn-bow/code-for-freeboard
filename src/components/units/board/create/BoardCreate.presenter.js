import * as S from '../../../../../styles/emotion'

const BoardCreateUI = (props) => {
    const {
        boardStateChangeHandler,
        onClickSubmit,
        userError,
        passwordError,
        titleError,
        contentError,
        user,
        password,
        title,
        content,
        onClickUpdate,
        isEdit,
        cancleHandler,
        data
    } = props

    return (
        <S.Contain>
            <S.ContainBox>
                <S.Hown>{`게시물 ${isEdit ? '등록' : '수정'}`}</S.Hown>
                <S.UserBox>
                    <S.IdFlexStyledBox>
                        <S.UserInformationLabel htmlFor="user">작성자</S.UserInformationLabel>
                        <S.UserInformationInput
                            name='user'
                            defaultValue={isEdit ? user : data?.fetchBoard.writer}
                            type="text"
                            id="user"
                            placeholder='이름을 적어주세요'
                            onChange={boardStateChangeHandler}
                        />
                        <S.ErrorMessage>{userError}</S.ErrorMessage>
                    </S.IdFlexStyledBox>
                    <S.PasswordFlexStyledBox>
                        <S.UserInformationLabel htmlFor="password">비밀번호</S.UserInformationLabel>
                        <S.UserInformationInput
                            name='password'
                            value={password}
                            type="password"
                            id="password"
                            placeholder='비밀번호를 적어주세요'
                            onChange={boardStateChangeHandler}
                        />
                        <S.ErrorMessage>{passwordError}</S.ErrorMessage>
                    </S.PasswordFlexStyledBox>
                </S.UserBox>
                <S.TitleBox>
                    <S.TitleLabel htmlFor="title">제목</S.TitleLabel>
                    <S.TitleInput
                        name='title'
                        defaultValue={isEdit ? title : data?.fetchBoard.title} type="text"
                        id="title"
                        placeholder='제목을 작성해주세요'
                        onChange={boardStateChangeHandler}
                    />
                    <S.ErrorMessage>{titleError}</S.ErrorMessage>
                </S.TitleBox>
                <S.ContentBox>
                    <S.ContentLabel htmlFor="content">내용</S.ContentLabel>
                    <S.ContentInput
                        name='content'
                        defaultValue={isEdit ? content : data?.fetchBoard.contents} type="text"
                        id="content"
                        placeholder='내용을 작성해주세요'
                        onChange={boardStateChangeHandler}
                    />
                    <S.ErrorMessage>{contentError}</S.ErrorMessage>
                </S.ContentBox>
                <S.AddressBox>
                    <S.AddressSpan>주소</S.AddressSpan>
                    <S.AddressSection>
                        <S.AddressInput type="text" placeholder="07250" />
                        <S.AddressButton>우편번호 검색</S.AddressButton>
                    </S.AddressSection>
                    <S.AddressConsole type="text" />
                    <S.AddressConsole type="text" />
                </S.AddressBox>
                <S.YoutubeBox>
                    <S.YoutubeLabel htmlFor="youtube">유튜브</S.YoutubeLabel>
                    <S.YoutubeInput type="text" placeholder="링크를 복사해주세요" id="youtube" />
                </S.YoutubeBox>
                <S.PictureBox>
                    <S.PictureText>사진첨부</S.PictureText>
                    <S.PictureSection>
                        <S.PictureContent>
                            <S.PictureContentSpan>
                                +
                            </S.PictureContentSpan>
                            <S.PictureContentSpan>
                                upload
                            </S.PictureContentSpan>
                        </S.PictureContent>
                        <S.PictureContent>
                            <S.PictureContentSpan>
                                +
                            </S.PictureContentSpan>
                            <S.PictureContentSpan>
                                upload
                            </S.PictureContentSpan>
                        </S.PictureContent>
                        <S.PictureContent>
                            <S.PictureContentSpan>
                                +
                            </S.PictureContentSpan>
                            <S.PictureContentSpan>
                                upload
                            </S.PictureContentSpan>
                        </S.PictureContent>
                    </S.PictureSection>
                </S.PictureBox>
                <S.MainSelectorBox>
                    <S.MainSelectorText>메인 설정</S.MainSelectorText>
                    <S.MainSelectorSection>
                        <S.MainSelectorYoutubeBox>
                            <S.InputRadio name='mainSelector' type="radio" id="youtubeSelector" value="유튜브" />
                            <S.RadioLabel htmlFor="youtubeSelector">유튜브</S.RadioLabel>
                        </S.MainSelectorYoutubeBox>
                        <S.MainSelectorPictureBox>
                            <S.InputRadio name='mainSelector' type="radio" id="picture" value="사진" />
                            <S.RadioLabel htmlFor="picture">사진</S.RadioLabel>
                        </S.MainSelectorPictureBox>
                    </S.MainSelectorSection>
                </S.MainSelectorBox>
                <S.ConfirmBox>
                    {!isEdit && <S.DeleteButton onClick={cancleHandler}>최소하기</S.DeleteButton>}
                    <S.EmendButton onClick={isEdit ? onClickSubmit : onClickUpdate}>{isEdit ? "등록하기" : "수정하기"}</S.EmendButton>
                </S.ConfirmBox>
            </S.ContainBox>
        </S.Contain>
    )
}

export default BoardCreateUI