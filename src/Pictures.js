import React from 'react';

function Pictures ({pic}){
    return (
        <div className='content--picComponent'>
            <img className="content--picComponentPic" src={pic.picSrc}></img>
            <div className="content--picComponentInfo">
                <span className="content--picComponentInfoItem">#{pic.id}: {pic.picName}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">Size: {pic.picSize}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">Type: {pic.picType}</span>&nbsp;&nbsp;
                <span className="content--picComponentInfoItem">RRP: 
                    <span className="content--picComponentPriceRRP">{pic.rrpPrice}</span>
                </span>
            </div>
            <div className="content--picComponentPrice">
                <span className="content--picComponentPriceNow">{pic.nowPrice}</span>
            </div>
        </div>
    )
}


export default Pictures
