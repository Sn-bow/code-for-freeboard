import { useRecoilState } from 'recoil'
import { isEditeState } from '../../../../../commons/store/recoil'

const WriteTest = () => {
    const [isEdite, setIsEdit] = useRecoilState(isEditeState)

    return (
        <h1>
            {isEdite ? '등록하기' : '수정하기'}
        </h1>
    )
}

export default WriteTest