import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

interface IApolloSettingPropsType {
    children: JSX.Element
}

const APOLLO_CACHE = new InMemoryCache()

const ApolloSetting = (props: IApolloSettingPropsType) => {

    const uploadLink = createUploadLink({
        uri: "https://backendonline.codebootcamp.co.kr/graphql"
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: APOLLO_CACHE
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default ApolloSetting