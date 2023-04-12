import { useState } from 'react'
//import ReactDOM from 'react-dom/client'

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       TEST
//     </div>
//   )
// }
function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Authenticator>
       {({ signOut, user }) => (
        <main>
          <h1>こんにちは、 {user.username} さん</h1>
          <button onClick={signOut}>サインアウト</button>
        </main>
      )}
      </Authenticator>
    </div>
  )
}
export default App
