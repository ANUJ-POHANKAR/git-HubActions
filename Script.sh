#!/bin/bash
sudo yum update -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo rm -rf /usr/share/nginx/html/index.html
sudo mv index.html /usr/share/nginx/html/
