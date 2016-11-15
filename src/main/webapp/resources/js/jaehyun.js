var member = (function(){
	var init = function(){onCreate();};
	var setContentView = function(){
	$('#content_regist_btn').addClass('cursor_pointer');
	};
	
	var onCreate = function(){
		setContentView();
		$('#login_cancel_btn').click(function() {controller.home();});
		$('#header_regist_btn, #content_regist_btn').click(function(){member.regist();});
		$('#header_login_btn').click(function() {member.pub_signin();});
		$(".gnb li:nth-child(5)").click(function(){member.mypage();});
	};
	
	return{
		init : init,
		setContentView : setContentView,
		onCreate : onCreate,
		pub_signin: function(){
			$('#pub_article').html(SIGNIN_FORM);
			member.init();
			$('#login_btn').click(function(e){
				e.preventDefault();
				$.ajax({
					url : app.context() + '/member/signin',
					type : 'POST',
					data : {'id' : $('#login_id').val(),
							'pw' : $('#login_pw').val()},
					dataType : 'JSON',
					success : function(data){
						if(data.id == 'NONE'){
							alert("ID나 비밀번호가 일치하지 않습니다.");
						} else {
							if(data.id == 'admin'){
								$('#pub_header').html(ADMIN_HEADER_FORM);
							} else {
								$('#pub_header').html(USER_HEADER_FORM);
								$('#header_user_name').text(data.name + ' 님');
							}
							var content = 
								 '<div class="box" style="text-align: center;">'
								+'<div class="public_content_top">'
								+'<div style="float:right; width:30%">'
								+'<ul>'
								+'<img id="content_regist_btn" style="margin-bottom: 7px;margin-top: 10px" src="resources/img/mainright.png" alt="main_right"></br>'
								+'<img style="margin-bottom: 7px" src="resources/img/banner1.png" alt="banner1"></br>'
								+'<img style="margin-bottom: 7px" src="resources/img/banner2.png" alt="banner2"></br>'
								+'<img src="resources/img/banner3.png" alt="banner3"></br>'
								+'</ul>'
								+'</div>'
								+'<div id="myCarousel" class="carousel slide" data-ride="carousel" style="width: 70%">'
								 +'<!-- Indicators -->'
								 +'<ol class="carousel-indicators">'
								+'<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="0" class="active"></li>'
								+'<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="1"></li>'
								+'<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="2"></li>'
								 +'</ol>'
								 +'<div class="carousel-inner" role="listbox">'
								+'<div class="item active">'
								+'<img src="resources/img/maincar1.png" alt="main_car1" width="1200" height="700">'
								+'<div class="carousel-caption">'
								+'</div>'
								+'</div>'
								+'<div class="item">'
								+'<img src="resources/img/maincar2.png" alt="main_car2" width="1200" height="700">'
								+'<div class="carousel-caption">'
								+'</div>'
								+'</div>'
								+'<div class="item">'
								+'<img src="resources/img/maincar3.png" alt="main_car3" width="1200" height="700">'
								+'<div class="carousel-caption">'
								+'</div>'
								+'</div>'
								+'</div>'
								+'<span class="glyphicon glyphicon-chevron-left" aria-hidden="true" role="button" data-slide="prev" href="#myCarousel"></span>'
								+'<span class="sr-only">Previous</span>'
								+'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true" role="button" data-slide="next" href="#myCarousel"></span>'
								+'<span class="sr-only">Next</span>'
								+'</div>'
								+'</div>'
								+'<p style="width: 1069px; border: 1px; border-style: solid; border-color: #d9d9d9; margin:10 0 10px;"></p>'
								+'<div class="public_content_bottom">'
								+'<div class="rule1">'
								+'<ul class="list_rule">'
								+'<li><a class="btn1 cursor_pointer"></a></li>'
								+'<li><a class="btn2 cursor_pointer"></a></li>'
								+'<li><a class="btn3 cursor_pointer"></a></li>'
								+'<li><a class="btn4 cursor_pointer"></a></li>'
								+'<li><a class="btn5 cursor_pointer"></a></li>'
								+'</ul>'
								+'</div>'
								+'</div>'
								+'<div class="notice">'
								+'<ul class="tab">'
								+'<li class="on">'
								+'<a href="#" class="tab1">공지사항</a>'
								+'</li>'
								+'<li>'
								+'<a href="#" class="tab2">자주묻는질문</a>'
								+'</li>'
								+'</ul>'
								+'<div class="notice1" style="display:block;">'
								+'<ul id="notice1" style="list-style: none;">';
								$.getJSON(app.context() + '/customer/home_list/1', function(data){
									$.each(data.list, function(i, notice){
										if(notice.title.length > 19){
										notice.title = notice.title.substring(0, 18) + '...';
										}
										content +=
										 '<li style="white-space: nowrap; overflow: hidden;">'
										+'<a onclick="customer.customer_notice_content('+notice.customerSeq+', 1)">'+notice.title+'</a>'
										+'<img src="resources/img/ico_new.png">'
										+'</li>';
									});
									content +=
										'</ul>'
										+'<a href="#" class="more">'
										+'<img alt="더보기" src="resources/img/btn_more.png">'
										+'</a>'
										+'</div>'
										+'<div class="notice2" style="display : none;">'
										+'<ul style="list-style: none;">'
										+'<li>'
										+'<a href="#">세차가하고싶어요</a>'
										+'</li>'
										+'<li>'
										+'<a href="#">이용 요금은 어떻게 지불..</a>'
										+'</li>'
										+'<li>'
										+'<a href="#">신용카드만 가능한가요?</a>'
										+'</li>'
										+'<li>'
										+'<a href="#">주유는 어떻게 해야하나요</a>'
										+'</li>'
										+'</ul>'
										+'<a href="#" class="more">'
										+'<img alt="더보기" src="resources/img/btn_more.png">'
										+'</a>'
										+'</div>'
										+'</div>'
										+'</div>';
									$('#pub_article').html(content);
							});
							member.logout();
						}
					   admin.init();
					   customer.init();
					   member.init();
					   coupon.init();
					   booking.init();
					},
					error : function(x, s, m){
						alert("로그인 중 에러발생" + m);
					}
				});	//login_btn 의 ajax 끝
			});		//login_btn click 끝
		},	//pub_signin 끝
		logout : function(){
			$('#header_logout_btn').click(function(e){
				location.href = app.context() + '/member/logout';
			});
		},
		mypage : function(){
				$.getJSON(app.context() + '/member/session', function(data){
					if(data.id == null){
						alert("로그인을 해주세요");
					} else {
						$('#pub_article').html(MYINFO_FORM);
						$('#mypage_name').text(data.name);
						$('#mypage_email').val(data.email);
						$('#mypage_pw').val(data.pw);
						$('#mypage_phone').val(data.phone);
						$('#mypage_addr').val(data.address);
						$('#mypage_lic_end').val(data.licenseEnd);
						$('#mypage_lic_start').val(data.licenseStart);
						$('select[name="lic_region"] option[value="'+ data.licenseNum.substring(0, 2) +'"]').attr("selected", "selected");
						$('#mypage_lic_num').val(data.licenseNum.substring(3, 15));
						
						switch (data.licenseType) {
						case "1종보통":
							$('#mypage_type1').attr("checked", "checked");
							break;
						case "2종보통":
							$('#mypage_type2').attr("checked", "checked");
							break;
						case "1종대형":
							$('#mypage_type3').attr("checked", "checked");
							break;
						}
						/*if(data.licenseType === "1종보통"){
							$('#mypage_type1').attr("checked", "checked");
						} else if(data.licenseType === "2종보통"){
							$('#mypage_type2').attr("checked", "checked");
						} else {
							$('#mypage_type3').attr("checked", "checked");
						}*/
					$('#btn_update_basic').click(function() {
						var up_email = $('#mypage_email').val();
						var up_pw = $('#mypage_pw').val();
						var up_phone = $('#mypage_phone').val();
						var up_address = $('#mypage_addr').val();
						var up_licenseEnd = $('#mypage_lic_end').val();
						var up_licenseStart = $('#mypage_lic_start').val();
						var up_licenseNum =   $('select[name="lic_region"] option:selected').val()+'-'+$('#mypage_lic_num').val();
						var up_licenseType = $('input:radio[name=myinfo_licenseType]:checked').val();
						var update_info = {
								email : up_email,
								pw : up_pw,
								phone : up_phone,
								address : up_address,
								licenseEnd :up_licenseEnd,
								licenseStart : up_licenseStart,
								licenseType : up_licenseType,
								licenseNum : up_licenseNum,
						};
						$.ajax({
							url : app.context()+'/member/update',
							type : 'post',
							contentType : 'application/json',
							data : JSON.stringify(update_info),
							dataType : 'json',
							success : function(data){
							alert("회원정보가 변경되었습니다.")
							},
							error : function(xhr,status,msg){
								alert('회원가입 시 에러발생'+msg); 
							}
						});
						
					});
					$('#cardinfo_reg_button').click(function() {
						var card_info = {
								cardNum : $('#my_card_num1').val() + '-' + $('#my_card_num2').val() + '-' + $('#my_card_num3').val() + '-' + $('#my_card_num4').val(),
								cardYear : $('#my_card_year').val(),
								cardMonth : $('#my_card_month').val(),
								cardPw : $('#my_card_pw').val(),
								businessNum : $('#myinfo_business_num1').val()+'-'+$('#myinfo_business_num2').val()+'-'+$('#myinfo_business_num3').val(),
								id : data.id
						}
						if($('#mypage_card_change').text() === '등록하기'){
							//insert 
							
							$.ajax({
								url : app.context() + '/card/cardRegist',
								type : 'post',
								contentType : 'application/json',
								data : JSON.stringify(card_info),
								dataType : 'json',
								success : function(insert){
									alert("카드등록이 완료되었습니다.");
									$('#mypage_card_num').text(card_info.cardNum);
									$('#mypage_card_change').text("변경하기");
								},
								error : function(m) {
									alert('카드 등록 중 에러 발생' + m);
								}
							});
						}else{
							$.ajax({
								url : app.context() + '/card/cardUpdate',
								type : 'post',
								contentType : 'application/json',
								data : JSON.stringify(card_info),
								dataType : 'json',
								success : function(insert){
									alert("카드변경이 완료되었습니다.");
									$('#mypage_card_num').text(card_info.cardNum);
									$('#mypage_card_change').empty().text("변경완료").css('color', 'blue').css('margin-left','20px');
/*									text("변경완료").css('color', 'red');
									'<a id="mypage_card_change" class="card_del btn_del" data-toggle="modal" data-target="#myModal">변경하기</a>'
*/								},
								error : function(m) {
									alert('카드 등록 중 에러 발생' + m);
								}
							});
						}
					});
					////////회원탈퇴 시작
					
					$('#btn_user_drop').click(function(e) {
						e.preventDefault();
						alert("회원 탈퇴 후에는 3개월간 재가입이 불가능하며쿠폰/크레딧도 모두 소멸 됩니다 탈퇴를 신청하시겠습니까?");
						$.ajax({
							url : app.context() + '/member/unregist',
							type : 'post',
							success : function(data){
								alert("그동안 이용해주셔서 감사합니다")
								location.href = app.context()+'/';
							},
							error : function(x,s,m) {
								alert("회원탈퇴시 에러 발생"+m)
							}
						});
					});
					
					
					}
					$.getJSON(app.context() + '/card/find/id/' + data.id, function(cardData){
						if(cardData.cardNum == null){
							$('#mypage_card_num').text("카드를 등록해주세요.");
							$('#mypage_card_change').text("등록하기");
						} else {
							$('#mypage_card_num').text(cardData.cardNum);
						}
					});
					$("#show_b").hide();	//마이페이지 카드폼 개인, 법인 변경 시작
					$("input[name=cardType]").change(function() {
					   var radioValue = $(this).val();
					   if (radioValue == "p-card") {
					      $("#show_p2").show();
					      $("#show_b").hide();
					   } else if (radioValue == "b-card") {
					      $("#show_b").show();
					      $("#show_p2").hide();
					   } 
					});	// 마이페이지 카드폼 개인, 법인 변경 끝
				});
				
		},	//mypage 끝
		regist : function(){
			var temp = 0;
			$('#pub_article').html(REGIST_FORM);
			$('#check_dup').click(function() {
				if (util.pwChecker($('#regist_id').val())==='yes') {
					$.ajax({
						url : app.context() + '/member/check_dup/' + $('#regist_id').val(),
						success : function(data, e){
							if(data.flag === 'TRUE') {
								alert("이미 존재하는 ID입니다.");
								temp = 0;
								$('#check_dup').attr("value", "다시 조회");
							} else {
								alert("사용할 수 있는 ID 입니다.");
								temp = 1;
								$('#check_dup').attr("value", "그대로 사용");
							}
						}
					});	
				} else {
					alert("4자리 이상입력해주세요");
				}
							
				//regist if 끝
			});
			
			/*if(!$('$regist_password').val().equals$('#regist_password_confirm').val()){
			alert('if 분기 진입');
				$('#confirm_msg').text("비번이 일지하지 않습니다")	
			}*/
			 $(function() {
				 
		            $('#regist_password').keyup(function() {
		               $('font[name=check]').text('');
		            });
		            $('#regist_password_confirm').keyup(function() {
		            	if (util.pwChecker($('#regist_password').val())==='yes') {  
		            	if($('#regist_password').val()!=$('#regist_password_confirm').val()){
		            	   $('#id_font').text("비밀번호가 일치하지 않습니다.").css('color', 'red').css('float','right');
		               }else{
		            	   $('#id_font').text("비밀번호가 일치합니다.").css('color', 'green').css('float','right');
		               }
		            	}else{
		            		$('#id_font').text("4자리이상 입력하시오.").css('color', 'blue').css('float','right');
		            	}
		            
		            });
				
		      });
					
			 			 
			$('#reg_btn').click(function() {
				var id = $('#regist_id').val();
				var pw = $('#regist_password').val();
				var name = $('#regist_name').val();
				var email = $('#regist_email').val();
				var phone = $('#regist_phone').val();
				var address = $('#regist_address').val();
				if(temp == 0){
					alert('ID 중복체크를 해주세요');
				} else {
					if($('#regist_id').val() === '' || $('#regist_password').val() === '' || $('#regist_name').val() === '' || $('#regist_email').val() === '' || $('#regist_phone').val() === ''|| $('#regist_address').val() === ''){
						alert("회원정보를 전부 입력해주세요.");
					} else {
					
						$('#pub_article').html(LICENSE_FORM);
							$('#licese_complete').click(function(e) {
								var licenseType = $('input:radio[name=licenseType]:checked').val();
								var licenseNum =   ($('#license_loc option:selected').val()
										+'-'+$('#license_num1_reg').val()
										+'-'+$('#license_num2_reg').val()
										+'-'+$('#license_num3_reg').val()); 
								var licenseEnd = 
										 ($('#license_end_year_reg').val()
										 +'-'+$('#license_end_month_reg').val()
										+'-'+$('#license_end_day_reg').val()) 	
								var licenseStart = 
										($('#license_start_year_reg').val()
												+'-'+$('#license_start_month_reg').val()
												+'-'+$('#license_start_day_reg').val()) 
								var ssn1 = $('#ssn1').val();
								var gender = $('input:radio[name=gender]:checked').val();
								var flag = 0;
								e.preventDefault();
								var join_info = {
										id : id,
										pw : pw,
										name : name,
										email : email,
										address :address,
										phone : phone,
										licenseType : licenseType,
										licenseNum : licenseNum,
										licenseEnd : licenseEnd,
										licenseStart : licenseStart,
										birth : ssn1,
										gender : gender
								};
								$.ajax({
									url : app.context()+'/member/regist',
									type : 'post',
									contentType : 'application/json',
									data : JSON.stringify(join_info),
									dataType : 'json',
									success : function(data){
									},
									error : function(xhr,status,msg){
										alert('회원가입 시 에러발생'+msg); 
									}
								});
								
								var card_num = $('#card_msg').text();
								if(card_num != '' && $('#card_msg').text() != "중복되는 카드 번호입니다. 다른 카드로 변경해주세요"){
									var card_info = {
											cardNum : card_num,
											cardYear : $('#card_year').val(),
											cardMonth : $('#card_month').val(),
											cardPw : $('#card_pw').val(),
											businessNum : $('#business_num1').val()+'-'+$('#business_num2').val()+'-'+$('#business_num3').val(),
											id : id
									}
									$.ajax({
										url : app.context() + '/card/cardRegist',
										type : 'post',
										contentType : 'application/json',
										data : JSON.stringify(card_info),
										dataType : 'json',
										success : function(data){
										},
										error : function(m) {
											alert('카드 등록 중 에러 발생' + m);
										}
									});
								}
								alert('회원가입이 완료되었습니다.');
								controller.home();
							});
							
							$('#card_reg_btn').click(function() {
								var card_num = $('#card_reg_num1').val() + '-' + $('#card_reg_num2').val() + '-' + $('#card_reg_num3').val() + '-' + $('#card_reg_num4').val();
								$.getJSON(app.context() + '/card/find/card_num/' + card_num, function(data){
									if(data.cardNum == null){
										$('#card_msg').text(card_num).css('color', 'green');
										flag = 0;
									} else {
										$('#card_msg').text("중복되는 카드 번호입니다. 다른 카드로 변경해주세요").css('color', 'red');
										flag = 1;
									}
								});
							});
							
							$("#show_b").hide();	//마이페이지 카드폼 개인, 법인 변경 시작
							$("input[name=cardType]").change(function() {
							   var radioValue = $(this).val();
							   if (radioValue == "p-card") {
							      $("#show_p2").show();
							      $("#show_b").hide();
							   } else if (radioValue == "b-card") {
							      $("#show_b").show();
							      $("#show_p2").hide();
							   } 
							});	// 마이페이지 카드폼 개인, 법인 변경 끝
							
					
							/*$('#card_reg_btn').click(function() {
								alert('1111');
								
								var card_reg_num1 = ($('#card_reg_num1').val()+'-'+$('#card_reg_num2').val()+'-'+$('#card_reg_num3').val()+'-'+$('#card_reg_num4').val());
								var business_num = ($('#business_num1').val()+'-'+$('#business_num2').val()+'-'+$('#business_num3').val());
								var card_year = $('#card_year option:selected').val();
								var card_month = $('#card_month option:selected').val();
								var card_pw = $('#card_pw').val();
								
								
								var card_info = {
										id : id,
										cardNum : card_reg_num1,
										businessNum : business_num,
										cardYear : card_year,
										cardMonth : card_month,
										cardPw :card_pw
								};
								alert('아이디'+id);
								alert('카드번호'+card_reg_num1);
								alert('사업자번호'+business_num);
								alert('유효기간 년'+card_year);
								alert('유효기간 월'+card_month);
								alert('카드비밀번호'+card_pw);
								alert('즉시실행businessNum '+card_info.businessNum);
								$.ajax({
									url : app.context()+'/card/cardRegist',
									type : 'post',
									contentType : 'application/json',
									data : JSON.stringify(card_info),
									dataType : 'json',
									success : function(data){
									alert('카드레지결과 : '+data.message);
									if (data.message==='success') {
									alert('카드성공진입');
																		
										} else {
											alert('카드등록분기만만만 성공');
										}
									},
									error : function(xhr,status,msg){
										alert('카드등록 시 에러발생'+msg); 
									}
								});
								
							});*/
					}
				}
			});
		},	//regist의 끝
		history : function(){
			$.getJSON(app.context() + '/member/session', function(session) {
				$.getJSON(app.context() + '/history/list/' + session.id, function(data){
					var MYHISTORY_FORM = 
						'<div id="mypage" class="reservation box">'
						+'<div id="container">'
						+'<div id="content">'
						+'<h2><img src="resources/img/mypage/h2.gif" alt="[마이페이지] 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
						+'<div class="info_lnb">'
						+'<!-- lnb -->'
						+'<ul id="info_nav" class="info_lnb">'
						+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
						+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
						+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
						+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
						+'</ul>'
						+'<div class="section" style="float: left">'
						+'<div class="group" style="width: 743px">'
						+'<h3 class="tit_corp">'
						+'<img src="resources/img/mypage/reservation_txt1.gif" alt="예약내역" /> <span>'+data.totCount+'</span> <img src="resources/img/mypage/reservation_txt2.gif" alt="건" />'
						+'</h3>'
						+'<div class="gbx">'
						+'<ul>'
						+'<li>예약변경은 반납연장만 가능합니다. 대여기간 수정, 지역 및 차종 변경은 취소 후 새로 예약해주세요.</li>'
						+'<li>반납연장은 반납 예정 시각 30분 이전까지만 가능하며, 다른 회원의 예약이 이미 존재하는 경우에는 반납연장이 불가합니다.</li>'
						+'<li>예약취소 시 대여요금과 보험료의 각 10%에 해당하는 수수료가 부과될 수 있습니다.</li>'
						+'</ul>'
						+'</div>'; // 예약 머리 끝
						if(data.totCount == 0){
							MYHISTORY_FORM +=
								 '<div class="result_none">'
								+'<p>예약내역이 없습니다.</p>'
								+'</div>';
						} else {
							MYHISTORY_FORM +=
								'<table cellspacing="0" class="cols">'
								+'<thead>'
								+'<tr>'
								+'<th>예약번호</th>'
								+'<th colspan="2">예약</th>'
								+'<th>총 요금</th>'
								+'<th>결제상태</th>'
								+'<th>결제/취소</th>'
								+'</tr>'
								+'</thead>'
								+'<tbody>';
							$.each(data.list, function(i, history){
								var statusNum = 0;
								var start = history.startDate.split('-');
								var end = history.endDate.split('-');
								var start2 = 0;
								var end2 = 0;
								var show_start = start[0] + '-' + start[1] + '-' + start[2].substring(0,2);
								var show_end = end[0] + '-' + end[1] + '-' + end[2].substring(0,2);
								start2 = start[2].substring(0,2)
								end2 = end[2].substring(0,2);
								var total_date = (start2 - end2) * -1;
								var status = '';
								if(history.status == 'N'){
									status = '결제가능';
									statusNum = 0;
								} else {
									status = '결제완료';
									statusNum = 1;
								}
								MYHISTORY_FORM +=
									 '<tr>'
									+'<td>'+history.rentSeq+'</td>'
									+'<td>'
									+'<p class="thumb">'
									+'<em class="car_id" style="display:none;">4325</em>'
									+'<a class="carDetail">'
									+'<img src="resources/img/booking/'+history.carImg+'">'
									+'</a>'
									+'</p>'
									+'</td>'
									+'<td class="info">'
									+'<h4>'
									+'<a class="carDetail">'+history.carType+'</a> '+history.carNum+''
									+'</h4>'
									+'<div class="desc">'
									+''+show_start+' ~ '+show_end+' <br>'
									+'총 '+ total_date +'일<br>'
									+'<a class="socarzoneDetail">'+history.socarZone+'</a>'
									+'</div>'
									+'</td>'
									+'<td style="text-align: center;" class="price">'
									+'<a class="btn_payment_detail" >'+history.price+'원</a>'
									+'</td>'
									+'<td style="text-align: center;" class="status">'
									+'<a class="btn_payment_status'+history.rentSeq+' status" >'+status+'</a>'
									+'</td>'
									+'<td>'
									+'<a id="btn_payment" class="btnS rvExtendB">'
									+'<span onclick="member.payment('+history.rentSeq+','+history.price+')">결제</span></a>'
									+'<a id="btn_payment" class="btnS rvExtendB">'
									+'<span onclick="member.rent_cancel('+history.rentSeq+','+history.couponMemberSeq+', '+statusNum+')">취소</span>'
									+'</a>'
									+'</td>'
									+'</tr>'
								});
							MYHISTORY_FORM +=
								 '</tbody>'
								+'</table>'
								+'</div>';
					}
						$('#pub_article').html(MYHISTORY_FORM);
				});
			});
		
		},
		my_coupon: function(){
			$.getJSON(app.context() + "/member/session", function(session){
				$.getJSON(app.context() + "/mycoupon/list/" +session.id, function(data){
					var frame = '';
					console.log('토탈 카운트' + data.totCount);
					var MYCOUPON_FORM = 
						'<div id="mypage" class="my_coupon box">'
						+'<div id="container">'
						+'<div id="content">'
						+'<h2><img src="resources/img/mypage/h2.gif" alt="마이페이지 - 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
						+'<div class="info_lnb">'
						+'<!-- lnb -->'
						+'<ul id="info_nav" class="info_lnb">'
						+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
						+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
						+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
						+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
						+'</ul>'
						+'<!-- //lnb -->'
						+'<div class="my_coupon_section">'
						+'<div style="width: 800px;" class="group">'
						+'<h3><img src="resources/img/mypage/coupon_txt1.gif" alt="내 쿠폰" /><span>'+data.totCount+'</span> <img src="resources/img/mypage/coupon_txt2.gif" alt="개" /></h3>'
						+'<p class="coupon-add">'
						+'<a class="couponAddB">'
						+'<img src="resources/img/mypage/btn_coupon.gif" alt="쿠폰 등록하기" />'
						+'</a>'
						+'</p>'
						+'<div class="gbx">'
						+'<ul style="list-style: circle;">'
						+'<li>쿠폰은 <em>최초 대여요금에만 적용</em>됩니다. (보험료/주행요금/연장 대여요금에 적용 불가)</li>'
						+'<li>쿠폰은 예약당 1개만 사용가능합니다. (중복적용 불가)</li>'
						+'<li>주중전용 쿠폰은 주말 및 공휴일 사용이 불가능합니다.</li>'
						+'<li>편도 예약시 편도 전용 쿠폰만 사용 가능하며, 편도요금에만 할인이 제공됩니다. (대여료 할인 불가)</li>'
						+'<li>예약 취소시, 쿠폰은 유효기간 내에만 재발급됩니다.</li>'
						+'<li>제주공항/제주공항교차로존은 전용쿠폰을 제외한 모든 쿠폰적용이 불가합니다.</li>'
						+'<li class="tip"><em>[주말 기준]</em> 금요일 19:00 ~ 일요일 19:00</li>'
						+'<li class="tip"><em>[공휴일 기준]</em> 해당일 00:00 ~ 24:00</li>'
						+'</ul>'
						+'</div>'
						+'<table cellspacing="0" class="cols">'
						+'<thead>'
						+'<tr>'
						+'<th>쿠폰</th>'
						+'<th>유효기간</th>'
						+'<th>상태</th>'
						+'</tr>'
						+'</thead>'
						+'<tbody>';
					frame += MYCOUPON_FORM;
					if(data.totCount == 0){
						frame += 
							'<tr"><td colspan=3>보유하고 있는 쿠폰이 없습니다.</td></tr>';
					} else {
						var status = '';
						$.each(data.list, function(i, coupon){
							if(coupon.useFlag == 'Y'){
								status = '사용불가';
							} else {
								status = '사용가능';
							}
							frame +=
								 '<tr>'
								+'<td class="info"style="text-align:left">'
								+'<h4 class="coupon_usage" style="text-decoration:none;font-size:15px;font-weight:bold">'+coupon.couponName+'</h4>'
								+'<div class="desc"style="color:gray">'+coupon.optionHeader+'</div><br>'
								+'<ul class="list_info">'
								+'<li style="width: 550px;">'+coupon.optionDetail+'</li>'
								+'</ul>'
								+'<td class="expire">'+coupon.openDateStart+' ~ '+coupon.openDateEnd+'</td>'
								+'<td class="status">'+status+'</td>'
								+'</tr>';
							});
					}
					frame +=
						'</tbody>'
						+'</table>'
						+'</div>'
						+'<div style="padding-top:30px;">'
						+'<a><img style="width: 100%;" src="resources/img/mypage/coupon_couponbook.gif" alt="쏘카의 다양한 쿠폰혜택 살펴보세요! 쏘카 쿠폰북 바로가기" /></a>'
						+'</div></div></div></div></div></div>';
					$('#pub_article').html(frame);
				});
			});
		}, //마이쿠폰 끝
		my_pay : function(pgNum){
			$.getJSON(app.context() + '/member/session', function(session){
				$.getJSON(app.context() + '/payment/find/id/' + session.id + '/' + pgNum, function(data){
					var frame = '';
					var startPg = data.startPg;
					var lastPg = data.lastPg;
					var pgSize = data.pgSize;
					var totPg = data.totPg;
					var groupSize = data.groupSize;
					var totCount = data.totCount;
					console.log('스타트 페이지' + startPg);
					console.log('라스트 페이지' + lastPg);
					console.log('페이지 사이즈' + pgSize);
					console.log('토탈 페이지' + totPg);
					console.log('그룹 사이즈' + groupSize);
					console.log('페이지 넘버' + pgNum);
					console.log('토탈 카운트' + totCount);
					var MYPAY_FORM = 
					'<div id="mypage" class="payment box"><div id="container">'
					+'<div id="content">'
					+'<h2><img src="resources/img/mypage/h2.gif" alt="[마이페이지] 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
					+'<div class="info_lnb">'
					+'<!-- lnb -->'
					+'<ul style="margin-bottom: 0px" id="info_nav" class="info_lnb">'
					+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
					+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
					+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
					+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
					+'</ul>'
					+'<!-- //lnb -->'
					+'<div style="margin-left: 85px" class="section">'
					+'<div style="width: 100%;" class="group">'
					+'<h3 class="tit_corp">'
					+'<img src="resources/img/mypage/payment_txt1.gif" alt="결제내역" />'
					+'</h3>'
					+'<div style="width: 550px" class="gbx">'
					+'<ul>'
					+'<li>요금 결제 시 보유 크레딧이 있으면 크레딧으로 결제 후 부족 금액만 결제카드로 청구합니다.</li>'
					+'<li>결제카드 변경은 내 정보 페이지에서 할 수 있습니다.'
					+'</li>'
					+'</ul>'
					+'</div>'
					+'<div class="my_pay_section">'
					+'<div class="history_grdoup">'
					+'<table style="width: 550px;" cellspacing="0" class="cols">'
					+'<colgroup><col><col><col width="270"><col><col><col></colgroup>'
					+'<thead>'
					+'<tr>'
					+'<th style="width: 70px;">결제일</th>'
					+'<th>결제수단</th>'
					+'<th>금액</th>'
					+'</tr>'
					+'</thead>'
					+'<tbody>';
					frame += MYPAY_FORM
					if(totCount == 0){
						frame += 
							'<tr><td colspan=3>결제 내역이 없습니다.</td></tr>'
					} else {
						$.each(data.list, function(i, payment){
							var split = payment.paymentDate.split('-');
							frame +=
								 '<tr>'
								+'<td>'+split[0]+'-'+split[1]+'-'+split[2].substring(0,2)+'</td>'
								+'<td class="method">신용카드</td>'
								+'<td style="text-align: center;" class="price">'+payment.paymentAmt+'</td>'
								+'</td>'
								+'</tr>'
						});
						frame +=
							'</tbody>'
							+'</table>';
						var pagination = 
							'<nav aria-label="Page navigation">'
							+'<ul class="paginate">';
						var temp_num;
						if(pgNum > groupSize){
							var temp;
							if(pgNum % groupSize == 0){
								temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
							}else{
								temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
							}					
							var temp2 = 1;
							pagination +=
								'<a onclick="member.my_pay(' + temp2 + ')" aria-label="Previous">'
								+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
								+'</a>'
								+'<a onclick="member.my_pay(' + temp + ')" aria-label="Previous">'
								+'<span aria-hidden="true"><</span>'
								+'</a>';
						}
						for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
							if(i == pgNum){
								pagination += '<font color="blue"><strong>' + i + '</strong></font>';
							} else {
								pagination += '<a onclick="member.my_pay('+ i +')">' + ' ' + i + ' ' + '</a>';
							}
							temp_num = i;
						}
						if(temp_num != totPg){ //0~9
							var temp3;
							if(pgNum % groupSize == 0){
								temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
							}else{
								temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
							}
							var temp4 = totPg;
							pagination += 
								'<a onclick="member.my_pay(' + temp3 + ')" aria-label="Next">'
								+'<span aria-hidden="true">></span>'
								+'</a>'
								+'<a onclick="member.my_pay(' + temp4 + ')" aria-label="Next">'
								+'<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
								+'</a>';
						}
						pagination += '</ul></nav>';
						frame += pagination;
					}
					frame += 
						 '</div>'
						+'</div></div></div></div></div></div></div>';
					$('#pub_article').html(frame);
				});//페이먼트 파인드
			}); //멤버 세션
		},
		payment : function(rentSeq, price){
			$.getJSON(app.context() + '/history/find/rent_seq/' + rentSeq + '/1', function(flag){
				if(flag.status == 'Y'){
					alert("이미 결제된 내역입니다.");
				} else {
					$.getJSON(app.context() + '/member/session', function(session){
						$.getJSON(app.context() + '/card/find/id/' + session.id, function(card){
							var pay_info = {
									rentSeq : rentSeq,
									paymentAmt : price,
									id : session.id,
									cardNum : card.cardNum
							};
							$.ajax({
								url : app.context() + '/payment/pay',
								type : 'POST',
								data : JSON.stringify(pay_info),
								dataType : 'JSON',
								contentType : 'application/json',
								success : function(data) {
									$.getJSON(app.context() + '/history/useStatus/' + rentSeq, function(status) {
										alert('결제가 완료되었습니다.');
										$('.btn_payment_status'+rentSeq+'').text("결제완료").css('color', 'blue');
									});
								},
								error : function(x, s, m) {
									alert("예약중 오류 발생" + m);
								}
							});
						});
					});
				}
			});
		},
		rent_cancel : function(rentSeq, couponMemberSeq, status){
			if(status == 0){
				$.getJSON(app.context() + '/history/rentCancel/'+rentSeq+'', function(){
					alert('예약을 취소하였습니다.');
					if(couponMemberSeq != 0 ){
						$.getJSON(app.context() + '/history/couponRestore/'+couponMemberSeq+'', function(){
							alert('예약에 사용한 쿠폰이 환불되었습니다.');
						});
					}
					member.history();
				});
			} else {
				alert('이미 결제된 내역은 취소할 수 없습니다.');
			}
		}
	};	
})();

