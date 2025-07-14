# 🛒 E-Commerce React Application

Una aplicación de e-commerce moderna construida con React, Bootstrap y MockAPI.

## ✨ Características

- 🎨 **Diseño moderno** con Bootstrap y Styled Components
- 🔍 **Búsqueda en tiempo real** de productos
- 🛒 **Carrito de compras** funcional
- 🔐 **Autenticación** con roles (admin/usuario)
- 📱 **Responsive design** para todos los dispositivos
- 🔔 **Notificaciones** con React Toastify
- 🎯 **SEO optimizado** con React Helmet
- 🚀 **CRUD completo** con MockAPI
- 📦 **Gestión de estado** con Context API

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, React Router DOM
- **UI**: Bootstrap 5, React Bootstrap, Styled Components
- **Iconos**: React Icons
- **Notificaciones**: React Toastify
- **SEO**: React Helmet Async
- **API**: MockAPI
- **Build**: Vite
- **Estado**: Context API + Hooks personalizados

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd ecommerce
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
VITE_API_URL=https://684247f7e1347494c31c4ecb.mockapi.io/api/v1
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Construir para producción**
```bash
npm run build
# o
yarn build
```

6. **Previsualizar build de producción**
```bash
npm run preview
# o
yarn preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── estaticos/      # Header, Footer
│   ├── ProductForm.jsx # Formulario de productos
│   ├── ProductList.jsx # Lista de productos
│   ├── SearchBar.jsx   # Barra de búsqueda
│   └── SEO.jsx         # Componente SEO
├── context/            # Context API
│   ├── AppContext.jsx  # Estado global de la app
│   └── AuthContext.jsx # Contexto de autenticación
├── hooks/              # Hooks personalizados
│   ├── useAuthContext.js
│   └── useSearch.js
├── pages/              # Páginas principales
│   ├── Home.jsx
│   ├── GaleriaDeProductos.jsx
│   ├── Admin.jsx
│   └── Login.jsx
├── auth/               # Componentes de autenticación
│   └── RutasProtegidas.jsx
└── App.jsx             # Componente principal
```

## 🔐 Autenticación

### Usuarios de prueba:
- **Admin**: admin@example.com / password123
- **Usuario**: user@example.com / password123

### Características:
- Autenticación con tokens simulados
- Persistencia en localStorage
- Rutas protegidas por roles
- Manejo de sesiones

## 🛒 Funcionalidades

### Para Usuarios:
- Ver catálogo de productos
- Buscar productos en tiempo real
- Agregar productos al carrito
- Ver detalles de productos
- Gestionar carrito de compras

### Para Administradores:
- Todas las funcionalidades de usuario
- Crear nuevos productos
- Editar productos existentes
- Eliminar productos
- Panel de administración

## 🎨 Diseño y UX

- **Tema**: Gradientes modernos (azul/morado)
- **Responsive**: Funciona en móviles, tablets y desktop
- **Animaciones**: Transiciones suaves y efectos hover
- **Notificaciones**: Feedback visual para todas las acciones
- **Loading states**: Spinners y estados de carga

## 🔍 SEO

- Meta tags optimizados
- Open Graph para redes sociales
- Twitter Cards
- URLs canónicas
- Sitemap automático

## 🚀 Deployment

### Opciones de deployment:

1. **Vercel** (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

2. **Netlify**
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

3. **GitHub Pages**
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

### Variables de entorno para producción:
```env
VITE_API_URL=https://684247f7e1347494c31c4ecb.mockapi.io/api/v1
VITE_APP_NAME=E-Commerce
VITE_APP_URL=https://tu-dominio.com
```

## 📊 API Endpoints

### MockAPI Base URL:
`https://684247f7e1347494c31c4ecb.mockapi.io/api/v1`

### Endpoints disponibles:
- `GET /products` - Obtener todos los productos
- `POST /products` - Crear nuevo producto
- `PUT /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto

## 🧪 Testing

```bash
# Ejecutar tests (si están configurados)
npm run test

# Linting
npm run lint
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Autor

- **Tu Nombre** - [GitHub](https://github.com/tuusuario)

## 🙏 Agradecimientos

- React Team por el framework
- Bootstrap Team por el sistema de diseño
- MockAPI por la API gratuita
- Todos los contribuidores de las librerías utilizadas

---

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!
