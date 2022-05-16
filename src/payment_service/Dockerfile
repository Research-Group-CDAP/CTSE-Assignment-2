FROM adoptopenjdk/openjdk11:alpine-jre
COPY target/*.jar paymentservice.jar
EXPOSE 9092
ENTRYPOINT ["java","-jar","/paymentservice.jar"]