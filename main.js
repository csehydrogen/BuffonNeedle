function dRand(scale, g) {
  return Math.floor(Math.random() * g) / g * scale;
}

function throwN(n, g) {
  var D, theta, i, c;
  c = 0;
  for (i = 0; i < n; ++i) {
    D = dRand(0.5, g);
    theta = dRand(2 * Math.PI, g);
    if (D <= 0.5 * Math.sin(theta)) ++c;
  }
  return c;
}

function simulate() {
  var gs, ns, p, i, j, g, n, c, t, d;
  gs = document.getElementById("gs").value.split(" ").map(function(x){return parseInt(x);});
  ns = document.getElementById("ns").value.split(" ").map(function(x){return parseInt(x);});
  d = [];
  for (i = 0; i < gs.length; ++i) {
    t = [];
    for (j = 0; j < ns.length; ++j) {
      g = gs[i];
      n = ns[j];
      c = throwN(n, g);
      t.push(c);
    }
    d.push(t);
  }
  document.getElementById("result").value = d.map(function(x){return x.join(" ");}).join("\n");
}

