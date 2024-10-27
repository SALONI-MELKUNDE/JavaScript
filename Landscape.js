function isLandscape(width,height){
    if (width > height) return true;
    return false;
}
console.log(isLandscape(300,600));