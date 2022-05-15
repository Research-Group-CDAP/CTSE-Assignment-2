FROM node:16-alpine3.14 AS BUILD_IMAGE
RUN apk --no-cache add --virtual builds-deps build-base python
WORKDIR /auth_service
# COPY ["package.json", "./"]
COPY ["package.json", "./"]
RUN npm install
COPY . .
RUN npm run build 

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /auth_service /app/
EXPOSE 5002
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]