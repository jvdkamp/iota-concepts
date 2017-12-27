// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1 , label: '1', color:'green'},
    {id: 2 , label: '2'},
    {id: 3 , label: '3'},
    {id: 4 , label: '4'},
    {id: 5 , label: '5'},
    {id: 6 , label: '6', color:'red'},
    {id: 7 , label: '7', color:'red'},
    {id: 8 , label: '8', color:'red'},
    {id: 9 , label: '9', color:'gray'},
    {id: 10 , label: '10'},
    {id: 11 , label: '11'},
    {id: 12 , label: '12'},
    {id: 13 , label: '13'},
    {id: 14 , label: '14'},
    {id: 15 , label: '15', color:'red'},
    {id: 16 , label: '16'},
    {id: 17 , label: '17', color:'gray'},
    {id: 18 , label: '18'},
    {id: 19 , label: '19'},
    {id: 20 , label: '20'},
    {id: 21 , label: '21'},
    {id: 22 , label: '22'},
    {id: 23 , label: '23', color:'red'},
    {id: 24 , label: '24', color:'gray'},
    {id: 25 , label: '25'},
    {id: 26 , label: '26'},
    {id: 27 , label: '27'},
    {id: 28 , label: '28'},
    {id: 29 , label: '29'},
    {id: 30 , label: '30', color:'red'},
    {id: 31 , label: '31', color:'red'},
    {id: 32 , label: '32', color:'gray'},
    {id: 33 , label: '33'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 18, to:  1, arrows:'to'},
    {from: 10, to:  1, arrows:'to'},
    {from: 26, to: 11, arrows:'to'},
    {from: 11, to:  1, arrows:'to'},
    {from: 11, to: 10, arrows:'to'},
    {from:  2, to:  1, arrows:'to'},
    {from:  2, to: 18, arrows:'to'},
    {from:  3, to:  2, arrows:'to'},
    {from:  3, to: 18, arrows:'to'},
    {from:  4, to:  3, arrows:'to'},
    {from:  4, to: 19, arrows:'to'},
    {from:  5, to:  4, arrows:'to'},
    {from:  5, to: 27, arrows:'to'},
    {from:  6, to:  5, arrows:'to'},
    {from:  6, to: 22, arrows:'to'},
    {from:  7, to:  6, arrows:'to'},
    {from:  7, to: 22, arrows:'to'},
    {from:  8, to:  7, arrows:'to'},
    {from:  8, to: 23, arrows:'to'},
    {from:  9, to: 23, arrows:'to'},
    {from: 10, to:  1, arrows:'to'},
    {from: 11, to:  1, arrows:'to'},
    {from: 12, to: 11, arrows:'to'},
    {from: 12, to:  2, arrows:'to'},
    {from: 13, to: 12, arrows:'to'},
    {from: 13, to:  3, arrows:'to'},
    {from: 14, to: 13, arrows:'to'},
    {from: 14, to: 28, arrows:'to'},
    {from: 15, to: 14, arrows:'to'},
    {from: 15, to:  6, arrows:'to'},
    {from: 16, to: 15, arrows:'to'},
    {from: 16, to: 30, arrows:'to'},
    {from: 17, to: 16, arrows:'to'},
    {from: 17, to:  8, arrows:'to'},
    {from: 19, to:  2, arrows:'to'},
    {from: 19, to: 18, arrows:'to'},
    {from: 20, to: 19, arrows:'to'},
    {from: 20, to: 13, arrows:'to'},
    {from: 21, to: 20, arrows:'to'},
    {from: 21, to: 25, arrows:'to'},
    {from: 22, to: 21, arrows:'to'},
    {from: 22, to:  5, arrows:'to'},
    {from: 23, to: 22, arrows:'to'},
    {from: 23, to: 25, arrows:'to'},
    {from: 24, to: 23, arrows:'to'},
    {from: 24, to:  8, arrows:'to'},
    {from: 25, to: 19, arrows:'to'},
    {from: 25, to: 20, arrows:'to'},
    {from: 27, to: 26, arrows:'to'},
    {from: 27, to: 11, arrows:'to'},
    {from: 28, to: 27, arrows:'to'},
    {from: 28, to: 33, arrows:'to'},
    {from: 29, to: 38, arrows:'to'},
    {from: 29, to: 14, arrows:'to'},
    {from: 30, to: 29, arrows:'to'},
    {from: 30, to:  5, arrows:'to'},
    {from: 31, to: 30, arrows:'to'},
    {from: 31, to: 15, arrows:'to'},
    {from: 32, to: 31, arrows:'to'},
    {from: 32, to: 16, arrows:'to'},
    {from: 33, to: 26, arrows:'to'},
    {from: 33, to: 12, arrows:'to'}


]);

// create a network
var container = document.getElementById('thetangle');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};
// var options = {
//     edges: {
//         smooth: {
//             type: 'cubicBezier',
//             forceDirection: 'horizontal',
//             roundness: 0.4
//         }
//     },
//     layout: {
//         hierarchical: {
//             enabled:true,
//             direction: 'UD',
//             parentCentralization:false
//         }
//     },
//     physics:false
// };
var network = new vis.Network(container, data, options);
