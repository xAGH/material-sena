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
11. [Paso 9 - Servicios y consumo de una API con HttpClient](#paso-9--servicios-y-consumo-de-una-api-con-httpclient)
12. [Paso 10 - Interceptores HTTP](#paso-10--interceptores-http)
13. [Cómo funciona todo junto](#cómo-funciona-todo-junto)
14. [Resumen de rutas disponibles](#resumen-de-rutas-disponibles)
15. [Errores frecuentes](#errores-frecuentes)

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
| `HttpClient` | Servicio de Angular para hacer peticiones HTTP (GET, POST, etc.) |
| Interceptor | Función que intercepta toda petición/respuesta HTTP antes de que llegue a destino |
| `Observable` / `async` pipe | Flujo de datos asíncrono de RxJS; el pipe `async` lo suscribe y desuscribe automáticamente en el template |

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
    ├── core/                      ← Servicios, guardias e interceptores globales
    │   ├── core.module.ts
    │   ├── guards/
    │   │   └── auth.guard.ts
    │   ├── interceptors/
    │   │   └── jwt.interceptor.ts
    │   └── services/
    │       └── auth.service.ts
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
            ├── models/
            │   ├── user-api-response.model.ts
            │   └── user-info.model.ts
            ├── services/
            │   └── user.service.ts
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

El `AppModule` es el punto de entrada de la aplicación. Importa el módulo del navegador, el módulo de enrutamiento principal y registra el cliente HTTP con sus interceptores.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [AppComponent],   // Componentes que pertenecen a este módulo
  imports: [
    BrowserModule,                // Necesario para ejecutar en el navegador
    AppRoutingModule,             // Importa las rutas principales
  ],
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])),  // Habilita HttpClient + interceptores
  ],
  bootstrap: [AppComponent],     // Componente que Angular arranca primero
})
export class AppModule {}
```

> **Nota:** `AppComponent` es el único componente declarado aquí porque los demás viven en sus propios feature modules.
>
> `provideHttpClient()` es la forma moderna (standalone providers) de habilitar `HttpClient` en la app, en lugar del antiguo `HttpClientModule`. `withInterceptors([...])` registra la lista de interceptores funcionales que procesarán cada petición. Este código se explica en detalle en el [Paso 9](#paso-9--servicios-y-consumo-de-una-api-con-httpclient) y el [Paso 10](#paso-10--interceptores-http).

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

> En este proyecto el `CoreModule` existe como contenedor organizacional de los guardias. Los servicios singleton (`AuthService`) y los interceptores HTTP (`jwtInterceptor`) también viven bajo `core/`, en `core/services/` y `core/interceptors/` respectivamente, aunque no se declaran en `CoreModule`: `AuthService` usa `providedIn: 'root'` y el interceptor se registra directamente en `AppModule` (ver [Paso 9](#paso-9--servicios-y-consumo-de-una-api-con-httpclient) y [Paso 10](#paso-10--interceptores-http)).

### 6.3 AuthGuard (Guardia funcional)

**Archivo:** `src/app/core/guards/auth.guard.ts`

```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);   // Fuente única de verdad sobre el token
  const router = inject(Router);

  if (authService.isAuthenticated) {
    return true;           // ✅ Permite el acceso a la ruta
  }

  return router.parseUrl('/auth/login');  // ❌ Redirige al login si no está autenticado
};
```

> **Nota:** el guard ya no lee `localStorage` directamente. Delega en `AuthService.isAuthenticated`, que se explica en el [Paso 9](#paso-9--servicios-y-consumo-de-una-api-con-httpclient). Así hay un único lugar que sabe cómo se determina si el usuario está autenticado.

### ¿Cómo funciona el guard?

```
Usuario intenta acceder a /user/list
         ↓
Angular ejecuta authGuard
         ↓
¿AuthService.isAuthenticated?
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

