import { useAuthenticator } from '@aws-amplify/ui-react'
import { useNavigate } from 'react-router-dom'
import { AuthError } from '../error/authError'



function Navbar() {
    let navigate = useNavigate()
    const routeLogin = () =>{
        navigate("/login")
    }
    console.debug("call Navber")
    try {
        const { route } = useAuthenticator((context) => [context.route])
        if(route !== 'authenticated'){
            throw new AuthError
        }
        const { user, signOut } = useAuthenticator((context) => [context.user])

        console.log(user.attributes?.email_verified);
        return(
            <>
                <button onClick={signOut}>ログアウト</button>
            </>
        )
    } catch(e) {
        if(e instanceof AuthError) {
            console.log("認証エラー：ユーザーが認証できていません", e)
        }
    }
    const loginPath = "location.href='/login'"
    return(
        <>
            {/* <Navigate to="/login" state={{ from: location }} replace /> */}
            <button onClick={routeLogin}>ログイン</button>
        </>
    )

}

export default Navbar