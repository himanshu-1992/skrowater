var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(xhttp.responseText);
		var user = response.user;
		var showdata = "";
		for(var i = 0; i < user.length; i++) {
			showdata += ' <div id=' + user[i].customername + ' class="userpost">';
			//  showdata += '<h2>' + user[i].name + " </h2> <br>";	
			showdata += '<h2><h9> Month(June) <br><i class="fa fa-user" aria-hidden="true"></i>&nbsp;Person Name </h9> <br>' + user[i].name + " </h2> ";
			showdata += '<div id="gridd">';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 1</th>';
			showdata += '		</tr><td>' + user[i].day1 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 2</th>';
			showdata += '		</tr><td>' + user[i].day2 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 3</th>';
			showdata += '		</tr><td>' + user[i].day3 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 4</th>';
			showdata += '		</tr><td>' + user[i].day4 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 5</th>';
			showdata += '		</tr><td>' + user[i].day5 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 6</th>';
			showdata += '		</tr><td>' + user[i].day6 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 7</th>';
			showdata += '		</tr><td>' + user[i].day7 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 8</th>';
			showdata += '		</tr><td>' + user[i].day8 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 9</th>';
			showdata += '		</tr><td>' + user[i].day9 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 10</th>';
			showdata += '		</tr><td>' + user[i].day10 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 11</th>';
			showdata += '		</tr><td>' + user[i].day11 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 12</th>';
			showdata += '		</tr><td>' + user[i].day12 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 13</th>';
			showdata += '		</tr><td>' + user[i].day13 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 14</th>';
			showdata += '		</tr><td>' + user[i].day14 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 15</th>';
			showdata += '		</tr><td>' + user[i].day15 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 16</th>';
			showdata += '		</tr><td>' + user[i].day16 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 17</th>';
			showdata += '		</tr><td>' + user[i].day17 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 18</th>';
			showdata += '		</tr><td>' + user[i].day18 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 19</th>';
			showdata += '		</tr><td>' + user[i].day19 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 20</th>';
			showdata += '		</tr><td>' + user[i].day20 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 21</th>';
			showdata += '		</tr><td>' + user[i].day21 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 22</th>';
			showdata += '		</tr><td>' + user[i].day22 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 23</th>';
			showdata += '		</tr><td>' + user[i].day23 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 24</th>';
			showdata += '		</tr><td>' + user[i].day24 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 25</th>';
			showdata += '		</tr><td>' + user[i].day25 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 26</th>';
			showdata += '		</tr><td>' + user[i].day26 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 27</th>';
			showdata += '		</tr><td>' + user[i].day27 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 28</th>';
			showdata += '		</tr><td>' + user[i].day28 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 29</th>';
			showdata += '		</tr><td>' + user[i].day29 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 30</th>';
			showdata += '		</tr><td>' + user[i].day30 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div>';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th>Date 31</th>';
			showdata += '		</tr><td>' + user[i].day31 + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div class="bottle">';
			showdata += '	<table rowspan="5">';
			showdata += '		<tr colspan="5">';
			showdata += '			<th class="amount">Total Bottle</th>';
			showdata += '		</tr><td> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M200 0C213.3 0 224 10.75 224 24V64H96V24C96 10.75 106.7 0 120 0H200zM32 151.7C32 136.1 41.04 121.9 55.19 115.3L79.6 103.8C90.58 98.67 102.6 96 114.7 96H205.3C217.4 96 229.4 98.67 240.4 103.8L264.8 115.3C278.1 121.9 288 136.1 288 151.7C288 166.1 280.5 178.7 269.1 185.8C280.6 194.6 288 208.4 288 223.1C288 240.7 279.5 255.4 266.5 263.1C279.5 272.6 288 287.3 288 303.1C288 320.7 279.5 335.4 266.5 344C279.5 352.6 288 367.3 288 384C288 400.7 279.5 415.4 266.5 424C279.5 432.6 288 447.3 288 464C288 490.5 266.5 512 240 512H80C53.49 512 32 490.5 32 464C32 447.3 40.52 432.6 53.46 424C40.52 415.4 32 400.7 32 384C32 367.3 40.52 352.6 53.46 344C40.52 335.4 32 320.7 32 303.1C32 287.3 40.52 272.6 53.46 263.1C40.52 255.4 32 240.7 32 223.1C32 208.4 39.4 194.6 50.87 185.8C39.53 178.7 32 166.1 32 151.7L32 151.7zM112 256H208C216.8 256 224 248.8 224 240C224 231.2 216.8 224 208 224H112C103.2 224 96 231.2 96 240C96 248.8 103.2 256 112 256zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H208C216.8 384 224 376.8 224 368C224 359.2 216.8 352 208 352H112z"/></svg>' + user[i].total_bottle + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div class="amount">';
			showdata += '	<table>';
			showdata += '		<tr>';
			showdata += '			<th class="amount">Total Amount</th>';
			showdata += '		</tr><td><i class="fa fa-inr" aria-hidden="true"></i> &nbsp;' + user[i].total_Amount + '</td>';
			showdata += '	</table>';
			showdata += '</div>';
			showdata += '<div class="amount">';
			showdata += '	<table>';
			showdata += '		<tr  rowspan="5">';
			showdata += '			<th class="amount">Status</th>';
			showdata += '		</tr><td><i class="fa fa-inr" aria-hidden="true"></i> &nbsp;' + user[i].us + '</td>';
			showdata += '	</table>';
			showdata += '</div> <br>';
			showdata += '</div>';
			showdata += '</div>';
		}
		document.write(showdata);
	}
};
xhttp.open("GET", "https://script.google.com/macros/s/AKfycbw9Skr_hFMrMrQBgt2b6-sbZWUBXY1xNA77oCeioHgsea47o7Tux7Q9n94g5aZRU-0xWg/exec", false);
xhttp.send();
