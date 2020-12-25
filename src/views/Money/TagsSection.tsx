import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';

const Wrapper = styled.section`
  background: #FFFFFF; 
  padding: 12px 16px;
  flex-grow: 1; 
  display:flex; 
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start;
  > ol { 
  margin: 0 -12px;
    > li{
       background: #D9D9D9; 
       border-radius: 18px;
       display:inline-block; 
       padding: 3px 18px; 
       font-size: 14px; 
       margin: 8px 12px;
       &.selected{
        background: #f60;
       }
    }
  }
  > button{
    background:none; 
    border: none; 
    padding: 1px 1px;
    border-bottom: 1px solid #333; 
    color: #666;
    margin-top: 8px;
    font-size: 10px;
  }
`;

type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
    const {tags, setTags} = useTags();
    const selectedTagIds = props.value;
    const onAddTag = () => {
        const tagName = window.prompt('The new tag name you want to add is: ');
        if (tagName !== null) {
            setTags([...tags, {id: Math.random(), name: tagName}]);
        }
    };
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            // Set all non-selected tags
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };

    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => onToggleTag(tag.id)}
                        className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>
                        {tag.name}
                    </li>
                )}
            </ol>
            <button onClick={onAddTag}>New Tags</button>
        </Wrapper>
    );
};

export {TagsSection};