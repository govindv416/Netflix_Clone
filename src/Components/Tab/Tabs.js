import React from "react";
import { tabLabels } from "./Constant";
import './Tabs.css'
import {Link} from 'react-router-dom'
const Tabs = ({activeTabName, onClickTab}) => {
  const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;

  const renderTabTitle = (tabTitle, isActive, icon, id) => {
    return (
      <div
        id={id}
        onClick={() => onClickTab(tabTitle)}
        className={`tab-item ${isActive && "tab-border"}`}
      >
        <i className={icon}></i>
        <p>{tabTitle}</p>
      </div>
    );
  };

  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName === CANCEL_AT_ANY_TIME &&(
        <section className="tab-content">
        <div className="container">

        <div id="tab-1-content" className={`tab-content-item ${activeTabName===CANCEL_AT_ANY_TIME &&"show"}`}> 
            <div className="tab-1-content-inner">
              <div> <p className="text-lg">  If You Decide Netflix isn't for you - No problem. No Commitment .Cancle online anytime</p>
               <Link to ="/netflix-show" className="btn btn-lg"> Watch Free for 30 Days</Link>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt=""></img>
            </div>
        </div>
        </div>
        </section>
      )}
      {activeTabName===WATCH_ANYWHERE &&(
        <section className="tab-content">
        <div className="container">
        <div id="tab-2-content" className={`tab-content-item ${activeTabName===WATCH_ANYWHERE &&"show"}`}> 

        <div className='tab-2-content-top' >

        <p className="text-lg"> Watch TV Show And Movies Anytime, Anywhere -Personalized for You</p>
        <Link to='/netflix-show' className='btn btn-lg'>Watch Free For 30 Days</Link> 
        </div>

        <div className="tab-2-content-bottom">
          
          <div>
            <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="/"></img>
            <p className="text-dark">
              Smart TVs, PlayStation, Xbox, Cromecast, Apple TV, Blu-ray Players and more
            </p>
          </div>

          <div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="/"></img>
            <p className="text-dark">
            Save your favourites easily and always have something to watch.
            </p>
          </div>

          <div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="/"></img>
            <p className="text-dark">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
        </div>
        </div>
        </div>
        </section>



      )}
      {activeTabName===PICK_YOUR_PRICE &&(
        <section className="tab-content">
        <div className="container">
        <div id="tab-2-content" className={`tab-content-item ${activeTabName===PICK_YOUR_PRICE &&"show"}`}> 

        <div className='tab-2-content-top' >

        <p className="text-lg"> Choose One Plan and Watch Everything On Netflix</p>
        <Link to='/netflix-show' className='btn btn-lg'>Watch Free For 30 Days</Link>
          
        </div>
        <table className="table">
       
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standerd</th>
            <th>Premium</th>
          </tr>
        </thead>

        <tbody>
             <tr>
              <td>Mounthly price after free month ends on 11/06/2023</td>
              <td>$6.99</td>
              <td>$11.99</td>
              <td>$23.99</td>

             </tr>
             <tr>
              <td>Mounthly price after free month ends on 11/06/2023</td>
              <td>$6.99</td>
              <td>$11.99</td>
              <td>$23.99</td>

             </tr>
        </tbody>

        </table>
        </div>
        </div>
        </section>

      )}
    </>
  );
};

export default Tabs;