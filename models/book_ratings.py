#!/usr/bin/python3
""" this module builds BookRatings class """
from base_model import BaseModel, Base
from sqlalchemy import Column, Integer, String

class BookRatings(BaseModel, Base):
  """ this module defines BaseRating inherited by all classes
  """
  __tablename__ = 'BookRatings'
  id = Column(Integer, primary_key=True)
  rating = Column(Integer, nullable=False, default=0)
