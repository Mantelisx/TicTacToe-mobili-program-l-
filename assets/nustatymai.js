
    function storeColorInSession(color) {
// Store the color in session
sessionStorage.setItem("bgColor", color);
}



function applyBackgroundColor() {
const bgColor = sessionStorage.getItem("bgColor");
document.body.style.backgroundColor = bgColor;
}


function changeBackground(color) {
   document.body.style.background = color;
}

function changeBackgroundGradient() {

//    document.body.style.background = "linear-gradient(135deg, #8052ec, #d161ff)";

    // Create a new <style> element
    const styleElement = document.createElement("style");

    // Define your gradient CSS rule
    const gradientRule = `
        html, body {
            height: 100%;
            margin: 0;
        }
        body {
            background: linear-gradient(135deg, #8052ec, #d161ff);
            background-attachment: fixed;
        }
        .area  {
                    background: linear-gradient(135deg, #8052ec, #d161ff);
                    background-attachment: fixed;
                }
    `;

    // Set the CSS text for the <style> element
    styleElement.textContent = gradientRule;

//    sessionStorage.setItem("stilius", gradientRule);
//    let stiliukas = sessionStorage.getItem("stilius");

    // Append the <style> element to the <head>
    document.head.appendChild(styleElement);
}


function changeBackgroundGradient2() {

//    document.body.style.background = "linear-gradient(135deg, #8052ec, #d161ff)";

    // Create a new <style> element
    const styleElement = document.createElement("style");

    // Define your gradient CSS rule
    const gradientRule = `
        html, body {
            height: 100%;
            margin: 0;
        }
        body {
            background: linear-gradient(135deg, #8052ec, #d161ff);
            background-attachment: fixed;
        }

.area{
    background: #4e54c8;
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    width: 100%;
    height:100vh;


}

    `;

    // Set the CSS text for the <style> element
    styleElement.textContent = gradientRule;
//    sessionStorage.setItem("stilius", gradientRule);
    // Append the <style> element to the <head>
    document.head.appendChild(styleElement);
}


function myFunction() {

//storeColorInSession("#3CB9C4");
//applyBackgroundColor();
changeBackgroundGradient()

}

function myFunction2() {

//storeColorInSession("#3CB9C4");
//applyBackgroundColor();
changeBackgroundGradient2()

}



        function toggleTheme(stylesheet) {
            const theme = document.getElementById('theme');
            theme.setAttribute('href', stylesheet);

//            sessionStorage.setItem("tema", stylesheet);
//            let tema1 = sessionStorage.getItem("tema");
        }





    function showPage(id) {
        // Hide all pages
//        preventDefault();
        var pages = document.getElementsByClassName('page');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none';
        }

        // Show the selected page
        document.getElementById(id).style.display = 'block';
    }


//        window.onload = function() {
////            document.head.appendChild(sessionStorage.getItem("stilius"));
////            toggleTheme(sessionStorage.getItem("tema"));
//
//            var css = sessionStorage.getItem("stilius");
//
//            // Create a new style element
//            var styleElement = document.createElement('style');
//
//            // Set the style element's content to the stored CSS
//            styleElement.textContent = css;
//
//            // Append the style element to the head of the document
//            document.head.appendChild(styleElement);
//
//
//
//
//
//        }


function showListItem(liId) {
    const listItem = document.getElementById(liId);
    if (listItem) {
        listItem.style.display = 'block'; // You can adjust this value (e.g., 'inline', 'flex', etc.)
    } else {
        console.error(`List item with ID "${liId}" not found.`);
    }
}
function hideListItem(liId) {
    const listItem = document.getElementById(liId);
    if (listItem) {
        listItem.style.display = 'none';
    } else {
        console.error(`List item with ID "${liId}" not found.`);
    }
}