FROM oven/bun:alpine as frontend-builder

WORKDIR /app
COPY ./frontend ./frontend
WORKDIR /app/frontend

RUN bun install && bun run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./backend/staticfiles/ usr/share/nginx/html/backend_static

COPY --from=frontend-builder /app/frontend/dist/ /usr/share/nginx/html/frontend

EXPOSE 80
