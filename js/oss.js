(function ($) {
  $(document).ready(function() {
    $('.mailchimp-newsletter-wrapper input[type=text]').attr('placeholder', $('.mailchimp-newsletter-wrapper label').text());
    if ($('#block-menu-menu-blog').children().length > 0) {
      $('body').addClass('blog-category');
    }
    $('.blog-category .navbar-fixed-top .container').prepend('<a href="/blog" class="header-blog-link">Blog</a>');
  });  
})(jQuery);
