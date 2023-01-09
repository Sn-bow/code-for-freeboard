import { gql } from '@apollo/client'

const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      images
    }
  }
`

export default FETCH_BOARD