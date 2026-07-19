import type { IScheduleRequest } from "./interfaces/ScheduleRequest.js"

export const canScheduleAppointment = (request: IScheduleRequest, now: Date): boolean => {
   if (request.estado.trim() !== 'UNDER_REVIEW') { 
    return false
    }
    if (request.fechaSolicitud.trim() > now.toISOString()) {
        return false
    }
    if (request.requiredDocuments.length === 0) {
        return false
    }
    return true
}