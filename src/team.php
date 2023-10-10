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
$check1 = mysqli_real_escape_string($conn, $data['Check1']);
$check2 = mysqli_real_escape_string($conn, $data['Check2']);
$check3 = mysqli_real_escape_string($conn, $data['Check3']);
$check4 = mysqli_real_escape_string($conn, $data['Check4']);
$check5 = mysqli_real_escape_string($conn, $data['Check5']);


if (empty($name) || empty($email) || empty($phone) || empty($roll)) {
  echo 'Please fill in all fields.';
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo 'Invalid email format.';
} else {
  $query = "INSERT INTO team (name,email,phone,roll,check1,check2,check3,check4,check5) 
  VALUES ('$name','$email','$phone','$roll','$check1','$check2','$check3','$check4','$check5')";
  echo $query;

  if (mysqli_query($conn, $query)) {
    echo 'Form submitted successfully!';
  } else {
    echo 'Error submitting form.';
  }
}

mysqli_close($conn);

?>
