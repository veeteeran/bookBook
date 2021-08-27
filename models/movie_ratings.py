#!/usr/bin/python3
""" this module builds MovieRatings class """
from base_model import BaseModel, Base
from sqlalchemy import Column, Integer

class MovieRatings(BaseModel, Base):
  """ this module defines BaseRating inherited by all classes
  """
  __tablename__ = 'MovieRatings'
  ID = Column(Integer, primary_key=True)
  Rating = Column(Integer, nullable=False, default=0)
