const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSelections = document.querySelectorAll('.main-content');

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".active-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    // Sections Active class
    allSelections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other bottons
            secBtn.forEach(btn => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach(section => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })

})();
