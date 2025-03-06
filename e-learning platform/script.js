document.addEventListener("DOMContentLoaded", function () {
    let progress = localStorage.getItem("courseProgress") || 0;
    document.getElementById("progress-bar").style.width = progress + "%";
});

function updateProgress() {
    let progressBar = document.getElementById("progress-bar");
    let currentProgress = parseInt(progressBar.style.width) || 0;
    if (currentProgress < 100) {
        let newProgress = currentProgress + 20; 
        progressBar.style.width = newProgress + "%";
        localStorage.setItem("courseProgress", newProgress);
    } else {
        alert("Course Completed!");
    }
}
window.onload = function () {
    let progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        let progress = localStorage.getItem("courseProgress") || 0;
        progressBar.style.width = progress + "%";
    }

    // Attach event listener to the button
    let completeBtn = document.getElementById("complete-btn");
    if (completeBtn) {
        completeBtn.addEventListener("click", updateProgress);
    }
};

function updateProgress() {
    let progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        let currentProgress = parseInt(progressBar.style.width) || 0;
        if (currentProgress < 100) {
            let newProgress = currentProgress + 20;
            progressBar.style.width = newProgress + "%";
            localStorage.setItem("courseProgress", newProgress);
        } else {
            alert("Course Completed!");
        }
    }
}
window.onload = function () {
    let courseTitle = document.getElementById("course-title");
    let courseDesc = document.getElementById("course-description");
    let courseVideo = document.getElementById("course-video");

    // Example courses and videos
    let courses = {
        "web-development": {
            title: "Web Development Basics",
            description: "Learn HTML, CSS, and JavaScript from scratch.",
            video: "https://www.youtube.com/embed/mU6anWqZJcc"
        },
        "python": {
            title: "Python for Beginners",
            description: "Start coding in Python with hands-on projects.",
            video: "https://www.youtube.com/embed/rfscVS0vtbw"
        },
        "cybersecurity": {
            title: "Cybersecurity Fundamentals",
            description: "Protect yourself from digital threats.",
            video: "https://www.youtube.com/embed/3Kq1MIfTWCE"
        },
        "ai": {
            title: "Introduction to AI",
            description: "Explore artificial intelligence and machine learning.",
            video: "https://www.youtube.com/embed/JMUxmLyrhSk"
        },
        "data-science": {
            title: "Data Science with Python",
            description: "Learn how to analyze data using Python.",
            video: "https://www.youtube.com/embed/X3paOmcrTjQ"
        },
        "digital-marketing": {
            title: "Digital Marketing Masterclass",
            description: "Become a pro at online marketing.",
            video: "https://www.youtube.com/embed/nU-IIXBWlS4"
        }
    };

    // Get course from URL (example: course-details.html?course=python)
    let params = new URLSearchParams(window.location.search);
    let courseKey = params.get("course");

    // Update course details if course exists
    if (courseKey && courses[courseKey]) {
        let course = courses[courseKey];
        courseTitle.textContent = course.title;
        courseDesc.textContent = course.description;
        courseVideo.src = course.video;
    }

    // Load progress bar
    let progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        let progress = localStorage.getItem("courseProgress") || 0;
        progressBar.style.width = progress + "%";
    }

    // Add event listener to the button
    let completeBtn = document.getElementById("complete-btn");
    if (completeBtn) {
        completeBtn.addEventListener("click", updateProgress);
    }
};

function updateProgress() {
    let progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        let currentProgress = parseInt(progressBar.style.width) || 0;
        if (currentProgress < 100) {
            let newProgress = currentProgress + 20;
            progressBar.style.width = newProgress + "%";
            localStorage.setItem("courseProgress", newProgress);
        } else {
            alert("Course Completed!");
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        let progress = bar.getAttribute("data-progress");
        bar.style.width = progress;
    });
});

