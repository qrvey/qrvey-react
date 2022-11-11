import React, { Component } from "react";
import type { EndUserConfig } from "./endUserConfig.interface";

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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'DOCUMENTATION_DEMO_API_KEY'},
            body: JSON.stringify({ 'appid': 'H2UuWJeIp', 'userid': 'ZreovaM', 'expiresIn': '1w' })
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
