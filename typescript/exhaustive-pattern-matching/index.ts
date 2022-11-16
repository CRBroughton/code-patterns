/* eslint-disable @typescript-eslint/no-unused-vars */
// Exhaustive Pattern Matching

/**
 * Exhaustively checks a switch statement.
 *
 * If all cases are missing, exhaustive will walk through each missing case.
 *
 * If a case is missing from the switch statement, exhaustive will throw a type
 * error detailing the first known missing case until all cases are fulfilled.
 *
 * If exhaustive somehow reaches the default case, an error will be thrown.
 *
 * @param {any} x Expression the switch evaluates.
 * @param {string} e Error shown if the exhaustive function is called.
 * @example
  type StatusCodes = 200 | 400

  interface MockResponse {
    data: ResponseData[]
    status: StatusCodes
  }

  interface ResponseData {
    id: number
    description: string
    state: string
  }

  function handleResponse(response: MockResponse): string {
    switch (response.status) {
      case 200:
        return 'ok'
      case 400:
        return 'error'
      default:
        return exhaustive(response.status, 'unknown error')
    }
  }
 */
  function exhaustive(x: 'error: Did you forget to handle this type?', e: string): never {
    throw new Error(e)
  }
  
  type StatusCodes = 200 | 400
  
  interface MockResponse {
    data: ResponseData[]
    status: StatusCodes
  }
  
  interface ResponseData {
    id: number
    description: string
    state: string
  }
  
  function handleResponse(response: MockResponse): string {
    switch (response.status) {
      case 200:
        return 'ok'
      case 400:
        return 'error'
      default:
        return exhaustive(response.status, 'unknown error')
    }
  }
  