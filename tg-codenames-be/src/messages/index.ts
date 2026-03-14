import type { Connection } from "../connection";
import type { Player } from "../game";
import { broadcastGame } from "./game";
import { onJoin } from "./join";

export type WSMessageData = {
	join: {
		chatId: number;
		player: Player;
	};
};

export type WsMessage<T extends keyof WSMessageData> = {
	type: T;
	data: WSMessageData[T];
};

const isWsMessage = <T extends keyof WSMessageData>(
	type: T,
	message: unknown,
): message is WsMessage<T> => (message as { type?: unknown }).type === type;

function parseMessage(message: string | BufferSource) {
	try {
		if (typeof message === "string") {
			return JSON.parse(message);
		}
	} catch {
		return null;
	}

	return null;
}

export function handleMessage(
	message: string | BufferSource,
	_connection: Connection,
) {
	const payload = parseMessage(message);

	if (isWsMessage("join", payload)) {
		const game = onJoin(payload.data);
		broadcastGame(game);
	}
}
