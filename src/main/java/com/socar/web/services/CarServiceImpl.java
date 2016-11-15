package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.socar.web.controllers.AdminController;
import com.socar.web.domains.BookingDTO;
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CarMapper;

@Service@Lazy
public class CarServiceImpl implements CarService{
	private static final Logger logger = LoggerFactory.getLogger(CarServiceImpl.class);
	@Autowired SqlSession sqlsession;
	@Autowired Retval retval;
	
	@Override
	public Retval count() {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.count();
	}

	@Override
	public Retval find_count(Command command) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.find_count(command);
	}
	
	@Override
	public List<CarDTO> find(Command command) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.find(command);
	}

	@Override
	public List<CarDTO> list() {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.list();
	}
	
	@Override
	public List<CarDTO> adminList(Command command) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.adminList(command);
	}

	@Override
	public CarDTO findOne(Command command) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.findOne(command);
	}
	@Override
	   public List<CarDTO> searchList(BookingDTO param) {
	      CarMapper mapper = sqlsession.getMapper(CarMapper.class);
	      return mapper.searchList(param);
	   }
	
	@Override
	public Retval regist(CarDTO param) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		int result = mapper.regist(param);
		if(result==0){
			retval.setMessage("fail");
		}else{
			retval.setMessage("success");
		}
		return retval;
	}
	
	@Override
	public Retval update(CarDTO param) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		int result = mapper.update(param);
		if(result==0){
			retval.setMessage("fail");
		}else{
			retval.setMessage("success");
		}
		return retval;
	}
	
	@Override
	public Retval delete(CarDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public CarDTO car_find_by_num(Command command) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		return mapper.car_find_by_num(command);
	}
	
	@Override
	public int existId(String carNum) {
		CarMapper mapper = sqlsession.getMapper(CarMapper.class);
		logger.info("CarService existId = {}",carNum);
		return mapper.existId(carNum);
	}
}
