FROM node:18 AS build

WORKDIR /app
 
COPY package*.json ./

ENV PUBLIC_URL=/blimp 
 
RUN npm install
 
COPY . .
 
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/
# Remove default config and add ours
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80