import React from 'react';
import {useTags} from 'useTags';
import {useParams} from "react-router-dom";
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
    const {findTag} = useTags();
    let { id } = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <TopBar>
                <Icon name="left" />
                <span>Edit Tag</span>
                <Icon/>
            </TopBar>
            <InputWrapper>
                <Input label="Tag Name" type="text" placeholder="Tag Name" value={tag.name}/>
            </InputWrapper>
            <Center>
                <Space />
                <Button>Delete Tag</Button>
            </Center>
        </Layout>
    )
};

export {Tag};
