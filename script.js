// 리스트 선택 or 삭제
const nav = document.querySelector(".list");

function clickHandler(e) {
  const clickTarget = e.path;
  // console.log(clickTarget[0]); // 실 클릭 위치내용
  // console.log(clickTarget[1]); // 해당 리스트 내용 [0]번 상위

  const clickTarget_id = clickTarget[1].getAttribute("id");
  // console.log("id:" + clickTarget_id); // id

  const clickTarget_path = clickTarget[0].getAttribute("class");
  // console.log(clickTarget_path); // 클릭내용

  switch (clickTarget_path) {
    case "site_name":
      // console.log("사이트이름클릭->링크이동");
      const url_to = clickTarget[1].querySelector(".url").innerText;
      document.querySelector("#url").src = url_to;
      break;
    case "btn_remove":
      // console.log("삭제클릭->사이트삭제");
      // console.log(clickTarget_id);
      const nowList = document.querySelector(".list");
      // console.log(nowList);
      const deldata = clickTarget[1];
      // console.log(deldata);
      nowList.removeChild(deldata);
      break;
    default:
  }
}

nav.addEventListener("click", clickHandler);

//========================================================
// 신규데이터

function getAddData() {
  // 입력 데이터 정의
  const addname = document.querySelector("#addname").value;
  const addurl = document.querySelector("#addurl").value;

  // li 테그 생성
  const additem = document.createElement("li");
  additem.setAttribute("class", "item");
  additem.setAttribute("id", addname);

  // 코드 작성
  additem.innerHTML =
    '<button class="btn_remove">DEL</button>' + '<span class="site_name">' + addname + "</span>" + '<span class="url">' + addurl + "</span>";
  // console.log(additem);

  const addPosition = document.querySelector("ul");
  // console.log(addPosition);
  addPosition.appendChild(additem);

  document.querySelector("#addname").value = "";
  document.querySelector("#addurl").value = "";
}

const btn_add = document.querySelector(".btn_add");
btn_add.addEventListener("click", getAddData);
