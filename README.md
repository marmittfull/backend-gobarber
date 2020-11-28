# Comandos

```console
yarn add express
yarn add typescript -D
yarn tsc --init
```

Alterar tsconfig.json

rootDir: './src'
outDir: './dist'

```console
yarn add @types/express -D
```

Dera build em dist

```console
yarn tsc
```

Converte código e atualiza automaticamente como nodemon

```console
yarn add ts-node-dev -D
```

TranspileOnly apenas converte, não confere error no código

"ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"

para configurar debug

--inspect