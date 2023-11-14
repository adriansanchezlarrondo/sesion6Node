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
