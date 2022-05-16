FROM adoptopenjdk/openjdk11:alpine-jre
COPY target/*.jar deliveryservice.jar
EXPOSE 9091
ENTRYPOINT ["java","-jar","/deliveryservice.jar"]