function changeContextToBird() {
    let contextFrame = parent.frames["context"];
    if (contextFrame && contextFrame.document) {
      let birdSection = contextFrame.document.getElementById("birdSection");
      let animalSection = contextFrame.document.getElementById("animalSection");
      let fishSection = contextFrame.document.getElementById("fishSection");
  
      if (birdSection.style.display === "none" || birdSection.style.display === "") {
        birdSection.style.display = "block";
        animalSection.style.display = "none";
        fishSection.style.display = "none";
      } else {
        birdSection.style.display = "none";
      }
    }
  }
  
  function changeContextToAnimal() {
    let contextFrame = parent.frames["context"];
    if (contextFrame && contextFrame.document) {
      let birdSection = contextFrame.document.getElementById("birdSection");
      let animalSection = contextFrame.document.getElementById("animalSection");
      let fishSection = contextFrame.document.getElementById("fishSection");
  
      if (animalSection.style.display === "none" || animalSection.style.display === "") {
        animalSection.style.display = "block";
        birdSection.style.display = "none";
        fishSection.style.display = "none";
      } else {
        animalSection.style.display = "none";
      }
    }
  }
  
  function changeContextToFish() {
    let contextFrame = parent.frames["context"];
    if (contextFrame && contextFrame.document) {
      let birdSection = contextFrame.document.getElementById("birdSection");
      let animalSection = contextFrame.document.getElementById("animalSection");
      let fishSection = contextFrame.document.getElementById("fishSection");
  
      if (fishSection.style.display === "none" || fishSection.style.display === "") {
        fishSection.style.display = "block";
        birdSection.style.display = "none";
        animalSection.style.display = "none";
      } else {
        fishSection.style.display = "none";
      }
    }
  }
  