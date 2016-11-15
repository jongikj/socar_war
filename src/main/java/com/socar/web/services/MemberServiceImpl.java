package com.socar.web.services;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.socar.web.controllers.MemberController;
import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.MemberMapper;

@Service
@Lazy
public class MemberServiceImpl implements MemberService{
   private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
   @Autowired SqlSession sqlSession;
   @Autowired Command command;
   @Autowired MemberDTO member;
   @Autowired MemberMapper mamberMapper; 
   
   @Override
   public int existId(String id) {
      logger.info("existId{}",id );
      MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
      return mapper.existId(id);
   }
   
   @Override
   public String regist(MemberDTO param) {
      System.out.println("MemberserviceImpl 진입");
      System.out.println("id   "+param.getId());
      System.out.println("pw   "+param.getPw());
      System.out.println("name   "+param.getName());
      System.out.println("phone   "+param.getPhone());
      System.out.println("address   "+param.getAddress());
      System.out.println("licensetype   "+param.getLicenseType());
      System.out.println("licenseNum   "+param.getLicenseNum());
      System.out.println("LicenseEnd   "+param.getLicenseEnd());
      System.out.println("LicenseStart   "+param.getLicenseStart());
      System.out.println("birth   "+param.getBirth());
      System.out.println("gender   "+param.getGender());
      member= param;
      
      
      return (sqlSession.getMapper(MemberMapper.class).regist(member)!=0)?"success":"fail";
   }

   @Override
   public MemberDTO signIn(MemberDTO member){
      MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
      List<MemberDTO> list = new ArrayList<MemberDTO>();
      Command command = new Command();
      command.setKeyField("id");
      command.setKeyword(member.getId());
      list = mapper.find(command);
      
      if(list.size() == 0){
         logger.info("서비스 : 로그인 하려는 ID가 없음");
         member.setId("NONE");
         member.setPw("NONE");
         list.add(member);
         return list.get(0);
      }
      String id = list.get(0).getId();
      String pw = list.get(0).getPw();
      
      if(id.equals(member.getId()) && pw.equals(member.getPw())){
         logger.info("MemberService LOGIN IS {}", "SUCCESS");
         return list.get(0);
      } else {
         logger.info("MemberService LOGIN IS {}", "FAIL");
         list.get(0).setId("NONE");
         list.get(0).setPw("NONE");
         return list.get(0);
      }
   }
   
   @Override
   public String update(MemberDTO param) {
      System.out.println("MemberserviceImpl update진입");
      System.out.println("pw   "+param.getPw());
      System.out.println("name   "+param.getName());
      System.out.println("phone   "+param.getPhone());
      System.out.println("address   "+param.getAddress());
      System.out.println("licensetype   "+param.getLicenseType());
      System.out.println("licenseNum   "+param.getLicenseNum());
      System.out.println("LicenseEnd   "+param.getLicenseEnd());
      System.out.println("LicenseStart   "+param.getLicenseStart());
      
      return (sqlSession.getMapper(MemberMapper.class).update(param)!=0)?"success":"fail";
   }


   @Override
   public List<MemberDTO> find(Command command) {
      MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
      return mapper.find(command);
   }

   @Override
   public List<MemberDTO> list() {
      MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
      return mapper.list();
   }

   @Override
   public Retval count() {
      MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
      return mapper.count();
   }

   @Override
   public String delete(String id) {
      System.out.println("서비스임플 DELETE   아이디값"+id);
      return (sqlSession.getMapper(MemberMapper.class).delete(id)!=0)?"success":"fail";
   }


}