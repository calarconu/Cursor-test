# Cursor Test

Aplicación creada solamente a modo de prueba por requerimiento de Cursor.cl. La aplicación consiste en leer una API en la cual dentro de la aplicación se listarán personas (obtenidas de la API). De estas personas que están cargadas se puede ver el detalle y ademas filtrar, ya sea por nombre, apellido, región y/o comuna.

## Dependencias

Para que todo funcione correctamente se debe tener configurado el ambiente de desarrollo con las siguientes dependencias (en windows):

- NodeJS
```
Descargar NodeJs para windows de la siguiente ruta: https://nodejs.org/es/download/
```

- Posterior a instalar NodeJS, se debe instalar Ionic y Cordova
```
npm install -g ionic
npm install -g cordova
```

## Instalación

Para la instalación de la aplicación se deben seguir los siguientes pasos:
```
git clone https://github.com/calarconu/Cursor-test
```
```
ionic state restore
```

En el caso que la consola arroje errores con respecto a las imagenes de splash e icon, se debe ejecutar el siguiente comando:

```
ionic resources
```

En el caso que la consola arroje errores con el mensaje parecido a "error: spawn eacces", se debe ejecutar el siguiente comando:

```
ionic hooks add
```

## Tecnologías Usadas

- Ionic Framework V1
- AngularJS v1
- Api Rest
