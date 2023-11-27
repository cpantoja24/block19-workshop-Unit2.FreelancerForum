
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

//    const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

  render();

function render () {
    const freelancers = document.querySelector("#freelancers");

    const freelancerElements = freelancers.map((freelancer) => {
        const element =document.querySelector("li");
        element.classList.add(freelancer.name, freelancer.occupation, freelancer.price);

        return element;
    })

    freelancers.replaceChildren(...freelancerElements);
}

const body = document.querySelector("body");
const title = document.createElement("h1");
title.textContent = "Freelancer Forum";
body.append(title);

function addFreelancer() {
    [
        { name: "Carol", price: 70, occupation: "programmer" },
        { name: "Dr. Slice", price: 25, occupation: "gardener" },
        { name: "Dr. Pressure", price: 51, occupation: "programmer" },
        { name: "Prof. Possibility", price: 43, occupation: "teacher" },
        { name: "Prof. Prism", price: 81, occupation: "teacher" },
        { name: "Dr. Impulse", price: 43, occupation: "teacher" },
        { name: "Prof. Spark", price: 76, occupation: "programmer" },
        { name: "Dr. Wire", price: 47, occupation: "teacher" },
        { name: "Prof. Goose", price: 72, occupation: "driver" },
    ]
}

