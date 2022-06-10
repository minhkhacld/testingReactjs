import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ColLeft, RowCenter } from '../../../components/utils/custom_tag';
import database from '../../../data';
import useScreenSize from '../../../kits/use-screen-size';

const Filter = ({ product, setProduct, database }) => {

    let types = [...new Set(database.map(d => d.loaihinh))];
    const screenSize = useScreenSize();

    const [sortValue, setSortValue] = React.useState(null);
    const [productType, setproductType] = React.useState(null);

    const styles = {
        container: {
            width: '100%',
            height: '10%',
            minHeight: 40,
            marginBottom: '1rem',
            justifyContent: screenSize.isXSmall ? 'center' : 'flex-start',
        },
        child: {
            height: '100%',
            label: {
                height: '100%',
            },
            filter: {
                height: '100%',
            }
        }
    }

    const onHandleSortingPrice = (e) => {
        if (e === "#/action-1") {
            let sortProduct = product.sort((a, b) => (b.giaban - a.giaban));
            setSortValue(0)
            setProduct(sortProduct);
        } else {
            let sortProduct = product.sort((a, b) => (a.giaban - b.giaban));
            setSortValue(1)
            setProduct(sortProduct);
        }
    };

    const onHandleSortingProductType = (e) => {
        let filterProductType = product.filter(d => d.loaihinh === String(types[Number(e)]));
        // console.log(filterProductType)
        // if (filterProductType.length > 0) {
        //     setproductType(types[Number(e)]);
        //     setProduct(filterProductType);
        // }
    };


    return (
        <RowCenter className="filter-container" style={styles.container}>
            <RowCenter className="filter" style={{ ...styles.child, ...{ width: screenSize.isXSmall ? '40%' : 'fit-content' } }}>
                <ColLeft style={styles.child.label}>Lọc:</ColLeft>
                <ColLeft style={styles.child.filter}>
                    <Dropdown
                        onSelect={(e) => onHandleSortingProductType(e)}
                    >
                        <Dropdown.Toggle variant="normal" id="dropdown-basic">
                            {productType === null ? "Chọn loại" : productType}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                types.length > 0 && [...types].map((t, index) => (
                                    <Dropdown.Item eventKey={index} key={index}>{t}</Dropdown.Item>
                                )
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </ColLeft>
            </RowCenter>
            <RowCenter className="filter" style={{ ...styles.child, ...{ width: screenSize.isXSmall ? '60%' : 'fit-content' } }}>
                <ColLeft style={styles.child.label}>Sắp sếp:</ColLeft>
                <ColLeft style={styles.child.filter}>
                    <Dropdown
                        onSelect={(e) => onHandleSortingPrice(e)}
                    >
                        <Dropdown.Toggle variant="normal" id="dropdown-basic">
                            {sortValue === null ? "Chọn giá" : sortValue === 0 ? "Giá giảm dần" : "Giá tăng dần"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Giá tăng dần</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Giá giảm dần</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ColLeft>
            </RowCenter>


        </RowCenter>
    )
}

export default Filter