Build Docker Image
---------------------------------------------------------
docker build -t product_service:latest .

Run Docker Image
---------------------------------------------------------
docker run -p 8080:8080 product_service:latest

List the Docker Images
------------------------------
docker image ls

Login to Docker Hub
---------------------------------------------------------
docker login -u your_user_name - The -u option allows us to pass our user name.
Password - The prompt will request our password for DockerHub

Create a Tag to Docker Image before Push to Docker Hub
-----------------------------------------------------------------------
docker tag product_service:latest senuradockacc/product_service:latest

Push to Docker Hub
---------------------------------------------------
docker push senuradockacc/product_service:latest