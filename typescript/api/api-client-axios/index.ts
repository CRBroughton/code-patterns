import { ApiClient, handleResponse } from './api'

const client = new ApiClient()

const results = async() => {
    try {
        const test = await client.getEndpointData()
        if (test) {
            // This destructuring is dependent on the response handler
            const { response } = handleResponse(test)

            if (response) {
                // do something with the response, probably store it
            }
        }
    } 
    catch(err) {
        console.log(err)
    }
    finally {
        // do something here; No longer loading
    }
}