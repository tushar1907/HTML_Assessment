compare= ()=>{                                              //function to compare the nodes
    return (getString(node1,"") === getString(node2,""));   //calling the function with nodes and an empty string
  }

getString = (node,str)=>{                                   //recursive function to call on children of nodes
    if(node.is_text){
      str += node.string;
    }
    
    if(node.children.length == 0){                          //return string if children length zero
    	return str;
    }

    
    var l = node.children.length;    

    for(let i=0;i<l;i++){                                 
    str = getString(node.children[i],str);                  //calling the recursive function and iterate over the children
    }
        
    return str;

  }
  
 var node1 = {"is_text": true, "string": "Tushar", "children": [{"is_text": true, "string":"Gupta", "children": []},
 {"is_text": true, "string":"Suman", "children": []}]};     //nodes defined

 var node2 = {"is_text": true, "string": "Tushar", "children": [{"is_text": true, "string":"Gupta", "children": []},
 {"is_text": true, "string":"Mitali", "children": []}]};    //nodes defined


  document.getElementById("demo").innerHTML = compare();    //calling the function and setting result to a DOM element
  
  