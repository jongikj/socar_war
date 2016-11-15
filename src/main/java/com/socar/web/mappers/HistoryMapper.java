package com.socar.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.socar.web.domains.Command;
import com.socar.web.domains.HistoryDTO;
import com.socar.web.domains.Retval;

@Repository
public interface HistoryMapper {
	public Retval count();
	public Retval findCount(Command command);
	public List<HistoryDTO> list(Command command);
	public List<HistoryDTO> find(Command command);
	public int insert(HistoryDTO history);
	public int notCouponInsert(HistoryDTO history);
	public Retval useStatus(Command command);
	public Retval rentCancel(Command command);
	public Retval couponRestore(Command command);
}
