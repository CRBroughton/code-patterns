import { httpClient } from '.'
import { MockResponseType } from './types'

// API Class

export class ApiClient {
    private endpoint: string

    constructor() {
        this.endpoint = 'endpoint url here'
    }

    // Extend your class with new endpoints. An API Client class should
    // never deal with state; Separate your state logic from your client logic.

    async initResults() {
        // Type here should be the root response type
        return httpClient.get<MockResponseType>({url: this.endpoint})
    }

    // Use to check initiate the response, probably could merge with above method
    async getResults() {
        const data = await this.initResults()

        if (data)
            return data
    }
}