import styled from '@emotion/styled'
import { AiOutlineUser, AiOutlinePaperClip, AiFillLike, AiFillDislike } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'

export const ProductDetailStyled = {
    MainContain: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    MainBox: styled.div`
        width: 1200px;
        height: 1602px;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 102px;
        padding-left: 102px;
        border: 1px solid black;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);    
    `,
    UserBox: styled.div`
        width: 100%;
        height: 140px;
        border-bottom: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 20px;
    `,
    ContentsBox: styled.div`
        width: 100%;
        height: 1300px;
        margin-top: 80px;
    `,
    LikeAndUnLikeBox: styled.div`
        width: 100%;
        height: 111px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    UserBoxContents: styled.div`
        display: flex;
    `,
    UserImageBox: styled.div`
        width: 46.67px;
        height: 46.67px;
        border-radius: 50%;
        background-color: lightgray;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    UserImage: styled(AiOutlineUser)`
        font-size: 40px;
    `,
    UserDataBox: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 16.67px;
    `,
    UserId: styled.span`
        font-size: 24px;
        font-weight: 500;
    `,
    CreateDate: styled.span`
        font-size: 16px;
        color: lightgray;
    `,
    ShareAndMapPinBox: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `,
    ShareIcons: styled(AiOutlinePaperClip)`
        font-size: 25px;
        margin-right: 15px;
    `,
    MapPinIcons: styled(HiOutlineMapPin)`
        font-size: 25px;
    `,
    ContentsTitle: styled.h1`
        font-size: 36px;
    `,
    ContentsImageBox: styled.div`
        display: flex;
        align-items: center;
    `,
    ContentsImage: styled.img`
        object-fit: cover;
    `,
    ContentsTextBox: styled.div`
        height: 30%;
        margin-top: 40px;
    `,
    ContentsText: styled.div`
        font-size: 16px;
        font-weight: 400;
        line-height: 23.68px;
    `,
    ContentsYoutubeBox: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 120px;
    `,
    ContentsYoutube: styled.div`
    `,
    Like: styled(AiFillLike)`
        font-size: 20px;
        padding-bottom: 10px;
    `,
    UnLike: styled(AiFillDislike)`
        font-size: 20px;
        padding-bottom: 10px;
    `,
    LikeBox: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 50px;
    `,
    UnLikeBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `,
    LikeCount: styled.div`
    `,
    UnLikeCount: styled.div`
    `,
    ButtonBox: styled.div`
        margin-top: 101px;
        margin-bottom: 87px;
        display: flex;
    `,
    ListMoveButton: styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 60px;
        width: 179px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #BDBDBD;
        background: #FFFFFF;
        margin-right: 24px;
    `,
    AmendMoveButton: styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 60px;
        width: 179px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #BDBDBD;
        background: #FFFFFF;
        margin-right: 24px;
    `,
    DeleteMoveButton: styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 60px;
        width: 179px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #BDBDBD;
        background: #FFFFFF;
    `,
}