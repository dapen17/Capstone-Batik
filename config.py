import os

class Config:
    SECRET_KEY = 'your_secret_key'
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://root:@localhost/batik_tegalan'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
