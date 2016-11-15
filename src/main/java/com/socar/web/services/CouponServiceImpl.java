package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.socar.web.controllers.AdminController;
import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CouponMapper;

@Service
@Lazy
public class CouponServiceImpl implements CouponService{
   private static final Logger logger = LoggerFactory.getLogger(CouponServiceImpl.class);
   @Autowired SqlSession sqlSession;
   @Autowired Command command;
   @Autowired Retval retval;
   
	@Override
	public Retval regist(CouponDTO param) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		int result = mapper.regist(param);
		if(result==0){
			retval.setMessage("fail");
		}else{
			retval.setMessage("success");
		}
		return retval;
	}
	@Override
	public Retval update(CouponDTO param) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		logger.info("COUPONSERVICE IMPL UPDATE COUPONseq = {}",param.getCouponMasterSeq());
		int result = mapper.update(param);
		logger.info("COUPONSERVICE IMPL UPDATE COUNT = {}",result);
		if(result==0){
			retval.setMessage("fail");
		}else{
			retval.setMessage("success");
		}
		return retval;
	}
	@Override
	public Retval delete(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
   
   @Override
   public Retval count() {
      CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
      return mapper.count();
   }

   @Override
   public List<CouponDTO> find(Command command) {
      CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
      return mapper.find(command);
   }

   @Override
   public List<CouponDTO> list() {
      CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
      return mapper.list();
   }

   @Override
   public Retval findCount(Command command) {
      CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
      return mapper.findCount(command);
   }
   
   @Override
   public String getCoupon(CouponDTO coupon) {
	   return (sqlSession.getMapper(CouponMapper.class).getCoupon(coupon) == 1) ? "success" : "fail";
   }

	@Override
	public List<CouponDTO> adminList(Command command) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		return mapper.adminList(command);
	}
	
	@Override
	public CouponDTO coupon_find_by_seq(Command command) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		return mapper.coupon_find_by_seq(command);
	}
}