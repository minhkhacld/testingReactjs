import React from 'react';
import Image from 'react-bootstrap/Image';
import { ColCenter, RowCenter } from '../../../components/utils/custom_tag';
import useScreenSize from '../../../kits/use-screen-size';

const Picture = ({ item }) => {
    let [pictureIndex, setPictureIndex] = React.useState(0);
    const screenSize = useScreenSize();

    const styles = {
        container: {
            width: '100%',
            marginBottom: '1rem',
        },
        bigPicture: {
            width: '100%',
            picture: {
                width: '100%',
                objectFit: 'cover',
                borderRadius: '1rem',
            },
            marginBottom: '1rem',
            height: !screenSize.isXSmall || !screenSize.isSmall ? 300 : 450,
            overflow: 'hidden',
        },
        slide: {
            overflowX: 'scroll',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '98%',
            heigh: 100,
            paddingLeft: 50,
            picture: {
                width: 100, height: 100,
                marginLeft: '1.5rem',
            }
        }
    };

    const onChangePicture = (index) => {
        setPictureIndex(index);
    };

    return (
        <ColCenter style={styles.container}>

            <RowCenter style={styles.bigPicture} >
                <Image src={item.picture[pictureIndex]} alt={'product'} rounded style={styles.bigPicture.picture} />
            </RowCenter>

            <RowCenter style={styles.slide}>
                {
                    item.picture.length > 0 && item.picture.map((pic, index) => {
                        return (
                            <Image src={pic} alt={`product${index}`} key={index} rounded style={{
                                ...styles.slide.picture, ...{
                                    border: index === pictureIndex ? "2px solid green" : "none"
                                }
                            }}
                                onClick={() => onChangePicture(index)}
                            />
                        )
                    })
                }
            </RowCenter>

        </ColCenter>
    )
}

export default Picture;