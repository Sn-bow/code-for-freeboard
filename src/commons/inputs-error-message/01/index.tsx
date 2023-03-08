import styled from '@emotion/styled'


const Error = styled.div`
    color: red;
    font-size: 20px;
`

interface IError01PropsType {
    errorMessage?: string
}

export default function Error01(props: IError01PropsType) {
    return (
        <Error>{props.errorMessage}</Error>
    )
}