import React from 'react';
import { Col } from '../../../src/components/utils/custom_tag';
import database from '../../data';
import CardContainer from './card/card';
import Filter from './filter/filter';
import Search from './search/search';

const Home = ({ }) => {
    const [product, setProduct] = React.useState([])
    const [search, setSearch] = React.useState({
        value: "",
        isSearch: false,
    });

    React.useEffect(() => {
        setProduct(database);
        //Call api here to get product data
    }, []);

    let renderProduct = search.value === "" ? database :
        product;

    return (

        <Col className="container">
            <Search search={search} setSearch={setSearch} database={database} product={product} setProduct={setProduct}
            />
            <Filter product={product} setProduct={setProduct} database={database} />
            <CardContainer renderProduct={renderProduct} />
        </Col>

    )
}

export default Home