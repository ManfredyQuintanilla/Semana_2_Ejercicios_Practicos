

//ocultar o mostrar los divs que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list')

//constantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton');//Button

//eliminar el ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');
//eliminar el item seleccionado
const removeItem = document.querySelector('button#removeItem')


//mostrar y ocultar lista
hide.addEventListener('click', () => {

    if(listDiv.style.display =='none'){
        listDiv.style.display= 'block';
        hide.textContent = '<<';
    }else{
        listDiv.style.display = 'none';
        hide.textContent = '>>'
    }
});


//agregar elementos a la lista
addItemButton.addEventListener('click',()=>{
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    let select_btn = document.createElement('input')
    //<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>

    select_btn.type="checkbox"
    select_btn.className ="form-check-input"
    select_btn.id = "flexCheckChecked"
    select_btn.checked = false

    li.textContent = addItemInput.value;

    list.appendChild(li); //agregar elemento a la lista
    li.appendChild(select_btn)
    addItemInput.value="";

});



//elimiar ultimo elemento de la lista
removeItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    list.removeChild(li)
});


function findIndex(elem){
    var i, len = items.lenght;
    for(i=0; i <len; i++){
        if(items[i] === elem){
            return i;
        }
    }
}


//obtener index of elemet in list
var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li");

list.onclick = function(e){
    var event = e || window.event,
    src = event.target || event.srcElement;
    var myIndex = findIndex(src);
    //alerta(myIndex);
    index = myIndex;
    console.log(myIndex);

    //CAMBIAR COLOR DEL ELEMENTO SELECCIONADO
    if(event.target.tagName === 'LI'){
        list.querySelectorAll('li').forEach(el =>el .classList.remove('alert', 'alert-success'));
        items[index].classList.add('alert', 'alert success');
    }

}



//eliminar elemento seleccionado
removeItem.addEventListener('click',() => {
    /*
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    
    console.log(label.innerHTML)
    label.innerHTML = 'Se elimino el elemento ' + index;
    divAlert.classList.add('alert', 'alert-danger'); //clase de la alerta


    //  items[index].parentNode.removeChild(items[index]);
    divAlert.append(label);
    showDiv.appendChild(divAlert);

    */

    let listItems = document.querySelector("#listItems")
    let filas = listItems.getElementsByTagName('li')
   
    for(let i = 0; i < filas.length ; i ++ ){
        
        let item =filas[i]
        let list_btn =item.querySelector('input') 
        //console.log(list_btn.checked)
        let estado_check_list =list_btn.checked

        if(estado_check_list == true){
            item.remove()
        }
    }
       
    
}); 

let data={
    Integrante_1: "<h2> Manfredy Jose Quintanilla Chavez SMIS021120</h2>",
    Integrante_2: "<h2><i>Angel Armando Villatoro Perez SMIS924020</i></h2>",

    pelicula:["Cars, 2006","Cars2, 2011","Cars3, 2017"]
}


//instancia de vue
new Vue({
    el: '#root',
    data: data
})
