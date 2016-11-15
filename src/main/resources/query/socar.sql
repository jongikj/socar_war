SET foreign_key_checks = 0;
drop table if exists member;
drop table if exists card;
drop table if exists coupon_master;
drop table if exists coupon_member;
drop table if exists customer;
drop table if exists car;
drop table if exists rent;
drop table if exists payment;
drop view if exists car_v;
drop table if exists cent;
drop view if exists member_customer;
drop view if exists notice;
show variables like 'c%';

CREATE TABLE member(
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  pw VARCHAR(20) NOT NULL,
  phone VARCHAR(13) NOT NULL,
  address VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL,
  license_type VARCHAR(30),
  license_num VARCHAR(20),
  license_end DATE,
  license_start DATE,
  birth VARCHAR(8) NOT NULL,
  gender VARCHAR(10) NOT NULL
) default character set utf8 collate utf8_general_ci;

CREATE TABLE card (
  card_num VARCHAR(20) PRIMARY KEY,
  card_pw VARCHAR(20),
  card_month VARCHAR(2) NOT NULL,
  card_year VARCHAR(4) NOT NULL,
  business_num VARCHAR(20),
  id VARCHAR(20),
  CONSTRAINT FOREIGN KEY(id) REFERENCES member(id) ON DELETE CASCADE ON UPDATE CASCADE
) default character set utf8 collate utf8_general_ci;  


CREATE TABLE coupon_master(
  coupon_master_seq BIGINT       UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  coupon_name       VARCHAR(100)  NOT NULL,
  open_date_start   DATE     NOT NULL,
  open_date_end     DATE     NOT NULL,
  ep_date       DATETIME     NOT NULL,  
  option_header     VARCHAR(255) NOT NULL,
  option_detail     TEXT         NOT NULL,
  img_name          VARCHAR(20)  NOT NULL,
  dc_option         VARCHAR(255) NOT NULL,
  dc                INT          NOT NULL,
  coupon_count      INT          NOT NULL
) default character set utf8 collate utf8_general_ci;


CREATE TABLE coupon_member(
  coupon_member_seq BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  coupon_master_seq BIGINT UNSIGNED NOT NULL ,
  use_flag          VARCHAR(1)  NOT NULL DEFAULT 'N',
  id                VARCHAR(20) NOT NULL,
  FOREIGN KEY(coupon_master_seq) REFERENCES coupon_master(coupon_master_seq) ON DELETE CASCADE,
  FOREIGN KEY(id) REFERENCES member(id) ON DELETE CASCADE
) default character set utf8 collate utf8_general_ci;


CREATE TABLE customer(
  customer_seq BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category     VARCHAR(40)     NOT NULL,
  title        VARCHAR(255)    NOT NULL,
  content      TEXT            NOT NULL,
  answer       TEXT,
  file_name    VARCHAR(20),            
  role         VARCHAR(20)     NOT NULL,
  reg_date     VARCHAR(20)     NOT NULL,
  id           VARCHAR(20),             
  FOREIGN KEY(id) REFERENCES member(id) ON DELETE CASCADE
) default character set utf8 collate utf8_general_ci;


CREATE TABLE car(
  car_seq     BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  car_num     VARCHAR(20) NOT NULL,
  car_type    VARCHAR(40) NOT NULL,
  oil_type    VARCHAR(20) NOT NULL,
  car_option  VARCHAR(255),
  socar_zone  VARCHAR(255) NOT NULL,
  rent_amt    INT          NOT NULL,
  drive_amt   INT          NOT NULL,
  car_img varchar(20)
) default character set utf8 collate utf8_general_ci;


CREATE TABLE rent(
  rent_seq   BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  start_date DATETIME NOT NULL,
  end_date   DATETIME NOT NULL,
  price      INT,
  status	VARCHAR(2) NOT NULL,
  car_seq    BIGINT UNSIGNED NOT NULL,
  coupon_member_seq BIGINT UNSIGNED,
  id         VARCHAR(20) NOT NULL,
  FOREIGN KEY (id) REFERENCES member (id) ON DELETE CASCADE,
  FOREIGN KEY(car_seq) REFERENCES car(car_seq) ON DELETE CASCADE,
  FOREIGN KEY(coupon_member_seq) REFERENCES coupon_member(coupon_member_seq) ON DELETE CASCADE
) default character set utf8 collate utf8_general_ci;


