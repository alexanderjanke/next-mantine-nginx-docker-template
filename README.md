- Nextjs
- Mantine
- Nginx
- Docker
- Tabler Icons
- ESLint
- Prettier
- GitHub Workflows

# Project setup

## Dependencies

Install dependencies

```
yarn
```

## Run

Development server:
```bash
yarn dev
```

## SSL for Nginx
Copy `dockervm.crt` and `key.key` into `nginx/` to enable SSL within Nginx.

## Docker Hub
Login to https://hub.docker.com, link the repo and enable automated builds for `./` and `./nginx`

## Adjustments
Add Docker Hub image to `docker-compose.yaml` and adjust the port