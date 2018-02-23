import React from 'react';
import PropTypes from 'prop-types';

import 'components/teasers/immersive-recipe-teaser.scss';

const ImmersiveRecipeTeaser = ({ recipe }) => (
    <div
        className="immersive-recipe-teaser"
        style={{ backgroundImage: `url('${recipe.image}')` }}
    >
        <div className="immersive-recipe-teaser__content">
            <h3 className="immersive-recipe-teaser__title">{recipe.title}</h3>
            <div className="immersive-recipe-teaser__metadata">
                <span>{recipe.category}</span>
                <span>{recipe.duration}</span>
            </div>
        </div>
    </div>
);

ImmersiveRecipeTeaser.propTypes = {
    recipe: PropTypes.shape({}).isRequired,
};

export default ImmersiveRecipeTeaser;
