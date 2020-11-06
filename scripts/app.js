
function readQuote(){
    db.collection("quotes").doc("01")
    .onSnapshot(function(snap){
        console.log(snap.data()); //print doc fields of 01
        console.log(snap.data().message);
        document.getElementById("abc").innerText = snap.data().message;
    })
}

readQuote();