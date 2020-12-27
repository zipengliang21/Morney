import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

type Params = {
    id: string;
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));
    const TagContent = (tag: {id: number; name: string}) => (
        <div>
            <InputWrapper>
                <Input label="Tag Name" type="text" placeholder="Tag Name"
                       value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value});
                       }}/>
            </InputWrapper>
            <Center>
                <Space/>
                <Button onClick={() => deleteTag(tag.id)}>Delete Tag</Button>
            </Center>
        </div>
    );
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>Edit Tag</span>
                <Icon/>
            </TopBar>
            {tag ? TagContent(tag) : <div>
                <Center>This Tag does not exist anymore!</Center>
            </div>}
        </Layout>
    );
};

export {Tag};
