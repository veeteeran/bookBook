#!/usr/bin/python3
""" this module builds MovieRatings class """
from base_model import BaseModel, Base
from sqlalchemy import Column, Integer, String

class MovieRatings(BaseModel, Base):
  """ this module defines BaseRating inherited by all classes
  """
  __tablename__ = 'MovieRatings'
  id = Column(Integer, primary_key=True)
  rating = Column(Integer, nullable=False, default=0)
