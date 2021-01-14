/**
     {
         "api":1,
         "name":"Timestamp",
         "description":"Add current timestamp to end of file",
         "author":"sosnus",
         "icon":"time",
         "tags":"time sosnus timestamp"
     }
 **/

  // https://stackoverflow.com/a/2117523
  function main(input) {
    input.text +=  "\r\n" + Date.now();
      return input.text;
  }