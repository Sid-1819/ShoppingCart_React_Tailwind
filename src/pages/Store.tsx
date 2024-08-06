import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";



export function Store(){
   
    return (
      
        
    <div className="flex g-3">
        {storeItems.map((item) => (
            <div className="flex" key={item.id}><StoreItem {...item} />
            
            </div>
        )
    )
}

    </div>
   
    )

}

