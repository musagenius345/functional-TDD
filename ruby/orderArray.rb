def linear_search(array, value) 
  # We iterate through every element in the array:
  array.each do |element| # If we find the value we're looking for, we return it:
    if element == value
      return value
# If we reach an element that is greater than the value # we're looking for, we can exit the loop early:
    elsif element > value   
      break 
    end   
  end # We return nil if we do not find the value within the array:
return nil 
end

linear_search()
