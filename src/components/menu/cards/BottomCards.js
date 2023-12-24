const BottomCards=({itemCards})=>{
    return (
        <div className="menu">
            <main className='main-div'>
                    {
                        itemCards.map(res => {
                            return (
                                <div key={res.card.info.id} className='meal-detail'>
                                    <h3>{res.card.info.name}</h3>
                                    <p>{res.card.info.defaultPrice ? " " + res.card.info.defaultPrice / 100 : null}</p>
                                    <h5>{res.card.info.category}</h5>
                                    <p>{res.card.info.name}</p>
                                </div>
                            )

                        })
                    }
                </main>
        </div>
    )
}

export default BottomCards;