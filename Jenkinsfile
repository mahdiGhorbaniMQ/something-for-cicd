pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
//                sh 'docker build -f test.Dockerfile .'
		sh 'echo hello'
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
        stage('Deploy on Kubernetes') {
            steps {
                script {
		    sh 'kubectl --kubeconfig /home/kubernetes delete -f deployment.yml'
		    sh 'kubectl --kubeconfig /home/kubernetes apply -f deployment.yml'
                }
            }
        }
    }
}
