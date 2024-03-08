import { type ErrorCodes } from '@constants/error-codes.constants'
import type ErrorResponse from '@tools/custom-error'

export interface ErrorItem {
  code: keyof typeof ErrorCodes | string
  message: string
  status?: number
  level?: string
}

export declare type ErrorManager = <T extends Error>(error: T) => ErrorResponse | undefined | null

export declare type errorsGroup = Record<string, (...args: any) => ErrorResponse>
