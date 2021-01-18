import React from 'react';

const QrveyBuilders: React.FC<{ settings: string }> = ({settings}) => {

    window['buildersConfig'] = settings;

    return <qrvey-builders settings={'buildersConfig'}/>;
};

export default QrveyBuilders;
