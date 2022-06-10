import React from 'react';
import { ColCenter } from '../../utils/custom_tag';

const NoDataText = ({
    ...props
}) => {

    let { text, fontSize, color } = props;
    text = text === undefined ? "No data" : text;
    fontSize = fontSize === undefined ? 14 : fontSize;
    color = color === undefined ? 'var(--grey)' : color;

    const styles = {
        container: {
            position: 'relative',
            // top: '50%',
            // left: '50%',
            transform: [{ translateX: ('-50%') }, { translateY: ('-50%') }],
            width: '100%',
            height: '100%',
        },
        text: {
            color: color, fontSize: fontSize, fontWeight: 'bold',
        },
    };

    return (
        <ColCenter style={styles.container}>
            <ColCenter style={styles.text}>{text}</ColCenter>
        </ColCenter>
    );
};

export default NoDataText;