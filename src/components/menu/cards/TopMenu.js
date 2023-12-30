

const TopMenu = ({ info }) => {
    

    const { name, areaName, cuisines, totalRatingsString, sla, feeDetails, avgRating, costForTwoMessage } = info
    return (
        <div className="flex flex-col justify-center w-full px-8 py-4">
            <div className='flex justify-between'>
                <div className='w-[60%]'>
                    <h3 className="font-bold text-xl">{name}</h3>
                    <p className="text-gray-400 text-xs mt-2">{cuisines.join(', ')}</p>
                    <p className="text-gray-400 text-xs mt-2">{areaName}  {sla.lastMileTravelString}</p>
                    <p className="text-gray-400 text-sm mt-4">{sla.lastMileTravelString + 's'} ₹  {feeDetails.fees ? feeDetails?.fees[0]?.fee / 100 : null}  Delivery fee will apply</p>
                </div>
                <div className='flex items-center '>
                    <div className=' flex flex-col p-2 justify-evenly items-center border h-[60%] rounded-lg'>
                        <h3 className="text-green-600 font-bold">*{avgRating}</h3>
                        <div className="w-full h-[0.05rem] bg-black"></div>
                        <p className="text-gray-500 text-xs">{totalRatingsString}</p>
                    </div>
                </div>


            </div>
            <div className="w-full bg-gray-300 h-[0.05rem] mt-2"></div>
            <div className="flex w-[50%] justify-start">
                <p className="font-bold text-base text-gray-700 mr-4">14mnts { }</p>
                <p className="font-bold text-base text-gray-700">{costForTwoMessage ? costForTwoMessage : null}</p>

            </div>

        </div>
    )
}

export default TopMenu;