# --- !Ups
-- populationg cathegory
insert into category(id, name)
values
(1, 'black and white'),
(2, 'color');

insert into product(name, image, extra, price, category_id )
VALUES
('black and white 1', '/image/1', 'taken in polish mountains, analog', 20, 1),
('black and white 2', '/image/2', 'taken in polish mountains, analog', 25, 1),
('black and white 3', '/image/3', 'taken in polish mountains, analog', 30, 1),
('black and white 4', '/image/4', 'taken in polish mountains, analog', 25, 1),
('black and white 5', '/image/5', 'taken in polish mountains, analog', 15, 1);


# --- !Downs
DELETE FROM product where true;
DELETE FROM category where true;
