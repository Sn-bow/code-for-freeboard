import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

interface IApolloSettingPropsType {
    children: JSX.Element
}

const ApolloSetting = (props: IApolloSettingPropsType) => {
    const client = new ApolloClient({
        uri: 'https://backendonline.codebootcamp.co.kr/graphql',
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default ApolloSetting