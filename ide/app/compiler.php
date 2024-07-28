<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $language = $_POST['language'];
    $code = $_POST['code'];

    // Process the code based on the language selected
    if ($language == "python") {
        $output = "Executed Python code: " . $code;
    } elseif ($language == "c" || $language == "cpp") {
        $output = "Executed C/C++ code: " . $code;
    } elseif ($language == "node") {
        $output = "Executed Node.js code: " . $code;
    } else {
        $output = "Unsupported language!";
    }

    echo $output;
} else {
    echo "Invalid request method!";
}
?>
