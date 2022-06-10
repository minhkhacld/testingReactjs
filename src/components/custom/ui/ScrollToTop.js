import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const styles = {
        frame: {
            position: 'fixed',
            zIndex: 1000000,
            bottom: '3%',
            left: '3%',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'tomato',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        icon: {
            color: 'white',
            fontSize: 25,
        }
    }

    const onGoToTop = () => {
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    }

    return (
        <div style={styles.frame} onClick={onGoToTop} id="scroll-to-top">
            <FaArrowAltCircleUp style={styles.icon} />
        </div>
    )
}

export default ScrollToTop