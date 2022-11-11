import './App.css';
import {importScript} from "./qrvey-end-user/importScript";
import type {EndUserConfig} from "./qrvey-end-user/endUserConfig.interface";
import QrveyEndUser from "./qrvey-end-user/qrveyEndUser";

function App() {

  importScript('https://d19cyxem0w5akp.cloudfront.net/widgets-launcher/app.js');

  const configObject: EndUserConfig = {
    domain: 'https://sandbox.qrveyapp.com'
  };

  return (
    <div className="App">
      <QrveyEndUser settings={configObject}/>
    </div>
  );
}

export default App;
