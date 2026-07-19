export type Estado = 'SUMBITTED' | 'UNDER_REVIEW' | 'CLOSED'
export interface IOperationalRequest {
    estado: Estado,
    idAnalista: string,
    requerimiento: string,
}