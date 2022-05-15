FROM node:14.18-alpine AS BUILD_IMAGE
RUN apk add --no-cache nodejs npm
WORKDIR /user_service
COPY package.json package-lock.json ./
RUN npm install
COPY . .

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /user_service /app/
EXPOSE 5001
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]