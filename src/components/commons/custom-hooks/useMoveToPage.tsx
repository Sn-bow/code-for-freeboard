import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { visitedPageStaet } from '../../../commons/store/recoil';


export const useMoveToPage = () => {
    const router = useRouter();
    const [visitedPage, setVisitedPage] = useRecoilState(visitedPageStaet)

    const onClickMoveToPage = async (path: string) => {
        setVisitedPage(path)
        await router.push(path)
    }

    return {
        visitedPage,
        onClickMoveToPage
    }

}