def quick_sort(arr, low, high):
    if low < high:
        # Partition the array and get the pivot's final position
        pivot_index = partition(arr, low, high)
        
        # Recursively sort the sub-arrays on both sides of the pivot
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)

def partition(arr, low, high):
    # Choose a pivot (e.g., the last element)
    pivot = arr[high]
    i = low - 1  # Index of the smaller element
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]  # Swap elements
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]  # Move pivot to its correct position
    return i + 1
