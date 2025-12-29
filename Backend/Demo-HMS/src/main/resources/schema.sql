create table if not exists tenants
(
id int primary key auto_increment,
name  varchar(20) not null,
email VARCHAR(100) UNIQUE NOT NULL,
phone_number  VARCHAR(15) ,
room_type varchar(20),
room_no int not null ,
floor int not null
);