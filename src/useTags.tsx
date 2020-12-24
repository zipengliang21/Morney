import {useState} from 'react';

const useTags = () => { // Create a custom React Hook
    const [tags, setTags] = useState<string[]>(['Clothes', 'Food', 'Living', 'Transportation']);
    return {tags, setTags};
}

export {useTags};