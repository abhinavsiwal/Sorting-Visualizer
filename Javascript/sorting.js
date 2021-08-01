createNewArray();

// Adding Sliders

const barsNo = document.getElementById("barsNo");
barsNo.addEventListener("input", () => {
  number = Number(barsNo.value);
  createNewArray(number);
});
let speed = 170;
let barSpeed = document.getElementById("barSpeed");
barSpeed.addEventListener("input", () => {
  let s = Number(barSpeed.value);
  console.log(s);
  speed = 320 - s * 2;
  console.log(speed);
});

//Creating Bars
let barsDiv = document.getElementById("barsDiv");

function createNewArray(length = 45) {
  // Delete Previous Bars
  document.getElementById("barsDiv").innerHTML = "";

  let barsArray = new Array(length);
  for (let i = 0; i < barsArray.length; i++) {
    let random = 5 * Math.floor(Math.random() * 100) + 1;
    barsArray[i] = random;
  }

  for (let i = 0; i < barsArray.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bars");
    bar.classList.add("flex-fill");
    bar.setAttribute("id", `bar${i + 1}`);
    // Creating Bar Label
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    // barLabel.innerHTML=value;
    barLabel.innerHTML = barsArray[i];
    bar.appendChild(barLabel);
    document.getElementById("barsDiv").appendChild(bar);
    document.getElementById(`bar${i + 1}`).style.height = barsArray[i] + "px";
  }
}

//  Swap Function
function swap(a, b) {
  let temp1 = a.style.height;
  a.style.height = b.style.height;
  b.style.height = temp1;

  let temp2 = a.childNodes[0].innerHTML;
  a.childNodes[0].innerHTML = b.childNodes[0].innerHTML;
  b.childNodes[0].innerHTML = temp2;
}
// Bubble Sort Algorithm
async function Bubblesort() {
  disableBtn();
  let bar = document.querySelectorAll(".bars");
  for (let i = 0; i < bar.length; i++) {
    for (let j = 0; j < bar.length - 1 - i; j++) {
      bar[j].style.backgroundColor = "red";
      bar[j + 1].style.backgroundColor = "red";

      const value1 = Number(bar[j].childNodes[0].innerHTML);
      const value2 = Number(bar[j + 1].childNodes[0].innerHTML);

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      if (value1 > value2) {
        swap(bar[j], bar[j + 1]);
      }
      bar[j].style.backgroundColor = "orange";
      bar[j + 1].style.backgroundColor = "orange";
    }
    bar[bar.length - i - 1].style.backgroundColor = "green";
  }
}

let bubbleBtn = document.getElementById("bubble");
bubbleBtn.addEventListener("click", Bubblesort);

let newArrayBtn = document.getElementById("newArrayBtn");
newArrayBtn.addEventListener("click", () => {
  document.getElementById("bubble").disabled = false;
  document.getElementById("barsNo").disabled = false;
  document.getElementById("insertion").disabled = false;
  document.getElementById("selection").disabled = false;
  createNewArray(Number(barsNo.value));
});
document.getElementById("quick").disabled = true;
document.getElementById("merge").disabled = true;
function disableBtn() {
  document.getElementById("bubble").disabled = true;
  document.getElementById("barsNo").disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("selection").disabled = true;

}
// Insertion Sort
async function Insertionsort() {
  disableBtn();
  let bar = document.querySelectorAll(".bars");
  console.log(Number(bar[1].childNodes[0].innerHTML));
  for (let i = 1; i < bar.length; i++) {
    let key = Number(bar[i].childNodes[0].innerHTML);
    keyheight = bar[i].style.height;
    bar[i].style.backgroundColor = "red";
    let j = i - 1;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    const valuej = Number(bar[j].childNodes[0].innerHTML);
    console.log(Number(bar[j + 1].childNodes[0].innerHTML));
    while (j >= 0 && Number(bar[j].childNodes[0].innerHTML) > key) {
      bar[j].style.backgroundColor = "blue";
      bar[j + 1].childNodes[0].innerHTML = bar[j].childNodes[0].innerHTML;
      bar[j + 1].style.height = bar[j].style.height;
      j--;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      for (let k = i; k >= 0; k--) {
        bar[k].style.background = "green";
      }
    }
    bar[j + 1].childNodes[0].innerHTML = key;
    bar[j + 1].style.height = keyheight;
    bar[i].style.backgroundColor = "green";
  }
}

let insertionBtn = document.getElementById("insertion");
insertionBtn.addEventListener("click", Insertionsort);

// Selection Sort
async function Selectionsort() {
  disableBtn();
  let bar = document.querySelectorAll(".bars");
  for (let i = 0; i < bar.length; i++) {
    let indexofmin = i;
    bar[i].style.backgroundColor = "blue";
    for (let j = i + 1; j < bar.length; j++) {
      bar[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      if (
        Number(bar[indexofmin].childNodes[0].innerHTML) >
        Number(bar[j].childNodes[0].innerHTML)
      ) {
        if (indexofmin !== i) {
          // if new Indexofmin found then change the previous indexofmin color back to normal
          bar[indexofmin].style.backgroundColor = "orange";
        }
        indexofmin = j;
      } else {
        bar[j].style.backgroundColor = "orange";
      }
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    swap(bar[indexofmin], bar[i]);
    bar[indexofmin].style.backgroundColor = "orange";
    bar[i].style.backgroundColor = "green";
  }
}
let selectionBtn = document.getElementById("selection");
selectionBtn.addEventListener("click", Selectionsort);

// QuickSort Algorithm
async function partition(bar, low, high) {
  let i = low - 1;
  // let pivot = Number(bar[high].childNodes[0].innerHTML);
  bar[high].style.backgroundColor = "red";
  for (let j = low; j <= high - 1; j++) {
    bar[j].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    if (
      Number(bar[j].childNodes[0].innerHTML) <
      Number(bar[high].childNodes[0].innerHTML)
    ) {
      i++;
      swap[(bar[i], bar[j])];
      bar[i].style.backgroundColor = "red";
      if (i != j) {
        bar[j].style.backgroundColor = "red";
      }
    } else {
      bar[j].style.background = "pink";
    }
  }
    i++;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    swap(bar[i], bar[high]);
    bar[high].style.backgroundColor = "pink";
    bar[i].style.backgroundColor = "green";
    for (let k = 0; k < bar.length; k++) {
      if (bar[k].style.backgroundColor != "green") {
        bar[k].style.backgroundColor = "orange";
      }
    }
    return i;
  }

async function QuickSort(bar, low, high) {
  if (low < high) {
    let pivotIndex = await partition(bar, low, high);
    await QuickSort(bar, low, pivotIndex - 1);
    await QuickSort(bar, pivotIndex + 1, high);
  } else {
    if (low >= 0 && high >= 0 && low < bar.length && high < bar.length) {
      bar[high].style.backgroundColor = "green";
      bar[low].style.backgroundColor = "green";
    }
  }
}

const quicksortBtn = document.getElementById("quick");
quicksortBtn.addEventListener("click", () => {
  let bar = document.querySelectorAll(".bars");
  let low = 0;
  let high = bar.length - 1;
  QuickSort(bar, low, high);
});
