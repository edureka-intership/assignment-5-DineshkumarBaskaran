const restaurants = require('../models/restaurantData.json')
const mealtype = require('../models/mealtype.json')
const locations = require('../models/locations.json')


exports.getAllRestaurantsPlaces = (req, res) => {
    const filteredPlaces = Array.from(locations.map(({ name }) => name));
    res.status(200).json({
        message: "cities fetched successfully",
        data: filteredPlaces
    })
}


exports.getRestaurantsByCity = (req, res) => {
    let filteredRestaurants = restaurants.filter((item) => item.city_name == req.params.cName)
    filteredRestaurants.length ?
        res.status(200).json({
            message: "restaurants fetched successfully by City Name",
            data: filteredRestaurants
        }) :
        res.status(200).json({
            message: "no restaurants fetched by city name"
        })
}

exports.mealTypes = (req,res) =>{
    res.status(200).json({
        message: "all meals along with meal types fetched successfully",
        data: mealtype
    })
}

exports.mealTypesByNo = (req,res)=>{
    let filteredMeals=mealtype.filter((item)=>item.name==req.params.mealTypeName)
    filteredMeals.length ?
    res.status(200).json({
        message: "meal fetched successfully",
        data: filteredMeals
    }) :
    res.status(200).json({
        message: "no meals fetched by given name"
    })
}
