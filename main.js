//get modal
//cited from Lab 2 Simple Modal Instructions - https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById('result_modal');

//get button that opens modal
//cited from Lab 2 Simple Modal Instructions - https://www.w3schools.com/howto/howto_css_modals.asp
var button = document.getElementById("submit_button");

//get the span that closes the modal
//cited from Lab 2 Simple Modal Instructions - https://www.w3schools.com/howto/howto_css_modals.asp
var span = document.getElementsByClassName("close")[0];

//calculate score based on chosen answers
function calculate_score(choices){
  //if (choices.length == 4){
    var score = 0;
    for (var i = 0; i < choices.length; i++) { //assign 5 points for each first-option answer
      if (choices[i] == 'jon_snow'){
        score = score + 5;
      }
      else if (choices[i] == 'night_king') { //assign 10 points for each second-option answer
        score = score + 10;
      }
      else if (choices[i] == 'daenarys') { //assign 15 points for each third-option answer
        score = score + 15;
      }
      else if (choices[i] == 'chihuahua') {
        score = score + 5;
      }
      else if (choices[i] == 'shark') {
        score = score + 10;
      }
      else if (choices[i] == 'eagle') {
        score = score + 15;
      }
      else if (choices[i] == 'OITNB') {
        score = score + 5;
      }
      else if (choices[i] == 'stranger_things') {
        score = score + 10;
      }
      else if (choices[i] == 'narcos') {
        score = score + 15;
      }
      else if (choices[i] == 'las_vegas') {
        score = score + 5;
      }
      else if (choices[i] == 'new_orleans') {
        score = score + 10;
      }
      else if (choices[i] == 'dallas') {
        score = score + 15;
      }
    }
  //}
  return score;
};

//evaluate score to display answer
//result for university is determined by above score
function evaluate_score(score){
  var university;
  if (20 <= score && score <= 25){
    university = 'Brown';
  }
  else if (26 <= score && score <= 30){
    university = 'Cornell';
  }
  else if (31 <= score && score <= 35){
    university = 'Harvard';
  }
  else if (36 <= score && score <= 40){
    university = 'Columbia';
  }
  else if (41 <= score && score <= 45){
    university = 'Dartmouth';
  }
  else if (46 <= score && score <= 50){
    university = 'Yale';
  }
  else if (51 <= score && score <= 55){
    university = 'Pennsylvania';
  }
  else if (56 <= score && score <= 60){
    university = 'Princeton';
  }
  return university;
};

//user clicks on button to open modal
button.onclick = function(){
  //insert all checked answers into array - from Lab 2 instructions
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  var final_score = calculate_score(choices); //score based on answer choices
  var result_university = evaluate_score(final_score); //determine university based on score
  modal.style.display = "block"; //display modal - from Lab 2 Simple Modal Instructions
  var congrats = "Congratulations you will attend "; //display university in modal
  var text = congrats.concat(result_university);
  if (choices.length == 4){ //if all answers have been clicked
    $('#modal-text').text(text);

    //display different university pictures based on resulting university
    if (result_university === 'Brown'){
      $('#modal-picture').attr("src", "https://res.cloudinary.com/hud9ala09/image/upload/v1462295233/e8p2k16dhthtbovsch8q.png");
    }

    if (result_university === 'Cornell'){
      $('#modal-picture').attr("src", "https://bmcb.cornell.edu/wp-content/uploads/2017/08/cornell-campus-1125x420-1030x385.png");
    }

    if (result_university === 'Harvard'){
      $('#modal-picture').attr("src", "https://image.slidesharecdn.com/harvarduniversity-150325195600-conversion-gate01/95/harvard-university-1-638.jpg?cb=1427313506");
    }

    if (result_university === 'Columbia'){
      $('#modal-picture').attr("src", "http://assets.ce.columbia.edu/i/ce/intl/intl-fp@2x.jpg");
    }

    if (result_university === 'Dartmouth'){
      $('#modal-picture').attr("src", "https://communications.dartmouth.edu/sites/communications.dartmouth.edu/files/styles/basic_article_slideshow/public/20150806-nightcampussummer-01-eb.jpg?itok=8O6WI-UB");
    }

    if (result_university === 'Yale'){
      $('#modal-picture').attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mwYPqyHEjsdaZHSBx1BJdBi9a_ynsgJukAIGtFRHkuU2cVuTog");
    }

    if (result_university === 'University of Pennsylvania'){
      $('#modal-picture').attr("src", "https://www.kleinfelder.com/kleinfelder/cache/file/BB4B61AA-967A-47E8-AA823B358BD084BA_carouselimage.jpg");
    }

    if (result_university === 'Princeton'){
      $('#modal-picture').attr("src", "https://www.scholaradvisor.com/wp-content/uploads/Princeton-University.jpg");
    }
  }
  else { //display error if not all answers have been clicked
    var congrats = "Oops! Please make sure to answer all questions!";
    //var text = congrats.concat(result_university);
    $('#modal-text').text(congrats);
    $('#modal-picture').attr("src", "https://cdn.dribbble.com/users/440793/screenshots/2744373/dribble_1x.jpg");
  }
}

//when user clicks span modal closes
//cited from Lab 2 Simple Modal Instructions - https://www.w3schools.com/howto/howto_css_modals.asp
span.onclick = function(){
  modal.style.display = "none";
}

//modal closes when user clicks outside it
//cited from Lab 2 Simple Modal Instructions - https://www.w3schools.com/howto/howto_css_modals.asp
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