Ya no hace falta tocar la consola del navegador: el `LoginComponent` (ver [Paso 9](#paso-9--servicios-y-consumo-de-una-api-con-httpclient)) tiene botones que llaman a `AuthService.login()` y `AuthService.logout()`.

1. Ve a `/auth/login`.
2. Haz clic en **Autenticarse** → se guarda un token en `localStorage`.
3. Navega a `/user/list` → el guard te deja pasar.
4. Haz clic en **Cerrar sesión** → el token se elimina.
5. Recarga `/user/list` → el guard te redirige a `/auth/login`.

Si necesitas inspeccionar el valor guardado, aún puedes abrir la consola (F12) y ejecutar `localStorage.getItem('token')`.

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
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);

  onClick() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
```

**Archivo:** `src/app/features/auth/pages/login/login.component.html`

```html
<h1>LOGIN</h1>

<button (click)="onClick()">Autenticarse</button>
<button (click)="logout()">Cerrar sesión</button>
```

> El componente inyecta `AuthService` (ver [Paso 9](#paso-9--servicios-y-consumo-de-una-api-con-httpclient)) y delega toda la lógica de sesión en él. El componente solo reacciona a los clics; no sabe nada sobre `localStorage`.

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

`UserListComponent` va un paso más allá: consume `UserService` para mostrar una tabla de usuarios reales. Su versión completa se explica en el [Paso 9](#paso-9--servicios-y-consumo-de-una-api-con-httpclient); aquí un adelanto:

```typescript
// user-list.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../../models/user-info.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  users$: Observable<UserInfo[]> = of([]);

  ngOnInit(): void {
    this.users$ = this.userService.loadUsers();
  }
}
```

```html
<!-- user-list.component.html -->
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Usuario</th>
      <th>Correo</th>
      <th>Teléfono</th>
    </tr>
  </thead>

  <tbody>
    @for (user of users$ | async; track user.id) {
    <tr>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
    </tr>
    } @empty {
    <tr>
      <td colspan="5">No hay usuarios disponibles.</td>
    </tr>
    }
  </tbody>
</table>
```

---

## Paso 9 - Servicios y consumo de una API con HttpClient

Antes de hablar de interceptores hay que entender de dónde salen las peticiones HTTP que van a interceptar. El proyecto tiene dos servicios: `AuthService` (maneja la sesión) y `UserService` (consume una API externa).

### 9.1 Habilitar HttpClient

**Archivo:** `src/app/app.module.ts`

Para poder inyectar `HttpClient` en cualquier servicio, primero hay que habilitarlo en el módulo raíz:

```typescript
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
  // ...
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])),
  ],
})
export class AppModule {}
```

`provideHttpClient()` es el equivalente moderno (basado en *providers* standalone) del antiguo `HttpClientModule`. Sin esta línea, cualquier `inject(HttpClient)` lanza `NullInjectorError: No provider for HttpClient`.

### 9.2 AuthService

**Archivo:** `src/app/core/services/auth.service.ts`

```bash
ng generate service core/services/auth
```

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';

  login() {
    // Token simulado: en una API real vendría en la respuesta del backend
    localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token-123');
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(): boolean {
    return this.token !== null;
  }
}
```

- `providedIn: 'root'` lo convierte en **singleton**: una sola instancia compartida por toda la app. Por eso vive en `core/` — es un servicio transversal, no de una sola feature.
- `token` y `isAuthenticated` son *getters*: siempre leen el valor actual de `localStorage`, así que nunca quedan desincronizados con lo que hay guardado.
- `login()` guarda un token simulado (`'fake-jwt-token-123'`). En una app real, `login()` recibiría credenciales del usuario, las enviaría al backend con `HttpClient.post(...)` y guardaría el JWT que la API devuelva.

