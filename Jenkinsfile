pipeline {
    agent { docker { image 'node:10.15' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}