var REGIST_FORM = 
'<article id="pub_article">'
+'<form class="regist_form">'
+'<h1><img src="resources/img/member/tit.png"></h1>'
+'<fieldset>'
+'<label for="id">아이디</label><span id="id_box" style="margin-left:20px"><input type="button" id="check_dup" name="check_dup" value="중복체크"/></span>'
+'<input type="text" id="regist_id" name="regist_id">'
+'<label for="password">비밀번호</label>'
+'<input type="password" id="regist_password" name="regist_password" placeholder="4자리이상입력해주세요">'
+'<label for="password">비밀번호 확인</label><em id="id_font"></em>'
+'<input type="password" id="regist_password_confirm" name="regist_password_confirm" placeholder="비밀번호를 다시 입력해주세요">'
+'<label for="name">이름</label>'
+'<input type="text" id="regist_name" name="regist_name">'
+'<label for="address">주소</label>'
+'<input type="address" id="regist_address" name="regist_address">'
+'<label for="mail">이메일</label>'
+'<input type="email" id="regist_email" name="regist_email">'
+'<label for="phone">휴대폰</label>'
+'<input type="text" id="regist_phone" name="regist_phone">'
+'<label>추가사항</label><br/>'
+'<input type="checkbox" id="agree1" value="agree1" name="agree1">'
+'<label class="light">회원이용약관과 개인정보 수집 및 이용동의서에 동의</label><br>'
+'<input type="checkbox" id="agree2" value="agree2" name="agree2">'
+'<label class="light">1천원 할인쿠폰과 함께 모든 마케팅 정보수신에 동의</label><br><br>'
+'<div style="text-align: center; padding: 10px 20px; border: 1px solid gold">'
+'<input type="checkbox" id="business" value="interest_business" name="user_interest">이메일'
+'<input type="checkbox" id="business" value="interest_business" name="user_interest">SMS'
+'<input type="checkbox" id="business" value="interest_business" name="user_interest">푸쉬알림'
+'</div></br>'
+'</fieldset>'
+'<input id="reg_btn" class="reg_button" type="button" value="다음">'
+'</form>'
+'</article>';

