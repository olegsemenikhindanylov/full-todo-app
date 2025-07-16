pipeline {
  agent any

  environment {
    DOCKER_HUB_REPO = "olegsemenikhindanylov/full-todo-app"
    GIT_CREDENTIALS_ID = 'gitlab-token'
  }

  stages {
    stage('Clone') {
      steps {
        git credentialsId: "${GIT_CREDENTIALS_ID}", url: 'https://gitlab.com/olegsemenikhindanylov/full-todo-app.git'
      }
    }

    stage('Build Backend Image') {
      steps {
        sh 'docker build -t $DOCKER_HUB_REPO:backend-latest ./backend'
      }
    }

    stage('Build Frontend Image') {
      steps {
        sh 'docker build -t $DOCKER_HUB_REPO:frontend-latest ./frontend'
      }
    }

    stage('Push Images') {
      steps {
        withDockerRegistry(credentialsId: 'dockerhub-credentials') {
          sh 'docker push $DOCKER_HUB_REPO:backend-latest'
          sh 'docker push $DOCKER_HUB_REPO:frontend-latest'
        }
      }
    }
  }
}