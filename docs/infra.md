# Infraestructura

Mismo esquema que `unbarber-app`, para que Rodri cargue los secretos una vez por repo con los mismos nombres.

## Ambientes

| Rama | Ambiente GitHub | Proyecto Firebase (alias) | Sitio de Hosting de la landing |
|---|---|---|---|
| `develop` | `desa` | `unbarber-desa` (`desa`) | `unbarber-desa-landing` |
| `main` | `prd` (con aprobación) | `unbarber-prd` (`prd`) | `unbarber-prd-landing` |

> Los IDs exactos de los proyectos están por confirmar. Si cambian, se actualizan solo en `.firebaserc`.

La app usa el sitio por defecto de cada proyecto (target `app`). La landing usa un sitio adicional (target `landing`) y este repo despliega solo `--only hosting:landing`. Firestore, sus reglas y Remote Config los administra el repo de la app.

## Flujo

| Evento | Workflow | Qué hace |
|---|---|---|
| PR a cualquier rama | `ci.yml` | lint, typecheck, build |
| PR a `develop` | `preview.yml` | Publica un canal de vista previa en desa (7 días) y comenta el link en el PR |
| push a `develop` | `deploy.yml` | Despliega a `unbarber-desa-landing` |
| push a `main` | `deploy.yml` | Espera aprobación del ambiente `prd` y despliega a `unbarber-prd-landing` |

## Config web de Firebase

No se versiona. Al construir, `scripts/firebase-env.mjs <desa|prd>` la lee con `firebase apps:sdkconfig WEB --project <alias> --json` y escribe `.env.production.local` (ignorado por git). En los logs de Actions los valores se enmascaran.

En local:

```bash
npx firebase-tools login
node scripts/firebase-env.mjs desa
npm run build
npm run deploy:desa
```

## Lo que tiene que cargar Rodri (una vez)

1. **Firebase**, en cada proyecto: crear el sitio de Hosting `unbarber-desa-landing` / `unbarber-prd-landing` (Hosting → Agregar otro sitio) y conectar el dominio en prd (`unbarber.com.ar`).
2. **GitHub → Settings → Environments**: crear `desa` y `prd` (en `prd`, "Required reviewers" con su usuario).
3. **Secreto por ambiente**: `FIREBASE_SERVICE_ACCOUNT` = JSON de una cuenta de servicio del proyecto con rol "Firebase Hosting Admin" y "Firebase Viewer" (el mismo JSON que en `unbarber-app` sirve).
4. **Variables por ambiente** (opcionales, todas públicas):

| Variable | desa (ejemplo) | prd (ejemplo) |
|---|---|---|
| `SITE_URL` | `https://unbarber-desa-landing.web.app` | `https://unbarber.com.ar` |
| `APP_URL` | `https://unbarber-desa.web.app` | `https://app.unbarber.com.ar` |
| `REGISTRO_MODE` | `app` | `app` |
| `CLIENTES_MODE` | `espera` | `espera` |
| `ZONA_PILOTO`, `ZONAS_ABIERTAS` | — | — |
| `TITULAR`, `CUIT` | — | — |
| `RECAPTCHA_KEY`, `META_PIXEL_ID` | — | — |
| `FIREBASE_WEB_APP_ID` | solo si el proyecto tiene más de una app web | ídem |
