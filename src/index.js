import React from 'react';
import ReactDOM from 'react-dom';
import pro1 from './images/p1.jpg';
import pro2 from './images/p2.jpg';
import pro3 from './images/p3.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import './index.css';

function Post(props) {
    return <div className="post">
        <img alt = { props.name }
    src = { props.profile }
    className = "profile" align="left"/>
        <span className = "name" > { props.name } </span>
        <br/>
        <span className = "date" > { props.date } </span>
        <p className = "text" > { props.text } </p>
        <img alt = "post pic"
    src = { props.pic }
    className = "pic" />
    <p className="r1">
    <span className="sp1">
    <a href="#" className="link1">Likes</a>
    <a href="#" className="link2">{props.likes}</a>
    </span>
    <span className="sp2">
    <a href="#" className="link3">{props.comments} comments</a>
    <a href="#" className="link4">{props.shares} shares</a>
    </span>
    </p>
    <p className="r2">
    <button className="btn1">Like</button>
    <button className="btn2">Comment</button>
    <button className="btn3">Share</button>
    </p>
    </div>
}

ReactDOM.render(
<div className="div">
    <Post name = "Sumair-ul-haq"
    profile = { pro1 }
    date = "13/07/2021"
    text = "#Ktm"
    pic = { img1 }
    likes="192"
    comments="16"
    shares="9" />
    <Post name = "Umair"
    profile = { pro2 }
    date = "7/05/2021"
    text = "#Iphone12 Pro Max"
    pic = { img2 }
    likes="2M"
    comments="1054"
    shares="105"
    />
    <Post name = "Uzair"
    profile = { pro3 }
    date = "27/04/2021"
    text = "#BMW"
    pic = { img3 }
    likes="500"
    comments="150"
    shares="60"
    />
    </div>,
    document.querySelector('#root')
)