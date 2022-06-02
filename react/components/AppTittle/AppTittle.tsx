import React, { Component } from 'react';

type AppTittleProps = {
    title?: string;
    quote?: string;
};

class AppTittle extends Component<AppTittleProps> {
    render() {
        const {
            title = '',
            quote = '',
        } = this.props;

        return <>
            <h1>{title}</h1>
            <h2>{quote}</h2>
        </>;
    }
}

export default AppTittle;
