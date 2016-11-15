/*
========= META_GROUP ====
@AUTHOR : kwchoi93180@gmail.com
@CREATE DATE : 2016-10-17
@UPDATE DATE : 2016-10-17
@DESC : coupon
==============================
 */
var COUPON_FORM = '<div id="container" class="box">' + '<div id="content">'
      + '<h2><img style="margin-left: 55px;" src="'
      + 'resources/img/coupon/couponbook_tit_n.gif" alt="쏘카 쿠폰북 - 쏘카 회원에게 드리는 쏘카 쿠폰으로 알뜰하게 카셰어링하세요!"></h2>'
      + '<div class="couponbook">'
      + '<div class="couponbook_cont">'
      + '<div class="box_tit"><h3 style="margin-right:90%"><img src="'
      + 'resources/img/coupon/couponbook_tit01.png" alt="반짝쿠폰"></h3></div>'
      + '<ul class="list_couponbook">';
var COUPON_LI = 
        '<li>'
      + '<div class="thumb"style="height:100px">'
      + '<img src="resources/img/coupon/brunch_web_img_thumb.jpg" style="max-width: 100%; height: auto;" alt="ap2/coupon/brunch_web_img_thumb.jpg">'
      + '</div>'
      + '<div class="cont">'
      + '<div class="tit_cont"style="margin-top:20%">'
      + '<p class="txt"><strong>주중 낮 5시간 9,900원!</strong></p>'
      + '<p class="tit">[오늘낮할인] 핫 하게 특.급.할.인!</p>'
      + '</div>'
      + '<div class="box_listcont">'
      + '<dl class="list_cont">'
      + '<dt>오픈기간</dt>'
      + '<dd class="period">2016.08.01 00시 ~ 2016.10.31 12시</dd>'
      + '</dl>'
      + '<dl class="list_cont">'
      + '<dt>유효기간</dt>'
      + '<dd class="period">2016년 10월 31일 17시 까지</dd>'
      + '</dl>'
      + '<dl class="list_cont">'
      + '<dt>사용조건</dt>'
      + '<dd style="width: 160px;">5시간 예약전용<br>'
      + '<a href="javascript: return false;" class="btn_moreview">자세히</a>'
      + '<div class="more_layer">'
      + '<div class="tit_more">쿠폰사용조건</div>'
      + '<div class="coupon-info" style="height:336px;overflow:auto;">'
      + '<dl style="margin-bottom: 5px;">'
      + '<dt>예약오픈시간</dt>'
      + '<dd>쿠폰 별 유효기간 내 상시오픈</dd>'
      + '</dl>'
      + '<dl style="margin-bottom: 5px;">'
      + '<dt>대여/반납 가능시간</dt>'
      + '<dd>주중 8시 ~ 17시 시간 내 대여/반납 가능</dd>'
      + '</dl>'
      + '<dl style="margin-bottom: 5px;">'
      + '<dt>예약가능시간 제한</dt>'
      + '<dd>총 5시간 예약시 사용가능<br>(이후 시간은 반납연장으로 대여 가능하며, 연장된 시간은 쿠폰가격이 아닌 기존가격으로 적용)</dd>'
      + '</dl>'
      + '<dl style="margin-bottom: 5px;">'
      + '<dt>차종제한</dt>'
      + '<dd>모닝/스파크/레이/프라이드/엑센트/아반떼/K3/티볼리/트랙스/K5 대여시 사용가능</dd>'
      + '</dl>'
      + '<dl style="margin-bottom: 5px;">'
      + '<dt>기타</dt>'
      + '<dd>제주공항/제주공항입구 교차로 존에서 사용불가<br>'
      + '왕복예약시 사용가능<br><br>'
      + '*이 쿠폰은 예고없이 종료될 수 있습니다*</dd>'
      + '</dl>'
      + '</div>'
      + '<a href="javascript:return false;" class="close">닫기</a>'
      + '</div>'
      + '</dd>'
      + '</dl>'
      + '</div>'
      + '<div class="box_bottom">'
      + '<div class="num">'
      + '<strong>3,450</strong>개 남음'
      + '</div>'
      + '<div class="btn downbtn"><!-- 2번 -->'
      + '</div>'
      + '</div>'
      + '<input id="coupon_content_recieve_3" type="button" style="margin-top:10%"class="btn btn-default btn-block" value="쿠폰받기"/>'
      + '</div>'
      + '</li>';

