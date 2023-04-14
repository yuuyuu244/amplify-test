import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

type Props = {
    children: React.ReactNode
}

function RequireAuth({children}: Props) {
  const location = useLocation()
  const { route } = useAuthenticator((context) => [context.route])
  if (route !== 'authenticated') {
    return (
    <Navigate to="/login" state={{ from: location }} replace />
    )
  }
  return(
    <>
        {children}
    </>
  )
}

export default RequireAuth