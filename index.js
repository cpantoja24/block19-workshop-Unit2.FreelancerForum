
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const moreFreelancers = [
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

const body = document.querySelector("body");

const title = document.createElement("h1");
title.textContent = "Freelancer Forum";
body.append(title);

const averagePrice = document.createElement("h2");
body.append(averagePrice);

const availableFreelancers = document.createElement("h3");
availableFreelancers.textContent ="Available Freelancers "
body.append(availableFreelancers);

let counter = 0;

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

function render () {
    const freelancerDetails = document.querySelector("#freelancers");

    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        // element.classList.add(freelancer.price);
        
        // const element = document.createElement("li");
        element.textContent = `${freelancer.name}, ${freelancer.occupation} ${freelancer.price}`

        return element;
    });

    freelancerDetails.replaceChildren(...freelancerElements);
}

function addFreelancer() {
        
    freelancers.push(moreFreelancers[counter]);
    counter++
    
    render();
    
    averagePrice.textContent =`The average starting price is $${averageStartingPrice()}`

    if (freelancers.length >= moreFreelancers.length +2) {
        clearInterval(addFreelancerIntervalId);
    }
}

function averageStartingPrice() {
    let sum = 0;
    for (let i=0; i<freelancers.length; i++) {
        sum += freelancers[i].price;
    }
    return sum/freelancers.length
}
