package com.socar.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.socar.web.domains.BookingDTO;
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;

@Component @Lazy
public interface CarService {
	// CREATE, UPDATE, DELETE
	public Retval regist(CarDTO param);
	public Retval update(CarDTO param);
	public Retval delete(CarDTO param);
	
	// SELECT
	public Retval count();
	public Retval find_count(Command command);
	public List<CarDTO> find(Command command);
	public List<CarDTO> list();
	public CarDTO findOne(Command command);
	public List<CarDTO> searchList(BookingDTO param);
	public CarDTO car_find_by_num(Command command);
	public int existId(String carNum);
	public List<CarDTO> adminList(Command command);
}
