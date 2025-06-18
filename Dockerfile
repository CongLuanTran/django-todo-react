# --------- Build the frontend static files ---------
FROM oven/bun:alpine AS frontend-builder

WORKDIR /app
COPY ./frontend ./frontend
WORKDIR /app/frontend

RUN bun install && bun run build

# --------- Build the Nginx image ---------
FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-builder /app/frontend/dist/ /usr/share/nginx/html/frontend/

EXPOSE 80
