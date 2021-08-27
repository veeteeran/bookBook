#!/usr/bin/python3
""" this module builds DBStorage class from MySQLdb and SQLAlchemy"""
from models.base_model import BaseModel, Base
from models.movieratings import MovieRatings
from models.bookratings import BookRatings
from os import getenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
# establishes dictionary reference between class name and class itself
classes = {"MovieRatings": MovieRatings, "BookRatings": BookRatings}


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
        # sets class variables from os environment variables set by user
        # TEST_HOST = getenv('TEST_HOST')
        # TEST_USER = getenv('TEST_USER')
        # TEST_PWD = getenv('TEST_PWD')
        # TEST_DB = getenv('TEST_DB')
        # creates the engine to MySQL db with above variables
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
                                      format(
                                          'bookTest',
                                          'bookWorm',
                                          'localhost',
                                          'test_db'),
                                      pool_pre_ping=True)
        # gets environment variable to determine if testing or not
        # if testing, drops previous metadata
        # IS_TEST = getenv('IS_TEST')
        # if IS_TEST == "true":
        Base.metadata.drop_all(self.__engine)

    def all(self, cls=None):
        """
        this method queries all or specific class from database
        returns dictionary of all objects
        """
        # starts with empty dictionary
        all_dict = {}
        # loops through known classes defined at the top of this module
        for class_name in classes:
            # if no class is specified, matches with all class_name or
            # if class matches (by cls parameter) based on name or class
            if cls is None or cls == class_name or cls == classes[class_name]:
                # queries all objects based on class
                objs = self.__session.query(classes[class_name]).all()
                # for each object, sets key and saves key with obj as value
                for obj in objs:
                    # this will need to be adjusted for Books class in future
                    key = "{}:{}.{}".format("BookRating",
                                            obj.id
                                            obj.ISBN)
                    all_dict[key] = obj
        # returns empty dictionary or dict set by matching objs from query
        return (all_dict)

    def get(self, cls=None, id=None, ISBN=None):
        """
        retrieves specific object by class name (cls) and ISBN
        """
        # if parameters not specified, returns None
        # this will need to be adjusted for Books class in future
        if cls is None or ISBN is None or id is None:
            return None
        # call all method with specified class to get dictionary
        # of all objects of that class in current MySQL session
        all_objs = self.all(cls)
        # checks for matching id in class objects
        if all_objs is not {}:
            for obj in all_objs.values():
                # if found matching id, return the retrieved object
                # this will need to be adjusted for Books class in future
                if ISBN == obj.ISBN and ID == obj.id:
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
