import { useEffect } from 'react'

declare const window: typeof globalThis & {
    kakao: any;
}

export default function KakaoMapPage() {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a9445fe307cdae2bd0b042e5274416e2"
        document.head.appendChild(script)

        // script 가 onload 되었을때만 실행시켜주기 위한 코드
        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                }

                const map = new window.kakao.maps.Map(container, options)
            })
        }
    }, [])

    return (
        <div id='map' style={{ width: '500px', height: '500px' }} ></div>
    )
}