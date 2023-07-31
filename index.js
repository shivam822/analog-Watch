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
