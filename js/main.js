var slider = document.getElementById("myRange");
var outputPrice = document.querySelector(".price");
var outputViews = document.querySelector(".page-views");
var toggler = document.getElementById("toggle");

outputPrice.innerHTML = slider.value;
outputViews.innerHTML = slider.value;

slider.oninput = function () {
    let price = 8 + 4 * this.value;
    let views = 50 + 25 * this.value;

    if (toggler.classList.contains('checked')) {
        price *= 0.75;
    }

    outputPrice.innerHTML = `$ ${price}.00`;
    outputViews.innerHTML = `${views}K page views`;

    let sliderProgress = 100 * this.value / 4;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${sliderProgress}%, hsl(224, 65%, 95%) ${sliderProgress}%)`;
}

slider.oninput();

document.getElementById('toggle').addEventListener('change', () => {
    toggler.classList.toggle('checked');
    slider.oninput();
})