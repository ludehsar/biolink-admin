import { ErrorResponse } from '../generated/graphql'

export const toErrorMap = (errors: ErrorResponse[]): Record<string, string> => {
  const errorMap: Record<string, string> = {}
  errors.forEach(({ message, field }) => {
    if (field) {
      errorMap[field] = message
    }
  })

  return errorMap
}
