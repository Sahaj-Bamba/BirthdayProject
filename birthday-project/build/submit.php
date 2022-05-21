<?php

include 'connection.php';

	$name = mysqli_real_escape_string($con, $_POST["name"]);
	$email = mysqli_real_escape_string($con, $_POST["email"]);
	$secret = mysqli_real_escape_string($con, $_POST["secret"]);

	$result = $con->query("INSERT INTO `details`(`username`, `email`, `secret`) VALUES ('$name','$email','$secret')");

?>

