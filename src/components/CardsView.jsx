import ShopCard from "./ShopCard";

const CardsView = ({cards}) => {
    return (
        <ul className="cardsView">
            {cards.map(card => <ShopCard card={card} />)}
        </ul>
    )
}

export default CardsView;