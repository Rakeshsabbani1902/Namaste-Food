import { IMG_API_URL } from "../../../Config/Config"

const FoodList = ({name, description, id, price, cloudinaryImageId}) => {
    return (
    <div className="flex justify-between py-4 border-b-4   border-green-600">
      <div>
        <h2 className="font-bold">{name}</h2>
        
        <h4 className="">₹ {price/100}</h4></div>
        <div>  <img className="h-16" src={IMG_API_URL+cloudinaryImageId} alt={name}/></div>
    </div>
  )
}

export default FoodList;