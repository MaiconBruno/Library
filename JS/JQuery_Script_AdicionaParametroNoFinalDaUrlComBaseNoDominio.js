
  //Wordpress
  jQuery(document).ready(function($) {
    var parameter ="?utm_source=organico&utm_medium=blog&utm_campaign=conversao";
    var url;
    var domain = jQuery('a[href*="https://www.miess.com.br"]');
    domain.each(function() {
      url = jQuery(this).prop("href");
      jQuery(this).prop("href", url + parameter);
    });
  });



  //Nativo
  var parameter ="?utm_source=organico&utm_medium=blog&utm_campaign=conversao";
  var url;
  var domain = jQuery('a[href*="https://www.miess.com.br"]');
  domain.each(function() {
    url = $(this).prop("href");
    $(this).prop("href", url + parameter);
  });