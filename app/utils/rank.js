function rank(a,b) {

  if (a.gp < b.gp) return -1;
  if (b.gp < a.gp) return 1;

  return 1;
}


export default rank