`LoginComponent` (ver [Paso 7.4](#paso-7--feature-module-de-autenticación-authmodule)) inyecta este servicio y expone dos botones que llaman a `login()` y `logout()`. `AuthGuard` (ver [Paso 6.3](#paso-6--módulo-central-coremodule-y-el-authguard)) lo usa para decidir si deja pasar al usuario.

### 9.3 Modelos: por qué dos interfaces

**Archivos:** `src/app/features/users/models/`

```typescript
// user-api-response.model.ts
export interface UserApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
}
```

```typescript
// user-info.model.ts
export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
```

`UserApiResponse` describe **exactamente** lo que devuelve `https://jsonplaceholder.typicode.com/users` (incluye campos como `address` o `company` que la UI no necesita). `UserInfo` describe lo que la tabla de usuarios realmente muestra. Separar ambos modelos evita que un cambio en la API externa se filtre directo al componente, y deja claro en el código qué datos usa realmente la vista.

### 9.4 UserService

**Archivo:** `src/app/features/users/services/user.service.ts`

```typescript
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserApiResponse } from '../models/user-api-response.model';
import { UserInfo } from '../models/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  loadUsers(): Observable<UserInfo[]> {
    return this.http
      .get<UserApiResponse[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map((user) => {
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              phone: user.phone,
            };
          }),
        ),
      );
  }
}
```

- `http.get<UserApiResponse[]>(url)` hace la petición GET y tipa la respuesta cruda.
- El operador `map()` de RxJS transforma cada `UserApiResponse` en un `UserInfo`, quedándose solo con los campos que la vista necesita.
- El método retorna un `Observable<UserInfo[]>`, no un arreglo: la petición es asíncrona y el componente decide cuándo suscribirse.

### 9.5 UserListComponent

**Archivo:** `src/app/features/users/pages/user-list/user-list.component.ts`

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../../models/user-info.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  users$: Observable<UserInfo[]> = of([]);

  ngOnInit(): void {
    this.users$ = this.userService.loadUsers();
  }
}
```

- `users$` empieza como `of([])` (un observable que emite un arreglo vacío) para que el template siempre tenga algo que renderizar, incluso antes de que llegue la respuesta HTTP.
- En `ngOnInit()` se reemplaza por el observable real que devuelve `loadUsers()`.
- En el template, el pipe `async` (`users$ | async`) se suscribe automáticamente al observable, actualiza la vista cuando llegan datos, y se desuscribe cuando el componente se destruye — sin que el componente tenga que llamar `.subscribe()` ni `.unsubscribe()` manualmente.
- `@for (... ; track user.id) { } @empty { }` es la nueva sintaxis de control de flujo de Angular (reemplazo de `*ngFor`): itera la lista y muestra el bloque `@empty` mientras esté vacía.

---

## Paso 10 - Interceptores HTTP

### 10.1 ¿Qué es un interceptor?

Un **interceptor** es una función que se ejecuta para **toda** petición HTTP que sale de la app (y su respuesta), sin importar qué servicio la generó. Se usa para tareas transversales como:

- Agregar un header de autenticación (token, API key).
- Registrar (log) todas las peticiones y respuestas.
- Mostrar/ocultar un spinner de carga global.
- Capturar errores HTTP (por ejemplo, redirigir al login si la API responde 401).

```
Componente → Service.http.get() → Interceptor(es) → Backend
                                                          │
Componente ← Service (Observable) ← Interceptor(es) ← Respuesta
```

Como pasa por en medio de cada petición, es el lugar ideal para lógica que de otro modo tendrías que repetir en cada servicio.

### 10.2 Crear el interceptor

```bash
ng generate interceptor core/interceptors/jwt
```

El CLI preguntará el tipo: selecciona **`Functional`** (los interceptores de clase con `HTTP_INTERCEPTORS` son el enfoque legado, anterior a Angular 15).

### 10.3 jwtInterceptor

**Archivo:** `src/app/core/interceptors/jwt.interceptor.ts`

```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;   // Lee el token actual

  if (!token) {
    return next(req);                        // Sin token: la petición sigue igual
  }

  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,       // Con token: se agrega el header
    },
  });

  return next(newReq);                       // Siempre hay que continuar la cadena
};
```

Punto por punto:

- **`inject(AuthService)` dentro de la función**: los interceptores funcionales se ejecutan dentro de un *injection context*, así que pueden usar `inject()` igual que un guard funcional, sin necesidad de un constructor.
- **Inmutabilidad — `req.clone({...})`**: los objetos `HttpRequest` son inmutables. No se puede hacer `req.headers.set(...)` directamente; hay que clonar la petición con los cambios deseados. `clone()` devuelve una copia nueva y deja la original intacta.
- **`next(req)` siempre debe retornarse**: `next` es la función que continúa la cadena hacia el siguiente interceptor (o hacia el backend, si es el último). Si un interceptor no llama ni retorna `next(...)`, la petición se queda colgada para siempre y el `Observable` nunca emite.

### 10.4 Registrar el interceptor

**Archivo:** `src/app/app.module.ts`

```typescript
providers: [
  provideHttpClient(withInterceptors([jwtInterceptor])),
],
```

`withInterceptors()` recibe un **arreglo**, en el orden en que deben ejecutarse. Si más adelante agregas, por ejemplo, un interceptor de logging y uno de manejo de errores, el orden del arreglo determina en qué secuencia procesan la petición saliente (y en orden inverso, la respuesta entrante):

```typescript
withInterceptors([loggingInterceptor, jwtInterceptor, errorInterceptor])
```

### 10.5 Interceptor funcional vs interceptor de clase

| | Interceptor funcional (`HttpInterceptorFn`) | Interceptor de clase (`HttpInterceptor`) |
| --- | --- | --- |
| Disponible desde | Angular 15+ | Todas las versiones |
| Se declara como | Una función | Una clase que implementa `intercept()` |
| Se registra con | `provideHttpClient(withInterceptors([...]))` | `HTTP_INTERCEPTORS` en `providers` (multi-provider) |
| Inyección de dependencias | `inject()` dentro de la función | Constructor de la clase |
| Recomendado para proyectos nuevos | Sí | Solo si el proyecto ya usa `NgModule` + clases por convención |

Este proyecto usa el enfoque funcional porque es el recomendado actualmente y es más corto de escribir y probar.

### 10.6 Cómo verificarlo en el navegador

1. Ejecuta `ng serve` y abre `http://localhost:4200/auth/login`.
2. Abre las DevTools (F12) → pestaña **Network**.
3. Haz clic en **Autenticarse**, luego navega a `/user/list`.
4. Busca la petición a `users` en la lista de Network y revisa la pestaña **Headers** → **Request Headers**: debe aparecer `Authorization: Bearer fake-jwt-token-123`.
5. Haz clic en **Cerrar sesión**, recarga `/user/list` (el guard te redirige a `/auth/login`) — si vuelves a autenticarte sin ese header, notarás que ya no se envía porque `AuthService.token` es `null`.

