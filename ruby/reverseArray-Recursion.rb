def reverse(string) 
  return reverse(string[1, string.length - 1]) + string[0] 
end

reverse('abcde')