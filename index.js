function divide(a, b) {
  if (b == 0) {
    throw new Error('Cannot divide by 0');
  }

  return a / b;
}

function sort(list) {
  list.sort().reverse();
  // for(let i = 2; i < list.length; i++){
  //   let j = i;
  //   while(j > 0 && list[j - 1] > list[j]){
  //     let temp = list[j];
  //     list[j] = list[j - 1];
  //     list[j - 1] = temp;
  //     j--;
  //   }
  // }
  // console.log(list);
  return list;
}

module.exports = {divide,sort};