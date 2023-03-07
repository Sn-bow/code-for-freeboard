import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../commons/store/recoil'


export const withApollo = (Component: any) => (props: any) => {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    useEffect(() => {
        const result = localStorage.getItem('accessToken')
        if (result) setAccessToken(result)
    }, [])

    return <Component {...props} />
}