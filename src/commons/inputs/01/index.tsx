import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'

const Input = styled.input`
    width: 100px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-weight: bold;
`
interface IInput01PropsType {
    type: 'text' | 'password'
    register: UseFormRegisterReturn
}

const Input01 = (props: IInput01PropsType) => {
    return (
        <Input type={props.type} {...props.register} />
    )
}

export default Input01