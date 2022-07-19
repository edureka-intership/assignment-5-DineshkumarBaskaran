const express=require('express')
const restaurantController=require('../controller/restaurantManager')

const router=express.Router();


router.get('/getCitiesList',restaurantController.getAllRestaurantsPlaces)

router.get('/getCitiesList/:cName',restaurantController.getRestaurantsByCity)

router.get('/mealtype',restaurantController.mealTypes)

router.get('/mealtype/:mealTypeName',restaurantController.mealTypesByNo)



module.exports=router;


