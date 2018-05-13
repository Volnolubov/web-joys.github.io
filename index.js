(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,123,122,120],[113,245,111,117],[226,357,150,34],[0,245,111,117],[129,0,111,117],[124,123,111,117],[237,119,111,117],[242,0,111,117],[237,238,111,117],[0,0,127,121]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.h = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.inde_x = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.inde_xk = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.inde_xknjpgкопия2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.index = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.index1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.index11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.index11jpgкопия = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.index2_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.conts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.index11jpgкопия();
	this.instance.parent = this;

	this.instance_1 = new lib.index11();
	this.instance_1.parent = this;

	this.instance_2 = new lib.index1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,117);


(lib.cont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.index11();
	this.instance.parent = this;
	this.instance.setTransform(78.6,0,1,1,42.1);

	this.instance_1 = new lib.index2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.6,-0.1,1,1,42.2);

	this.instance_2 = new lib.inde_xknjpgкопия2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77,0,1,1,41.3);

	this.instance_3 = new lib.index1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.4,0,1,1,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_3,p:{scaleX:1,rotation:41.4,x:77.4,y:0}},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.317,rotation:93.3,x:139.6,y:66.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,160.8,161.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACF3SIAAh0A3fBGIh4AAAgaXoIAABfAZYhiIh4AA");
	this.shape.setTransform(162.4,160.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,326.9,323.4);


(lib.Анимация47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.inde_x();
	this.instance.parent = this;
	this.instance.setTransform(2.2,-80.6,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-80.6,161.3,161.3);


(lib.Анимация46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.inde_x();
	this.instance.parent = this;
	this.instance.setTransform(2.2,-80.6,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-80.6,161.3,161.3);


(lib.Анимация43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8g9IB5gBIg+B9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-6.3,12.2,12.6);


(lib.Анимация42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEg+IBDB7Ih9ACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.2,12.6,12.6);


(lib.Анимация41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEg+IBDB7Ih9ACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.2,12.6,12.6);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnXbIB5gCIg/B/gAgX5XIBDB8Ih9ABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-162.4,16.5,324.8);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsXaIB+AAIg/B+gAgX5XIBDB8Ih9ABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-162.4,16.5,324.8);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgS3WIgEhyAAWXqIACBf");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-161.9,6.7,323.8);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlB2yIgbhwAFIXGIAVBd");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-158,71.9,316.2);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Anq2CIgthqAHzWVIAlBY");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-152.7,109.1,305.4);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aq70nIg8hiALHU5IAxBR");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-142.7,154.1,285.6);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AuVyZIhMhXAOkSpIA+BI");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.4,-127.4,200.9,255);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h();
	this.instance.parent = this;
	this.instance.setTransform(-61,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-60,122,120);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACKo1IAAuhARvyZIhPBaAntBCIvsACAXahmIthAAAgVIoIAAOv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-150.4,301.6,301);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ARvyZIhPBaACKo1IAAuhAXaiEIthAAAntBCIvsACAgVIoIAAOv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-150.4,301.6,301);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.index();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-58.5,111,117);


(lib.portf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.inde_xk();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,92.1,1,1,-42.5);

	this.instance_1 = new lib.inde_x();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.5,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-9.3,133.5,126.5);


(lib.d111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.inde_xk();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,92.9,1,1,-43.2);

	this.instance_1 = new lib.inde_x();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,53.2,0.585,1.171,45,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-9.9,132.6,127.5);


