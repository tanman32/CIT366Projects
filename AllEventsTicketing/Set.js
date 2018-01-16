function Set() {
	
	// finds the intersection of two list
	this.intersection = function(listA, listB) {
    
	   var resultList = []; // create a resultList array

		if(listA === null || listB === null){ // checks for invalid inputs
			return null; // exit and return null to indicate an error
		}

		for (var i = 0; i < listA.length; i++){ // for every element in listA
			var nextValue = listA[i]; // get next value in the list

			// for every element in listB
			for (var j = 0; j < listB.length; j++){
				if (listB[j] === nextValue){ // this listB element equals nextValue
					resultList.push(listB[j]); // add listB element to end of resultList
					break; // break out of (exit) the listB inner loop
				}
			} // end listB inner loop
		} // end listA outer loop

	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

		//add results together
        var resultList = []; // create a resultList array

        if(listA === null || listB === null){ // checks for invalid inputs
            return null; // exit and return null to indicate an error
        }

        for (var i = 0; i < listA.length; i++){ // for every element in listA
            resultList.push(listA[i]);
        }
        for (var i = 0; i < listB.length; i++){ // for every element in listA
            resultList.push(listB[i]);
        }

        // find intersection
        var resultList2 = []; // create a resultList array

        for (var i = 0; i < listA.length; i++){ // for every element in listA
            var nextValue = listA[i]; // get next value in the list

            // for every element in listB
            for (var j = 0; j < listB.length; j++){
                if (listB[j] === nextValue){ // this listB element equals nextValue
                    resultList2.push(listB[j]); // add listB element to end of resultList
                    break; // break out of (exit) the listB inner loop
                }
            }
        }

        //used to calculate final union
        for (var i = 0; i < resultList2.length; i++){
        	var nextValue = resultList2[i];
        	for(var j = 0; j < resultList.length; j++){
        		if (nextValue === resultList[j]){
        			resultList.splice(j,1);
        			break;
				}
			}
		}
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
        var resultList2 = [];

        if(listA === null || listB === null){ // checks for invalid inputs
            return null; // exit and return null to indicate an error
        }
	  //Everything in A
        for (var i = 0; i < listA.length; i++){ // for every element in listA
            resultList.push(listA[i]);
        }
	   	   
	   // Intersection
        var resultList2 = []; // create a resultList array

        for (var i = 0; i < listA.length; i++) { // for every element in listA
            var nextValue = listA[i]; // get next value in the list

            // for every element in listB
            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) { // this listB element equals nextValue
                    resultList2.push(listB[j]); // add listB element to end of resultList
                    break; // break out of (exit) the listB inner loop
                }
            }
        }

        //used to calculate final relative complement
        for (var i = 0; i < resultList2.length; i++){
            var nextValue = resultList2[i];
            for(var j = 0; j < resultList.length; j++){
                if (nextValue === resultList[j]){
                    resultList.splice(j,1);
                    break;
                }
            }
        }
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {
	   var resultList = [];

        if(listA === null || listB === null){ // checks for invalid inputs
            return null; // exit and return null to indicate an error
        }

        for (var i = 0; i < listA.length; i++){ // for every element in listA
            resultList.push(listA[i]);
        }
        for (var i = 0; i < listB.length; i++){ // for every element in listA
            resultList.push(listB[i]);
        }

        // find intersection
        var resultList2 = []; // create a resultList array

        for (var i = 0; i < listA.length; i++){ // for every element in listA
            var nextValue = listA[i]; // get next value in the list

            // for every element in listB
            for (var j = 0; j < listB.length; j++){
                if (listB[j] === nextValue){ // this listB element equals nextValue
                    resultList2.push(listB[j]); // add listB element to end of resultList
                    break; // break out of (exit) the listB inner loop
                }
            }
        }

        //used to calculate final union
        for (var i = 0; i < resultList2.length; i++){
            var nextValue = resultList2[i];
            for(var j = 0; j < resultList.length; j++){
                if (nextValue === resultList[j]){
                    resultList.splice(j,1);
                    break;
                }
            }
        }

        //2nd time through
        for (var i = 0; i < resultList2.length; i++){
            var nextValue = resultList2[i];
            for(var j = 0; j < resultList.length; j++){
                if (nextValue === resultList[j]){
                    resultList.splice(j,1);
                    break;
                }
            }
        }

	   return resultList;
	}
	

}
