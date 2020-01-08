$(document).ready(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(1500); //一開始淡入
	$('a.link').click(function(event) { //點選 class 為 link 的 a 元件時觸發
	 event.preventDefault(); //取消事件預設動作
	 newLocation = this.href;
	 $('body').fadeOut(1500, newpage); //點選後淡出
	});
	
	function newpage() {
	 window.location = newLocation;
	}
   });
$(document).ready(function() {
    $(".hamberger").click(function() {
      $(".menu").toggleClass("menu-active");
      $(".hamberger .top").toggleClass("hamberger-top");
      $(".hamberger .center").toggleClass("hamberger-center");
      $(".hamberger .bottom").toggleClass("hamberger-bottom");
    });
  });
  
  $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
    }	
    var accordion = new Accordion($('#accordion'), false);
});