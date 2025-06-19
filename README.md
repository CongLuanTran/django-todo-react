# Simple Todo webapp in Django + React

## Intro

This is a simple Todo app with Django as backend and React as frontend.
It is largely based on [this guide](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)
from DigitalOcean, but I made some changes to the frontend structure.

## Technology

### Backend

The backend is done in Django according to the guide.
For simplicity, the API is created with `djangorestframework`.
CORS is handled by `django-cors-headers` like in the guide.
However, CORS Middleware need to be moved further to the top
to come into effect. I also add WhiteNoise to serve static files
of Django in production (for backend endpoints like `/api/` and `/admin`).

When built as production,`SECRET_KEY` and `ALLOWED_HOSTS` must be set in `.env` file.
Since I use `environs` Python package to manage environment variables, this
`.env` can be placed in the `backend` directory or this project root, it will
be recursively searched upward. For `SECRET_KEY` it is advised to use
Django functionality to generate a random key, e.g.

```
# this should be run in a environment with Django installed
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

This function can generate a random key for you, but a small note is that
this key can containspecial characters like `$`, which will make many shell
to misinterpret it as a variable. The way to escape this for Bash and
Bash-like shells is to wrap the key in single quotes, e.g.

```bash
SECRET_KEY='dw)@bpkd!!$o)%2=tw)-3z5kgnxj_e(mmg%i@mcaz1)h-)o^20'
```

`ALLOWED_HOSTS` should be comma-separated list of hostnames, e.g.

```bash
ALLOWED_HOSTS=localhost,127.0.0.1
```

You must add the exact HTTP hostnames that your will use. If you
list only `localhost` but not `127.0.0.1` (although they are logically the same),
accessing the app via `<http://127.0.0.1> will return a 400 Bad Request.

### Frontend

The styling of the frontend simply follow the guide, which use Bootstrap.
However, I have made significate changes to the structure:

- Instead of `create-react-app` as suggested in the guide, I used `vite`.
- Components are modularize instead of putting everything in the `App` file.
- State is managed with Redux and Redux Toolkit to avoid passing props around.
