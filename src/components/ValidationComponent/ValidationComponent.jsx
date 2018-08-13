import React from 'react'

const validationComponent = (props) => {
    let stringMsg = "text is too large";
    if (props.lengthPara<= 5){
        stringMsg = "text is too small";
    }


    return (
        <div>
            <h1>{stringMsg}</h1>
        </div>);
}
    export default validationComponent;