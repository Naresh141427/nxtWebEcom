import { useState } from "react"
import {
    CategoriesHeader,
    CategoriesList,
    CategoriesListItem
} from "./category-styles.js"


const categoriesList = [
    {
        id: 0,
        categoryName: "Clothing"
    },
    {
        id: 1,
        categoryName: "Electronics"
    },
    {
        id: 2,
        categoryName: "Appliances"
    },
    {
        id: 3,
        categoryName: "Grocery"
    },
    {
        id: 4,
        categoryName: "Toys"
    },
]

const Category = ({ setCategoryName }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleItemCategory = (id, name) => {
        setSelectedCategory(id)
        setCategoryName(name)
    }
    return (
        <>
            <CategoriesHeader>Category</CategoriesHeader>
            <CategoriesList>
                {categoriesList.map(({ id, categoryName }) => {
                    return (
                        <CategoriesListItem
                            key={id}
                            value={categoryName}
                            className={selectedCategory === id ? "selected" : ""}
                            onClick={() => handleItemCategory(id, categoryName)}
                        >
                            {categoryName}
                        </CategoriesListItem>
                    )
                })}
            </CategoriesList>
        </>

    )
}

export default Category