
import {
    CategoriesHeader,
    CategoriesList,
    CategoriesListItem
} from "./category-styles.js"


const categoriesList = [
    {
        id: 1,
        categoryName: "Clothing"
    },
    {
        id: 2,
        categoryName: "Electronics"
    },
    {
        id: 3,
        categoryName: "Appliances"
    },
    {
        id: 4,
        categoryName: "Grocery"
    },
    {
        id: 5,
        categoryName: "Toys"
    },
]

const Category = ({ handleCategoryId, currentCategory }) => {

    const handleItemCategory = (id) => {
        handleCategoryId(String(id))
    }
    return (
        <>
            <CategoriesHeader>Category</CategoriesHeader>
            <CategoriesList>
                {categoriesList.map(({ id, categoryName }) => {
                    const isSelected = String(id) === currentCategory
                    return (
                        <CategoriesListItem
                            key={id}
                            value={categoryName}
                            className={isSelected ? "selected" : ""}
                            onClick={() => handleItemCategory(id)}
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