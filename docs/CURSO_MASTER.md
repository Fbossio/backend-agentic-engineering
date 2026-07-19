# Backend Agentic Engineering

## 1. Identidad del curso

**Nombre:** Backend Agentic Engineering  
**Subtítulo:** Desarrollo profesional con ChatGPT, Codex y el ecosistema de OpenAI  
**Versión:** 0.1  
**Estado:** Diseño inicial aprobado  
**Responsable académico:** Felix  
**Proyecto de ChatGPT:** Backend Agentic Engineering  

---

## 2. Perfil del participante

El curso está diseñado inicialmente para un desarrollador backend con las siguientes características:

- Cinco años de experiencia profesional.
- Experiencia principal con Node.js, TypeScript y NestJS.
- Trabajo frecuente con APIs REST, bases de datos SQL, AWS y arquitecturas serverless.
- Conocimiento de Git, pruebas automatizadas, Docker y procesos de despliegue.
- Uso actual limitado de inteligencia artificial.
- Uso ocasional de GitHub Copilot dentro de Visual Studio Code.
- Poca exposición práctica a flujos de trabajo basados en agentes.
- Interés en pasar de usar IA como autocompletado a coordinar agentes de ingeniería de forma profesional.

El curso no enseñará fundamentos básicos de programación. Se concentrará en el uso de IA y agentes sobre problemas reales de ingeniería backend.

---

## 3. Propósito

El propósito del curso es transformar la forma de trabajo del participante:

> Pasar de usar la inteligencia artificial como un asistente ocasional a dirigir agentes que investigan, planifican, implementan, prueban, revisan, documentan y mantienen software backend.

El curso debe enseñar no solo a obtener código, sino a:

- formular tareas de ingeniería;
- proporcionar contexto útil;
- controlar el alcance;
- definir criterios de aceptación;
- verificar resultados;
- coordinar varios agentes;
- trabajar con herramientas locales y remotas;
- construir aplicaciones que incorporen agentes;
- evaluar calidad, seguridad, costo y confiabilidad.

---

## 4. Resultado final esperado

Al finalizar el curso, el participante podrá:

1. Elegir entre ChatGPT, Codex, búsqueda web, investigación profunda, API y agentes personalizados.
2. Convertir requerimientos ambiguos en especificaciones ejecutables por agentes.
3. Preparar repositorios para que los agentes trabajen con instrucciones claras.
4. Delegar funcionalidades backend completas.
5. Usar Codex desde ChatGPT, el editor y la terminal.
6. Coordinar agentes especializados en análisis, implementación, pruebas, seguridad y revisión.
7. Revisar críticamente código generado por IA.
8. Integrar modelos de OpenAI en aplicaciones Node.js y NestJS.
9. Diseñar herramientas mediante function calling.
10. Construir agentes con estado, herramientas, trazas y handoffs.
11. Comprender y utilizar MCP cuando sea apropiado.
12. Aplicar controles de seguridad, permisos mínimos y supervisión humana.
13. Crear evaluaciones reproducibles para aplicaciones basadas en modelos.
14. Medir mejoras de productividad sin sacrificar calidad.
15. Adoptar un flujo de trabajo agent-first sostenible.

---

## 5. Principios del curso

### 5.1 Ingeniería antes que prompting

El curso no estará centrado en trucos de prompts. Las instrucciones a los agentes se tratarán como especificaciones técnicas.

### 5.2 Evidencia antes que confianza

Ningún cambio se considerará correcto solo porque el agente afirme que lo es. Se exigirá evidencia:

- pruebas;
- compilación;
- lint;
- validaciones;
- diffs;
- trazas;
- consultas;
- resultados reproducibles.

### 5.3 El desarrollador conserva la responsabilidad

Los agentes pueden ejecutar trabajo, pero el desarrollador sigue siendo responsable de:

- las decisiones;
- la seguridad;
- la arquitectura;
- la revisión;
- la entrega final.

### 5.4 Autonomía gradual

La autonomía se incrementará por etapas:

1. explicación;
2. propuesta;
3. generación;
4. modificación;
5. ejecución;
6. entrega verificada;
7. coordinación multiagente.

