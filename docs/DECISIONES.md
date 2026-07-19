# Registro de decisiones

Este documento registra decisiones que afectan a varios módulos, al proyecto transversal o a la metodología general.

No debe utilizarse para anotar cambios menores, ideas descartadas o detalles locales de una sola lección.

---

## Formato

Cada decisión debe contener:

- identificador;
- fecha;
- estado;
- contexto;
- decisión;
- motivo;
- impacto;
- condiciones de revisión.

Estados posibles:

- Propuesta.
- Aprobada.
- Reemplazada.
- Descartada.

---

## DEC-001 — Nombre y orientación del curso

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Contexto

El participante busca aprender a utilizar el ecosistema de OpenAI en su trabajo como desarrollador backend y pasar de un uso limitado de Copilot a la coordinación profesional de agentes.

### Decisión

El curso se llamará:

**Backend Agentic Engineering**

Estará orientado a la ingeniería backend profesional y no a un curso genérico de prompting o construcción de chatbots.

### Motivo

El objetivo principal es transformar el flujo de desarrollo, no solo enseñar interfaces o funciones aisladas.

### Impacto

Todos los módulos, ejercicios y evaluaciones deberán relacionarse con tareas reales de ingeniería backend.

---

## DEC-002 — Perfil objetivo

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Contexto

El participante posee cinco años de experiencia backend y trabaja principalmente con Node.js, TypeScript, NestJS, bases de datos y AWS.

### Decisión

El curso asumirá experiencia intermedia en desarrollo backend.

No se incluirán explicaciones extensas sobre fundamentos de programación, HTTP, SQL básico, Git básico o conceptos introductorios de APIs.

### Motivo

El tiempo debe concentrarse en las competencias agentic.

### Impacto

Los ejemplos pueden utilizar conceptos profesionales y bases de código realistas.

---

## DEC-003 — Stack principal

**Fecha:** 17 de julio de 2026  
**Estado:** Propuesta  

### Decisión propuesta

Usar como stack principal:

- Node.js;
- TypeScript;
- NestJS;
- PostgreSQL;
- TypeORM;
- Jest;
- Supertest;
- Docker;
- AWS;
- OpenAI API.

### Motivo

Es cercano a la experiencia del participante y permite concentrarse en el trabajo con agentes.

### Condición de aprobación

Debe confirmarse antes de iniciar el primer laboratorio acumulativo.

---

## DEC-004 — Organización por chats

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Contexto

El curso completo superará razonablemente el contexto útil de una única conversación.

### Decisión

Se utilizará:

- un chat de diseño y gobierno;
- un chat por módulo o grupo pequeño de lecciones;
- documentos maestros;
- un repositorio Git.

El chat principal se denomina:

`00 - Diseño y gobierno del curso`

### Motivo

Separar la exploración de la fuente de verdad reduce pérdidas de contexto y contradicciones.

### Impacto

Cada chat de módulo deberá finalizar con un resumen de continuidad y una propuesta de actualización de archivos.

---

## DEC-005 — Fuente de verdad

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Decisión

La jerarquía será:

1. Repositorio Git.
2. Documentos maestros y módulos versionados.
3. Archivos cargados al Proyecto de ChatGPT.
4. Conversaciones.
5. Memoria contextual.

### Motivo

Las conversaciones no ofrecen el mismo control de versiones, revisión y trazabilidad que Git.

### Impacto

Ninguna decisión importante se considerará consolidada hasta registrarse en el archivo correspondiente.

---

## DEC-006 — Proyecto transversal

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Decisión

Los módulos utilizarán una única aplicación backend acumulativa.

### Motivo

Un proyecto continuo permite practicar:

- exploración;
- cambios incrementales;
- mantenimiento;
- documentación;
- pruebas;
- coordinación;
- regresiones;
- seguridad.

### Impacto

Los laboratorios deberán reutilizar o evolucionar el mismo repositorio siempre que sea razonable.

---

## DEC-007 — Estructura obligatoria de módulos

**Fecha:** 17 de julio de 2026  
**Estado:** Propuesta  

### Decisión propuesta

Cada módulo incluirá:

- propósito;
- competencias;
- requisitos previos;
- contenido conceptual;
- demostración;
- laboratorio;
- ejercicio independiente;
- errores frecuentes;
- checklist profesional;
- evaluación;
- entregables;
- recursos oficiales;
- resumen de continuidad.

### Condición de aprobación

La plantilla será probada durante el desarrollo del Módulo 1 y ajustada antes de declararse definitiva.

---

## DEC-008 — Evidencia de finalización

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Decisión

Una tarea implementada por un agente no se considerará terminada solo por su explicación.

Debe presentar evidencia apropiada, como:

- diff;
- tests;
- build;
- lint;
- consultas;
- trazas;
- resultados;
- limitaciones conocidas.

### Motivo

El curso debe enseñar control técnico, no confianza ciega.

### Impacto

Todos los laboratorios deberán definir comandos o procedimientos de verificación.

---

## DEC-009 — Autonomía gradual

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Decisión

La autonomía de los agentes aumentará gradualmente.

El curso comenzará con tareas de análisis y propuestas, y avanzará hacia implementación, ejecución y coordinación multiagente.

### Motivo

Delegar demasiado pronto dificulta comprender errores, permisos y límites.

### Impacto

Los primeros módulos exigirán más supervisión y los módulos avanzados permitirán ejecuciones más autónomas.

---

## DEC-010 — Actualización documental

**Fecha:** 17 de julio de 2026  
**Estado:** Aprobada  

### Decisión

No se actualizarán todos los documentos después de cada chat.

Solo se actualizará la fuente correspondiente cuando exista un resultado aprobado:

- progreso → `PROGRESO.md`;
- decisión global → `DECISIONES.md`;
- alcance del curso → `CURSO_MASTER.md`;
- diseño de la aplicación → `PROYECTO_TRANSVERSAL.md`;
- formato común → `PLANTILLA_MODULO.md`;
- contenido de módulo → archivos del módulo.

### Motivo

Evitar mantenimiento innecesario y duplicación.

---

## Decisiones pendientes

1. Aprobar o ajustar el stack principal.
2. Confirmar TypeORM o seleccionar otro ORM.
3. Definir el dominio exacto del proyecto transversal.
4. Definir duración objetivo de cada módulo.
5. Establecer la herramienta de CI/CD del proyecto.
6. Definir si el repositorio final será público o privado.
