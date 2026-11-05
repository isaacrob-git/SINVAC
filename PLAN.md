# SINVAC --- Sistema Nacional de Información de Vacunación

## Documento de planificación, análisis y guía del proyecto

**Asignatura:** Programación III\
**Nivel académico:** Cuarto semestre universitario\
**Tipo de proyecto:** Aplicación web académica\
**País de referencia:** Venezuela\
**Estado del documento:** Planificación inicial consolidada\
**Propósito:** Servir como documento de referencia para continuar el
desarrollo y como guía para explicar y defender el proyecto ante el
profesor.

------------------------------------------------------------------------

## 1. Resumen ejecutivo

SINVAC (Sistema Nacional de Información de Vacunación) es una aplicación
web académica concebida para centralizar y organizar información
relacionada con el registro de personas, aplicaciones de vacunas,
exámenes de salud y emisión de certificados. El sistema plantea una
simulación funcional de alcance nacional para Venezuela, con información
ficticia y fines exclusivamente académicos.

La propuesta busca representar, a escala controlada, cómo una plataforma
informática puede apoyar el registro, consulta y seguimiento de
información de vacunación en distintos centros de salud. También
incorpora mecanismos de control de acceso, trazabilidad de operaciones y
consulta ciudadana de información autorizada.

El proyecto no pretende conectarse con instituciones gubernamentales ni
sustituir sistemas sanitarios reales. Su alcance se limita a una
implementación universitaria que permita demostrar conocimientos de
análisis, diseño, programación, bases de datos, desarrollo web y
seguridad básica.

## 2. Problema y justificación

La información de vacunación puede encontrarse distribuida entre
distintos centros y registros. Cuando no existe una plataforma
centralizada, consultar antecedentes, verificar aplicaciones, dar
seguimiento a esquemas y generar certificados puede resultar más
complejo.

SINVAC propone una solución informática que permita registrar y
consultar de manera organizada la información de vacunación y exámenes,
manteniendo la relación entre cada persona, el centro donde fue atendida
y el funcionario responsable del registro.

Desde el punto de vista académico, el proyecto permite aplicar conceptos
de programación web, arquitectura cliente-servidor, diseño relacional,
operaciones CRUD, autenticación, autorización, validación de datos y
generación de reportes.

## 3. Objetivos

### 3.1 Objetivo general

Desarrollar una aplicación web académica que permita gestionar de forma
centralizada registros de personas, aplicaciones de vacunas, exámenes de
salud y solicitudes de certificados, incorporando control de acceso por
roles, organización territorial y trazabilidad de operaciones.

### 3.2 Objetivos específicos

-   Registrar y administrar información básica de las personas incluidas
    en el sistema.
-   Registrar aplicaciones de vacunas y exámenes realizados en centros
    de salud.
-   Consultar el historial de vacunación y exámenes de cada persona.
-   Gestionar solicitudes de certificados y permitir su revisión por
    personal autorizado.
-   Administrar usuarios, roles y centros de salud.
-   Restringir las operaciones de los funcionarios según sus permisos y
    centros asignados.
-   Generar consultas y estadísticas descriptivas a partir de los
    registros almacenados.
-   Mantener un registro de las operaciones relevantes realizadas en el
    sistema.

## 4. Alcance del proyecto

### 4.1 Alcance académico

El sistema tendrá una cobertura territorial de referencia nacional,
correspondiente a los estados y municipios de Venezuela. Esta cobertura
será representada mediante catálogos y datos de prueba.

Aunque se plantea como un sistema de alcance nacional, su implementación
será una simulación académica. No se utilizarán datos reales de
pacientes, no se integrará con organismos públicos y no se realizarán
decisiones médicas automatizadas.

### 4.2 Funciones incluidas

-   Inicio de sesión para funcionarios.
-   Administración de usuarios y roles.
-   Administración de centros de salud y sus asignaciones territoriales.
-   Registro y consulta de personas.
-   Registro de vacunas y aplicaciones de dosis.
-   Registro de exámenes.
-   Consulta del expediente e historial.
-   Gestión de solicitudes de certificados.
-   Revisión, aprobación o rechazo de solicitudes por personal
    certificador.
-   Generación de certificados en PDF.
-   Portal de consulta ciudadana con verificación adicional.
-   Consultas, estadísticas descriptivas y auditoría.

### 4.3 Límites y exclusiones

Para mantener el proyecto realizable en cuarto semestre, quedan fuera
del alcance inicial:

-   Integración con sistemas gubernamentales o instituciones sanitarias
    reales.
-   Uso de historias clínicas o datos personales reales.
-   Diagnósticos, recomendaciones médicas o decisiones clínicas
    automatizadas.
-   Aplicaciones móviles nativas.
-   Integraciones complejas con servicios externos.
-   Infraestructura distribuida de alta disponibilidad propia de un
    sistema nacional productivo.

