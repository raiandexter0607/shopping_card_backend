/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type ErrorItem } from '@interfaces/IError'

export default class ErrorResponse extends Error {
  code: string | number | symbol

  status: number

  message: string

  constructor ({ code, message, status = 500 }: ErrorItem) {
    super(message)
    this.code = code
    this.status = status
    this.message = message

    Error.captureStackTrace(this)
  }

  getErrorResponse () {
    return {
      message: this.message,
      code: this.code
    }
  }
}
