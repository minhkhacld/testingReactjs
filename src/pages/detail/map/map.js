import React from 'react';
import { Card } from 'react-bootstrap';

const GoogleMap = ({ item }) => {

    const styles = {
        card: {
            marginBottom: '1.5rem', boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            height: 500,
        },
        iframe: {
            width: '100%',
            height: '100%',
        }
    };

    return (
        <Card style={styles.card}>
            <iframe src={item.iframe} style={styles.iframe} allowFullScreen="" title="myFrame" loading="lazy"></iframe >
        </Card>
    )
}

export default GoogleMap;