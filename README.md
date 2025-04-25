# Simple Todo webapp in Django + React
## Intro
This is a simple Todo app with Django as backend and React as frontend. 
It is largely based on [this guide](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react) from DigitalOcean, but I made some changes to the frontend structure.

## Technology
### Backend
The backend is done in Django according to the guide.
For simplicity, the API is created with `djangorestframework`.
CORS is handled by `django-cors-headers`.

### Frontend
The styling of the frontend simply follow the guide, which use Bootstrap.
However, I have made significate changes to the structure:

- Instead of `create-react-app` as suggested in the guide, I used `vite`.
- Components are modularize instead of putting everything in the `App` file like the guide.
- State is managed with Redux and Redux Toolkit to avoid passing props around.
