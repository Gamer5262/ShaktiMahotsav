<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

$db_host = 'localhost';
$db_user = 'root';
$db_pass = 'pmk';
$db_name = 'Navratri';

$data = json_decode(file_get_contents("php://input"), true);

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$conn) {
  die('Database connection failed!');
}
else{
  echo "Success";
}

$name = mysqli_real_escape_string($conn, $data['name']);
$email = mysqli_real_escape_string($conn, $data['email']);
$phone = mysqli_real_escape_string($conn, $data['phoneNumber']);
$roll = mysqli_real_escape_string($conn, $data['rollNumber']);

if (empty($name) || empty($email) || empty($phone) || empty($roll)) {
  echo 'Please fill in all fields.';
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo 'Invalid email format.';
} else {
  $query = "INSERT INTO responses (name,email,phone,roll) VALUES ('$name','$email','$phone','$roll')";
  echo $query;

  if (mysqli_query($conn, $query)) {
    echo 'Form submitted successfully!';
  } else {
    echo 'Error submitting form.';
  }
}

mysqli_close($conn);

?>
