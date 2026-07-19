import { canAssignRequest } from "../src/canAssignRequest.js";
import type { IOperationalRequest } from "../src/interfaces/OperationalRequest.js";

describe('Pruebas para canAssignRequest', () => {
    test('Debe retornar false cuando idAnalista está vacìo', () => {
        const request = {
            idAnalista: '',
            estado: 'SUMBITTED',
            requerimiento: 'Revisar código'
        } as IOperationalRequest
        expect(canAssignRequest(request)).toBe(false);
    })
    test('Debe retornar false cuando estado es diferente a SUBMITTED o UNDER_REVIEW', () => {
        const request = {
            idAnalista: '12346',
            estado: 'CLOSED',
            requerimiento: 'Revisar código'
        } as IOperationalRequest
        expect(canAssignRequest(request)).toBe(false);
    })

    test('No debe modificar el objeto request', () => {
        const request = {
            idAnalista: '12346',
            estado: 'SUMBITTED',
            requerimiento: 'Revisar código'
        } as IOperationalRequest

        const requestCopy = { ...request }
        canAssignRequest(request)
        expect(request).toEqual(requestCopy)
    })
})