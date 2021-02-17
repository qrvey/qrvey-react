<div align="center">
	<img alt="Qrvey Logo" src="https://s3.amazonaws.com/cdn.qrvey.com/images/qrvey-logo.svg" width="200" />
</div>

# Using Qrvey in React :cyclone:

Qrvey is a Web Component-based analytics platform, using multiples technologies such as [stenciljs](https://github.com/ionic-team/stencil), [Angular](https://github.com/angular/angular) and [vue.js](https://github.com/vuejs/vue).

In this repository we are giving instructions to use the **qrvey-end-user** component in [React 17](https://es.reactjs.org/).

## Table of contents

* [Installation](#installation)
* [Creating End User Component](#creating-end-user-component)
* [Using End User](#using-end-user)
* [Demo](#demo)
* [Troubleshooting](#troubleshooting)

## Installation

Use a script tag linked to a CDN copy of your Qrvey loader distribution, for example:

    // index.html
    <script src="//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js" type="text/javascript">

Or you can load the script dynamically, in this example we are going to use this function in [app.js](https://github.com/qrvey/qrvey-react/blob/master/src/App.js):

	const importScript = (url) => {  
      document.body.appendChild(Object.assign(document.createElement('script'), {  
	      type: 'text/javascript',  
	      src: url  
      }));}
	
	importScript("//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js");


## Creating End User component

Now you are ready to use the **qrvey-end-user** element. To avoid issues with non-scalar data (data that is not a string or number) **qrvey-end-user** was designed to work with a string property called **settings**, and a variable in **window** which name should be the exact value of the **settings** property.
For this example we are going to wrap the web component in a React Component:

    // qrvey-end-user/qrveyEndUser.js
    import React from 'react';  
    import type {EndUserConfig} from "./endUserConfig.interface";  
    const QrveyEndUser: React.FC<{ settings: EndUserConfig }> = ({settings}) => {
	    window['endUserConfig'] = settings;
	    return <qrvey-end-user settings={'endUserConfig'}/>;  
	};
	
	export default QrveyEndUser;

## Using End User

The final step is the setup of a valid configuration object. For more details about **qrvey-end-user** configuration object, read [official docs](https://partners.qrvey.com/documentation/).


    // app.js
    import './App.css';  
    import QrveyEndUser from "./qrvey-end-user/qrveyEndUser";  
    import {importScript} from "./qrvey-end-user/importScript";  
    import type {EndUserConfig} from "./qrvey-end-user/endUserConfig.interface";  
    
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

## Demo

In the root directory, run:

    npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![Preview End User Demo](https://s3.amazonaws.com/cdn.qrvey.com/images/preview-end-user.png)

## Troubleshooting
If you are experiencing issues with **qrvey-end-user** element in your React app, please contact Qrvey team.
