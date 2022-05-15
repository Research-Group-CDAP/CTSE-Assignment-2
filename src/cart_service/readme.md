Create an executable jar file
----------------------------------
mvn clean package

Start up the Spring Boot application
-----------------------------------------
java -jar target/cartservice-1.0.0.jar

Build Docker Image
---------------------------------------------------------
docker build -t cart_service:latest .

List the Docker Images
------------------------------
docker image ls

Run Docker Image
---------------------------------------------------------
docker run -p 8081:8081 cart_service:latest 

Login to Docker Hub
---------------------------------------------------------
docker login -u your_user_name - The -u option allows us to pass our user name.
Password - The prompt will request our password for DockerHub

Create a Tag to Docker Image before Push to Docker Hub
-----------------------------------------------------------------------
docker tag cart_service:latest senuradockacc/cart_service:latest

Push to Docker Hub
---------------------------------------------------
docker push senuradockacc/cart_service:latest

==================================================
Deploy in Azure Kubenetes Cluster
==================================================

Login to Azure
---------------------------------------------------------------------------------------
1) az login
2) az aks get-credentials --resource-group CTSE --name ctse
3) kubectl get nodes

Deploy Microservice Applications
---------------------------------------------------------------------------------------
6) kubectl apply -f cart-service.yaml
7) kubectl get service --watch
8) kubectl get pods