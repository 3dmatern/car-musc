<?php
    use PHPMailer\PHPMailer\PHPMailer;

    require_once './PHPMailer.php';

    if (isset($_POST['name']) && isset($_POST['tel']) && isset($_POST['msg'])) {
        $name = trim(htmlspecialchars($_POST['name']));
        $tel = trim(htmlspecialchars($_POST['tel']));
        $msg = trim(htmlspecialchars($_POST['msg']));

        $name == '' ? die('Введите имя!') : null;
        $tel == '' || !is_numeric($tel) ? die('Введите корректный номер!') : null;
    }

    $mail = new PHPMailer();
    $mail -> CharSet = 'utf-8';
    $mail -> setFrom('from@yandex.by', 'Admin');
    $mail -> addAddress('whom@yandex.by', 'User');
    $mail -> addReplyTo('infoFrom@yandex.by', 'Moder');
    $mail -> isHTML(true);

    $mail -> Subject = 'Новая заявка!';
    $mail -> Body = "Имя: $name, Номер: $tel <br/> Сообщение: $msg";
    $mail -> AltBody = "Имя: $name, Номер: $tel Сообщение: $msg";

    if ($mail -> send()) {
        die('OK');
    } else {
        return false;
    }
?>
