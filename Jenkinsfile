Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker 'node:21.6' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}