


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



$(document).ready(function(){
	$("#img-list1").click(function(){
	  $("#info-block1").fadeTo("slow",1);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#img-list2").click(function(){
	  $("#info-block2").fadeTo("slow",1);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#img-list3").click(function(){
	  $("#info-block3").fadeTo("slow",1);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#img-list4").click(function(){
	  $("#info-block4").fadeTo("slow",1);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#back-button1").click(function(){
		$(".info-content").fadeOut(1000);
		$(".info-item img").fadeOut(1000);
		$(".back-button").fadeOut(1000);
		$("#info-block1").fadeOut(1000);
	  $(".foodbox").fadeTo("slow",1);
	})
  });
  $(document).ready(function(){
	$("#back-button2").click(function(){
		$(".info-content").fadeOut(1000);
		$(".info-item img").fadeOut(1000);
		$(".back-button").fadeOut(1000);
		$("#info-block2").fadeOut(1000);
	  $(".foodbox").fadeTo("slow",1);
	})
  });
  $(document).ready(function(){
	$("#back-button3").click(function(){
		$(".info-content").fadeOut(1000);
		$(".info-item img").fadeOut(1000);
		$(".back-button").fadeOut(1000);
		$("#info-block3").fadeOut(1000);
	  $(".foodbox").fadeTo("slow",1);
	})
  });
  $(document).ready(function(){
	$("#back-button4").click(function(){
		$(".info-content").fadeOut(1000);
		$(".info-item img").fadeOut(1000);
		$(".back-button").fadeOut(1000);
		$("#info-block4").fadeOut(1000);
	  $(".foodbox").fadeTo("slow",1);
	})
  });

  $(document).ready(function(){
	$("#S-img-list1").click(function(){
	  $("#S-info-block1").slideDown(1000);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#S-back-button1").click(function(){	
		$("#S-info-block1").slideUp(1000);
	})
  });

  $(document).ready(function(){
	$("#S-img-list2").click(function(){
	  $("#S-info-block2").slideDown(1000);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#S-back-button2").click(function(){	
		$("#S-info-block2").slideUp(1000);
	})
  });
  
  $(document).ready(function(){
	$("#S-img-list3").click(function(){
	  $("#S-info-block3").slideDown(1000);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#S-back-button3").click(function(){	
		$("#S-info-block3").slideUp(1000);
	})
  });
  
  $(document).ready(function(){
	$("#S-img-list4").click(function(){
	  $("#S-info-block4").slideDown(1000);
	  $(".info-content").fadeOut("fast");
	  $(".info-content").fadeIn(2000);
	  $(".info-item img").fadeOut("fast");
	  $(".info-item img").fadeIn(2000);
	  $(".back-button").fadeOut("fast");
	  $(".back-button").fadeIn(1000);
	})
  });
  $(document).ready(function(){
	$("#S-back-button4").click(function(){	
		$("#S-info-block4").slideUp(1000);
	})
  });