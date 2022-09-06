import type { AxiosError } from 'axios'

// Narrowing Axios responses

interface MockAxiosResponse<T> {
    data: T
    status: number
}

function isAxiosResponse<T>(response: MockAxiosResponse<T>): response is MockAxiosResponse<T> {
    return typeof (response as MockAxiosResponse<T>).data !== undefined
}


const response = {
    data: {
        foo: 'bar',
    },
    status: 200
}

if (isAxiosResponse(response)) {
    console.log(response)
}

// Narrowing Axios errors

interface ErrorType {
    status: number
    message: string
}

const mockError = {
    status: 500,
    message: 'Something went wrong',
    isAxiosError: true // This value is returned from axios errors
}

function isAxiosError<T>(response: any): response is AxiosError<T> {
    return response.isAxiosError
}

if (isAxiosError<ErrorType>(mockError)) {
    console.log('is error')
}