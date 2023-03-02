import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from '../../../commons/types/generated/types'

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
                작성자 : <input id='writer' type='text' onChange={changeHandler} />
            </div>
            <div>
                비밀번호 : <input id='password' type='password' onChange={changeHandler} />
            </div>
            <div>
                제목 : <input id='title' type='text' onChange={changeHandler} />
            </div>
            <div>
                내용 : <input id='contents' type='text' onChange={changeHandler} />
            </div>
            <div>
                <Box>
                    <Div onClick={onClickHandler}>이미지 업로드</Div>
                    <Div onClick={onClickHandler}>이미지 업로드</Div>
                    <Div onClick={onClickHandler}>이미지 업로드</Div>
                </Box>
                <Input id='files' type='file' onChange={imgChnageHandler} ref={inputRef} />
            </div>
            <div>
                {imgStorage.map((el, index) => (
                    <img key={index} src={`https://storage.googleapis.com/${el}`} alt={el} style={{ width: '100px', height: '100px' }} />
                ))}
            </div>
            <div>
                <button onClick={confirmHandler}>등록하기</button>
            </div>
        </>
    )
}