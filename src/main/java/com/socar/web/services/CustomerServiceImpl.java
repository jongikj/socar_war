package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CustomerMapper;

@Service
@Lazy
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired private SqlSession sqlSession;
	@Autowired Command command;
	@Autowired CustomerDTO customer;
	@Autowired Retval retval;
		
	@Override
	public String regist(CustomerDTO param) {
		return null;
	}

	@Override
	public String update(CustomerDTO param) {
		return null;
	}

	@Override
	public void delete(CustomerDTO param) {
		
	}

	@Override
	public Retval count() {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.count(retval);
	}

	@Override
	public List<CustomerDTO> find(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.find(command);
	
	}

	@Override
	public List<CustomerDTO> list(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.list(command);
	}
	
	@Override
	public List<CustomerDTO> customerList(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.customerList(command);
	}

	@Override
	public Retval find_count(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.find_count(command);
	}
	
	@Override
	public Retval customerCount(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.customerCount(command);
	}
	
	@Override
	public CustomerDTO goArticle(Command command){
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.goArticle(command);
	}

	@Override
	public List<CustomerDTO> faqList(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.faqList(command);
	}

	@Override
	public Retval faqCount(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.faqCount(command);
	}

	@Override
	public CustomerDTO inquiry_form(CustomerDTO customer) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.inquiry_form(customer);
	}
	@Override
	public CustomerDTO customer_find_by_seq(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.customer_find_by_seq(command);
	}
}
