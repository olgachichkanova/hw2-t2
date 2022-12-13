import { useState } from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

const data = require('../data/data')
const Store = () => {
    const [icon, setIcon] = useState('view_module');
    function handleSwitch() {
        switch(icon) {
          case 'view_list':
            return setIcon('view_module');
          case 'view_module':
            return setIcon('view_list');
          default:
            return setIcon('view_module');
        }
      }
    return (
        <div>
            <IconSwitch icon={icon} onSwitch={handleSwitch} />
            {icon === "view_module" ? <ListView items={data.products} /> : <CardsView cards={data.products} />}
        </div>
    )
}

export default Store;