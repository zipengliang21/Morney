import React, {useState} from "react";
import Layout from "../components/Layout";
import {CategorySection} from "./Money/CategorySection";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";

const CategoryWrapper = styled.div`
      background: white;
`;

function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const {records} = useRecords();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={(category) => setCategory(category)}/>
      </CategoryWrapper>
      <div>
        {records.map(r => {
          return <div>
            {r.amount}
          </div>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;