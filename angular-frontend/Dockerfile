FROM node:16 AS build

WORKDIR /app

# Install the latest npm version
RUN npm install -g npm@11.0.0

# Copy package.json and package-lock.json first to optimize caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

FROM nginx:alpine

# Copy the built Angular app from the build stage to the Nginx container
COPY --from=build /app/dist/angular-frontend /usr/share/nginx/html

EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
