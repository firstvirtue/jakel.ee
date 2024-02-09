import React, { useState, useEffect } from 'react';

const MasonryLayout = ({ children, columnCount }: any) => {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        // Distribute children across columns
        let cols = Array.from({ length: columnCount }, () => []);
        React.Children.forEach(children, (child, index) => {
            // @ts-ignore
            cols[index % columnCount].push(child);
        });
        // @ts-ignore
        setColumns(cols);
    }, [children, columnCount]);

    return (
        <div style={{ display: 'flex' }}>
            {columns.map((col, index) => (
                <div key={index} style={{ marginLeft: index !== 0 ? '16px' : '0', flex: 1 }}>
                    {/* @ts-ignore */}
                    {col?.map((child, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            {child}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MasonryLayout;