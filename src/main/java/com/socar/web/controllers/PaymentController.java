package com.socar.web.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

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
import org.springframework.web.bind.annotation.SessionAttributes;

import com.socar.web.constants.Values;
import com.socar.web.domains.Command;
import com.socar.web.domains.PaymentDTO;
import com.socar.web.domains.Retval;
import com.socar.web.services.PaymentServiceImpl;
import com.socar.web.util.Pagination;

@Controller
@Lazy
@SessionAttributes({ "customer", "context", "js", "css", "img" })
@RequestMapping("/payment")
public class PaymentController {
	private static final Logger logger = LoggerFactory.getLogger(PaymentController.class);
	@Autowired Retval retval;
	@Autowired PaymentDTO payment;
	@Autowired Command command;
	@Autowired PaymentServiceImpl service;

	@RequestMapping("/list/{pgNum}")
	public @ResponseBody HashMap<String, Object> list(@PathVariable String pgNum) {
		logger.info("PaymentController {}", "list");
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String, Object> map = new HashMap<String, Object>();
		Retval r = service.count(retval);
		int totCount = r.getCount();
		logger.info("LIST totCount {}", totCount);
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", service.list(command));
		map.put("pgSize", Values.PG_SIZE);
		map.put("totCount", totCount);
		map.put("totPg", pages[2]);
		map.put("pgNum", Integer.parseInt(pgNum));
		map.put("startPg", pages[0]);
		map.put("lastPg", pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}

	@RequestMapping("/count")
	public @ResponseBody Retval count() {
		logger.info("PaymentController {}", "count");
		retval = service.count(retval);
		return retval;
	}

	@RequestMapping("/find/{keyField}/{keyword}/{pgNum}")
	public @ResponseBody HashMap<String, Object> find(@PathVariable("pgNum") String pgNum,
			@PathVariable("keyField") String keyField, @PathVariable("keyword") String keyword) {
		logger.info("TO SEARCH KEYWORD IS {}", keyword);
		logger.info("TO SEARCH KEYWORD IS {}", keyField);
		logger.info("CustomerController {}", "find");
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		HashMap<String, Object> map = new HashMap<String, Object>();
		Retval r = service.find_count(command);
		int totCount = r.getCount();
		int[] pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		int[] rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", service.find(command));
		map.put("pgSize", Values.PG_SIZE);
		map.put("totCount", totCount);
		map.put("totPg", pages[2]);
		map.put("pgNum", Integer.parseInt(pgNum));
		map.put("startPg", pages[0]);
		map.put("lastPg", pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}
	
	@RequestMapping(value="/pay", method=RequestMethod.POST)
	public @ResponseBody Retval goPay(@RequestBody PaymentDTO param){
		logger.info("PaymentController {}", "goPay");
		Date date = new Date();	
		SimpleDateFormat s = new SimpleDateFormat("yyyy-MM-dd");
		payment.setPaymentDate(s.format(date));
		payment.setPaymentAmt(param.getPaymentAmt());
		payment.setRentSeq(param.getRentSeq());
		payment.setCardNum(param.getCardNum());
		payment.setId(param.getId());
		service.payment(payment);
		return retval;
	}
}