## 5. Usuarios y roles

El sistema contempla tres roles internos y un actor externo.

  -----------------------------------------------------------------------
  Actor o rol                         Responsabilidades principales
  ----------------------------------- -----------------------------------
  Administrador nacional              Gestionar funcionarios, roles,
                                      centros, catálogos, consultas
                                      nacionales, estadísticas y
                                      auditoría. Tiene acceso global.

  Personal de vacunación              Registrar personas y aplicaciones
                                      de vacunas, consultar expedientes y
                                      trabajar dentro de los centros que
                                      tiene autorizados.

  Personal certificador               Registrar o revisar exámenes,
                                      evaluar solicitudes, verificar
                                      requisitos y aprobar o rechazar
                                      certificados. Su acceso también se
                                      limita a los centros autorizados
                                      cuando corresponda.

  Ciudadano                           Actor externo que consulta
                                      información propia autorizada y
                                      certificados mediante
                                      identificación y una verificación
                                      adicional. No es un funcionario ni
                                      necesita una cuenta interna.
  -----------------------------------------------------------------------

### 5.1 Asignación a centros

Un funcionario puede estar asignado a uno o varios centros de salud. La
relación se administra mediante una tabla intermedia. El administrador
nacional no necesita estar asociado a un centro específico, ya que tiene
acceso global.

El backend debe comprobar los permisos en cada operación. No basta con
ocultar opciones en la interfaz: las rutas de la API también deben
impedir que un usuario consulte o modifique información fuera de sus
atribuciones.

## 6. Requisitos funcionales

  -----------------------------------------------------------------------
  Código                  Requisito               Descripción
  ----------------------- ----------------------- -----------------------
  RF-01                   Autenticación y         Permitir iniciar
                          usuarios                sesión, identificar el
                                                  rol, registrar y
                                                  modificar funcionarios,
                                                  activar o desactivar
                                                  cuentas y aplicar
                                                  permisos.

  RF-02                   Gestión de personas     Registrar cédula,
                                                  nombres, apellidos,
                                                  fecha de nacimiento,
                                                  sexo, contacto y
                                                  ubicación; evitar
                                                  duplicados y mantener
                                                  un expediente único.

  RF-03                   Gestión de vacunación   Administrar el catálogo
                                                  de vacunas y registrar
                                                  persona, vacuna, número
                                                  de dosis, fecha,
                                                  centro, funcionario,
                                                  lote y observaciones
                                                  cuando corresponda.

  RF-04                   Gestión de exámenes     Registrar tipo de
                                                  examen, fecha,
                                                  resultado,
                                                  observaciones, centro y
                                                  funcionario
                                                  responsable.

  RF-05                   Historial               Mostrar el historial
                                                  cronológico de vacunas,
                                                  exámenes, solicitudes y
                                                  certificados de una
                                                  persona.

  RF-06                   Certificados            Crear solicitudes,
                                                  validar requisitos,
                                                  permitir revisión,
                                                  aprobación o rechazo
                                                  justificado y generar
                                                  certificados PDF con
                                                  código único.

  RF-07                   Consultas y filtros     Buscar por cédula,
                                                  nombre, apellido,
                                                  estado, municipio,
                                                  vacuna, centro y
                                                  condición del registro.

  RF-08                   Estadísticas            Presentar cantidades y
                                                  distribuciones de
                                                  registros por
                                                  territorio, vacuna y
                                                  centro, además de
                                                  reportes descriptivos.

  RF-09                   Auditoría               Registrar operaciones
                                                  relevantes: usuario,
                                                  fecha, hora, acción,
                                                  módulo y registro
                                                  afectado.

  RF-10                   Portal ciudadano        Permitir que una
                                                  persona consulte
                                                  información propia
                                                  autorizada y
                                                  certificados tras
                                                  superar una
                                                  verificación de
                                                  identidad.
  -----------------------------------------------------------------------

## 7. Requisitos no funcionales

-   **Seguridad:** contraseñas almacenadas mediante hash, autenticación
    con JWT y autorización por roles.
-   **Privacidad:** utilizar datos ficticios y limitar la consulta de
    información personal.
-   **Integridad:** aplicar claves primarias, claves foráneas,
    restricciones y validaciones.
-   **Usabilidad:** interfaz clara, consistente y adaptable a distintos
    tamaños de pantalla.
-   **Mantenibilidad:** separar frontend, backend, rutas, controladores,
    configuración y acceso a datos.
-   **Rendimiento:** realizar consultas adecuadas y evitar recuperar
    información innecesaria.
-   **Disponibilidad:** permitir ejecutar el sistema en un entorno local
    y contemplar su despliegue académico.
-   **Trazabilidad:** conservar evidencia de las operaciones
    importantes.
