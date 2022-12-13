import "./styles.css";
import React from 'react';


let curDate = new Date();
curDate=curDate.getHours();

let greeting='';
 
const cssStyle={};
if(curDate>=1 && curDate<12){
greeting='Good Morning';
cssStyle.color="green";
}else if(curDate>=12 && curDate<19){
  greeting="Good Afternoon";
  cssStyle.color="yellow";
}else{
  greeting="Good Night";
  cssStyle.color="black";
}

export default function App() {
  return (
    <div className="App">
     <h1>Hello Sir, <span style={cssStyle}></span>{greeting}</h1>
    </div>
  );
}
