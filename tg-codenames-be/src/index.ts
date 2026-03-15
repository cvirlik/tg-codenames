import { handleClose, handleOpen, type PlayerSocketData } from "./connection";
import { handleMessage } from "./messages/index";

const server = Bun.serve<PlayerSocketData>({
  port: 3000,
  fetch(req, server) {
    const url = new URL(req.url);

    if (url.pathname !== "/ws") {
      return new Response("Not Found", { status: 404 });
    }

    const userId = Number(url.searchParams.get("userId"));
    if (Number.isNaN(userId)) {
      return new Response("Not Found", { status: 404 });
    }
    const chatId = Number(url.searchParams.get("chatId"));
    if (Number.isNaN(chatId)) {
      return new Response("Not Found", { status: 404 });
    }
    const name = url.searchParams.get("name");
    if (!name) {
      return new Response("Not Found", { status: 404 });
    }

    if (server.upgrade(req, { data: { userId, chatId, name } })) {
      return;
    }

    return new Response("WebSocket upgrade failed", { status: 500 });
  },
  websocket: {
    open(connection) {
      handleOpen(connection);
    },
    message(connection, message) {
      handleMessage(message, connection);
    },
    close(connection) {
      handleClose(connection);
    },
  },
});

console.log(`Listening on ws://localhost:${server.port}/ws`);
