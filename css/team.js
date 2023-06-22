document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn_open").addEventListener("click", function (e) {
    let classList = document.querySelector(".text-block").classList; // 더보기 프레임의 클래스 정보 얻기
    let contentHeight = document.querySelector(
      ".detailInfo > .text-block"
    ).offsetHeight; //Height of contents
    console.log(classList);
    console.log(contentHeight);

    if (classList.contains("text-block")) {
      classList.remove("text-block");
      if (contentHeight > 100) {
        classList.add("text-block2");
      } else {
        document.querySelector(".btn_open").classList.add("hide");
      }
    }
    console.log(classList);
    //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
    if (classList.contains("text-block2")) {
      e.target.classList.add("hide");
      document.querySelector(".btn_close").classList.remove("hide");
    }
  });

  
});

//컨텐츠 로딩 완료 후 높이 기준으로 클래스 재처리
// window.addEventListener("load", function () {
//   let contentHeight = document.querySelector(
//     ".detailinfo > .text-block"
//   ).offsetHeight; //컨텐츠 높이 얻기
//   if (contentHeight <= 100) {
//     document.querySelector(".detailinfo").classList.remove("text-block"); // 초기값보다 작으면 전체 컨텐츠 표시
//     document.querySelector(".btn_open").classList.add("hide"); // 버튼 감춤
//   }
// });
