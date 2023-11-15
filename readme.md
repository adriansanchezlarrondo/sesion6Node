# Sesion 6- node y spa

## Node,npm
1. Instalamos nodejs
2. Creamos proyecto con `npm init`
3. Omitimos la carpeta node_modules de git con .gitignore
4. Creamos carpeta src con index.html y main.js
5. Vinculamos archivos y probamos
## Linter
1. Instalamos eslint con `npm install standard -D`y configuramos package.json con "eslintConfig": {
    "extends": [
        "./node_modules/standard/eslintrc.json"
    ]
}
Tutorial de como configurar vscode para que con ctrl+s se formatee el codigo


## Import y export
1. Creamos la carpeta bd y dentro ponemos un archivo 'cerveza.js' que exportará 'cervezas', (un array de datos)
2. Creamos carpeta misfunciones y dentro creamos el archivo consoleCervezas.js(una funcion que usa el array). La exportamos
3. Utilizamos la nomenclatura 'funciones flecha' (arrow functions)
4. En main.js importamos consoleCervezas y la ejecutamos

## Montando una SPA
1. Creamos carpeta componentes con header.js, main.js y footer.js
2. Creamos los componentes header y footer(archivos js con un template para inyectar)
3. Desde main.js cargamos componentes y los inyectamos en las etiquetas header y footer.
4. Creamos la vista home.js (dentro de la carpeta 'vistas') y la inyectamos en la etiqueta main

## Componentes dentro de componentes
1. Creamos un componte llamado cerveza.js que recibe el nombre de la cerveza y cuyo template es una tarjeta con el nombre de la cerveza.
2. Creamos un componente cervezas.js que muestra, a partir de cervezasBD, un grupo de tarjetas 'cerveza'
3. Añadimos el componente cervezas.js a la vistaHome