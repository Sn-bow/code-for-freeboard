import { gql, useQuery } from '@apollo/client'
import { IQuery } from '../../../../../commons/types/generated/types'
import { withLogin } from '../../../../commons/hoc/withLogin'

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            _id
            email
            name
        }
    }
`

function LoginSuccess() {
    const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

    return (
        <div>
            email : {loginData?.fetchUserLoggedIn.email}
            {loginData?.fetchUserLoggedIn.name}님 환영합니다!
        </div>
    )
}

export default withLogin(LoginSuccess)