-   **Compatibilidad:** utilizar tecnologías web comunes y navegadores
    modernos.

## 8. Reglas de negocio

1.  Cada persona tendrá un expediente único dentro del sistema.
2.  La cédula será un identificador único y se almacenará como texto
    (`VARCHAR`), no como número.
3.  Una persona podrá recibir varias vacunas y ser atendida en distintos
    centros.
4.  Cada aplicación de vacuna deberá relacionarse con una persona, una
    vacuna, un centro y el funcionario que la registró.
5.  Cada examen deberá relacionarse con la persona, el tipo de examen,
    el centro y el funcionario responsable.
6.  Los funcionarios solo podrán operar en los centros a los que estén
    autorizados, salvo el administrador nacional.
7.  Un certificado solo podrá emitirse cuando se hayan verificado los
    requisitos correspondientes y un funcionario certificador haya
    tomado la decisión.
8.  Una solicitud rechazada deberá conservar el motivo del rechazo.
9.  La renovación de un certificado no eliminará el certificado
    anterior.
10. Las modificaciones relevantes deberán quedar registradas en
    auditoría.
11. Un ciudadano solo podrá consultar sus propios datos después de
    completar la verificación establecida.
12. La ausencia de un registro de vacunación no demuestra que una
    persona no esté vacunada. Deben distinguirse los estados "con
    registro", "sin información" y, únicamente cuando exista evidencia
    suficiente, "no vacunado".
13. Los centros y catálogos se desactivarán cuando ya no deban
    utilizarse, en lugar de eliminarse si existen registros
    relacionados.
14. Las estadísticas describirán los datos registrados en SINVAC. Sin un
    padrón poblacional confiable que sirva como denominador, no se
    presentarán como porcentajes reales de cobertura nacional.

## 9. Arquitectura tecnológica

Se adopta una arquitectura cliente-servidor de tres componentes:
interfaz web, API de backend y base de datos relacional.

### 9.1 Tecnologías seleccionadas

  -----------------------------------------------------------------------
  Componente              Tecnología              Uso
  ----------------------- ----------------------- -----------------------
  Estructura de la        HTML5                   Organización semántica
  interfaz                                        de las páginas.

  Estilos                 Tailwind CSS 4          Diseño visual y
                                                  adaptación responsive.

  Interactividad          JavaScript puro         Eventos, validaciones
                                                  sencillas y
                                                  comunicación con la
                                                  API.

  Backend                 Node.js                 Entorno de ejecución
                                                  del servidor.

  Framework backend       Express                 Rutas, middleware y API
                                                  REST.

  Base de datos           PostgreSQL              Almacenamiento
                                                  relacional de la
                                                  información.

  Acceso a PostgreSQL     `pg`                    Conexión y ejecución de
                                                  consultas desde
                                                  Node.js.

  Autenticación           JSON Web Token (JWT)    Identificación de
                                                  sesiones de
                                                  funcionarios.

  Hash de contraseñas     bcrypt                  Almacenamiento seguro
                                                  de contraseñas.

  Variables de entorno    dotenv                  Configuración separada
                                                  del código.

  Validación              express-validator       Validación de datos
                                                  recibidos por la API.

  Comunicación HTTP       fetch y JSON            Intercambio de datos
                                                  entre frontend y
                                                  backend.

  Correo                  nodemailer              Envío de
                                                  notificaciones, si se
                                                  implementa en la fase
                                                  correspondiente.

  PDF                     pdfkit                  Generación de
                                                  certificados PDF.

  CORS                    cors                    Control de solicitudes
                                                  entre orígenes durante
                                                  el desarrollo o
                                                  despliegue.

  Desarrollo              nodemon                 Reinicio automático del
                                                  servidor durante la
                                                  programación.
  -----------------------------------------------------------------------

### 9.2 Justificación de la elección

Se selecciona HTML, Tailwind CSS y JavaScript puro en lugar de React
para mantener el frontend dentro de un nivel manejable para un
estudiante de cuarto semestre. Esto permite trabajar directamente con la
estructura de páginas, estilos, eventos y solicitudes HTTP sin añadir
conceptos de un framework de interfaz.

Tailwind CSS permite construir una interfaz personalizada sin depender
de una plantilla visual como Bootstrap. Se utilizará su CLI para
compilar los estilos, no la versión Play CDN.

Node.js y Express permiten implementar una API REST con JavaScript,
mientras que PostgreSQL ofrece integridad relacional y restricciones
apropiadas para entidades conectadas entre sí, como personas, centros,
funcionarios y aplicaciones de vacunas.

### 9.3 Comunicación entre componentes

El navegador presenta las páginas HTML y ejecuta JavaScript. Cuando el
usuario realiza una operación, el frontend envía una solicitud HTTP a la
API mediante `fetch()`. Express recibe la solicitud, ejecuta las
validaciones y comprobaciones de permisos, consulta o modifica
PostgreSQL y devuelve una respuesta en formato JSON. El frontend utiliza
esa respuesta para actualizar la interfaz.

