 FROM node:latest
 WORKDIR /app
 COPY package*.json ./
 RUN npm install
 COPY . .
 RUN npm run build
 #### stage 2
 FROM nginx:latest
 RUN rm /etc/nginx/conf.d/default.conf
 COPY nginx.conf /etc/nginx/conf.d
 EXPOSE 80
 CMD ["nginx", "-g", "daemon off;"]
