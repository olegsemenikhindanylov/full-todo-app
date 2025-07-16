pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = "yourdockerhubuser/todo-backend"
        DOCKER_IMAGE_FRONTEND = "yourdockerhubuser/todo-frontend"
    }

    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh './mvnw clean package -DskipTests || mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
                        sh 'docker build -t $DOCKER_IMAGE_BACKEND backend'
                        sh 'docker build -t $DOCKER_IMAGE_FRONTEND frontend'
                        sh 'docker push $DOCKER_IMAGE_BACKEND'
                        sh 'docker push $DOCKER_IMAGE_FRONTEND'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}