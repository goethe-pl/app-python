import jsonify as jsonify
from flask import Flask, stream_with_context, request, Response, render_template, make_response
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
from ssh import *
import os
import paramiko
import json

app = Flask(__name__)
# https://flask-basicauth.readthedocs.io/en/latest/
# If you would like to protect you entire site with basic access authentication, just set BASIC_AUTH_FORCE configuration variable to True:
host = '0.0.0.0'
port = 80
# Server.port
# print(Server)

users = {}
users[Server.username] = generate_password_hash(Server.password)
print(users)


@app.route('/')
def index():
    return "Hello, {}!"

# pobieranie z git env

@app.route('/query', methods=['GET', 'POST'])
def query():
    return {'environment': request.json['environment'], 'sourcecode': request.json['sourcecode']}


if __name__ == '__main__':
    app.run(host=host, port=port)
