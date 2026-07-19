import { canScheduleAppointment } from "../src/can-schedule-appointment.js";
import type { IScheduleRequest } from "../src/interfaces/ScheduleRequest.js";

describe('Pruebas para canScheduleAppointment', () => {
    test('Debe retornar false cuando estado es diferente a UNDER_REVIEW', () => {
        const request = {
            idAnalista: '12346',
            estado: 'CLOSED',
            requerimiento: 'Revisar código',
            fechaSolicitud: '2024-06-01T10:00:00Z',
            requiredDocuments: ['doc1', 'doc2']
        } as unknown as IScheduleRequest
        const now = new Date('2024-06-02T10:00:00Z')
        expect(canScheduleAppointment(request, now)).toBe(false);
    })
    test('Debe retornar false cuando fechaSolicitud es mayor a now', () => {
        const request = {
            idAnalista: '12346',
            estado: 'UNDER_REVIEW',
            requerimiento: 'Revisar código',
            fechaSolicitud: '2024-06-03T10:00:00Z',
            requiredDocuments: ['doc1', 'doc2']
        } as unknown as IScheduleRequest
        const now = new Date('2024-06-02T10:00:00Z')
        expect(canScheduleAppointment(request, now)).toBe(false);
    })
})