var COUPON_END =       
       '</ul>'
      + '<div class="box_tit"><h3><img src="'
      + 'resources/img/coupon/couponbook_tit02.png" alt="베이직쿠폰"></h3></div>'
      + '<div class="box_tit box_line"><h3><img src="'
      + 'resources/img/coupon/tit_more.gif" alt=""></h3><a href="http://blog.socar.kr/646" target="_blank" class="right"><img src="'
      + 'resources/img/coupon/couponbook_tit_more.png" alt=""></a></div>'
      + '<ul class="b_list">'
      + '<li class="fst">'
      + '<div class="thumb"><img src="'
      + 'resources/img/coupon/b_thumb01_n.png" alt=""></div>'
      + '<div class="tit">친구추천 쿠폰</div>'
      + '<div class="txt">'
      + '<p>초대받은 친구가 결제카드 등록 및 면허승인을 완료하면,<br>두분 모두에게 친구초대 쿠폰을 드려요.</p>'
      + '<div class="btn"><a style="cursor: pointer" onclick="javascript:quick_invite();">이메일 추천하기</a></div>'
      + '</div>'
      + '<div class="more">1만원 무료쿠폰 무제한 증정!</div>'
      + '</li>'
      + '<li>'
      + '<div class="thumb"><img src="'
      + 'resources/img/coupon/b_thumb02_n.png" alt=""></div>'
      + '<div class="tit">포토존 쿠폰</div>'
      + '<div class="txt">'
      + '<p>포토존에서 쏘카와 함께한 사진을 공유하면<br>쿠폰을 받을 수 있습니다.</p>'
      + '<div class="btn"><a href="http://m.socar.kr/community/?car_id=1152&amp;zone_id=906" target="_blank">사진 공유하기</a></div>'
      + '</div>'
      + '<div class="more">무료쿠폰 지급</div>'
      + '</li>'
      + '<li>'
      + '<div class="thumb"><img src="'
      + 'resources/img/coupon/b_thumb03_n.png" alt=""></div>'
      + '<div class="tit">많이 탈수록 쿠폰</div>'
      + '<div class="txt">'
      + '<p>쏘카를 반납할 때마다 이용 금액에 따라<br> 쿠폰을 적립해드려요!</p>'
      + '</div>'
      + '<div class="more">1만원이상 이용부터 쿠폰 지급</div>'
      + '</li>'
      + '</ul>'
      + '</div>'
      + '<div class="box_coupon_opt">'
      + '<img src="'
      + 'resources/img/coupon/img_coupon.png" alt="">'
      + '<a href="#" id="mycoupon" class="btn_01">내 쿠폰 확인하기</a>'
      + '<a href="http://www.socar.kr/reserve" class="btn_02">쏘카 예약 바로가기</a>'
      + '<div class="box_opt">'
      + '<div class="box_tit"><h3><img src="'
      + 'resources/img/coupon/couponbook_tit03.png" alt=""></h3></div>'
      + '<div class="box_opt_list">'
      + '<div class="top"></div>'
      + '<ul class="body">'
      + '<li>쿠폰은 <em>최초 대여요금에만 적용</em>됩니다. (보험료/주행요금/연장 대여요금에 적용 불가)</li>'
      + '<li>쿠폰은 예약 1건당 1개만 사용할 수 있으며 분할 적용 및 중복 적용은 불가합니다.</li>'
      + '<li>편도 예약시 편도 전용 쿠폰만 사용 가능하며, 편도요금에 대해서 할인이 제공됩니다.</li>'
      + '<li>편도 예약시 대여료는 할인이 불가합니다.</li>'
      + '<li>예약 완료 건에 대한 쿠폰 적용은 불가합니다.</li>'
      + '<li>예약 취소 시, 쿠폰은 유효기간이 남아있는 경우에만 재발급 됩니다.</li>'
      + '<li>주중전용 쿠폰은 주말 및 공휴일 사용이 불가합니다.<br>[주말 기준] 금요일 19:00 ~ 일요일 19:00 [공휴일 기준] 해당일 00:00 ~ 24:00</li>'
      + '<li>쿠폰 유효기간은 쿠폰 적용 가능한 기간입니다. (예 : 유효기간이 10월1일~10월31일인 경우: 10월 28일에 11월 10일 운행 건에 대해 예약 가능)</li>'
      + '<li>쿠폰은 대여료 할인 혜택만을 제공하며, 주행요금/하이패스 비용/취소 수수료는 별도로 과금됩니다.</li>'
      + '</ul>'
      + '<div class="bottom"></div>'
      + '</div>'
      + '</div>'
      + '</div>' + '</div>' + '</div>' + '</div>';
