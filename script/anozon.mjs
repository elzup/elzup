const chr = (c) => c.charCodeAt(0)
const ord = (n) => String.fromCharCode(n)
const range = ({ s = 0, n, d = 1 }) =>
  [...Array(Math.ceil((n - s) / d))].map((_, i) => i * d + s)

const chunk = (a, l) =>
  range({ n: a.length, d: l }).map((v) => a.slice(v, v + l))

const [a, z] = ['a', 'z'].map(chr)
const abc = range({ s: a, n: z + 1 }).map(ord)

// const loop = function* () {
//   while (-~null) yield
// }
const m = chunk(abc, 7).map((v) => v.join('').padStart(7, '-'))
const rev = (s) => s.split('').reverse().join('')
const t = m.map((w, i) => [w, rev(w)][i % 2][0])

const r = [t, rev(t.join('')).split('')]
  .map((s) => s.pop() && s.join(''))
  .join('')
console.log(r)
