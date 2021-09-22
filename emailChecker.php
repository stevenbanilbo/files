<?php

$email= $_POST['email'];


if (filter_var($email, FILTER_VALIDATE_EMAIL) !== false) {
  echo("email validated");
} else {
  echo("email is not valid");
}
?> 