## 10. Estructura inicial de carpetas

La organización propuesta separa claramente el cliente web y el
servidor.

``` text
SINVAC/
├── client/
│   ├── index.html
│   ├── pages/
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── personas.html
│   │   ├── vacunas.html
│   │   ├── examenes.html
│   │   ├── certificados.html
│   │   ├── centros.html
│   │   ├── usuarios.html
│   │   └── auditoria.html
│   ├── src/
│   │   ├── input.css
│   │   └── js/
│   │       ├── api.js
│   │       ├── auth.js
│   │       ├── personas.js
│   │       ├── vacunas.js
│   │       └── certificados.js
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── css/
│   │   └── output.css
│   └── package.json
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
└── README.md
```

**Responsabilidad de las carpetas del backend:**

-   `config/`: configuración de servicios, como la conexión a
    PostgreSQL.
-   `controllers/`: lógica que atiende las solicitudes y prepara
    respuestas.
-   `middlewares/`: autenticación, autorización y validaciones
    compartidas.
-   `models/`: definiciones o estructuras de acceso a los datos, según
    la organización que se adopte.
-   `routes/`: definición de endpoints de la API.
-   `services/`: operaciones de negocio que conviene separar de los
    controladores.
-   `utils/`: funciones auxiliares reutilizables.
-   `app.js`: configuración de Express y registro de middleware y rutas.
-   `server.js`: punto de entrada que inicia el servidor.

**Nota sobre las rutas del frontend:** `index.html` se encuentra en la
raíz de `client`, mientras que las páginas están dentro de `pages`. Por
ello, las rutas relativas a CSS, JavaScript e imágenes deben ajustarse a
la ubicación de cada HTML o configurarse mediante rutas absolutas al
servir el frontend.

## 11. Diseño inicial de la base de datos

Se ha propuesto un modelo relacional de 16 tablas. Este diseño es una
base académica inicial y podrá ajustarse durante la implementación, sin
alterar las reglas fundamentales del sistema.

  ----------------------------------------------------------------------------
                           N.º Tabla                     Propósito
  ---------------------------- ------------------------- ---------------------
                             1 `rol`                     Catálogo de roles del
                                                         sistema.

                             2 `usuario`                 Cuentas de
                                                         funcionarios,
                                                         credenciales y rol.

                             3 `usuario_centro`          Relación muchos a
                                                         muchos entre
                                                         funcionarios y
                                                         centros.

                             4 `estado`                  Catálogo de estados
                                                         de Venezuela.

                             5 `municipio`               Municipios asociados
                                                         a un estado.

                             6 `persona`                 Datos de
                                                         identificación y
                                                         contacto de cada
                                                         persona.

                             7 `centro_salud`            Centros donde se
                                                         realizan registros y
                                                         atenciones.

                             8 `vacuna`                  Catálogo de vacunas.

                             9 `aplicacion_vacuna`       Registro de cada
                                                         dosis aplicada.

                            10 `tipo_examen`             Catálogo de tipos de
                                                         examen.

                            11 `examen`                  Registro de exámenes
                                                         realizados.

                            12 `solicitud_certificado`   Solicitudes y estado
                                                         de su procesamiento.

                            13 `certificado`             Certificados emitidos
                                                         y sus datos de
                                                         identificación.

                            14 `auditoria`               Historial de
                                                         operaciones
                                                         relevantes.

                            15 `tipo_certificado`        Catálogo de tipos de
                                                         certificado.

                            16 `requisito_certificado`   Requisitos de vacunas
                                                         o exámenes asociados
                                                         a cada tipo de
                                                         certificado.
  ----------------------------------------------------------------------------

### 11.1 Relaciones principales

-   `rol` tiene una relación uno a muchos con `usuario`.
-   `usuario` y `centro_salud` mantienen una relación muchos a muchos
    mediante `usuario_centro`.
-   `estado` tiene una relación uno a muchos con `municipio`.
-   `municipio` se relaciona con `persona` y `centro_salud`.
-   `persona`, `vacuna`, `centro_salud` y `usuario` se relacionan con
    `aplicacion_vacuna`.
-   `persona`, `tipo_examen`, `centro_salud` y `usuario` se relacionan
    con `examen`.
-   `persona` y `tipo_certificado` se relacionan con
    `solicitud_certificado`.
-   `solicitud_certificado` puede tener cero o un `certificado`; la
    relación se limita a uno mediante una restricción única sobre
    `id_solicitud`.
-   `tipo_certificado` se relaciona con `requisito_certificado`. Cada
    requisito apunta a una vacuna o a un tipo de examen.
