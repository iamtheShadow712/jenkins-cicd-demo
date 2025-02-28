pipeline{
    
    agent { label "worker-1" }
    
    stages{
        
        stage("Code"){
            steps{
                git url:"https://github.com/iamtheShadow712/jenkins-cicd-demo.git", branch: "main"
            }
        }
        
        stage("Build"){
            steps{
                sh "docker build -t node-api:latest ."
            }
        }
        
        stage("Test"){
            when{
                expression { return false }
            }
            steps{
                sh "npm run test"
            }
        }
        
        stage("Push"){
            steps{
                echo "Pushing to dockerHub"
            }
        }
        
        stage("Deploy"){
            steps{
                sh "docker compose up -d"
            }
        }
        
    }
    
}