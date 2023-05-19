import React, { Component } from "react";

class QrveyEndUser extends Component {

    constructor(props) {
        super();
        this.state = {
            domain: props.settings.domain,
            qv_token: null
        };
    }

    componentWillMount() {
        // Simple POST request with a JSON body using fetch
        //Here you'll target your parentApp backend to create the JWT token. 
        //For this sample we're targeting the qrvey backend to do it
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'd41d8cd98f00b204e9800998ecf8427e'},
            body: JSON.stringify({ 'appid': '7QPNzup4O', 'pageid': 'wgDDvWmDk', 'userid': 'vc1xpuGjz', 'expiresIn': '1w' })
        };

        fetch(this.state.domain + '/devapi/v4/core/login/token', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({qv_token: data.token });
            });
    }

    htmlTag(config){
        console.log(config);
        window['endUserConfig'] = config;
        return <qrvey-end-user settings={'endUserConfig'} />
    }

    loading(){
        return <p style={{textAlign: "center", fontSize: "20px"}}>Loading Widget...</p>
    }

    render() {
        return (
            this.state.qv_token ? this.htmlTag(this.state) : this.loading()
        );
    }
};

export default QrveyEndUser;
