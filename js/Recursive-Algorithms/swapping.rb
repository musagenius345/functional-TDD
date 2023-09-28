def swap_array_items(arr, index1, index2)
  # Check if the indices are within the array bounds
  if index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length
    # Swap elements using a temporary variable
    temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  end
end

my_array = [1, 2, 3, 4, 5]
swap_array_items(my_array, 1, 3) # Swaps the elements at index 1 and 3
puts my_array # Output: [1, 4, 3, 2, 5]
