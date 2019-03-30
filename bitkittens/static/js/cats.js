document.addEventListener("DOMContentLoaded", function() {

  const button1 = document.querySelector('.summon-cats');

  button1.addEventListener('click', function() {
    axios.get('http://bitkittens.herokuapp.com/cats.json').then(function(response){
      let catsList = response.data.cats;
      console.log(catsList);
      let catdiv1 = document.getElementById(
        "cat1");
      let catImg = document.createElement('img');
      catImg.src = catsList[0].photo;
      catdiv1.appendChild(catImg);
    });
  });
});
