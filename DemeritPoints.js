checkspeed(180);
function checkspeed(speed){
    const speedLimit = 70;
    const kmperPoint = 5;
    
    if (speed <= speedLimit + kmperPoint)
        console.log('ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmperPoint);
        if (points >= 12)
            console.log('License suspended');
        else
        console.log('Points', points);    
    }
}