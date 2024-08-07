import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import logo from '../../../img/logo.png';

function Card({ shirts = [], type }) {
    const filteredShirts = type ? shirts.filter(shirt => shirt.tipo === type) : shirts;

    if (filteredShirts.length === 0) {
        return <p>Não há camisas para mostrar.</p>;
    }

    return (
        <div className={styles.cardsContainer}>
            {filteredShirts.map(shirt => (
                <div key={shirt.id} className={styles.card}>
                    <img src={logo} alt="Logo" className={styles.logo} aria-hidden="true" />
                    <img src={shirt.image} alt={shirt.name} className={styles.camisa} />
                    <div className={styles.txt}>
                        <h2 className={styles.nome}>{shirt.name}</h2>
                        <p className={styles.tipo}>{shirt.tipo}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

Card.propTypes = {
    shirts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            tipo: PropTypes.string.isRequired,
        })
    ).isRequired,
    type: PropTypes.string,
};

export default Card;
