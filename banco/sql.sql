create database artroom;
use artroom;

create table usuarios(
    id int auto_increment primary key not null,
    email varchar(45),
    senha varchar(16)
);

insert into usuarios (email, senha) values ('renan', '123') 

select * from usuarios;