# Microfrontend_PedidosYa_Productos_React
Microfrontend app para la gestión de servicios de productos de pedidos ya implementada con con ReactJs, Material UI Bootstrap, Git y otras tecnologías.


<br>

## Índice 📜

<details>
 <summary> Ver </summary>

 <br>

### Sección 1) Descripción, configuración y tecnologías.

*   [1.0) Descripción del Proyecto.](#10-descripción-)
*   [1.1) Ejecución del Proyecto.](#11-ejecución-del-proyecto-)
*   [1.2) Configuración del proyecto desde cero](#12-configuración-del-proyecto-desde-cero-)
*   [1.3) Comandos de utilidad.](#13-comandos-de-utilidad)
*   [1.4) Tecnologías.](#14-tecnologías-)

### Sección 2) Endpoints y Ejemplos

*   [2.0) EndPoints y recursos.](#20-endpoints-y-recursos-)
*   [2.1) Ejemplos.](#21-ejemplos-)

### Sección 3) Prueba de funcionalidad y Referencias

*   [3.0) Prueba de funcionalidad.](#30-prueba-de-funcionalidad-)
*   [3.1) Referencias.](#31-referencias-)

<br>

</details>

<br>

## Sección 1) Descripción, configuración y tecnologías.

### 1.0) Descripción [🔝](#índice-)

<details>
  <summary>Ver</summary>

 <br>

### 1.0.0) Descripción General

### 1.0.1) Descripción Arquitectura y Funcionamiento

<br>

</details>

### 1.1) Ejecución del Proyecto [🔝](#índice-)

<details>
  <summary>Ver</summary>
<br>


#### 1.1.0) Configuraciones iniciales
* Una vez creado un entorno de trabajo a través de algún ide, clonamos el proyecto
```git
git clone https://github.com/andresWeitzel/Microfrontend_PedidosYa_Productos_React
```
* Nos posicionamos sobre el proyecto
```git
cd 'projectName'
```
* Instalamos la última versión LTS de [Nodejs(v18)](https://nodejs.org/en/download).
* Instalamos todas las librerías necesarias
```git
npm i
```
* Las variables de entorno utilizadas en el proyecto se mantienen para simplificar el proceso de configuración de las mismas. Es recomendado agregar el archivo correspondiente (.env) al .gitignore.
* El siguiente script configurado en el package.json del proyecto es el encargado de
   * Levantar el servidor con react (entorno de desarrollo)
 ```git
 "scripts": {
       "start": "react-scripts start",
  },
```
* Ejecutamos la app desde terminal para entorno local.
```git
npm run start
```
* Si se presenta algún mensaje indicando qué el puerto 3000 ya está en uso, podemos terminar todos los procesos dependientes y volver a ejecutar la app
```git
npx kill-port 3000
npm run start
```

<br>

</details>

<br>

### 1.2) Configuración del proyecto desde cero [🔝](#índice-)

<details>
  <summary>Ver</summary>

<br>

* Una vez creado un entorno de trabajo a través de algún ide, clonamos el proyecto
```git
git clone https://github.com/andresWeitzel/Microfrontend_PedidosYa_Productos_React
```
* Nos posicionamos sobre el proyecto
```git
cd 'projectName'
```
* Instalamos la última versión LTS de [Nodejs(v18)](https://nodejs.org/en/download)
* Abrimos una terminal desde vsc
* Creamos un proyecto de react
```git
npx create-react-app 'nombreProyectoSinComillas'
```

<br>

</details>


### 1.3) Comandos de utilidad [🔝](#índice-)

<details>
  <summary>Ver</summary>
 <br>

 * Creamos un proyecto de react
```git
npx create-react-app 'nombreProyectoSinComillas'
```
* Levantar el servidor en local
```git
npm run start
```



<br>

</details>

### 1.4) Tecnologías [🔝](#índice-)

<details>
  <summary>Ver</summary>

 <br>

| **Tecnologías** | **Versión** | **Finalidad** |\
| ------------- | ------------- | ------------- |
| [NodeJS](https://nodejs.org/en/) | 14.18.1  | Librería JS |
| [VSC](https://code.visualstudio.com/docs) | 1.72.2  | IDE |
| [Postman](https://www.postman.com/downloads/) | 10.11  | Cliente Http |
| [CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) | 10 | Símbolo del Sistema para linea de comandos |
| [Git](https://git-scm.com/downloads) | 2.29.1  | Control de Versiones |

</br>

| **Extensión** |\
| -------------  |
| Prettier - Code formatter |
| Otras |

<br>

</details>

<br>

## Sección 2) Endpoints y Ejemplos.

### 2.0) Endpoints y recursos [🔝](#índice-)

<details>
  <summary>Ver</summary>

<br>

</details>

### 2.1) Ejemplos [🔝](#índice-)

<details>
  <summary>Ver</summary>
<br>

<br>

</details>

<br>

## Sección 3) Prueba de funcionalidad y Referencias.

### 3.0) Prueba de funcionalidad [🔝](#índice-)

<details>
  <summary>Ver</summary>

<br>

<br>

</details>

### 3.1) Referencias [🔝](#índice-)

<details>
  <summary>Ver</summary>

 <br>
 
### Documentación

#### Material UI
* [Instalación](https://mui.com/material-ui/getting-started/installation/)
* [Componentes](https://mui.com/components/)

#### Fundamentos React
* [Construir app SPA](https://www.youtube.com/watch?v=P8MeyDbMEBE&t=109s)
* [Guía de inicio react](https://react.dev/learn)

#### Código y ejemplos
* [Guía creación de formularios](https://www.copycat.dev/blog/material-ui-form/)
* [Templates formularios](https://codesandbox.io/examples/package/mui-form)
* [Setear una img background](https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/)

#### Herramientas
- [Convert cURL para node-axios](https://curlconverter.com/node-axios/)

<br>

</details>