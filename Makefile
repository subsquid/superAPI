process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx sqd db:migrate


migration:
	@npx sqd db:create-migration Data


build:
	@npm run build


codegen:
	@npx sqd codegen


typegen: 
	@make explore
	@npx squid-substrate-typegen ./typegen/typegen.json



explore:
	@npx squid-substrate-metadata-explorer --chain wss://archive.snakenet.hydradx.io --archive https://hydradx.indexer.gc.subsquid.io/v4/graphql --out ./typegen/versions.json


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down typegen
