



  const input = {
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { highschool: 'N/A', college: 'Yale' }
  };
  


for(key in input) {
    obj=input[key]
    if( typeof(obj)==='object'){
        console.log(obj);
        
        if(Array.isArray(obj)){
            console.log("ARRAY found>>>",obj);
            let xx=obj.filter(i=>i!=="-" && i!=="")
            console.log("ARRAY found>>>",xx,obj.length-xx.length);
            
        }
    }
    console.log("\n\n\n|||||||||||||||", typeof(obj), '|||||||||||||||\n\n\n');
  }