/* eslint-disable react/jsx-key */
import CategoriesCard from "./CategoriesCard";

const Categories = ({categories}) => {

    console.log(categories);
    return (
        <div className="-mt-24 pb-24 max-w-screen-xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    categories?.map(category => <CategoriesCard category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;