> **Nota:** `fake-jwt-token-123` es un valor de ejemplo fijo, útil para practicar el flujo sin depender de un backend real. En una aplicación en producción, `AuthService.login()` recibiría usuario y contraseña, los enviaría al backend, y guardaría el **JWT firmado** que la API devuelva en la respuesta.

### 10.7 Para practicar

Como ejercicio, intenta agregar un segundo interceptor `errorInterceptor` que capture respuestas con status `401` (usando el operador `catchError` de RxJS) y redirija automáticamente a `/auth/login` llamando a `AuthService.logout()` y `Router.navigate(['/auth/login'])`. Regístralo junto a `jwtInterceptor` en `withInterceptors([...])`.

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
AuthService.isAuthenticated?
        │
   ─────┴─────
   │         │
  SÍ        NO
   │         │
   ▼         ▼
Carga   Redirige a
UsersModule  /auth/login
```

### Flujo de una petición HTTP con el interceptor

Una vez dentro de `/user/list`, `UserListComponent` pide los datos a través de `UserService`, y esa petición pasa por `jwtInterceptor` antes de salir hacia la API:

```
UserListComponent
        │  ngOnInit() → userService.loadUsers()
        ▼
   UserService
        │  http.get('.../users')
        ▼
  jwtInterceptor
        │  ¿AuthService.token existe?
   ─────┴─────
   │         │
  SÍ        NO
   │         │
   ▼         ▼
req.clone()  req sin cambios
+ Authorization
   │         │
   └────┬────┘
        ▼
  jsonplaceholder.typicode.com/users
        │  respuesta JSON
        ▼
   UserService (map → UserInfo[])
        │
        ▼
UserListComponent (users$ | async → tabla)
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

**Causa:** No hay ningún token guardado en `localStorage` bajo la clave `'token'`, o `AuthService.logout()` no se llamó correctamente.  
**Solución:** Usa la consola del navegador para verificar: `localStorage.getItem('token')`. Debe ser `null` para un usuario no autenticado.

### 6. "NullInjectorError: No provider for HttpClient"

**Causa:** Ningún servicio que use `HttpClient` (como `UserService`) puede inyectarlo porque `provideHttpClient()` no está en los `providers` de `AppModule`.  
**Solución:** Verifica que `app.module.ts` incluya `provideHttpClient(withInterceptors([...]))` (ver [Paso 9.1](#paso-9--servicios-y-consumo-de-una-api-con-httpclient)).

### 7. El interceptor no se ejecuta

**Causa:** El interceptor existe pero nunca se registró, o se registró con `HTTP_INTERCEPTORS` mezclando el enfoque de clase con el funcional.  
**Solución:** Confirma que la función esté dentro del arreglo de `withInterceptors([jwtInterceptor])` en `app.module.ts`.

### 8. La petición HTTP se queda colgada (nunca responde)

**Causa:** Un interceptor no llamó ni retornó `next(req)` en alguna de sus rutas de código (por ejemplo, un `if` sin un `return` correspondiente).  
**Solución:** Revisa que **todas** las ramas del interceptor terminen en `return next(...)`. Ver [Paso 10.3](#paso-10--interceptores-http).

### 9. El header `Authorization` no llega o llega vacío

**Causa:** Se intentó mutar `req.headers` directamente en vez de usar `req.clone({ setHeaders: {...} })`. Como `HttpRequest` es inmutable, esa mutación no tiene efecto.  
**Solución:** Usa siempre `req.clone({...})` para generar una nueva petición con los headers modificados.

---

## Ejecutar el proyecto

```bash
npm start
# o equivalentemente:
ng serve
```

Abre el navegador en `http://localhost:4200`.

Para probar rutas protegidas y el interceptor:

1. Ve a `http://localhost:4200/auth/login`.
2. Haz clic en **Autenticarse** (guarda el token vía `AuthService.login()`).
3. Navega a `http://localhost:4200/user/list` — el guard te deja pasar y la tabla carga los usuarios de `jsonplaceholder`.
4. Abre DevTools → Network para confirmar que la petición a `users` incluye el header `Authorization: Bearer fake-jwt-token-123` (ver [Paso 10.6](#paso-10--interceptores-http)).
5. Haz clic en **Cerrar sesión** y recarga `/user/list` para comprobar que el guard vuelve a redirigir a `/auth/login`.

---

*Guía generada para el proyecto de rutas Angular — SENA 5° Trimestre*
