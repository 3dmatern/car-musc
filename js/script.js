$(document).ready(function(){
  $('.gallery__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });
  $('.info__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });

  // обработка формы

  $("#form__head").submit(function(event) {
    event.preventDefault();

    let data = $("#form__head").serializeArray();
        
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'), //this - получение данных! В данном случае из attr(Атрибута) action т.е. в данном случае путь к файлу
        data: data, // Получение отправляемых данных из всей формы
        success: function(msg){
            // console.log(msg);
            if(msg == 'OK') {
                result = 'Данные отправлены! Мы скоро Вам перезвоним!';
                event.target.reset(); //очищает input полсе отправки
            } else {
                result = msg;
            }
            $(".form_info").html(result);
        },
        error: function(){ //данная ошибка выводится, если мы в скрипте указали например неверный путь к php обработчику
            $(".form_info").html('Ошибка отпраки данных!');
        }
    })
    return false;
  })
});