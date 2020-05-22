module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return {...item}
  }
  return {...item, enhancement: item.enhancement + 1};
}

function fail(item) {
  if(item.enhancement < 15){
    return {...item, durability: item.durability - 5}
  }else if(item.enhancement >= 15){
    item.durability = item.durability - 10;
    if(item.enhancement > 16 ){
      item.enhancement = item.enhancement - 1;
    }
  }
  return { ...item };
}

function repair(item) {
  //what is this functions job?
  // console.log('item in repair--->', item)
  // console.log('item.durability: ', item.durability)
  return {...item, durability: 100};
  
  
}

function get(item) {
  return { ...item };
}

