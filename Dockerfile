FROM nginx:alpine
COPY dist/salgado.github.io/browser /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
