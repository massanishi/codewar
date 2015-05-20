function DNAStrand(dna){
  //your code here
  var strand = '';
  for (var i = 0; i < dna.length; i++) {
    var a = dna[i].replace(/A/gi, 'T').replace(/C/gi, 'G');
    if(a === dna[i]){
      a = dna[i].replace(/T/gi, 'A').replace(/G/gi, 'C')
    }
    strand += a;
  };

  return strand;
}

console.log(DNAStrand('GTA'));

// Best solution
function DNAStrandBest(dna) {
  return dna.replace(/./g, function(c) {
    console.log(c);
    return DNAStrandBest.pairs[c]
  })
}

// Use of table is nice in this case, when replacement is simple and easy to set up. Much easier to read than mine.

DNAStrandBest.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
console.log(DNAStrandBest('AGTA'));