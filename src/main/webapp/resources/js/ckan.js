/*
============ MAJOR_JS =====
@AUTHOR : ckan2010@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 전공
==============================
*/
var ADMIN_NOTICE = '<div id="admin_notice" class="notice1 box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">묻의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/h3_notice.gif" alt="공지사항"></h3>'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'<fieldset>'
	+'<input type="text" name="keyword" id="keyword" class="input">'
	+'<input id="btn_notice_search" type="image" src="resources/img/btn_notice_search.gif" alt="검색">'
	+'<a id="a_admin_notice_write">'
	+'<input id="btn_notice_write" type="image" src="resources/img/notice_write.gif" alt="등록">'
	+'</a>'
	+'</fieldset>'
	+'</div>'
	;
var ADMIN_NOTICE_FIND = '<div id="admin_notice" class="notice1 box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">묻의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/h3_notice.gif" alt="공지사항"></h3>'
	;
var ADMIN_NOTICE_TH = '<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col width="65"><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>번호</th>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';
var ADMIN_NOTICE_END ='</div></div></div></div>';
var ADMIN_NOTICE_CONTENT = '<div id= "admin_notice" class="notice1 box">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 165px;" src="resources/img/h3_notice.gif" alt="공지사항"></h3>'	;
var ADMIN_NOTICE_CONTENT_TH='<table id="notice_content" cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';
var ADMIN_NOTICE_CONTENT_ROW = '<tr>'
	+'<td id="content_title" class="subj" ></td>'
	+'<td id="content_regdate"></td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<div id="admin_notice_content" class="viewCont" style="margin-bottom:20px; padding: 20px 20px 30px; border-bottom: 1px solid #d3d3d3;">'
	+'</div>'
	+'<p class="centerBtn"><a href="#" onclick="admin.admin_notice_form(1)"><img src="resources/img/btn_list.gif" alt="목록보기"></a></p>'
	+'</div>';
var ADMIN_NOTICE_WRITE = '<div id= "admin_notice" class="notice1 box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="resources/img/h3_notice.gif" alt="공지사항"></h3>'
	+'<form id="admin_notice_write_form" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th><img src="resources/img/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td>'
	+'<input id="adm_notice_title" type="text" name="title" class="input" value="" style="width:90%; margin-bottom: 20px">'
	+'<textarea id="adm_notice_contents" cols="" name="contents" rows="15" class="textarea" style="width:90%"></textarea>'
	+'</td>'
	+'</tr>'
	+'</tbody></table>'
	+'<p class="centerBtn">'
	+'<input id="btn_notice_write_submit" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_INQUIRY = '<div id= "admin_answer" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/qna.gif" alt="묻의&답변">'
	+'</h3>'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'<fieldset>'
	+'<input type="text" name="inquiry_keyword" id="inquiry_keyword" class="input">'
	+'<input id="btn_inquiry_search" type="image" src="resources/img/btn_notice_search.gif" alt="검색">'
	+'</fieldset>'
	+'</div>'
	;
var ADMIN_INQUIRY_TH =
	 '<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col width="65"><col width="130"><col width="400"><col width="80"><col width="150"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>번호</th>'
	+'<th>문의분류</th>'
	+'<th>제목</th>'
	+'<th>작성자</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>'
	;
var ADMIN_INQUIRY_FIND = '<div id= "admin_answer" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/qna.gif" alt="묻의&답변">'
	+'</h3>'
	;
var ADMIN_ANSWER = '<div id="admin_answer" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="resources/img/qna.jpg" alt="묻의&답변"></h3>'
	+'<form id="admin_answer_form" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody><tr>'
	+'<th><img src="resources/img/inquiry_txt2.gif" alt="문의분류"></th>'
	+'<td style="width:165px" name="category" id="customer_category">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td id="customer_title" name="title" class="input" style="width:400px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<td>'
	+'</td>'
	+'<td id="customer_content">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="resources/img/answer_title.jpg" alt="답변"></th>'
	+'<td>'
	+'<textarea id="customer_answer" cols="" name="contents" rows="15" class="textarea" style="width:750px"></textarea>'
	+'</td>'
	+'</tr>'
	+'</tbody></table>'
	+'<p class="centerBtn">'
	+'<input id="btn_answer_submit" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_CAR = '<div id= "admin_car" class="box">'
+'<div id="container">'
+'<div id="content">'
+'<div class="admin_lnb">'
+'<ul class="admin_lnb">'
+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
+'</ul>'+''
+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/car_mag.jpg" alt="차량관리"></h3>'
+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
+'<fieldset>'
+'<select name="admin_car_keyField" id="admin_car_keyField">'
+'<option value="socar_zone" selected>쏘카존</option>'
+'<option value="car_type">차량</option>'
+'</select>'
+'<input type="text" name="admin_car_keyword" id="admin_car_keyword" class="input">'
+'<input id="btn_car_search" type="image" src="resources/img/btn_notice_search.gif" alt="검색">'
+'<a id="a_admin_car_regist">'
+'<input id="btn_car_regist" type="image" src="resources/img/notice_write.gif" alt="등록">'
+'</a>'
+'</fieldset>'
+'</div>'
;
var ADMIN_CAR_TH =
 '<table style="margin-left: 0" cellspacing="0" summary="차량관리" class="admin_cols">'
