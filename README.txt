Rodar Postgres

docker pull postgres

docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=qwerty -d postgres

Resetar banco
yarn prisma migrate reset

Rodar migrations
yarn prisma migrate dev


npm init -y

## Estartar projeto
yarn dev

## yarn ##

yarn add express nodemon sucrase
yarn add bcrypt

yarn add prisma -D
yarn add @prisma/client
yarn prisma init

yarn add jsonwebtoken

