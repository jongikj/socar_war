package com.socar.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;

@Repository
@Lazy
public interface CouponMapper {
	// CREATE, UPDATE, DELETE
	public int regist(CouponDTO param);
	public int update(CouponDTO param);
	public Retval delete(CouponDTO param);
    // SELECT
	  public Retval count();
	  public Retval findCount(Command command);
	  public List<CouponDTO> find(Command command);
	  public List<CouponDTO> list();
	  public int getCoupon(CouponDTO coup);
	  public List<CouponDTO> adminList(Command command);
	public CouponDTO coupon_find_by_seq(Command command);
}