var MYINFO_FORM = 
'<div id="mypage" class="info box">'
+'<div id="container">'
+'<div id="content">'
+'<h2><img src="resources/img/mypage/h2.gif" alt="[마이페이지] 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
+'<div class="info_lnb">'
+'<!-- lnb -->'
+'<ul id="info_nav" class="info_lnb">'
+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
+'</ul>'
+'<!-- //lnb -->'
+'<div class="section wrap_join_bn">'
+'<a class="join_bn">'
+'<img style="width: 978px;" src="resources/img/mypage/join_bn.gif" alt="SO회원 가입하고 지금 예약하세요! SO회원 가입하기" />'
+'</a>'
+'<div class="group">'
+'<h3><img src="resources/img/mypage/index_txt1.gif" alt="기본정보" /></h3>'
+'<form name="info1">'
+'<fieldset>'
+'<table cellspacing="0" class="rows">'
+'<tr>'
+'<th><img src="resources/img/member/join_step2_txt3.gif" alt="이름" /></th>'
+'<td id="mypage_name"></td>'
+'</tr><tr>'
+'<th><img src="resources/img/mypage/index_txt2.gif" alt="이메일" /></th>'
+'<td><input  id="mypage_email" type="text" class="input" style="width:200px; margin-bottom: 5px"/></td>'
+'</tr><tr><th>'
+'<img src="resources/img/member/join_step2_txt6.gif" alt="비밀번호" /></th><td>'
+'<input id="mypage_pw" type="password" class="input" style="width:115px"/>'
+'<tr>'
+'<th><img src="resources/img/member/join_step2_txt8.gif" alt="휴대폰 번호" /> <em class="star" title="필수항목"></em></th>'
+'<td>'
+'<input id="mypage_phone" type="text" class="input" style="width:115px"/>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/member/join_step2_txt10.gif" alt="주소" /> <em class="star" title="필수항목"></em></th>'
+'<td>'
+'<input id="mypage_addr" type="text" class="input" style="width:300px; margin-bottom: 5px"/>'
+'</td>'
+'</tr>'
+'</table>'
+'</fieldset>'
+'</form>'
+'</div>'
+'<div class="group">'
+'<h3 id="li_pos"><img src="resources/img/mypage/index_txt3.gif" alt="운전면허 정보" /></h3>'
+'<form name="info2" id="license_form" method="post">'
+'<fieldset>'
+'<table cellspacing="0" class="rows">'
+'<tr>'
+'<th><img src="resources/img/mypage/index_txt4.gif" alt="면허종류" /></th>'
+'<td>'
+'<label for="type1">'
+'<input type="radio" id="mypage_type1" name="myinfo_licenseType" value="1종보통"/> 1종 보통'
+'</label>'
+'<label for="type2">'
+'<input type="radio" id="mypage_type2" name="myinfo_licenseType" value="2종보통"/> 2종 보통'
+'</label>'
+'<label for="type3">'
+'<input type="radio" id="mypage_type3" name="myinfo_licenseType" value="1종대형"/> 1종 대형'
+'</label>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/mypage/index_txt5.gif" alt="면허번호" /></th>'
+'<td>'
+'<select id="license_loc" name="lic_region"  style="height: 23px; padding: 0">'
+'<option value="서울">서울</option>'
+'<option value="경기">경기</option>'
+'<option value="인천">인천</option>'
+'<option value="대전">대전</option>'
+'<option value="광주">광주</option>'
+'<option value="울산">울산</option>'
+'<option value="대구">대구</option>'
+'<option value="부산">부산</option>'
+'<option value="강원">강원</option>'
+'<option value="충남">충남</option>'
+'<option value="충북">충북</option>'
+'<option value="전남">전남</option>'
+'<option value="전북">전북</option>'
+'<option value="경남">경남</option>'
+'<option value="경북">경북</option>'
+'<option value="제주">제주</option>'
+'<option value="11">11</option>'
+'<option value="12">12</option>'
+'<option value="13">13</option>'
+'<option value="14">14</option>'
+'<option value="15">15</option>'
+'<option value="16">16</option>'
+'<option value="17">17</option>'
+'<option value="18">18</option>'
+'<option value="19">19</option>'
+'<option value="20">20</option>'
+'<option value="21">21</option>'
+'<option value="22">22</option>'
+'<option value="23">23</option>'
+'<option value="24">24</option>'
+'<option value="25">25</option>'
+'<option value="26">26</option>'
+'<option value="27">27</option>'
+'<option value="28">28</option>'
+'</select>'
+'<input id="mypage_lic_num" maxlength="12" type="text" class="input" style="width:120px"/>'
+'<em style="font-size: 12px; color:#999;">* 지역란 숫자선택 가능, - 포함 입력</em>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/mypage/index_txt6.gif" alt="적성검사 만료일" /></th>'
+'<td><input id="mypage_lic_end" class="input" type="text"></td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/mypage/index_txt7.gif" alt="면허 발급일" /></th>'
+'<td><input id="mypage_lic_start" class="input" type="text"></td>'
+'</tr>'
+'</table>'
+'</fieldset>'
+'</form>'
+'<ul class="gbx">'
+'<li>면허 승인은 최대 24시간 소요됩니다.</li>'
+'<li>면허 재발급으로 면허발급일이 1년 미만일 경우, <a style="text-decoration:underline">1:1문의</a> </li>'
+'<li>혹은 카카오톡(ID찾기 > 쏘카 검색)으로 먼저 문의 주세요.</li>'
+'</ul>'
+'<p class="centerBtn">'
+'<input id="btn_update_basic" type="image" src="resources/img/customer/btn_confirm.gif" alt="확인" />'
+'</p>'
+'</div>'
+'<div class="group mypagecard">'
+'<h3><img src="resources/img/mypage/tit_card.gif" alt="결제카드 정보" /></h3>'
+'<ul class="list_card" id="list_card">'
+'<li style="margin-left: 130px" class="fst on" id="1607135" data-card="외환">'
+'<div class="box_radio">'
+'<label for="radio0" class="default"><span id="mypage_card_num"></span></label>'
+'</div>'
+'<div><a id="mypage_card_change" class="card_del btn_del" data-toggle="modal" data-target="#myModal">변경하기</a></div>'
+'</li>'
+'</ul>'
+'<input type="hidden" name="card_count" id="card_count" value="1" />'
+'<ul class="gbx">'
+'<li>결제카드를 등록하여, 예약 시마다 별도의 카드정보 입력 없이 간편하게 결제하실 수 있습니다.</li>'
+'<li>결제카드 정보는 <span style="color:red">안전한 전자결제 서비스에 직접 등록</span>되며, 카드번호는 쏘카에 별도 저장하지 않습니다.</li>'
+'<li>쏘카는 전자상거래 등에서의 소비자 보호를 위하여 <span style="color:red">구매안전을 보증하는 보험</span>에 가입되어 있습니다.</li>'
+'<li><span style="color:red">본인명의 카드</span>만 <span style="color:red">사용 가능</span>합니다.</li>'
+'</ul>'
+'</div><div>'
+'<h4><img src="resources/img/mypage/index_txt12.gif" alt="회원탈퇴" /></h4>'
+'<div class="gbx">'
+'<ul>'
+'<li>탈퇴 신청시, 미결제 및 환불금액 확인 후 탈퇴처리해 드립니다.</li>'
+'<li>탈퇴 후 3개월간 재가입이 불가능하며, 쿠폰/크레딧도 소멸됩니다.</li>'
+'</ul></div>'
+'<p class="centerBtn">'
+'<img id="btn_user_drop" class="cursor_pointer" src="resources/img/mypage/btn_leave.gif" alt="탈퇴하기" />'
+'</p></div></div></div></div></div></div>'
+'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
+'<div class="modal-dialog" role="document">'
+'<div style="width: 80%; margin-top: 110px;" class="modal-content">'
+'<div class="modal-body">'
+'<div style="margin: 50px;">'
+'<div>'
+'<h4><img src="resources/img/member/tit_member_card1.png" alt="결제카드등록" />'
+'</h4>'
+'<div>'
+'<table style="width: 0" class="rows">'
+'<tr>'
+'<th>카드종류</th>'
+'<td>'
+'<span>'
+'<input type="radio" id="type1" name="cardType" value="p-card" checked="checked" /> 개인'
+'<input type="radio" id="type2" name="cardType" value="b-card"/> 법인 <br />'
+'<em style="font-size: 12px; color:#999;">본인명의의 카드를 사용하세요!!</em>' 
+'</span>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th>카드번호</th>'
+'<td>'
+'<input id="my_card_num1" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="my_card_num2" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="my_card_num3" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="my_card_num4" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'</td>'
+'</tr>'
+'<tr>'
+'<th>유효기간</th>'
+'<td>'
+'<select id="my_card_year" style="width:100px">'
+'<option selected="selected" value="2016">2016년</option>'
+'<option value="2017">2017년</option>'
+'<option value="2018">2018년</option>'
+'<option value="2019">2019년</option>'
+'<option value="2020">2020년</option>'
+'<option value="2021">2021년</option>'
+'<option value="2022">2022년</option>'
+'<option value="2023">2023년</option>'
+'<option value="2024">2024년</option>'
+'<option value="2025">2025년</option>'
+'<option value="2026">2026년</option>'
+'<option value="2027">2027년</option>'
+'<option value="2028">2028년</option>'
+'<option value="2029">2029년</option>'
+'<option value="2030">2030년</option>'
+'</select>'
+'<select id="my_card_month" style="width:70px">'
+'<option selected="selected" value="1">1월</option>'
+'<option value="2">2월</option>'
+'<option value="3">3월</option>'
+'<option value="4">4월</option>'
+'<option value="5">5월</option>'
+'<option value="6">6월</option>'
+'<option value="7">7월</option>'
+'<option value="8">8월</option>'
+'<option value="9">9월</option>'
+'<option value="10">10월</option>'
+'<option value="11">11월</option>'
+'<option value="12">12월</option>'
+'</select>'
+'</td>'
+'</tr>'
+'<tr id="show_p2">'
+'<th>비밀번호</th>'
+'<td>'
+'<input placeholder="4자리" id="my_card_pw" maxlength="4" type="text" class="input" style="width:60px" value="" />'
+'</td>'
+'</tr>'
+'<tr id="show_b">'
+'<th>사업자번호</th>'
+'<td>'
+'<input id="myinfo_business_num1" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="myinfo_business_num2" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="myinfo_business_num3" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'</td>'
+'</tr>'
+'</table>'
+'</div>'
+'<br />'
+'<span>'
+'<input type="button" id="cardinfo_reg_button" class="card_button" data-dismiss="modal" value="카드등록">'
+'<input type="button" class="card_cancelbtn" data-dismiss="modal" value="취소">'
+'</span>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';

