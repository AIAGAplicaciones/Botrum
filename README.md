# Botrum Web

Landing page estática de **Botrum Proyectos S.L.**, servida con un mini-servidor Express para poder desplegarla en Railway.

## Estructura

```
botrum-web/
├── public/
│   └── index.html      # La página (HTML + CSS + JS autocontenido)
├── server.js           # Servidor Express que sirve /public
├── package.json        # start → node server.js
├── railway.json        # Config de despliegue en Railway
└── .gitignore
```

## Probar en local

```bash
npm install
npm start
# abre http://localhost:3000
```

## Desplegar en Railway

Railway detecta el `package.json`, ejecuta `npm install` y luego `npm start`.
Escucha en `process.env.PORT`, que Railway asigna automáticamente.

### Opción A — Desde GitHub (recomendada)

1. Sube esta carpeta a un repo de GitHub.
2. En [railway.app](https://railway.app): **New Project → Deploy from GitHub repo** y elige el repo.
3. Railway construye y despliega solo. En **Settings → Networking → Generate Domain** obtienes una URL pública.

### Opción B — Con la CLI de Railway

```bash
npm i -g @railway/cli
railway login
railway init
railway up
railway domain     # genera el dominio público
```

## Dominio propio (botrum.net)

En **Settings → Networking → Custom Domain** añade `www.botrum.net` y apunta el
registro DNS (CNAME) que Railway te indique en tu proveedor de dominio.
