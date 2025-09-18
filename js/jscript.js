// tabs effect!!
$( function() {
        $( "#tabs" ).tabs();
    } );

//dialog effect
$( function() {
    $( "input" ).checkboxradio();
  } );

//slider
$( function() {
    $( "#slider" ).slider();
  } );

//accordian
$(function () {
    $("#tabs").tabs({
        activate: function (event, ui) {
            const newPanelId = ui.newPanel.attr("id");

            if (newPanelId === "tabs-2") {
                const $accordion = $("#accordion");

                if (!$accordion.hasClass("ui-accordion")) {
                    $accordion.accordion({
                        heightStyle: "content", 
                        collapsible: true,
                        active: false 
                    });
                }
            }
        }
    });
});

// datepicker
$( function() {
    $( "#datepicker" ).datepicker();
  } );


//effects
$(function () {
    var $circle = $("#circle");

    $("#height").selectmenu({
        change: function (event, data) {
            $circle.css("height", data.item.value + "px");
        }
    });

    $("#width").selectmenu({
        change: function (event, data) {
            $circle.css("width", data.item.value + "px");
        }
    });
});
