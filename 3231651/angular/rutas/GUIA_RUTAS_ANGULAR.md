## Tabla de contenido

1. [¿Qué es el enrutamiento en Angular?](#1-qué-es-el-enrutamiento-en-angular)
2. [Estructura del proyecto](#2-estructura-del-proyecto)
3. [Paso 1 - Crear el proyecto](#paso-1--crear-el-proyecto)
4. [Paso 2 - Módulo raíz: AppModule](#paso-2--módulo-raíz-appmodule)
5. [Paso 3 - Módulo de enrutamiento raíz: AppRoutingModule](#paso-3--módulo-de-enrutamiento-raíz-approutingmodule)
6. [Paso 4 - Componente raíz: AppComponent](#paso-4--componente-raíz-appcomponent)
7. [Paso 5 - Módulo compartido: SharedModule y HomeComponent](#paso-5--módulo-compartido-sharedmodule-y-homecomponent)
8. [Paso 6 - Módulo central: CoreModule y el AuthGuard](#paso-6--módulo-central-coremodule-y-el-authguard)
9. [Paso 7 - Feature module de autenticación: AuthModule](#paso-7--feature-module-de-autenticación-authmodule)
10. [Paso 8 - Feature module de usuarios: UsersModule](#paso-8--feature-module-de-usuarios-usersmodule)
11. [Cómo funciona todo junto](#cómo-funciona-todo-junto)
12. [Resumen de rutas disponibles](#resumen-de-rutas-disponibles)
13. [Errores frecuentes](#errores-frecuentes)

---

## 1. ¿Qué es el enrutamiento en Angular?

El **enrutamiento** permite que una aplicación Angular muestre diferentes componentes según la URL del navegador, sin recargar la página. Es la base de las **SPA (Single Page Applications)**.

### Conceptos clave

| Concepto | Descripción |
| --- | --- |
| `Routes` | Arreglo que mapea URLs a componentes |
| `RouterModule` | Módulo de Angular que activa el enrutador |
| `forRoot()` | Configura el enrutador en el módulo raíz (una sola vez) |
| `forChild()` | Configura rutas adicionales en módulos hijos |
| `<router-outlet>` | Etiqueta HTML donde Angular renderiza el componente activo |
| Lazy Loading | Cargar un módulo solo cuando se necesita (mejora rendimiento) |
| Guard | Función que decide si se puede acceder a una ruta |

---

## 2. Estructura del proyecto

Antes de escribir código, es importante entender cómo se organiza el proyecto. Seguimos una arquitectura **modular por features**:

```
src/
└── app/
    ├── app.module.ts              ← Módulo raíz
    ├── app-routing.module.ts      ← Rutas principales
    ├── app.component.ts/html      ← Componente raíz
    │
    ├── core/                      ← Servicios y guardias globales
    │   ├── core.module.ts
    │   └── guards/
    │       └── auth.guard.ts
    │
    ├── shared/                    ← Componentes reutilizables
    │   ├── shared.module.ts
    │   └── pages/
    │       └── home/
    │           └── home.component.*
    │
    └── features/                  ← Módulos por funcionalidad
        ├── auth/
        │   ├── auth.module.ts
        │   ├── auth-routing.module.ts
        │   └── pages/
        │       ├── login/
        │       │   └── login.component.*
        │       └── register/
        │           └── register.component.*
        │
        └── users/
            ├── users.module.ts
            ├── users-routing.module.ts
            └── pages/
                ├── dashboard/
                │   └── dashboard.component.*
                └── user-list/
                    └── user-list.component.*
```

### ¿Por qué esta estructura?

- **`core/`**: cosas que existen una sola vez (guardias, servicios de autenticación, interceptores HTTP).
- **`shared/`**: componentes, pipes o directivas usadas en múltiples módulos.
- **`features/`**: cada funcionalidad de la app vive en su propio módulo independiente.

---

## Paso 1 - Crear el proyecto

Abre la terminal y ejecuta:

```bash
npx @angular/cli@19 new rutas --standalone=false --routing
```

El CLI hará dos preguntas:

```
? Which stylesheet format would you like to use? SCSS
? Do you want to enable Server-Side Rendering (SSR)? No
```

Luego entra al proyecto:

```bash
cd rutas
```

---

## Paso 2 - Módulo raíz: AppModule

**Archivo:** `src/app/app.module.ts`

El `AppModule` es el punto de entrada de la aplicación. Importa el módulo del navegador y el módulo de enrutamiento principal.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],   // Componentes que pertenecen a este módulo
  imports: [
    BrowserModule,                // Necesario para ejecutar en el navegador
    AppRoutingModule,             // Importa las rutas principales
  ],
  providers: [],
  bootstrap: [AppComponent],     // Componente que Angular arranca primero
})
export class AppModule {}
```

> **Nota:** `AppComponent` es el único componente declarado aquí porque los demás viven en sus propios feature modules.

---

## Paso 3 - Módulo de enrutamiento raíz: AppRoutingModule

**Archivo:** `src/app/app-routing.module.ts`

Este módulo define las **rutas de primer nivel** de toda la aplicación.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  {
    path: '',                        // Ruta raíz: http://localhost:4200/
    component: HomeComponent,
  },
  {
    path: 'auth',                    // Ruta: http://localhost:4200/auth
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    // ↑ LAZY LOADING: el módulo AuthModule se carga solo cuando se visita /auth
  },
  {
    path: 'user',                    // Ruta: http://localhost:4200/user
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
    canActivate: [authGuard],        // ← GUARDIA: solo entra si el usuario está autenticado
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // forRoot() solo en el módulo raíz
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### ¿Qué es Lazy Loading?

Con **lazy loading** el código de `AuthModule` y `UsersModule` **no se descarga al iniciar la app**. Solo se descarga cuando el usuario navega a `/auth` o `/user`. Esto hace que la aplicación cargue más rápido.

```
Sin lazy loading:  descarga TODO → muestra la app
Con lazy loading:  descarga lo mínimo → muestra la app → descarga el resto según se necesite
```

### ¿Qué es `forRoot()` vs `forChild()`?

| Método | Dónde se usa | Qué hace |
| --- | --- | --- |
| `RouterModule.forRoot(routes)` | Solo en `AppRoutingModule` | Crea el servicio `Router` y registra las rutas principales |
| `RouterModule.forChild(routes)` | En módulos hijos (features) | Agrega rutas adicionales sin volver a crear el `Router` |

---

## Paso 4 - Componente raíz: AppComponent

**Archivo:** `src/app/app.component.html`

El template del `AppComponent` solo necesita una línea:

```html
<router-outlet></router-outlet>
```

### ¿Qué hace `<router-outlet>`?

Es el **espacio reservado** donde Angular inserta el componente que corresponda a la URL actual. Cuando la URL es `/`, Angular renderiza `HomeComponent` dentro de `<router-outlet>`. Cuando es `/auth/login`, renderiza `LoginComponent`.

```
URL: /            → HomeComponent
URL: /auth/login  → LoginComponent
URL: /user/list   → UserListComponent
```

**Archivo:** `src/app/app.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rutas';
}
```

---

## Paso 5 - Módulo compartido: SharedModule y HomeComponent

### 5.1 Crear SharedModule y HomeComponent

```bash
ng generate module shared
ng generate component shared/pages/home
```

### 5.2 SharedModule

**Archivo:** `src/app/shared/shared.module.ts`

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],  // Declara HomeComponent en este módulo
  imports: [CommonModule],
  exports: [],
})
export class SharedModule {}
```

> **Importante:** `HomeComponent` es declarado en `SharedModule`, pero como `AppRoutingModule` lo importa directamente, `AppModule` necesita que `SharedModule` o `AppModule` lo conozca.  
> En este proyecto, `HomeComponent` se importa directamente en `app-routing.module.ts` y Angular lo resuelve porque `SharedModule` está implícitamente ligado al contexto del módulo raíz.

### 5.3 HomeComponent

**Archivo:** `src/app/shared/pages/home/home.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
```

**Archivo:** `src/app/shared/pages/home/home.component.html`

```html
<h1>HOME</h1>
```

---

## Paso 6 - Módulo central: CoreModule y el AuthGuard

### 6.1 Crear CoreModule y el guard

```bash
ng generate module core
ng generate guard core/guards/auth
```

El CLI preguntará qué tipo de guard crear. Selecciona: **`CanActivate`**

### 6.2 CoreModule

**Archivo:** `src/app/core/core.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {}
```

> En este proyecto el `CoreModule` existe como contenedor organizacional de los guardias. En proyectos más grandes también contendría servicios singleton (autenticación, HTTP interceptors, etc.).

### 6.3 AuthGuard (Guardia funcional)

**Archivo:** `src/app/core/guards/auth.guard.ts`

```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuth = localStorage.getItem('token');  // Verifica si hay un token guardado
  const router = inject(Router);

  if (isAuth === 'true') {
    return true;           // ✅ Permite el acceso a la ruta
  }

  return router.parseUrl('/auth/login');  // ❌ Redirige al login si no está autenticado
};
```

### ¿Cómo funciona el guard?

```
Usuario intenta acceder a /user/list
         ↓
Angular ejecuta authGuard
         ↓
¿localStorage tiene 'token' = 'true'?
    ↙ SÍ              ↘ NO
Accede a          Redirige a
/user/list        /auth/login
```

### Tipos de guardias en Angular

| Guard | Función | Cuándo se ejecuta |
| --- | --- | --- |
| `CanActivateFn` | Permite o bloquea el acceso | Antes de cargar el componente |
| `CanDeactivateFn` | Controla si el usuario puede salir | Antes de abandonar un componente |
| `CanMatchFn` | Decide si se carga el módulo lazy | Antes del lazy loading |
| `ResolveFn` | Pre-carga datos antes de activar la ruta | Antes de mostrar el componente |

### ¿Cómo probar el guard manualmente?

Abre la consola del navegador (F12) y escribe:

```javascript
// Para simular login:
localStorage.setItem('token', 'true');

// Para simular logout:
localStorage.removeItem('token');
```

---

## Paso 7 - Feature module de autenticación: AuthModule

### 7.1 Crear los archivos

```bash
ng generate module features/auth --routing
ng generate component features/auth/pages/login
ng generate component features/auth/pages/register
```

### 7.2 AuthRoutingModule

**Archivo:** `src/app/features/auth/auth-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'login',      // Ruta: /auth/login
    component: LoginComponent,
  },
  {
    path: 'register',   // Ruta: /auth/register
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // forChild() en módulos hijos
  exports: [RouterModule],
})
export class AuthRoutingModule {}
```

> **Nota:** Las rutas `login` y `register` son **relativas** al prefijo `auth` definido en `app-routing.module.ts`. Por eso la URL completa es `/auth/login` y no solo `/login`.

### 7.3 AuthModule

**Archivo:** `src/app/features/auth/auth.module.ts`

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,    // Componente de inicio de sesión
    RegisterComponent, // Componente de registro
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, // Rutas del módulo de auth
  ],
})
export class AuthModule {}
```

### 7.4 LoginComponent

**Archivo:** `src/app/features/auth/pages/login/login.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {}
```

**Archivo:** `src/app/features/auth/pages/login/login.component.html`

```html
<h1>LOGIN</h1>
```

### 7.5 RegisterComponent

**Archivo:** `src/app/features/auth/pages/register/register.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {}
```

**Archivo:** `src/app/features/auth/pages/register/register.component.html`

```html
<h1>REGISTER</h1>
```

---

## Paso 8 - Feature module de usuarios: UsersModule

### 8.1 Crear los archivos

```bash
ng generate module features/users --routing
ng generate component features/users/pages/dashboard
ng generate component features/users/pages/user-list
```

### 8.2 UsersRoutingModule

**Archivo:** `src/app/features/users/users-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',       // Ruta: /user/list
    component: UserListComponent,
  },
  {
    path: 'dashboard',  // Ruta: /user/dashboard
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
```

### 8.3 UsersModule

**Archivo:** `src/app/features/users/users.module.ts`

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserListComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
```

### 8.4 DashboardComponent y UserListComponent

**Archivos:**

```typescript
// dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
```

```html
<!-- dashboard.component.html -->
<h1>DASHBOARD</h1>
```

```typescript
// user-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {}
```

```html
<!-- user-list.component.html -->
<h1>USER LIST</h1>
```

---

## Cómo funciona todo junto

El siguiente diagrama muestra el flujo completo cuando el usuario navega por la aplicación:

```
Navegador: http://localhost:4200/
                    │
                    ▼
              index.html
           <app-root></app-root>
                    │
                    ▼
            AppComponent
        <router-outlet></router-outlet>
                    │
        ┌───────────┼───────────┐
        │           │           │
      path:''   path:'auth'  path:'user'
        │       (lazy load)  (lazy load)
        │           │        + authGuard
        ▼           │           │
  HomeComponent     │           │
                    │           │
             ┌──────┴──────┐    └──────────────┐
             │             │                   │
         path:login   path:register       path:list   path:dashboard
             │             │                   │           │
             ▼             ▼                   ▼           ▼
      LoginComponent RegisterComponent UserListComponent DashboardComponent
```

### Flujo del AuthGuard

```
Usuario navega a /user/list
        │
        ▼
Angular ejecuta authGuard
        │
        ▼
localStorage.getItem('token') === 'true'?
        │
   ─────┴─────
   │         │
  SÍ        NO
   │         │
   ▼         ▼
Carga   Redirige a
UsersModule  /auth/login
```

---

## Resumen de rutas disponibles

| URL | Componente | Protegida |
| --- | --- | --- |
| `/` | `HomeComponent` | No |
| `/auth/login` | `LoginComponent` | No |
| `/auth/register` | `RegisterComponent` | No |
| `/user/list` | `UserListComponent` | Sí (authGuard) |
| `/user/dashboard` | `DashboardComponent` | Sí (authGuard) |

---

## Errores frecuentes

### 1. "Cannot match any routes"

**Causa:** La ruta no existe en ningún módulo de enrutamiento.  
**Solución:** Verifica que el `path` en las `Routes` coincida exactamente con la URL.

### 2. El componente no se muestra

**Causa:** Olvidaste agregar `<router-outlet>` en el template del componente padre.  
**Solución:** Asegúrate de que `app.component.html` tenga `<router-outlet></router-outlet>`.

### 3. "NullInjectorError: No provider for Router"

**Causa:** `RouterModule.forRoot()` no está importado en `AppModule`.  
**Solución:** Verifica que `AppRoutingModule` (que contiene `forRoot`) esté en los imports de `AppModule`.

### 4. El lazy loading no funciona

**Causa:** La ruta de importación en `loadChildren` es incorrecta.  
**Solución:** Verifica que la ruta relativa al archivo `.module.ts` sea correcta y que el nombre de la clase exportada coincida.

```typescript
// ✅ Correcto
loadChildren: () =>
  import('./features/auth/auth.module').then((m) => m.AuthModule),

// ❌ Incorrecto (ruta o nombre de clase mal escritos)
loadChildren: () =>
  import('./features/Auth/auth.module').then((m) => m.authModule),
```

### 5. El guard no redirige

**Causa:** El valor en `localStorage` no es exactamente la cadena `'true'`.  
**Solución:** Usa la consola del navegador para verificar: `localStorage.getItem('token')`.

---

## Ejecutar el proyecto

```bash
npm start
# o equivalentemente:
ng serve
```

Abre el navegador en `http://localhost:4200`.

Para probar rutas protegidas, abre la consola del navegador (F12) y ejecuta:

```javascript
// Simular que el usuario inició sesión
localStorage.setItem('token', 'true');

// Ahora navega a http://localhost:4200/user/list
```

---

*Guía generada para el proyecto de rutas Angular — SENA 5° Trimestre*
