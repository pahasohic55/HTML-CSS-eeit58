// 第一個文字樣式 <link> 標籤
var linkTag1 = document.createElement('link');
linkTag1.rel = 'preconnect';
linkTag1.href = 'https://fonts.googleapis.com';

// 第二個文字樣式 <link> 標籤
var linkTag2 = document.createElement('link');
linkTag2.rel = 'preconnect';
linkTag2.href = 'https://fonts.gstatic.com';
linkTag2.crossOrigin = 'true';

// 第三個文字樣式 <link> 標籤
var linkTag3 = document.createElement('link');
linkTag3.rel = 'stylesheet';
linkTag3.href = 'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=BIZ+UDPGothic&family=Noto+Sans+HK:wght@300;500&display=swap';

// 第四個文字樣式 <link> 標籤
var linkTag4 = document.createElement('link');
linkTag4.rel = 'stylesheet';
linkTag4.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@500&family=Noto+Sans+JP:wght@700&family=Noto+Sans+TC:wght@900&display=swap';

// 將三個 <link> 標籤加入到 <head> 區域中
document.head.appendChild(linkTag1);
document.head.appendChild(linkTag2);
document.head.appendChild(linkTag3);
document.head.appendChild(linkTag4);

function readURL(input) {

    if (input.files && input.files[0]) {

        var imageTagID = input.getAttribute("targetID");

        var reader = new FileReader();

        reader.onload = function (e) {

            var img = document.getElementById(imageTagID);

            img.setAttribute("src", e.target.result)

        }

        reader.readAsDataURL(input.files[0]);

    }

}