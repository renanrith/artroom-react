use artroom;

create table if not exists usuarios(
    userID int auto_increment primary key not null,
    nickname varchar(255) not null,
    usuario varchar(255) not null,
    email varchar(45) not null,
    senha varchar(16) not null
);

create table if not exists uploads(
	id int auto_increment primary key not null,
    title varchar(100),
    description varchar (235),
    user varchar(255),
    type varchar(5),
    likes int
);

create table if not exists comments(
	id int auto_increment primary key not null,
    texto varchar (235),
    user varchar(255),
    postID int,
    foreign key (postID) references uploads(id)
);

create table if not exists userLiking(
    id int auto_increment primary key not null,
    user varchar(255),
    postID int,
    foreign key (postID) references uploads(id)
);

select * from uploads;