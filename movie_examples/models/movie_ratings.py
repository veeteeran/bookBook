#!/usr/bin/python3
""" this module builds MovieRatings class """
from models.base_model import BaseModel, Base
from sqlalchemy import Column, Integer, String

class MovieRatings(BaseModel, Base):
  """ this module defines BaseRating inherited by all classes
  """
  __tablename__ = 'MovieRatings'
  Title = Column(String(13),
                 nullable=False,
                 primary_key=True)
  ID = Column(Integer, primary_key=True)
  Rating = Column(Integer, nullable=False, default=0)