// stage content:
(lib.index2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.r.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("http://volnolubov.temp.swtest.ru/home/", "_top");
		}
	}
	this.frame_86 = function() {
		this.stop();
		
		this.d111.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://volnolubov.temp.swtest.ru/%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/", "_top");
		}
		
		this.d111.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(88);
		}
		
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.c.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("http://volnolubov.temp.swtest.ru/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B/", "_top");
		}
	}
	this.frame_161 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(15).call(this.frame_86).wait(75).call(this.frame_161).wait(1));

	// Слой 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXWiYQACAcACAbAA43bQAcABAcADQAMAAAMABA3UCWQgEgmgBgnAAfXcQgPAAgPAAQgMAAgMAA");
	this.shape.setTransform(178.9,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AXCkoQASBiAGBmAgw3aQAZgBAYAAQBFAABCAFA3BEgQgUhpgEhwADOXQQhkAMhpAAQgKAAgMAA");
	this.shape_1.setTransform(178.9,299.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Akq2/QCQgcCaAAQBGAABEAFA13InQhXjegLj9AIJWEQjyBYkXAAQgKAAgLAAAWFoGQBHDEAODd");
	this.shape_2.setTransform(178.9,299.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ArY0iQFHi5GSAAQBFAABDAFA03KzQiUkagOlRAKYVHQktCVlqAAQgKAAgMAAATRtaQDxFQAYGp");
	this.shape_3.setTransform(178.9,299.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AtBzhQFuj6HUAAQBEAABDAFAx/PBQgug2gog4QjxlXgTmyAO4SJQmVFToiAAQgMAAgLAAATGtpQD7FWAZG0");
	this.shape_4.setTransform(178.9,299.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Ax4vIQAogvAtgtQG3m3JtAAQBGAABDAFAPUxvQAqAkAnAnQGWGWAfIxAQkQlQm2G3ptAAQgIAAgJAAQgCAAgDAAAvmRfQgfgcgegeQmemegYo+");
	this.shape_5.setTransform(178.9,299.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("A2lmYQBjltEfkfQG3m3JtAAQBFAABDAFAHs2NQE7BrD+D+QGVGVAgIvAXBEtQhTGvlJFJQm3G3ptAAQgKAAgKAAAnJWZQlPhpkLkLQmemegYo/");
	this.shape_6.setTransform(178.9,299.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AXcAAQAAJtm3G4Qm3G3puAAQpsAAm3m3Qm4m4AAptQAApsG4m4QG3m3JsAAQJuAAG3G3QGaGaAbI4QABAFAAAGQABAkAAAjg");
	this.shape_7.setTransform(178.9,299.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("A3ZhOQAbo7GbmbQG3m3JsAAQJuAAG3G3QGaGaAbI4QAAACABACAXcAVQgHJgmwGwQm3G3puAAQpsAAm3m3QmwmwgIpg");
	this.shape_8.setTransform(178.9,299.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("A3LjkQBDncFklkQG4m3JsAAQJuAAG2G3QFlFkBEHcAXZBvQglImmQGQQm2G3puAAQpsAAm4m3QmQmQgkom");
	this.shape_9.setTransform(178.9,299.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("A2YnKQBplPELkLQG4m3JsAAQJuAAG2G3QELELBpFPAXIEFQhLHHlZFZQm2G3puAAQpsAAm4m3QlYlZhLnH");
	this.shape_10.setTransform(178.9,299.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("A1MqIQBrjfC9i9QG4m3JsAAQJuAAG2G3QC+C9BrDfAWYHNQhpFNkLELQm2G3puAAQpsAAm4m3QkKkLhplN");
	this.shape_11.setTransform(178.9,299.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AyquMQA9hPBJhJQG4m3JsAAQJtAAG3G3QBJBJA+BPAUXLvQhiCliRCRQm3G3ptAAQpsAAm4m3QiRiRhhil");
	this.shape_12.setTransform(178.9,299.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AvQxzQGeloIyAAQIzAAGdFoASJO3QgvA4g2A2Qm3G3ptAAQpsAAm4m3Qg1g2gvg4");
	this.shape_13.setTransform(178.9,299.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AtCzhQFuj6HUAAQHVAAFuD6ANdTPQl3ENnmAAQnmAAl2kN");
	this.shape_14.setTransform(178.9,299.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("Aq/0xQE9iqGCAAQGDAAE9CqAKXVHQktCVlqAAQlpAAktiV");
	this.shape_15.setTransform(178.9,299.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ApB1tQEKhuE3AAQE4AAEKBuAHwWNQjoBPkIAAQkHAAjnhP");
	this.shape_16.setTransform(178.9,299.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AkD3HQB+gUCFAAQCGAAB+AUAD+XJQh7ATiDAAQiCAAh6gT");
	this.shape_17.setTransform(178.9,299.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AiQ3SQBTgJBWAAQAyAAAyADACRXYQgUACgUABQgoABgoAAQgyAAgxgD");
	this.shape_18.setTransform(176.4,299.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},21).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},42).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[]},5).wait(75));

	// line
	this.instance = new lib.Анимация8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(178.8,300.4);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(178.8,300.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},58).to({state:[{t:this.instance_1,p:{rotation:0,x:178.8,y:300.4}}]},3).to({state:[{t:this.instance_1,p:{rotation:7.2,x:178.7,y:300.1}}]},1).to({state:[]},25).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({_off:true,alpha:0},3).wait(101));

	// line
	this.instance_2 = new lib.Анимация43("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(180.8,456);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.45, 0.45, 0.45, 1, 140.25, 140.25, 140.25, 0)];
	this.instance_2.cache(-8,-8,16,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).to({y:556},19).to({alpha:0},55).wait(1));

	// line
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("Ao2AvIgfAAABEpHIAAgVAh4IbIAABBAJWiNIgnAA");
	this.shape_19.setTransform(186.8,301.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("ApFAhIhfABAA8pQIAAhWAhtINIAACZAKlibIiEAA");
	this.shape_20.setTransform(187.6,303.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("ApSAWIi0AAAAvpbIAAiSAiOICIAADsAMHilIjzAA");
	this.shape_21.setTransform(188.9,304.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("ApZAGIkYgBAAnprIAAjWAiWHyIAAFPANyi4IllAA");
	this.shape_22.setTransform(189.6,305.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("ApvgcIooAAAASqQIAAlIASYjbIqhAAAisHOIAAIL");
	this.shape_23.setTransform(191.8,309.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AqchEIsqAAAgaq2IAAn4AjYGnIAAMHAXHj/Iv9AA");
	this.shape_24.setTransform(196.3,313.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AnuA/IvrgBACTozIAAumAXah9ItiAAAgqIqIAAOw");
	this.shape_25.setTransform(179,300.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AnuBCIyzAAACTouIAAxkAaih4IwqAAAgoIvIAARk");
	this.shape_26.setTransform(179,299.7);

	this.instance_3 = new lib.Символ3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(179.3,299.6,1,1,-4.7,0,0,162.4,160.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AntBCIvsACACKo1IAAuhAXah6IthAAAgVIoIAAOv");
	this.shape_27.setTransform(178.8,300.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AwrwTIhXhMAQ7QiIBIA+");
	this.shape_28.setTransform(182.2,296.1);

	this.instance_4 = new lib.Анимация12("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(182.2,296.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация13("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(182.8,296.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация14("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(183.2,297.1,1,1,-3.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация15("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(177.9,299);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация16("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(178.2,299.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJXcIAaAAIgOB8gAgW5XIAPB8IgbABg");
	this.shape_29.setTransform(178.5,300);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AADXcIAogBIgXB9gAgX5XIAXB8IgqABg");
	this.shape_30.setTransform(178.7,300);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKXcIA8AAIgeB8gAgX5XIAcB8Ig2ABg");
	this.shape_31.setTransform(178.7,300);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOXcIBHgBIgmB9gAgY5XIAlB8IhFABg");
	this.shape_32.setTransform(178.7,300);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVXcIBVgBIgvB9gAga5XIAtB8IhSABg");
	this.shape_33.setTransform(179,300);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcXbIBhAAIgyB9gAgY5XIA0B8IhgABg");
	this.shape_34.setTransform(178.7,300);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggXbIBqgBIg3B+gAgY5XIA8B8IhtABg");
	this.shape_35.setTransform(178.7,300);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnXbIB5gBIg/B+gAgX5XIBDB8Ih9ACg");
	this.shape_36.setTransform(178.7,300);

	this.instance_9 = new lib.Анимация17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(178.7,300);
	this.instance_9._off = true;

	this.instance_10 = new lib.Анимация18("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(178.7,300);
	this.instance_10.filters = [new cjs.ColorFilter(0.45, 0.45, 0.45, 1, 140.25, 140.25, 140.25, 0)];
	this.instance_10.cache(-10,-164,21,329);

	this.instance_11 = new lib.Анимация41("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(176.8,145.8);
	this.instance_11._off = true;
	this.instance_11.filters = [new cjs.ColorFilter(0.45, 0.45, 0.45, 1, 140.25, 140.25, 140.25, 0)];
	this.instance_11.cache(-8,-8,17,17);

	this.instance_12 = new lib.Анимация42("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(176.8,44.3);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0.45, 0.45, 0.45, 1, 140.25, 140.25, 140.25, 0)];
	this.instance_12.cache(-8,-8,17,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},15).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},10).to({state:[{t:this.shape_27},{t:this.instance_3,p:{regX:162.4,regY:160.7,rotation:-4.7,x:179.3,y:299.6}}]},21).to({state:[{t:this.shape_27},{t:this.instance_3,p:{regX:162.5,regY:160.8,rotation:-8.9,x:179.4,y:299.7}}]},1).to({state:[{t:this.shape_27},{t:this.instance_3,p:{regX:162.5,regY:160.8,rotation:-15.4,x:179.4,y:299.7}}]},1).to({state:[{t:this.shape_27},{t:this.instance_3,p:{regX:162.5,regY:160.8,rotation:-24.1,x:179.4,y:299.6}}]},1).to({state:[{t:this.shape_27},{t:this.instance_3,p:{regX:162.5,regY:160.8,rotation:-31.6,x:179.4,y:299.7}}]},1).to({state:[{t:this.shape_27},{t:this.instance_3,p:{regX:162.4,regY:160.9,rotation:-42,x:179.3,y:299.8}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},19).to({state:[{t:this.instance_12}]},55).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({x:182.5,y:296.4},1).to({_off:true,x:182.8,y:296.5},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},1).to({_off:true,rotation:-3.7,x:183.2,y:297.1},2).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},2).to({regX:0.1,regY:0.1,rotation:2.2,x:180.7,y:298.1},1).to({_off:true,regX:0,regY:0,rotation:0,x:177.9,y:299},1).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},1).to({rotation:5,x:178,y:299.1},1).to({_off:true,rotation:0,x:178.2},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(81).to({_off:false},0).to({_off:true},5).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(87).to({_off:false},0).to({_off:true,y:44.3},19).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(87).to({_off:false},19).to({alpha:0},55).wait(1));

	// Слой 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AA5CJIgxiXIgHgpIgBAAIgGAqIgxCWIglAAIhLkRIA6AAIAkCXIAGAwIABAAIAFgxIAwiWIAiAAIAvCXIAFAwIACAAIAFgxIAiiWIA2AAIhLERg");
	this.shape_37.setTransform(177.6,288);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAkAMIAFgXIA2AAIgHAXgAheAMIAIgXIAjAAIAHAXg");
	this.shape_38.setTransform(182.9,277);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AinhrIA6AAIAGAXIgFAAIAADAgABthUIAFgXIA2AAIgHAXgAgUhUIAHgXIAiAAIAHAXg");
	this.shape_39.setTransform(172.6,283.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AAZByIgwiXIgHgpIgCAAIgGAqIgxCWIghAAIgCjDIARBKIAFAvIACAAIAFgwIAhhpIA/AAIAhBpIAFAwIACAAIAFgwIAYhpIAzAAIg+Djg");
	this.shape_40.setTransform(175.8,288.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AADBXIgwiXIgDgUIAwABIAOAwIAFAwIACAAIAFgxIALgvIAwABIguCpgAhShVIAZAAIgDAVIgYBLg");
	this.shape_41.setTransform(175,288.6);

	this.instance_13 = new lib.logo();
	this.instance_13.parent = this;
	this.instance_13.setTransform(122,239);

	this.instance_14 = new lib.Анимация11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(187,299);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},75).to({state:[{t:this.instance_14}]},19).to({state:[]},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).wait(75).to({startPosition:0},0).to({alpha:0},19).to({_off:true},1).wait(55));

	// Слой 12
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("ADxDxIABnlAjxD1IHgAA");
	this.shape_42.setTransform(185.1,299.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AjTDWIGlAAADSDTIACmo");
	this.shape_43.setTransform(185.2,299.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AixC4IFiAAACyCzIAAlr");
	this.shape_44.setTransform(185.5,299.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("ACXCcIAAgDAiWCZIEtAAIAAk0");
	this.shape_45.setTransform(185.3,299.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AiACFIEBAAIAAkJ");
	this.shape_46.setTransform(185.4,299.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AhsBxIDZAAIAAjh");
	this.shape_47.setTransform(185.7,299.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AhfBkIC/AAIAAjH");
	this.shape_48.setTransform(185.5,299.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AhIBNICRAAIAAiZ");
	this.shape_49.setTransform(185.4,299.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},78).wait(75));

	// Слой 13
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD4D4IAAnzAj3D8IHvAA");
	this.shape_50.setTransform(185.3,299.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjbDZIG0AAADcDXIAAmv");
	this.shape_51.setTransform(185.1,299.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai2C+IFtAAAC3C5IAAl2");
	this.shape_52.setTransform(185.9,299.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,1,1).p("AigCiIFBAAACgCcIAAk9");
	this.shape_53.setTransform(185.1,299.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiGCNIEKAAACHCNIAAkZ");
	this.shape_54.setTransform(185.6,299.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah0B5IDpAAIAAjx");
	this.shape_55.setTransform(185.8,299.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhlBtIDLAAIAAjZ");
	this.shape_56.setTransform(185.8,299.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhZBcICzAAIAAi2");
	this.shape_57.setTransform(185.5,299.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhUBXICpAAIAAit");
	this.shape_58.setTransform(185.5,299.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhOBUICdgBIAAim");
	this.shape_59.setTransform(185.6,299.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},76).wait(75));

	// Слой 14
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQBeIgEABIAAi9IAoAAIAAC9g");
	this.shape_60.setTransform(200.9,307.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6600").s().p("AghCJQgNgDgKgEIAMgsQAKAFANAAQAQAAAFgMQADgMAAgUIAAi5IACAAIAAC9IADgBIAlABIABi9IALAAIAADGQAAARgEAOQgDANgIALQgIALgNAGQgMAHgRAAQgMAAgNgCg");
	this.shape_61.setTransform(198.4,312.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6600").s().p("AghCIQgNgCgKgEIAMgsQAKAFANAAQAQAAAFgMQADgMAAgUIAAi5IA2AAIAADHQAAAPgEAOQgDAPgIAKQgIALgNAHQgMAGgRAAQgMAAgNgDg");
	this.shape_62.setTransform(201.4,315.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6600").s().p("AghCIQgNgCgKgEIAMgsQAKAFANAAQAQAAAFgMQADgMAAgUIAAi5IA2AAIAADHQAAAQgEAOQgDANgIALQgIALgNAHQgMAGgRAAQgMAAgNgDg");
	this.shape_63.setTransform(203.9,317.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6600").s().p("AghCJQgNgDgKgEIAMgsQAKAFANAAQAQAAAFgMQADgMAAgUIAAi5IA2AAIAADGQAAARgEAOQgDANgIALQgIALgNAGQgMAHgRAAQgMAAgNgCg");
	this.shape_64.setTransform(207.4,321.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6600").s().p("AghCJQgNgDgKgEIAMgsQAKAFANAAQAQAAAFgMQADgMAAgUIAAi5IA2AAIAADGQAAAQgEAOQgDAOgIALQgIALgNAGQgMAHgRAAQgMAAgNgCg");
	this.shape_65.setTransform(208.9,322.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6600").s().p("AghCJQgNgDgKgEIAMgsQAKAFANAAQAQAAAFgMQADgMAAgUIAAi5IA2AAIAADGQAAAQgEAPQgDAOgIAKQgIALgNAGQgMAHgRAAQgMAAgNgCg");
	this.shape_66.setTransform(209.9,323.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61},{t:this.shape_60}]},3).to({state:[{t:this.shape_62,p:{x:201.4,y:315.1}}]},1).to({state:[{t:this.shape_63,p:{x:203.9,y:317.6}}]},1).to({state:[{t:this.shape_62,p:{x:205.9,y:319.6}}]},1).to({state:[{t:this.shape_62,p:{x:205.9,y:319.6}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_63,p:{x:209.4,y:323.1}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[]},76).wait(75));

	// Слой 15
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("ADKD+QgCAAgBAAQgBAAAAAAQgBAAAAgBQAAAAABAAIADAAIAAgBInIAAIH3nwIgCAAIAKgJIAAH5IgCAAIgFABIgXAAIACgBIgDAAIgRABIgFABIgBAAgADMD8IABAAIgBAAg");
	this.shape_67.setTransform(184.9,298.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ACzDjQgBAAgBAAQgBAAgBAAQAAAAAAAAQAAAAAAAAIAEgBIAAgBImTAAIAQgQIACADIACgHIGtmvIAAHDIgCAAIgEACIgUAAIACgCIgDAAIgOACIgEAAIgBAAgAC0DiIABgBIgBAAg");
	this.shape_68.setTransform(184.9,299.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AixC9IFjl5IAACzIgmgBIAADAIADgBIAjABIAAAHg");
	this.shape_69.setTransform(184.9,299);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPBgIgDABIAAjBIAlABIAADAg");
	this.shape_70.setTransform(200.8,307.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAigjIAAADIhDBEg");
	this.shape_71.setTransform(196.8,286.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AiWCcIDpjyIBEhFIAAE3g");
	this.shape_72.setTransform(185.1,299);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AiMCRIEZkhIAAEhg");
	this.shape_73.setTransform(185.2,299.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhtByIDbjjIAADjg");
	this.shape_74.setTransform(185.2,299.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhkBmIDJjLIAADLg");
	this.shape_75.setTransform(185.1,299.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhRBTICbilIAJClg");
	this.shape_76.setTransform(185.3,299.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},78).wait(75));

	// Слой 16
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF6600").s().p("AgMAkIAAAAIAAhHIAZABIgUBGIgFAAgAANgiIAAAAIAAABg");
	this.shape_77.setTransform(174.2,289.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ah/hBIABAAIAEAAIAVhGIgagBIAAgFID/AAIj/EbgAhkiHIAAAAIgBAAg");
	this.shape_78.setTransform(185.7,299.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ahzh0IDnAAIjnDpg");
	this.shape_79.setTransform(185.8,299.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhnhgIDPAAIjPDBg");
	this.shape_80.setTransform(186,298.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhOhUICdAAIidCpg");
	this.shape_81.setTransform(185.5,299.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78},{t:this.shape_77}]},5).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[]},78).wait(75));

	// Слой 17
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak7iRIAAgGIAAgEIAAifAk7E3IAAnGAk4k7IJ0AAIAAJyAE8E8Ip3AA");
	this.shape_82.setTransform(191.6,305.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF6600").s().p("AAAApIAAgDIAAACIAAADgAAAgpIAAAAIAAAmg");
	this.shape_83.setTransform(160.6,278.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E7Ip3AAgAE8E3IAApyIpzAAIJzAAgAk7E3IAAnGgAk7iPIADgCIgDAAgAk7iRIAAgHIAAgDIgEADIAEAAgAk7ibIAAifgAk2jiIAAACIABgDIAAgCgAk1kPIAAgmIgBAAg");
	this.shape_84.setTransform(191.6,305.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak7iRIAAgGIAAgEIAAifAk4k7IJ0AAIAAJyAE8E8Ip3AAAk7E3IAAnG");
	this.shape_85.setTransform(194.6,308.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E7Ip3AAgAE8E3IAApzIp0AAIJ0AAgAk7E3IAAnGgAk7iSIAAADIADgDIgDAAIAAgGIAAgDIAAigIAACgIgFADIAFAAIAAAGgAk2jiIAAABIABgCIAAgCgAk1kPIAAgmIgBAAgAk7iYg");
	this.shape_86.setTransform(194.6,308.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF6600").s().p("AAAApIABgDIAAACIgBACgAAAgpIABAAIAAAmg");
	this.shape_87.setTransform(163.6,281.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF6600").s().p("AAAApIAAgDIAAACIAAADgAAAgqIAAAAIAAAng");
	this.shape_88.setTransform(166.6,284.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E8Ip3AAgAE8E2IAApxIp0AAIJ0AAgAk7E2IAAnFgAk7iSIAAADIACgDIgCAAIAAgFIAAgFIAAieIAACeIgFAFIAFAAIAAAFgAk2jiIAAACIABgDIAAgCgAk1kPIAAgnIgBAAgAk7iXg");
	this.shape_89.setTransform(197.6,311.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak4k7ICjAAIHRAAIAAJyAk7iRIAAgGIAAgEIAAifAk7E3IAAnGAE8E8Ip3AA");
	this.shape_90.setTransform(200.6,314.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E7Ip3AAgAE8E3IAApyInRAAIiiAAIgEAAIAAABIAACfIgEADIAEAAIAAAHIAAACIADgCIgDAAIAEgHIABAAIAAifIABAAIAACyIBoAiIAxgyIAFAAIAAgGICUiYIiPgBIgDgHIHRAAgAk7E3IAAnGgAjXk1IA5gBIAAABg");
	this.shape_91.setTransform(200.6,314.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak4k7ICjAAIHRAAIAAJyAk7E3IAAnGIAAgCIAAgGIAAgEIAAigAE8E8Ip3AA");
	this.shape_92.setTransform(203.1,316.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF6600").s().p("AgKAkIgBAAIgBgBIgCAAIAAgGIAChAIAaABIgUBGIgEAAgAAOgiIABAAIAAABg");
	this.shape_93.setTransform(174.1,289.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E8Ip3AAgAE8E2IAApxInSAAIiiAAIgDAAIAAAAIAACfIgEAFIAEAAIAAAGIAAACIAAHFIAAnFIACgCIgCAAIAEgGIABAAIAAigICYABIAAACIgCACIAQAAIgGgJIHSAAgAkoiXICRACIABiYgAk1iXIAAABIABgBIAAgBgAkwjwIAAAGIACAAIABABIABAAIAEAAIAVhHIABAAIAAAAIgBAAIgbgBg");
	this.shape_94.setTransform(203.1,316.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E7Ip3AAgAE8E3IAApyInRAAIiiAAIgEAAIAAAAIAACgIgEADIAEAAIAAAHIAAACIAAHGIAAnGIADgCIgDAAIAEgHIABAAIAAifICYABIAAACIgBACIAPAAIgFgJIHRAAgAkoiXICRACIACiXgAk1iYIAAABIAAAAIAAgBg");
	this.shape_95.setTransform(205.1,318.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E8Ip3AAgAE8E2IAApxInSAAIiiAAIgDAAIAAAAIAACfIgFAFIAFAAIAAAFIAAADIAAHFIAAnFIACgDIgCAAIAEgFIABAAIAAigICYABIAAACIgCACIAQAAIgGgJIHSAAgAkoiXICRACIABiYgAk1iXIAAABIABgBIAAgBg");
	this.shape_96.setTransform(206.6,320.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E7Ip3AAgAE8E3IAApzInRABIijgBIgDAAIAAABIAACgIgFADIAFAAIAAAGIAAADIAAHGIAAnGIADgDIgDAAIAEgGIABAAIAAieICYAAIAAACIgBACIAPAAIgFgJIHRgBgAkniXICQACIACiXgAk1iYIAAACIAAgBIAAgBg");
	this.shape_97.setTransform(208.1,321.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak7E3IAAnGIAAgCIAAgGIAAgEIAAigICmAAIHRAAIAAJyAE8E8Ip3AA");
	this.shape_98.setTransform(208.6,322.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E7Ip3AAgAE8E2IAApxInRAAIimAAIAACgIgEADIAEAAIAAAHIAAACIACgCIgCAAIAEgHIABAAIAAifICYABIAAACIiXCcIAAABIABgBICdADIACimIHRAAgAk7E2IAAnFg");
	this.shape_99.setTransform(208.6,322.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AgCAGIACgDIAAgDAAAABIAAgBIADgF");
	this.shape_100.setTransform(177.6,308);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak7E3IAAnGIAAgCIAAgGIAAgEIAAigICkAAAiVk7IHRAAIAAJyAE8E8Ip3AA");
	this.shape_101.setTransform(209.1,322.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AlJFKIAAqTIKTAAIAAKTgAE8E8Ip3AAgAE8E2IAApyInSABIHSgBgAk7E2IAAnFIABgEIADgEIgDAEIgBABIABgBIgBAEIAAgDIAAgFIAEAAIABAAIAAifICYAAIAAACIiXCdIAAABIABgBICdACIABimIgBAAIikgBIAACgIgFAFIAFAAIAAAFIAAADIgDADIADgDgAk7iXg");
	this.shape_102.setTransform(209.1,322.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:194.6,y:308.1}}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_85,p:{x:197.6,y:311.1}}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:203.1,y:316.6}}]},1).to({state:[{t:this.shape_95},{t:this.shape_92,p:{x:205.1,y:318.6}}]},1).to({state:[{t:this.shape_95},{t:this.shape_92,p:{x:205.1,y:318.6}}]},1).to({state:[{t:this.shape_96},{t:this.shape_92,p:{x:206.6,y:320.1}}]},1).to({state:[{t:this.shape_97},{t:this.shape_92,p:{x:208.1,y:321.6}}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[]},76).wait(75));

	// Слой 18
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AA5CKIgxiXIgCgSIAEAPIAAgCIACAHIAuCVgAhcCKIhLkTIA6AAIAkCYIAGAwIABAAIAFgxIAwiXIAiAAIAeBgIgvgCIgDgMIgBAAIgBAPIgBAAIAAABIgdgBIAAAHIgBAAIgBAKIADAuIADASIAAABIAAAAIgCAHIACgGIgCAGIADgHIAAACIAWhCIgCAJIgxCXgABKAzIABAAIgBAAgABQAVIAAgCIAAgFIAiiXIA2AAIgYBXIgDALIAAABIgBgBQgOgLgdALIgBAAIgBABIgBAAIgQBHgAA9gDIgGgZIANArIABAEIAAACIgIgYg");
	this.shape_103.setTransform(175.3,290.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF6600").s().p("AADBeIguiVIgBgGIAAACIgFgPIAAgHIgBAAIAAgBIABAAIADAAIAAABIAcBaQgDgPAAgRIAmAeIAAAAIACAAIAAABIAAgBIACAAIACgPIAAgBIAQhJIAAAAIACgBIABAAQAcgKAOALIABAAIAAAAIAEgLIAAAMIgTA7IAAAAIgOAyIgZgBIgBAEIgCA/gAhSAAIAAgBIAAgBIgEgRIgCgvIAAgKIACAAIAbAAIgBAJIgWBEIAAgBIgDAGgAgyhTIAAAAIAAgBIAAgCIAuACIgCACg");
	this.shape_104.setTransform(180.8,294.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AA5CJIgwiXIgDgRIAEAPIAAgBIABAGIAvCUgAhcCJIhLkRIA6AAIAlCXIAEAwIACAAIAFgxIAwiWIAiAAIAeBfIgvgCIgDgMIgBAAIgBAOIgBABIAAAAIgdAAIAAAHIgCAAIAAAKIACAuIAEARIAAACIAAAAIgCAHIADgFIgCAFIACgGIAAABIAVhCIgBAJIgwCWgABKAzIAAAAIAAABgABQAUIAAgBIABgFIAhiWIA2AAIgYBWIgDALIAAABIgCgBQgOgLgcAKIAAAAIgDACIAAAAIgPBHgAA+gEIgHgXIANAqIABAEIAAABIgHgYg");
	this.shape_105.setTransform(172.3,287.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF6600").s().p("AADBeIguiVIgBgGIAAACIgFgPIAAgHIgBAAIAAgBIABAAIADAAIAAABIAcBaQgDgPAAgRIAmAeIAAAAIACAAIAAABIAAgBIACAAIACgPIAAgBIAQhJIACgBIABAAQAcgKAOALIABAAIAAAAIAEgLIAAAMIgTA7IAAAAIgOAyIgZgBIgBAEIgCA/gAhSAAIAAgBIAAgBIgEgRIgCgvIAAgKIACAAIAbAAIgBAJIgWBEIAAgBIgDAGgAgyhTIAAAAIAAgBIAAgCIAuACIgCACg");
	this.shape_106.setTransform(174.8,288.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AA5CKIgwiXIgEgSIAGAQIAAgCIABAFIAuCWgAhcCKIhLkTIA6AAIAkCYIAFAxIACAAIAGgyIAviXIAiAAIAdBgIgugBIgCgNIgCAAIgCAOIAAABIAAAAIgdAAIAAAHIgBAAIgBAKIACAuIAEARIAAABIAAABIgDAHIAEgGIgDAGIAEgHIAAACIAUhCIgBAJIgxCXgABKAyIABAAIgBABgABQAVIAAgBIABgGIAhiXIA2AAIgXBXIgFALIAAAAIgBAAQgOgLgcAKIgBAAIgCABIgQBIgAA9gEIgGgYIANArIABAFIAAABIgIgZg");
	this.shape_107.setTransform(169.3,284.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF6600").s().p("AgUA5QgMgjgIgkQgFgVAAgXIAkACIADAeIAEAAIACgRIABgOIAtAAIAAABIgOAyIgZgBIgBAFIgCA8g");
	this.shape_108.setTransform(174.2,288.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AA5CKIgxiXIgHgqIgBAAIgGAqIgxCXIglAAIhLkTIA6AAIAkCYIAGAwIABAAIAFgxIAwiXIAiAAIAvCYIABAEIAAACIgkgCQABAXAEAVQAIAlAMAjIAaABIAAACgABQAVIAAgCIAAgFIAiiXIA2AAIgrCdIgtAAIgCAOg");
	this.shape_109.setTransform(166.3,281.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF6600").s().p("AgNAiIAChDIAZABIgLApIgHAZg");
	this.shape_110.setTransform(174.1,289.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("ABcCJIAIgYIgHAYgAA5CJIgxiXIgHgpIgBAAIgGAqIgwCWIgmAAIhLkRIA6AAIAlCXIAEAwIACAAIAFgxIAwiWIAiAAIAvCXIAFAwIACAAIAFgxIAiiWIA2AAIg5DPIgagBIgCBDg");
	this.shape_111.setTransform(164.3,279.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AA5CKIgxiXIgGgqIgCAAIgGAqIgxCXIglAAIhLkTIA6AAIAkCYIAGAwIABAAIAGgxIAviXIAiAAIAvCYIAGAwIABAAIAFgxIAiiXIA2AAIhLETg");
	this.shape_112.setTransform(162.8,277.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AA5CJIgwiXIgHgpIgCAAIgGAqIgwCWIgmAAIhLkSIA6AAIAlCYIAEAxIACAAIAGgyIAviXIAiAAIAvCYIAGAxIABAAIAGgyIAhiXIA2AAIhLESg");
	this.shape_113.setTransform(161.3,276.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AA5CJIgxiXIgHgpIgBAAIgGAqIgwCWIgmAAIhLkRIA6AAIAlCXIAEAwIACAAIAFgxIAwiWIAiAAIAvCXIAFAwIACAAIAFgxIAiiWIA2AAIhLERg");
	this.shape_114.setTransform(159.8,274.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AA5CKIgxiXIgGgqIgCAAIgGAqIgxCXIglAAIhLkTIA6AAIAkCYIAGAxIABAAIAGgyIAviXIAiAAIAvCYIAGAxIABAAIAFgyIAiiXIA2AAIhLETg");
	this.shape_115.setTransform(159.3,274.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AA5CJIgwiXIgIgpIgBAAIgGAqIgwCWIgmAAIhLkRIA6AAIAlCXIAEAwIACAAIAFgxIAwiWIAiAAIAvCXIAFAwIACAAIAGgxIAhiWIA2AAIhLERg");
	this.shape_116.setTransform(158.8,273.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_104,p:{x:180.8,y:294.4}},{t:this.shape_103}]},1).to({state:[{t:this.shape_105},{t:this.shape_104,p:{x:177.8,y:291.4}}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[]},76).wait(75));

	// Слой 19
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("Ak7EyIAApyIJ3AAIAAFAIAAAAIAAE3IgnAAIh5AAInXAAAE8E3IAAAK");
	this.shape_117.setTransform(177.5,292.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF6600").s().p("AACgEIAAACIgDAHg");
	this.shape_118.setTransform(172.5,294.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("ACQC8IgEABIAAjBIAqABIgBDAgAh5AiIAAAHIhAgRIgBjNIAGBOIgEAKIAEgIIAAgCIACgKIAVhFIABgBIAFAAIACAAIAFAZIAAgCIACAGIAVBGIAEABIABAFIABABIACAJIACAIIAGAWIAAADIAFAUIABgCIAEAKIAlADIAuipIABgBIABgGIAHAAIAAgBICYABIgnAWIgiAkIA0ABIivCzgAhXh5IABgBIgCAAIgBgEIAAgBIgQg3IACAAIAtABIgNAyIAAAAIABAAIgBAFIAAABIABgGIABAAIgGASIAAABIgEASIAAAAIgBABgAC3h3IABAAIgBABgAC4h3IADgDIgCADgAi6i1IAAgDIABAAIAAADgAimi5IABgDIADADg");
	this.shape_119.setTransform(190.8,304.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AERFKIADgPIAoAAIgoAAIh4AAIAIANIgEACInpAAIAAqTIKTAAIAAKTgAE8FFIAAgKgAE8E7IAAk3IABgBIABAAIACgDIgDADIgBAAIgGAAIAEgCIg1AAIg0gBIAigjIAngWIiZgBIAAABIgHAAIABgEIgxABIAAACIgtgBIAAgCIgDAAIgBgBIg2AAIgDgDIgBADIgUgBIABACIgBAAIAAADIABDNIA/ARIAAAOIBoAhIDJjPgACcE7InXAAgAE6E4IABjBIgqgBIAADCIAEgBgAk7E2IAApxIJ3AAIAAE+IAAk+Ip3AAgAgXg8IAAAAIAAgCIAEABIABAAIAAABIAAAAg");
	this.shape_120.setTransform(177.5,292);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("Ak7EyIAApyIJ3AAIAAFAIAAAAIAAE3IAAAKAE8E3IgnAAIh5AAInXAA");
	this.shape_121.setTransform(174.5,289.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("ACQC8IgDABIAAjAIAoABIgBC/gAh5AiIAAAIIhAgSIgBjNIAGBOIgDALIADgJIAAgCIABgJIAWhGIABAAIAFAAIABAAIAGAYIAAgCIABAGIAWBGIAEABIABAFIAAABIACAKIADAHIAFAWIAAADIAGAUIABgCIADAJIAmAFIAviqIAAAAIABgHIAIAAIAAgBICXABIgoAXIghAkIAzAAIiuCzgAhYh5IACAAIgCAAIgBgFIAAgBIgRg3IADAAIAtABIgNAyIAAABIABAAIgBAEIAAAAIABgEIAAAAIgEASIgBAAIgFASIAAAAIAAACgAC3h2IABAAIgBAAgAC4h2IADgDIgBADgAC4h2gAi6i1IAAgCIAAAAIAAACgAili5IAAgDIADADg");
	this.shape_122.setTransform(187.8,301.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AESFKIACgOIAoAAIgoAAIh4AAIAIAMIgEACInpAAIAAqTIKTAAIAAKTgAE8FFIAAgJgAE8E8IAAk4IABAAIACAAIABgDIgDADIgBAAIgFAAIACgDIg1AAIgzAAIAhgjIAogXIiYgBIAAABIgHAAIAAgDIgxABIAAABIgtgBIAAgBIgDAAIgBgCIg2AAIgDgDIAAADIgVgBIAAADIAAAAIAAACIABDNIA/ASIAAANIBoAhIDJjPgACcE8InXAAgAE5E4IABjAIgogBIAADBIADgBgAk7E2IAApyIJ3AAIAAFAIAAlAIp3AAgAgXg7IAAgBIAAgCIAEABIAAABIAAAAIABABg");
	this.shape_123.setTransform(174.5,289);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("Ak7EyIAApyIJ3AAIAAFAIAAAAIAAE3IAAAKAE8E3Ip3AA");
	this.shape_124.setTransform(171.5,286.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AlJFKIAAqTIKTAAIAAKTgAE8FFIAAgKIp3AAIJ3AAgAE8E7IAAk2IABgBIABAAIACgEIgDAEIgBAAIgFAAIADgDIg1AAIg1gBIAjgjIAngWIiZgBIAAABIgGAAIABgEIgzACIAAABIgsAAIgBgDIgCAAIgBgBIg2gBIgDgCIgBACIgUAAIAAACIAAAAIAAADIABDNIA/ASIAAANIBoAhIDJjOgAE6E4IAAjAIgpgCIAADCIAEgBgAk7E3IAApzIJ3AAIAAFAIAAlAIp3AAgAgYg7IAAgBIABgCIAEABIABAAIAAABIAAABg");
	this.shape_125.setTransform(171.5,286);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ACQC8IgEABIAAjBIApACIAAC/gAh5AjIAAAHIhAgSIgBjNIAGBOIgEALIAEgJIAAgCIACgKIAVhEIAAgBIAGAAIABAAIAHAYIAAgCIABAHIAVBFIAEACIABAEIABABIABAJIAIAfIAAACIAHAUIABgCIACAJIAlAEIAvipIABAAIACgHIAGAAIAAgBICYABIgoAWIgiAkIA1ABIivCzgAhYh5IACgBIgCAAIgBgEIAAAAIgRg3IADAAIAsAAIgMAyIAAAAIABAAIgBAFIAAABIABgGIAAAAIgFASIAAABIgEASIAAgBIgBADgAC3h2IABAAIgBABgAC4h2IADgEIgCAEgAC4h2gAi6i1IAAgDIAAAAIAAADgAimi6IABgCIADACg");
	this.shape_126.setTransform(184.8,298.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF6600").s().p("AgVA5QgMgjgIgkQgFgVAAgXIAkABIAEAdIACAAQADgOABgPIAvAAIghB0g");
	this.shape_127.setTransform(174.3,288.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AiaBIIAAixQABAXAEAVQAJAlALAiIAlACIAhh0IgvAAQgCAPgEAPIgBAAIgEgdIglgCIEuACIgDACIAFAAIAAABIAAgBIABAAIgBABIjIDOgACXhlIAEgDIgCADgACWhlg");
	this.shape_128.setTransform(185.1,293.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AlJFKIAAqTIKTAAIAAKTgAE8FFIAAgKIp3AAIJ3AAgAE8E7IAAk3IABgBIgBAAIgGAAIAEgCIkvgBIAACyIBoAhIDJjPgAk7E2IAApxIJ3AAIAAE+IAAk+Ip3AAgAE9ADIABAAIACgDgAE8AEg");
	this.shape_129.setTransform(168.5,283);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("Ak7EyIAApyIJ3AAIAAJ3IAAAKAE8E3Ip3AA");
	this.shape_130.setTransform(166.5,281.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AlJFKIAAqTIKTAAIAAKTgAE8FFIAAgJIp3AAIJ3AAgAE8E8IAAp3Ip3AAIAAJxIAApxIJ3AAg");
	this.shape_131.setTransform(166.5,281);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AlJFKIAAqTIKTAAIAAKTgAE8FFIAAgKIp3AAIJ3AAgAE8E7IAAp2Ip3AAIAAJyIAApyIJ3AAg");
	this.shape_132.setTransform(165,279.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AlJFKIAAqTIKTAAIAAKTgAE8FFIAAgKIp3AAIJ3AAgAE8E7IAAp3Ip3AAIAAJzIAApzIJ3AAg");
	this.shape_133.setTransform(163.5,278);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AlJFKIAAqTIKTAAIAAKTgAE8FFIAAgJIp3AAIJ3AAgAE8E8IAAp4Ip3AAIAAJyIAApyIJ3AAg");
	this.shape_134.setTransform(161,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:172.5,y:294.4}},{t:this.shape_117}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_118,p:{x:169.5,y:291.4}},{t:this.shape_121}]},1).to({state:[{t:this.shape_126},{t:this.shape_118,p:{x:166.5,y:288.4}},{t:this.shape_125},{t:this.shape_124,p:{x:171.5,y:286.4}}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_124,p:{x:168.5,y:283.4}}]},1).to({state:[{t:this.shape_131,p:{x:166.5,y:281}},{t:this.shape_130,p:{x:166.5,y:281.4}}]},1).to({state:[{t:this.shape_132},{t:this.shape_130,p:{x:165,y:279.9}}]},1).to({state:[{t:this.shape_132},{t:this.shape_130,p:{x:165,y:279.9}}]},1).to({state:[{t:this.shape_133,p:{x:163.5,y:278}},{t:this.shape_130,p:{x:163.5,y:278.4}}]},1).to({state:[{t:this.shape_131,p:{x:162,y:276.5}},{t:this.shape_130,p:{x:162,y:276.9}}]},1).to({state:[{t:this.shape_133,p:{x:161.5,y:276}},{t:this.shape_130,p:{x:161.5,y:276.4}}]},1).to({state:[{t:this.shape_134},{t:this.shape_130,p:{x:161,y:275.9}}]},1).to({state:[]},76).wait(75));

	// Слой 5
	this.instance_15 = new lib.conts();
	this.instance_15.parent = this;
	this.instance_15.setTransform(303,400,1,1,0,0,0,52,52);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.c = new lib.cont();
	this.c.parent = this;
	this.c.setTransform(189.5,469.8,1,1,0,0,0,80.3,80.5);
	this.c._off = true;
	new cjs.ButtonHelper(this.c, 0, 1, 2, false, new lib.cont(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(41).to({_off:false},0).to({x:306,y:403,alpha:1},10).wait(9).to({rotation:7.2,x:290.5,y:419.2},2).to({regX:52.1,regY:52.1,rotation:17.2,x:264.7,y:438.9},2).to({regX:52.3,rotation:21.9,x:253.7,y:445.8},2).to({regX:52.2,regY:52,rotation:29.4,x:221.5,y:457.8},2).wait(1).to({regX:52.3,regY:52.1,rotation:37.3,x:209.5,y:461.9},0).wait(1).to({rotation:40,x:196.6,y:463},0).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.c).wait(71).to({_off:false},0).wait(16).to({y:571.8},19).to({alpha:0},55).wait(1));

	// Слой 3
	this.instance_16 = new lib.portf();
	this.instance_16.parent = this;
	this.instance_16.setTransform(64.5,193.5,1,1,0,0,0,55.5,58.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.portf(), 3);

	this.d111 = new lib.d111();
	this.d111.parent = this;
	this.d111.setTransform(175.9,103.1,1,1,37.7,0,0,48.1,17.1);
	new cjs.ButtonHelper(this.d111, 0, 1, 2, false, new lib.d111(), 3);

	this.instance_17 = new lib.index();
	this.instance_17.parent = this;
	this.instance_17.setTransform(130,247);

	this.instance_18 = new lib.index1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(130,247);

	this.instance_19 = new lib.Анимация46("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(177.1,138);
	this.instance_19._off = true;

	this.instance_20 = new lib.Анимация47("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(177.1,39);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},31).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.d111,p:{regY:17.1,rotation:37.7,x:175.9,y:103.1}}]},1).to({state:[{t:this.d111,p:{regY:16.9,rotation:45,x:201.7,y:105}}]},1).to({state:[{t:this.d111,p:{regY:16.9,rotation:45,x:201.7,y:105}}]},1).to({state:[{t:this.d111,p:{regY:16.9,rotation:45,x:201.7,y:105}},{t:this.instance_18},{t:this.instance_17}]},15).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},19).to({state:[{t:this.instance_20}]},55).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(31).to({_off:false},0).to({x:60.5,y:189.5,alpha:1},10).wait(19).to({regY:58.6,rotation:7.2,x:75.2,y:175.3},2).to({regX:55.6,rotation:17.2,x:98.5,y:158.9},2).to({regX:55.7,rotation:25.9,x:120.9,y:148.3},2).to({regX:55.6,rotation:34.9,x:145.2,y:143},2).to({_off:true,regX:48.1,regY:17.1,rotation:37.7,x:175.9,y:103.1},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(87).to({_off:false},0).to({_off:true,y:39},19).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(87).to({_off:false},19).to({alpha:0},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 370,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;