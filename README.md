# Proyecto de Marcaje Web

Este repositorio contiene un proyecto de gestión de empleados con funcionalidades para marcar entradas y salidas, autenticación y CRUD de empleados. El proyecto está dividido en dos partes: el frontend desarrollado con Angular y el backend con Spring Boot.

## Estructura del Proyecto

- **Frontend (Angular)**: Ubicado en la carpeta `frontend_marcaje_web`.
- **Backend (Spring Boot)**: Ubicado en la carpeta `backend_marcaje_web`.

## Instalación

### Frontend (Angular)

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/Tato3216/frontend_marcaje_web.git
    cd frontend_marcaje_web
    ```

2. **Instalar dependencias**:

    ```bash
    npm install
    ```

3. **Construir la aplicación**:

    ```bash
    ng build --configuration production
    ```

   Los archivos construidos se encontrarán en `dist/frontend_marcaje_web`.

### Backend (Spring Boot)

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/Tato3216/backend_marcaje_web.git
    cd backend_marcaje_web
    ```

2. **Construir y ejecutar el backend**:

    ```bash
    ./mvnw spring-boot:run
    ```

   El backend escuchará en el puerto por defecto `8080`.

## Configuración del Servidor

### Configuración de Nginx

1. **Instalar Nginx** (si no está instalado):

    ```bash
    sudo apt update
    sudo apt install nginx
    ```

2. **Configurar Nginx para servir el frontend**:

    Crear un archivo de configuración en `/etc/nginx/sites-available/frontend_marcaje_web`:

    ```nginx
    server {
        listen 80;
        server_name tu_dominio_o_IP;

        root /var/www/frontend_marcaje_web/dist/frontend_marcaje_web;
        index index.html index.htm;

        location / {
            try_files $uri $uri/ /index.html;
        }

        error_page 404 /index.html;

        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_vary on;
    }
    ```

    - Cambia `tu_dominio_o_IP` por tu dominio o IP.
    - Cambia la ruta `root` por el directorio donde están los archivos construidos.

3. **Habilitar la configuración**:

    ```bash
    sudo ln -s /etc/nginx/sites-available/frontend_marcaje_web /etc/nginx/sites-enabled/
    ```

4. **Verificar la configuración**:

    ```bash
    sudo nginx -t
    ```

5. **Reiniciar Nginx**:

    ```bash
    sudo systemctl restart nginx
    ```

6. **Ajustar permisos** para el directorio:

    ```bash
    sudo chown -R www-data:www-data /var/www/frontend_marcaje_web
    sudo chmod -R 755 /var/www/frontend_marcaje_web
    ```

## Uso

1. **Acceder al Frontend**:

   Navega a `http://tu_dominio_o_IP` en tu navegador para ver la aplicación Angular en acción.

2. **Acceder al Backend**:

   Asegúrate de que el backend esté ejecutándose y accesible en `http://localhost:8080` (o el puerto configurado).

## Ramas y Git

### Cambio de rama principal

Si el repositorio utiliza `master` como la rama principal y deseas cambiar a `main`:

1. **Renombrar la rama local**:

    ```bash
    git branch -m master main
    ```

2. **Actualizar la rama remota**:

    ```bash
    git push origin main
    ```

3. **Configurar la rama principal en GitHub**:
   
   Ve a la configuración del repositorio en GitHub, y bajo "Branches", cambia la rama por defecto a `main`.

4. **Eliminar la antigua rama remota `master`**:

    ```bash
    git push origin --delete master
    ```

# Estructura de la Aplicación

La aplicación se divide en dos partes principales: **Frontend** y **Backend**. A continuación se describe cada una de ellas:

## 1. Frontend (Angular)

El frontend está desarrollado con Angular y se encarga de la interfaz de usuario. Su estructura es la siguiente:

- **`src/`**: Contiene el código fuente de la aplicación.
  - **`app/`**: Directorio principal con los módulos y componentes.
    - **`auth/`**: Módulo y componentes para autenticación (`login.component.ts`, `auth.service.ts`, etc.).
    - **`employee/`**: Módulo y componentes para la gestión de empleados (`employee-list/`, `employee-form/`, etc.).
    - **`time-tracking/`**: Componente para el seguimiento de tiempo.
    - **`core/`**: Servicios y módulos esenciales para la aplicación.
    - **`app-routing.module.ts`**: Configuración de rutas de la aplicación.
    - **`app.component.ts`**: Componente principal de la aplicación.
    - **`app.module.ts`**: Módulo principal de la aplicación.
  - **`assets/`**: Archivos estáticos como imágenes y fuentes.
  - **`styles.css`**: Estilos globales de la aplicación.
  - **`index.html`**: Documento HTML principal cargado al iniciar la aplicación.

## 2. Backend (Spring Boot)

El backend está desarrollado con Spring Boot y proporciona las API necesarias para interactuar con el frontend. Su estructura incluye:

- **`src/main/java/com/ejemplo/backend/`**: Código fuente del backend en Java.
  - **`controller/`**: Controladores REST para manejar las solicitudes.
  - **`model/`**: Clases que representan las entidades de la base de datos.
  - **`repository/`**: Interfaces para acceder a los datos (CRUD).
  - **`service/`**: Lógica de negocio y servicios de la aplicación.
- **`src/main/resources/`**: Archivos de configuración y recursos.
  - **`application.properties`**: Configuración de la aplicación, como conexión a la base de datos.
  - **`static/`**: Recursos estáticos servidos directamente por el backend.

## Integración y Despliegue

- **Frontend**: Se construye usando Angular y los archivos resultantes se despliegan en un servidor web, configurado con Nginx.
- **Backend**: Se ejecuta en un servidor de aplicaciones, como Apache Tomcat, y se comunica con el frontend a través de APIs REST.

Esta estructura asegura que el frontend y el backend estén claramente separados, facilitando el desarrollo y mantenimiento de la aplicación.

