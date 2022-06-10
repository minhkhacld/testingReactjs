import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ColCenter, ColLeft, RowCenter } from '../../utils/custom_tag';

const Button = ({
    ...props
}) => {

    let { height, width, backgroundColor, iconName, iconSize, iconColor, buttonText, buttonTextColor, buttonTextSize, borderRadius, className,
        onClick, textMarginLeft, } = props;

    height = height === undefined ? 40 : height;
    width = width === undefined ? 'auto' : width;
    backgroundColor = backgroundColor === undefined ? 'var(--lightBlue)' : backgroundColor;
    borderRadius = borderRadius === undefined ? '5%' : borderRadius;
    textMarginLeft = textMarginLeft === undefined ? 5 : textMarginLeft;

    return (
        <RowCenter className={className}
            onClick={onClick}
            style={{
                width: width, height: height, backgroundColor: backgroundColor,
                cursor: 'pointer', borderRadius: borderRadius, color: buttonTextColor, fontSize: buttonTextSize
            }}>
            {iconName !== undefined &&
                <ColCenter >
                    <FontAwesomeIcon icon={iconName} size={iconSize} color={iconColor} />
                </ColCenter>
            }
            <ColLeft style={{ marginLeft: iconName !== undefined ? textMarginLeft : 0 }}>
                {buttonText}
            </ColLeft>
        </RowCenter>

    );
};

export default Button;