#!/bin/bash
# after_install.sh: Runs after CodeDeploy copies files to /var/www/html
yum install -y httpd

chown -R ec2-user:ec2-user /var/www/html
chmod -R 755 /var/www/html