CREATE TABLE payment(
  payment_seq  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  payment_date DATETIME NOT NULL,
  payment_amt  INT      NOT NULL,
  rent_seq     BIGINT UNSIGNED NOT NULL,
  card_num     VARCHAR(20) NOT NULL,
  id           VARCHAR(20) NOT NULL,
  FOREIGN KEY(id) REFERENCES member(id) ON DELETE CASCADE,    
  FOREIGN KEY(rent_seq) REFERENCES rent(rent_seq) ON DELETE CASCADE,
  FOREIGN KEY(card_num) REFERENCES card(card_num) ON DELETE CASCADE
) default character set utf8 collate utf8_general_ci;

/* PROCEDURE */
CREATE OR REPLACE VIEW member_customer AS
SELECT 1 + (SELECT COUNT(*)
            FROM   customer t
            WHERE  t.customer_seq < c.customer_seq
            AND    t.id IS NOT NULL
            AND    t.role = 'CUSTOMER'
           ) as num
      ,c.title
      ,c.content
      ,c.reg_date
      ,c.customer_seq
      ,c.id
FROM   customer c
WHERE  c.id IS NOT NULL
AND    c.role = 'CUSTOMER';

drop procedure if exists insert_member;
CREATE PROCEDURE insert_member(
 IN sp_id varchar(20),
 IN sp_name varchar(20),
 IN sp_pw varchar(20),
 IN sp_phone varchar(13),
 IN sp_address varchar(255),
 IN sp_license_type varchar(30),
 IN sp_license_num varchar(20),
 IN sp_license_end date,
 IN sp_license_start date,
 IN sp_birth varchar(8),
 IN sp_gender varchar(10),
 IN sp_email varchar(50)
  )
BEGIN
   INSERT INTO member(id,name,pw,phone,address,license_type,license_num,license_end,license_start,birth,gender,email)
   VALUES(sp_id,sp_name,sp_pw,sp_phone,sp_address,sp_license_type,sp_license_num,sp_license_end,sp_license_start,sp_birth,sp_gender,sp_email);
END ;

drop procedure if exists update_member;
CREATE PROCEDURE update_member
    (
        IN  sp_pw          varchar(20), 
        IN  sp_phone varchar(13),
        IN  sp_address  varchar(255),
        IN  sp_id                  varchar(20),
        IN sp_email varchar(50)
    )
BEGIN
    UPDATE member
    SET   
          pw  = sp_pw,
          phone = sp_phone,
          address  = sp_address,
          email = s-Pemail
    WHERE  id = sp_id ;
END;

drop procedure if exists insert_card;
CREATE PROCEDURE insert_card(
  IN sp_card_num varchar(20),
  IN sp_card_pw varchar(20),
  IN sp_card_month varchar(2),
  IN sp_card_year varchar(4),
  IN sp_business_num varchar(20),
  IN sp_id varchar(20)
  )
BEGIN
   INSERT INTO card(
  card_num,
  card_pw,
  card_month,
  card_year,
  business_num,
  id
 )
   VALUES(
  sp_card_num,
  sp_card_pw,
  sp_card_month,
  sp_card_year,
  sp_business_num,
  sp_id
  );
END ;
/*
======== META_GROUP =========
@AUTHOR : ckan2010@gmail.com
@CREATE DATE : 2016-10-15
@UPDATE DATE : 2016-10-15
@DESC : 메타데이터
*/
SELECT *
FROM   information_schema.`TABLES`
WHERE  table_type = 'VIEW'
AND    table_schema = 'MYSQL'
;
SELECT *
FROM   INFORMATION_SCHEMA.ROUTINES
WHERE  routine_type IN ('FUNCTION','PROCEDURE')
;
/*
================ NOTICE_GROUP ==============
@AUTHOR : ckan2010@gmail.com
@CREATE : 2016-10-06
@UPDATE : 2016-10-06
@DESC   : 공지사항
=====================================
*/

CREATE OR REPLACE VIEW notice AS
SELECT 1 + (SELECT COUNT(*) 
            FROM   customer t 
            WHERE  t.customer_seq < c.customer_seq
            AND    t.id IS NULL
            AND    t.role = 'NOTICE'
            ORDER BY t.reg_date
           ) as num
      ,c.title
      ,c.content
      ,c.reg_date      regDate
      ,c.customer_seq  customerSeq
FROM   customer c
WHERE  c.id IS NULL
AND    c.role = 'NOTICE'
ORDER BY c.reg_date desc;

DROP PROCEDURE IF EXISTS insert_notice;

-- INSERT_NOTICE
CREATE  PROCEDURE insert_notice (IN sp_title      VARCHAR(255),
                                IN sp_content    TEXT,
                                IN sp_reg_date   VARCHAR(20)   
                               )
