FROM openjdk:17
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests
CMD ["java", "-jar", "target/todo-1.0.jar"]