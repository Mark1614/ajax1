let n = 1;

//使用AJAX加载CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //创建style标签
    const style = document.createElement("style");
    //填写style内容
    style.innerHTML = request.response;
    //插到头里面
    document.head.appendChild(style);
  };

  request.send();
};

//使用AJAX加载JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    console.log("加载成功");
    ////创建script标签
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };

  request.send();
};

//使用AJAX加载HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html"); //readyState=1
  request.onreadystatechange = () => {
    //加载完成但是不知道是成功还是失败
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建div
        const div = document.createElement("div");
        //填写div
        div.innerHTML = request.response;
        //将div插入到身体中
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send(); //readyState=2
};

//使用AJAX加载XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  request.send();
};
//使用AJAX加载JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      //将符合JSON语法的字符串转换成JS对应类型的数据
      const obj = JSON.parse(request.response);
      console.log(obj);
    }
  };
  request.send();
};
//分页
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  console.log(`${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
