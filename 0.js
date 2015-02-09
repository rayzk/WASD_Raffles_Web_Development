(function() {
//

var xhr = new XMLHttpRequest();
xhr.onload = on_load;
xhr.open('GET', 'roominfo.php', true);
xhr.send();

function on_load(e) {
	/*
	var elem = document.createElement("div");
	elem.textContent = xhr.responseText;
	document.body.appendChild(elem);
	*/
	var obj = JSON.parse(xhr.responseText);
	var table = document.createElement('table');
	Object.keys(obj).forEach(function (block_no) {
		var block = obj[block_no];
		var row = document.createElement('div');
		row.id = block_no;
		row.setAttribute('role','tabpanel');
		d.setAttribute('class', 'tab-pane fade');
		Object.keys(block).forEach(function (room_no) {
			var d = document.createElement('button');
			d.textContent = room_no + ", type " + block[room_no].type;
			//d.id = 'td-' + block_no + '-' + room_no;
			d.setAttribute('type', 'button');
			d.setAttribute('class', 'btn btn-default');
			row.appendChild(d);
		});
		table.appendChild(row);
	});
	document.body.appendChild(table);
}

}());