var MYHISTORY_FORM = 
'<div id="mypage" class="reservation box">'
+'<div id="container">'
+'<div id="content">'
+'<h2><img src="resources/img/mypage/h2.gif" alt="[마이페이지] 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
+'<div class="info_lnb">'
+'<!-- lnb -->'
+'<ul id="info_nav" class="info_lnb">'
+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
+'</ul>'
+'<div class="section" style="float: left">'
+'<div class="group" style="width: 743px">'
+'<h3 class="tit_corp">'
+'<img src="resources/img/mypage/reservation_txt1.gif" alt="예약내역" /> <span></span> <img src="resources/img/mypage/reservation_txt2.gif" alt="건" />'
+'</h3>'
+'<div class="gbx">'
+'<ul>'
+'<li>예약변경은 반납연장만 가능합니다. 대여기간 수정, 지역 및 차종 변경은 취소 후 새로 예약해주세요.</li>'
+'<li>반납연장은 반납 예정 시각 30분 이전까지만 가능하며, 다른 회원의 예약이 이미 존재하는 경우에는 반납연장이 불가합니다.</li>'
+'<li>예약취소 시 대여요금과 보험료의 각 10%에 해당하는 수수료가 부과될 수 있습니다.</li>'
+'</ul>'
+'</div>'
+'<div class="result_none">'
+'<p>예약내역이 없습니다.</p>'
+'</div>'
+'<table cellspacing="0" class="cols">'
+'<thead>'
+'<tr>'
+'<th colspan="2">예약</th>'
+'<th>총 요금</th>'
+'<th>결제</th>'
+'</tr>'
+'</thead>'
+'<tbody>'
+'<tr>'
+'<td>'
+'<p class="thumb">'
+'<em class="car_id" style="display:none;">4325</em>'
+'<a class="carDetail">'
+'<img src="/template/asset/images/car_image/car22.png">'
+'</a>'
+'</p>'
+'</td>'
+'<td class="info">'
+'<h4>'
+'<em id="6547083_car_id" class="car_id" style="display:none;">4325</em>'
+'<a href="#" class="carDetail">아반떼AD</a> (29호4179)'
+'</h4>'
+'<div class="desc">'
+'2016.11.04 금 12:30 - 2016.11.04 금 16:10 <br>'
+'총 3시간 40분 <br>'
+'<em id="6547083_zone_id" style="display:none;">2211</em>'
+'<a href="#" class="socarzoneDetail">수택동사거리</a>'
+'</div>'
+'</td>'
+'<td class="price">'
+'<a class="btn_payment_detail" >22,510원</a>'
+'</td>'
+'<td>'
+'<a id="btn_payment" class="btnS rvExtendB" ><span>결제</span></a>'
+'</td>'
+'</tr>'
+'</tbody>'
+'</table>'
+'</div>';

