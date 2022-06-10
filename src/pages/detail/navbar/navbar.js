import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { RowLeft } from '../../../components/utils/custom_tag';

const Navbar = () => {

    const styles = {
        container: {
            overflow: 'hidden',
            marginTop: '1rem',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
        },
    };

    const linkSource = [
        { path: '/', pathname: "", text: "Trang chủ", },
        { path: '/', pathname: "", text: "Thư viện", },
        { path: '/', pathname: "", text: "Sản phẩm", },
    ]

    return (
        <Row style={styles.container}>
            <Col>
                <RowLeft>
                    {
                        linkSource.map((link, index) => (
                            <Link to={link.path} style={{
                                ...styles.link, ...{
                                    marginLeft: index > 0 ? '1rem' : 0,
                                }
                            }} key={index}>{link.text}</Link>
                        ))
                    }
                </RowLeft>
            </Col>
        </Row >

    )
}

export default Navbar