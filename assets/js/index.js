window.addEventListener('scroll', Scrollativo);//adicionando evento de rolagem

    function Scrollativo() {
        let menu = document.querySelector('#header_menu');//retorna o primeiro elemento do documento com id menu
        let li = document.getElementsByClassName("li_menu");//returns a collection(array) of elements with a specified class name(s). É necessário especificar os elementos

        menu.classList.toggle('ativo', scrollY > 2);
        li[0].classList.toggle('ativo', scrollY > 2);//elementos do array começam em zero
        li[1].classList.toggle('ativo', scrollY > 2);
        li[2].classList.toggle('ativo', scrollY > 2);
        
        if (window.scrollY > 2) {
            document.getElementById("img_menu").src= "../assets//img/logo-tesoura1.png";
            document.getElementsByClassName("btn_menu")[0].style.color= "#000000";
            document.getElementsByClassName("btn_menu")[1].style.color= "#000000";
        }
        else {
            document.getElementById("img_menu").src= "../assets/img/logo-tesoura-branca1.png";
            document.getElementsByClassName("btn_menu")[0].style.color= "#ffffff";
            document.getElementsByClassName("btn_menu")[1].style.color= "#ffffff";
        }
    }    

    let header= document.getElementById('header_menu');
    let navMenu= document.getElementById('nav_menu');
    let content= document.getElementById('main');
    let showSidebar= false;

    function toggleSidebar(){
            showSidebar= !showSidebar;
            if(showSidebar){
                navMenu.style.marginLeft= '65vw';
                content.style.filter= 'blur(2px)';
                document.getElementsByTagName("body")[0].style.overflowY="hidden";
            }
            else{
                navMenu.style.marginLeft= '100vw';
                content.style.filter= '';
                document.getElementsByTagName("body")[0].style.overflowY="";
            }
    }

    window.addEventListener('resize', function(){//ao redimensionar a página
        if(window.innerWidth > 770 && showSidebar, window.innerWidth > 770){//se a largura for maior que 770px
            toggleSidebar();//chame a função   
            window.location.reload(); 
        }
       
            
    });