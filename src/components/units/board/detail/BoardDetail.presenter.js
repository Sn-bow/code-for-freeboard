import { ProductDetailStyled } from './BoardDetail.style'

const BoardDetailUI = ({ data }) => {
    return (
        <>
            <MainContain>
                <MainBox>
                    <UserBox>
                        <UserBoxContents>
                            <UserImageBox>
                                <UserImage />
                            </UserImageBox>
                            <UserDataBox>
                                <UserId>{data && data.fetchBoard.writer}</UserId>
                                <CreateDate>{data && data.fetchBoard.CreateDate}</CreateDate>
                            </UserDataBox>
                        </UserBoxContents>
                        <ShareAndMapPinBox>
                            <ShareIcons />
                            <MapPinIcons />
                        </ShareAndMapPinBox>
                    </UserBox>
                    <ContentsBox>
                        <ContentsTitle>{data && data.fetchBoard.title}</ContentsTitle>
                        <ContentsImageBox>
                            <ContentsImage src='https://cdn.pixabay.com/photo/2022/11/28/00/42/man-7620937_640.jpg' />
                        </ContentsImageBox>
                        <ContentsTextBox>
                            <ContentsText>
                                {data && data.fetchBoard.contents}
                            </ContentsText>
                        </ContentsTextBox>
                        <ContentsYoutubeBox>
                            <ContentsYoutube>youtube</ContentsYoutube>
                        </ContentsYoutubeBox>
                    </ContentsBox>
                    <LikeAndUnLikeBox>
                        <LikeBox>
                            <Like />
                            <LikeCount>{data && data.fetchBoard.likeCount}</LikeCount>
                        </LikeBox>
                        <UnLikeBox>
                            <UnLike />
                            <UnLikeCount>{data && data.fetchBoard.dislikeCount}</UnLikeCount>
                        </UnLikeBox>
                    </LikeAndUnLikeBox>
                </MainBox>
                <ButtonBox>
                    <ListMoveButton>목록으로</ListMoveButton>
                    <AmendMoveButton>수정하기</AmendMoveButton>
                    <DeleteMoveButton>삭제하기</DeleteMoveButton>
                </ButtonBox>
            </MainContain>
        </>
    )
}

export default BoardDetailUI;

const {
    MainContain, MainBox, UserBox, ContentsBox, LikeAndUnLikeBox, UserBoxContents, UserImage,
    UserImageBox, UserDataBox, UserId, CreateDate, ShareAndMapPinBox, ShareIcons, MapPinIcons,
    ContentsTitle, ContentsImageBox, ContentsImage, ContentsTextBox, ContentsText,
    ContentsYoutubeBox, ContentsYoutube, Like, UnLike, LikeBox, UnLikeBox, LikeCount,
    UnLikeCount, ButtonBox, ListMoveButton, AmendMoveButton, DeleteMoveButton
} = ProductDetailStyled