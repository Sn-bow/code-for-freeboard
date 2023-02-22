import Banner from './banner/Banner'
import Header from './header/Header'
import Navigation from './navigation/Navigation'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

interface ILayoutPropsType {
    children: JSX.Element
}

const Content = styled.div`
    margin: 50px;
`

const CANCEL_URL = [
    `/boards/detail/`
]

const Layout = (props: ILayoutPropsType) => {
    const router = useRouter()

    const booleanUrl = CANCEL_URL.includes(router.asPath)

    return (
        <div>
            <Header />
            <Banner />
            {!booleanUrl && <Navigation />}
            <Content>
                {props.children}
            </Content>
        </div>
    )
}

export default Layout