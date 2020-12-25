import {useState} from 'react';
import {createId} from './lib/createId';

const useTags = () => { // Create a custom React Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
        {id: createId(), name: 'Clothes'},
        {id: createId(), name: 'Food'},
        {id: createId(), name: 'Living'},
        {id: createId(), name: 'Transportation'}
    ]);
    return {tags, setTags};
};

export {useTags};