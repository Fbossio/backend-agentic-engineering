# Proyecto transversal

## 1. Nombre provisional

**Agentic Service Operations API**

El nombre podrá cambiar cuando se confirme el dominio definitivo.

---

## 2. Propósito académico

El proyecto transversal es una aplicación backend empresarial que evolucionará a lo largo del curso.

Su función es proporcionar una base realista para practicar:

- exploración de repositorios;
- diseño técnico;
- delegación de funcionalidades;
- debugging;
- refactorización;
- pruebas;
- documentación;
- coordinación multiagente;
- integración con OpenAI;
- herramientas;
- agentes;
- seguridad;
- evaluación;
- observabilidad.

No busca ser una aplicación comercial completa. Debe ser suficientemente compleja para enseñar ingeniería real sin distraer del aprendizaje agentic.

---

## 3. Dominio provisional

La aplicación gestionará solicitudes operativas que pasan por varias etapas.

Una solicitud podrá incluir:

- solicitante;
- tipo;
- prioridad;
- estado;
- comentarios;
- documentos;
- citas;
- reprogramaciones;
- historial;
- asignaciones;
- notificaciones;
- auditoría.

Este dominio se eligió porque permite crear cambios representativos del trabajo backend empresarial.

---

## 4. Actores provisionales

### Solicitante

Crea y consulta solicitudes.

### Analista

Revisa información, solicita correcciones y gestiona el avance.

### Supervisor

Asigna responsables, aprueba decisiones y consulta métricas.

### Proveedor

Registra citas o resultados relacionados.

### Administrador

Gestiona configuraciones y permisos.

### Agente de IA

Analiza datos y propone acciones, pero no realiza operaciones sensibles sin autorización.

---

## 5. Casos de uso iniciales

1. Crear una solicitud.
2. Consultar una solicitud.
3. Listar solicitudes con filtros.
4. Cambiar el estado.
5. Registrar comentarios.
6. Adjuntar documentos.
7. Detectar documentos faltantes.
8. Programar una cita.
9. Reprogramar una cita conservando historial.
10. Asignar un responsable.
11. Consultar la bitácora.
12. Generar una recomendación mediante IA.
13. Aprobar una acción propuesta por un agente.
14. Auditar acciones humanas y automáticas.

---

## 6. Arquitectura inicial

```text
Cliente
  |
  v
NestJS REST API
  |
  +-- Módulo de solicitudes
  +-- Módulo de documentos
  +-- Módulo de citas
  +-- Módulo de usuarios y roles
  +-- Módulo de auditoría
  +-- Módulo de IA y agentes
  |
  +-- PostgreSQL
  +-- Almacenamiento de objetos
  +-- OpenAI API
```

La arquitectura deberá evolucionar de forma controlada. No se introducirán servicios distribuidos solo para aumentar complejidad.

---

## 7. Stack propuesto

- Node.js.
- TypeScript.
- NestJS.
- PostgreSQL.
- TypeORM.
- Jest.
- Supertest.
- Docker Compose.
- OpenAPI.
- GitHub Actions.
- OpenAI SDK.
- AWS en módulos avanzados.

El stack todavía requiere aprobación formal mediante `DECISIONES.md`.

---

## 8. Entidades iniciales

### Request

- id;
- code;
- type;
- status;
- priority;
- applicantId;
- assignedTo;
- createdAt;
- updatedAt.

### User

- id;
- documentType;
- documentNumber;
- name;
- email;
- role;
- createdAt.

### Comment

- id;
- requestId;
- authorId;
- content;
- createdAt.

### Document

- id;
- requestId;
- documentType;
- filename;
- storageKey;
- status;
- required;
- createdAt.

### Appointment

- id;
- requestId;
- parentAppointmentId;
- reason;
- scheduledAt;
- attendedAt;
- attendanceStatus;
- createdAt.

### AuditEvent

- id;
- requestId;
- actorType;
- actorId;
- action;
- previousValue;
- newValue;
- metadata;
- createdAt.

### AgentExecution

- id;
- requestId;
- agentName;
- objective;
- status;
- inputSummary;
- outputSummary;
- toolCalls;
- tokensUsed;
- estimatedCost;
- startedAt;
- completedAt.

---

## 9. Estados provisionales de una solicitud

```text
DRAFT
SUBMITTED
UNDER_REVIEW
PENDING_INFORMATION
SCHEDULED
IN_EVALUATION
APPROVED
REJECTED
CLOSED
```

Las transiciones deberán definirse mediante reglas explícitas.

---

## 10. Reglas iniciales

1. Toda solicitud debe tener un código único.
2. Los cambios de estado deben registrarse en auditoría.
3. Los documentos obligatorios dependen del tipo de solicitud.
4. Una reprogramación debe conservar la cita anterior.
5. Las operaciones sensibles requieren autorización.
6. Las recomendaciones de IA no cambian datos automáticamente al inicio del curso.
7. Toda ejecución de un agente debe ser trazable.
8. Las herramientas de escritura deben validar permisos y entradas.
9. Ningún secreto debe incorporarse al repositorio.
10. Todo cambio funcional debe incluir pruebas.

---

## 11. Estrategia de crecimiento por fases

