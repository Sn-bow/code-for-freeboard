import { ProductDetailStyled } from './BoardDetail.style'
import { IBoardDetailUIProps } from './BoardDetail.type';



const BoardDetailUI = (props: IBoardDetailUIProps) => {
    const { data, deleteClickHandler, moveOnClickHandler, moveListHandler, likeUpHandler, dislikeUpHandler } = props
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
                                <UserId>{data?.fetchBoard.writer}</UserId>
                                <CreateDate>{data?.fetchBoard.createdAt}</CreateDate>
                            </UserDataBox>
                        </UserBoxContents>
                        <ShareAndMapPinBox>
                            <ShareIcons />
                            <MapPinIcons />
                        </ShareAndMapPinBox>
                    </UserBox>
                    <ContentsBox>
                        <ContentsTitle>{data?.fetchBoard.title}</ContentsTitle>
                        <ContentsImageBox>
                            <ContentsImage src='https://cdn.pixabay.com/photo/2022/11/28/00/42/man-7620937_640.jpg' />
                        </ContentsImageBox>
                        <ContentsTextBox>
                            <ContentsText>
                                {data?.fetchBoard.contents}
                            </ContentsText>
                        </ContentsTextBox>
                        <ContentsYoutubeBox>
                            <ContentsYoutube>youtube</ContentsYoutube>
                        </ContentsYoutubeBox>
                    </ContentsBox>
                    <LikeAndUnLikeBox>
                        <LikeBox>
                            <Like onClick={likeUpHandler} />
                            <LikeCount>{data?.fetchBoard.likeCount}</LikeCount>
                        </LikeBox>
                        <UnLikeBox>
                            <UnLike onClick={dislikeUpHandler} />
                            <UnLikeCount>{data?.fetchBoard.dislikeCount}</UnLikeCount>
                        </UnLikeBox>
                    </LikeAndUnLikeBox>
                </MainBox>
                <ButtonBox>
                    <ListMoveButton onClick={moveListHandler}>목록으로</ListMoveButton>
                    <AmendMoveButton onClick={moveOnClickHandler}>수정하기</AmendMoveButton>
                    <DeleteMoveButton id={data?.fetchBoard._id} onClick={deleteClickHandler}>삭제하기</DeleteMoveButton>
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