var MYCOUPON_FORM = 
'<div id="mypage" class="my_coupon box">'
+'<div id="container">'
+'<div id="content">'
+'<h2><img src="resources/img/mypage/h2.gif" alt="마이페이지 - 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
+'<div class="info_lnb">'
+'<!-- lnb -->'
+'<ul id="info_nav" class="info_lnb">'
+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
+'</ul>'
+'<!-- //lnb -->'
+'<div class="my_coupon_section">'
+'<div class="group">'
+'<h3><img src="resources/img/mypage/coupon_txt1.gif" alt="내 쿠폰" /><span>2</span> <img src="resources/img/mypage/coupon_txt2.gif" alt="개" /></h3>'
+'<p class="coupon-add">'
+'<a onclick="coupon.coupon_form_1()" class="couponAddB">'
+'<img src="resources/img/mypage/btn_coupon.gif" alt="쿠폰 등록하기" />'
+'</a>'
+'</p>'
+'<div class="gbx">'
+'<ul style="list-style: circle;">'
+'<li>쿠폰은 <em>최초 대여요금에만 적용</em>됩니다. (보험료/주행요금/연장 대여요금에 적용 불가)</li>'
+'<li>쿠폰은 예약당 1개만 사용가능합니다. (중복적용 불가)</li>'
+'<li>주중전용 쿠폰은 주말 및 공휴일 사용이 불가능합니다.</li>'
+'<li>편도 예약시 편도 전용 쿠폰만 사용 가능하며, 편도요금에만 할인이 제공됩니다. (대여료 할인 불가)</li>'
+'<li>예약 취소시, 쿠폰은 유효기간 내에만 재발급됩니다.</li>'
+'<li>제주공항/제주공항교차로존은 전용쿠폰을 제외한 모든 쿠폰적용이 불가합니다.</li>'
+'<li class="tip"><em>[주말 기준]</em> 금요일 19:00 ~ 일요일 19:00</li>'
+'<li class="tip"><em>[공휴일 기준]</em> 해당일 00:00 ~ 24:00</li>'
+'</ul>'
+'</div>'
+'<table cellspacing="0" class="cols">'
+'<thead>'
+'<tr>'
+'<th>쿠폰</th>'
+'<th>유효기간</th>'
+'<th>상태</th>'
+'</tr>'
+'</thead>'
+'<tbody>'
+'<tr >'
+'<td class="info"style="text-align:left">'
+'<h4 class="coupon_usage" style="text-decoration:none;font-size:15px;font-weight:bold">쏘카 깜짝쿠폰 - 20% 할인</h4>'
+'<div class="desc"style="color:gray">쏘카를 20% 할인받아서 이용하세요!</div><br>'
+'<ul class="list_info">'
+'<li>ㆍ 국민교육헌장</li>'
+'<li>ㆍ 우리는 민족 중흥의 역사적 사명을 띠고 이 땅에 태어났다</li>'
+'<li>ㆍ 조상의 빛난 얼을 오늘에 되살려, 안으로 자주독립의 자세를 확립하고, 밖으로 인류 공영에 이바지할 때다</li>'
+'<li>ㆍ 이에, 우리의 나아갈 바를 밝혀 교육의 지표로 삼는다.</li>'
+'</ul>'
+'<td class="expire">2016-10-07 ~ 2016-10-14</td>'
+'<td class="status">사용가능</td>'
+'</tr>'
+'<tr >'
+'<td class="info"style="text-align:left">'
+'<h4 class="coupon_usage"style="text-decoration:none;font-size:15px;font-weight:bold">수신동의 해주신 쏘친님~ 쿠폰수신♥ - 1천원 할인</h4>'
+'<div class="desc"style="color:gray">마케팅 메세지 사전 수신동의 해주신 쏘친님께 드리는 쿠폰</div><br>'
+'<ul class="list_info">'
+'<li>ㆍ 유효기간 내 사용가능</li>'
+'<li>ㆍ 주중전용</li>'
+'<li>ㆍ 최소 1시간이상 대여시 사용가능</li>'
+'<li>ㆍ 제주공항/제주공항입구 교차로 존에서 사용불가</li>'
+'<li>ㆍ BMW(520D/X3) 차종 대여에는 사용이 불가합니다.</li>'
+'</ul>'
+'<td class="expire">2016-10-10 ~ 2016-11-09</td>'
+'<td class="status">사용가능</td>'
+'</tr>'
+'</tbody>'
+'</table>'
+'</div>'
+'<div style="padding-top:30px;">'
+'<a><img style="width: 100%;" src="resources/img/mypage/coupon_couponbook.gif" alt="쏘카의 다양한 쿠폰혜택 살펴보세요! 쏘카 쿠폰북 바로가기" /></a>'
+'</div></div></div></div></div></div>';
	
