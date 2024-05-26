const ckAll = document.querySelector("#selectAll");
const ckArr =  document.querySelectorAll(".ck")
ckAll.addEventListener("click",() => {
  ckArr.forEach(ck => {
    ck.checked = ckAll.checked;
  })
})

// function selectCheckboxes(){
//   const checkboxArr =  document.querySelectorAll("main>table>tbody input[type=checkbox]")
//   console.log("checkboxArr : ", checkboxArr);
//   let str ="";
//   for(let i = 0; i<checkboxArr.length;i++){
//     checkboxArr[i].checked = true;
//   }


// }

let str ="";
function deleteUser(){
  const checkboxArr = document.querySelectorAll(".ck");
	console.log("checkboxArr : " , checkboxArr)
  let str ="";
	for(let i =0; i<checkboxArr.length; i++){
		if(checkboxArr[i].checked){
			//잘선택됐나 확인
			console.log(checkboxArr[i].value);
			//쿼리스트링만들어 str에 담는 과정
			str += "no="+checkboxArr[i].value;
			str += "&";
	}
	//	console.log(checkboxArr[i].checked) ;
	}
	// 경로로 보내기(임시주소)// location.href="http://127.0.0.1:8888/app/admin/stayregister/approve"+str;
	

}