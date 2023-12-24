
const TopMenu=({info})=>{


    const {name, areaName, cuisines, totalRatingsString, sla, feeDetails, avgRating, costForTwoMessage}=info
    return (
        <div className="menu">
            <div className='delivery-rating'>
                <div className='delivery'>
                    <h3>{name}</h3>
                    <p>{costForTwoMessage ? costForTwoMessage : null}</p>
                    <p>{cuisines.join(', ')}</p>
                    <p>{areaName}</p>
                    <p>{sla.lastMileTravelString}</p>
                    <p>{sla.lastMileTravelString + 's'} ₹  { feeDetails.fees ? feeDetails?.fees[0]?.fee / 100 : null}  Delivery fee will apply</p>
                </div>
                <div className='rating'>
                    <div className='inside-rating'>
                        <h3>{avgRating}</h3>
                        <span></span>
                        <p>{totalRatingsString}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TopMenu;