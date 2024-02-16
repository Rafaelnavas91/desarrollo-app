
import { useState } from "react";
import Home from "./src/screen/Home";
import ItemListCategories from "./src/screen/ItemListCategories";


export default function App() {
    const [categorySelected, setCategorySelected] = useState ("")



return (
<>
{categorySelected ? (
<ItemListCategories />

) : (
    <Home setCategorySelected={setCategorySelected}/>
)
}
</>
)
;

}

