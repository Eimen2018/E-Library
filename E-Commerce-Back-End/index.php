<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    echo "";
    die;
}
$host = "localhost";
$user = "root";
$password = "";
$dbname = "e-commerce";
$id = '';
// $conn = new mysqli($servername, $username, $password, $database);

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully yayaya";
// echo "the post after this";
$con = mysqli_connect($host, $user, $password, $dbname);
// echo file_get_contents('php://input');



$method = $_SERVER['REQUEST_METHOD'];
// $request = explode('/', trim($_SERVER['PATH_INFO'], '/'));


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':
        // $id = $_GET['s'];
        $sql = "SELECT * FROM product" . ($id ? " where id=$id" : "");
        $sql2 = "SELECT * FROM account";
        break;
    case 'POST':
        $title = $_POST['title'];
        $catagory = $_POST['catagory'];
        $type = $_POST['type'];
        $info = $_POST['info'];
        $price = $_POST['price'];
        $author = $_POST['author'];
        // $img = $_FILES['img']['name'];


        $target_dir = "img/";
        $target_file = $target_dir . basename($_FILES['img']['name']);
        $image_tmp = $_FILES["img"]["tmp_name"];
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        $post_image = "img/$type" . "_image/" . $_FILES["img"]["name"];
        move_uploaded_file($image_tmp, "C:/Users/orion/Documents/e-commerce/public/$post_image");

        $sql = "INSERT INTO `product` (`title`,`catagory`,`info`,`img`,`price`,`type`,`author`) VALUES ('{$title}','{$catagory}','{$info}','{$post_image}','{$price}','{$type}','{$author}')";
        break;
}

// ? run SQL statement 


$result = mysqli_query($con, $sql);

if ($method == 'GET') {
    $d = $_GET['s'];
    if ($d == 1) echo '[';
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result), true);
    }
    if ($d == 1) echo ']';
    // if ($d==2) echo '[';
    // for ($i = 0; $i < mysqli_num_rows($result2); $i++) {
    //     echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result2),true);
    // }
    // if ($d==2) echo']';
} elseif ($method == 'POST') {
    echo ($type);
} else {
    echo mysqli_affected_rows($con);
}
