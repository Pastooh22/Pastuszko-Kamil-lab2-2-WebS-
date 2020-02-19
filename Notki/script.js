let notes =[];
if(localStorage.getItem("testObject")===null){              // tworzenie localStorage, sprwadza czy istnieje, jak nie to tworzy i daje notes
    localStorage.setItem('testObject', JSON.stringify(notes));
}

document.addEventListener( "DOMContentLoaded", () => {      // Nasłuchiwanie na wypełnienie formularzu, po zaladowaniu strony
    let form = document.getElementById( "form" );
    form.addEventListener( "submit", function( e ) {        // czeka na submit
        e.preventDefault();
        let json = toJSONString( this );                    
    }, false);
});

var retrievedObject = localStorage.getItem('testObject'); // pobieranie danych z localstorage
notes = JSON.parse(retrievedObject);
showNotes();

function showNotes(){                           // funkcja odświeżania notatek na stronie
let wrapper = document.getElementById("wrapper"); // połączenie do diva z notatkami
let idnot=0;
notes.forEach(element => {                          // stworz element dla kazdej notatki
    let note = document.createElement("div");
    note.className = "note "+element.color;
    note.id=idnot++;

    if(element.pin==1){                        // priorytet notatki
        note.style.order=1;
    }
    let noteTitle = document.createElement('textarea'); // dodanie tytułu
    noteTitle.className="noteTitle";
    noteTitle.value = element.title;
    noteTitle.disabled=true;                            // nie mozna zmienic az do klikniecia edit

    
    let noteDescription = document.createElement('textarea'); //dodanie opisu
    noteDescription.className="noteDesc";
    noteDescription.value = element.description;
    noteDescription.disabled=true;

    let noteFooter= document.createElement('footer');   //dodanie daty
    noteFooter.className="noteFooter";
    noteFooter.appendChild(document.createTextNode("Last modified: "+element.date));

    let noteCheck = document.createElement('input');    // Dodanie checkboxa do zatwierdzania czy jest pinned
    noteCheck.type='checkbox';
    if(element.pin==1){
        noteCheck.checked=true;
    }
    else{
        noteCheck.checked=false;
    }
    noteCheck.disabled=true;

    let noteEdit = document.createElement('button');        // przycisk edycji
    noteEdit.innerText="Edit";
    noteEdit.onclick=(e)=>                              // funkcjonalność edycji
    {
        e.target.parentNode.parentNode.childNodes[0].disabled=false;  // tytul
        e.target.parentNode.parentNode.childNodes[1].disabled=false;  // opis
        e.target.parentNode.childNodes[3].disabled=false;             // pin
        noteSave.hidden=false;
        noteEdit.hidden=true;
    };
    let noteSave = document.createElement('button');            // przycisk zapisz
    noteSave.innerText="Save";
    noteSave.hidden=true;
    noteSave.onclick = (e)=>                                    // funcjonalność zapisz
    {           
        parentDiv=e.target.parentNode.parentNode;               //notatka
        noteSave.hidden=true;
        noteEdit.hidden=false;
        notes[note.id].title=parentDiv.childNodes[0].value;     // zamiana danych
        notes[note.id].description=parentDiv.childNodes[1].value;
        if(e.target.parentNode.childNodes[3].checked==true){
            notes[note.id].pin=1;
        }
        else{
            notes[note.id].pin=2;            
        }
        parentDiv.childNodes[0].disabled=true;
        parentDiv.childNodes[1].disabled=true;
        e.target.parentNode.childNodes[3].disabled=true;        
        notes[note.id].date= new Date().toDateString();
        localStorage.setItem('testObject', JSON.stringify(notes)); //wysłanie zmian do localstorage i odświeżenie danych
        showNotes();
    }

    note.appendChild(noteTitle);                        // Tworzenie diva
    note.appendChild(noteDescription);
    noteFooter.appendChild(noteEdit);
    noteFooter.appendChild(noteSave);
    noteFooter.appendChild(noteCheck);
    note.appendChild(noteFooter);

    let flag= true;
    wrapper.childNodes.forEach(e=>{
        if(e.id==note.id){
            flag=false;
            }
        })
    if(flag){
        wrapper.appendChild(note);                          //ostateczne dodanie notatki        
    }
});
}


function toJSONString( form ) {             // Dodanie notatki z formularzu

    let obj = {};                                                       //inicjalizacja obiektu
    let elements = form.querySelectorAll( "input, select, textarea" ); //zbiera wszystkie elementy formularzu
    for( var i = 0; i < elements.length; ++i ) {                        
        let element = elements[i];
        let name = element.name;
        let value;
        if(element.type =="checkbox"){
            if(element.checked== true){
                 value = 1;
            }   
            else{ value = 2;}
        }
        else{
             value = element.value;
        }
        if( name ) {
            obj[ name ] = value;
        }
    }
    obj["color"]= form.parentNode.className.split(' ')[1];
    obj["date"] = new Date().toDateString();

    notes.push(obj)                                          //dodanie do notatek, wysłanie do localstorage
    localStorage.setItem('testObject', JSON.stringify(notes));
    showNotes();                                                // i odświeżenie danych
}


function changeColor(e){                                        // Zmiana koloru
    let parent = e.parentNode.parentNode.parentNode.parentNode;
    parent.classList.remove("blue");
    parent.classList.remove("red");
    parent.classList.remove("yellow");
    parent.classList.remove("green");
    parent.classList.add(e.className.split(' ')[1]);
}
function Clear(){
    localStorage.clear();
      location.reload(); 
}