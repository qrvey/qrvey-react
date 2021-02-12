import './App.css';
import QrveyBuilders from './qrvey-builders/builders';
import {importScript} from "./qrvey-builders/importScript";
import type {BuildersConfig} from "./qrvey-builders/buildersConfig.interface";

function App() {

  importScript('//580703004664postdev1qrveywidgets.s3.amazonaws.com/widgets-launcher/app.js');

  const configObject: BuildersConfig = {
    domain: 'https://manualqastg.qrvey.com',
    appid: 'L4NjFnKXK',
    userid: 'pwWErgJ',
    apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
  };

  return (
    <div className="App">
      <QrveyBuilders settings={configObject}/>
    </div>
  );
}

export default App;
