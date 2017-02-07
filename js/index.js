$(document).ready(function() {

   $("#homeText").show();
  $("#missionText").hide();
  $("#boardText").hide();
  $("#currentMeetingText").hide();
    $("#archiveMeetingText").hide();
  $("#contactText").hide();
  $("#eventsText").hide();

  $("#about").removeClass("active");
  $("#events").removeClass("active");
  $("#contact").removeClass("active");
  $("#home").addClass("active");
  $("#meetings").removeClass("active");

  $("#mission").click(function() {
    $("#homeText").hide();
    $("#missionText").show();
    $("#boardText").hide();
    $("#currentMeetingText").hide();
    $("#archiveMeetingText").hide();

    $("#contactText").hide();
    $("#eventsText").hide();

    $("#about").addClass("active");
    $("#events").removeClass("active");
    $("#contact").removeClass("active");
    $("#home").removeClass("active");
    $("#meetings").removeClass("active");
  });
  $("#board").click(function() {

    $("#homeText").hide();
    $("#missionText").hide();
    $("#boardText").show();
    $("#currentMeetingText").hide();
    $("#archiveMeetingText").hide();
    $("#contactText").hide();
    $("#eventsText").hide();

    $("#about").addClass("active");
    $("#events").removeClass("active");
    $("#contact").removeClass("active");
    $("#home").removeClass("active");
    $("#meetings").removeClass("active");
  });

  $("#mission").click(function() {
    $("#homeText").hide();
    $("#missionText").show();
    $("#boardText").hide();
    $("#currentMeetingText").hide();
    $("#archiveMeetingText").hide();
    $("#contactText").hide();
    $("#eventsText").hide();

    $("#about").addClass("active");
    $("#events").removeClass("active");
    $("#contact").removeClass("active");
    $("#home").removeClass("active");
    $("#meetings").removeClass("active");
  });
  $("#events").click(function() {

    $("#homeText").hide();
    $("#missionText").hide();
    $("#boardText").hide();
    $("#currentMeetingText").hide();
    $("#archiveMeetingText").hide();
    $("#contactText").hide();
    $("#eventsText").show();

    $("#about").removeClass("active");
    $("#events").addClass("active");
    $("#contact").removeClass("active");
    $("#home").removeClass("active");
    $("#meetings").removeClass("active");
  });
  $("#contact").click(function() {
    $("#homeText").hide();
    $("#missionText").hide();
    $("#boardText").hide();
    $("#currentMeetingText").hide();
        $("#archiveMeetingText").hide();

    $("#contactText").show();
    $("#eventsText").hide();

    $("#about").removeClass("active");
    $("#events").removeClass("active");
    $("#contact").addClass("active");
    $("#home").removeClass("active");
    $("#meetings").removeClass("active");
  });
  $("#home").click(function() {
    $("#missionText").hide();
    $("#boardText").hide();
    $("#currentMeetingText").hide();
    $("#archiveMeetingText").hide();

    $("#contactText").hide();
    $("#eventsText").hide();

    $("#about").removeClass("active");
    $("#events").removeClass("active");
    $("#contact").removeClass("active");
    $("#home").addClass("active");
    $("#meetings").removeClass("active");

    $("#homeText").show();

  });

  $("#currentMeetings").click(function() {
    $("#homeText").hide();
    $("#missionText").hide();
    $("#boardText").hide();
    $("#currentMeetingText").show();
    $("#archiveMeetingText").hide();
    $("#contactText").hide();
    $("#eventsText").hide();

    $("#about").removeClass("active");
    $("#events").removeClass("active");
    $("#contact").removeClass("active");
    $("#home").removeClass("active");
    $("#meetings").addClass("active");

    $("#homeText").hide();
  });
  $("#archiveMeetings").click(function() {
    $("#homeText").hide();
    $("#missionText").hide();
    $("#boardText").hide();
    $("#currentMeetingText").hide();
    $("#archiveMeetingText").show();
    $("#contactText").hide();
    $("#eventsText").hide();

    $("#about").removeClass("active");
    $("#events").removeClass("active");
    $("#contact").removeClass("active");
    $("#home").removeClass("active");
    $("#meetings").addClass("active");

    $("#homeText").hide();
  });

  $("#contactBtn").click(function() {
    var data = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      message: $("#message").val()
    };

    $.ajax({
      type: "POST",
      url: "http://www.bansheeproductions.net/philo/php/mail.php",
      data: data,
      success: function() {
        $('.success').fadeIn(1000);
      }
    });

    return false;
  });
});