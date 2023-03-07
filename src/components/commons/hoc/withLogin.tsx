import { useRouter } from 'next/router'
import { useEffect } from 'react'


export const withLogin = (Component: any) => (props: any) => {
    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            alert('로그인 후 이용가능합니다!!')
            void router.push('/quiz-03/logIn')
        }
    }, [])

    return (
        <Component {...props} />
    )
}