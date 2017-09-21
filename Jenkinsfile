pipeline {
    agent any

    stages {
        stage('Setup environment') {
            steps {
                sh('npm install')
            }
        }
        stage('Build') {
            steps {
                sh('npm run build')
                archiveArtifacts artifacts: 'dist/**'
            }
        }
    }
}
