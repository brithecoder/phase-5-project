# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing old data..."
User.destroy_all
Event.destroy_all
UserBrand.destroy_all
UserEvent.destroy_all
BrandEvent.destroy_all
Brand.destroy_all



puts "Seeding users..."
u1= User.create(username:"Bri",first_name:"Bri",last_name:"Gordon",email:"bri@gmail.com",birthday:Date.parse('2001-02-03'),password_digest:User.digest('123'))
u2= User.create(username:"Justin",first_name:"Justin",last_name:"Daniel",email:"jus@gmail.com",birthday:Date.parse('1998-12-03'),password_digest:User.digest('123'))
u3= User.create(username:"Jaz",first_name:"Jaz",last_name:"Sol",email:"jaz@gmail.com",birthday:Date.parse('1984-08-10'),password_digest:User.digest('123'))
u4= User.create(username:"Tommy",first_name:"Tommy",last_name:"Hillfigure",email:"tom@gmail.com",birthday:Date.parse('2003-12-11'),password_digest:User.digest('123'))
puts "Seeding events ..."
e1=Event.create(name:"Meet and Greet",date:Date.parse("2021-09-14"),image_url:"https://www.psuunderground.com/wp-content/uploads/2015/12/061014-national-friends-group-man-women-laughing-smiling-happy.png",likes:23,joins:19)
e2=Event.create(name:"Community Service",date:Date.parse("2021-11-10"),image_url:"https://i0.wp.com/defendernetwork.com/wp-content/uploads/2018/02/communityservice.jpg?fit=640%2C371&ssl=1",likes:18,joins:6)
e3=Event.create(name:"Book Club",date:Date.parse("2022-01-03"),image_url:"https://images.squarespace-cdn.com/content/v1/5978f79fdb29d664b60a33c9/1596650899067-V06EEL60F9H5Y6UL865I/book+club.jpg?format=2500w",likes:15,joins:10)
e4=Event.create(name:"After Party",date:Date.parse("2021-12-19"),image_url:"https://media.istockphoto.com/photos/this-is-how-you-enter-a-new-year-picture-id1195008601?k=6&m=1195008601&s=612x612&w=0&h=9Va2p1bQXJKOYdCePQ0OXT6gqgnFIiYgwxufub31SNk=",likes:44,joins:19)