+'<colgroup><col width="84"><col width="137"><col width="200"><col width="84"><col width="200"><col width="200"><col width="84"><col></colgroup>'
+'<thead>'
+'<tr>'
+'<th>차량번호</th>'
+'<th>쏘카존</th>'
+'<th>차량</th>'
+'<th>유종</th>'
+'<th>옵션</th>'
+'<th>대여요금</th>'
+'<th>주행요금</th>'
+'<th>&nbsp;</th>'
+'</tr>'
+'</thead>'
+'<tbody>'
;
var ADMIN_CAR_FIND = '<div id= "admin_car" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'+''
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/car_mag.jpg" alt="차량관리">'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'</h3>'
	;
var ADMIN_CAR_UPDATE = '<div id= "admin_car" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="resources/img/car_mag.jpg" alt="차량관리"></h3>'
	+'<form id="admin_car_update" method="post" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th>차량번호</th>'
	+'<td id="admin_car_num"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>쏘카존</th>'
	+'<td id="u_admin_socar_zone">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량</th>'
	+'<td><img id="admin_car_img" src=""></td>'
	+'</tr>'
	+'<tr>'
	+'<th></th>'
	+'<td id="u_admin_car_img_name"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량명</th>'
	+'<td id="admin_car_type"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>유종</th>'
	+'<td id="admin_oil_type"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>옵션</th>'
	+'<td id="u_admin_car_option">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>대여요금</th>'
	+'<td id="u_admin_rent_amt">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>주행요금</th>'
	+'<td id="u_admin_drive_amt">'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="btn_admin_car_update" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_CAR_REGIST = '<div id= "admin_car" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="resources/img/car_mag.jpg" alt="차량관리"></h3>'
	+'<form id="admin_car_regist" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th>차량번호</th>'
	+'<td><div id="admin_reg_car_num_td"><input id="admin_reg_car_num" type="text" name="title" class="input" value="" style="width:100px"></div></td>'
	+'</tr>'
	+'<tr>'
	+'<th></th>'
	+'<td><div id="car_num_chk_dup_td"><input id="car_num_chk_dup" type="button" value="중복체크" style="width:100px;height:30px;"></div></td>'
	+'</tr>'
	+'<tr>'
	+'<th>쏘카존</th>'
	+'<td>'
	+'<input id="admin_reg_socar_zone" type="text" name="title" class="input" value="" style="width:200px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량</th>'
	+'<td>'
	+'<input id="admin_reg_car_type" type="text" name="title" class="input" value="" style="width:200px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>유종</th>'
	+'<td>'
	+'<select name="admin_reg_car_oil_type" id="admin_reg_car_oil_type">'
	+'<option value="휘발유" selected>휘발유</option>'
	+'<option value="경유">경유</option>'
	+'<option value="LPG">LPG</option>'
	+'</select>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>옵션</th>'
	+'<td>'
	+'<select name="admin_reg_car_option" id="admin_reg_car_option">'
	+'<option value="네비게이션" selected>네비게이션</option>'
	+'<option value="블랙박스">블랙박스</option>'
	+'<option value="오토변속기어">오토변속기어</option>'
	+'<option value="오토변속기어,네비게이션,블랙박스">오토변속기어,네비게이션,블랙박스</option>'
	+'</select>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>대여요금</th>'
	+'<td>'
	+'<input id="admin_reg_rent_amt" type="text" name="option" class="input" value="" style="width:100px"> 원'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>주행요금</th>'
	+'<td>'
	+'<input id="admin_reg_drive_amt" type="text" name="option" class="input" value="" style="width:100px"> 원/Km'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량이미지</th>'
	+'<td>'
	+'<input id="admin_reg_img_name" type="file" onchange="admin.readURL(this);" class="inquiry_input" name="userfile" value="">'
	+'<span class="tip ml10">이미지 파일은 jpg, png, gif 만 첨부가능합니다.</span>'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="btn_admin_car_regist" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_COUPON = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="resources/img/coupon_mag.jpg" alt="쿠폰관리">'
	+'</h3>'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'<fieldset>'
	+'<input type="text" name="coupon_keyword" id="coupon_keyword" class="input">'	
	+'<input id="btn_coupon_search" type="image" src="resources/img/btn_notice_search.gif" alt="검색">'
	+'<a id="a_admin_coupon_regist">'
	+'<input id="btn_coupon_regist" type="image" src="resources/img/notice_write.gif" alt="등록" ></a>'
	+'</a>'
	+'</fieldset>'
	+'</div>'
	;
var ADMIN_COUPON_TH = '<table style="margin-left: 0" cellspacing="0" summary="쿠폰관리" class="admin_cols">'
	+'<colgroup><col width="84"><col width="400"><col width="300"><col width="200"><col width="200"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>쿠폰번호</th>'
	+'<th>쿠폰명</th>'
	+'<th>오픈기간</th>'
	+'<th>유효기간</th>'
	+'<th>사용조건</th>'
	+'<th>&nbsp;</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>'
	;
var ADMIN_COUPON_FIND = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img style="padding-top: 15px; padding-bottom: 15px" src="resources/img/coupon_mag.jpg" alt="쿠폰관리">'
	+'</h3>'
	;
