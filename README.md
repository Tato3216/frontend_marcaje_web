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

5. **Actualizar tu repositorio local**:

    ```bash
    git fetch origin
    ```

## Contribuciones

Si deseas contribuir al proyecto, por favor, abre un *issue* o envía un *pull request* con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Nota:** Asegúrate de ajustar las rutas y configuraciones según tus necesidades y entorno.
