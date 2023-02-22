import styled from '@emotion/styled'
import { useState } from 'react'

const Carousel = () => {
    const [carouselCount, setCarouselCount] = useState(0)
    // const carouselImgArray = ['/images/carousel/boxbanner1.png', '/images/carousel/boxbanner2.png', '/images/carousel/boxbanner3.png', '/images/carousel/boxbanner4.png']
    const carouselImgArray = ['https://dingco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4d78a05e-2a5a-4e9b-98ed-458b38c38a2a%2FUntitled.png?id=56f3ca26-ce96-4f99-9d6a-772a1ae4cf2f&table=block&spaceId=9c9b02bc-6cb6-4924-bf38-dad25e0fe77b&width=1340&userId=&cache=v2', 'https://dingco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faf4b4df3-e68b-4656-9935-b1f5b72cdcd3%2FUntitled.png?id=e586d95b-0b1d-4a38-864f-df9d3eb23c4d&table=block&spaceId=9c9b02bc-6cb6-4924-bf38-dad25e0fe77b&width=770&userId=&cache=v2', 'https://dingco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e29610c-35d8-425b-a918-837fcaa176ff%2FUntitled.png?id=c3c49ed6-080d-4dd8-8507-0f95e8a07a19&table=block&spaceId=9c9b02bc-6cb6-4924-bf38-dad25e0fe77b&width=720&userId=&cache=v2']

    const beforeHandler = () => {
        if (carouselCount === 0) {
            setCarouselCount(prv => prv + carouselImgArray.length - 1)
        } else {
            setCarouselCount(prv => prv - 1)
        }
    }

    const nextHandler = () => {
        if (carouselCount === carouselImgArray.length - 1) {
            setCarouselCount(0)
        } else {
            setCarouselCount(prv => prv + 1)
        }
    }

    return (
        <Contain>
            <ButtonStyle
                onClick={beforeHandler}
            >
                {'<'}
            </ButtonStyle>
            <Window>
                <FlexBox moveCount={carouselCount}>
                    {carouselImgArray.map((el, index) =>
                        <div key={index}>
                            <CarouselImg src={el} alt='img' />
                        </div>
                    )
                    }
                </FlexBox>
            </Window>
            <ButtonNext
                onClick={nextHandler}
            >
                {'>'}
            </ButtonNext>
        </Contain>
    )
}

export default Carousel

const Contain = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonStyle = styled.div`
    font-size: 25px;
    position: relative;
    left: 15px;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`

const ButtonNext = styled.div`
    font-size: 25px;
    position: relative;
    right: 15px;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`

const Window = styled.div`
    width: 1000px;
    height: 300px;
    overflow: hidden;
`

interface IFlexBpxType {
    moveCount: number
}

const FlexBox = styled.div`
    display: flex;
    margin-left: ${(props: IFlexBpxType) => `-${props.moveCount}00%`};
`

const CarouselImg = styled.img`
    width: 1000px;
    height: 300px;
    object-fit: contain;
    flex: none;
`