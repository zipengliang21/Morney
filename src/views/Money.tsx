import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

function Money() {
    return (
        <MyLayout className="">
            <TagsSection>
            </TagsSection>
            <NoteSection>
            </NoteSection>
            <CategorySection/>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>Delete</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>Clear</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    );
}

export default Money;