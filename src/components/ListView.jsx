import ShopItem from "./ShopItem";

const ListView = ({items}) => {
    return (
        <ul className="listView">
            {items.map(item => <ShopItem item={item} />)}
        </ul>
    )
}

export default ListView;