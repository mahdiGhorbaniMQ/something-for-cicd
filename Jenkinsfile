pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
//                sh 'docker run ng-test'
		sh 'echo hello'
            }
        }
        stage('Build Docker Image') {
            steps {
//		sh 'docker rmi something-for-cicd:latest'
//                sh 'docker build -t something-for-cidcd:latest .'
		sh 'echo hello2'
            }
        }
        stage('Deploy') {
            steps {
                script {
		    sh 'kubectl --kubeconfig /home/kubernetes get pods -A'
//		    sh 'docker stop something-for-cicd'
//		    sh 'docker rm something-for-cicd'
//                  sh 'docker run -d -it --network cicd -p 9090:80 --name something-for-cicd something-for-cicd:latest'
                }
            }
        }
    }
}
