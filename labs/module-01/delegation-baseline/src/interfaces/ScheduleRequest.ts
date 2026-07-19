export type Estado = 'UNDER_REVIEW'

export interface IScheduleRequest {
    estado: Estado,
    idAnalista: string,
    requerimiento: string,
    fechaSolicitud: string,
    requiredDocuments: string[]
}