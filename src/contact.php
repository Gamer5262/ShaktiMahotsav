<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

$db_host = 'localhost';
$db_user = 'root';
$db_pass = 'pmk';
$db_name = 'Navratri';

$data = json_decode(file_get_contents("php://input"), true);
echo $data;
echo $_POST;

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$conn) {
  die('Database connection failed!');
}
else{
  echo "Success";
}

$name = mysqli_real_escape_string($conn, $data['name']);
$message = mysqli_real_escape_string($conn, $data['message']);
$phone = mysqli_real_escape_string($conn, $data['phone']);

if (empty($name) || empty($phone) || empty($message)) {
  echo 'Please fill in all fields.';
} else {
  $query = "INSERT INTO feedback (name,phone,message) VALUES ('$name','$phone','$message')";
  echo $query;

  if (mysqli_query($conn, $query)) {
    echo 'Form submitted successfully!';
  } else {
    echo 'Error submitting form.';
  }
}

mysqli_close($conn);

?>
