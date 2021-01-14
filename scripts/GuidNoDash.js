

/**
     {
         "api":1,
         "name":"Generate GUID (WITHOUT DASH)",
         "description":"Generates a psuedo-random GUID (WITHOUT DASH)",
         "author":"joshspicer modif sosnus",
         "icon":"html",
         "tags":"guid sosnus"
     }
 **/

  // https://stackoverflow.com/a/2117523
 function main(input) {
   input.text +=  '\r\nxxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
     return v.toString(16);
   });
 }
