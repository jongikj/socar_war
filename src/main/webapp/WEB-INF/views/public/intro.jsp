<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<body style="background-color: #f8f8f8">
<h3 style="padding-top:5%; text-align:center;color:blue">시연 동영상</h1>
<div style="text-align: center;">
<iframe width="650" height="400" src="https://www.youtube.com/embed/OpL-FNPMVlM?&autoplay=1" frameborder="0" allowfullscreen></iframe>
<h3>본 사이트는 포트폴리오를 목적으로 사용하고 있으며, 상업적으로 사용하지 않습니다.</h4>
<h4>관리자 모드는 <span style="color: blue;">ID : admin, 비밀번호 : admin</span> 으로 접속하며</h4>
<h4>사용자 모드는 <span style="color: blue;">ID : hong, 비밀번호 : hong</span> 을 기본적으로 제공합니다.</h4>
<input id="intro_go_main" style="size: 40" type="button" value="이 곳을 클릭하면 메인으로 이동합니다.">
</div>
</body>
<script type="text/javascript">
$('#intro_go_main').click(function() {
	location.href = '/web/home';
});
</script>
