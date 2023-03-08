import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'

const Input = styled.input`
    border: 1px red solid;
    width: 100px;
    height: 30px;
    border-radius: 5px;
`

interface IInput02PropsType {
    type: "text" | "password"
    register: UseFormRegisterReturn
}

export default function Input02(props: IInput02PropsType) {
    return (
        <Input type={props.type} {...props.register} />
    )
}