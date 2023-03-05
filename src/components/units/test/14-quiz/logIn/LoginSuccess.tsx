import { gql, useQuery } from '@apollo/client'
import { IQuery } from '../../../../../commons/types/generated/types'

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            _id
            email
            name
        }
    }
`

export default function LoginSuccess() {
    const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

    return (
        <div>
            email : {loginData?.fetchUserLoggedIn.email}
            {loginData?.fetchUserLoggedIn.name}님 환영합니다!
        </div>
    )
}