package com.socar.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.socar.web.domains.Command;
import com.socar.web.domains.CouponMemberMasterDTO;
import com.socar.web.domains.MyCouponDTO;
import com.socar.web.domains.Retval;

@Component
@Lazy
public interface MyCouponService {
	// SELECT
	public Retval count();
	public Retval findCount(Command command);
	public List<CouponMemberMasterDTO> list(Command command);
	public List<MyCouponDTO> find(Command command);
	public List<CouponMemberMasterDTO> notUsedList(Command command);
	public Retval useFlag(Command command);
	public int myCouponCheck(MyCouponDTO myCoup);
	public Retval regist(MyCouponDTO myCoup);
}
