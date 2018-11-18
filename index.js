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
  let name = retrieveEmployeeInformation
  $('.employee-list')
}

$("#header ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');
