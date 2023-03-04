

interface IProps {
    children: JSX.Element
    name: string
}

export default function PropsTest(props: IProps) {

    return (
        <>
            <div>{props.children}</div>
            <div>{props.name}</div>
        </>
    )
}