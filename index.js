//  let hr= document.getElementById('Hrs');
//  let min= document.getElementById('Min');
//  let sec= document.getElementById('Sec');

//  function displayTime() {
//     let date= new Date();
    
//     let hh= date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();

//     let hRotation= 30*hh + mm/2;
//     let mRotation= 6*mm;
//     let sRotation=6*ss;

//     hr.style.transform = `rotate (${hRotation}deg)`;
//     min.style.transform = `rotate(${mRotation}deg)`;
//     sec.style.transform = `rotate (${sRotation}deg)`;

//  }
// setInterval(displayTime, 1000);

setInterval(() => {
    let date= new Date();
    
    let hrs= date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let hRotation= 30*hrs + mn/2;
    let mRotation= 6*mn;
    let sRotation=6*sc;

    Hrs.style.transform = `rotate( ${hRotation}deg)`;
    Min.style.transform = `rotate( ${mRotation}deg)`;
    Sec.style.transform = `rotate( ${sRotation}deg)`;
}, 1000);