#!/usr/bin/python3
""" this module builds BookRatings class """
from models.base_model import BaseModel, Base
from sqlalchemy import Column, Integer

class BookRatings(BaseModel, Base):
  """ this module defines BaseRating inherited by all classes
  """
  __tablename__ = 'BookRatings'
  ISBN = Column(String(13),
                nullable=False,
                primary_key=True)
  ID = Column(Integer, primary_key=True)
  Rating = Column(Integer, nullable=False, default=0)
