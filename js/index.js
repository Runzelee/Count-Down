function getQueryVariable(variable) {
	let query = window.location.search.substring(1);
	let vars = query.split("&");
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return (false);
}

window.addEventListener("load", () => {
	const day = document.querySelector(".day");
	const hour = document.querySelector(".hour");
	const minute = document.querySelector(".minute");
	const second = document.querySelector(".second");

	//支持系统暗色
	let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (decodeURI(getQueryVariable("mode")) == "light") change(2);
	else {
		if (prefersDarkMode) change(1);
		else change(2);
	};

	const getTime = () => {
		var EndTime = new Date("2022/07/11 09:00");
		var name = "2022年中考";



		if (getQueryVariable("date") == false || getQueryVariable("time") == false || getQueryVariable("name") == false) EndTime = new Date("2022/07/11 09:00"), name = "2022年上海市初中学业水平考试";
		else EndTime = new Date(getQueryVariable("date") + " " + getQueryVariable("time")), name = decodeURI(getQueryVariable("name"));

		document.getElementById("name").innerHTML = "距离" + decodeURI(name);
		document.getElementById("title").innerHTML = "2022中考倒计时";
		var NowTime = new Date();
		var t = EndTime.getTime() - NowTime.getTime();

		if (t < 0) EndTime = new Date("2022/07/11 09:00"), name = "2022年上海市初中学业水平考试", t = EndTime.getTime() - NowTime.getTime();

		const days = Math.floor(t / 1000 / 60 / 60 / 24);


		day.innerHTML = days < 100 ? (days < 10 ? "00" + days : "0" + days) : days;

		const hours = Math.floor(t / 1000 / 60 / 60 % 24);

		hour.innerHTML = hours < 10 ? "0" + hours : hours;

		const minutes = Math.floor(t / 1000 / 60 % 60);
		minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;

		const seconds = Math.floor(t / 1000 % 60);
		second.innerHTML = seconds < 10 ? "0" + seconds : seconds;

		var pass = Math.floor(((NowTime.getTime() / 1000) + 28800) % 86400) / 864;
		pass = pass.toFixed(2);
		document.getElementById("progress").value = pass;
		document.querySelector(".data>span").innerHTML = pass + " % ";
	};
	getTime();

	let timer = setInterval(() => {
		getTime();
	}, 1000);


	if (!ifUsingTauri()) {
		document.getElementById("downicon").style.display = "unset";
		document.getElementById("webghicon").style.display = "unset";
	} else {
		document.getElementById("webicon").style.display = "unset";
		document.getElementById("taurighicon").style.display = "unset";
	}

});


//系统明暗切换监听
let listeners = {
	dark: (mediaQueryList) => {
		if (mediaQueryList.matches) {
			change(1);
		}
	},
	light: (mediaQueryList) => {
		if (mediaQueryList.matches) {
			change(2);
		}
	}
}

window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark);
window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light);

function change(a) {
	var css = document.getElementById("css");
	if (a == 1) {
		css.setAttribute("href", "css/night.css");
	}
	if (a == 2) {
		css.setAttribute("href", "css/light.css");
	}
}
function jump() {
	window.location.href = "https://github.com/Runzelee/Count-down";
}

//测试是否使用tauri
function ifUsingTauri() {
	try {
		window.__TAURI__.app.getVersion().then((ver) =>
			document.getElementById("ver").innerHTML = "桌面版 v" + ver
		);
		return true;
	} catch (e) {
		//console.log("You are using browser.");
		return false;
	}
}