import React from "react";
import Layout from "components/Layout";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import {Link} from "react-router-dom";
import {Button} from "components/Button";
import {Center} from "components/Center";
import {Space} from "../components/Space";

const TagsList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    margin-right: 12px;
    > a{
      padding: 12px 4px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagsList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagsList>
      <Center>
        <Space/>
        <Button onClick={addTag}>New Tag</Button>
      </Center>
    </Layout>
  );
}

export default Tags;