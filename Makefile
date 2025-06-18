dev:
	cd ./frontend && bun install && bun run build
	cd ./backend && uv sync && python manage.py collectstatic
	dokcer compose --profile dev up
prod:
	docker compose --profile prod up --build
