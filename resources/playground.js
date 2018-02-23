/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import 'playground.scss';

import InspirationBlock from 'components/inspiration-block/InspirationBlock';

const app = document.querySelector('[data-app]');

if (app) {
    ReactDOM.render(
        <div className="container">
            <InspirationBlock />
        </div>,
        app,
    );
}
