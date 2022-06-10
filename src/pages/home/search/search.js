import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ColCenter, ColLeft, Col, RowCenter, RowLeft } from '../../../components/utils/custom_tag';
import './search.css';

const Search = ({ search, setSearch, product, setProduct, database }) => {

    const onValueChanged = (value) => {
        setSearch({
            ...search, value: value
        });
    };

    const onFocus = (e) => {
        e.target.select();
        setSearch({
            ...search, isSearch: true,
        })
    };

    const onSelectProduct = (item) => {
        setSearch({
            ...search, value: item.maso, isSearch: false
        });
        setProduct([item]);
    };

    const onCancelSearchProduct = () => {
        setSearch({
            value: "", isSearch: false
        });
    };

    let list = [...database].filter(item => item.maso.toLowerCase().includes(search.value.toLowerCase())
        ||
        item.tenBds.toLowerCase().includes(search.value.toLowerCase())).slice(0, 7);


    return (
        <ColCenter className="search-container" id="search-container">
            <RowCenter className="input-group">
                <FontAwesomeIcon icon={faSearch} className="icon"
                    style={{
                        color: search.isSearch ? "var(--green)" : 'grey'
                    }}
                />
                <input type="text" placeholder="Tìm mã số hoặc tên"
                    onChange={(e) => onValueChanged(e.target.value)}
                    onFocus={(e) => onFocus(e)}
                    value={search.value}
                    style={{ borderRadius: 50 }}
                />
                {search.isSearch &&
                    <FontAwesomeIcon icon={faTimesCircle} className="icon-close" onClick={() => onCancelSearchProduct()}
                        style={{
                            color: search.isSearch ? "var(--green)" : 'grey'
                        }}
                    />
                }
            </RowCenter>
            {
                search.isSearch &&
                <Col className="search-list">
                    {
                        list.length > 0 && list.map((item, index) =>
                        (
                            <RowLeft key={index} className="search-item" onClick={() => onSelectProduct(item)}>
                                <ColLeft style={{ width: '30%' }}>{item.maso}</ColLeft>
                                <ColLeft style={{ marginLeft: '0.5rem', width: '30%' }}>{item.tenBds}</ColLeft>
                                <ColLeft style={{ marginLeft: '0.5rem', width: '40%' }}>{item.diachi.slice(0, 25)}...</ColLeft>
                            </RowLeft>
                        )
                        )
                    }

                </Col>
            }
        </ColCenter>
    )
};

export default Search;