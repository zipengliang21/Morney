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
    const findTag = (id: number) => {return tags.filter(tag => tag.id === id)[0];}
    const findTagIndex = (id: number) => {
        let result = -1;
        for(let i =0; i< tags.length; i++) {
            if(tags[i].id === id ) {
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id: number, obj: {name:string}) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, {id: id, name: obj.name});
        setTags(tagsClone);
    };
    return {tags, setTags, findTag, updateTag, findTagIndex};
};

export {useTags};