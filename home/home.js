// 스크롤을 100px 이상 내리면 top 버튼 표시
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// top 버튼 클릭 시 상단으로 스크롤
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//네비게이션바 선택한 창 색깔로 표시
$(document).ready(function() {
  $('nav ul li a').click(function() {
      // 클릭한 링크에만 active 클래스 추가
      $('nav ul li a').removeClass('active');
      $(this).addClass('active');
  });
});







//가격조회 드래그 화면에 숫자 보이기
const priceRange = document.querySelector('#price-level');
const priceValue = document.querySelector('#price-value');

priceRange.addEventListener('input', function() {
    priceValue.textContent = priceRange.value;
});




//체크인&체크아웃 날짜 유효성검사

document.getElementById('modalForm').addEventListener('submit',function(event){
  var checkInDate = new Date(documentn.getElementById('checkInDate').value);
  var checkOutDate = new Date(documentn.getElementById('checkOutDate').value);

if(checkInDate&&checkOutDate){
  if(checkInDate>checkOutDate){
    document.getElementById('dateError').textContent = '체크아웃 날짜는 체크인 날짜보다 빠를 수 없습니다.';
    event.preventDefault();//제출방지
  }else{
    document.getElementById('dateError').textContent='';
  }
}

});

//모달창띄우기

const modal = document.querySelector('.modal');
let SchBox = document.querySelector('.SchBox');
const modalClose = document.getElementById('modalClose')

//검색창 클릭하면 모달띄우기
SchBox.addEventListener('click',()=>{    
modal.style.display ='block';
});
//확인버튼 누르면 모달 닫기
modalClose.addEventListener('click',()=>{
  modal.style.display='none';
})