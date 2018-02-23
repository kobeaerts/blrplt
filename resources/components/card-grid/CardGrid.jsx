import React from 'react';
import PropTypes from 'prop-types';

import 'components/card-grid/card-grid.scss';

const CardGrid = ({ children }) => (
    <div className="card-grid">
        {children}
    </div>
);

CardGrid.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardGrid;
