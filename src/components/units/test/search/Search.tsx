import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../../commons/types/generated/types'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import { ChangeEvent, MouseEvent, useState } from 'react'
import _ from 'lodash'

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int, $search: String){
        fetchBoards(page: $page, search: $search){
            writer
            title
            contents
        }
    }
`

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount($search: String){
        fetchBoardsCount(search: $search)
    }
`

const Span = styled.span`
    margin-right: 15px;
    font-size: 15px;

    &:hover {
        cursor: pointer;
    }
`
interface IKeywordPropsType {
    color: string,
    text: string
}

const KeywordSpan = styled.span`
    color: ${(props: IKeywordPropsType) => props.color === props.text ? 'red' : 'black'};
`

export default function Search() {
    const [page, setPage] = useState<number>(1)
    const [keyword, setKeyword] = useState('')

    const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS, {
        variables: {
            page: 1
        }
    })

    const { data: fetchBoardsCount, refetch: countRefetch } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)
    const boardsCount: number = fetchBoardsCount?.fetchBoardsCount ?? 0

    const onClickPageNation = (event: MouseEvent<HTMLSpanElement>) => {
        refetch({ page: Number(event.currentTarget.id) }) // 검색에서 refetch할때, 사용한 search  검색어가 저장되어있는 상태이므로 추가로 search 포함되지 않아도됨
    }

    const onClickNextPage = () => {
        if (page + 10 <= Math.ceil(boardsCount / 10)) {
            setPage(prv => prv + 10)
            refetch({ page: page + 10 })
        }
    }

    const onClickBeforePage = () => {
        if (page !== 1) {
            setPage(prv => prv - 10)
            refetch({ page: page - 10 })
        }
    }

    // lodash - debounce
    const handleOnChange = _.debounce((value) => {
        refetch({ page: 1, search: value })
        countRefetch({ search: value })
        setKeyword(value)
    }, 500)

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        handleOnChange(event.target.value)
    }

    return (
        <>
            <div>
                <input type='text' onChange={onChangeInput} />
            </div>
            <div>
                {data?.fetchBoards.map(el => (
                    <div key={uuidv4()}>
                        <Span>{el.writer}</Span>
                        <Span>{el.title.replaceAll(keyword, `%$#@${keyword}%$#@`).split('%$#@').map(item => (
                            <KeywordSpan color={item} text={keyword} key={uuidv4()}>{item}</KeywordSpan>
                        ))}</Span>
                        <Span>{el.contents}</Span>
                    </div>
                ))}
                <div>
                    <Span
                        onClick={onClickBeforePage}
                    >
                        {`<`}
                    </Span>
                    {new Array(10).fill(1).map((_, index) =>
                        index + page <= Math.ceil(boardsCount / 10)
                        &&
                        (
                            <Span
                                id={(index + page).toString()}
                                key={uuidv4()}
                                onClick={onClickPageNation}
                            >
                                {index + page}
                            </Span>
                        )
                    )
                    }
                    <Span
                        onClick={onClickNextPage}
                    >
                        {`>`}
                    </Span>
                </div>
            </div>
        </>
    )
}

