export interface IHttpClient {
    get<T>(params: IHttpClientRequestParameters): Promise<T>
  }
  
  export interface IHttpClientRequestParameters {
    url: string
    // payload?: T
  }

  export interface MockResponseType {
    status: number
    data: ResponseData
  }
  
  export interface ResponseData {
    id: number
    type: string
    title: string
    artist: Artist
    chordsPresent: boolean
    tabTypes: string[]
  }
  
  interface Artist {
    id: number
    type: string
    nameWithoutThePrefix: string
    useThePrefix: boolean
    name: string
  }