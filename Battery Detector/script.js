initBattery();

function initBattery() {
  const bLiquid = document.querySelector(".Bliquid");
  const bStatus = document.querySelector(".Bstatus");
  const bpercentage = document.querySelector(".Bpercentage");
  navigator.getBattery().then((batt) => {
    updateBattery = () => {
      let level = Math.floor(batt.level * 100);
      bpercentage.innerHTML = level + "%";
      bLiquid.style.height = `${parseInt(batt.level * 100)} %`;
      if(level == 100){
        bStatus.innerHTML = `Battery full <i class="ri-battery-2-fill green-color"></i>`;
        bLiquid.style.height = "103%";
      } else if(level <=20 &! batt.charging) {
        bStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red"></i>`;
      } else if(batt.charging) {
        bStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
      } else {
        bStatus.innerHTML = "";
      }

      if(level <=20) {
        bLiquid.classList.add("gradient-color-red");
        bLiquid.classList.remove("gradient-color-green","gradient-color-orange","gradient-color-yellow")
      } else if(level <= 48) {
        bLiquid.classList.add("gradient-color-orange");
        bLiquid.classList.remove("gradient-color-green","gradient-color-red","gradient-color-yellow")
      } else if(level <=80) {
        bLiquid.classList.add("gradient-color-green");
        bLiquid.classList.remove("gradient-color-orange","gradient-color-red","gradient-color-yellow")
      }
    }
    updateBattery();
    batt.addEventListener("chargingchange", () => {
      updateBattery();
    });
    batt.addEventListener("levelchange", () => {
      updateBattery();
    })
  })
}