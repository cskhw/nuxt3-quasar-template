# nginx image
FROM nginx:latest

# default.conf 삭제
RUN rm /etc/nginx/conf.d/default.conf

# 작성한 nginx.conf 복제
COPY nginx.conf /etc/nginx/conf.d/