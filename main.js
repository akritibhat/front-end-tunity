$(document).ready(function() {
  getCurrent();
  getBidData();
});
function changeCurrentSong(song) {
  $("#currentSong").html(song);
}

setInterval(function(){getCurrent(); getBidData(); console.log("updated");}, 5000);

function changeNextSongs(song1, song2, song3, song4, song5) {
  $("#nextSongOne").html(song1);
  $("#nextSongTwo").html(song2);
  $("#nextSongThree").html(song3);
  $("#nextSongFour").html(song4);
  $("#nextSongFive").html(song5);
}

function changeNextAmounts(amount1, amount2, amount3, amount4, amount5) {
  $("#nextSongOneAmount").html("$" + amount1);
  $("#nextSongTwoAmount").html("$" + amount2);
  $("#nextSongThreeAmount").html("$" + amount3);
  $("#nextSongFourAmount").html("$" + amount4);
  $("#nextSongFiveAmount").html("$" + amount5);
}

function changeTotalAmount(totalAmount) {

}

function serializeJson(json) {
  var json = jQuery.parseJSON(json);
  return json;
}

function update(currentJson, currentBidJson) {
  console.log(currentBidJson);
  console.log(currentJson);
  changeCurrentSong(currentJson);
  changeNextSongs(currentBidJson[0].name, currentBidJson[1].name, currentBidJson[2].name, currentBidJson[3].name, currentBidJson[4].name);
  changeNextAmounts(currentBidJson[0].bid, currentBidJson[1].bid, currentBidJson[2].bid, currentBidJson[3].bid, currentBidJson[4].bid);
}

function getCurrent() {
  $.get("http://127.0.0.1:5000/current", function(data) {
	  changeCurrentSong(data);
  });
}

function getBidData() {
  $.get("http://127.0.0.1:5000/bidData", function(data1) {
	  data = serializeJson(data1);
    changeNextSongs(data[0].name, data[1].name, data[2].name, data[3].name, data[4].name);
	changeNextAmounts(data[0].bid, data[1].bid, data[2].bid, data[3].bid, data[4].bid);
  });
}
