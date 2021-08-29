const item = { type: "suit", size: "m" };
const detail = { price: 20, made: "korea", gender: "m" };

// 두개의 객체를 합치는 방법

item["price"] = detail.price; // 수동적으로 합치기 별로 좋지 않고 직접적으로 객체에 변화를 주는 것도 좋지않다

// 새로운 객체 만들기 // 수동적으로 하나씩 만들기

const newObject = new Object();
newObject["type"] = item.type;
newObject["size"] = item.size;
newObject["price"] = item.price;
newObject["made"] = item.made;
newObject["gender"] = item.gender;

// 간락하게 만들기 이것 또한 별로다!

const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};

// good code

const shirt0 = Object.assign(item, detail); // item, detail 두개의 객체가 합쳐진다

// 더 최신문법

const shirt = { ...item, ...detail, price: 40 }; // 기존 값들은 유지하면서 price만 업데이트 가능
