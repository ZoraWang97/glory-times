import React from 'react';
import GloryTimesLogo from './pics/GloryTimesLogo.jpg';
import Facebook from './pics/facebook.png';
import Paypal from './pics/paypal.png';
import Banktransfer from './pics/banktransfer.png';

/* ⬇  从这开始就是展示的画了，从 ./pics/文件夹导入 */
import FieldSunset from './pics/FieldSunset.jpg';
import MountMist from './pics/MountMist.jpg';
import SkyHunter from './pics/SkyHunter.jpg';
import TreeSnowMist from './pics/TreeSnowMist.jpg';
import TreeSnowSun from './pics/TreeSnowSun.jpg';
import Twig from './pics/Twig.png';
/* ⬆ */

import './App.css';
import Pictures from './Pictures';

function App() {

  /* All product table */
  const allPics = [
    {
      id: 1,
      picName: 'SkyHunter',
      picSize: '120x160',
      rrpPrice: '$120',
      picType:'Print',
      location: 'bedroom',
      new: true,
      nowPrice: '',
      picSrc: SkyHunter
    },{
      id: 2,
      picName: 'TreeSnowSun',
      picSize: '100x130',
      rrpPrice: '$110',
      picType:'Water',
      location:'livingRoom',
      new: false,
      nowPrice: '$100',
      picSrc: TreeSnowSun
    },{
      id: 3,
      picName: 'FieldSunset',
      picSize: '90x150',
      rrpPrice: '$140',
      picType:'Print',
      location:'bedroom',
      new: true,
      nowPrice: '',
      picSrc: FieldSunset
    },{
      id: 4,
      picName: 'TreeSnowMist',
      picSize: '100x160',
      rrpPrice: '$150',
      picType:'Oil',
      location:'livingRoom',
      new: true,
      nowPrice: '',
      picSrc: TreeSnowMist
    },{
      id: 5,
      picName: 'FieldSunset',
      picSize: '90x150',
      rrpPrice: '$140',
      picType:'Print',
      location:'kitchen',
      new: false,
      nowPrice: '$125',
      picSrc: FieldSunset
    },{
      id: 6,
      picName: 'MountMist',
      picSize: '100x160',
      rrpPrice: '$150',
      picType:'Oil',
      location:'kitchen',
      new: false,
      nowPrice: '$130',
      picSrc: MountMist
    },{
      id: 7,
      picName: 'SkyHunter',
      picSize: '120x160',
      rrpPrice: '$120',
      picType:'Print',
      location:'bedroom',
      new: false,
      nowPrice: '$100',
      picSrc: SkyHunter
    },{
      id: 8,
      picName: 'TreeSnowSun',
      picSize: '100x130',
      rrpPrice: '$100',
      picType:'Water',
      location:'bedroom',
      new: true,
      nowPrice: '',
      picSrc: TreeSnowSun
    },{
      id: 9,
      picName: 'FieldSunset',
      picSize: '90x150',
      rrpPrice: '$140',
      picType:'Print',
      location:'kitchen',
      new: false,
      nowPrice: '$120',
      picSrc: FieldSunset
    },{
      id: 10,
      picName: 'TreeSnowMist',
      picSize: '100x160',
      rrpPrice: '$150',
      picType:'Oil',
      location:'bedroom',
      new: false,
      nowPrice: '$125',
      picSrc: TreeSnowMist
    },{
      id: 11,
      picName: 'FieldSunset',
      picSize: '90x150',
      rrpPrice: '$140',
      picType:'Print',
      location:'livingRoom',
      new: false,
      nowPrice: '$120',
      picSrc: FieldSunset
    },{
      id: 12,
      picName: 'MountMist',
      picSize: '100x160',
      rrpPrice: '$150',
      picType:'Oil',
      location:'kitchen',
      new: true,
      nowPrice: '',
      picSrc: MountMist
    },{
      id: 13,
      picName: 'Twig',
      picSize: '120x160',
      rrpPrice: '$120',
      picType:'Print',
      location:'bedroom',
      new: false,
      nowPrice: '$105',
      picSrc: Twig
    }
  ];

  const newList = allPics.map(pic => {if(pic.new===true) return <Pictures key={pic.id} pic={pic}/>});
  const livingList = allPics.map(pic => {if(pic.location==='livingRoom') return <Pictures key={pic.id} pic={pic}/>});
  const bedroomList = allPics.map(pic => {if(pic.location==='bedroom') return <Pictures key={pic.id} pic={pic}/>});
  const kitchenList = allPics.map(pic => {if(pic.location==='kitchen') return <Pictures key={pic.id} pic={pic}/>});

  return (
    <div className="App" id="top">
      <div className="container">



        <nav className="nav">
          <span className="nav--logoName">
            <img src={GloryTimesLogo} className="nav--logo" ></img>
            <span className="nav--name">Glroy Times</span>
          </span>
          <span className="nav--clicks">
            {/* <span className="nav--click"><button >Login</button>&nbsp;/&nbsp;<button >Register</button></span> */}
            <a className="nav--click" href="#payment">Payment</a>
            <a className="nav--click" href="#contact">Contacts</a>
            <a className="nav--click" href="#contact">About us</a>
          </span>
        </nav>




        <div className="content">
          <div className="content--sort">
            <a className="content--sortTypes" href="#newArrivals">New Arrivals</a>
            <a className="content--sortTypes" href="#livingRoom">Living room</a>
            <a className="content--sortTypes" href="#bedroom">Bedroom</a>
            <a className="content--sortTypes" href="#kitchen">Kitchen</a>
            <a className="content--TOPclick" href="#top">⬆</a>
          </div>

          <div className="content--picsArea">
            <p id="newArrivals"className="content--title">❕New Arrivals ❕</p>
              <div className="content--blocks">
                {newList}
              </div>

              <p id="livingRoom"className="content--title">~ Living Room ~</p>
              <div className="content--blocks">
                {livingList}
              </div>

              <p id="bedroom" className="content--title">~ Bedroom ~</p>
              <div className="content--blocks">
                {bedroomList}
              </div>


              <p id="kitchen" className="content--title">~ Kitchen ~</p>
              <div className="content--blocks">
                {kitchenList}
              </div>
            </div>
        </div>




        <div className="info">
          <span id = "payment" className="info--payment">
            <span>
              <ul>Payment types:</ul>
              <li><img src={Banktransfer} className="info--logo"></img>&nbsp;<text>Bank Transfer:</text></li>
              <li>Account Name: Glory Times</li>
              <li>BSB: xxx-xxx</li>
              <li>Account Number: xxx xxx xxx</li>
            </span>
            <span>
              <ul>&nbsp;</ul>
                <li><img src={Paypal} className="info--logo"></img>&nbsp;<text>Paypal:</text></li>
                <li>Account Name: Glory Times</li>
                <li>Phone Number: xxx-xxx</li>
                <li>E-mail: xxx xxx xxx</li>
            </span>
          </span>
          <span id = "contact" className="info--contact">
            <ul>Contact us:</ul>
            <li>Follow us :&nbsp;
              <img src={Facebook} className="info--logo"></img>&nbsp;
              <a href='https://www.facebook.com/glorytimespainting/shop/' className="info--link" target="_blank">GloryTimes</a>
            </li>
            <li>Phone:  +61 434 112 658 (Steven)</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+61 434 848 628 (Beth)</li>
            
            <li>E-mail:&nbsp;&nbsp;&nbsp;glorytimespty@gmail.com</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bethtangtw@gmail.com</li>
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default App;
