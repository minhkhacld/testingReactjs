import React from 'react';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import ProductInformation from './info/product_information';
import GoogleMap from './map/map';
import Navbar from './navbar/navbar';
import Picture from './picture/picture';
import Documents from './documents/documents';
import ScrollToTop from '../../components/custom/ui/ScrollToTop';

const Detail = () => {

  const location = useLocation();
  const item = location.state;

  const styles = {
    container: {
      width: '100%',
      height: '100%',
      paddingTop: 50,
      overflow: 'scroll',
    }
  }

  return (
    <Container fluid style={styles.container} className="container" id="detail">
      <Navbar />
      <Picture item={item} />
      <ProductInformation item={item} />
      <Documents item={item} />
      <GoogleMap item={item} />
      <ScrollToTop />
    </Container>
  )
}

export default Detail;