pipeline {
    agent any

    stages {
//         stage('Checkout Code') {
//             steps {
//                 git branch: 'master', credentialsId: 'your-git-credentials-id', url: 'https://github.com/your-username/your-angular-repo.git'
//             }
//         }
        stage('Build and Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t something-for-cidcd:latest .'
            }
        }
        stage('Push Image to Docker Registery') {
            steps {
                script {
                    sh 'docker tag something-for-cicd:latest registry:5000/something-for-cicd:latest'
                    sh 'docker push registry:5000/something-for-cicd:latest'
                }
            }
        }
        stage('Deploy on Minikube') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yml'
                }
            }
        }
    }
}
