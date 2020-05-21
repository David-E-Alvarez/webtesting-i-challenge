module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  //what is this functions job?
  console.log('item in repair--->', item)
  console.log('item.durability: ', item.durability)
  return {...item, durability: 100};
  
  
}

function get(item) {
  return { ...item };
}

