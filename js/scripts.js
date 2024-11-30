document.addEventListener("DOMContentLoaded", () => {
    const grassTime = document.getElementById("grassTime");
    const grassTimeValue = document.getElementById("grassTimeValue");

    const sheepEnergy = document.getElementById("sheepEnergy");
    const sheepEnergyValue = document.getElementById("sheepEnergyValue");

    const sheepReproduction = document.getElementById("sheepReproduction");
    const sheepReproductionValue = document.getElementById("sheepReproductionValue");

    const wolfEnergy = document.getElementById("wolfEnergy");
    const wolfEnergyValue = document.getElementById("wolfEnergyValue");

    const wolfReproduction = document.getElementById("wolfReproduction");
    const wolfReproductionValue = document.getElementById("wolfReproductionValue");

    grassTime.addEventListener("input", () => {
        grassTimeValue.textContent = grassTime.value;
    });

    sheepEnergy.addEventListener("input", () => {
        sheepEnergyValue.textContent = sheepEnergy.value;
    });

    sheepReproduction.addEventListener("input", () => {
        sheepReproductionValue.textContent = `${sheepReproduction.value}%`;
    });

    wolfEnergy.addEventListener("input", () => {
        wolfEnergyValue.textContent = wolfEnergy.value;
    });

    wolfReproduction.addEventListener("input", () => {
        wolfReproductionValue.textContent = `${wolfReproduction.value}%`;
    });
});
