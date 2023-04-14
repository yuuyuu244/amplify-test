import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import RequireAuth from './components/RequireAuth'

import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Dashboard from './routes/dashboard'
import Admin from './routes/admin'
import Login from './components/login'
import Home from './routes/home'

import ReactAppSyncSampleApp from './sample'

function MyRoutes() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

function App() {
  return (
    <Authenticator.Provider>
       <MyRoutes />
       <ReactAppSyncSampleApp />
    </Authenticator.Provider>
  )
}

export default App
