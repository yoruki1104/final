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
	$('.store_info').css('display', 'none');
	$('.store_info').fadeIn(3000); //一開始淡入
	
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


$(function(){
    var email = $("#email");
    var name = $("#name");
    var surname = $("#surname");
    var tel = $("#tel");

    function validate(field){
        if(field.val().length === 0){
            field.removeClass().addClass("error");
            field.next().removeClass().addClass("icon-warning-sign");
        }else{
            field.removeClass().addClass("success");
            field.next().removeClass().addClass("icon-ok");
        }
        return field;
    }

    function myFunction() {        
        var name=document.getElementById("name").value;
        var surname=document.getElementById("surname").value;
        var email=document.getElementById("email").value;
        var tel=document.getElementById("tel").value;
        var message=document.getElementById("message").value;
　      //alert(name+surname+email+tel+message);
        
        db.collection("表單回覆").doc(surname+name).set({    //哈哈是db建的集合名稱，如果本來沒建db要記得重新整理
        信箱: email,
        電話: tel,
        訊息: message
        
         });

        document.getElementById("name").value = '';    //清空用
        document.getElementById("surname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("tel").value = '';
        document.getElementById("message").value = '';


    }

    $('input').blur(function(){
        validate($(this));
    });

    $("button").on("click" , function(){
        validate(email);
        validate(name);
        validate(surname);
        validate(tel);
        if($(email).val().length === 0 || $(name).val().length === 0||$(surname).val().length === 0 || $(tel).val().length === 0 || $(message).val().length === 0 )
            $(this).removeClass().addClass("submit-error");
        else{
            $(this).removeClass().addClass("submit-success");
            myFunction();

        }
        window.setTimeout(function(){
            console.log("done");
            $("button").removeClass();
        }, 3000)
        return false;
    });
    
});



