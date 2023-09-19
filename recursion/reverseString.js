function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let newStr = "";

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput !== "") {
      newStr = newStr + helperInput.slice(-1);
    }
    helper(helperInput.slice(0, -1));
    console.log(helperInput);
  }
  helper(str);

  return newStr;
}

//   function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

reverse("awesome");
// console.log(reverse('awesome'))
// reverse('rithmschool') // 'loohcsmhtir'
