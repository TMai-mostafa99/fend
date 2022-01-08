function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let str = document.getElementById('name').value
    //checkURL(formText)
   
    if(Client.checkURL(str)){
       

        fetch('http://localhost:8080/test',{
            method: "POST" ,
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: str })
        }).then(res => res.json())
           
          .then(function(res){
             console.log(res)
             document.getElementById('score_tag').innerHTML = res.score_tag
             document.getElementById('confidence').innerHTML = res.confidence
             document.getElementById('subjectivity').innerHTML = res.subjectivity
             document.getElementById('agreement').innerHTML = res.agreement
             document.getElementById('irony').innerHTML = res.agreement

        })
        .catch(error => console.log('error', error));

    }
    else{
        alert("please enter a valid url")
    }

    
 
}

export { handleSubmit }
