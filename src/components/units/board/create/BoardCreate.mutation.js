import { gql } from '@apollo/client'

const CREATE_BOARD = gql`
mutation createBoard( $createBoardInput: CreateBoardInput! ){
    createBoard( createBoardInput: $createBoardInput ){
      _id   # body에 데이터를 심어서 보낸다음 배엔드에서 보내는 것들을 선택하기위해 아래와 같이 적음
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
    }
  }
`
export default CREATE_BOARD;