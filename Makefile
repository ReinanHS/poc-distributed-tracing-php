up:
	docker compose up
down:
	docker compose down -v
k6-main:
	docker compose run k6 run /scripts/main.js