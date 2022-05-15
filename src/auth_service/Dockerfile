FROM node:16-alpine3.14 AS BUILD_IMAGE
RUN apk add --no-cache nodejs npm
WORKDIR /auth_service
# COPY ["package.json", "./"]
COPY ["package.json", "./"]
RUN npm install
COPY . .

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /auth_service /app/
EXPOSE 5002
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]