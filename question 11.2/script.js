// function changeContextToBird() {
//     let contextFrame = parent.frames["context"]; // Get "context" frame
//     if (contextFrame) {
//         contextFrame.document.getElementById("bird").innerText = "Bird";
//         contextFrame.document.getElementById("d").innerText = `<button>DHAPHEY</button>`;
//     }
// }
function changeContextToBird() {
    let contextFrame = parent.frames["context"]; // Get the "context" frame
    if (contextFrame) {
        let birdElement = contextFrame.document.getElementById("bird");
        let dElement = contextFrame.document.getElementById("d");

        if (birdElement) {
            birdElement.innerText = "Bird";  // Change text to "Bird"
        }

        if (dElement) {
            dElement.innerHTML = '<button onclick="alert(\'DHAPHEY Clicked!\')">DHAPHEY</button>'; // Insert button correctly
        }
    }
}

function changeContextToAnimal() {
    let contextFrame = parent.frames["context"]; 
    if (contextFrame) {
        contextFrame.document.getElementById("bird").innerText = "Animal";
    }
}

function changeContextToFish() {
    let contextFrame = parent.frames["context"]; 
    if (contextFrame) {
        contextFrame.document.getElementById("bird").innerText = "Fish";
    }
}
