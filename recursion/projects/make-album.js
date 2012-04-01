function makeAlbum(songNumber){

  if(songNumber > 0){
    // output Song Number
    console.log("Song number "+ songNumber +" Created");
    // remove from total
    songNumber--;

    // recursively call the function
    makeAlbum(songNumber);
  }else{
    console.log("We just made a hit record");
  }
}

// Call the function
makeAlbum(10);
