import { Contain, Hown, ContainBox, UserBox, IdFlexStyledBox, PasswordFlexStyledBox, UserInformationInput, UserInformationLabel, TitleBox, TitleLabel, TitleInput, ContentBox, ContentLabel, ContentInput, AddressBox, AddressSpan, AddressSection, AddressInput, AddressButton, AddressConsole, YoutubeBox, YoutubeLabel, YoutubeInput, PictureBox, PictureText, PictureSection, PictureContent, PictureContentSpan, MainSelectorBox, MainSelectorText, MainSelectorSection, MainSelectorYoutubeBox, MainSelectorPictureBox, InputRadio, RadioLabel, ConfirmBox, DeleteButton, EmendButton } from '../../styles/emotion'


const EmotionSection = () => {
    return (
        <Contain>
            <ContainBox>
                <Hown>게시물 등록</Hown>
                <UserBox>
                    <IdFlexStyledBox>
                        <UserInformationLabel htmlFor="user">작성자</UserInformationLabel>
                        <UserInformationInput type="text" id="user" placeholder='이름을 적어주세요' />
                    </IdFlexStyledBox>
                    <PasswordFlexStyledBox>
                        <UserInformationLabel htmlFor="password">비밀번호</UserInformationLabel>
                        <UserInformationInput type="password" id="password" placeholder='비밀번호를 적어주세요' />
                    </PasswordFlexStyledBox>
                </UserBox>
                <TitleBox>
                    <TitleLabel htmlFor="title">제목</TitleLabel>
                    <TitleInput type="text" id="title" placeholder='제목을 작성해주세요' />
                </TitleBox>
                <ContentBox>
                    <ContentLabel htmlFor="content">내용</ContentLabel>
                    <ContentInput type="text" id="content" placeholder='내용을 작성해주세요' />
                </ContentBox>
                <AddressBox>
                    <AddressSpan>주소</AddressSpan>
                    <AddressSection>
                        <AddressInput type="text" placeholder="07250" />
                        <AddressButton>우편번호 검색</AddressButton>
                    </AddressSection>
                    <AddressConsole type="text" />
                    <AddressConsole type="text" />
                </AddressBox>
                <YoutubeBox>
                    <YoutubeLabel htmlFor="youtube">유튜브</YoutubeLabel>
                    <YoutubeInput type="text" placeholder="링크를 복사해주세요" id="youtube" />
                </YoutubeBox>
                <PictureBox>
                    <PictureText>사진첨부</PictureText>
                    <PictureSection>
                        <PictureContent>
                            <PictureContentSpan>
                                +
                            </PictureContentSpan>
                            <PictureContentSpan>
                                upload
                            </PictureContentSpan>
                        </PictureContent>
                        <PictureContent>
                            <PictureContentSpan>
                                +
                            </PictureContentSpan>
                            <PictureContentSpan>
                                upload
                            </PictureContentSpan>
                        </PictureContent>
                        <PictureContent>
                            <PictureContentSpan>
                                +
                            </PictureContentSpan>
                            <PictureContentSpan>
                                upload
                            </PictureContentSpan>
                        </PictureContent>
                    </PictureSection>
                </PictureBox>
                <MainSelectorBox>
                    <MainSelectorText>메인 설정</MainSelectorText>
                    <MainSelectorSection>
                        <MainSelectorYoutubeBox>
                            <InputRadio name='mainSelector' type="radio" id="youtubeSelector" value="유튜브" checked />
                            <RadioLabel htmlFor="youtubeSelector">유튜브</RadioLabel>
                        </MainSelectorYoutubeBox>
                        <MainSelectorPictureBox>
                            <InputRadio name='mainSelector' type="radio" id="picture" value="사진" />
                            <RadioLabel htmlFor="picture">사진</RadioLabel>
                        </MainSelectorPictureBox>
                    </MainSelectorSection>
                </MainSelectorBox>
                <ConfirmBox>
                    <DeleteButton>최소하기</DeleteButton>
                    <EmendButton>수정하기</EmendButton>
                </ConfirmBox>
            </ContainBox>
        </Contain>
    )
}

export default EmotionSection