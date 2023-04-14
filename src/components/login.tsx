import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';
import { Authenticator, useAuthenticator, View, Image, useTheme } from '@aws-amplify/ui-react';

import { I18n } from 'aws-amplify';
import {SetUIVocabularies} from './UIVocabularies'

import Logo from '../assets/header_fixed_logo.png'

SetUIVocabularies('ja')

const components = {
    Header() {
        const { tokens } = useTheme()
        const altLogo = "Rivine Logo"
        return(
          <View textAlign="center" padding={tokens.space.small}>
            <Image
              alt={altLogo}
              src={Logo}
            />
          </View>
        )
    },
}

function Login(){
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator components={components} />
    </View>
  )
}
export default Login