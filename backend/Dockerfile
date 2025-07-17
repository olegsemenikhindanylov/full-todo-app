FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Fase final de ejecución
FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /app/target/todo-backend-1.0.0.jar app.jar
CMD ["java", "-jar", "app.jar"]
