import './App.css';
import {importScript} from "./qrvey-end-user/importScript";
import QrveyEndUser from "./qrvey-end-user/qrveyEndUser";

function App() {

  importScript('//d2eratp8bneb6t.cloudfront.net/widgets-launcher/app.js');

  const configObject = {
    "domain": 'https://demo.qrvey.com'
  };

  return (
    <div className="App">
      <QrveyEndUser settings={configObject}/>
    </div>
  );
}

export default App;
