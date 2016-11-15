package com.socar.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.socar.web.domains.BookingDTO;
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;

@Repository
@Lazy
public interface CarMapper {
	// SELECT
	public Retval count();
	public Retval find_count(Command command);
	public List<CarDTO> find(Command command);
	public List<CarDTO> list();
	public List<String> listZone();
	public CarDTO findOne(Command command);
	public List<CarDTO> searchList(BookingDTO param);
	public CarDTO car_find_by_num(Command command);
	public int update(CarDTO param);
	public int existId(String carNum);
	public int regist(CarDTO param);
	public List<CarDTO> adminList(Command command);
}
