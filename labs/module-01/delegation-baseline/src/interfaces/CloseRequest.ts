export type CloseRequestEstado = 'APPROVED' | 'REJECTED' | 'SUBMITTED' | 'UNDER_REVIEW' | 'CLOSED'

export interface ICloseRequestAppointment {
    fecha: string,
    activa: boolean,
}

export interface ICloseRequestAuditEvent {
    id: string,
    fecha: string,
    accion: string,
}

export interface ICloseRequest {
    estado: CloseRequestEstado,
    requiredDocumentsPending: string[],
    appointments: ICloseRequestAppointment[],
    auditEvents: ICloseRequestAuditEvent[],
}
