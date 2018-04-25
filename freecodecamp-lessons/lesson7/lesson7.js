'use strict';

// ����httpģ��:
var http = require('http');

// ����http server��������ص�����:
var server = http.createServer(function (request, response) {
	// �ص���������request��response����,
	// ���HTTP�����method��url:
	request.url = process.argv[2];
	console.log(request.method + ': ' + request.url);
	console.log(response)
	response.on("data", function (data) {
		console.log(data)
	})
	// ��HTTP��Ӧ200д��response, ͬʱ����Content-Type: text/html:
	response.writeHead(200, {'Content-Type': 'text/html'});
	// ��HTTP��Ӧ��HTML����д��response:
	response.end('<h1>Hello world!</h1>');
});

// �÷���������8080�˿�:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');