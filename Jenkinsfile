pipeline {
    agent { docker { image 'node:10.15' } }
    environment {
        HOME = '.'
        PORT = 3004
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
            }
        }
        stage('deploy') {
            steps {
                echo 'Deploying'
            }
        }
        
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
            slackSend channel: '#ops-room',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}