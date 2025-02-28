pipeline{
    
    // agent { label "worker-1" }
    agent any
    
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
        
        stage("Push to DockerHub"){
            steps{
                withCredentials(
                    [usernamePassword(
                        credentialsId: "DockerHubCredential", 
                        passwordVariable: "dokcerHubPass", 
                        usernameVariable: "dockerHubUsername"
                    )]){
                    sh "docker login -u ${env.dockerHubUsername} -p ${env.dokcerHubPass}"
                    sh "docker image tag node-api:latest venom712/node-api:latest"
                    sh "docker push ${env.dockerHubUsername}/node-api:latest"
                }
            }
        }
        
        stage("Deploy"){
            steps{
                sh "docker compose up -d"
            }
        }
        
    }
    
}
