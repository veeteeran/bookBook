#!/usr/bin/python3
""" initializes files in models directory """
import pymysql 
pymysql.install_as_MySQLdb()
from models.engine.db_storage import DBStorage


# create instance of storage for current session
storage = DBStorage()
# reload existing data into new instance of storage
storage.reload()
