# Full Todo App

### Tecnologías:
- Backend: Spring Boot
- Frontend: React
- CI/CD: Jenkins + DockerHub + GitLab
- Contenedores: Docker Compose, Kubernetes

### 🚀 Ejecutar Localmente

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:8080/api/todos

### 🔧 CI/CD (Jenkins)

```bash
docker-compose up jenkins
```

- Jenkins UI: http://localhost:8081  
- DockerHub: olegsemenikhindanylov/full-todo-app

### ☸ Despliegue en Kubernetes

```bash
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

### 👨‍💻 Autor

- Email: oleg.semenikhin.danylov@gmail.com
- DockerHub: https://hub.docker.com/repository/docker/olegsemenikhindanylov/full-todo-app/general
- GitHub: https://github.com/olegsemenikhindanylov/full-todo-app