### 5.5 Repositorio como fuente de verdad

Las conversaciones sirven para explorar. El contenido aprobado se consolida en archivos versionados.

### 5.6 Aprendizaje acumulativo

Los laboratorios alimentarán un único proyecto transversal para evitar ejercicios aislados sin continuidad.

---

## 6. Formato general

**Duración inicial estimada:** 45 a 60 horas.  
**Modalidad:** autoestudio guiado con prácticas acumulativas.

Distribución aproximada:

- 25 % conceptos.
- 20 % demostraciones guiadas.
- 45 % laboratorios.
- 10 % evaluaciones y retrospectivas.

Cada módulo debe incluir:

- propósito;
- competencias;
- requisitos previos;
- contenido conceptual;
- demostración;
- laboratorio;
- ejercicio independiente;
- evaluación;
- checklist profesional;
- entregables;
- recursos oficiales.

---

## 7. Stack principal

El stack base del curso será:

- Node.js.
- TypeScript.
- NestJS.
- PostgreSQL.
- TypeORM o una alternativa aprobada posteriormente.
- Jest.
- Supertest.
- Docker.
- Git.
- GitHub.
- AWS.
- OpenAI API.

Las variaciones se documentarán en `DECISIONES.md`.

---

## 8. Estructura del curso

## Fase I — Cambio de modelo mental

### Módulo 1. Del copiloto al desarrollo dirigido por agentes

- Asistente, copiloto y agente.
- Ciclo de trabajo de un agente.
- Niveles de delegación.
- Supervisión humana.
- Comparación entre trabajo manual, Copilot y Codex.

### Módulo 2. Comunicación y especificaciones para agentes

- Anatomía de una tarea ejecutable.
- Contexto, restricciones y criterios de aceptación.
- Instrucciones de exploración, implementación, debugging y revisión.
- Descomposición y corrección de ejecuciones.

## Fase II — ChatGPT como espacio de ingeniería

### Módulo 3. ChatGPT para el ciclo completo de desarrollo

- Proyectos.
- Archivos e instrucciones.
- Diseño técnico.
- ADR.
- Análisis de código, logs, contratos y requisitos.
- Preparación de planes de implementación.

### Módulo 4. Investigación técnica verificable

- Búsqueda web.
- Investigación profunda.
- Documentación oficial.
- Comparación de alternativas.
- Migraciones, compatibilidad y vulnerabilidades.
- Separación entre hechos, inferencias y recomendaciones.

## Fase III — Codex como agente de ingeniería

### Módulo 5. Codex en ChatGPT, editor y terminal

- Superficies de Codex.
- Navegación de repositorios.
- Edición de varios archivos.
- Ejecución de comandos.
- Permisos, aprobaciones y revisión de diffs.

### Módulo 6. Repositorios preparados para agentes

- README orientado al trabajo agentic.
- `AGENTS.md`.
- Instrucciones por directorio.
- Scripts de instalación y validación.
- Convenciones arquitectónicas.
- Skills reutilizables.

### Módulo 7. Delegación de funcionalidades completas

- Vertical slices.
- Planificación.
- Cambios de dominio, datos, API, validaciones y pruebas.
- Criterios de aceptación.
- Definición de terminado.

### Módulo 8. Debugging, refactorización y mantenimiento

- Hipótesis y evidencia.
- Reproducción mínima.
- Git para investigación.
- Characterization tests.
- Migraciones de librerías.
- Optimización y deuda técnica.

## Fase IV — Coordinación multiagente

### Módulo 9. Trabajo paralelo con varios agentes

- División por responsabilidad, componente e hipótesis.
- Agentes implementadores, revisores, investigadores y especialistas.
- Worktrees y ramas aisladas.
- Integración de resultados.
- Patrones de orquestación.

### Módulo 10. Code review y control de calidad

- Revisión funcional, arquitectónica, de seguridad y rendimiento.
- Pruebas adversariales.
- Revisión independiente.
- Pull requests y comentarios accionables.

## Fase V — Construcción de aplicaciones con OpenAI

### Módulo 11. OpenAI API para backend

