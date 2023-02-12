import React, { useState } from "react";

interface Item {
    id: string;
    name: string;
    checked: boolean;
}

const Checklist: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 'item1',
            name: 'Item 1',
            checked: false,
        },
        {
            id: 'item2',
            name: 'Item 2',
            checked: false,
        },
        {
            id: 'item3',
            name: 'Item 3',
            checked: false,
        }
    ]);

    const handleChange = (id: string) => {
        setItems(
            items.map(item => {
                if (item.id === id) {
                    return {...item, checked: !item.checked};
                }
                return item;
            })
        );
    };

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <input 
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleChange(item.id)}
                    />
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Checklist;