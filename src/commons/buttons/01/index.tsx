import styled from '@emotion/styled'

interface IButtonStylePropsType {
    allInputState: boolean
}

const Button = styled.button`
    background-color: ${(props: IButtonStylePropsType) => props.allInputState ? "red" : "white"};
`

interface IButton01PropsType {
    isValid: boolean
    content: string
}

export default function Button01(props: IButton01PropsType) {
    return (
        <Button allInputState={props.isValid}>{props.content}</Button>
    )
}