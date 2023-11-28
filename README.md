# Proyecto Deckard Digital Bank

Este proyecto está hecho en REACT, es una tecnología para poder crear interfaces de usuario.
Para poder observar los resultados del proyecto debemos tener instalado algo llamado NodeJS

### Node JS es un entorno de ejecución multiplataforma para JS.
    **Lo vais a tener que tener instalado a la hora de trabajar con JS durante toda vuesta vida**

Una vez instalado **NodeJS** usemos los siguientes comandos para desplegar el servidor:

1- Abrimos el proyecto y con la consola de comandos situada en el proyecto escribiremos el siguiente comando:  
        ```bash
        npm install
        ```
        Este código es la instalación de dependencias!!
        1- ¿Porqué tengo que instalar dependencias?
            **Las dependencias se usan para poder trabajar en el proyecto, pero son demasiadas para subirse a github.
            Así que github automáticamente las ignora. En su lugar tienes un archivo para saber CUAL instalar**

2- Después de instalarla para poder abrir ejecutar el proyecto correctamente usaremos:
         ```bash
        npm run dev
        ```
3- En la consola de comandos nos aparecerá que se está ejecutando el servidor y nos saldrá una IP a la que podremos acceder.



# Funcionamiento de REACT
    De forma resumida lo que nos proporciona en este proyecto react es la capacidad de crear componentes para poder crear la interfaz de usuario.

    **Esto significa que cada persona puede estar componetizando o creando un componente mientras que otra está en otra carpeta diferente haciendo otras cosas.**

## Lo que debemos tener en cuenta. Trabajaremos siempre dentro de la carpeta **SRC**
    Tengo de esta carpeta tendremos una carpeta llamas **components** donde hay otras carpetas con los componentes creados

## Entiendiendo los componentes
    - Si nos fijamos bien en cualquier componente, podemos observar que es una función que **RETORNA HTML**
    - Antes del return podemos nosotros ejecutar código javascript con naturalidad.

# TailwindCSS
    He usado tailwind-CSS porque me agiliza a la hora de programar.
    **Tailwind** es una librería "PARECIDA A BOOSTRAP" que implica escribir todas las reglas de CSS en la propia etiqueta
    ### Ejemplo:
    **Tenemos un componente llamado caja que tiene unas clases que actuan como código de CSS**
        ```jsx
        function Caja(){
            console.log('Hola, esto es JS')
            return(
                <div className="bg-[#1c1c1c] rounded-xl w-[500px]">
                <h1 className="text-red-300">Esto es un código HTML y tengo clases de tailwind</h1>
                </div>
            )}
            ```
    Si nos fijamos en el códig podemos apreciar 2 cosas importantes:
        1- Que en vez de escribir **class** se usa **className** Esto es porque obviamente **class** es una palabra reservada para los lenguajes de programación
        2- Que he utilizado una serie de estilos de **tailwind** los cuales podemos ver que engrosa el código y al mismo tiempo me evita tener un archivo CSS a la hora de programarlo.

# ¿Qué pasa con los componentes que tengo?
    Todos los componentes creados están llamados a el archivo **main.jsx** el cual tiene la estructura que mostrará al cliente.
    **De esta forma podemos crear la estructura que queramos, los componentes ya están hecho, los pones donde TU quieres*

# ¿Dudas?
    Puedo crear un video explicativo de la tecnología apoyandome sobre el propio proyecto para que podáis ver lo que ocurre con más detalle