-   `usuario` puede relacionarse con múltiples registros de auditoría.
    El usuario puede ser nulo cuando la operación sea generada por el
    sistema y no pueda atribuirse a una cuenta.

### 11.2 Atributos y restricciones relevantes

**Identificación y usuarios** - `usuario.id_usuario` es clave primaria y
`usuario.id_rol` es clave foránea. - El correo y el nombre de usuario
deben ser únicos cuando así se defina en el esquema. - La contraseña se
almacena como hash, nunca en texto plano. - `usuario_centro` utiliza una
clave primaria compuesta por `id_usuario` e `id_centro`.

**Personas y territorio** - `persona.cedula` debe ser `VARCHAR` y tener
restricción `UNIQUE`. - `municipio.id_estado` referencia a `estado`. -
`persona.id_municipio` y `centro_salud.id_municipio` permiten asociar
registros a su ubicación.

**Vacunación y exámenes** - `aplicacion_vacuna` relaciona persona,
vacuna, centro y funcionario. - `examen` relaciona persona, tipo de
examen, centro y funcionario. - Las fechas deben utilizar tipos
apropiados de PostgreSQL, como `DATE` o `TIMESTAMP`/`TIMESTAMPTZ`;
PostgreSQL no utiliza `DATETIME`.

**Certificados** - `certificado.id_solicitud` debe ser único para evitar
más de un certificado asociado a la misma solicitud. -
`certificado.codigo_unico` debe ser único. -
`solicitud_certificado.id_usuario` puede ser nulo si la solicitud la
inicia un ciudadano y no un funcionario. - `requisito_certificado` debe
tener una restricción `CHECK` que garantice que cada requisito
referencia exactamente una vacuna o un tipo de examen, no ambos ni
ninguno.

### 11.3 Normalización

El diseño busca cumplir las tres primeras formas normales:

-   **Primera forma normal (1FN):** cada atributo almacena un valor
    atómico y no grupos repetidos.
-   **Segunda forma normal (2FN):** los atributos no clave dependen de
    la clave completa. Esto es especialmente relevante para la clave
    compuesta de `usuario_centro`.
-   **Tercera forma normal (3FN):** se separan datos que dependen de
    otras entidades. Por ejemplo, los municipios se almacenan aparte y
    cada uno referencia a un estado, evitando repetir información del
    estado en cada persona o centro.

## 12. Estados y criterios de certificados

### 12.1 Solicitudes

Estados propuestos:

-   `Pendiente`: la solicitud fue recibida.
-   `En revision`: un funcionario certificador está evaluándola.
-   `Aprobada`: el certificador confirmó que cumple los requisitos.
-   `Rechazada`: el certificador determinó que no cumple los requisitos
    y registra el motivo.
-   `Emitida`: el documento PDF fue generado correctamente y quedó
    registrado.

La aprobación y la emisión son pasos distintos. El sistema no debe
marcar una solicitud como emitida antes de que el documento se haya
generado y almacenado correctamente.

### 12.2 Certificados

Estados propuestos:

-   `Vigente`
-   `Vencido`
-   `Anulado`

El certificado conservará un código único y su fecha de emisión. La
fecha de vencimiento será opcional, según el tipo de certificado
definido para la simulación.

### 12.3 Responsabilidad de la decisión

El sistema puede ayudar a comprobar si existen registros que satisfacen
los requisitos configurados, pero la decisión de aprobar o rechazar
corresponde al funcionario certificador. SINVAC no realizará
diagnósticos ni decisiones sanitarias automáticas.

## 13. Seguridad y protección de la información

Las medidas previstas para el alcance académico son:

-   Hash de contraseñas con bcrypt.
-   Autenticación de funcionarios mediante JWT.
-   Middleware de autorización para comprobar roles.
-   Comprobación de centros asignados en operaciones de personal de
    vacunación y certificación.
-   Validación de datos en el servidor, incluso si el frontend también
    valida formularios.
-   Consultas parametrizadas con `pg` para reducir el riesgo de
    inyección SQL.
-   Variables sensibles en `.env`, excluido del repositorio.
-   Uso de HTTPS en un despliegue público.
-   Verificación adicional para el acceso ciudadano.
-   Auditoría de operaciones sensibles.
-   Datos ficticios en pruebas y demostraciones.

La interfaz no constituye una barrera de seguridad suficiente. Toda
autorización debe comprobarse en el backend.

## 14. Interfaz y experiencia de usuario

El frontend se desarrollará con páginas HTML independientes, estilos
Tailwind CSS 4 y archivos JavaScript organizados por funcionalidad.

La interfaz deberá mantener una identidad visual consistente,
formularios claros, tablas de consulta, mensajes de validación y
navegación según el rol. Los funcionarios no deben visualizar opciones
que no les correspondan, aunque la protección real se implementará
también en la API.

