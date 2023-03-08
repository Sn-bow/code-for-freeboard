import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input01 from '../../../../../commons/inputs/01'
import Button01 from '../../../../../commons/buttons/01'
import Input02 from '../../../../../commons/inputs/02'
import Error01 from '../../../../../commons/inputs-error-message/01'

// 검증 라이브러리 yup
const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요"),
    password: yup.string().required("패스워드를 입력해주세요").min(3, "최소 3자이상 입력해주세요").max(15, "최대 15자리로 입력해주세요"),
    title: yup.string().required("제목을 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
})

interface IFormData {
    writer: string
    password: string
    title: string
    contents: string
}

const FormLibrary = () => {
    const { register, handleSubmit, formState } = useForm<IFormData>({
        // 해결하다 검증
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onSubmitHandler = (data: IFormData) => {
        console.log('formData : ', data)
        console.log(typeof formState.isValid)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                작성자 : <Input01 type='text' register={register('writer')} />
                <br />
                <Error01 errorMessage={formState.errors.writer?.message} />
                비밀번호 : <Input02 type='password' register={register('password')} /> <br />
                <Error01 errorMessage={formState.errors.password?.message} />
                제목 : <Input01 type='text' register={register('title')} /> <br />
                <Error01 errorMessage={formState.errors.title?.message} />
                내용 : <Input02 type='text' register={register('contents')} /> <br />
                <Error01 errorMessage={formState.errors.contents?.message} /><br />
                <Button01 isValid={formState.isValid} content={"등록하기"} />

            </form>
        </div>
    )
}

export default FormLibrary