# Political Parties Frontend

## English

A real-time political parties vote tracking application built with React, TypeScript, and WebSocket technology. This frontend communicates with a Bun WebSocket server to manage political parties, track votes, and display data in real-time using interactive charts.

### Features

- Real-time vote tracking via WebSocket connections
- Add, edit, and remove political parties
- Increment/decrement vote counts
- Interactive bar chart visualization using Chart.js
- Dark theme UI with modern styling
- Automatic reconnection on connection loss
- TypeScript for type safety

### Tech Stack

- **Frontend:** React 19.2.0, TypeScript 5.9.3
- **Build Tool:** Vite 7.3.1
- **Charts:** Chart.js 4.5.1, react-chartjs-2 5.3.1
- **Styling:** Custom CSS with dark theme
- **Compiler:** React Compiler (experimental)

### Installation

```bash
npm install
# or
bun install
```

### Running the Application

```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Requirements

- Node.js or Bun runtime
- A WebSocket server running on `ws://localhost:3200` (configurable in `src/PoliticalApp.tsx`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   └── PartyItem.tsx          # Individual party management component
├── context/
│   └── WebSocketContext.tsx   # WebSocket connection context
├── hooks/
│   └── useParties.tsx         # Custom hook for party management
├── pages/
│   └── HomePage.tsx           # Main application page
├── types/
│   └── index.ts               # TypeScript type definitions
├── PoliticalApp.tsx           # Main app component
└── main.tsx                   # Application entry point
```

## Español

Una aplicación de seguimiento en tiempo real de partidos políticos y votaciones, construida con React, TypeScript y tecnología WebSocket. Este frontend se comunica con un servidor WebSocket en Bun para gestionar partidos políticos, rastrear votos y mostrar datos en tiempo real utilizando gráficos interactivos.

### Características

- Seguimiento en tiempo real de votos mediante conexiones WebSocket
- Agregar, editar y eliminar partidos políticos
- Incrementar/disminuir conteo de votos
- Visualización interactiva de gráficos de barras con Chart.js
- Interfaz de usuario con tema oscuro y diseño moderno
- Reconexión automática en caso de pérdida de conexión
- TypeScript para seguridad de tipos

### Pila Tecnológica

- **Frontend:** React 19.2.0, TypeScript 5.9.3
- **Herramienta de construcción:** Vite 7.3.1
- **Gráficos:** Chart.js 4.5.1, react-chartjs-2 5.3.1
- **Estilos:** CSS personalizado con tema oscuro
- **Compilador:** React Compiler (experimental)

### Instalación

```bash
npm install
# o
bun install
```

### Ejecutar la Aplicación

```bash
npm run dev
# o
bun run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el siguiente puerto disponible).

### Requisitos

- Entorno de ejecución Node.js o Bun
- Un servidor WebSocket ejecutándose en `ws://localhost:3200` (configurable en `src/PoliticalApp.tsx`)

### Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar construcción de producción
- `npm run lint` - Ejecutar ESLint

### Estructura del Proyecto

```
src/
├── components/
│   └── PartyItem.tsx          # Componente de gestión individual de partido
├── context/
│   └── WebSocketContext.tsx   # Contexto de conexión WebSocket
├── hooks/
│   └── useParties.tsx         # Hook personalizado para gestión de partidos
├── pages/
│   └── HomePage.tsx           # Página principal de la aplicación
├── types/
│   └── index.ts               # Definiciones de tipos TypeScript
├── PoliticalApp.tsx           # Componente principal de la aplicación
└── main.tsx                   # Punto de entrada de la aplicación
```
