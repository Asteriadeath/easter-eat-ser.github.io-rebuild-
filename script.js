function copy() {
    // Get the text field
  var copyText = document.getElementById("edgeworth");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
   // you absolute dumbass
   // did gumfuck not tell you
   // updated autopsy report!!!!!!!!!!!!!
   
}