import React from 'react';
import './Display.css'

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <div className="card">
                        <h2>{item.mealtype}</h2>
                        <img src={item.meal_image}/>
                    </div>
                )
            })
        }
    }



    return(
        <div className="container">
            {listMeal(props)}
        </div>

    )
}

export default QuickDisplay;