BEGIN
  insert into customer(category,title,content,role,reg_date)
  values('공지사항',sp_title,sp_content,'NOTICE',sp_reg_date);
  commit;
END;
DROP PROCEDURE IF EXISTS update_notice;
-- UPDATE_NOTICE
CREATE PROCEDURE update_notice (IN sp_title        VARCHAR(255),
                                IN sp_content      TEXT,
                                IN sp_customer_seq BIGINT
                               )
BEGIN
  update customer
  SET    title   = ifnull(sp_title,title),
         content = ifnull(sp_content,content)
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
DROP PROCEDURE IF EXISTS delete_notice;
-- DELETE_NOTICE
CREATE PROCEDURE delete_notice (IN sp_customer_seq BIGINT
                               )
BEGIN
  delete
  from   customer
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
/*
================ CUSTOMER_GROUP ==============
@AUTHOR : ckan2010@gmail.com
@CREATE : 2016-10-06
@UPDATE : 2016-10-06
@DESC   : 고객센터
=====================================
*/

CREATE OR REPLACE VIEW member_customer AS
SELECT 1 + (SELECT COUNT(*) 
            FROM   customer t 
            WHERE  t.customer_seq < c.customer_seq
            AND    t.id IS NOT NULL
            AND    t.role = 'CUSTOMER'
           ) as num
      ,c.category
      ,c.title
      ,c.content
      ,c.answer
      ,c.file_name     fileName
      ,c.reg_date      regDate
      ,c.customer_seq  customerSeq
      ,c.id
FROM   customer c
WHERE  c.id IS NOT NULL
AND    c.role = 'CUSTOMER';

DROP PROCEDURE IF EXISTS insert_customer;
-- INSERT_CUSTOMER
CREATE PROCEDURE insert_customer (IN sp_category VARCHAR(40),
                                  IN sp_title      VARCHAR(255),
                                  IN sp_content    TEXT,
                                  IN sp_file_name  VARCHAR(20),
                                  IN sp_reg_date   VARCHAR(20),
                                  IN sp_id         VARCHAR(20)
                                 )
BEGIN
  insert into customer(category,title,content,file_name,role,reg_date,id)
  values(sp_category,sp_title,sp_content,sp_file_name,'CUSTOMER',sp_reg_date,sp_id);
  commit;
END;
DROP PROCEDURE IF EXISTS update_customer;
-- UPDATE_CUSTOMER
CREATE PROCEDURE update_customer (IN sp_answer       TEXT,
                                  IN sp_customer_seq BIGINT
                                 )
BEGIN
  update customer
  SET    answer = ifnull(sp_answer,answer)
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
DROP PROCEDURE IF EXISTS delete_customer;
-- DELETE_CUSTOMER
CREATE PROCEDURE delete_customer (IN sp_customer_seq BIGINT
                                 )
BEGIN
  delete
  from   customer
  WHERE  customer_seq = sp_customer_seq
  ;
  commit;
END;
/*
================ CAR_GROUP ==============
@AUTHOR : ckan2010@gmail.com
@CREATE : 2016-10-06
@UPDATE : 2016-10-06
@DESC   : 차량
=====================================
*/
CREATE OR REPLACE VIEW car_v AS
SELECT 1 + (SELECT COUNT(*)
            FROM   car t 
            WHERE  t.car_seq < c.car_seq
           ) as seq
      ,c.car_num     carNum
      ,c.car_type    carType
      ,c.oil_type    oilType
      ,c.car_option  carOption
      ,c.socar_zone  socarZone
      ,c.rent_amt    rentAmt
      ,c.drive_amt   driveAmt
      ,c.car_img     carImg
FROM  car c;
DROP PROCEDURE IF EXISTS insert_car;
-- INSERT_CAR
CREATE PROCEDURE insert_car (IN sp_car_num    VARCHAR(20),
                             IN sp_car_type   VARCHAR(40),
                             IN sp_oil_type   VARCHAR(20),
                             IN sp_car_option VARCHAR(255),
                             IN sp_socar_zone VARCHAR(255),
                             IN sp_rent_amt   INT,
                             IN sp_drive_amt  INT,
                             IN sp_car_img    VARCHAR(20)
                            )
BEGIN
  insert into car(car_num,car_type,oil_type,car_option,socar_zone,rent_amt,drive_amt,car_img)
  values(sp_car_num,sp_car_type,sp_oil_type,sp_car_option,sp_socar_zone,sp_rent_amt,sp_drive_amt,ifnull(sp_car_img,'default.png'));
  commit;
