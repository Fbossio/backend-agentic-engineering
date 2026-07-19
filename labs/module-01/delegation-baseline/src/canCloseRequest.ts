import type { ICloseRequest } from "./interfaces/CloseRequest.js"

export const canCloseRequest = (request: ICloseRequest, now: Date): boolean => {
    const estado = request.estado.trim()

    if (estado !== 'APPROVED' && estado !== 'REJECTED') {
        return false
    }

    if (request.requiredDocumentsPending.length > 0) {
        return false
    }

    const hasFutureActiveAppointment = request.appointments.some((appointment) => {
        return appointment.activa && appointment.fecha.trim() > now.toISOString()
    })

    if (hasFutureActiveAppointment) {
        return false
    }

    if (request.auditEvents.length === 0) {
        return false
    }

    return true
}
