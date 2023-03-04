import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { isEditeState } from '../../../../src/commons/store/recoil'
import InputAlgorithm from '../../../../src/components/units/test/14-quiz/date/DateTest'
import WriteTest from '../../../../src/components/units/test/14-quiz/write/Write'


const EditPage = () => {
    const [isEdite, setIsEdit] = useRecoilState(isEditeState)

    useEffect(() => {
        setIsEdit(true)
    }, [])

    return (
        <div>
            <WriteTest />
            <InputAlgorithm />
        </div>
    )
}

export default EditPage