El portal ciudadano será distinto del panel interno de funcionarios y
solo expondrá los datos que se hayan autorizado para consulta.

### 14.1 Configuración inicial de Tailwind CSS 4

Dentro de `client`, se propone instalar Tailwind CSS y su CLI:

``` bash
npm init -y
npm install -D tailwindcss @tailwindcss/cli
```

Archivo `src/input.css`:

``` css
@import "tailwindcss";

@theme {
    --color-sinvac-900: #173B35;
    --color-sinvac-700: #287C68;
    --color-sinvac-100: #EAF2EF;
    --color-sinvac-background: #F5F6F8;
}
```

Comando para compilar y observar cambios:

``` bash
npx @tailwindcss/cli -i ./src/input.css -o ./css/output.css --watch
```

Las páginas HTML deben enlazar el archivo generado `output.css`. No se
utilizará Play CDN como configuración definitiva del proyecto.

## 15. Plan de implementación por etapas

El desarrollo se organizará en fases para reducir riesgos y permitir
verificar cada parte antes de avanzar.

  -----------------------------------------------------------------------
  Fase                    Actividades             Resultado esperado
  ----------------------- ----------------------- -----------------------
  1\. Planificación       Definir alcance,        Documento de
                          actores, requisitos,    planificación.
                          reglas de negocio y     
                          arquitectura.           

  2\. Diseño de datos     Elaborar modelo         Esquema relacional de
                          entidad-relación,       PostgreSQL.
                          tablas, claves y        
                          restricciones.          

  3\. Estructura del      Crear carpetas `client` Proyecto organizado.
  proyecto                y `server`, configurar  
                          paquetes y archivos     
                          iniciales.              

  4\. Backend base        Configurar Express,     API inicial ejecutable.
                          variables de entorno,   
                          conexión a PostgreSQL y 
                          endpoint de salud.      

  5\. Autenticación       Implementar login,      Acceso controlado para
                          bcrypt, JWT, roles y    funcionarios.
                          middleware de           
                          autorización.           

  6\. Interfaz base       Configurar Tailwind,    Estructura visual
                          navegación, login y     inicial.
                          panel principal.        

  7\. Gestión de personas CRUD de personas,       Módulos administrativos
  y centros               centros, estados y      básicos.
                          municipios.             

  8\. Vacunación y        Catálogos y registros   Historial de atención.
  exámenes                asociados a personas,   
                          centros y funcionarios. 

  9\. Certificados        Solicitudes, revisión,  Flujo de certificación.
                          requisitos,             
                          aprobación/rechazo y    
                          PDF.                    

  10\. Portal ciudadano   Verificación y consulta Consulta externa
                          limitada de información controlada.
                          propia.                 

  11\. Estadísticas y     Consultas agregadas y   Reportes y
  auditoría               registro de             trazabilidad.
                          operaciones.            

  12\. Pruebas y          Pruebas funcionales,    Versión demostrable del
  presentación            correcciones, datos     proyecto.
                          ficticios y             
                          documentación.          
  -----------------------------------------------------------------------

El orden puede ajustarse según el tiempo disponible. Se recomienda
completar primero un flujo funcional pequeño antes de ampliar módulos.

## 16. Configuración inicial prevista del backend

El backend se configurará dentro de la carpeta `server`.

### 16.1 Inicialización e instalación

Desde una terminal ubicada en `server`:

``` bash
npm init -y
npm install express pg dotenv cors bcrypt jsonwebtoken express-validator
npm install -D nodemon
```

Las dependencias se incorporarán según su uso. `nodemailer` y `pdfkit`
pueden instalarse cuando se implementen las notificaciones y la
generación de certificados, para evitar instalar herramientas antes de
necesitarlas.

### 16.2 Scripts del servidor

En `server/package.json` se definirán scripts equivalentes a:

