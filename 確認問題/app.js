$(function(){
  $('.box1').slideDown(function(){
  // 要素を上から下へスライドさせた後、
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    // 赤色の正方形を青色の長方形（幅200px、高さ100px）に変更
    }).slideUp();
    // 更にその後、下から上へスライドさせる
  });
});

// javascriptでは、引数の中に関数を入れることができる
// slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行することができるようになる
// slideDownの中のfunctionに、cssで色と大きさを変え、slideUp()をすることで、
// 要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更、
// 更にその後、下から上へスライドという動作を実現させることができる