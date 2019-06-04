var sentence = "Halo apa kabar semua? apa semua baik-baik saja";

// indexOf
console.log(sentence.indexOf("apa")); // menunjukkan index ke berapa dr depan
console.log(sentence.indexOf("halo")); //-1 artinya tidak ada
console.log(sentence.indexOf("apa",10)); // menunjukkan index ke berapa dr depan

// lastIndexOf
console.log(sentence.lastIndexOf("apa ")); // menunjukkan index ke berapa dr belakang
console.log(sentence.lastIndexOf("apa", 20)); // menunjukkan index ke berapa dr belakang

// string search
console.log(sentence.search("kabar")); // search berdasarkan string
console.log(sentence.search(/kab/)); // berdasarkan regular expression

// string match
console.log(sentence.match("apa"));
console.log(sentence.match(/baik/));

// string replace
console.log(sentence.replace('apa',"bagaimana"));

