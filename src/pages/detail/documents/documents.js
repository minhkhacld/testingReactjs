import React from 'react';
import { Card, Tabs, Tab } from 'react-bootstrap';
import NoDataText from '../../../components/custom/ui/NoDataText';

const Documents = ({ item }) => {

    const styles = {
        card: {
            marginBottom: '1.5rem', boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            height: 300,
        },
        iframe: {
            width: '100%',
            height: '100%',
        }
    };

    return (
        <Card style={styles.card}>
            <Tabs defaultActiveKey="document" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="document" title="Tài liệu đính kèm">
                    <NoDataText text="Không có dữ liệu" />
                </Tab>
                <Tab eventKey="purchase" title="Phiếu mua bán">
                    <NoDataText text="Không có dữ liệu" />
                </Tab>
            </Tabs>
        </Card>
    )
};

export default Documents;