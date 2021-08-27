#!/usr/bin/python3
""" this module builds BaseModel class """
from sqlalchemy import Column, String
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()


class BaseModel():
    """ this module defines BaseModel to be inherited by all classes """
    # creates required ISBN column in MySQL table
    ISBN = Column(String(13),
                  nullable=False,
                  primary_key=True)

    def __init__(self, *args, **kwargs):
        """this method instantiates a new model from kwargs"""
        if kwargs:
            # initializes object based on key-word arguments
            # skips over __class__, should be set when new object created
            if '__class__' in kwargs:
                del kwargs['__class__']
            # updates the object based on what is in kwargs
            self.__dict__.update(kwargs)

    def to_dict(self):
        """
        returns dictionary representation of instance for JSON
        """
        # starts with empty dictionary
        dict_rep = {}
        # save each attribute in object dict to dict_rep
        for key, value in self.__dict__.items():
            # sets key, value directly
            dict_rep[key] = value
        # adds class name attribute to dictionary
        dict_rep["__class__"] = type(self).__name__
        # if the object instance state is in dict, removes it
        # removing allows API calls to be able to jsonify this to_dict return
        if "_sa_instance_state" in dict_rep:
            del dict_rep["_sa_instance_state"]
        # returns objects dictionary representation
        return dict_rep

    def save(self):
        """ this method saves new info to DBStorage """
        from models import storage
        # storage.new method adds new obj and calls save() to commit changes
        storage.new(self)

    def delete(self):
        """ this method deletes current instance from DBStorage """
        from models import storage
        # storage.delete method removes obj and calls save() to commit changes
        storage.delete(self)