var MYPAY_FORM = 
	'<div id="mypage" class="payment box"><div id="container">'
+'<div id="content">'
+'<h2><img src="resources/img/mypage/h2.gif" alt="[마이페이지] 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>'
+'<div class="info_lnb">'
+'<!-- lnb -->'
+'<ul style="margin-bottom: 0px" id="info_nav" class="info_lnb">'
+'<li><a onclick="member.mypage()" title="내 정보" class="info_lnb1">내 정보</a></li>'
+'<li><a onclick="member.history()" title="예약내역" class="info_lnb3">예약내역 <span></span></a></li>'
+'<li><a onclick="member.my_coupon()" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span></span></a></li>'
+'<li><a onclick="member.my_pay(1)" title="결제내역" class="info_lnb5">결제내역</a></li>'
+'</ul>'
+'<!-- //lnb -->'
+'<div style="margin-left: 85px" class="section">'
+'<div class="group">'
+'<h3 class="tit_corp">'
+'<img src="resources/img/mypage/payment_txt1.gif" alt="결제내역" />'
+'</h3>'
+'<p class="my-credit">내 크레딧 <em>0</em>원</p>'
+'<div style="width: 550px" class="gbx">'
+'<ul>'
+'<li>요금 결제 시 보유 크레딧이 있으면 크레딧으로 결제 후 부족 금액만 결제카드로 청구합니다.</li>'
+'<li>결제카드 변경은 내 정보 페이지에서 할 수 있습니다.'
+'<a><img src="resources/img/mypage/btn_info.gif" alt="내 정보 바로가기" /></a>'
+'</li>'
+'</ul>'
+'</div>'
+'<div style="width: 550px" class="result_none">'
+'<p>결제내역이 없습니다.</p>'
+'</div>'
+'<div class="my_pay_section">'
+'<div class="history_grdoup">'
+'<table style="width: 550px;" cellspacing="0" class="cols">'
+'<colgroup><col><col><col width="270"><col><col><col></colgroup>'
+'<thead>'
+'<tr>'
+'<th style="width: 70px;">구분</th>'
+'<th style="width: 70px;">결제일</th>'
+'<th>내역</th>'
+'<th>결제수단</th>'
+'<th>금액</th>'
+'<th>매출전표</th>'
+'</tr>'
+'</thead>'
+'<tbody>'
+'<tr>'
+'<td>과금</td>'
+'<td>2014-11-23</td>'
+'<td class="detail">청파삼거리 (2014-11-22 13:50)</td>'
+'<td class="method">신용카드</td>'
+'<td class="price">'
+'<!-- <a>2,850원</a> -->'
+'<a class="btn_payment_detail" value="fummb">2,850원</a>'
+'<em style="display:none;">fummb</em>'
+'</td>'
+'<td class="chit">'
+'<a onclick="window.open(this.href,"receipt","width=410,height=770, scrollbars=yes"); return false;">출력</a>'
+'</td>'
+'</tr>'
+'<tr>'
+'<td>과금</td>'
+'<td>2014-11-22</td>'
+'<td class="detail">청파삼거리 (2014-11-22 13:50)</td>'
+'<td class="method">신용카드</td>'
+'<td class="price">'
+'<!-- <a>6,890원</a> -->'
+'<a class="btn_payment_detail" value="fummb">6,890원</a>'
+'<em style="display:none;">fummb</em>'
+'</td>'
+'<td class="chit">'
+'<a onclick="window.open(this.href,"receipt","width=410,height=770, scrollbars=yes"); return false;">출력</a>'
+'</td>'
+'</tr>'
+'<tr>'
+'<td>과금</td>'
+'<td>2014-11-20</td>'
+'<td class="detail">청파삼거리 (2014-11-20 19:50)</td>'
+'<td class="method">신용카드</td>'
+'<td class="price">'
+'<!-- <a>7,350원</a> -->'
+'<a class="btn_payment_detail" value="aqbmb">7,350원</a>'
+'<em style="display:none;">aqbmb</em>'
+'</td>'
+'<td class="chit">'
+'<a onclick="window.open(this.href,"receipt","width=410,height=770, scrollbars=yes"); return false;">출력</a>'
+'</td>'
+'</tr>'
+'<tr>'
+'<td>과금</td>'
+'<td>2014-11-20</td>'
+'<td class="detail">청파삼거리 (2014-11-20 19:50)</td>'
+'<td class="method">신용카드</td>'
+'<td class="price">'
+'<!-- <a>10,760원</a> -->'
+'<a class="btn_payment_detail" value="aqbmb">10,760원</a>'
+'<em style="display:none;">aqbmb</em>'
+'</td>'
+'<td class="chit">'
+'<a onclick="window.open(this.href,"receipt","width=410,height=770, scrollbars=yes"); return false;">출력</a>'
+'</td>'
+'</tr>'
+'<tr>'
+'<td>과금</td>'
+'<td>2014-11-15</td>'
+'<td class="detail">명동역 4번출구(운영종료) (2014-11-15 15:00)</td>'
+'<td class="method">신용카드</td>'
+'<td class="price">'
+'<!-- <a>5,510원</a> -->'
+'<a class="btn_payment_detail" value="dqflb">5,510원</a>'
+'<em style="display:none;">dqflb</em>'
+'</td>'
+'<td class="chit">'
+'<a onclick="window.open(this.href,"receipt","width=410,height=770, scrollbars=yes"); return false;">출력</a>'
+'</td>'
+'</tr>'
+'<tr>'
+'<td>과금</td>'
+'<td>2014-11-15</td>'
+'<td class="detail">명동역 4번출구(운영종료) (2014-11-15 15:00)</td>'
+'<td class="method">신용카드</td>'
+'<td class="price">'
+'<!-- <a>15,780원</a> -->'
+'<a class="btn_payment_detail" value="dqflb">15,780원</a>'
+'<em style="display:none;">dqflb</em>'
+'</td>'
+'<td class="chit">'
+'<a onclick="window.open(this.href,"receipt","width=410,height=770, scrollbars=yes"); return false;">출력</a>'
+'</td>'
+'</tr>'
+'</tbody>'
+'</table>'
+'</div>'
+'<!-- paginate -->'
+'<div style="margin-right: 250px" class="paginate">'
+'&nbsp;<strong>1</strong>&nbsp;<a>2</a>&nbsp;<a>3</a>&nbsp;<a>4</a>&nbsp;<a>5</a>'
+'</div></div></div></div></div></div></div></div>';


