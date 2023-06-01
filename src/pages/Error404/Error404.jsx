import React from 'react';

import AllErrors from '../../components/AllErrors/AllErrors';


function AllErrors404() {
    document.title = 'Kasa - 404';

    return (
        <AllErrors
            title="404"
            subtitle="Oups! La page que "
            subtitle2="vous demandez n'existe pas"
        />
    );
}

export default AllErrors404;
