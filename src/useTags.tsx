import {useState} from 'react';

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['Clothes', 'Food', 'Living', 'Transportation']);
    return {tags, setTags};
}

export {useTags};