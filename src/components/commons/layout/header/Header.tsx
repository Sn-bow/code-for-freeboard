import styled from '@emotion/styled'

const Wrapper = styled.div`
    height: 150px;
    background-color: coral;
    display: flex;
    align-items: center;
`

const Box = styled.div`
    max-width: 1500px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const LogoSign = styled.span`
    color: yellow;
    font-size: 25px;
`

const LogoText = styled.div`
    font-size: 25px;
    font-weight: 800;
`

const SignInBox = styled.div`
    display: flex;
`

const LoginButton = styled.div`
    width: 80px;
    font-size: 20px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    &:hover {
        cursor: pointer;
    }
`

const JoinMembershipButton = styled.div`
    width: 80px;
    font-size: 20px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: yellow;

    &:hover {
        cursor: pointer;
    }
`

const Header = () => {
    return (
        <Wrapper>
            <Box>
                <LogoText><LogoSign>{`{ }`}</LogoSign> code.camp</LogoText>
                <SignInBox>
                    <LoginButton>로그인</LoginButton>
                    <JoinMembershipButton>회원가입</JoinMembershipButton>
                </SignInBox>
            </Box>
        </Wrapper>
    )
}

export default Header