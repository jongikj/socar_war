<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="box" style="text-align: center;">
   <div class="public_content_top">
      <div style="float:right; width:30%">
      <ul>
        <img id="content_regist_btn" style="margin-bottom: 7px;margin-top: 10px" src="resources/img/mainright.png" alt="main_right"></br>
        <img style="margin-bottom: 7px" src="resources/img/banner1.png" alt="banner1"></br>
        <img style="margin-bottom: 7px" src="resources/img/banner2.png" alt="banner2"></br>
        <img src="resources/img/banner3.png" alt="banner3"></br>
      </ul>
      </div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width: 70%">
          <!-- Indicators -->
          <ol class="carousel-indicators">
  			<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li style="background-color: gray;" data-target="#myCarousel" data-slide-to="1"></li>
            <li style="background-color: gray;" data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="resources/img/maincar1.png" alt="main_car1" width="1200" height="700">
              <div class="carousel-caption">
            </div>
           </div>
      
            <div class="item">
              <img src="resources/img/maincar2.png" alt="main_car2" width="1200" height="700">
              <div class="carousel-caption">
            </div>
           </div>
          
            <div class="item">
              <img src="resources/img/maincar3.png" alt="main_car3" width="1200" height="700">
              <div class="carousel-caption">
            </div>
            </div>
          </div>
      
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true" role="button" data-slide="prev" href="#myCarousel"></span>
            <span class="sr-only">Previous</span>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true" role="button" data-slide="next" href="#myCarousel"></span>
            <span class="sr-only">Next</span>
      </div>
   </div>
   <p style="width: 1069px; border: 1px; border-style: solid; border-color: #d9d9d9; margin:10 0 10px;"></p>
   <div class="public_content_bottom">
         <div class="rule1">
            <ul class="list_rule">
               <li><a onclick="customer.guide()" class="btn1 cursor_pointer"></a></li>
			   <li><a onclick="customer.company()" class="btn2 cursor_pointer"></a></li>
			   <li><a onclick="coupon.coupon_form_1()" class="btn3 cursor_pointer"></a></li>
               <li><a class="btn4 cursor_pointer"></a></li>
               <li><a class="btn5 cursor_pointer"></a></li>
            </ul>
  		</div>
	</div>
	<div class="notice">
		<ul class="tab">
			<li class="on">
				<a href="#" class="tab1">공지사항</a>
			</li>
			<li>
				<a href="#" class="tab2">자주묻는질문</a>
			</li>
		</ul>
		<div class="notice1" style="display:block;">
			<ul id="notice1" style="list-style: none;">
			</ul>
			<a onclick="customer.notice_list(1)" class="more">
				<img alt="더보기" src="resources/img/btn_more.png">
			</a>
		</div>
		<div class="notice2" style="display : none;">
			<ul style="list-style: none;">
				<li>
					<a href="#">세차가하고싶어요</a>
				</li>
				<li>
					<a href="#">이용 요금은 어떻게 지불..</a>
				</li>
				<li>
					<a href="#">신용카드만 가능한가요?</a>
				</li>
				<li>
					<a href="#">주유는 어떻게 해야하나요</a>
				</li>
			</ul>
			<a href="#" class="more">
				<img alt="더보기" src="resources/img/btn_more.png">
			</a>
			</div>
		</div>
</div>
<script>
var temp = '';
$.getJSON('/web/customer/home_list/1', function(data){
	$.each(data.list, function(i, notice){
		if(notice.title.length > 19){
			notice.title = notice.title.substring(0, 18) + '...';
		}
		temp +=
			 '<li style="white-space: nowrap; overflow: hidden;">'
			+'<a onclick="customer.customer_notice_content('+notice.customerSeq+', 1)">'+notice.title+'</a>'
			+'<img src="'+app.img()+'/ico_new.png">'
			+'</li>';
		});
	$('#notice1').html(temp);
});
</script>