END;

DROP PROCEDURE IF EXISTS update_car;
-- UPDATE_CUSTOMER

CREATE PROCEDURE update_car (IN sp_car_option   VARCHAR(255),
                             IN sp_socar_zone   VARCHAR(255),
                             IN sp_rent_amt     INT,
                             IN sp_drive_amt    INT,
                             IN sp_car_num      VARCHAR(20),
                             IN sp_car_img      VARCHAR(20)
                            )
BEGIN
  update car
  SET    car_option     = ifnull(sp_car_option,car_option),
         socar_zone     = ifnull(sp_socar_zone,socar_zone),
         rent_amt       = IFNULL(sp_rent_amt, rent_amt),
         drive_amt      = IFNULL(sp_drive_amt, drive_amt),
         car_img        = IFNULL(sp_car_img, car_img)
  WHERE  car_num        = sp_car_num
  ;
  commit;
END;

/* coupon */
DROP PROCEDURE IF EXISTS insert_coupon_master;
CREATE PROCEDURE insert_coupon_master (IN sp_coupon_name       VARCHAR(255),
                                       IN sp_open_date_start   DATETIME,
                                       IN sp_open_date_end     DATETIME,
                                       IN sp_ep_date           DATETIME,
                                       IN sp_option_header     VARCHAR(255),
                                       IN sp_option_detail     TEXT,
                                       IN sp_img_name          VARCHAR(20),
                                       IN sp_dc_option         VARCHAR(255),
                                       IN sp_dc                INT,
                                       IN sp_coupon_count      INT
                                      )
BEGIN
  insert into coupon_master(coupon_name,open_date_start,open_date_end,ep_date,option_header,option_detail,img_name,dc_option,dc,coupon_count)
  values(sp_coupon_name,sp_open_date_start,sp_open_date_end,sp_ep_date,sp_option_header,sp_option_detail,ifnull(sp_img_name,'default.png'),sp_dc_option,sp_dc,sp_coupon_count);
  commit;
END;

DROP PROCEDURE IF EXISTS update_coupon_master;
-- UPDATE_COUPON_MASTER
CREATE PROCEDURE update_coupon_master (IN sp_coupon_master_seq INT,
                                       IN sp_option_header     VARCHAR(255),
                                       IN sp_option_detail     TEXT
                                      )
BEGIN
  update coupon_master
  SET    option_header  = ifnull(sp_option_header,option_header),
         option_detail  = ifnull(sp_option_detail,option_detail)
  WHERE  coupon_master_seq = sp_coupon_master_seq
  ;
  commit;  
END;
DROP PROCEDURE IF EXISTS sp_select_carlist;
CREATE PROCEDURE sp_select_carlist(
  IN in_start_date VARCHAR(20),
  IN in_end_date VARCHAR(20),
  IN in_input_location VARCHAR(50)
)
BEGIN
  SET @START_DATE = in_start_date;
  SET @END_DATE = in_end_date;
  SET @INPUT_LOCATION = in_input_location;
  SET @SQL = 'SELECT car_seq carSeq,car_num carNum, car_type carType, oil_type oilType,car_option carOption,socar_zone socarZone,rent_amt rentAmt,drive_amt driveAmt,car_img carImg FROM car WHERE';
  SET @SQL = CONCAT(@SQL,' car_seq NOT IN (SELECT DISTINCT car_seq FROM rent WHERE DATE_FORMAT(@START_DATE,"%y-%m-%d") BETWEEN DATE_FORMAT(start_date,"%y-%m-%d") AND DATE_FORMAT(end_date,"%y-%m-%d")');
  SET @SQL = CONCAT(@SQL,' OR DATE_FORMAT(@END_DATE,"%y-%m-%d") BETWEEN DATE_FORMAT (start_date,"%y-%m-%d") AND DATE_FORMAT(end_date,"%y-%m-%d")');
  SET @SQL = CONCAT(@SQL,' OR (DATE_FORMAT(@START_DATE,"%y-%m-%d") <= DATE_FORMAT (start_date,"%y-%m-%d") AND DATE_FORMAT(@END_DATE,"%y-%m-%d") >= DATE_FORMAT (end_date,"%y-%m-%d")))');
  IF @INPUT_LOCATION != 'none' THEN
  SET @SQL = CONCAT(@SQL,' AND socar_zone=@INPUT_LOCATION');
  END IF;
  PREPARE stmt FROM @SQL;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END;
