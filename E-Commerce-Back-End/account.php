<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    echo "";
    die;
}
error_reporting(0);
$host = "localhost";
$user = "root";
$password = "";
$dbname = "e-commerce";
$id = '';
session_start();
$session = '';
$checksession = '';
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
        $checksession = $_GET['check'];
        $session = $_GET['session'];
        $id = $_GET['id'];
        $sql = $id ? "DELETE FROM `account` WHERE `id`=$id" : "SELECT * FROM account";
        break;
    case 'POST':
        $full_name = $_POST['full_name'];
        $balance = $_POST['balance'];
        $currency = $_POST['currency'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $role = "user";
        $sql = "INSERT INTO `account` (`full_name`,`balance`,`Currency`,`username`,`password`,`role`) VALUES ('{$full_name}','{$balance}','{$currency}','{$username}','{$password}','{$role}')";
        break;
}

// ? run SQL statement 


$result = mysqli_query($con, $sql);

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result), true);
    }
    if (!$id) echo ']';
    if ($id) {
        echo ("Deleted");
    }
    if ($session) {
        if (isset($_SESSION['username'])) {
            unset($_SESSION['username']);
        } else
            $_SESSION['username'] = $session;
    }
    if ($checksession) {
        if (isset($_SESSION['username'])) {
            echo ("true");
        } else
            echo ("false");
    }
} elseif ($method == 'POST') {
    echo ("Sucessfully Added");
} else {
    echo mysqli_affected_rows($con);
}
