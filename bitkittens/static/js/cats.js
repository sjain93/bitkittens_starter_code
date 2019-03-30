document.addEventListener("DOMContentLoaded", function() {

  const button1 = document.querySelector('.summon-cats');

  button1.addEventListener('click', function() {
    axios.get('http://bitkittens.herokuapp.com/cats.json').then(function(response){
      let catsList = response.data.cats;
      console.log(catsList);
      let catdiv1 = document.getElementById(
        "cat1");
      let catdiv2 = document.getElementById("cat2");
      let catdiv3 = document.getElementById("cat3");
      let divArray = [catdiv1, catdiv2, catdiv3];
      for (var i = 0; i < divArray.length; i++) {
        divArray[i].innerHTML = null;
        let catImg = document.createElement('img');
        catImg.src = catsList[i].photo;
        divArray[i].appendChild(catImg);
      }
    });
  });
});
