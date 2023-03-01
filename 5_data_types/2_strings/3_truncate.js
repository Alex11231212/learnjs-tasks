function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1) + '…';
    return newStr;
  }
  return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));