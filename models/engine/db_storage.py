#!/usr/bin/python3
""" this module builds DBStorage class from MySQLdb and SQLAlchemy"""
from models.base_model import BaseModel, Base
from models.book_ratings import BookRatings
from os import getenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
# establishes dictionary reference between class name and class itself
classes = {"BookRatings": BookRatings}


class DBStorage():
    """
    this module defines DBStorage class for interacting with MySQL tables
    private class attr: __engine, __session
    public instance methods: __init__, all, new, save, delete, reload
    """
    # __engine is created in __init__ method (see below)
    __engine = None
    # __session is bound in reload method (see below)
    __session = None

    def __init__(self):
        """ this method creates engine that links to MySQL database """
        # creates the engine to MySQL database
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
                                      format(
                                          'bookBook',
                                          'bookWorm',
                                          'localhost',
                                          'bookBook_main_db'),
                                      pool_pre_ping=True)

    def all(self, cls=None):
        """
        this method queries all or specific class from database
        returns dictionary of all objects
        """
        # starts with empty dictionary
        all_dict = {}
        all_list = []
        # loops through known classes defined at the top of this module
        for class_name in classes:
            # if no class is specified, matches with all class_name or
            # if class matches (by cls parameter) based on name or class
            if cls is None or cls == class_name or cls == classes[class_name]:
                # queries all objects based on class
                objs = self.__session.query(classes[class_name]).all()
                # for each object, sets key and saves key with obj as value
                for obj in objs:
                    # need to add condition if add additional models
                    if obj.__class__.__name__ == "BookRatings":
                        key = "{}:{}.{}".format("BookRatings",
                                                obj.ID,
                                                obj.ISBN)
                    all_dict[key] = obj
                    dictionary = obj.to_dict()
                    del dictionary["__class__"]
                    all_list.append(dictionary)
        # returns empty dictionary or dict set by matching objs from query
        # returns empty list or list of matching objects' dictionaries
        return (all_dict, all_list)

    def get_BookRating(self, cls="BookRating", ID=None, ISBN=None):
        """
        retrieves specific BookRating object by id and ISBN

        method currently set up for BookRatings, but can be modified to other models
        if parameters are adjusted (ex. Books will need ISBN, but not ID)
        """
        # if parameters not specified, returns None
        if cls != "BookRating" or ISBN is None or ID is None:
            return None
        # call all method with specified class to get dictionary
        # of all objects of that class in current MySQL session
        all_objs = self.all(cls)
        # checks for matching id in class objects
        if all_objs is not {}:
            for obj in all_objs.values():
                # if found matching id, return the retrieved object
                # this will need to be adjusted for other models if needed
                if ISBN == obj.ISBN and ID == obj.ID:
                    return obj
        # if no matching object was found in MySQL session, return None
        return None

    def save(self):
        """ this method commits changes to current DB session """
        # called after new or delete to commit session changes to MySQL
        self.__session.commit()

    def new(self, obj=None):
        """ this method adds object to current DB session and saves """
        if obj is not None:
            # if object exists, adds it to current session
            self.__session.add(obj)
            # calls on save method to commmit recent add to save to database
            self.save()

    def delete(self, obj=None):
        """ this method deletes obj from current DB session and saves """
        if obj is not None:
            # if object exists, removes it from current session
            self.__session.delete(obj)
            # calls on save method to commit recent del to save to database
            self.save()

    def reload(self):
        """
        this method binds current engine to a scoped session
        connects current session to MySQL database
        """
        # makes session based on metadata from engine to MySQL db
        Base.metadata.create_all(self.__engine)
        session_factory = sessionmaker(bind=self.__engine,
                                       expire_on_commit=False)
        Session = scoped_session(session_factory)
        # sets __session attribute to instance of Session using made session
        self.__session = Session()

    def close(self):
        """
        this method closes the current session using method from Session class
        """
        # calls close method inherited from Session to close session
        self.__session.close()
