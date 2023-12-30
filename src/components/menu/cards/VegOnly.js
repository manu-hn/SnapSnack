
import { IMG_API } from "../../utils/EnvVariable";


const VegOnly = ({ vegMenu }) => {

    console.log("Veg Only ", vegMenu)


    return vegMenu ? (
        <div className="vegOnly">
            <main className='main-div'>

                {
                    vegMenu.map(res => {
                        return (
                            <div key={res?.card.info?.id} className='meal-detail'>
                                <div>
                                    <h3>{res?.card.info?.name}</h3>
                                    <p>{res?.card.info?.defaultPrice ? " " + res?.card.info?.defaultPrice / 100 : null}</p>
                                    <h5>{res?.card.info?.category}</h5>
                                    <p>{res?.card.info?.name}</p>
                                </div>
                                <div>
                                    <img className="menu-image" src={IMG_API + res?.card.info?.imageId} alt="" />
                                </div>
                            </div>
                        )

                    })
                }
            </main>
        </div>
    ) : <h1>There are no Veg Menu</h1>



}

export default VegOnly;