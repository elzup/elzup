import Base.Iterators: flatten, partition
using LinearAlgebra

alphabet = 'a':'z'

# str
anoz = partition(alphabet, 14) |>
       l -> map(v -> [v[begin], v[end]], l) |> flatten |> join

z = map(v -> v[1:3], [anoz, reverse(anoz)]) |> join

println(z)

# mat
pad = (a, h, l) -> [fill(h, l - size(a)[1]); a]
pad7c = a -> pad(a, '-', 7)

ord = c -> c |> codepoint |> Int
m = map(pad7c, partition(alphabet, 7)) |>
    flatten |>
    a -> map(ord, a) |>
         collect |>
         a -> reshape(a, 7, 4)

l = [1; zeros(Int, 6, 1)]
r = reverse(l)
s = [l r] |> m -> [m m]

anoz2 = ones(Int, 1, 7) * (m .* s) |> l -> map(Char, l) |> join
z = map(v -> v[1:3], [anoz2, reverse(anoz2)]) |> join
println(z)