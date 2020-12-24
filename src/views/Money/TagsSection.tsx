import styled from 'styled-components';
import React, {useState} from 'react';
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
    value: string[];
    onChange: (selected: string[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
    const {tags, setTags} = useTags();
    const selectedTags = props.value;
    const onAddTag = () => {
        const tagName = window.prompt('The new tag name you want to add is: ');
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            // Set all non-selected tags
            props.onChange(selectedTags.filter(t => t !== tag));
        } else {
            props.onChange([...selectedTags, tag]);
        }
    };

    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => onToggleTag(tag)}
                        className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>
                        {tag}
                    </li>
                )}
            </ol>
            <button onClick={onAddTag}>New Tags</button>
        </Wrapper>
    );
};

export {TagsSection};