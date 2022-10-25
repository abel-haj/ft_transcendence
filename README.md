# ft_transcendence

(login is done only via 42 school account)

# Requirements :
 - Docker
 - Docker-Compose
 - 42 School Account

# Steps to run :
  Erase any previous image of this project!

1. Clone the repository
2. Setup environment variables:
    - Rename `./.env.local.default` and `./front-end/.env.local.default` both to `.env.local`.
    - change `POSTGRES_USER` and `POSTGRES_PASSWORD` and `JWTSECRET`(random secret) to values of your choice.
    - change `APIID` and `APISECRET` and `APIREDIRECT` to values from an api you have to create in you intra account and `HOSTIP` accordingly based on the host in `APIREDIRECT`
    - NOTE: both .ENV.LOCAL files should have the same configuration ⚠️
4. Run `docker-compose up --build` at the root of the project
