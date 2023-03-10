import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from '../../../commons/types/generated/types'
import { imgValidation } from '../../commons/validation/ImgUpload'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){
            url
        }
    }
`

interface IBoardPostDataType {
    writer: string,
    password: string,
    title: string,
    contents: string,
    images: string[]
}

const Box = styled.div`
    display: flex;
`

const Div = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: lightgray;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`

const Input = styled.input`
    display: none;
`

export default function QuizTest() {
    const [imgStorage, setImgStorage] = useState<string[]>([])
    const [boardPostData, setBoardPostData] = useState<IBoardPostDataType>({
        writer: "",
        password: "",
        title: "",
        contents: "",
        images: [],
    })
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
    const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE)

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBoardPostData({
            ...boardPostData,
            [event.target.id]: event.target.value
        })
    }

    const imgChnageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log(file?.type)

        const checkImg = imgValidation(file)
        if (!checkImg) return

        try {
            const result = await uploadFile({ variables: { file } })
            const image: string = result.data?.uploadFile.url ?? ''
            if (image !== '') {
                setImgStorage(prev => [...prev, image])
                setBoardPostData({
                    ...boardPostData,
                    images: [...boardPostData.images, image]
                })
            }
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        }
    }

    const confirmHandler = async () => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        ...boardPostData
                    }
                }
            })
            router.push(`/temp/${result.data?.createBoard._id}`)
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        }
    }

    const onClickHandler = () => {
        inputRef.current?.click()
    }

    return (
        <>
            <div>
                ????????? : <input id='writer' type='text' onChange={changeHandler} />
            </div>
            <div>
                ???????????? : <input id='password' type='password' onChange={changeHandler} />
            </div>
            <div>
                ?????? : <input id='title' type='text' onChange={changeHandler} />
            </div>
            <div>
                ?????? : <input id='contents' type='text' onChange={changeHandler} />
            </div>
            <div>
                <Box>
                    <Div onClick={onClickHandler}>????????? ?????????</Div>
                    <Div onClick={onClickHandler}>????????? ?????????</Div>
                    <Div onClick={onClickHandler}>????????? ?????????</Div>
                </Box>
                <Input id='files' type='file' onChange={imgChnageHandler} ref={inputRef} />
            </div>
            <div>
                {imgStorage.map((el, index) => (
                    <img key={index} src={`https://storage.googleapis.com/${el}`} alt={el} style={{ width: '100px', height: '100px' }} />
                ))}
            </div>
            <div>
                <button onClick={confirmHandler}>????????????</button>
            </div>
        </>
    )
}