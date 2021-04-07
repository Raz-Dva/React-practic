import React from 'react';
import { AppContext } from '../App'
const child = () => (
    <div>
        <AppContext.Consumer>
            {context => {
                console.log(context);
                return (<div>
                    <div>{context}</div>

                </div>
                )
            }}

        </AppContext.Consumer>
    </div>
)
export default child;