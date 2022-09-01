var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(xhttp.responseText);
		var userpp = response.userpp;
		var showdata = "";
		for(var i = 1; i < 2; i++) {
			showdata += ' <div id=' + userpp[i].customer + ' class="userpostppkkkkk">';
		

  //<a href="https://www.skrowater.cf/p/sblibrary.html#s.blibrary_june"  class="prev"> June Entry </a>
// <a href="https://www.skrowater.cf/p/sblibrary.html#s.blibrary" class="current"> Current Month </a> <br><br>	

 //showdata += " <a     href='p/post-ad.html#" + user[i].customername+ "' class="prev" target=\"_blank\"> "; 
        
		//showdata += '<img src ="' + user[i].photo + '"     width="242" height="314"       />';
		   //showdata += '<span class="price"><i class="fa fa-phone" aria-hidden="true"></i> ' + user[i].contact + " </span> ";	  
  //showdata += '</a>';

// showdata += "      <a class=\"prev\" href='" + userpp[i].May+ "' target=\"_blank\"> " + userpp[i].customer+ "<\/a>";





showdata += "      <a class="+ userpp[i].January_css+" href='" + userpp[i].January+ "' target=\"_blank\">January Entry<\/a>";	
showdata += "      <a class="+ userpp[i].February_css+" href='" + userpp[i].February+ "' target=\"_blank\">February Entry<\/a>";	
showdata += "      <a class="+ userpp[i].March_css+" href='" + userpp[i].March+ "' target=\"_blank\">March Entry<\/a>";	
showdata += "      <a class="+ userpp[i].April_css+" href='" + userpp[i].April+ "' target=\"_blank\">April Entry<\/a>";	
showdata += "      <a class="+ userpp[i].May_css+" href='" + userpp[i].May+ "' target=\"_blank\">May Entry<\/a>";
showdata += "      <a class="+ userpp[i].June_css+" href='" + userpp[i].June+ "' target=\"_blank\">June Entry<\/a>";
showdata += "      <a class="+ userpp[i].July_css+" href='" + userpp[i].July+ "' target=\"_blank\">July Entry<\/a>";
showdata += "      <a class="+ userpp[i].August_css+" href='" + userpp[i].August+ "' target=\"_blank\">August Entry<\/a>";	
showdata += "      <a class="+ userpp[i].September_css+" href='" + userpp[i].September+ "' target=\"_blank\">September Entry<\/a>";	
showdata += "      <a class="+ userpp[i].October_css+" href='" + userpp[i].October+ "' target=\"_blank\">October Entry<\/a>";	
showdata += "      <a class="+ userpp[i].November_css+" href='" + userpp[i].November+ "' target=\"_blank\">November Entry<\/a>";			 		 
showdata += "      <a class="+ userpp[i].December_css+" href='" + userpp[i].December+ "' target=\"_blank\">December Entry<\/a>";		 
	
showdata += "      <a class=\"current\" href='" + userpp[i].Current_Month+ "' target=\"_blank\"> Current Month<\/a>";
			//showdata += '<a href="' + userpp[i].May+ '">May</a>';
			
			
showdata += '</div>';            
		}
		document.write(showdata);
	}
};
xhttp.open("GET", "https://script.google.com/macros/s/AKfycbze7o3DRHwvVzXcpyThxjTq8x5vqa6POZov_DQXJ6lp8143VsNP4SF1nsjUJ7Q0_lbjGg/exec", false);
xhttp.send();