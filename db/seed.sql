INSERT INTO category (category_name)
VALUES 
("Apperal"),
("Equipment"),
("Supplies"),
("Miscellaneous");

INSERT INTO product (product_name, price, stock, category_id)
VALUES 
("Coat", 89.95, 3, 1),
("Pant", 34.99, 7, 1),
("Axe", 75.95, 7, 2),
("Knife", 32.75, 15, 2),
("Propane Canister 2lb", 9.99, 56, 3),
("Bulk Feed", 52.32, 24, 3),
("Safety Whistle", 2.99, 48, 4),
("Tie Straps", 5.99, 69, 4);

INSERT INTO tag (tag_name)
VALUES 
("Clothing"),
("Tool"),
("Propane"),
("Fuel"),
("Outerwear"),
("Food"),
("Loud"),
("Sharp"),
("Fastener");

INSERT INTO product_tag (product_id, tag_id)
VALUES 
 ("Bulk Feed", 52.32, 24, 3),
(1,1),
(1,5),
(2,1),
(3,2),
(3,8),
(4,2),
(4,8),
(5,3),
(5,4),
(6,6),
(7,7),
(8,9);
