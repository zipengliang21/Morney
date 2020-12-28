import React, {ReactNode, useState} from "react";
import Layout from "../components/Layout";
import {CategorySection} from "./Money/CategorySection";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";

const CategoryWrapper = styled.div`
      background: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
  > .amount{
    margin-right: 8px;
  }
`;

const Header = styled.h3`
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [Key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format("YYYY-MM-DD");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    return a[0] === b[0] ? 0 : a[0] > b[0] ? -1 : 1;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={(category) => setCategory(category)}/>
      </CategoryWrapper>
      {array.map(([date, records]) =>
        <div key={date}>
          <Header>
            {date}
          </Header>
          <div>
            {records.map(r => {
              return <Item key={r.createdAt}>
                <div className="tags oneLine">
                  {r.tagIds
                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((result, span, index, array) =>
                      result.concat(index < array.length - 1 ? [span, ","] : [span]), [] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ${r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>)}
      <div>
      </div>
    </Layout>
  );
}

export default Statistics;