FROM eclipse-temurin:17-jdk AS builder
WORKDIR /app

COPY pom.xml .
COPY .mvn/ .mvn/
COPY mvnw .

RUN ./mvnw dependency:resolve dependency:resolve-plugins

COPY src ./src
RUN ./mvnw package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/target/spring-backend-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