var coupon = (function() {
   var init = function() {
      onCreate();
   };
   var setContentView = function() {
   };

   var onCreate = function() {
      setContentView();
//      $('#quick').on('click', 'li:nth-child(1)', function() {
//         coupon.coupon_form_1();
//      });
      $('.quick4').click(function() {
         coupon.coupon_form_1();
      });
      $('.btn_moreview').click(
            function() {
               $(this).next(".more_layer").show();
               var $couponInfo = $(this).next(".more_layer").children(
                     '.coupon-info');// jquery 에 의해서 select
               return false;
            });

      $(".more_layer .close").click(function() {
         $(this).parent().hide();
         return false;
      });

      $("#mycoupon").click(function() {
         document.location.href = url;

         return false;
      });

      $('#coupon_content_recieve_3').click(function() {
         $.ajax({
            url : app.context() + '/coupon/getCoupon',
            type : 'GET',
            data : {},
            dataType : 'JSON',
            success : function(data) {
               alert('마이페이지 내 쿠폰에서 확인하세요!');
            }
         })
      });
     
   };
   return {
      init : init,
      onCreate : onCreate,
      test : function(couponMasterSeq){
    	  $.getJSON(app.context() + '/mycoupon/session', function(data){
    		  if(data.id === null){
                 alert("로그인을 해주세요");
              } else {
            	  $.ajax({
      				url : app.context()+'/mycoupon/my_coupon_check/'+couponMasterSeq,
      				success : function(data){
      					if(data.flag==="TRUE"){
      						alert(data.message);						
      					}else{
      						alert('마이페이지 내 쿠폰에서 확인하세요');
      						var join_info = {
   		                           'couponMasterSeq' : couponMasterSeq
   		                        };
   		             	         $.ajax({
   		             	              url : app.context() + '/mycoupon/regist',
   		             	              type : 'post',
   		         	                  contentType : 'application/json',
   		         	                  data : JSON.stringify(join_info),
   		         	                  dataType : 'json',
   		             	              success : function(data){
   		         							if(data.message === "success"){
   		         							var join_info = {
   		        		                           'couponMasterSeq' : couponMasterSeq
   		        		                        };
   		        		             	         $.ajax({
   		        		             	              url : app.context() + '/coupon/getCoupon',
   		        		             	              type : 'post',
   		        		         	                  contentType : 'application/json',
   		        		         	                  data : JSON.stringify(join_info),
   		        		         	                  dataType : 'json',
   		        		             	              success : function(data){
   		        		         							if(data.message === "success"){
   		        		         								coupon.coupon_form_1();
   		        		         							} else {
   		        		         								alert("서버 다녀왔는데 실패함");
   		        		         							}
   		        		         						},
   		        		         						error : function(x,s,m){
   		        		         							alert('getCoupon에러발생'+m);
   		        		         						}
   		        		             	           });
   		         							} else {
   		         								alert("서버 다녀왔는데 실패함");
   		         							}
   		         						},
   		         						error : function(x,s,m){
   		         							alert('getCoupon에러발생'+m);
   		         						}
   		             	           });
      		             	 
      					}
      					
      				},
      				error : function(x,s,m){
      					alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+error);
      				}
      			});
            	  
              }
    	  });
    	  
    	           
    	           

      },
      coupon_form_1 : function() {
         var coupon_content = COUPON_FORM;
         $.getJSON(app.context() + '/coupon/list', function(data){
            $.each(data.list, function(i, coupon){

               coupon_content +=
                    '<li>'
                  + '<div class="thumb"style="height:100px">'
                  + '<img src="resources/img/coupon/'+coupon.imgName+'"style="max-width: 100%; height: auto;" alt="쿠폰 이미지">'
                  + '</div>'
                  + '<div class="cont">'
                  + '<div class="tit_cont"style="margin-top:20%">'
                  + '<p class="txt"><strong></strong></p>'
                  + '<p class="tit">'+coupon.couponName+'</p>'
                  + '</div>'
                  + '<div class="box_listcont">'
                  + '<dl class="list_cont">'
                  + '<dt>오픈기간</dt>'
                  + '<dd class="period">'+coupon.openDateStart+' ~ '+coupon.openDateEnd+'</dd>'
                  + '</dl>'
                  + '<dl class="list_cont">'
                  + '<dt>유효기간</dt>'
                  + '<dd class="period">'+coupon.epDate+'</dd>'
                  + '</dl>'
                  + '<dl class="list_cont">'
                  + '<dt>사용조건</dt>'
                  + '<dd>'+coupon.optionHeader+'<br>'
                  + '<a class="btn_moreview">자세히</a>'
                  + '<div style="width: 313px;" class="more_layer">'
                  + '<div class="tit_more">쿠폰상세설명</div>'
                  + '<div class="coupon-info" style="height:336px;overflow:auto;">'
                  + '<dl style="margin-bottom: 5px;">'
                  + '<dt>'+coupon.optionHeader+'</dt>'
                  + '<dd>'+coupon.optionDetail+'</dd>'
                  + '</dl>'
                  + '</div>'
                  + '<a class="close">닫기</a>'
                  + '</div>'
                  + '</dd>'
                  + '</dl>'
                  + '</div>'
                  + '<div class="box_bottom">'
                  + '<div id="num" class="num">'
                  + '<strong>'+coupon.couponCount+'</strong>개 남음'
                  + '</div>'
                  + '<div class="btn downbtn">'
                  + '</div>'
                  + '</div>';
                 
               if(coupon.couponCount<=0){
                	  coupon_content += '<input id="coupon_content_recieve_3" type="button" style="margin-top:10%" class="btn btn-default btn-block" value="쿠폰받기">'
                		   
                  }else{
                	
                	  coupon_content +='<input id="coupon_content_recieve_3" type="button" style="margin-top:10%" class="btn btn-default btn-block" value="쿠폰받기" onclick="coupon.test('+ coupon.couponMasterSeq +')">'
                	  }
               		
               coupon_content += '</div>'
                	                + '</li>';
            	});
            coupon_content += COUPON_END;
            $('#pub_article').html(coupon_content);
            $('.btn_moreview').click(function() {
                   $(this).next(".more_layer").show();
                   var $couponInfo = $(this).next(".more_layer").children(
                         '.coupon-info');
                   return false;
            });
            $(".more_layer .close").click(function() {
                $(this).parent().hide();
                return false;
            });
         });
      },
      coupon_content : function() {
         $.getJSON(app.context() + '/coupon/list/', function(data) {

            var coupon_content = $.each(data.list, function(i, coupon) {

            }); //else 의 $.each 끝

         });

      }

   }

})();