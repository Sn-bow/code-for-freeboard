import { useRouter } from 'next/router'
import { useEffect } from 'react'


export const useAuth = () => {
    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            alert('로그인이 필요한 페이지입니다. 로그인을 시도해주세요')
            void router.push('/login')
        }
    }, [])
}