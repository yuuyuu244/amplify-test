
/**
 * @refs https://dev.classmethod.jp/articles/react-amplify-appsync-dynamodb-tutorial/
 */

import { API } from 'aws-amplify'
import awsmobile from './aws-exports'
import { PubSub } from 'aws-amplify'
import { graphqlOperation } from 'aws-amplify'

import { getTransCosts } from './graphql/queries'

// awsの接続設定
API.configure(awsmobile)
PubSub.configure(awsmobile)

// enum ACTIONS{
//     QUERY = 'QUERY',
//     MUTATION = 'MUTATION',
//     SUBSCRIPTION = 'SUBSCRIPTION',
// }

// const reducer = (state, action) => {
//     switch(action.type) {

//     }
// }

async function createTrans() {
    const transCost = {user_id: "testid", target_date: "202304"}
    const transRecord = await API.graphql(graphqlOperation(getTransCosts, {input: transCost}))
    console.debug(transRecord)
}

function ReactAppSyncSampleApp() {
    return(
        <>
            <h2>AppSync Test</h2>
            <button onClick={createTrans}>create</button>
        </>

    )
}

export default ReactAppSyncSampleApp