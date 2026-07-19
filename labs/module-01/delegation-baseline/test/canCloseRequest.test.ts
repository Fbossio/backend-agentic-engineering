import { canCloseRequest } from "../src/canCloseRequest.js";
import type { ICloseRequest } from "../src/interfaces/CloseRequest.js";

describe('Pruebas para canCloseRequest', () => {
    const now = new Date('2024-06-02T10:00:00.000Z')

    const validRequest: ICloseRequest = {
        estado: 'APPROVED',
        requiredDocumentsPending: [],
        appointments: [
            {
                fecha: '2024-06-01T10:00:00.000Z',
                activa: true,
            },
        ],
        auditEvents: [
            {
                id: 'audit-1',
                fecha: '2024-06-01T09:00:00.000Z',
                accion: 'APPROVED',
            },
        ],
    }

    test('Debe retornar true cuando cumple todas las reglas', () => {
        expect(canCloseRequest(validRequest, now)).toBe(true);
    })

    test('Debe retornar true cuando estado es REJECTED y cumple las reglas', () => {
        const request = {
            ...validRequest,
            estado: 'REJECTED',
        } as ICloseRequest

        expect(canCloseRequest(request, now)).toBe(true);
    })

    test('Debe retornar false cuando estado no es APPROVED o REJECTED', () => {
        const request = {
            ...validRequest,
            estado: 'UNDER_REVIEW',
        } as ICloseRequest

        expect(canCloseRequest(request, now)).toBe(false);
    })

    test('Debe retornar false cuando tiene documentos obligatorios pendientes', () => {
        const request = {
            ...validRequest,
            requiredDocumentsPending: ['identity-document'],
        }

        expect(canCloseRequest(request, now)).toBe(false);
    })

    test('Debe retornar false cuando tiene citas futuras activas', () => {
        const request = {
            ...validRequest,
            appointments: [
                {
                    fecha: '2024-06-03T10:00:00.000Z',
                    activa: true,
                },
            ],
        }

        expect(canCloseRequest(request, now)).toBe(false);
    })

    test('Debe ignorar citas futuras inactivas', () => {
        const request = {
            ...validRequest,
            appointments: [
                {
                    fecha: '2024-06-03T10:00:00.000Z',
                    activa: false,
                },
            ],
        }

        expect(canCloseRequest(request, now)).toBe(true);
    })

    test('Debe retornar false cuando no tiene eventos de auditoría', () => {
        const request = {
            ...validRequest,
            auditEvents: [],
        }

        expect(canCloseRequest(request, now)).toBe(false);
    })

    test('No debe modificar el objeto request', () => {
        const request = {
            ...validRequest,
            appointments: [...validRequest.appointments],
            auditEvents: [...validRequest.auditEvents],
        }

        const requestCopy = JSON.parse(JSON.stringify(request))
        canCloseRequest(request, now)
        expect(request).toEqual(requestCopy)
    })
})
