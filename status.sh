#!/bin/bash
ps -ef | grep python
#ps -ef | grep 'python app.py'
#apt install net-tools
#netstat -tulpn | grep :80
netstat -lpn |grep :'80'
which python3
which pip
which pip3
