$(document).ready(function(){
	//«Î«Û’’∆¨
	rdimg();
	
	$(".wico").hover(function(){$(".wpic").show()},function(){$(".wpic").hide()})
	
	$("#pul li").live('mouseover',function(){
		$(this).children('.litxt').show();
	})
	$("#pul li").live('mouseout',function(){
		$(this).children('.litxt').hide();
	})
	$("#photo_pane").hover(function(){
		$(".next_page").delay(500).animate({top:"0"},300);
		$(".prev_page").delay(500).animate({bottom:"0"},300);
	},function(){
		$(".next_page").delay(500).animate({top:"-32px"},300);
		$(".prev_page").delay(500).animate({bottom:"-32px"},300);
	})
	
	$(".prev_page,.next_page").click(function(){
		rdimg();
	})

})

var postData={};
var html_box='';
function rdimg(){
	$.ajax({
      type: 'POST',
      url:app_url+'/user/ajaxGetRandomUser',
      data: postData,
      success: function(data){
				var fpath;
        var _data = $.parseJSON(data);
				html_box='';
        for (var i=0;i<_data.length;i++ ){
					if (_data[i].file_path == ''){
						fpath = assets_url+"/images/head.png";
					}
					else{
						fpath = _data[i].file_path;
					}
					html_box += "<li><div class='litxt'>"+_data[i].nicknm+"<br>"+_data[i].job_label+"</div><img src='"+fpath+"' width='100' height='100' /></li>"
				}
				$("#pul").html(html_box);
      }
    });
}

function f(){
	var lt;
	lt = new Date;
	var secondsUntilNow = (lt.getHours()*60 + lt.getMinutes())*60 + lt.getSeconds();
	var newSeconds = secondsUntilNow * (25/24);
	var time_gap = newSeconds - secondsUntilNow;
  var minutes_gap = Math.floor(time_gap/60);
	var hours = Math.floor(newSeconds / 3600);
  var minutes = Math.floor((newSeconds - hours * 3600 )/60);
  var seconds = Math.floor( newSeconds - hours*3600 - minutes*60 );
	//return now;
	document.getElementById( 'l_time' ).innerHTML = ft(lt.getHours())+":"+ft(lt.getMinutes())+":"+ft(lt.getSeconds());
	document.getElementById( 'new_time' ).innerHTML = ft(hours) +":" + ft(minutes) +":"+ft(seconds);
	document.getElementById( 'add_time' ).innerHTML = Math.floor(minutes_gap);
}
			
function ft(tt){
	if (tt < 10){
		return '0'+tt;
	}else{
		return tt;
	}
}
			
var new_time=setInterval("f();",1000);
