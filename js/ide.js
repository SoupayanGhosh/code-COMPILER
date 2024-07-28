let editor;

window.onload = function() {
    console.log("Editor initialized");
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chaos");
    editor.session.setMode("ace/mode/c_cpp");
}

function changeLanguage() {
    let language = $("#languages").val();
    console.log("Language changed to: " + language);

    if (language == 'c' || language == 'cpp') editor.session.setMode("ace/mode/c_cpp");
    else if (language == 'python') editor.session.setMode("ace/mode/python");
    else if (language == 'node') editor.session.setMode("ace/mode/javascript");
}

function executeCode() {
    console.log("Executing code");

    $.ajax({
        url: "/ide/app/compiler.php",
        method: "POST",
        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },
        success: function(response) {
            console.log("Execution response: ", response);
            $(".output").text(response);
        },
        error: function(xhr, status, error) {
            console.error("AJAX Error: ", status, error);
            console.error("Response Text: ", xhr.responseText);
            $(".output").text("Error executing code. Please check the console for more details.");
        }
    });
}
