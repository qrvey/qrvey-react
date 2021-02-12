import React from 'react';
import type {BuildersConfig} from "./buildersConfig.interface";

const QrveyBuilders: React.FC<{ settings: BuildersConfig }> = ({settings}) => {

    window['buildersConfig'] = settings;

    return <qrvey-builders settings={'buildersConfig'}/>;
};

export default QrveyBuilders;
