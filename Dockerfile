# Stage 1: Build environment (node:alpine)
FROM ng-builder AS builder

WORKDIR /app

COPY . .
RUN npm run build --prod

# Stage 2: Production image (nginx:alpine)
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/something-for-cicd/browser .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
