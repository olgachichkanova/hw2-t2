const ShopCard = ({card}) => {
    return (
        <li className="shopCard">
            <h2 className='heading'>{card.name}</h2>
            <p>{card.color}</p>
            <img src={card.img} alt='' />
            <div className='bodyCart'>
                <span className='bodyCart_price'>${card.price}</span>
                <button className='buttonCart'>Add to Cart</button>
            </div>
        </li>
    )
}

export default ShopCard;