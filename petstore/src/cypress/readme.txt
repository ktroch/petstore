README
Este proyecto contiene tests de API para la página web https://petstore.swagger.io/ utilizando el framework Cypress.io.

Requerimientos
Node.js v14.1 o superior
Cypress v9.1.1 o superior
Un navegador web (se recomienda Google Chrome)
Instalación
Clonar este repositorio en tu computadora.
Ejecutar npm install en la carpeta raíz del proyecto.
Para abrir Cypress, ejecutar npm run cy:open.
Seleccionar el archivo de test que se desea correr.
Configuración
En el archivo cypress.json se pueden configurar las opciones de Cypress. Por ejemplo, se pueden cambiar las siguientes opciones:

baseUrl: la URL base para todas las pruebas de Cypress.
Estructura del proyecto
El proyecto está estructurado de la siguiente manera:

css
Copy code
cypress
│   ├── fixtures
│   │   ├── mascotas.json
│   │   └── pet.json
│   ├── integration
│   │   ├── añadirMascota.spec.js
│   │   ├── consultarMascota.spec.js
│   │   ├── actualizarMascota.spec.js
│   │   └── consultarMascotaModificada.spec.js
│   ├── plugins
│   │   └── index.js
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   ├── screenshots
│   └── videos
├── cypress.json
├── package.json
└── readme.txt
fixtures: contiene archivos con datos que se utilizan en las pruebas.
integration: contiene los archivos de test.
plugins: contiene el archivo de configuración de plugins de Cypress.
support: contiene el archivo con los comandos personalizados y otros archivos de soporte.
screenshots: contiene las capturas de pantalla de las pruebas fallidas.
videos: contiene los videos de las pruebas.
cypress.json: contiene la configuración global de Cypress.
package.json: contiene las dependencias y scripts del proyecto.
Ejecución de pruebas
Para correr las pruebas, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:

npm run cy:run
Este comando correrá todas las pruebas y generará un reporte HTML en la carpeta mochawesome-report.

Reportes
Los reportes se generan automáticamente en la carpeta mochawesome-report cada vez que se corre el comando npm run cy:run. Estos reportes se pueden abrir en un navegador web y contienen información detallada sobre los resultados de las pruebas.

Conclusiones
Este proyecto demuestra cómo utilizar Cypress.io para realizar pruebas de API en la página https://petstore.swagger.io/. Se han cubierto los siguientes casos de prueba:

Añadir una mascota a la tienda.
Consultar la mascota ingresada previamente (Búsqueda por ID).
Actualizar el nombre de la mascota y el estatus de la mascota a “sold”.
Consultar la mascota modificada por estatus (Búsqueda por estatus).
Se han utilizado comandos personalizados para simplificar la escritura de las pruebas y se ha generado un reporte HTML para visualizar los resultados de manera