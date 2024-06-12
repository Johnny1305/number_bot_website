import React, { useEffect, useState } from 'react';

const FutureUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUpdates = async () => {
        try {
            const response = await fetch('/updates.json');
            const data = await response.json();
            setUpdates(data.updates);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching updates:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUpdates();

        const interval = setInterval(() => {
            fetchUpdates();
        }, 60000); // Verificar cada 60 segundos

        return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
    }, []);

    return (
        <div className='actualizaciones'>
            {loading ? (
                <p>Loading...</p>
            ) : updates.length > 0 ? (
                updates.map((update, index) => (
                    <p key={index}>
                        {update.complete ? '✅' : '❌'} {update.text}
                    </p>
                ))
            ) : (
                <p>❌ There are no updates</p>
            )}
        </div>
    );
};

export default FutureUpdates;