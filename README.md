<div style="text-align: center">
	<img alt="Qrvey Logo" src="https://s3.amazonaws.com/cdn.qrvey.com/images/qrvey-logo.svg" width="200" />
</div>

# Using Qrvey in React :cyclone:

Qrvey is a Web Component-based analytics platform, using multiples technologies such as [stenciljs](https://github.com/ionic-team/stencil), [Angular](https://github.com/angular/angular) and [vue.js](https://github.com/vuejs/vue).

In this repository we are giving instructions to use the **qrvey-builders** component in [React 17](https://es.reactjs.org/).

## Table of contents

* [Installation](#installation)
* [Creating Builders Component](#creating-builders-component)
* [Using Builders](#using-builders)
* [Demo](#demo)
* [Troubleshooting](#troubleshooting)

## Installation

Use a script tag linked to a CDN copy of your Qrvey loader distribution, for example:

    <script src="//580703004664postdev1qrveywidgets.s3.amazonaws.com/widgets-launcher/app.js" type="text/javascript">

Or you can load the script dynamically, in this example we are going to use this function in [app.js](https://github.com/qrvey/qrvey-react/blob/master/src/App.js):

	const importScript = (url) => {  
      document.body.appendChild(Object.assign(document.createElement('script'), {  
	      type: 'text/javascript',  
	      src: url  
      }));}
	
	importScript("//580703004664postdev1qrveywidgets.s3.amazonaws.com/widgets-launcher/app.js");


## Creating Builders component

Now you are ready to use the **qrvey-builders** tag. To avoid issues with non-scalar data (data that is not a string or number) **qrvey-builders** element was designed to work with a string property called **settings**, and a variable in **window** which name should be the exact value of the **settings** property.
For this example we are going to wrap the web component in a React Component:

    // qrvey-builders/builders.js
    import React from 'react';  
    import type {BuildersConfig} from "./buildersConfig.interface";  
    const QrveyBuilders: React.FC<{ settings: BuildersConfig }> = ({settings}) => {
	    window['buildersConfig'] = settings;  
	    return <qrvey-builders settings={'buildersConfig'}/>;  
	};
	
	export default QrveyBuilders;

## Using Builders

The final step is the setup of a valid configuration object. For more details about Qrvey configurations object, read [official docs](https://qrvey.com/).


    // app.js
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

## Demo

In the root directory, run:

    npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![Preview Builders Demo](https://s3.amazonaws.com/cdn.qrvey.com/images/preview-builders.png)

## Troubleshooting
If you are experiencing issues using **qrvey-builders** in your React, app please contact Qrvey team.
