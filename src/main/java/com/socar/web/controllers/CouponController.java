package com.socar.web.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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

import com.socar.web.constants.Values;
import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;
import com.socar.web.services.CouponServiceImpl;
import com.socar.web.util.Pagination;

@Controller
@Lazy
@RequestMapping("/coupon")
public class CouponController {
   private static final Logger logger = LoggerFactory.getLogger(CouponController.class);
   @Autowired Retval retval;
   @Autowired Command command;
   @Autowired CouponDTO coupon;
   @Autowired CouponServiceImpl service;
   
   @RequestMapping("/coupon")
   public @ResponseBody Retval goCoupon(){
      logger.info("GO TO {}", "coupon" );
      return retval;
   }
   
   @RequestMapping("/couponDetail")
   public @ResponseBody CouponDTO getCouponDetail(){
      logger.info("GO TO {}","getCouponDetail");
      return coupon;
   } 
   
	@RequestMapping(value="/getCoupon", method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Retval update(@RequestBody CouponDTO param) {
		logger.info("GO TO {}", "getCoupon");
		retval.setMessage(service.getCoupon(param));
		return retval;
	}
   
   @RequestMapping("/count")
   public @ResponseBody Retval goCount(){
      logger.info("CouponController GO TO {}", "goCount");
      retval = service.count();
      return retval;
   }
   
   @RequestMapping("/list")
   public @ResponseBody HashMap<String, Object> goList() {
      logger.info("CouponController GO TO {}", "list");
      HashMap<String, Object> map = new HashMap<String, Object>();
      map.put("list", service.list());
      return map;
   }
   
   @RequestMapping("/find/{keyField}/{keyword}/{pgNum}")
    public @ResponseBody HashMap<String, Object> find(
          @PathVariable("pgNum") String pgNum,
          @PathVariable("keyField") String keyField,
          @PathVariable("keyword") String keyword
          ){
        logger.info("TO SEARCH KEYWORD IS {}",keyword);
        logger.info("TO SEARCH KEYWORD IS {}",keyField);
         logger.info("CustomerController {}", "find");
         command.setKeyField(keyField);
         command.setKeyword(keyword);
         HashMap<String, Object> map = new HashMap<String, Object>();
         List<CouponDTO> list = new ArrayList<CouponDTO>();
         Retval r = service.findCount(command);
         int totCount = r.getCount();   
         int[] pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
         int[] rows = Pagination.getRows(totCount,  Integer.parseInt(pgNum), Values.PG_SIZE);
         command.setStart(rows[0]);
         command.setEnd(rows[1]);
         list = service.find(command);
         map.put("list", service.find(command));
         map.put("dc", list.get(0).getDc());
         map.put("dcOption", list.get(0).getDcOption());
         map.put("pgSize", Values.PG_SIZE);
         map.put("totCount", totCount);
         map.put("totPg", pages[2]);
         map.put("pgNum", Integer.parseInt(pgNum));
         map.put("startPg", pages[0]);
         map.put("lastPg", pages[1]);
         map.put("groupSize", Values.GROUP_SIZE);
         return map;
   }
}