import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IQuery, IQueryFetchBoardArgs } from '../../../commons/types/generated/types'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            images
        }
    }
`


export default function BoardDetail() {
    // const [fetchBoard, setFetchBoard] = useState()
    const router = useRouter()
    const boardId: string = router.query?.board_id?.toString() ?? ''

    const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId
        }
    })
    console.log(data)

    useEffect(() => {
    }, [boardId])

    return (
        <>
            <div>
                <div>{data?.fetchBoard.writer}</div>
            </div>
            <div>
                <div>{data?.fetchBoard.title}</div>
            </div>
            <div>
                <div>{data?.fetchBoard.contents}</div>
            </div>
            <div>
                {data?.fetchBoard.images?.map((el, index) => (
                    <img
                        key={index}
                        src={`https://storage.googleapis.com/${el}`}
                        alt={el}
                        style={{ width: '100px', height: '100px' }}
                    />
                ))}
            </div>
        </>
    )
}