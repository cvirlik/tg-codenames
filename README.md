# tg-codenames

This repo uses Bun workspaces for the bot, backend, and frontend.

To install dependencies:

```bash
bun install
```

To run the Telegram bot in watch mode:

```bash
cd tg-codenames-bot
bun run dev
```

To run the frontend dev server:

```bash
cd tg-codenames-fe
bun run dev
```

Useful commands:

```bash
cd tg-codenames-bot && bun run start
cd tg-codenames-bot && bun run build
cd tg-codenames-bot && bun run typecheck
cd tg-codenames-fe && bun run build
cd tg-codenames-fe && bun run lint
```
