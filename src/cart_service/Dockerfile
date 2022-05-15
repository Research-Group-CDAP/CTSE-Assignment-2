FROM openjdk:8-jdk-alpine
COPY target/*.jar cartservice.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/cartservice.jar"]