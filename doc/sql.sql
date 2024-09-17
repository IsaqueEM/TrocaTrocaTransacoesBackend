create table account (
    account_number varchar(20) primary key,
    balance decimal(10, 2),
    cpf varchar(11)
);

create table transaction (
    transaction_id serial primary key,
    account_number varchar(20),
    amount decimal(10, 2),
    transaction_type varchar(10),
    transaction_date timestamp,
    foreign key (account_number) references account(account_number)
);

create table client (
    client_id serial primary key,
    name varchar(100),
    cpf varchar(11) unique,
    email varchar(100) unique,
    password varchar(100)
);


create table card (
    card_id serial primary key,
    card_name varchar(50),
    card_number varchar(16),
    expiration_date date,
    cvv varchar(3),
    isCredit boolean,
    account_number varchar(20),
    foreign key (account_number) references account(account_number)
);