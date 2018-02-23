import React from 'react';

import {
    smoothScrollTo,
} from 'helpers';

import CardGrid from 'components/card-grid/CardGrid';
import RecipeTeaser from 'components/teasers/RecipeTeaser';

import 'components/inspiration-block/inspiration-block.scss';

const shuffle = (array) => {
    /* eslint-disable */
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
    /* eslint-enable */
};

const teasers = [
    {
        title: 'Parfait van koffie, ganache van chocolade en orangettes',
        image: 'https://images.vrt.be/dako2017_800s_j75/2018/02/12/338db368-0fe2-11e8-abcc-02b7b76bf47f.jpg',
        category: 'Dessert',
        duration: '50 min',
    },
    {
        title: 'Hutsepot met casselerrib en spek',
        image: 'https://images.vrt.be/dako2017_800s_j75/2018/02/09/d20467cf-0d87-11e8-abcc-02b7b76bf47f.jpg',
        category: 'Hoofdgerecht',
        duration: '25 min',
    },
    {
        title: 'Bhaji\'s met uienchutney',
        image: 'https://images.vrt.be/dako2017_800s_j75/2018/02/08/495e3cae-0cd5-11e8-abcc-02b7b76bf47f.jpg',
        category: 'Hoofdgerecht',
        duration: '90 min',
    },
];

const blocks = [
    {
        title: 'Meest Recent',
        image: 'https://png.icons8.com/material/100/000000/clock.png',
        teasers: shuffle(teasers),
    },
    {
        title: 'Valentijn',
        image: 'https://png.icons8.com/material/100/000000/unsplash.png',
        teasers: shuffle(teasers),
    },
    {
        title: 'Barbeque',
        image: 'https://png.icons8.com/material/100/000000/fourth-wave.png',
        teasers: shuffle(teasers),
    },
    {
        title: 'Ovenschotels',
        image: 'https://png.icons8.com/material/100/000000/netapp.png',
        teasers: shuffle(teasers),
    },
    {
        title: 'Jouw Favorieten',
        image: 'https://png.icons8.com/material/100/000000/microsoft-classroom.png',
        teasers: shuffle(teasers),
    },
];

class InspirationBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSectionIndex: 0,
        };
    }

    componentDidMount = () => {
        const items = this.itemsContainer.querySelectorAll('[data-index]');

        const checkScrollPosition = () => {
            let found = false;

            for (let i = 0; i < items.length && found === false; i += 1) {
                const item = items[i];

                if (item.getBoundingClientRect().top >= 0) {
                    const {
                        index,
                    } = item.dataset;

                    found = true;
                    this.setState({ activeSectionIndex: +index });
                }
            }

            setTimeout(() => {
                requestAnimationFrame(checkScrollPosition);
            }, 1000 / 60);
        };

        requestAnimationFrame(checkScrollPosition);
    };

    selectBlock = (index) => {
        const element = document.querySelector(`[data-index="${index}"]`);

        if (element) {
            smoothScrollTo(element);
        }
    };

    render = () => {
        const {
            activeSectionIndex,
        } = this.state;

        return (
            <div className="inspiration-block">
                <div className="inspiration-block__menu">
                    <div className="inspiration-block__menu-sticky">
                        {blocks.map((block, index) => (
                            <button
                                className={index === activeSectionIndex ? 'inspiration-block__menu-item is-active' : 'inspiration-block__menu-item'}
                                onClick={() => { this.selectBlock(index); }}
                            >
                                <img src={block.image} alt="" />
                                {block.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="inspiration-block__items" ref={(c) => { this.itemsContainer = c; }}>
                    {blocks.map((block, index) => (
                        <div
                            className="inspiration-block__item inspiration-block-item"
                            data-index={index}
                        >
                            <h2 className="inspiration-block-item__title">{block.title}</h2>
                            <CardGrid>
                                {block.teasers.map(teaser => <RecipeTeaser recipe={teaser} />)}
                            </CardGrid>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default InspirationBlock;
