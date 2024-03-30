const simArray1 = [42, 32, 23, 12, 19, 54];  // Declares the simArray1 array
var arrayIsSorted = false; // This variable tracks whether the array is in a sorted state or not


// This function displays simArray1 in the html element with id = 'arrayDisplay'
function displayArray() {
  document.getElementById("arrayDisplay").innerHTML = 'simArray1: ' + simArray1;
}



//-----------------------------------------------------------


// This function performs bubble sort on simArray1. Then it displays the sorted array in the html element with id = 'arrayDisplay'.
// Once executed, the function then sets the arrayIsSorted variable to True.
function bubbleSort() {
  for (var i = 0; i < simArray1.length; i++) { // This line determines how many iterations of bubble sort it will go through. 
    for (var j = 0; j < (simArray1.length); j++) { // This loop performs one iteration of bubble sort on all the items in the array 
      if (simArray1[j] > simArray1[j + 1]) {
        var temp = simArray1[j]
        simArray1[j] = simArray1[j + 1]
        simArray1[j + 1] = temp
      }
      else { }
    }
  }
  document.getElementById("arrayDisplay").innerHTML = 'simArray1: ' + simArray1;
  arrayIsSorted = true;
}


//-----------------------------------------------------------


// This function randomises the order of the items in array. It then sets the arrayIsSorted variable to false.
function randomise(simArray1) {
  let currentIndex = simArray1.length;
  let randomIndex = 0;

  while (currentIndex > 0) {
    // This picks a random index number from 0 to currentIndex.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // This swaps the items at currentIndex and randomIndex in simArray1
    temp = simArray1[currentIndex];
    simArray1[currentIndex] = simArray1[randomIndex];
    simArray1[randomIndex] = temp;
  }
  document.getElementById("arrayDisplay").innerHTML = 'simArray1: ' + simArray1;
  arrayIsSorted = false;
}

//-----------------------------------------------------------


// This function performs a binary search using the inputted value of the html element with id = 'searchQuery'
// The function then outputs the result of the search in the html element with id = 'searchResult'
function binarySearch() {
  document.getElementById("searchResult").innerHTML = ''; // Resets the searchResult element

  // The sort is nested into this condition, so that it only searches the array if it is sorted
  if (arrayIsSorted == true) {
    let searchQuery = document.getElementById('searchQuery').value;
    let min = 0;
    let max = simArray1.length - 1;
    let found = false;
    let mid = Math.floor((min + max) / 2);

    if (isNaN(searchQuery) == true) {
      document.getElementById("inputError").innerHTML = 'Please enter a number';
      return;
    }
    else {
      document.getElementById("inputError").innerHTML = '';
    }

    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (simArray1[mid] == searchQuery) {
        document.getElementById("searchResult").innerHTML = searchQuery + ' found at index ' + mid;
        found = true;
        break;
      }
      if (simArray1[mid] < searchQuery) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    // The below code displays the result of the search into the element with id = 'searchResult'
    if (found == false) {
      document.getElementById("searchResult").innerHTML = searchQuery + ' not found in array';
    }
    else {
      document.getElementById("searchResult").innerHTML = searchQuery + ' found at index ' + mid;
    }
  }

  else {
    document.getElementById("searchResult").innerHTML = 'The array must be sorted before being searched';
  }
}


