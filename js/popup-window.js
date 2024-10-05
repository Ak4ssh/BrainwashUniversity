function shows(urls) {
    let sw = screen.width - 30;
    let sh = screen.height;
    let tm = 120;
    let wh = sh - (tm * 2);
    window.open(urls, '_blank', 'toolbar=no,menubar=no,location=no,directories=0,status=no,scrollbars=yes,fullscreen=no,width=' + sw + ',height=' + wh + ',left=15,right=15,top=' + tm + "'");
}
