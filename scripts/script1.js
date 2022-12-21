function SurfaceCalculator () {
  let a = parseInt (document.getElementById ('siteA').value);
  let b = parseInt (document.getElementById ('siteB').value);
  let c = parseInt (document.getElementById ('siteC').value);

  let s = (a + b + c) / 2;
  let ginomeno = (s - a) * (s - b) * (s - c);

  let emvadon = Math.sqrt (s * ginomeno);
  document.getElementById ('surface').innerHTML = emvadon;
  document.getElementById ('semiperimeter').innerHTML = s;
}