- SDK de Node.js.
- Responses API.
- Structured Outputs.
- Streaming.
- Manejo de errores.
- Costos, tokens, privacidad y testing.

### Módulo 12. Herramientas y function calling

- Diseño de herramientas.
- Validación.
- Lectura y escritura.
- Autenticación y autorización.
- Confirmaciones.
- Auditoría e idempotencia.

### Módulo 13. Agents SDK y orquestación programática

- Agentes especializados.
- Estado.
- Herramientas.
- Handoffs.
- Guardrails.
- Trazas.
- Intervención humana.

### Módulo 14. MCP e integraciones

- Servidores y clientes MCP.
- Resources, tools y prompts.
- Permisos.
- Integraciones con ChatGPT y Codex.
- Riesgos de prompt injection.

## Fase VI — Ingeniería responsable

### Módulo 15. Seguridad en desarrollo agentic

- Secretos.
- Sandboxing.
- Restricciones de red.
- Operaciones destructivas.
- Acceso a producción.
- Dependencias y exfiltración.
- Políticas de aprobación.

### Módulo 16. Evaluación, observabilidad y costos

- Datasets de evaluación.
- Evaluaciones determinísticas y con modelos.
- Correctitud de herramientas.
- Latencia, tokens y costos.
- Trazas y regresiones.
- Evaluaciones en CI/CD.

## Fase VII — Adopción profesional

### Módulo 17. Flujo diario de un backend developer con agentes

- Del ticket al pull request.
- Exploración.
- Planificación.
- Delegación.
- Revisión.
- Documentación.
- Retrospectiva.

### Módulo 18. Adopción en equipos y organizaciones

- Estándares compartidos.
- Skills organizacionales.
- Políticas.
- Métricas.
- Propiedad intelectual.
- Estrategia gradual de adopción.

---

## 9. Proyecto final

El proyecto final será una API backend empresarial desarrollada mediante un flujo agent-first.

Debe incluir:

- NestJS y TypeScript.
- PostgreSQL.
- Docker.
- API REST documentada.
- Autenticación y autorización.
- Pruebas unitarias y de integración.
- CI/CD.
- OpenAI API.
- Herramientas internas.
- Agentes especializados.
- Evaluaciones.
- Observabilidad.
- Seguridad y auditoría.

La evaluación considerará:

- calidad de las especificaciones;
- división del trabajo;
- revisión de resultados;
- evidencia de validación;
- arquitectura;
- seguridad;
- mantenibilidad;
- capacidad de detectar errores del agente.

---

## 10. Artefactos finales

El curso debe producir:

- biblioteca de especificaciones y prompts;
- plantilla de tareas para agentes;
- checklist de delegación;
- checklist de revisión;
- archivo `AGENTS.md`;
- Skills reutilizables;
- política de permisos;
- guía de seguridad;
- plantilla de evaluación;
- servidor MCP de ejemplo;
- agente construido con SDK;
- proyecto backend final;
- manual personal de trabajo agent-first.

---

## 11. Estrategia de evaluación

### Diagnóstico inicial

Resolver una tarea backend con el flujo actual del participante.

Métricas:

- tiempo;
- calidad;
- pruebas;
- defectos;
- comprensión;
- número de correcciones.

### Evaluación por módulo

Cada módulo tendrá:

- evidencia práctica;
- entregable;
- evaluación breve;
- retrospectiva;
- actualización del repositorio.

### Evaluación final

Resolver una funcionalidad comparable a la evaluación inicial empleando:

- especificación;
- Codex;
- agentes paralelos;
- revisión independiente;
- validaciones automáticas;
- documentación;
- medición de resultados.

---

## 12. Gobierno del contenido

- Este archivo define el alcance general.
- `PROGRESO.md` indica el estado actual.
- `DECISIONES.md` registra decisiones globales.
- `PLANTILLA_MODULO.md` define la estructura común.
- `PROYECTO_TRANSVERSAL.md` define la aplicación acumulativa.
- Los módulos terminados se almacenarán en carpetas independientes.
- Git será la fuente oficial de versiones.
- Los archivos subidos al Proyecto de ChatGPT serán copias de referencia.
