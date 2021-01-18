import './App.css';
import QrveyBuilders from './qrvey-builders/builders';

function App() {

  const importScript = (url) => {
    document.body.appendChild(Object.assign(document.createElement('script'), {
      type: 'text/javascript',
      defer: true,
      src: url
    }));
  }

  importScript('https://580703004664postdev1qrveywidgets.s3.amazonaws.com/widgets-launcher/app.js');

  const configObject = {
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
