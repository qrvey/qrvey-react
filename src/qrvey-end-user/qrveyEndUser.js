import React from 'react';

const QrveyEndUser = ({settings}) => {

    window['endUserConfig'] = settings;

    return <qrvey-end-user settings={'endUserConfig'}/>;
};

export default QrveyEndUser;
