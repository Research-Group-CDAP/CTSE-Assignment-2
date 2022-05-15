FROM openjdk:8-jdk-alpine
COPY target/*.jar productservice.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/productservice.jar"]