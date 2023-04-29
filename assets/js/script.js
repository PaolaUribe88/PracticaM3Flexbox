let mostrarChats=()=>{
    let losChats = document.getElementsByClassName('izContenedorChat');
    let estado = losChats[0].style.display;
  
    if(estado=='inherit'){
      for(let i=0; i < losChats.length; i++ ){
        losChats[i].style.display ='none';
      }
  
    }
    else{
      for(let i=0; i < losChats.length; i++ ){
        losChats[i].style.display ='inherit';
      }
  
    }
  
  }
  let mostrarMenuPagina= ()=>{
  
    let elContenedor = document.getElementsByClassName('cabecera__contenedorLista');
    let estadoContenedor = elContenedor[0].style.display;
  
    let elBotonChats = document.getElementsByClassName('izContenedor');
    if(estadoContenedor == 'block'){
        elContenedor[0].style.display = 'none';
        elBotonChats[0].style.top = '30px';
    }
    else{
        elContenedor[0].style.display = 'block';
        elBotonChats[0].style.top = '200px';
    }
  
  }