# Political Parties - Real-time Vote Tracking Application

## General Description

This project is a complete political parties vote tracking application with real-time communication via WebSocket. The system allows managing political parties, modifying their data, and updating vote counts with instant synchronization across all connected clients.

## Project Architecture

The project is divided into two independent components:

### Backend (`political-parties-backend`)

WebSocket server built with **Bun** that manages the state of political parties and real-time communication.

**Technologies:**
- Bun (JavaScript/TypeScript runtime)
- TypeScript
- Zod (schema validation)
- Native Bun WebSocket

**Features:**
- Political parties management (full CRUD)
- Vote management (increment/decrement)
- Pub/Sub for real-time broadcast to all connected clients
- In-memory persistence (store)
- Incoming message validation
- Test page at `http://localhost:3200`

**Endpoint:** `ws://localhost:3200` (configurable)

**Supported message types:**
- `GET_PARTIES` - Get list of parties
- `ADD_PARTY` - Add new party
- `UPDATE_PARTY` - Update party data
- `DELETE_PARTY` - Delete party
- `INCREMENT_VOTES` - Add 1 vote
- `DECREMENT_VOTES` - Subtract 1 vote

### Frontend (`political-parties-frontend`)

Web application built with **React** and **TypeScript** that provides the user interface to interact with the system.

**Technologies:**
- React 19.2.0 (with experimental React Compiler)
- TypeScript 5.9.3
- Vite (build tool)
- Chart.js 4.5.1 + react-chartjs-2 5.3.1 (bar charts)
- Custom CSS with dark theme

**Features:**
- Political parties visualization with interactive charts
- Party management (add, edit, delete)
- Real-time vote updates
- WebSocket connection with automatic reconnection
- Modern dark theme design

## How to Run the Project

### 1. Backend

```bash
cd political-parties-backend
bun install
bun run dev
```

The server will run on `http://localhost:3200`

### 2. Frontend

```bash
cd political-parties-frontend
npm install
# or
bun install
npm run dev
```

The application will run on `http://localhost:5173`

## Communication Flow

1. The frontend connects to the backend WebSocket
2. Upon connection, the backend sends the current list of parties
3. When a client performs an action (add/edit/delete party or modify votes):
   - The backend processes the request
   - Returns the response to the sender client
   - Broadcasts to all connected clients to synchronize state
4. The frontend updates the UI in real-time upon receiving messages

## Data Structure

**Political Party:**
```typescript
{
  id: string;              // Generated UUID
  name: string;           // Party name
  color: string;          // Background color for charts
  borderColor: string;    // Border color
  votes: number;          // Vote counter
}
```

## Key Files

- **Backend:** `src/server.ts`, `src/handlers/message.handler.ts`, `src/services/party-service.ts`
- **Frontend:** `src/PoliticalApp.tsx`, `src/context/WebSocketContext.tsx`, `src/pages/HomePage.tsx`

---

# Partidos Políticos - Aplicación de Seguimiento de Votos en Tiempo Real

## Descripción General

Este proyecto es una aplicación completa de seguimiento de votos de partidos políticos con comunicación en tiempo real mediante WebSocket. El sistema permite gestionar partidos políticos, modificar sus datos y actualizar conteos de votos con sincronización instantaneous entre todos los clientes conectados.

## Arquitectura del Proyecto

El proyecto está dividido en dos componentes independientes:

### Backend (`political-parties-backend`)

Servidor WebSocket construido con **Bun** que gestiona el estado de los partidos políticos y la comunicación en tiempo real.

**Tecnologías:**
- Bun (runtime JavaScript/TypeScript)
- TypeScript
- Zod (validación de esquemas)
- WebSocket native de Bun

**Funcionalidades:**
- Gestión de partidos políticos (CRUD completo)
- Manejo de votos (incrementar/decrementar)
- Pub/Sub para broadcast en tiempo real a todos los clientes conectados
- Persistencia en memoria (store)
- Validación de mensajes entrantes
- Página de prueba en `http://localhost:3200`

**Endpoint:** `ws://localhost:3200` (configurable)

**Tipos de mensajes soportados:**
- `GET_PARTIES` - Obtener lista de partidos
- `ADD_PARTY` - Agregar nuevo partido
- `UPDATE_PARTY` - Actualizar datos de partido
- `DELETE_PARTY` - Eliminar partido
- `INCREMENT_VOTES` - Sumar 1 voto
- `DECREMENT_VOTES` - Restar 1 voto

### Frontend (`political-parties-frontend`)

Aplicación web construida con **React** y **TypeScript** que proporciona la interfaz de usuario para interactuar con el sistema.

**Tecnologías:**
- React 19.2.0 (con React Compiler experimental)
- TypeScript 5.9.3
- Vite (herramienta de construcción)
- Chart.js 4.5.1 + react-chartjs-2 5.3.1 (gráficos de barras)
- CSS personalizado con tema oscuro

**Funcionalidades:**
- Visualización de partidos políticos con gráficos interactivos
- Gestión de partidos (agregar, editar, eliminar)
- Actualización de votos en tiempo real
- Conexión WebSocket con reconexión automática
- Diseño moderno con tema oscuro

## Cómo Ejecutar el Proyecto

### 1. Backend

```bash
cd political-parties-backend
bun install
bun run dev
```

El servidor se ejecutará en `http://localhost:3200`

### 2. Frontend

```bash
cd political-parties-frontend
npm install
# o
bun install
npm run dev
```

La aplicación se ejecutará en `http://localhost:5173`

## Flujo de Comunicación

1. El frontend se conecta al WebSocket del backend
2. Al conectarse, el backend envía la lista actual de partidos
3. Cuando un cliente Realiza una acción (agregar/editar/eliminar partido o modificar votos):
   - El backend procesa la solicitud
   - Retorna la respuesta al cliente emisor
   - Hace broadcast a todos los clientes conectados para sincronizar estado
4. El frontend actualiza la UI en tiempo real al recibir los mensajes

## Estructura del Datos

**Partido Político:**
```typescript
{
  id: string;              // UUID generado
  name: string;           // Nombre del partido
  color: string;          // Color de fondo para gráficos
  borderColor: string;    // Color del borde
  votes: number;          // Contador de votos
}
```

## Archivos Clave

- **Backend:** `src/server.ts`, `src/handlers/message.handler.ts`, `src/services/party-service.ts`
- **Frontend:** `src/PoliticalApp.tsx`, `src/context/WebSocketContext.tsx`, `src/pages/HomePage.tsx`
