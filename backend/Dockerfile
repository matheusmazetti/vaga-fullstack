FROM amazoncorretto:21-alpine-jdk

#Cria um novo diretório
WORKDIR /app

#Transfere os arquivos para a nova pasta
COPY . .

#Cria o projeto sem fazer testes
RUN ./gradlew clean build -x test

#Abre a porta 8080
EXPOSE 8080

#Roda o arquivo jar
CMD ["java", "-jar", "./build/libs/leite-0.0.1-SNAPSHOT.jar"]