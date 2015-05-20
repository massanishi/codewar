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
