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


