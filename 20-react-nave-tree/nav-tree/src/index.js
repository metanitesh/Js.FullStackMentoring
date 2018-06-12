import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Year from './component/year';
import registerServiceWorker from './registerServiceWorker';

var data = [{
    key: "year",
    season: 2018,
    matchData: [{
        key: "match",
        name: "RCC",
        chartData: [1, 2, 3]
    },
    {
        key: "match",
        name: "RCB",
        chartData: [4, 6, 7]
    },
    {
        key: "match",
        name: "KKC",
        chartData: [1, 2, 3]
    }]
},{
    key: "year",
    season: 2016,
    matchData: [{
        key: "match",
        name: "RCB",
        chartData: [1, 2, 3]
    },
    {
        key: "match",
        name: "RCB",
        chartData: [4, 6, 7]
    },
    {
        key: "match",
        name: "KKC",
        chartData: [1, 2, 3]
    }]
}];

// {
//     key: "year",
//     season: 2017,
//     data: [{
//         key: "match",
//         data: [{
//             key: "RCB",
//             data: [1, 2, 3]
//         }, {
//             key: "KCB",
//             data: [1, 2, 3]
//         }]
//     }]
// }


ReactDOM.render(<Year data={data} />, document.getElementById('root'));
registerServiceWorker();
