import './App.css';
import {importScript} from "./qrvey-end-user/importScript";
import QrveyEndUser from "./qrvey-end-user/qrveyEndUser";

function App() {

  importScript('//d2eratp8bneb6t.cloudfront.net/widgets-launcher/app.js');

  const configObject = {
    "api_key": 'd41d8cd98f00b204e9800998ecf8427e',
    "domain": 'https://demo.qrvey.com',
    "page_id": 'wgDDvWmDk',
    "app_id": '7QPNzup4O'
  };

  return (
    <div className="App">
      <QrveyEndUser settings={configObject}/>
    </div>
  );
}

export default App;
