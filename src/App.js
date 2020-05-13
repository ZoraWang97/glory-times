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

function App() {
  const pics= [
    {
      picNum: '001',
      picName: 'SkyHunter',
      picSize: '100 x 160',
      picRRP: '$120',
      picType:'',
      nowPrice: '$100'
    },{
      picNum: '001',
      picName: 'SkyHunter',
      picSize: '100 x 160',
      picRRP: '$120',
      picType:'',
      nowPrice: '$100'
    },{
      picNum: '001',
      picName: 'SkyHunter',
      picSize: '100 x 160',
      picRRP: '$120',
      picType:'',
      nowPrice: '$100'
    },{
      picNum: '001',
      picName: 'SkyHunter',
      picSize: '100 x 160',
      picRRP: '$120',
      picType:'',
      nowPrice: '$100'
    }
  ]
  return (
    <div className="App">
      <div className="container">

        <nav className="nav">
          <span className="nav--logoName">
            <img src={GloryTimesLogo} className="nav--logo"></img>
            <span className="nav--name">Glroy Times</span>
          </span>
          <span className="nav--clicks">
            <span className="nav--click"><button >Login</button>&nbsp;/&nbsp;<button >Register</button></span>
            <a className="nav--click" href="#payment">Payment</a>
            <a className="nav--click" href="#contact">Contacts</a>
            <a className="nav--click" href="#contact">About us</a>
          </span>
        </nav>


        <div className="content">
          <div className="content--sort">
            <a className="content--sortTypes" href="#newArrivals" onClick={()=>{}}>New Arrivals</a>
            <a className="content--sortTypes" href="#livingRoom" onClick={()=>{}}>Living room</a>
            <a className="content--sortTypes" href="#bedroom" onClick={()=>{}}>Bedroom</a>
            <a className="content--sortTypes" href="#kitchen" onClick={()=>{}}>Kitchen</a>
          </div>

          <div className="content--picsArea">
            <div className="content--blocks">
              <p id="newArrivals"className="content--title">! New Arrivals !</p>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={Twig}></img>
            </div>

            <div className="content--blocks">
              <p id="livingRoom"className="content--title">~ Living Room ~</p>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
            </div>

            <div className="content--blocks">
              <p id="bedroom" className="content--title">~ Bedroom ~</p>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
              <img className='content--picComponent' src={FieldSunset}></img>
            </div>


            <div className="content--blocks">
              <p id="kitchen" className="content--title">~ Kitchen ~</p>
              <img className='content--picComponent' src={FieldSunset}></img>
              <img className='content--picComponent' src={MountMist}></img>
              <img className='content--picComponent' src={SkyHunter}></img>
              <img className='content--picComponent' src={TreeSnowMist}></img>
              <img className='content--picComponent' src={TreeSnowSun}></img>
              <img className='content--picComponent' src={Twig}></img>
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
            <li>Follow us :&nbsp;<img src={Facebook} className="info--logo"></img>&nbsp;<a href='https://www.facebook.com/glorytimespainting' className="info--link">GloryTimes</a></li>
            <li>Phone:  +61 434 112 658 (Steven)</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+61 434 848 628 (Beth)</li>
            
            <li>E-mail:&nbsp;&nbsp;&nbsp;glorytimespty@gmail.com</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bethtangtw@gmail.com</li>
          </span>
        </div>
      </div>
      
    </div>
      /* <header className="App-header">
        <p>
          Welcome to Glory Times
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </a>
      </header> */
    

  );
}

export default App;