var LICENSE_FORM = 
'<div id="lic_content">'
+'<div class="boxL box" id="content">'
+'<form name="join">'
+'<fieldset style="width: 1100px">'
+'<div class="section">'
+'<h4>'
+'<img src="resources/img/member/join_step3_txt2.gif" alt="운전면허">'
+'<div style="position: absolute; color : #aaa;margin-left: 75px;margin-top: -11px;">쏘카 드라이브를 위한 필수조건!</div>'
+'</h4>'
+'<div class="driver1">'
+'<table cellspacing="0" class="rows">'
+'<tr>'
+'<th><img src="resources/img/member/join_step3_txt4.gif" alt="면허종류 (1)" /></th>'
+'<td>'
+'<label for="type1">'
+'<input type="radio" id="type1" name="licenseType"  value="1종보통"/> 1종 보통'
+'</label>'
+'<label for="type2">'
+'<input type="radio" id="type2" name="licenseType" checked="checked" value="2종보통"/> 2종 보통'
+'</label>'
+'<label for="type3">'
+'<input type="radio" id="type3" name="licenseType" value="1종대형"/> 1종 대형'
+'</label>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/member/join_step3_txt5.gif" alt="면허번호 (2)" /></th>'
+'<td>'
+'<select style="height: 23px; padding: 0" id="license_loc">'
+'<option selected="selected" value="서울">서울</option>'
+'<option value="경기">경기</option>'
+'<option value="인천">인천</option>'
+'<option value="대전">대전</option>'
+'<option value="광주">광주</option>'
+'<option value="울산">울산</option>'
+'<option value="대구">대구</option>'
+'<option value="부산">부산</option>'
+'<option value="강원">강원</option>'
+'<option value="충남">충남</option>'
+'<option value="충북">충북</option>'
+'<option value="전남">전남</option>'
+'<option value="전북">전북</option>'
+'<option value="경남">경남</option>'
+'<option value="경북">경북</option>'
+'<option value="제주">제주</option>'
+'<option value="11">11</option>'
+'<option value="12">12</option>'
+'<option value="13">13</option>'
+'<option value="14">14</option>'
+'<option value="15">15</option>'
+'<option value="16">16</option>'
+'<option value="17">17</option>'
+'<option value="18">18</option>'
+'<option value="19">19</option>'
+'<option value="20">20</option>'
+'<option value="21">21</option>'
+'<option value="22">22</option>'
+'<option value="23">23</option>'
+'<option value="24">24</option>'
+'<option value="25">25</option>'
+'<option value="26">26</option>'
+'<option value="27">27</option>'
+'<option value="28">28</option>'
+'</select>'
+'<input id="license_num1_reg" maxlength="2" type="text" class="input" style="width:30px"/>'
+'<input id="license_num2_reg" maxlength="6" type="text" class="input" style="width:50px"/>'
+'<input id="license_num3_reg" maxlength="2" type="text" class="input" style="width:30px"/>'
+'<em style="font-size: 12px; color:#999;">* 지역란 숫자선택 가능</em>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/member/join_step3_txt6.gif" alt="갱신기간 만료일 (3)" /></th>'
+'<td>'
+'<select id="license_end_year_reg">'
+'<option selected="selected" value="2030">2030년</option>'
+'<option value="2029">2029년</option>'
+'<option value="2028">2028년</option>'
+'<option value="2027">2027년</option>'
+'<option value="2026">2026년</option>'
+'<option value="2025">2025년</option>'
+'<option value="2024">2024년</option>'
+'<option value="2023">2023년</option>'
+'<option value="2022">2022년</option>'
+'<option value="2021">2021년</option>'
+'<option value="2020">2020년</option>'
+'<option value="2019">2019년</option>'
+'<option value="2018">2018년</option>'
+'<option value="2017">2017년</option>'
+'<option value="2016">2016년</option>'
+'</select>'
+'<select id="license_end_month_reg">'
+'<option selected="selected" value="01">1월</option>'
+'<option value="02">2월</option>'
+'<option value="03">3월</option>'
+'<option value="04">4월</option>'
+'<option value="05">5월</option>'
+'<option value="06">6월</option>'
+'<option value="07">7월</option>'
+'<option value="08">8월</option>'
+'<option value="09">9월</option>'
+'<option value="10">10월</option>'
+'<option value="11">11월</option>'
+'<option value="12">12월</option>'
+'</select>'
+'<select id="license_end_day_reg">'
+'<option selected="selected" value="01">01일</option>'
+'<option value="02">2일</option>'
+'<option value="03">3일</option>'
+'<option value="04">4일</option>'
+'<option value="05">5일</option>'
+'<option value="06">6일</option>'
+'<option value="07">7일</option>'
+'<option value="08">8일</option>'
+'<option value="09">9일</option>'
+'<option value="10">10일</option>'
+'<option value="11">11일</option>'
+'<option value="12">12일</option>'
+'<option value="13">13일</option>'
+'<option value="14">14일</option>'
+'<option value="15">15일</option>'
+'<option value="16">16일</option>'
+'<option value="17">17일</option>'
+'<option value="18">18일</option>'
+'<option value="19">19일</option>'
+'<option value="20">20일</option>'
+'<option value="21">21일</option>'
+'<option value="22">22일</option>'
+'<option value="23">23일</option>'
+'<option value="24">24일</option>'
+'<option value="25">25일</option>'
+'<option value="26">26일</option>'
+'<option value="27">27일</option>'
+'<option value="28">28일</option>'
+'<option value="29">29일</option>'
+'<option value="30">30일</option>'
+'<option value="31">31일</option>'
+'</select> '
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/member/join_step3_txt7.gif" alt="면허 발급일 (4)" /></th>'
+'<td>'
+'<select id="license_start_year_reg">'
+'<option selected="selected" value="2016">2016년</option>'
+'<option value="2015">2015년</option>'
+'<option value="2014">2014년</option>'
+'<option value="2013">2013년</option>'
+'<option value="2012">2012년</option>'
+'<option value="2011">2011년</option>'
+'<option value="2010">2010년</option>'
+'<option value="2009">2009년</option>'
+'<option value="2008">2008년</option>'
+'<option value="2007">2007년</option>'
+'<option value="2006">2006년</option>'
+'<option value="2005">2005년</option>'
+'<option value="2004">2004년</option>'
+'<option value="2003">2003년</option>'
+'<option value="2002">2002년</option>'
+'<option value="2001">2001년</option>'
+'<option value="2000">2000년</option>'
+'<option value="1999">1999년</option>'
+'<option value="1998">1998년</option>'
+'<option value="1997">1997년</option>'
+'<option value="1996">1996년</option>'
+'<option value="1995">1995년</option>'
+'<option value="1994">1994년</option>'
+'<option value="1993">1993년</option>'
+'<option value="1992">1992년</option>'
+'<option value="1991">1991년</option>'
+'<option value="1990">1990년</option>'
+'<option value="1989">1989년</option>'
+'<option value="1988">1988년</option>'
+'<option value="1987">1987년</option>'
+'<option value="1986">1986년</option>'
+'<option value="1985">1985년</option>'
+'<option value="1984">1984년</option>'
+'<option value="1983">1983년</option>'
+'<option value="1982">1982년</option>'
+'<option value="1981">1981년</option>'
+'<option value="1980">1980년</option>'
+'<option value="1979">1979년</option>'
+'<option value="1978">1978년</option>'
+'<option value="1977">1977년</option>'
+'<option value="1976">1976년</option>'
+'<option value="1975">1975년</option>'
+'<option value="1974">1974년</option>'
+'<option value="1973">1973년</option>'
+'<option value="1972">1972년</option>'
+'<option value="1971">1971년</option>'
+'<option value="1970">1970년</option>'
+'<option value="1969">1969년</option>'
+'<option value="1968">1968년</option>'
+'<option value="1967">1967년</option>'
+'<option value="1966">1966년</option>'
+'<option value="1965">1965년</option>'
+'<option value="1964">1964년</option>'
+'<option value="1963">1963년</option>'
+'<option value="1962">1962년</option>'
+'<option value="1961">1961년</option>'
+'<option value="1960">1960년</option>'
+'<option value="1959">1959년</option>'
+'<option value="1958">1958년</option>'
+'<option value="1957">1957년</option>'
+'<option value="1956">1956년</option>'
+'<option value="1955">1955년</option>'
+'<option value="1954">1954년</option>'
+'<option value="1953">1953년</option>'
+'<option value="1952">1952년</option>'
+'<option value="1951">1951년</option>'
+'<option value="1950">1950년</option>'
+'</select>'
+'<select id="license_start_month_reg">'
+'<option selected="selected" value="01">1월</option>'
+'<option value="02">2월</option>'
+'<option value="03">3월</option>'
+'<option value="04">4월</option>'
+'<option value="05">5월</option>'
+'<option value="06">6월</option>'
+'<option value="07">7월</option>'
+'<option value="08">8월</option>'
+'<option value="09">9월</option>'
+'<option value="10">10월</option>'
+'<option value="11">11월</option>'
+'<option value="12">12월</option>'
+'</select>' 
+'<select id="license_start_day_reg">'
+'<option selected="selected" value="01">1일</option>'
+'<option value="02">2일</option>'
+'<option value="03">3일</option>'
+'<option value="04">4일</option>'
+'<option value="05">5일</option>'
+'<option value="06">6일</option>'
+'<option value="07">7일</option>'
+'<option value="08">8일</option>'
+'<option value="09">9일</option>'
+'<option value="10">10일</option>'
+'<option value="11">11일</option>'
+'<option value="12">12일</option>'
+'<option value="13">13일</option>'
+'<option value="14">14일</option>'
+'<option value="15">15일</option>'
+'<option value="16">16일</option>'
+'<option value="17">17일</option>'
+'<option value="18">18일</option>'
+'<option value="19">19일</option>'
+'<option value="20">20일</option>'
+'<option value="21">21일</option>'
+'<option value="22">22일</option>'
+'<option value="23">23일</option>'
+'<option value="24">24일</option>'
+'<option value="25">25일</option>'
+'<option value="26">26일</option>'
+'<option value="27">27일</option>'
+'<option value="28">28일</option>'
+'<option value="29">29일</option>'
+'<option value="30">30일</option>'
+'<option value="31">31일</option>'
+'</select> '
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/member/join_step1_txt9.gif" alt="생년월일/성별" /></th>'
+'<td>'
+'<input id="ssn1" type="text" class="input" style="width:69px;" maxlength="6" placeholder="ex)801010"/> (6자리)&nbsp;&nbsp;/&nbsp;&nbsp;'
+'<label for="male"><input type="radio" id="male" name="gender" value="남자" checked="checked" /> 남성</label>'
+'<label for="female"><input type="radio" id="female" name="gender" value="여자" /> 여성</label>'
+'</td>'
+'</tr>'
+'</table>'
+'</div>'
+'<div class="driver2">'
+'<img width="290px" src="resources/img/member/license-sample-locale.png" alt="운전면허 샘플 이미지" />'
+'<span style="margin-top: 10px;margin-left: 85px; display: inline-block;color: #999;">운전면허 샘플 이미지</span>'
+'</div>'
+'<div class="clear"></div>'
+'<ul class="tip mt20 gbx">'
+'<li style="color:red">주민등록 상에 기재된 생년월일을 입력해 주세요.</li>'
+'<li style="color:red">만 21세 미만이거나 운전면허 취득 1년 미만일 경우 SO회원 승인이 불가합니다.</li>'
+'<li>타인의 정보를 도용해 가입할 경우 법적 조치가 취해질 수 있으며, 유효한 정보가 아닐 경우 회원 승인이 거절될 수 있습니다.</li>'
+'</ul>'
+'</div>'
+'<div class="section">'
+'<h4><img src="resources/img/member/join_step3_txt8.gif" alt="결제카드" />'
+'<em style="position: absolute; color : #aaa;margin-left: 8px;margin-top: 4px;">한번 등록으로 편리하게 이용하세요!</em></h4>'
+'<table cellspacing="0" class="rows">'
+'<tr>'
+'<th><img src="resources/img/member/join_step3_txt9.gif" alt="카드사 / 종류" /></th>'
+'<td>'
+'<div>'
+'<span><a id="card_msg"></a></span>'
+'<!-- INICIS -->'
+'<a id="regist_card_layer" class="btnS" data-toggle="modal" data-target="#myModal"><span>결제카드 등록</span></a>'
+'</div>'
+'<div id="card_error">결제카드가 보류 상태이므로 예약 및 차량 이용이 불가합니다.</div>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th><img src="resources/img/member/join_step3_txt10.gif" alt="카드등록 승인일" /></th>'
+'<td id="card_date"></td>'
+'</tr>'
+'</table>'
+'<ul class="tip mt20 gbx">'
+'<li>결제카드를 등록하여, 예약 시마다 별도의 카드정보 입력 없이 간편하게 결제하실 수 있습니다.</li>'
+'<li>결제카드 정보는 <span style="color:red">안전한 전자결제 서비스에 직접 등록</span>되며, 카드번호는 쏘카 시스템에 별도 저장하지 않습니다.</li>'
+'<li>쏘카는 전자상거래 등에서의 소비자 보호를 위하여 <span style="color:red">구매안전을 보증하는 보험</span>에 가입되어 있습니다.</li>'
+'<li>타인의 정보를 도용해 가입할 경우 법적 조치가 취해질 수 있으며, 유효한 정보가 아닐 경우 회원 승인이 거절될 수 있습니다.</li>'
+'</ul>'
+'</div>'
+'<div class="centerBtn">'
+'<a><img src="resources/img/member/btn_step_prev.gif" alt="이전단계" /></a>'
+'<input id="licese_complete" type="image" src="resources/img/member/btn_join_complete.gif" alt="가입완료" />'
+'</div>'
+'</fieldset>'
+'</form>'
+'</div>'
+'</div>'
/*카드폼*/
+'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
+'<div class="modal-dialog" role="document">'
+'<div style="width: 80%; margin-top: 110px;" class="modal-content">'
+'<div class="modal-body">'
+'<div style="margin: 50px;">'
+'<div>'
+'<h4><img src="resources/img/member/tit_member_card1.png" alt="결제카드등록" />'
+'</h4>'
+'<div>'
+'<table style="width: 0" class="rows">'
+'<tr>'
+'<th>카드종류</th>'
+'<td>'
+'<span>'
+'<input type="radio" id="type1" name="cardType" value="p-card" checked="checked" /> 개인'
+'<input type="radio" id="type2" name="cardType" value="b-card"/> 법인 <br /><br />'
+'<em style="font-size: 12px; color:#999;">본인명의의 카드를 사용하세요!!</em>' 
+'</span>'
+'</td>'
+'</tr>'
+'<tr>'
+'<th>카드번호</th>'
+'<td>'
+'<input id="card_reg_num1" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="card_reg_num2" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="card_reg_num3" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="card_reg_num4" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'</td>'
+'</tr>'
+'<tr>'
+'<th>유효기간</th>'
+'<td>'
+'<select id="card_year" style="width:100px">'
+'<option selected="selected" value="2016">2016년</option>'
+'<option value="2017">2017년</option>'
+'<option value="2018">2018년</option>'
+'<option value="2019">2019년</option>'
+'<option value="2020">2020년</option>'
+'<option value="2021">2021년</option>'
+'<option value="2022">2022년</option>'
+'<option value="2023">2023년</option>'
+'<option value="2024">2024년</option>'
+'<option value="2025">2025년</option>'
+'<option value="2026">2026년</option>'
+'<option value="2027">2027년</option>'
+'<option value="2028">2028년</option>'
+'<option value="2029">2029년</option>'
+'<option value="2030">2030년</option>'
+'</select>'
+'<select id="card_month" style="width:70px">'
+'<option selected="selected" value="01">1월</option>'
+'<option value="02">2월</option>'
+'<option value="03">3월</option>'
+'<option value="04">4월</option>'
+'<option value="05">5월</option>'
+'<option value="06">6월</option>'
+'<option value="07">7월</option>'
+'<option value="08">8월</option>'
+'<option value="09">9월</option>'
+'<option value="10">10월</option>'
+'<option value="11">11월</option>'
+'<option value="12">12월</option>'
+'</select>'
+'</td>'
+'</tr>'
+'<tr id="show_p2">'
+'<th>비밀번호</th>'
+'<td>'
+'<input placeholder="4자리" id="card_pw" maxlength="4" type="text" class="input" style="width:60px" value="" />'
+'</td>'
+'</tr>'
+'<tr id="show_b">'
+'<th>사업자번호</th>'
+'<td>'
+'<input id="business_num1" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="business_num2" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'<span>-</span>'
+'<input id="business_num3" maxlength="4" type="text" class="input" style="width:40px" value="" />'
+'</td>'
+'</tr>'
+'</table>'
+'</div>'
+'<br />'
+'<span>'
+'<input type="button"class="card_button" id="card_reg_btn"data-dismiss="modal" value="카드등록">'
+'<input type="button" class="card_cancelbtn" data-dismiss="modal" value="취소">'
+'</span>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';

