import type { IOperationalRequest } from "./interfaces/OperationalRequest.js"


export const canAssignRequest = (request: IOperationalRequest):boolean => {
    if (request.estado.trim() !== 'SUBMITTED' || request.estado.trim() !== 'UNDER_REVIEW') { return false}
    
    if (request.idAnalista.trim().length === 0) {
        return false
    }
    return true
}