``` json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Se recomienda mantener CommonJS (`require` y `module.exports`) para
simplificar la configuración inicial y no añadir `"type": "module"`
mientras se siga esa sintaxis.

### 16.3 Archivos iniciales

-   `server.js`: carga la configuración de entorno e inicia el servidor.
-   `app.js`: crea la aplicación Express, configura middleware y
    registra rutas.
-   `config/db.js`: crea y exporta el pool de conexiones de PostgreSQL.
-   `.env`: contiene valores locales y secretos; no se sube al
    repositorio.
-   `.env.example`: documenta los nombres de variables requeridas con
    valores de ejemplo no sensibles.
-   `.gitignore`: excluye `node_modules`, `.env` y otros archivos
    locales que no deben versionarse.

Variables previstas para `.env`:

``` env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sinvac_db
DB_USER=postgres
DB_PASSWORD=CAMBIAR_POR_LA_CLAVE_LOCAL
JWT_SECRET=CAMBIAR_POR_UN_SECRETO_LARGO_Y_ALEATORIO
```

No se deben publicar contraseñas ni secretos reales en el repositorio o
en capturas compartidas.

### 16.4 Conexión a PostgreSQL

El paquete `pg` permite crear un `Pool` de conexiones. La configuración
leerá los valores de `process.env` y se centralizará en `config/db.js`.
La conexión real y las pruebas del esquema se realizarán cuando se
retome la fase de base de datos.

## 17. Decisiones técnicas pendientes o simplificaciones reconocidas

El modelo es apropiado como punto de partida académico, pero se han
identificado decisiones que deben revisarse antes de considerar una
versión completa:

1.  **Esquemas de vacunación:** un campo general como `dosis_requeridas`
    simplifica el problema. Los esquemas reales pueden depender de edad,
    condiciones y pautas específicas. Para el proyecto se utilizarán
    reglas académicas claramente delimitadas.
2.  **Dosis repetidas y refuerzos:** una restricción única por persona,
    vacuna y número de dosis puede impedir registrar refuerzos o
    aplicaciones repetidas legítimas. La regla definitiva debe definirse
    antes de imponer esa restricción.
3.  **Auditoría:** `registro_afectado` como texto facilita referenciar
    registros de distintas tablas, pero no ofrece una clave foránea
    tradicional. Para el alcance académico puede aceptarse documentando
    la decisión.
4.  **Archivos PDF:** guardar una ruta local puede ser suficiente
    durante el desarrollo, pero un despliegue puede requerir
    almacenamiento persistente o un servicio de archivos.
5.  **Estados de catálogos:** utilizar un atributo booleano llamado
    `activo` evita confundirlo con la entidad geográfica `estado`.
6.  **Asignación de centros:** el backend deberá validar que el personal
    operativo tenga al menos un centro asignado. El administrador
    nacional tendrá una excepción por su alcance global.
7.  **Pruebas de base de datos:** el script SQL y los datos iniciales
    son una propuesta todavía pendiente de ejecutar y verificar. No se
    debe afirmar que el esquema ya fue probado.
8.  **Estadísticas:** los resultados describirán los registros
    existentes en la base de datos y no la cobertura real de la
    población venezolana.

## 18. Cómo explicar SINVAC al profesor

### 18.1 Presentación breve del proyecto

"SINVAC es un sistema web académico para gestionar información de
vacunación en centros de salud. Permite registrar personas, aplicaciones
de vacunas y exámenes, consultar historiales y gestionar solicitudes de
certificados. También contempla distintos roles de funcionarios,
asignación a centros de salud y un portal de consulta ciudadana. La idea
es simular una plataforma de alcance nacional para Venezuela utilizando
datos ficticios, sin conectarse a instituciones reales."

### 18.2 ¿Qué problema busca resolver?

"Busca representar el problema de tener información de vacunación
distribuida en diferentes centros. Al centralizar los registros, se
facilita consultar el historial de una persona, verificar las dosis
registradas y gestionar solicitudes de certificados."

### 18.3 ¿Por qué se eligieron estas tecnologías?

"Se eligió HTML, Tailwind CSS y JavaScript puro para construir una
interfaz web sin añadir la complejidad de un framework frontend. Node.js
y Express permiten desarrollar la API que procesa las operaciones,
mientras PostgreSQL organiza la información mediante tablas relacionadas
y restricciones de integridad. La selección busca equilibrar
funcionalidad, aprendizaje y viabilidad para el nivel de la asignatura."

### 18.4 ¿Por qué PostgreSQL y no una base de datos NoSQL?

"Porque la información del sistema tiene relaciones claras: una persona
puede tener muchas aplicaciones de vacunas, cada aplicación pertenece a
un centro y a un funcionario, y los certificados se relacionan con
solicitudes. PostgreSQL permite representar estas relaciones mediante
claves primarias y foráneas, además de aplicar restricciones para
mantener la integridad."

### 18.5 ¿Cómo se controla el acceso?

"Los funcionarios inician sesión y reciben una identificación de sesión
mediante JWT. El sistema utiliza roles para distinguir las funciones de
administradores, personal de vacunación y personal certificador. Además,
se comprueba a qué centros está asignado cada funcionario. Estas
restricciones se aplican en el backend, no solamente en la interfaz."

### 18.6 ¿El sistema determina automáticamente si una persona debe recibir una vacuna o merece un certificado?

"No. El proyecto registra información y puede comprobar requisitos
configurados para apoyar el proceso, pero no realiza diagnósticos ni
decisiones médicas. La aprobación de una solicitud de certificado
corresponde al funcionario certificador."

### 18.7 ¿Por qué se considera una simulación nacional?

"Porque el sistema contempla catálogos territoriales de estados y
municipios y permite organizar centros de salud de distintas zonas. Sin
embargo, por tratarse de un proyecto universitario, se utilizarán datos
ficticios y un alcance técnico limitado. No se afirma que represente una
plataforma gubernamental real."

### 18.8 ¿Qué demuestra el proyecto en Programación III?

"Permite demostrar programación del lado del servidor, diseño de una API
REST, operaciones CRUD, validación, autenticación, autorización,
conexión a una base de datos relacional, organización modular del código
y construcción de una interfaz web. También requiere aplicar análisis de
requisitos y diseño de una solución de software."

## 19. Glosario básico

  -----------------------------------------------------------------------
  Término                             Significado en el proyecto
  ----------------------------------- -----------------------------------
  API REST                            Interfaz mediante la cual el
                                      frontend solicita operaciones al
                                      backend usando HTTP.

  Backend                             Parte del sistema que procesa
                                      reglas, permisos y operaciones
                                      sobre los datos.

  Frontend                            Interfaz que utiliza el usuario
                                      desde el navegador.

  CRUD                                Crear, consultar, actualizar y
                                      eliminar o desactivar registros.

  JWT                                 Token utilizado para representar la
                                      autenticación de un usuario.

  Hash                                Resultado de una función
                                      criptográfica utilizada para
                                      almacenar contraseñas sin guardar
                                      el texto original.

  Middleware                          Función de Express que procesa una
                                      solicitud antes de llegar a su
                                      controlador.

  Clave primaria                      Atributo o conjunto de atributos
                                      que identifica de forma única un
                                      registro.

  Clave foránea                       Atributo que referencia un registro
                                      de otra tabla.

  Normalización                       Organización de tablas para reducir
                                      redundancia y anomalías de datos.

  Tailwind CSS                        Framework CSS basado en clases de
                                      utilidad.

  Pool de conexiones                  Conjunto administrado de conexiones
                                      reutilizables a la base de datos.

  Auditoría                           Registro de operaciones relevantes
                                      para conocer quién realizó una
                                      acción y cuándo.
  -----------------------------------------------------------------------

## 20. Estado actual y continuidad del trabajo

Al momento de consolidar este documento, se han definido el alcance
académico, los actores, los módulos, los requisitos, las reglas de
negocio, la arquitectura tecnológica y un modelo relacional inicial de
16 tablas. También se ha confirmado el uso de HTML5, Tailwind CSS 4 y
JavaScript puro en el frontend.

La configuración de Tailwind se ha planificado, pero la implementación
completa del frontend todavía está pendiente. El backend Express y la
conexión con PostgreSQL constituyen el siguiente bloque de trabajo. El
diseño SQL inicial fue planteado, pero sus pruebas y ajustes quedaron
expresamente pendientes para una etapa posterior.

### Próximos pasos inmediatos

1.  Crear o verificar la estructura de carpetas `SINVAC/client` y
    `SINVAC/server`.
2.  Inicializar el proyecto Node.js dentro de `server`.
3.  Instalar las dependencias iniciales del backend.
4.  Crear `server.js`, `app.js` y `config/db.js`.
5.  Configurar `.env`, `.env.example` y `.gitignore`.
6.  Crear un endpoint básico de comprobación, por ejemplo
    `GET /api/health`.
7.  Más adelante, conectar PostgreSQL y ejecutar las pruebas del esquema
    SQL.
8.  Continuar con autenticación y autorización antes de implementar los
    módulos que manejan datos personales.

------------------------------------------------------------------------

## 21. Referencias técnicas iniciales

Estas referencias corresponden a la documentación oficial de las
tecnologías seleccionadas. Se incluyen como punto de partida para
justificar decisiones técnicas y consultar detalles durante la
implementación.

-   Express.js. (s. f.). *Express web framework*. https://expressjs.com/
-   Node.js. (s. f.). *Node.js documentation*.
    https://nodejs.org/docs/latest/api/
-   PostgreSQL Global Development Group. (s. f.). *PostgreSQL
    documentation*. https://www.postgresql.org/docs/
-   Tailwind CSS. (s. f.). *Tailwind CSS documentation: Installation*.
    https://tailwindcss.com/docs/installation
-   MDN Web Docs. (s. f.). *HTML: HyperText Markup Language*.
    https://developer.mozilla.org/en-US/docs/Web/HTML
-   MDN Web Docs. (s. f.). *JavaScript*.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript
-   node-postgres. (s. f.). *node-postgres documentation*.
    https://node-postgres.com/
-   OpenJS Foundation. (s. f.). *Express*. https://expressjs.com/

**Nota:** las referencias técnicas deben ampliarse en el informe final
si el profesor exige fundamentación bibliográfica de conceptos de
ingeniería de software, bases de datos, seguridad o salud pública. Las
fuentes de documentación de herramientas respaldan el uso técnico de
esas tecnologías, pero no sustituyen bibliografía académica sobre los
fundamentos del sistema.
