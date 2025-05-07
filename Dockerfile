FROM nginx:alpine

COPY ./frontend/dist/ /usr/share/nginx/html/frontend
COPY ./backend/staticfiles/ usr/share/nginx/html/backend_static
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
