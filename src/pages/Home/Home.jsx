import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Categories from "../../components/Header/Categories/Categories";
import { useState, useEffect } from "react";

const Home = () => {
    const categories = useLoaderData();
    const [searchCategory, setSearchCategory] = useState("");
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        const filteredCategory = categories.filter(category =>
            category.category_name.toLowerCase().includes(searchCategory.toLowerCase())
        );
        setFilteredCategories(filteredCategory);
    }, [searchCategory, categories]);

    return (
        <div>
            <Banner setSearchCategory={setSearchCategory}></Banner>
            <Categories categories={searchCategory ? filteredCategories : categories}></Categories>
        </div>
    );
};

export default Home;
