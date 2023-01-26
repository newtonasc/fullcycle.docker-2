# DESAFIO DOCKER FULLCYCLE

## Run docker-compose

<code>docker-compose up -d</code>

## If container has changed run

<code>docker-compose up -d --buid</code>

## Access the container

### nginx
<code>
docker exec -it nginx bash
</code>

### node
<code>
docker exec -it app bash
</code>

### mysql
<code>
docker exec -it db bash
</code>