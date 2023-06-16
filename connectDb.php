<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$conn = new mysqli('localhost', 'root', '', 'registration');

if ($conn->connect_error) {
    die('Connection failed...' . $conn->connect_error);
}
else {
    $stmt = $conn->prepare("INSERT INTO form1 (firstname, lastname) VALUES (?, ?)");

    if ($stmt === false) {
        die('Error in preparing statement: ' . $conn->error);
    }

    $stmt->bind_param("ss", $firstname, $lastname);

    if ($stmt->execute()) {
        echo "Registration Successful...";
    } else {
        echo "Error in executing statement: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
