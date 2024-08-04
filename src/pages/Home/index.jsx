import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Card from '../../components/Card';
import { fetchShirts } from '../../utils/api'; 
import './Home.module.css';

function Home() {
    const [shirts, setShirts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadShirts = async () => {
            try {
                const data = await fetchShirts();
                setShirts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadShirts();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <Container>
            <h3>Todas as camisas</h3>
            <Card shirts={shirts} />
        </Container>
    );
}

export default Home;
