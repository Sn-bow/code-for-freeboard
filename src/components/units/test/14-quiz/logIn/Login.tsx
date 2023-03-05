import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../../../commons/store/recoil'
import { IMutation, IMutationLoginUserArgs } from '../../../../../commons/types/generated/types'

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    const router = useRouter()

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLogin = async () => {
        try {
            const result = await loginUser({
                variables: {
                    email,
                    password
                }
            })
            const accessToken = result.data?.loginUser.accessToken
            if (!accessToken) {
                Modal.error({ content: "로그인에 실패하셨습니다. 다시 시도해주세요!" });
                return;
            }
            setAccessToken(accessToken)
            await router.push('/quiz-03/login-success')
        } catch (error) {
            if (error instanceof Error) {
                Modal.error({ content: error.message })
            }
        }
    }

    return (
        <div>
            Email : <input type='text' onChange={onChangeEmail} />
            Password : <input type='password' onChange={onChangePassword} />
            <button onClick={onClickLogin}>LoginIn</button>
        </div>
    )
}