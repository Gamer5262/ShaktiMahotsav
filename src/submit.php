<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

$db_host = 'shaktimahotsav';
$db_user = 'shakthimahotsav';
$db_pass = 'Sh@kthi@ch#2302';
$db_name = 'navratri';

$data = json_decode(file_get_contents("php://input"), true);

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$conn) {
  die('Database connection failed!');
}
else{
  echo "Success";
}

print_r($data);
$name = mysqli_real_escape_string($conn, $data['name']);
$email = mysqli_real_escape_string($conn, $data['email']);
$phone = mysqli_real_escape_string($conn, $data['phoneNumber']);
$roll = mysqli_real_escape_string($conn, $data['rollNumber']);
$day1 = mysqli_real_escape_string($conn, $data['day1']);
$day2 = mysqli_real_escape_string($conn, $data['day2']);
$day3 = mysqli_real_escape_string($conn, $data['day3']);
$day4 = mysqli_real_escape_string($conn, $data['day4']);
$day5 = mysqli_real_escape_string($conn, $data['day5']);
$day6 = mysqli_real_escape_string($conn, $data['day6']);
$day7 = mysqli_real_escape_string($conn, $data['day7']);
$day8 = mysqli_real_escape_string($conn, $data['day8']);
$day9 = mysqli_real_escape_string($conn, $data['day9']);
$day10 = mysqli_real_escape_string($conn, $data['day10']);


if (empty($name) || empty($email) || empty($phone) || empty($roll)) {
  echo 'Please fill in all fields.';
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo 'Invalid email format.';
} else {
  $query = "INSERT INTO responses (name,email,phone,roll,day1,day2,day3,day4,day5,day6,day7,day8,day9,day10) 
  VALUES ('$name','$email','$phone','$roll','$day1','$day2','$day3','$day4','$day5','$day6','$day7','$day8','$day9','$day10')";
  echo $query;

  if (mysqli_query($conn, $query)) {
    echo 'Form submitted successfully!';
  } else {
    echo 'Error submitting form.';
  }
}

mysqli_close($conn);

?>
