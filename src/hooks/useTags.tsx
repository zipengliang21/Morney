import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => { // Create a custom React Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: 'Clothes'},
                {id: createId(), name: 'Food'},
                {id: createId(), name: 'Living'},
                {id: createId(), name: 'Transportation'}
            ];
        }
        setTags(localTags);
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);
    const findTag = (id: number) => {
        return tags.filter(tag => tag.id === id)[0];
    };
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
        const tagName = window.prompt('The new tag name you want to add is: ');
        if (tagName !== null && tagName !== "") {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };
    return {tags, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};