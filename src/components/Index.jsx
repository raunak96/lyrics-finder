import React, { Fragment } from 'react';
import Tracks from './tracks/Tracks';
import Search from './Search';

const Index = () => {

    return (
        <Fragment>
            <Search />
            <Tracks />
        </Fragment>
    );
};

export default Index;