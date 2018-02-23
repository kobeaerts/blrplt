import React from 'react';
import PropTypes from 'prop-types';

import 'components/teasers/recipe-teaser.scss';

const RecipeTeaser = ({ recipe }) => (
    <div className="recipe-teaser">
        <div
            className="recipe-teaser__image"
            style={{ backgroundImage: `url('${recipe.image}')` }}
        />
        <div className="recipe-teaser__content">
            <h3 className="recipe-teaser__title">{recipe.title}</h3>
            <div className="recipe-teaser__metadata">
                <span>{recipe.category}</span>
                <span>{recipe.duration}</span>
            </div>
        </div>
    </div>
);

RecipeTeaser.propTypes = {
    recipe: PropTypes.shape({}).isRequired,
};

export default RecipeTeaser;
