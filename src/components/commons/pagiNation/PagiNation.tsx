import styled from '@emotion/styled'


const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
`

const PagiNum = styled.span`
    font-size: 20px;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
    }
`

interface IPagiNationPropsType {
    pageRefetchHandler: (pageNum: string) => void
    pagiCount: number
    nextPagiHandler: () => void
    prevPagiHandler: () => void
    lastPage: number
}

const PagiNation = (props: IPagiNationPropsType) => {
    const pageNumArray = new Array(10).fill(1)

    return (
        <Box>
            <PagiNum
                onClick={props.prevPagiHandler}
            >
                {'<'}
            </PagiNum>
            {
                pageNumArray.map((_, index) =>
                    index + props.pagiCount <= props.lastPage
                    &&
                    (
                        <PagiNum
                            key={index}
                            id={(index + props.pagiCount).toString()}
                            onClick={(e) => { props.pageRefetchHandler(e.currentTarget.id); }}
                        >
                            {index + props.pagiCount}
                        </PagiNum>
                    )
                )
            }
            <PagiNum
                onClick={props.nextPagiHandler}
            >
                {'>'}
            </PagiNum>
        </Box>
    )
}

export default PagiNation