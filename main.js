// control hive animation with mouse scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset < window.innerHeight) {        
        //window height
        const windowHeight = window.innerHeight;
        let scroll = 30-(window.pageYOffset / (window.innerHeight)*30);
        document.body.style.setProperty('--hive', scroll);
        document.body.style.setProperty('--scroll', scroll);
        //remove header class from #header
        document.getElementById('header').classList.remove('header');
        //add full height class from #main
        document.getElementById('main').classList.add('fh');
    }else{
        //hide the hive
        document.body.style.setProperty('--hive', 0);
        //add header class to #header
        document.getElementById('header').classList.add('header');
        //remove full height class to #main
        document.getElementById('main').classList.remove('fh');
    }
    
  }, false);