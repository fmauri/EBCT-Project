# --- !Ups
-- populationg cathegory
insert into category(id, name)
values
(1, 'black and white'),
(2, 'color');

insert into product(name, image, extra, price, category_id )
VALUES
('black and white 1', 'https://www.dropbox.com/s/axoh0qm1eme5ybc/CNV000007.JPG?dl=1', 'taken in polish mountains, analog', 20, 1),
('black and white 2', 'https://www.dropbox.com/s/9if4pg4umy1zu6i/CNV000019.JPG?dl=1', 'taken in polish mountains, analog', 25, 1),
('color photo', 'https://www.dropbox.com/s/76l6uuxnwxii9do/CNV000024.JPG?dl=1', 'taken in polish country side, analog', 15, 2);

# --- !Downs
DELETE FROM category where true;
DELETE FROM product where true;