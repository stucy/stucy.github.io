(function () {
    // clearStorage();

    if(localStorage.getItem('numCommnets') == null)
        localStorage.setItem('numComments', '0');

    let storage = allComments();

    addComments(storage)
}());

$("#comment").on("keypress", e => {
    if(e.keyCode == 13){
        let username = $('#username').val();
        let comment = $('#comment').val();

        if(username != '' && comment != ''){

            var currentdate = new Date(); 
            var date = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

            let storageItem = `<li><span class="username">${username}:</span>${comment}<span class="date">${date}</span></li>`;

            let numComments = localStorage.getItem('numComments');

            localStorage.setItem(`comment${numComments}`, storageItem);

            let newNumCom = parseInt(numComments) + 1;

            localStorage.setItem(`numComments`, newNumCom);
        }
    }
})

function allComments() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    values.pop();

    return values;
}


function addComments(comments){
    let html = comments.join('');

    // console.log(comments);
    // console.log(html)
    
    document.getElementById('commentContainer').innerHTML = html
}

function clearStorage(){
    localStorage.clear();
}