puts "Seeding brands ..."
b1=Brand.create(name:"Simply Wholesome",bio:"Simply Wholesome Restaurant & Store has been serving the Los Angeles community since the early 1980s. Housed in a historical landmark, we are dedicated to providing our community with the proper resources to live a healthy, creative and innovative lifestyle. We believe in promoting and celebrating our cultural diversity, combined with exceptional customer",image_url:"https://www.soulofamerica.com/wp-content/uploads/2015/03/LA-Simply_Wholesome.jpg",city:"Los Angeles",state:"California",yelp:true,likes:45)
b2=Brand.create(name:"Nappily Natural",bio:"Nappily Naturals was founded by husband and wife team, Umaar Norwood and Sharon Williams-Norwood Owners in the fall of 2018, after realizing that there wasn’t enough culturally inspired NATURAL beauty and health stores in their community.",image_url:"https://lastandardnewspaper.com/images/Health/6S8R0004_web.jpg",city:"Los Angeles",state:"California",yelp:true,likes:73)
b3=Brand.create(name:"Hilltop Coffee and Kitchen",bio:"We’re from LA. It is here in these surrounding neighborhoods that we spent our formative years. We take pride in creating fun environments for people to connect with each other and themselves.",image_url:"https://cdn.vox-cdn.com/thumbor/O00beN2oETxB5Sv7qAE_eQCST_g=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19443412/HilltopInglewood_MG_3493.jpg",city:"Los Angeles",state:"California",yelp:true,likes:102)
b4=Brand.create(name:"RiDetroit",bio:"RiDetroit is dedicated to promoting cycling and mobility in the city of Detroit through tours and events. RiDetroit’s goal is to further bicycling not only as a health initiative, but also to help improve Detroit’s image and build a diverse and equitable bike community. ",image_url:"https://835108.smushcdn.com/1709192/wp-content/uploads/2020/08/OPTION_6.jpg?lossy=0&strip=1&webp=1",city:"Detroit",state:"Michigan",yelp:true,likes:91)
b5=Brand.create(name:"Vegan Taste Catering",bio:"Food isn’t the only thing made from scratch and lots of love at Vegan Taste Catering in Detroit. Pr’phec Hamilton, 23, has worn many hats to ensure the vision of her business comes into fruition. She was willing to break all barriers to succeed, especially being as a young African American woman from Detroit’s east side.  ",image_url:"https://www.vegantastecatering.com/uploads/b/6737d6bdffdb9b31c6f94a8ae1e887217806b13ab04761f00d7b41c407f5b5f0/dp_1591846648.jpg",city:"Detroit",state:"Michigan",yelp:true,likes:52)
b6=Brand.create(name:"Source Booksellers",bio:"Janet opened her first brick and mortar store, Source Booksellers, inside the Spiral Collective, a shared space with three other women-owned, African American businesses on Cass Avenue and Willis Street in Detroit's Midtown area in 2002.",image_url:"https://images.squarespace-cdn.com/content/v1/5349b24ce4b056257cdce647/1404951774838-VWJVKQM3Q4F54SFH8HJX/image-asset.jpeg?format=2500w",city:"Detoit",state:"Michigan",yelp:true,likes:24)
b7=Brand.create(name:"Ras Plant Based",bio:"Ras, a term that literally means head in Amharic. In Ethiopian culture, a word of reverence, a title given to a chief or prince. At Ras Plant Based, we aim to uphold all that this symbolic name stands for, fusing modernity with ancient recipes to create a one of a kind dining experience.",image_url:"https://static.wixstatic.com/media/89219e_a0f5bad80c87431ea0cbfd2b1d033fe5~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01/89219e_a0f5bad80c87431ea0cbfd2b1d033fe5~mv2.webp",city:"Brooklyn",state:"New York",yelp:true,likes:122)
b8=Brand.create(name:"CakeBoi",bio:"“Your Favorite Baker’s Favorite Baker” greets you from behind the CakeBoi counter in black graffiti tag lettering. There’s a platter of jumbo-sized sugar cookies imprinted with Biggie’s face (we hear Eazy-E versions are sometimes available), and the refrigerator holds layers of cake and frosting in Mason jars labeled with Tupac stickers.",image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/mJH6XqfsmRZvE5Mx1xqUGA/348s.jpg",city:"Brooklyn",state:"New York",yelp:true,likes:48)
b9=Brand.create(name:"Kente Royal Gallery",bio:"Harlem, NY -  Inspired by a voyage to Africa in December 2018, Phyllis and Dodji Gbedemah have decided to connect and strengthen the African Diaspora through Art. They were so inspired by the richness of Africa, its Culture and People that they could not wait to get started upon their return to New York City.",image_url:"https://images.squarespace-cdn.com/content/v1/5c910fa390f9048497f1dc3c/1575409101327-H3K1SNV9ZAWMLEO2GQ1Z/IMG_9434.jpg?format=750w",city:"Harlem",state:"New York",yelp:true,likes:45)
b10=Brand.create(name:"Roots",bio:"Roots is an indoor jungle of unique and rare house plants located in San Francisco's Mission District",image_url:"https://fastly.4sqi.net/img/general/200x200/792404_npzwe-4bGEv7eROb_go5y9w-XeNRNZsKX8kcaiO_5RI.jpg",city:"San Fransico",state:"California",yelp:true,likes:82)
puts "Seeding user/brands..."
ub1=UserBrand.create(user_id:u1.id,brand_id:b8.id)
ub2=UserBrand.create(user_id:u1.id,brand_id:b5.id)
ub3=UserBrand.create(user_id:u2.id,brand_id:b10.id)
ub4=UserBrand.create(user_id:u2.id,brand_id:b4.id)
ub5=UserBrand.create(user_id:u1.id,brand_id:b6.id)
ub6=UserBrand.create(user_id:u3.id,brand_id:b7.id)
ub7=UserBrand.create(user_id:u2.id,brand_id:b1.id)
puts "Seeding brand/events ..."
be1=BrandEvent.create(brand_id:b4.id,event_id:e2.id)
be2=BrandEvent.create(brand_id:b6.id,event_id:e3.id)
be3=BrandEvent.create(brand_id:b9.id,event_id:e4.id)
be4=BrandEvent.create(brand_id:b2.id,event_id:e1.id)
be5=BrandEvent.create(brand_id:b3.id,event_id:e3.id)
be6=BrandEvent.create(brand_id:b5.id,event_id:e4.id)
be7=BrandEvent.create(brand_id:b1.id,event_id:e3.id)
be8=BrandEvent.create(brand_id:b1.id,event_id:e2.id)
be9=BrandEvent.create(brand_id:b2.id,event_id:e4.id)
be11=BrandEvent.create(brand_id:b7.id,event_id:e2.id)
be12=BrandEvent.create(brand_id:b7.id,event_id:e3.id)
be13=BrandEvent.create(brand_id:b10.id,event_id:e3.id)
be14=BrandEvent.create(brand_id:b5.id,event_id:e3.id)
be15=BrandEvent.create(brand_id:b9.id,event_id:e1.id)
be16=BrandEvent.create(brand_id:b3.id,event_id:e4.id)
puts "Seeding user/events ..."
ue1=UserEvent.create(user_id:u1.id,event_id:e4.id)

puts"Done Seeding 🌱"