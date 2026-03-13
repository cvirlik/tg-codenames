import type { WSContext, WSMessageReceive } from "hono/ws";

export type WSMessageData = {
	join: { a: 1 };
	test: {};
};

export type WsMessage<T extends keyof WSMessageData> = {
	type: T;
	data: WSMessageData[T];
};

const isWsMessage = <T extends keyof WSMessageData>(
	type: T,
	message: unknown,
): message is WsMessage<T> => (message as { type?: unknown }).type === type;

export function onMessage(
	event: MessageEvent<WSMessageReceive>,
	ws: WSContext,
) {
	event.data;
	if (isWsMessage("join", event.data)) {
		event.data.data;
	}
	ws.send("Hello from server!");
}