var ADMIN_COUPON_DETAIL = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="resources/img/coupon_mag.jpg" alt="쿠폰관리"></h3>'
	+'<table style="width: 89%;" cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<td>쿠폰번호</td>'
	+'<td id="admin_coupon_seq"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>쿠폰명</th>'
	+'<td><img src="" id="admin_coupon_img"></td>'
	+'</tr>'
	+'<tr>'
	+'<th></th>'
	+'<td id="admin_coupon_name"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>오픈기간</th>'
	+'<td id="admin_coupon_open_date"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>유효기간</th>'
	+'<td id="admin_coupon_ep_date"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>사용조건</th>'
	+'<td id="u_admin_coupon_option_header"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>자세히</th>'
	+'<td >'
	+'<textarea id="u_admin_coupon_option_detail" cols="" name="contents" rows="15" class="textarea" style="width:750px"></textarea>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인조건</th>'
	+'<td id="admin_coupon_dc_option">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인</th>'
	+'<td id="admin_coupon_dc"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>남은쿠폰수량</th>'
	+'<td id="admin_coupon_count"></td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="btn_admin_coupon_update" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_COUPON_REGIST = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="resources/img/coupon_mag.jpg" alt="쿠폰관리"></h3>'
	+'<form id="admin_coupon_regist_form" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th>쿠폰명</th>'
	+'<td><input id="admin_reg_coupon_name" type="text" name="title" class="input" value="" style="width:500px"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>오픈기간</th>'
	+'<td>'
	+'<input id="admin_reg_coupon_open_start" type="text" name="title" class="input" value="" style="width:100px" placeholder="ex)2016-08-01"> ~'
	+'<input id="admin_reg_coupon_open_end" type="text" name="title" class="input" value="" style="width:100px" placeholder="ex)2016-08-01">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>유효기간</th>'
	+'<td>'
	+'<input id="admin_reg_coupon_ep_date" type="text" name="title" class="input" value="" style="width:100px" placeholder="ex)2016-08-01">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>사용조건</th>'
	+'<td>'
	+'<input id="admin_reg_option_header" type="text" name="title" class="input" value="" style="width:700px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>자세히</th>'
	+'<td>'
	+'<textarea id="admin_reg_option_detail" cols="" name="contents" rows="15" class="textarea" style="width:750px"></textarea>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인조건</th>'
	+'<td>'
	+'<select name="admin_reg_dc_option" id="admin_reg_dc_option">'
	+'<option value="-" selected>금액</option>'
	+'<option value="%">%</option>'
	+'</select>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인</th>'
	+'<td>'
	+'<input id="admin_reg_dc" type="text" name="option" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>쿠폰수량</th>'
	+'<td>'
	+'<input id="admin_reg_coupon_count" type="text" name="option" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>쿠폰이미지</th>'
	+'<td>'
	+'<input id="admin_reg_coupon_img_name" type="file" onchange="admin.couponreadURL(this);" class="inquiry_input" name="userfile" value="">'
	+'<span class="tip ml10">이미지 파일은 jpg, png, gif 만 첨부가능합니다.</span>'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="btn_coupon_submit" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var admin = (function(){
	var car_num_chk_dup_flag = "TRUE";
	var init = function(){onCreate()};
	var setContentView = function(){
	};
	var onCreate = function(){
		setContentView();
		$('#btn_admin_mode').click(function(){admin.admin_notice_form(1);}); 
		$('#pub_article').on('click','#a_admin_notice',function(){
			admin.admin_notice_form(1);
		});
		$('#pub_article').on('click','#a_admin_notice_write',function(){
			admin.admin_notice_write();
		});
		$('#pub_article').on('click','#a_admin_inquiry_list',function(){
			admin.admin_inquiry_form(1);
		});
		$('#pub_article').on('click','#a_admin_car_list',function(){
			admin.admin_car_form(1);
		});
		$('#pub_article').on('click','#a_admin_car_regist',function(){
			admin.car_regist_form();
		});
		$('#car_num_chk_dup').click(function(){admin.car_num_chk_dup();});		
		$('#pub_article').on('click','#a_admin_coupon_list',function(){
			admin.admin_coupon_form(1);
		});		
		$('#pub_article').on('click','#a_admin_coupon_regist',function(){
			admin.admin_coupon_regist_form();
		});
	};	
	return{
		init : init,
		numberWithCommas: function (x) {
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		admin_notice_form : function(pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/notice_list/'+pgNum,function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				notice_list = ADMIN_NOTICE;
				notice_list += ADMIN_NOTICE_TH;	
				if (data.totCount===0) {
					notice_list +='<tr><td colspan=7>등록된 공지사항이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,notice){
						notice_list +=
							'<tr>'
							+'<td>'+notice.seq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_notice_content('+notice.customerSeq+')" id= "a_admin_notice_content">'+notice.title+'</a></td>'
							+'<td>'+notice.regDate+'</td>'
							+'<td style="visibility:hidden">'+notice.customerSeq+'</td>'
							+'</tr>';
					});
				}
				notice_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination ='';
				}else{
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
						var temp;
						if(pgNum % groupSize == 0){
							temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
						}else{
							temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
						}
						var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_notice_form('+temp2+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a href="#" onclick="admin.admin_notice_form('+temp+')" aria-label="Previous">'
							+'<span aria-hidden="true"><</span>'
							+'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '<a href="#" onclick="admin.admin_notice_form('+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                	 var temp3;
	                	 if(pgNum % groupSize == 0){
	                		 temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                	 }else{
	                		 temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                	 }
	                	 var temp4 = totPg;
	                	 pagination += '<a href="#" onclick="admin.admin_notice_form('+temp3+')" aria-label="Next">'
	                	        +'<span aria-hidden="true">></span>'
	                	        +'</a>'
	                	        +'<a href="#" onclick="admin.admin_notice_form('+temp4+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                notice_list += pagination;
				}
					                
				notice_list += ADMIN_NOTICE_END;
				frame = notice_list;
				$('#pub_article').html(frame);
				
				$('#btn_notice_search').click(function(){
					if($('#keyword').val().length>0){
						admin.admin_find_notice('title',$('#keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#keyword').focus();
						return false
					}
				});
			});
		},
		admin_notice_content : function(customerSeq){
			$('#pub_article').empty();
			var frame = '';
			var notice_content = '';
			notice_content = ADMIN_NOTICE_CONTENT;
			notice_content += ADMIN_NOTICE_CONTENT_TH;
			notice_content += ADMIN_NOTICE_CONTENT_ROW;
			notice_content += ADMIN_NOTICE_END;
			frame = notice_content;
			$('#pub_article').html(frame);
			$.getJSON(app.context()+'/admin/noticeContent/customerSeq/'+customerSeq,function(data){
			$('#notice_content #content_title').text(data.title);
			$('#notice_content #content_regdate').text(data.regDate);
			$('#admin_notice_content').text(data.content);
			});
		},
		admin_find_notice : function(keyField,keyword,pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/notice_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;				
				notice_list = ADMIN_NOTICE_FIND;
				notice_list += ADMIN_NOTICE_TH;	
				
				if (data.totCount===0) {
					notice_list +='<tr><td colspan=7>등록된 검색 공지사항이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,notice){
						notice_list +=
							'<tr>'
							+'<td>'+notice.seq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_notice_content('+notice.customerSeq+')" id= "a_admin_notice_content">'+notice.title+'</a></td>'
							+'<td>'+notice.regDate+'</td>'
							+'<td style="visibility:hidden">'+notice.customerSeq+'</td>'
							+'</tr>';
					});
				}
				notice_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination ='';
				}else{
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_find_notice(\'title\',\''+keyword+'\','+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a href="#" onclick="admin.admin_find_notice(\'title\',\''+keyword+'\','+(temp)+')" aria-label="Previous">'
	                        +'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '<a href="#" onclick="admin.admin_find_notice(\'title\',\''+keyword+'\','+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_find_notice(\'title\',\''+keyword+'\','+(temp3)+')" aria-label="Next">'
	                            +'<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_find_notice(\'title\',\''+keyword+'\','+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                notice_list += pagination;	
				}
				notice_list += ADMIN_NOTICE_END;
				frame = notice_list;
				$('#pub_article').html(frame);
			});
		},
		admin_notice_write : function(){
			$('#pub_article').empty().html(ADMIN_NOTICE_WRITE);
			admin.init();
			$('#btn_notice_write_submit').click(function(e){
			    e.preventDefault();
			    var join_info = {
						'title' : $('#adm_notice_title').val(),
						'content' : $('#adm_notice_contents').val()
					};
			    $.ajax({
					url : app.context()+'/admin/notice_write',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_notice_form(1);
						}else{
							alert('공지사항 입력시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
					}
					
				});				
			}); 
		},
		admin_inquiry_form : function(pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/customer_list/'+pgNum,function(data){
				var frame = '';
				var inquiry_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				inquiry_list = ADMIN_INQUIRY;
				inquiry_list += ADMIN_INQUIRY_TH;				
				if (data.totCount===0) {
					inquiry_list +='<tr><td colspan=7>등록된 문의가 없습니다.</td></tr>';
				} else {
					$.each(data.list, function(i,inquiry){
						inquiry_list +=
							'<tr>'
							+'<td>'+inquiry.seq+'</td>'
							+'<td>'+inquiry.category+'</td>';
							if(inquiry.answer===null ){
								inquiry_list += '<td class="subj"><a href="#" onclick="admin.admin_inquiry_answer('+inquiry.customerSeq+')" id= "a_admin_answer">'+inquiry.title+'</a><img src="resources/img/ico-new.gif"></td>';
							}else{
								inquiry_list += '<td class="subj"><a href="#" onclick="admin.admin_inquiry_answer('+inquiry.customerSeq+')" id= "a_admin_answer">'+inquiry.title+'</a></td>';
							}
							inquiry_list +='<td>'+inquiry.id+'</td>'
							+'<td>'+inquiry.regDate+'</td>'
							+'<td style="visibility:hidden">'+inquiry.customerSeq+'</td>'
							+'</tr>';
					});
				}
				inquiry_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination ='';
				} else {
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_inquiry_form('+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a href="#" onclick="admin.admin_inquiry_form('+(temp)+')" aria-label="Previous">'
							+'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></fonr>';
	                    }else{
	                    	pagination += '<a href="#" onclick="admin.admin_inquiry_form('+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_inquiry_form('+(temp3)+')" aria-label="Next">'
	                            + '<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_inquiry_form('+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                inquiry_list += pagination;	
				}
                inquiry_list += ADMIN_NOTICE_END;
				frame = inquiry_list;
				$('#pub_article').html(frame);
				
				$('#btn_inquiry_search').click(function(){
					if($('#inquiry_keyword').val().length>0){
						admin.admin_find_inquiry('title',$('#inquiry_keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#inquiry_keyword').focus();
						return false
					}
				});
			});
		},
		admin_find_inquiry : function(keyField,keyword,pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/customer_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var inquiry_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				inquiry_list = ADMIN_INQUIRY_FIND;
				inquiry_list += ADMIN_INQUIRY_TH;	
				
				if (data.totCount===0) {
					inquiry_list +='<tr><td colspan=7>등록된 검색 문의가 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,inquiry){
						inquiry_list +=
							'<tr>'
							+'<td>'+inquiry.seq+'</td>'
							+'<td>'+inquiry.category+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_inquiry_answer('+inquiry.customerSeq+')" id= "a_admin_answer">'+inquiry.title+'</a></td>'
							+'<td>'+inquiry.id+'</td>'
							+'<td>'+inquiry.regDate+'</td>'
							+'<td style="visibility:hidden">'+inquiry.customerSeq+'</td>'
							+'</tr>';
					});
				}
				inquiry_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination ='';
				}else{
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_find_inquiry(\'title\',\''+keyword+'\','+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a href="#" onclick="admin.admin_find_inquiry(\'title\',\''+keyword+'\','+(temp)+')" aria-label="Previous">'
							+'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '<a href="#" onclick="admin.admin_find_inquiry(\'title\',\''+keyword+'\','+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_find_inquiry(\'title\',\''+keyword+'\','+(temp3)+')" aria-label="Next">'
	                            +'<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_find_inquiry(\'title\',\''+keyword+'\','+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                inquiry_list += pagination;
				}
                inquiry_list += ADMIN_NOTICE_END;
				frame = inquiry_list;
				$('#pub_article').html(frame);
			});
		},
		admin_inquiry_answer : function(customerSeq){
			$('#pub_article').empty().html(ADMIN_ANSWER);	
			admin.init();
			$.getJSON(app.context()+'/admin/customerAnswer/customer_seq/'+customerSeq,function(data){
				$('#customer_category').text(data.category);
				$('#customer_title').text(data.title);
				$('#customer_content').text(data.content);
				$('#customer_answer').text(data.answer);
			});
			$('#btn_answer_submit').click(function(e){
				e.preventDefault();
				var join_info = {
						'answer' : $('#customer_answer').val(),
						'customerSeq' : customerSeq
					};
			    $.ajax({
					url : app.context()+'/admin/customer_answer',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_inquiry_form(1);
						}else{
							alert('답변 업데이트시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
					}
					
				});
			}); 
		},
		admin_car_form : function(pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/admin_car_list/'+pgNum,function(data){
				var frame = '';
				var car_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				car_list = ADMIN_CAR;
				car_list += ADMIN_CAR_TH;					
				if (data.totCount===0) {
					car_list +='<tr><td colspan=7>등록된 차량이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,car){
						car_list +=
							'<tr>'
							+'<td > '+car.carNum+'</td>'
							+'<td>'+car.socarZone+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.car_update_form('+car.seq+')" id= "a_admin_notice_content"><img src="resources/img/car_image/'+car.carImg+'" id="car_thumb"></a><p>'+car.carType+'</p></td>'
							+'<td>'+car.oilType+'</td>'
							+'<td>'+car.carOption+'</td>'
							+'<td>'+car.rentAmt+'원</td>'
							+'<td>'+car.driveAmt+'원/km</td>'
							+'<td style="visibility:hidden">'+car.seq+'</td>'
							+'</tr>';
					});
				}				
				car_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination = '';
				} else {
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_car_form('+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
	                        +'</a>'
	                        +'<a href="#" onclick="admin.admin_car_form('+(temp)+')" aria-label="Previous">'
	                        +'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '<a href="#" onclick="admin.admin_car_form('+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_car_form('+(temp3)+')" aria-label="Next">'
	                            +'<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_car_form('+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                car_list += pagination;	
				}
                car_list += ADMIN_NOTICE_END;
				frame = car_list;
				$('#pub_article').html(frame);				
				$('#btn_car_search').click(function(){
					if($('#admin_car_keyword').val().length>0){
						admin.admin_find_car($('#admin_car_keyField').val(),$('#admin_car_keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#admin_car_keyword').focus();
						return false
					}
				});
			});	
		},
		admin_find_car : function(keyField,keyword,pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/car_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var car_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				car_list = ADMIN_CAR_FIND;
				car_list += ADMIN_CAR_TH;	
				if (data.totCount===0) {
					car_list +='<tr><td colspan=7>등록된 차량이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,car){
						car_list +=
							'<tr>'
							+'<td > '+car.carNum+'</td>'
							+'<td class="subj">'+car.socarZone+'</td>'
							+'<td><a href="#" onclick="admin.car_update_form('+car.seq+')" id= "a_admin_notice_content"><img src="resources/img/car_image/'+car.carImg+'" id="car_thumb"></a><p>'+car.carType+'</p></td>'
							+'<td>'+car.oilType+'</td>'
							+'<td>'+car.carOption+'</td>'
							+'<td>'+car.rentAmt+'원</td>'
							+'<td>'+car.driveAmt+'원/km</td>'
							+'<td style="visibility:hidden">'+car.seq+'</td>'
							+'</tr>';
					});
				}
				car_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination ='';
				} else {
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_find_inquiry(\''+keyField+'\',\''+keyword+'\','+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a href="#" onclick="admin.admin_find_inquiry(\''+keyField+'\',\''+keyword+'\','+(temp)+')" aria-label="Previous">'
	                        +'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_find_inquiry(\''+keyField+'\',\''+keyword+'\','+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_find_inquiry(\''+keyField+'\',\''+keyword+'\','+(temp3)+')" aria-label="Next">'
	                            +'<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_find_inquiry(\''+keyField+'\',\''+keyword+'\','+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                car_list += pagination;
				}
                car_list += ADMIN_NOTICE_END;
				frame = car_list;
				$('#pub_article').html(frame);
			});
		},
		car_update_form : function(seq){
			$('#pub_article').empty().html(ADMIN_CAR_UPDATE);	
			admin.init();
			$.getJSON(app.context()+'/admin/carUpdate/seq/'+seq,function(data){
				$('#admin_car_num').text(data.carNum);
				$('#u_admin_socar_zone').html('<input type="text" id="admin_socar_zone" class="input" value="'+data.socarZone+'" style="width:200px"/>');			
				$('#admin_car_img').attr('src','resources/img/car_image/'+data.carImg);
				$('#admin_img_name').text(data.carImg);
				$('#u_admin_car_img_name').html('<input type="text" id="admin_car_img_name" class="input" value="'+data.carImg+'" style="width:100px"/>');
				$('#admin_car_type').text(data.carType);				
				$('#admin_oil_type').text(data.oilType);
				$('#u_admin_car_option').html('<input type="text" id="admin_car_option" class="input" value="'+data.carOption+'" style="width:400px"/>');
				$('#u_admin_rent_amt').html('<input id="admin_rent_amt" type="text" name="option" class="input" value="'+data.rentAmt+'" style="width:100px"/>  원');
				$('#u_admin_drive_amt').html('<input id="admin_drive_amt" type="text" name="option" class="input" value="'+data.driveAmt+'" style="width:100px"/> 원/km');
			});
			$('#btn_admin_car_update').click(function(e){
				e.preventDefault();
				var join_info = {
						'socarZone' : $('#admin_socar_zone').val(),
						'carImg' : $('#admin_car_img_name').val(),
						'carOption' : $('#admin_car_option').val(),
						'rentAmt' : $('#admin_rent_amt').val(),
						'driveAmt' : $('#admin_drive_amt').val(),
						'carNum' : $('#admin_car_num').html()
					};
			    $.ajax({
					url : app.context()+'/admin/car_update',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_car_form(1);
						}else{
							alert('차량 업데이트시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
					}
					
				});
			}); 
		},
		car_num_chk_dup : function(){
			$.ajax({
				url : app.context()+'/admin/car_num_chk_dup/'+$('#admin_reg_car_num').val(),
				success : function(data){
					if(data.flag==="TRUE"){
						$('#admin_reg_car_num_td').html('<input id="admin_reg_car_num" type="text" name="title" class="input" value="" style="width:200px" placeholder="'+data.message+'">');
						$('#car_num_chk_dup_td').html('<input id="car_num_re_chk" type="button" value="다시조회" style="width:100px;height:30px;">');
						car_num_chk_dup_flag = data.flag;
						$('#car_num_re_chk').click(function(){admin.car_num_chk_dup();});						
					}else{
						$('#admin_reg_car_num_td').html('<input id="admin_reg_car_num" type="text" name="title" class="input" value="'+data.carNum+'" style="width:200px">');
						$('#car_num_chk_dup_td').html('<input id="car_num_used" type="button" value="그대로사용" style="width:100px;height:30px;">');							
						car_num_chk_dup_flag = data.flag;
					}
					$('#admin_reg_car_num').keyup(function(){
						car_num_chk_dup_flag = "TRUE";
					});
				},
				error : function(x,s,m){
					alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
				}
			});
			
		},		
		car_regist_form : function(){
			$('#pub_article').empty().html(ADMIN_CAR_REGIST);	
			admin.init();
			$('#btn_admin_car_regist').click(function(e){
				e.preventDefault();
				if(car_num_chk_dup_flag==="TRUE"){
					alert('중복체크 하세요.');
					$('#admin_reg_car_num').focus();
					$('#car_num_chk_dup_td').html('<input id="car_num_chk_dup" type="button" value="중복체크" style="width:100px;height:30px;">');
					$('#car_num_chk_dup').click(function(){admin.car_num_chk_dup();});
					return;									
				}
				if($('#admin_reg_car_num').val()===""){
					alert('차량번호 는 필수 입력 입니다.');
					$('#admin_reg_car_num').val('').focus();
					return;
				}
				if($('#admin_reg_socar_zone').val()===""){
					alert('쏘카존은 필수 입력 입니다.');
					$('#admin_reg_socar_zone').val('').focus();
					return;
				}
				if($('#admin_reg_car_type').val()===""){
					alert('차종은 필수 입력 입니다.');
					$('#admin_reg_car_type').val('').focus();
					return;
				}
				if($('#admin_reg_car_oil_type').val()===""){
					alert('유종은 필수 입력 입니다.');
					$('#admin_reg_car_oil_type').val('').focus();
					return;
				}
				if($('#admin_reg_rent_amt').val()===""){
					alert('대여요금 은 필수 입력 입니다.');
					$('#admin_reg_rent_amt').val('').focus();
					return;
				}
				if($('#admin_reg_drive_amt').val()===""){
					alert('주행요금 은 필수 입력 입니다.');
					$('#admin_reg_drive_amt').val('').focus();
					return;
				}
				var fileValue = $("#admin_reg_img_name").val().split("\\");
				var fileName = fileValue[fileValue.length-1]; // 파일명

				var join_info = {
						'carNum' : $('#admin_reg_car_num').val(),
						'socarZone' : $('#admin_reg_socar_zone').val(),
						'carImg' : fileName,
						'carType' : $('#admin_reg_car_type').val(),
						'oilType' : $('#admin_reg_car_oil_type').val(),
						'carOption' : $('#admin_reg_car_option').val(),
						'rentAmt' : $('#admin_reg_rent_amt').val(),
						'driveAmt' : $('#admin_reg_drive_amt').val()										
					};
			    $.ajax({
					url : app.context()+'/admin/car_regist',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_car_form(1);
						}else{
							alert('차량등록시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
					}
					
				});
			});	
		},
		readURL : function(input) {
		    if (input.files) {
		        var reader = new FileReader();
		        reader.onload = function (e) {
		            $('#admin_reg_car_img').attr('src', e.target.result);
		        }
		        reader.readAsDataURL(input.files[0]);
		    }
		},
		admin_coupon_form : function(pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/coupon_list/'+pgNum,function(data){
				var frame = '';
				var coupon_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				coupon_list = ADMIN_COUPON;
				coupon_list += ADMIN_COUPON_TH;					
				if (data.totCount===0) {
					coupon_list +='<tr><td colspan=7>등록된 쿠폰이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,coupon){
						coupon_list +=
							'<tr>'
							+'<td>'+coupon.couponMasterSeq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.coupon_update_form('+coupon.couponMasterSeq+')"><img src="resources/img/coupon/'+coupon.imgName+'" id="car_thumb"></a><p>'+coupon.couponName+'</p></td>'
							+'<td>'+coupon.openDateStart+' ~ '+coupon.openDateEnd+'</td>'
							+'<td>'+coupon.epDate+'</td>'
							+'<td>'+coupon.optionHeader+'</td>'
							+'</tr>';
					});
				}				
				coupon_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination = '';
				} else {
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_coupon_form('+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
	                        +'</a>'
	                        +'<a href="#" onclick="admin.admin_coupon_form('+(temp)+')" aria-label="Previous">'
	                        +'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '<a href="#" onclick="admin.admin_coupon_form('+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_coupon_form('+(temp3)+')" aria-label="Next">'
	                            +'<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_coupon_form('+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                	coupon_list += pagination;	
				}
				coupon_list += ADMIN_NOTICE_END;
				frame = coupon_list;
				$('#pub_article').html(frame);				
				$('#btn_coupon_search').click(function(){
					if($('#coupon_keyword').val().length>0){
						admin.admin_find_coupon('coupon_name',$('#coupon_keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#coupon_keyword').focus();
						return false
					}
				});
			});	
		},
		admin_find_coupon : function(keyField,keyword,pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/admin/coupon_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var coupon_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				coupon_list = ADMIN_COUPON_FIND;
				coupon_list += ADMIN_COUPON_TH;	
				if (data.totCount===0) {
					coupon_list +='<tr><td colspan=7>등록된 쿠폰이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,coupon){
						coupon_list +=
							'<tr>'
							+'<td > '+coupon.couponMasterSeq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.coupon_update_form('+coupon.couponMasterSeq+')"><img src="resources/img/coupon/'+coupon.imgName+'" id="car_thumb"></a><p>'+coupon.couponName+'</p></td>'
							+'<td>'+coupon.openDateStart+' ~ '+coupon.openDateEnd+'</td>'
							+'<td>'+coupon.epDate+'</td>'
							+'<td>'+coupon.optionHeader+'</td>'
							+'</tr>';
					});
				}
				coupon_list += '</tbody></table>'
				if (data.totCount===0) {
					pagination ='';
				} else {
					pagination = '<div id="admin_paginate" class="paginate">';
					if(pgNum > groupSize){
	                    var temp;
	                    if(pgNum % groupSize == 0){
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                    }else{
	                        temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
	                    }
	                    var temp2 = 1;
						pagination += 
							'<a href="#" onclick="admin.admin_find_coupon(\''+keyField+'\',\''+keyword+'\','+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a href="#" onclick="admin.admin_find_coupon(\''+keyField+'\',\''+keyword+'\','+(temp)+')" aria-label="Previous">'
	                        +'<span aria-hidden="true"><</span>'
	                        +'</a>'
							;
	                 }
	                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
	                    if(i==pgNum){
	                       pagination +='<font color="blue"><strong>'+i+'</strong></font>';
	                    }else{
	                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_find_coupon(\''+keyField+'\',\''+keyword+'\','+i+')">'+' '+i+' '+'</a>';
	                    }
	                    temp_num = i;
	                 }
	                 if(temp_num != totPg){
	                     var temp3;
	                     if(pgNum % groupSize == 0){
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
	                     }else{
	                         temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
	                     }
	                     var temp4 = totPg;
	                	 pagination += 
	                            '<a href="#" onclick="admin.admin_find_coupon(\''+keyField+'\',\''+keyword+'\','+(temp3)+')" aria-label="Next">'
	                            +'<span aria-hidden="true">></span>'
	                            +'</a>'
	                            +'<a href="#" onclick="admin.admin_find_coupon(\''+keyField+'\',\''+keyword+'\','+(temp4)+')" aria-label="Next">'
	                            + '<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
	                            +'</a>'
	                           ;
	                 }
	                pagination += '</div>'
	                coupon_list += pagination;
				}
				coupon_list += ADMIN_NOTICE_END;
				frame = coupon_list;
				$('#pub_article').html(frame);
			});
		},
		coupon_update_form : function(couponMasterSeq){
			$('#pub_article').empty().html(ADMIN_COUPON_DETAIL);
			admin.init();
			$.getJSON(app.context()+'/admin/couponUpdate/couponMasterSeq/'+couponMasterSeq,function(data){
				$('#admin_coupon_seq').text(data.couponMasterSeq);
				$('#admin_coupon_img').attr('src','resources/img/coupon/'+data.imgName);
				$('#admin_coupon_name').text(data.couponName);
				$('#admin_coupon_open_date').text(data.openDateStart+' ~ '+data.openDateEnd);				
				$('#admin_coupon_ep_date').text(data.epDate);
				$('#u_admin_coupon_option_header').html('<input type="text" id="admin_coupon_option_header" class="input" value="'+data.optionHeader+'" style="width:700px"/>');				
				//$('#u_admin_coupon_option_detail').html('<input type="text" id="admin_coupon_option_detail" class="input" value="'+data.optionDetail+'" style="width:400px"/>');
				$('#u_admin_coupon_option_detail').text(data.optionDetail);
				$('#admin_coupon_dc_option').text(data.dcOption);
				$('#admin_coupon_dc').text(data.dc);
				$('#admin_coupon_count').text(data.couponCount);
			});
			$('#btn_admin_coupon_update').click(function(e){
				e.preventDefault();
				var join_info = {
						'optionHeader' : $('#admin_coupon_option_header').val(),
						'optionDetail' : $('#u_admin_coupon_option_detail').val(),
						'couponMasterSeq' : $('#admin_coupon_seq').html()
					};
			    $.ajax({
					url : app.context()+'/admin/coupon_update',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_coupon_form(1);
						}else{
							alert('쿠폰 업데이트시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
					}
					
				});
			});
		},
		admin_coupon_regist_form : function(){
			$('#pub_article').empty().html(ADMIN_COUPON_REGIST);	
			admin.init();
			$('#btn_coupon_submit').click(function(e){
				e.preventDefault();
				if($('#admin_reg_coupon_name').val()===""){
					alert('쿠폰명은 필수 입력 입니다.');
					$('#admin_reg_coupon_name').focus();
					return;									
				}
				if($('#admin_reg_coupon_open_start').val()===""){
					alert('오픈시작은 필수 입력 입니다.');
					$('#admin_reg_coupon_open_start').focus();
					return;
				}
				if($('#admin_reg_coupon_open_end').val()===""){
					alert('오픈종료는 필수 입력 입니다.');
					$('#admin_reg_coupon_open_end').focus();
					return;
				}
				if($('#admin_reg_coupon_ep_date').val()===""){
					alert('유효기간은 필수 입력 입니다.');
					$('#admin_reg_coupon_ep_date').focus();
					return;
				}
				if($('#admin_reg_option_header').val()===""){
					alert('조건은 필수 입력 입니다.');
					$('#admin_reg_option_header').val('').focus();
					return;
				}
				if($('#admin_reg_option_detail').val()===""){
					alert('조건상세는 필수 입력 입니다.');
					$('#admin_reg_option_detail').val('').focus();
					return;
				}
				if($('#admin_reg_dc_option').val()===""){
					alert('할인조건은 필수 입력 입니다.');
					$('#admin_reg_dc_option').focus();
					return;
				}
				if($('#admin_reg_dc').val()===""){
					alert('할인은 필수 입력 입니다.');
					$('#admin_reg_dc').focus();
					return;
				}
				if($('#admin_reg_coupon_count').val()===""){
					alert('쿠폰건수는 필수 입력 입니다.');
					$('#admin_reg_coupon_count').focus();
					return;
				}
				var fileValue = $("#admin_reg_coupon_img_name").val().split("\\");
				var fileName = fileValue[fileValue.length-1]; // 파일명

				var join_info = {
						'imgName' : fileName,
						'couponName' : $('#admin_reg_coupon_name').val(),
						'openDateStart' : $('#admin_reg_coupon_open_start').val(),						
						'openDateEnd' : $('#admin_reg_coupon_open_end').val(),
						'epDate' : $('#admin_reg_coupon_ep_date').val(),
						'optionHeader' : $('#admin_reg_option_header').val(),
						'optionDetail' : $('#admin_reg_option_detail').val(),
						'dcOption' : $('#admin_reg_dc_option').val(),
						'dc' : $('#admin_reg_dc').val(),
						'couponCount' : $('#admin_reg_coupon_count').val()
					};
			    $.ajax({
					url : app.context()+'/admin/coupon_regist',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_coupon_form(1);
						}else{
							alert('쿠폰등록시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+m);
					}
					
				});
			});	
		},
		couponreadURL : function(input) {
		    if (input.files) {
		        var reader = new FileReader();
		        reader.onload = function (e) {
		            $('#admin_reg_coupon_img').attr('src', e.target.result);
		        }
		        reader.readAsDataURL(input.files[0]);
		    }
		}
	};
})();