import './App.css';
import {importScript} from "./qrvey-end-user/importScript";
import type {EndUserConfig} from "./qrvey-end-user/endUserConfig.interface";
import QrveyEndUser from "./qrvey-end-user/qrveyEndUser";

function App() {

  importScript('//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js');

  const configObject: EndUserConfig = {
    domain: 'https://sandbox.qrveyapp.com',
    appid: 'H2UuWJeIp',
    apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
  };

  return (
    <div className="App">
      <QrveyEndUser settings={configObject}/>
    </div>
  );
}

export default App;
