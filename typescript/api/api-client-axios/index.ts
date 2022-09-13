import { ApiClient, handleResponse } from './api'

const client = new ApiClient()

const results = async() => {
    const test = await client.initResults()
    if (test) {
        // This destructuring is dependent on the response handler
        const { response } = handleResponse(test)

        if (response) {
            // do something with the response, probably store it
        }
    }

}