import { faBell, faSignOut, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Toast } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { useAuth } from '../../contexts/auth';
import useScreenSize from '../../kits/use-screen-size';
import { ColCenter, ColLeft, RowCenter, RowEvenly } from '../utils/custom_tag';
import './header.css';

const Header = () => {

    const [showLogOut, setShowLogOut] = React.useState(false);
    const { signOut, user } = useAuth();
    const screenSize = useScreenSize();
    let rightPosition = screenSize.isXSmall || screenSize.isSmall ? 0 : '3.5%';


    const onSignOut = () => {
        signOut();
    };

    return (
        <RowCenter className="header" id="header">
            <ColLeft className="menu-bar">
                {/* <FontAwesomeIcon icon={faEllipsis} className="icon" /> */}
                <FaBars className="icon" size={35} />
            </ColLeft>
            <RowEvenly className="user-info">
                <ColCenter className="child-element">
                    <img src={require("../../assets/images/flag.png")} alt={'flag'} className="flag" />
                </ColCenter>
                <ColCenter className="child-element">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                    <ColCenter className="ciricle-notify">
                        <ColCenter className="notify-text">2</ColCenter>
                    </ColCenter>
                </ColCenter>
                <ColCenter className="child-element">
                    <FontAwesomeIcon icon={faUserGroup} className="icon" />
                </ColCenter>
                <ColCenter>
                    <ColCenter className="child-element" onClick={() => setShowLogOut(!showLogOut)}>
                        <ColCenter className="avatar">
                        </ColCenter>
                    </ColCenter>

                    <Toast show={showLogOut} onClose={() => setShowLogOut(!showLogOut)}
                        style={{
                            position: 'absolute', top: 50, width: 'fit-content  ',
                            right: rightPosition
                        }}
                    >
                        <Toast.Header >
                            <strong>{user.email}</strong>
                        </Toast.Header>
                        <Toast.Body>
                            <RowCenter onClick={() => onSignOut()} style={{ cursor: 'pointer' }} id="logout-popover">
                                <FontAwesomeIcon icon={faSignOut} />
                                <ColCenter style={{ marginLeft: '0.5rem' }}>Sign out</ColCenter>
                            </RowCenter>
                        </Toast.Body>
                    </Toast>
                </ColCenter>


            </RowEvenly>


        </RowCenter>
    )
}

export default Header;