(function () {
    // clearStorage();
    
    if(localStorage.getItem('numComments') == null)
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

            // console.log(newNumCom)

            localStorage.setItem(`numComments`, newNumCom);

            addComments(allComments());
        }
    }
})

function allComments() {

    var values = [],
        keys = Object.keys(localStorage).sort(),
        i = keys.length;

    keys.pop();

    // keys.reverse();

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

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

$('#mobileNav').click(() => {
    $('#navigation').toggleClass('active')
})