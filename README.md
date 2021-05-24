# redis-node

## Tools
- Nodejs + express.js
- Redis (queue)
- Mailtrap (fake mailbox)

## Setup
- install dependencies
```bash
$ yarn install
```
Fill spaces in .env file with redis and mailtrap data

I use docker to run redis, image that i use is redis:alpine

## Test
Send a post request to localhost:4000/users with a name, email and password example.

Few time later you'll see an mail in your mailbox (Trapmail)