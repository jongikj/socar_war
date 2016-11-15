package com.socar.web.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.socar.web.domains.CardDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;
import com.socar.web.services.CardServiceImpl;

@Controller
@Lazy
@RequestMapping("/card")
public class CardController {
	private static final Logger logger = LoggerFactory.getLogger(CardController.class);
	@Autowired Retval retval;
	@Autowired Command command;
	@Autowired CardServiceImpl service;
	@Autowired CardDTO card;
	
	@RequestMapping(value="/cardRegist",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Retval goCardRegist(@RequestBody CardDTO param){
		logger.info("CardController GO TO {}", "cardRegist");
		logger.info("CardRef ID = {}",param.getId());
		logger.info("CardRef ID = {}",param.getCardNum());
		logger.info("CardRef ID = {}",param.getCardPw());
		logger.info("CardRef ID = {}",param.getCardMonth());
		logger.info("CardRef ID = {}",param.getCardYear());
		logger.info("CardRef ID = {}",param.getBusinessNum());
		retval.setMessage(service.regist(param));
		return retval;
	}
	
	
	@RequestMapping("/count")
	public @ResponseBody Retval goCount(){
		logger.info("CardController GO TO {}", "goCount");
		retval = service.count();
		return retval;
	}
	
	@RequestMapping("/find_count/{keyField}/{keyword}")
	public @ResponseBody HashMap<String, Object> findCount(@PathVariable String keyField, @PathVariable String keyword){
		logger.info("CardController GO TO {}", "findCount");
		HashMap<String, Object> map = new HashMap<String, Object>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		retval = service.findCount(command);
		map.put("count", retval.getCount());
		return map;
	}
	
	@RequestMapping("/list")
	public @ResponseBody List<CardDTO> goList(){
		logger.info("CardController GO TO {}", "goList");
		List<CardDTO> list = new ArrayList<CardDTO>();
		list = service.list();
		return list;
	}
	
	@RequestMapping("/find/{keyField}/{keyword}")
	public @ResponseBody HashMap<String, Object> goFind(@PathVariable String keyField, @PathVariable String keyword){
		logger.info("CardController GO TO {}", "goFind");
		HashMap<String, Object> map = new HashMap<String, Object>();
		List<CardDTO> list = new ArrayList<CardDTO>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		list = service.find(command);
		map.put("list", list);
		if(list.size() == 0){
			CardDTO temp = new CardDTO();
			list.add(temp);
		}
		map.put("cardNum", list.get(0).getCardNum());
		return map;
	}
	
	@RequestMapping(value="/cardUpdate",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Retval goCardUpdate(@RequestBody CardDTO param, HttpSession session){
		logger.info("GO TO {}","=======update========");
	/*	card.setBusinessNum(param.getBusinessNum());
		card.setCardMonth(param.getCardMonth());
		card.setCardNum(param.getCardNum());
		card.setCardPw(param.getCardPw());
		card.setCardYear(param.getCardYear());
		*/
		
		logger.info("update  session.Get {}",session.getAttribute("card"));
		/*CardDTO temp = (CardDTO) session.getAttribute("card");
		temp.setCardNum(param.getCardNum());
		temp.setCardMonth(param.getCardMonth());
		temp.setCardYear(param.getCardYear());
		if (param.getCardPw() == "") {
			temp.setCardPw("");
			temp.setBusinessNum(param.getBusinessNum());
		} else {
			temp.setBusinessNum("");
			temp.setCardPw(param.getCardPw());
		}*/
		retval.setMessage(service.update(param));
		//session.setAttribute("card", service.update(temp));
		logger.info("update  setMessage {}",service.update(param));
		logger.info("update 아이디 {}",param.getId());
		logger.info("update 카드번호 {}",param.getCardNum());
		return retval;
	}
}
