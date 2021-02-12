import React from 'react';
import type {EndUserConfig} from "./endUserConfig.interface";

const QrveyEndUser: React.FC<{ settings: EndUserConfig }> = ({settings}) => {

    window['endUserConfig'] = settings;

    return <qrvey-end-user settings={'endUserConfig'}/>;
};

export default QrveyEndUser;
