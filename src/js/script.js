$(function () {
    $(".sidebar-link").click(function () {
        $(".sidebar-link").removeClass("is-active");
        $(this).addClass("is-active");
        $($(".sidebar-link").find('path')).attr("fill", "#8f8f8f")
        $($(this).find('path')[0]).attr("fill", "#fff")
    });
    $(".user-settings").click(function () {
        window.location.href = 'user.html';
    });
    $(".about_us").click(function () {
        window.location.href = 'about_us.html';
    })
});

$(window)
    .resize(function () {
        if ($(window).width() > 1090) {
            $(".sidebar").removeClass("collapse");
        } else {
            $(".sidebar").addClass("collapse");
        }
    })
    .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
    v.addEventListener("mouseover", () => {
        const video = v.querySelector("video");
        video.play();
    });
    v.addEventListener("mouseleave", () => {
        const video = v.querySelector("video");
        video.pause();
    });
});

$(function () {
    $(".logo, .logo-expand, .home-nav").on("click", function (e) {
        $(".main-container").removeClass("video-show");
        $(".main-container").removeClass("music-show");
        // 添加了show之后，会吧main中的类关闭
        $(".main-container").scrollTop(0);
    });
    $(".video_nav, .video").on("click", function (e) {
        $(".main-container").removeClass("music-show");
        $(".main-container").addClass("video-show");
        $(".main-container").scrollTop(0);
        // 清除所有选项的is-active，并只向添加.video_nav添加
        $(".sidebar-link").removeClass("is-active");
        $(".video_nav").addClass("is-active");
    });
    $(".music_nav").on("click", function (e) {
        $(".main-container").removeClass("video-show");
        $(".main-container").addClass("music-show");
        $(".main-container").scrollTop(0);
        // 清除所有选项的is-active，并只向添加.video_nav添加
        $(".sidebar-link").removeClass("is-active");
        $(".music_nav").addClass("is-active");
    });

    $(".video").click(function () {
        var source = $(this).find("source").attr("src");
        var title = $(this).find(".video-name").text();
        var person = $(this).find(".video-by").text();
        var img = $(this).find(".author-img").attr("src");
        $(".video-stream video").stop();
        $(".video-stream source").attr("src", source);
        $(".video-stream video").load();
        $(".video-p-title").text(title);
        $(".video-p-name").text(person);
        $(".video-detail .author-img").attr("src", img);
    });
});