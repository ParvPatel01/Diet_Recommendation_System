# from fastapi import FastAPI
import json
from pydantic import BaseModel,conlist
from typing import List,Optional
import pandas as pd
from model import recommend,output_recommended_recipes


dataset=pd.read_csv('../dataset/dataset.csv',compression='gzip')

# app = FastAPI()

class params(BaseModel):
    n_neighbors:int=5
    return_distance:bool=False

class PredictionIn(BaseModel):
    nutrition_input:conlist(float,min_length=9,max_length=9)
    ingredients:list[str]=[]
    params:Optional[params]


class Recipe(BaseModel):
    Name:str
    CookTime:str
    PrepTime:str
    TotalTime:str
    RecipeIngredientParts:list[str]
    Calories:float
    FatContent:float
    SaturatedFatContent:float
    CholesterolContent:float
    SodiumContent:float
    CarbohydrateContent:float
    FiberContent:float
    SugarContent:float
    ProteinContent:float
    RecipeInstructions:list[str]

class PredictionOut(BaseModel):
    output: Optional[List[Recipe]] = None


# @app.get("/")
def home():
    return {"health_check": "OK"}


# @app.post("/predict/",response_model=PredictionOut)
def update_item(prediction_input:PredictionIn):
    recommendation_dataframe=recommend(dataset,prediction_input.nutrition_input,prediction_input.ingredients,prediction_input.params.dict())
    output=output_recommended_recipes(recommendation_dataframe)
    json_object = json.dumps(output, indent=4)
    with open("data.json", "w") as outfile:
        outfile.write(json_object)
    
    if output is None:
        return {"output":None}
    else:
        return {"output":output}
    


# print(update_item(PredictionIn(nutrition_input=[1000.00]*9,ingredients=['chicken','rice'],params=params(n_neighbors=5,return_distance=False))))