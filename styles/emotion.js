import styled from '@emotion/styled'
import { AiOutlineUser, AiOutlinePaperClip, AiFillLike, AiFillDislike } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'

export const Contain = styled.main`
    margin: 50px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ContainBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 102px;
    margin: 50px;
`;

export const Hown = styled.h1`
    padding-bottom: 80px;
`;



export const UserBox = styled.div`
    display: flex;
    height:128px;
`;

export const IdFlexStyledBox = styled.div`
    padding: 1px;
    display: flex;
    flex-direction: column;
    margin-right: 18px;
`

export const PasswordFlexStyledBox = styled.div`
    padding: 1px;
    display: flex;
    flex-direction: column;
`

export const UserInformationLabel = styled.label`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;

export const UserInformationInput = styled.input`
    width: 476px;
    height: 42px;
    border: 1px solid #BDBDBD;
    padding: 10px;
    border-radius: 5px;
`

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const TitleLabel = styled.label`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`

export const TitleInput = styled.input`
    width: 986px;
    height: 42px;
    border: 1px solid #BDBDBD;
    padding: 10px;
    border-radius: 5px;
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const ContentLabel = styled.label`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`

export const ContentInput = styled.textarea`
    width: 986px;
    height: 470px;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    padding: 10px;
    resize: none;
`

export const AddressBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 16px;
`

export const AddressSpan = styled.span`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`

export const AddressSection = styled.div`
    display: flex;
    margin-bottom: 16px;
`

export const AddressInput = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-right: 16px;
    text-align: center;
`

export const AddressButton = styled.button`
    background: black;
    color: white;
    width: 124px;
    height: 52px;
`

export const AddressConsole = styled.input`
    width: 986px;
    height: 42px;
    padding: 10px;
    margin-bottom: 16px;
`

export const YoutubeBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

export const YoutubeLabel = styled.label`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
`

export const YoutubeInput = styled.input`
    width: 986px;
    height: 42px;
    border: 1px solid #BDBDBD;
    padding: 10px;
    border-radius: 5px;
`

export const PictureBox = styled.div`
    margin-top: 40px;
    width: 996px;
`

export const PictureText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
`

export const PictureSection = styled.div`
    display: flex;
`

export const PictureContent = styled.div`
    background: lightgray;
    width: 78px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 22px;
`

export const PictureContentSpan = styled.span`
    color: #4F4F4F;
`

export const MainSelectorBox = styled.div`
    width: 996px;
    margin-top: 40px;
`

export const MainSelectorText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
`

export const MainSelectorSection = styled.div`
    display: flex;
`

export const MainSelectorYoutubeBox = styled.div`
    margin-right: 11px;
`

export const MainSelectorPictureBox = styled.div`
    margin-left: 11px;
`

export const InputRadio = styled.input`
    width: 12px;
    height: 12px;
`

export const RadioLabel = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding-left: 10px;
`

export const ConfirmBox = styled.div`
    margin-top: 80px;
`

export const DeleteButton = styled.button`
    padding: 16px 60px;
    margin-right: 24px;
    border: none;
    background: lightgray;
    color: #4F4F4F;
    text-align: center;
`

export const EmendButton = styled.button`
    padding: 16px 60px;
    border: none;
    background: #FFD600;
    color: black;
    text-align: center;
`

export const ErrorMessage = styled.div`
    margin-top: 10px;
    color: red;
`

// product detail page style emotion

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