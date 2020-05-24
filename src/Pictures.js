import React from 'react';

function Pictures ({pic}){
    return (
        <div className='content--picComponent'>
            <img className="content--picComponentPic" src={pic.picSrc}></img>
            <div className="content--picComponentInfo">
                <span className="content--picComponentInfoItem">#{pic.id}: {pic.picName}</span>
                <span className="content--picComponentInfoItem">Size: {pic.picSize}</span>
                <span className="content--picComponentInfoItem">Type: {pic.picType}</span>
                <span className="content--picComponentInfoItem">RRP:&nbsp;
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
