import { gql, useMutation, useQuery } from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/types'
import { v4 as uuidv4 } from 'uuid'

const FETCH_BOARDS = gql`
    query {
        fetchBoards{
            _id
            title
            writer
            contents
        }
    }
`

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            title
            writer
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

export default function ApolloCacheState() {
    const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
    const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(DELETE_BOARD)

    const onClickDelete = (boardId: string) => () => {
        void deleteBoard({
            variables: {
                boardId
            },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev, { readField }) => {
                            const deletedId = data?.deleteBoard // deleteBoard 에서 return 하는 값인 boardId 를 받아옴
                            console.log('deletedId : ', deletedId)
                            const filteredPrev = prev.filter((el: any) => readField('_id', el) !== deletedId)
                            return [...filteredPrev]
                        }
                    }
                })
            }
        })
    }

    const onClickCreate = () => {
        void createBoard({
            variables: {
                createBoardInput: {
                    writer: 'me',
                    password: '1234',
                    title: 'title',
                    contents: 'contents'
                }
            },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            // data.createBoard 는 createBoard 에서 return 되는 값이다.
                            return [data?.createBoard, ...prev]
                        }
                    }
                })
            }
        })
    }

    return (
        <>
            {
                data?.fetchBoards.map(el => (
                    <div key={uuidv4()}>
                        <div>{el.writer}</div>
                        <div>{el.title}</div>
                        <div>{el.contents}</div>
                        <button onClick={onClickDelete(el._id)}>삭제하기</button>
                    </div>
                ))
            }
            <button onClick={onClickCreate}>등록하기</button>
        </>
    )
}