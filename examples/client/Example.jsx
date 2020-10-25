import React from 'react';
import '@atlaskit/css-reset';
import { hot } from 'react-hot-loader/root';

import { Description, Code, Component, Properties } from '@scripty/react-examples';
import { ReactLayout } from '../../src';

const Example = () => {

    const code = `import React from 'react';
import { ReactLayout } from '@scripty/react-layout';

const App = () => {
    return <ReactLayout color={'#000'}/>
}
`
    const propertiesData = [
        {
            property: 'color',
            description: 'hex color',
            type: 'string',
            default: '#fff'
        }
    ]

    return (
        <Description title={'ReactLayout'}>
            <Component>
                <ReactLayout color={'#000'}/>
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
};

export default hot(Example);
