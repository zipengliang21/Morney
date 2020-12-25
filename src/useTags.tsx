import {useState} from 'react';

const useTags = () => { // Create a custom React Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
        {id: 1, name: 'Clothes'},
        {id: 2, name: 'Food'},
        {id: 3, name: 'Living'},
        {id: 4, name: 'Transportation'}
    ]);
    return {tags, setTags};
};

export {useTags};