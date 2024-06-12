import React, { useEffect, useState } from 'react';

const FutureUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/updates.json')
            .then(response => response.json())
            .then(data => {
                setUpdates(data.updates);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching updates:', error);
                setLoading(false);
            });
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