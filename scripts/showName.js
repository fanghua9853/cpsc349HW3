function showName() {
    document.getElementById('display').innerHTML = document.getElementById("name").value;
  
    var titleOutput = $("input:radio[name=title]:checked").val();
    document.getElementById('titleOutput').innerHTML = titleOutput;
  }