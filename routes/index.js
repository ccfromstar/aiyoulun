var mysql = require('./db');

exports.index = function (req, res) {
	var url = req.url;
    var sql1 = "select * from PackageShipService";
    var sql2 = "select * from ship order by rand()";
	mysql.query(sql1,function (err, rows1) {
		mysql.query(sql2,function (err, rows2) {
			res.render('index',{url:url,rows1:rows1,rows2:rows2});
		});	
    });
};

exports.services = function (req, res) {
	var url = req.url;
    var sql1 = "select * from ticket";
    var sql2 = "select * from services";
    var sql0 = "select * from ship order by rand()";
	mysql.query(sql1,function (err, rows1) {
		mysql.query(sql2,function (err, rows2) {
			mysql.query(sql0,function (err, rows0) {
				res.render('services',{url:url,rows1:rows1,rows2:rows2,rows0:rows0});
			});		
		});	
    });
};

exports.charteredboat = function (req, res) {
	var url = req.url;
	var sql1 = "select * from PackageShipService";
	var sql0 = "select * from ship order by rand()";
	mysql.query(sql1,function (err, rows1) {
		mysql.query(sql0,function (err, rows0) {
			res.render('charteredboat',{url:url,rows1:rows1,rows0:rows0});
		});
    });
};

exports.boat = function (req, res) {
	var url = req.url;
	var p = Number(req.query.p);
	var sql1 = "";
	if(p == 0){
		sql1 = "select * from ship where txtNo like 'C%' and Capacity < 201";
	}else if(p == 1){
		sql1 = "select * from ship where txtNo like 'C%' and Capacity > 200 and Capacity < 1001";
	}else if(p == 2){
		sql1 = "select * from ship where txtNo like 'T%' and Capacity < 51";
	}else if(p == 3){
		sql1 = "select * from ship where txtNo like 'T%' and Capacity > 50 and Capacity < 201";
	}
	var sql0 = "select * from ship order by rand()";
    mysql.query(sql0,function (err, rows0) {
    	mysql.query(sql1,function (err, rows1) {
			res.render('boat',{url:url,rows0:rows0,rows1:rows1});
		});
	});
};

exports.boatDetail = function (req, res) {
	var url = req.url;
	var p = Number(req.query.p);
	var sql1 = "select * from ship where id = " + p;
	var sql0 = "select * from ship order by rand()";
	mysql.query(sql0,function (err, rows0) {
		mysql.query(sql1,function (err, rows1) {
			res.render('boatDetail',{url:url,rows0:rows0,rows1:rows1});
		});
	});
};