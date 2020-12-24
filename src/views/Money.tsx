import React, {useState} from 'react';
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

type Category = '-' | '+';

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj});
    };
    return (
        <MyLayout>
            <TagsSection selected={selected.tags}
                         onChange={(tags) => setSelected({
                                 ...selected,
                                 tags: tags
                             }
                         )}/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection value={selected.amount}
                              onChange={amount => onChange({amount})}
            />
        </MyLayout>
    );
}

export default Money;