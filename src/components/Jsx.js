import React from 'react'
const Jsx =()=>{
    // return (
    //     <div className="hellowClass">
    //         <h1>Jsx</h1>
    //     </div>

    // )
    return React.createElement(
        'div',
        {id:'hello',className:'helloClass'},
        React.createElement(
            'h1',null,'hellow Riaz'
        )
    )
    
}
// function Jsx(){
//     return <h1>Function way return </h1>
// }

export default Jsx