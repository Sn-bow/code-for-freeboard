import styled from '@emotion/styled'

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    max-width: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoardText = styled.div`
    font-size: 25px;
    padding: 15px;
    border-right: 1px solid black;
    
    &:hover {
        cursor: pointer;
    }
`

const MarketText = styled.div`
    font-size:25px;
    padding: 15px;
    border-right: 1px solid black;

    &:hover {
        cursor: pointer;
    }
`

const MypageText = styled.div`
    font-size: 25px;
    padding: 15px;

    &:hover {
        cursor: pointer;
    }
`

const Navigation = () => {
    return (
        <Wrapper>
            <Box>
                <BoardText>자유게시판</BoardText>
                <MarketText>중고마켓</MarketText>
                <MypageText>마이페이지</MypageText>
            </Box>
        </Wrapper>
    )
}

export default Navigation