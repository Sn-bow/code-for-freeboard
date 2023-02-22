import styled from '@emotion/styled'
import Carousel from '../../carousel/Carousel'

const Wrapper = styled.div`
    max-width: 1500px;
    height: 300px;
    background-color: skyblue;
`

const Banner = () => {
    return (
        <Wrapper>
            <Carousel />
        </Wrapper>
    )
}

export default Banner 