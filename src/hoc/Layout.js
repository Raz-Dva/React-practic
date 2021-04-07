import React from 'react';
import Child from './child'
// class Layout extends React.Component {
//     render() {
//         return (
//             <div>
//                 <hr />
//                 <h4>Layout</h4>
//                 <main>{this.props.children}</main>
//                 <Child />
//                 <hr />
//             </div>
//         )
//     }
// }
const Layout = function () {
    return (
        <div>
            <hr />
            <h4>Text</h4>            
            <Child />
            <hr />
        </div>
    )
}
export default Layout;