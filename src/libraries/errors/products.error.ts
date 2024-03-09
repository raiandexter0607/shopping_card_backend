
import ErrorResponse from '@tools/custom-error'
import { LogLevel } from '@constants/logs.constants'
import { type errorsGroup } from '@interfaces/IError'
import { ErrorCodes } from '@constants/error-codes.constants'
import { errorMessages } from '@constants/error-messages.constants'



export const productsErrors = {
    productNotFoundError: () => {
        return new ErrorResponse({
            code: ErrorCodes.RECORD_NOT_FOUND,
            message: errorMessages.services.products.product_not_found,
            status: 400,
            level: LogLevel.EVENT
        })
    }
}