var SIGNIN_FORM = 
'<div>'
+'<form class="modal-content animate">'
+'<div class="imgcontainer">'
+'<img src="resources/img/maincar1.png" alt="Avatar" class="avatar">'
+'</div>'
+'<div class="login_container">'
+'<label><b></b></label>'
+'<input id="login_id" class="login_input" type="text" placeholder="ID" name="uname" required><br />'
+'<label><b></b></label>'
+'<input id="login_pw" class="login_input" type="password" placeholder="Password" name="psw" required><br />'
+'<input id="login_btn" class="login_button" type="button" value="로그인">'
+'<input id="login_cancel_btn" class="login_cancelbtn" type="button" value="취소">'
+'<span>Forgot <a>password?</a></span>'
+'</div>'
+'</form>'
+'</div>';

var PUBLIC_HEADER_FORM =
'<div id="header">'
+'<img id="header_logo" class="cursor_pointer" src="resources/img/header_logo.gif" alt="socar">'
+'<ul class="gnb">'
+'<li><a class="gnb1" href="#">서비스안내</a></li>'
+'<li><a class="gnb2" href="#">요금안내</a></li>'
+'<li><a class="gnb3" href="#">법인/단체안내</a></li>'
+'<li><a class="gnb4" href="#">고객센터</a></li>'
+'<li><a class="gnb5" href="#">마이페이지</a></li>'
+'<li><a class="gnb6" href="#">쏘카찾기º예약</a></li>'
+'</ul>'
+'<div class="util">'
+'<img class="seoul" src="resources/img/header_car_sharing_n.gif" alt="hi-seoul">'
+'<ul>'
+'<li><input id="header_login_btn" type="button" class="btn btn-info" value="로그인"></li>'
+'<li><input id="header_regist_btn" type="button" class="btn btn-info" value="회원가입"></li>'
+'</ul>'
+'</div>'
+'</div>'
+'<p id="header_p"></p>';

var USER_HEADER_FORM =
'<div id="header">'
+'<img id="header_logo" class="cursor_pointer" src="resources/img/header_logo.gif" alt="socar" onclick="controller.main()">'
+'<ul class="gnb">'
+'<li><a class="gnb1" href="#">서비스안내</a></li>'
+'<li><a class="gnb2" href="#">요금안내</a></li>'
+'<li><a class="gnb3" href="#">법인/단체안내</a></li>'
+'<li><a class="gnb4" href="#">고객센터</a></li>'
+'<li><a class="gnb5" href="#">마이페이지</a></li>'
+'<li><a class="gnb6" href="#">쏘카찾기º예약</a></li>'
+'</ul>'
+'<div class="util">'
+'<img class="seoul" src="resources/img/header_car_sharing_n.gif" alt="hi-seoul">'
+'<ul>'
+'<li id="header_user_name" style="margin-top: 10px"> </li>'
+'<li><input id="header_logout_btn" type="button" class="btn btn-info" value="로그아웃"></li>'
+'</ul>'
+'</div>'
+'</div>'
+'<p id="header_p"></p>';

var ADMIN_HEADER_FORM = 
'<div id="header">'
+'<img id="header_logo" class="cursor_pointer" src="resources/img/header_logo.gif" alt="socar" onclick="controller.main()">'
+'<ul class="gnb">'
+'<li><a class="gnb1" href="#">서비스안내</a></li>'
+'<li><a class="gnb2" href="#">요금안내</a></li>'
+'<li><a class="gnb3" href="#">법인/단체안내</a></li>'
+'<li><a class="gnb4" href="#">고객센터</a></li>'
+'<li><a class="gnb5" href="#">마이페이지</a></li>'
+'<li><a class="gnb6" href="#">쏘카찾기º예약</a></li>'
+'</ul>'
+'<div class="util">'
+'<img class="seoul" src="resources/img/header_car_sharing_n.gif" alt="hi-seoul">'
+'<ul>'
+'<li><input id="btn_admin_mode" type="button" class="btn btn-info" value="관리자모드"></li>'
+'<li><input id="header_logout_btn" type="button" class="btn btn-info" value="로그아웃"></li>'
+'</ul>'
+'</div>'
+'</div>'
+'<p id="header_p"></p>';	

var PUBLIC_CONTENT_FORM = 
'<div class="box" style="text-align: center;">'
+'<div class="public_content_top">'
+'<div style="float:right; width:30%">'
+'<ul>'
+'<img id="content_regist_btn" style="margin-bottom: 7px;margin-top: 10px" src="resources/img/mainright.png" alt="main_right"></br>'
+'<img style="margin-bottom: 7px" src="resources/img/banner1.png" alt="banner1"></br>'
+'<img style="margin-bottom: 7px" src="resources/img/banner2.png" alt="banner2"></br>'
+'<img src="resources/img/banner3.png" alt="banner3"></br>'
+'</ul>'
+'</div>'
+'<div id="myCarousel" class="carousel slide" data-ride="carousel" style="width: 70%">'
+'<ol class="carousel-indicators">'
+'<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="0" class="active"></li>'
+'<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="1"></li>'
+'<li style="background-color: gray;" data-target="#myCarousel" data-slide-to="2"></li>'
+'</ol>'
+'<div class="carousel-inner" role="listbox">'
+'<div class="item active">'
+'<img src="resources/img/maincar1.png" alt="main_car1" width="1200" height="700">'
+'<div class="carousel-caption">'
+'</div>'
+'</div>'
+'<div class="item">'
+'<img src="resources/img/maincar2.png" alt="main_car2" width="1200" height="700">'
+'<div class="carousel-caption">'
+'</div>'
+'</div>'
+'<div class="item">'
+'<img src="resources/img/maincar3.png" alt="main_car3" width="1200" height="700">'
+'<div class="carousel-caption">'
+'</div>'
+'</div>'
+'</div>'
+'<span class="glyphicon glyphicon-chevron-left" aria-hidden="true" role="button" data-slide="prev" href="#myCarousel"></span>'
+'<span class="sr-only">Previous</span>'
+'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true" role="button" data-slide="next" href="#myCarousel"></span>'
+'<span class="sr-only">Next</span>'
+'</div>'
+'</div>'
+'<p style="width: 1069px; border: 1px; border-style: solid; border-color: #d9d9d9; margin:10 0 10px;"></p>'
+'<div class="public_content_bottom">'
+'<div class="rule1">'
+'<ul class="list_rule">'
+'<li><a class="btn1 cursor_pointer"></a></li>'
+'<li><a class="btn2 cursor_pointer"></a></li>'
+'<li><a class="btn3 cursor_pointer"></a></li>'
+'<li><a class="btn4 cursor_pointer"></a></li>'
+'<li><a class="btn5 cursor_pointer"></a></li>'
+'</ul>'
 +'</div>'
+'</div>'
+'<div class="notice">'
+'<ul class="tab">'
+'<li class="on">'
+'<a href="#" class="tab1">공지사항</a>'
+'</li>'
+'<li>'
+'<a href="#" class="tab2">자주묻는질문</a>'
+'</li>'
+'</ul>'
+'<div class="notice1" style="display:block;">'
+'<ul style="list-style: none;">'
+'<li>'
+'<a href="#">[담배와의 전쟁]쏘파라치...</a>'
+'<img src="http://socdnw.speedgabia.com/template/asset/images/main/ico_new.png" alt="새글">'
+'</li>'
+'<li>'
+'<a href="#">[공지]태풍차바로인한..</a>'
+'<img src="http://socdnw.speedgabia.com/template/asset/images/main/ico_new.png" alt="새글">'
+'</li>'
+'<li>'
+'<a href="#">[쏘카존]10월2주차..</a>'
+'<img src="http://socdnw.speedgabia.com/template/asset/images/main/ico_new.png" alt="새글">'
+'</li>'
+'<li>'
+'<a href="#">[이벤트]친구도나도 2만원</a>'
+'<img src="http://socdnw.speedgabia.com/template/asset/images/main/ico_new.png" alt="새글">'
+'</li>'
+'<li>'
+'<a href="#">[공지]친구초대 쿠폰지급..</a>'
+'<img src="http://socdnw.speedgabia.com/template/asset/images/main/ico_new.png" alt="새글">'
+'</li>'
+'</ul>'
+'<a href="#" class="more">'
+'<img alt="더보기" src="resources/img/btn_more.png">'
+'</a>'
+'</div>'
+'<div class="notice2" style="display : none;">'
+'<ul style="list-style: none;">'
+'<li>'
+'<a href="#">세차가하고싶어요</a>'
+'</li>'
+'<li>'
+'<a href="#">이용 요금은 어떻게 지불..</a>'
+'</li>'
+'<li>'
+'<a href="#">신용카드만 가능한가요?</a>'
+'</li>'
+'<li>'
+'<a href="#">주유는 어떻게 해야하나요</a>'
+'</li>'
+'</ul>'
+'<a href="#" class="more">'
+'<img alt="더보기" src="resources/img/btn_more.png">'
+'</a>'
+'</div>'
+'</div>'
+'</div>';


var util = (function(){
	return {
	isNumber : function(value) {
	  return typeof value === 'number' && isFinite(value)
	},
	pwChecker : function(value) {
	var pw_regex = /^.*(?=.{3,10})(?=.*[a-zA-Z0-9]).*$/;
	return pw_regex.test(value)?"yes":"no";
	}	
	};
})();