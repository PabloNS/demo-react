./mvnw clean package
docker compose build
docker compose down
docker compose up -d