### Fase 1 — Backend base

- estructura NestJS;
- configuración;
- solicitudes;
- persistencia;
- validaciones;
- pruebas;
- documentación.

### Fase 2 — Mantenimiento y evolución

- filtros;
- citas;
- documentos;
- bitácora;
- refactorizaciones;
- bugs controlados;
- migraciones.

### Fase 3 — Integración con OpenAI

- clasificación;
- extracción estructurada;
- recomendación;
- resumen;
- herramientas de consulta.

### Fase 4 — Agentes

- agente analista;
- agente documental;
- agente de seguimiento;
- supervisor;
- handoffs;
- confirmaciones humanas.

### Fase 5 — Seguridad y evaluación

- permisos;
- auditoría;
- trazas;
- datasets;
- evaluaciones;
- costos;
- observabilidad.

### Fase 6 — Entrega final

- CI/CD;
- documentación;
- política de operación;
- evaluación comparativa;
- demostración final.

---

## 12. Agentes previstos

### Agente analista

Interpreta la solicitud y detecta información faltante.

### Agente documental

Verifica requisitos documentales y propone documentos pendientes.

### Agente de citas

Analiza disponibilidad y propone acciones relacionadas con citas.

### Agente revisor

Evalúa consistencia, riesgos y cumplimiento de reglas.

### Agente supervisor

Selecciona agentes especializados y consolida resultados.

---

## 13. Herramientas previstas

Herramientas de solo lectura:

- obtener solicitud;
- consultar historial;
- listar documentos;
- consultar citas;
- consultar reglas;
- obtener métricas.

Herramientas con escritura controlada:

- agregar comentario;
- proponer cambio de estado;
- registrar cita;
- solicitar documento;
- crear tarea de seguimiento.

Las herramientas con escritura deberán requerir autorización o confirmación según el riesgo.

---

## 14. Requisitos no funcionales

- Diseño modular.
- Validación estricta.
- Errores consistentes.
- Pruebas reproducibles.
- Logs estructurados.
- Auditoría.
- Idempotencia cuando corresponda.
- Configuración por entorno.
- Seguridad de secretos.
- Documentación OpenAPI.
- Control de costos de IA.
- Trazabilidad de herramientas.
- Posibilidad de ejecución local con Docker.

---

## 15. Convenciones iniciales

- Código y nombres técnicos en inglés.
- Material didáctico en español.
- Commits con formato convencional.
- Ninguna funcionalidad se acepta sin validación.
- Los agentes deben respetar los límites de archivos indicados.
- Las decisiones arquitectónicas relevantes se registran como ADR o en `DECISIONES.md`.
- Los prompts reutilizables se versionan.
- Las pruebas no deben depender de llamadas reales a OpenAI salvo laboratorios explícitos.

---

## 16. Backlog inicial

### Épica A — Base del sistema

- [ ] Crear estructura NestJS.
- [ ] Configurar PostgreSQL.
- [ ] Configurar Docker Compose.
- [ ] Agregar lint, format, build y tests.
- [ ] Agregar OpenAPI.
- [ ] Crear `AGENTS.md`.

### Épica B — Solicitudes

- [ ] Crear solicitud.
- [ ] Consultar solicitud.
- [ ] Listar con filtros.
- [ ] Cambiar estado.
- [ ] Registrar auditoría.

### Épica C — Documentos y citas

- [ ] Configurar documentos requeridos.
- [ ] Registrar documentos.
- [ ] Detectar faltantes.
- [ ] Programar cita.
- [ ] Reprogramar conservando historial.

### Épica D — OpenAI

- [ ] Clasificar solicitud.
- [ ] Extraer datos estructurados.
- [ ] Generar resumen.
- [ ] Proponer siguiente acción.
- [ ] Registrar consumo.

### Épica E — Agentes

- [ ] Crear agente analista.
- [ ] Crear herramientas de lectura.
- [ ] Crear herramientas de escritura controlada.
- [ ] Crear agente supervisor.
- [ ] Implementar handoffs.
- [ ] Agregar aprobación humana.

### Épica F — Evaluación y seguridad

- [ ] Crear dataset de evaluación.
- [ ] Medir selección de herramientas.
- [ ] Medir calidad de salidas.
- [ ] Definir política de permisos.
- [ ] Implementar auditoría.
- [ ] Integrar evaluaciones en CI.

---

## 17. Decisiones pendientes

1. Aprobar el nombre definitivo.
2. Confirmar PostgreSQL.
3. Confirmar TypeORM.
4. Definir autenticación.
5. Definir el alcance de AWS.
6. Definir si se usará almacenamiento local o S3 desde el inicio.
7. Definir si GitHub Actions será el CI principal.
8. Aprobar el modelo de datos inicial.
9. Definir el escenario exacto de la evaluación diagnóstica.

---

## 18. Criterio de éxito

El proyecto será exitoso si permite demostrar que el participante puede:

- dirigir agentes sobre una base de código real;
- mantener control de alcance y calidad;
- integrar IA de forma segura;
- medir resultados;
- explicar las decisiones;
- completar una funcionalidad de extremo a extremo;
- operar un flujo agent-first reproducible.
