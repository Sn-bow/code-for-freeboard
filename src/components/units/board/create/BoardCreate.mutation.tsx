import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
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

export const UPDATE_BOARD = gql`
mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!){
  updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId){
      _id
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

export const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
  fetchBoard(boardId: $boardId){
    _id
    writer
    title
    contents
  }
}
`