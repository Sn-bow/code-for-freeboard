import { useRouter } from 'next/router'



export default function KakaoMapMoveToPage() {
    const router = useRouter()
    const onClickMove = () => {
        void router.push('/quiz-17/kakao')
    }
    return (
        <button onClick={onClickMove}>이동하기</button>
    )
}