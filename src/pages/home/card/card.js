import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ColCenter, ColLeft, RowLeft } from '../../../components/utils/custom_tag';
import useScreenSize from '../../../kits/use-screen-size';

const CardContainer = ({ renderProduct }) => {

  const navigate = useNavigate();
  const screenSize = useScreenSize();

  const styles = {
    container: {
      flexDirection: !screenSize.isXSmall || !screenSize.isSmall ? 'row' : 'column',
      flexWrap: !screenSize.isXSmall || !screenSize.isSmall ? 'wrap' : 'none',
      justifyContent: !screenSize.isXSmall || !screenSize.isSmall ? 'flex-start' : 'center',
      //add to make the scroll position
      overflow: 'scroll',
    },
    card: {
      marginBottom: '1.5rem', boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      height: 450,
      width: !screenSize.isXSmall ? '25%' : '100%',
      image: {
        height: 300,
      }
    },
    status: {
      position: 'absolute',
      width: '30%',
      height: '2rem',
      right: '2%',
      top: '2%',
      borderRadius: '0.3rem',
      text: {
        color: 'white',
      }
    },
    info: {
      width: '100%',
      fontWeight: 'bold',
      type: {
        width: '60%',
      },
      square: {
        width: '20%',
      },
      price: {
        width: '20%',
      }
    },
  };

  const onGoToDetail = (item) => {
    navigate("/detail", { state: item });
  };

  return (
    <ColCenter className="card-container" style={styles.container}>
      {
        renderProduct.length > 0 && renderProduct.map((item, index) => {
          //Calculate square meter and price
          let dientich = Object.values(item.dientich).reduce((a, b) => (a + b), 0);
          let giaban = Math.round(item.giaban / 1000000000 * 100) / 100;
          return (
            <Card key={index} style={styles.card} id="card" onClick={(() => onGoToDetail(item))}>
              <ColCenter style={{
                ...styles.status,
                ...{ backgroundColor: item.tinhtrang === 0 ? "var(--green)" : 'tomato', }
              }}>
                <ColCenter style={styles.status.text}>{item.tinhtrang === 0 ? "Đã bán" : "Mới cập nhật"}</ColCenter>
              </ColCenter>
              <Card.Img variant="top" src={item.picture[0]} className="card-image" style={styles.card.image} />
              <Card.Body>
                <Card.Title>{item.tenBds}</Card.Title>
                <Card.Text >
                  {item.diachi}
                </Card.Text>
                <RowLeft style={styles.info}>
                  <ColLeft style={styles.info.type}>
                    <Card.Text >
                      {item.loaihinh}
                    </Card.Text>
                  </ColLeft>
                  <RowLeft style={styles.info.square}>
                    {dientich}<span>m<sup>2</sup></span>
                  </RowLeft>
                  <ColLeft style={styles.info.price}>
                    <Card.Text >
                      {giaban}tỷ
                    </Card.Text>
                  </ColLeft>
                </RowLeft>

              </Card.Body>
            </Card>

          )
        })
      }
    </ColCenter >
  )
}

export default CardContainer