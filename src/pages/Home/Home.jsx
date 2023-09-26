import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Categories from "../../components/Header/Categories/Categories";

const Home = () => {

    const categories = useLoaderData()

    // console.log(categories);
    return (
        <div>
            <Banner></Banner>

            
            <Categories categories = {categories}></Categories>
        </div>
    );
};

export default Home;