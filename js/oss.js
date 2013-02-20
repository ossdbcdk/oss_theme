(function ($) {
  $(document).ready(function() {
    $('.mailchimp-newsletter-wrapper input[type=text]').attr('placeholder', $('.mailchimp-newsletter-wrapper label').text());
    if ($('.pane-menu-menu-blog-kategorier').children().length > 0) {
      $('body').addClass('blog-category');
    }
  });  
})(jQuery);
