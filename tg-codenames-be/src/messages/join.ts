import { joinPlayer } from "../game";
import type { WSMessageData } from "./index";

export function onJoin(data: WSMessageData["join"]) {
  if (!data.player.team) {
    data.player.team = "red";
  }
  return joinPlayer(data.player, data.chatId);
}
