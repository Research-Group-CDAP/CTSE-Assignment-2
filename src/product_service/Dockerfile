FROM openjdk:8-jdk-alpine
COPY target/*.jar productservice.jar
EXPOSE 8082
ENTRYPOINT ["java","-jar","/productservice.jar"]