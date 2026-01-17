var app = {
    page: {},
    
    init: function() {
      const that = this;

      $.each(that.page, function(index, value) {
        if(typeof value.init == 'function') {
          value.init();
        }
      });
    },

    handleNav: function() {
        var x = document.getElementById("mynavigation");
        var hamIcon = document.getElementById("ham-icon");

        if (x.className === "navigation") {
          x.className += " show";
          hamIcon.src = "asset/icons/close.png";
          hamIcon.alt = "close";
        } else {
          x.className = "navigation";
          hamIcon.src = "asset/icons/menu.svg";
          hamIcon.alt = "hamburger";
        }
    }
};
$(document).ready(function() {
  app.init();
});