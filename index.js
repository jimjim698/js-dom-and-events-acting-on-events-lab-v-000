function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.getElementsByName("name")[0].value
}



function addNewElementAsLi(){
  let name = retrieveEmployeeInformation()
  return document.querySelector('.employee-list').append(`<li>${name}</li>`)
}

function addNewLiClick(){
  
}
