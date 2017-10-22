# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table category (
  id                            bigint auto_increment not null,
  name                          varchar(255),
  constraint pk_category primary key (id)
);

create table ordertable (
  id                            bigint auto_increment not null,
  date                          timestamp,
  address                       varchar(255),
  user_id                       bigint not null,
  constraint pk_ordertable primary key (id)
);

create table order_unit (
  id                            bigint auto_increment not null,
  quantity                      integer,
  order_id                      bigint not null,
  product_id                    bigint not null,
  constraint pk_order_unit primary key (id)
);

create table product (
  id                            bigint auto_increment not null,
  name                          varchar(255),
  image                         varchar(255),
  extra                         varchar(255),
  price                         float,
  category_id                   bigint,
  constraint pk_product primary key (id)
);

create table user (
  id                            bigint auto_increment not null,
  name                          varchar(255),
  email                         varchar(255),
  constraint pk_user primary key (id)
);

alter table ordertable add constraint fk_ordertable_user_id foreign key (user_id) references user (id) on delete restrict on update restrict;
create index ix_ordertable_user_id on ordertable (user_id);

alter table order_unit add constraint fk_order_unit_order_id foreign key (order_id) references ordertable (id) on delete restrict on update restrict;
create index ix_order_unit_order_id on order_unit (order_id);

alter table order_unit add constraint fk_order_unit_product_id foreign key (product_id) references product (id) on delete restrict on update restrict;
create index ix_order_unit_product_id on order_unit (product_id);

alter table product add constraint fk_product_category_id foreign key (category_id) references category (id) on delete restrict on update restrict;
create index ix_product_category_id on product (category_id);


# --- !Downs

alter table ordertable drop constraint if exists fk_ordertable_user_id;
drop index if exists ix_ordertable_user_id;

alter table order_unit drop constraint if exists fk_order_unit_order_id;
drop index if exists ix_order_unit_order_id;

alter table order_unit drop constraint if exists fk_order_unit_product_id;
drop index if exists ix_order_unit_product_id;

alter table product drop constraint if exists fk_product_category_id;
drop index if exists ix_product_category_id;

drop table if exists category;

drop table if exists ordertable;

drop table if exists order_unit;

drop table if exists product;

drop table if exists user;

