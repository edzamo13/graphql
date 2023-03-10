# GraphQl

## init project

        npx license mit > LICENSE && npx gitignore node && git init && npm init -y

## Install graphql

        npm i graphql
        npm install graphql@15.8.0 ok!.

## Queries y Resolvers

Una query permite ejecutar una petición al API, dentro de una query debes indicar la consulta que quieres ejecutar y los campos que deseas obtener. GraphQL te va a devolver la información que solicitaste dentro del objeto data.

El resultado de tu petición no se va a ejecutar de manera mágica, para ello debes definir el objeto resolvers, este objeto va a contener una propiedad del mismo nombre que la query que va a resolver o ejecutar.

## Sirviendo el API en la web

Ya viste que nuestra API funciona a través de la línea de comandos, pero necesitamos que está funcione dentro de la web, para ello necesitas de las dependencias de express y un middleware de GraphQL, vamos a instalarlo con el siguiente comando:

                npm install express express-graphql graphql --save
                
Para evitar el proceso de detener nuestro servidor cada que ejecutamos un nuevo cambio vamos a utilizar la dependencia de desarrollo Nodemon:

                npm i nodemon -D

## Custom Types

Para este proyecto vamos a seguir el estándar de estilos Standard, para instalarlo corremos el siguiente comando:

                npm i standard -D
                
GraphQL nos permite configurar nuestros propios tipos de datos, estos deben tener la siguientes sintaxis:

type <Nombre del tipo> {
  propiedad: Tipo de dato
}
Dentro de nuestros tipos de datos podemos configurar un campo de un tipo como obligatorio con el signo “!”, quedando por ejemplo:

type Course {
  title: String!
}

## Argumentos

Vamos a instalar una nueva dependencia para facilitar el trabajo con GraphQL, vamos a correr el siguiente comando:

    npm i graphql-tools
Podemos pasar argumentos con distintos tipos de información dentro de las peticiones que hagamos en GraphQL, su sintaxis quedaría de la siguiente manera:

nombreQuery(campo: tipo): tipo
Dentro del resolver los argumentos de la petición pasarían como segundo parámetro, el primero es root y el segundo es args.

## Add graphql apollo

    https://www.apollographql.com/docs/apollo-server/getting-started/#step-3-define-your-graphql-schema

## Configuración de base de datos

Por el momento nuestra API maneja pura información estática, vamos a cambiar esto pasando la información a una base de datos, en este caso usaremos MongoDB.

Es recomendable almacenar las credenciales de conexión a la base de datos como variables de entorno del sistema y utilizar dotenv para la lectura de dichas credenciales. Para su instalación vamos a correr el comando

    npm i dotenv