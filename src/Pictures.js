import React from 'react';

function Pictures ({pic}){
    return (
        <div className='content--picComponent'>
            <img className="content--picComponentPic" src={pic.picSrc}></img>
            <div className="content--picComponentInfo">
                <span className="content--picComponentInfoItem">Item No:{pic.id}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">Name:{pic.picName}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">Size:{pic.picSize}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">Type:{pic.picType}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">RRP:{pic.picRRP}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">Now:{pic.nowPrice}</span>
            </div>
        </div>
    )
}


export default Pictures
