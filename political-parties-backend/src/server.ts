import { SERVER_CONFIG } from "./config/server-config";
import indexHtml from "../public/index.html";
import { generateUUID } from "./utils/generate-uuid";
import type { WebSocketData } from "./types";
import { handleGetParties, handleMessage } from "./handlers/message.handler";
import { partyService } from "./services/party-service";

export const createServer = () => {
  const server = Bun.serve<WebSocketData>({
    port: SERVER_CONFIG.port,
    routes: {
      "/": indexHtml,
    },

    fetch(req, server) {
      //identify clients

      const clientId = generateUUID();

      const upgraded = server.upgrade(req, {
        data: { clientId },
      });

      if (upgraded) {
        return undefined;
      }

      return new Response("Upgrade failed", { status: 500 });
    },
    websocket: {
      open(ws) {
        console.log(`Client: ${ws.data.clientId} connecected`);
        ws.subscribe(SERVER_CONFIG.defaultChannelName);

        const response = JSON.stringify(handleGetParties());
        ws.send(response);
        
      },
      message(ws, message: string) {
        const response = handleMessage(message);
        const responseString = JSON.stringify(response);

        if (response.type === "ERROR") {
          ws.send(responseString);
          return;
        }

        if (response.type === "PARTIES_LIST") {
          ws.send(responseString);
          return;
        }

        ws.send(responseString);
        ws.publish(SERVER_CONFIG.defaultChannelName, responseString);
      },
      close(ws, code, message) {
        console.log(`Client disconnected: ${ws.data.clientId}`);
        ws.unsubscribe(SERVER_CONFIG.defaultChannelName);
      },
      drain(ws) {}, // the socket is ready to receive more data
    },
  });

  return server;
};
