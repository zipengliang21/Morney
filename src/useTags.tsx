import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
    {id: createId(), name: 'Clothes'},
    {id: createId(), name: 'Food'},
    {id: createId(), name: 'Living'},
    {id: createId(), name: 'Transportation'}
];

const useTags = () => { // Create a custom React Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id: number) => {
        return tags.filter(tag => tag.id === id)[0];
    }
    return {tags, setTags, findTag};
};

export {useTags};