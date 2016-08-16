//refer to styles in js


$(function() {
  $('.slider').slider({full_width: true});
  $(".button-collapse").sideNav();
   console.log('zamn');
  $('.chips-placeholder').material_chip({
     placeholder: 'Enter a tag',
     secondaryPlaceholder: '+Tag',
  });
});

$(window).scroll(function (){
 if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
    var elements = $(".blind");
    console.log(elements);
    $(".blind").removeClass("card teal darken-1 blind").addClass( "card teal darken-1" );

 }});
// Initialize collapse button
