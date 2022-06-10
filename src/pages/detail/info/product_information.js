import React from 'react';
import { Card } from 'react-bootstrap';
import { ColCenter, ColLeft } from '../../../components/utils/custom_tag';

const ProductInformation = ({ item }) => {
    const styles = {
        card: {
            marginBottom: '1.5rem', boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            height: 'fit-content',
        },
        title: {
            width: '40%',
            height: '2rem',
            borderRadius: '0.3rem',
            backgroundColor: 'pink',
            marginTop: '1rem',
            text: {
                color: 'red',
                fontWeight: 'bold',
            }
        },
        status: {
            width: '100%',
            height: '2rem',
            borderRadius: '0.3rem',
            marginTop: '1rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            text: {
                color: 'red',
            }
        },
        row: {
            width: '100%',
            height: '3rem',
            minHeight: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            label: {
                width: '60%'
            },
            detail: {
                width: '40%',
            }
        },

    };

    return (
        <Card style={styles.card}>
            <Card.Body>
                <ColCenter style={styles.title}>
                    <ColCenter style={styles.title.text}>{item.ghichu.toUpperCase()}</ColCenter>
                </ColCenter>
                <ColLeft style={styles.status}>
                    <ColCenter style={styles.status.text}>{item.tinhtrang === 0 ? "ĐÃ BÁN" : "MỚI CẬP NHẬT"}</ColCenter>
                </ColLeft>
                <Card.Title>{item.tenBds}</Card.Title>
                <div style={styles.row}>
                    <ColLeft>
                        <Card.Text >Mã:</Card.Text>
                    </ColLeft>
                    <Card.Text >{item.maso}</Card.Text>
                </div>
                <div style={{ ...styles.row, ...{ color: 'var(--darkBlue)', fontWeight: 'bold', } }}>
                    <ColLeft>
                        <Card.Text >Loại hình:</Card.Text>
                    </ColLeft>
                    <Card.Text >{item.loaihinh}</Card.Text>
                </div>
                <div style={{ ...styles.row, ...{ color: 'var(--darkBlue)', fontWeight: 'bold', } }}>
                    <ColLeft>
                        <Card.Text >Diện tích thổ cư (m<sup>2</sup>):</Card.Text>
                    </ColLeft>
                    <Card.Text >{item.dientich.thocu}</Card.Text>
                </div>
                <div style={styles.row}>
                    <ColLeft>
                        <Card.Text >Diện tích trồng cây (m<sup>2</sup>):</Card.Text>
                    </ColLeft>
                    <Card.Text >{item.dientich.caytrong}</Card.Text>
                </div>
                <div style={styles.row}>
                    <ColLeft>
                        <Card.Text >Giá DG <sup>x1000</sup>:</Card.Text>
                    </ColLeft>
                    <Card.Text >{item.giaGd}</Card.Text>
                </div>
                <div style={{ ...styles.row, ...{ color: 'var(--darkBlue)', fontWeight: 'bold', } }}>
                    <ColLeft>
                        <Card.Text >Giá m2<sup>x1000</sup>:</Card.Text>
                    </ColLeft>
                    <Card.Text >{item.giam2}</Card.Text>
                </div>
                <div style={styles.row}>
                    <Card.Text>Địa chỉ: {item.diachi}.</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductInformation;