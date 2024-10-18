// const infoBox = document.getElementById("info-box");

// // Add click event listeners to cards to show information and rotate the model
// document.querySelectorAll(".card").forEach((card) => {
//   card.addEventListener("click", () => {
//     const title = card.getAttribute("data-title");
//     const description = card.getAttribute("data-description");
//     const orbit = card.getAttribute("data-orbit");
//     const boxClass = card.getAttribute("data-box-class");

//     // Ensure title and description are logged (for debugging)
//     console.log("Title: ", title);
//     console.log("Description: ", description);

//     // Update the info box content and apply the style variation
//     infoBox.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
//     infoBox.className = boxClass;
//     infoBox.style.display = "block";
//     setTimeout(() => {
//       infoBox.style.opacity = 1; // Fade in the info box
//     }, 10);

//     // Rotate the model slightly to bring attention to the part
//     viewer.cameraOrbit = orbit; // Move camera to a different angle for visual focus
//   });
// });

// // Function to hide the info box after some time (5 seconds)
// function hideInfoBox() {
//   setTimeout(() => {
//     infoBox.style.opacity = 0; // Fade out
//     setTimeout(() => {
//       infoBox.style.display = "none"; // Hide after fade out
//     }, 500); // Match fade out duration
//   }, 5000); // 5 seconds display time
// }

// // Trigger hiding the info box after user clicks on any card
// document.querySelectorAll(".card").forEach((card) => {
//   card.addEventListener("click", hideInfoBox);
// });



class StoneViewer {

    constructor(stoneData) {
        // state
        this.selectedIndex = 0

        // data
        this.stoneData = stoneData
        this.viewer = document.getElementById("stoneViewer")
        this.stoneTitle = document.getElementById("stone-title")
        this.stoneDescription = document.getElementById("stone-description")
        this.featureContainer = document.querySelector("#info-container .feature-container")
        this.featureTitle = document.getElementById("feature-title")
        this.featureDescription = document.getElementById("feature-description")

        // init
        this.setStone(this.selectedIndex)
    }

    setStone(index) {
        const selectedStone = this.stoneData[index]
        console.log(selectedStone)
        console.log(index)

        // update viewer
        this.viewer.setAttribute('src', selectedStone.fileSrc)
        for (const pos in selectedStone.initialPosition) {
            this.viewer[pos] = selectedStone.initialPosition[pos]
        }

        // update stone description
        this.stoneTitle.innerHTML = selectedStone.name
        this.stoneDescription.innerHTML = selectedStone.description

        // update stone features
        this.featureContainer.innerHTML = ''
        selectedStone.features.forEach(feature => {
            const newFeatureButton = document.createElement('button')
            newFeatureButton.innerHTML = feature.name
            newFeatureButton.addEventListener('click', event => {
                this.featureTitle.innerHTML = feature.name
                this.featureDescription.innerHTML = feature.description
                this.viewer.cameraOrbit = feature.cameraOrbit
            })
            this.featureContainer.appendChild(newFeatureButton)
        })
    }


    next() {
        this.selectedIndex = (this.selectedIndex + 1) % this.stoneData.length
        this.setStone(this.selectedIndex)
    }
    prev() {
        this.selectedIndex = (this.selectedIndex - 1 + this.stoneData.length) % this.stoneData.length
        this.setStone(this.selectedIndex)
    }


}


const StoneData = [
    {
        name: 'Granit Orbicular',
        fileSrc: 'assets/Granit_Orbicular.glb',
        initialPosition: {
            cameraOrbit: "0deg 75deg 50m",
            minCameraOrbit: "auto auto 40m",
            maxCameraOrbit: "auto auto 50m"
        },
        description: 'Deskripsi Granit orbicular merupakan salah satu jenis batuan yang sangat langka dan unik, terkenal karena pola melingkar atau orbikulasi yang menarik. Diperkirakan bahwa orbikula terbentuk dari proses pendinginan magma yang tidak biasa, di mana ada kristalisasi berulang yang menghasilkan lapisan konsentris. Karena pembentukannya yang jarang terjadi, batuan ini dianggap eksotis dan sangat diminati kolektor dan geolog.',
        features: [
            {
                name: "Orbikulasi",
                description: "Fitur paling menonjol dari granit ini adalah formasi orbikularnya, yaitu pola melingkar atau bulat yang terbentuk di dalam batuan. Orbikula ini terbentuk dari pusat, biasanya kristal, yang dikelilingi oleh lapisan-lapisan konsentris dari mineral berbeda. Pola ini menciptakan tampilan yang sangat artistik dan memikat secara visual.",
                cameraOrbit: "90deg 80deg 20m"
            },
            {
                name: "Lapisan Konsentris",
                description: "Orbikula dikelilingi oleh lapisan-lapisan mineral yang terpisah dengan warna atau tekstur berbeda. Lapisan-lapisan ini jelas terlihat dengan mata telanjang dan memberikan tampilan bertekstur pada batu.",
                cameraOrbit: "120deg 70deg 15m"
            },
            {
                name: "Kontras Warna",
                description: "Kontras yang jelas antara orbikula dan matriksnya, sering dengan orbikula yang memiliki warna berbeda dari batuan dasar, menciptakan tampilan visual yang menarik.",
                cameraOrbit: "60deg 85deg 25m"
            },
            {
                name: "Kristal Kasar atau Halus",
                description: "Orbikula mungkin memiliki tekstur kristal kasar yang berbeda dari matriks halus di sekitarnya. Kristal-kristal dalam orbikula sering terlihat lebih besar dan jelas dengan mata telanjang.",
                cameraOrbit: "75deg 90deg 18m"
            },
            {
                name: "Ukuran Orbikula yang Bervariasi",
                description: "Ukuran orbikula dapat bervariasi dalam satu spesimen, dengan orbikula kecil hingga besar, memberikan variasi visual yang menarik.",
                cameraOrbit: "100deg 60deg 22m"
            },
            {
                name: "Perbedaan Kilap",
                description: "Orbikula dan matriksnya mungkin memiliki kilap yang berbeda. Orbikula mungkin lebih mengkilap atau lebih kusam dibandingkan dengan matriks sekitarnya.",
                cameraOrbit: "150deg 75deg 19m"
            },
            {
                name: "Pola Penataan Orbikula",
                description: "Orbikula dapat terdistribusi secara acak atau menunjukkan pola tertentu di dalam batuan, yang menambah karakter visual batuan tersebut.",
                cameraOrbit: "45deg 85deg 17m"
            },
            {
                name: "Retakan atau Rekahan Alami",
                description: "Beberapa granit orbicular menunjukkan retakan alami di sekitar orbikula yang terbentuk selama proses pendinginan atau setelahnya.",
                cameraOrbit: "110deg 50deg 21m"
            }
        ]
    },
    {
        name: 'Konglomerat Polimik',
        fileSrc: 'assets/Konglomerat_Polimik.glb',
        initialPosition: {
            cameraOrbit: "0deg 75deg 150m",
            minCameraOrbit: "auto auto 90m",
            maxCameraOrbit: "auto auto 200m"
        },
        description: "Konglomerat Polimik adalah batuan sedimen yang terdiri dari pecahan-pecahan batuan yang berbeda (fragmen) yang dibungkus dalam matriks yang lebih halus. Fragmen-fragmen ini memiliki berbagai jenis dan ukuran, biasanya terbentuk dari berbagai macam mineral atau jenis batuan yang berbeda, sehingga menciptakan penampilan heterogen. Karena terdiri dari beragam batuan, konglomerat polimik sering kali menunjukkan berbagai warna, pola, dan tekstur yang dapat diamati langsung.",
        features: [
            {
                name: "Fragmen Beragam",
                description: "Konglomerat Polimik terdiri dari fragmen-fragmen yang berasal dari berbagai batuan, seperti kuarsa, granit, basalt, dan lainnya. Fragmen-fragmen ini berukuran lebih dari 2 mm dan disemen oleh matriks yang lebih halus.",
                cameraOrbit: "80deg 70deg 22m"
            },
            {
                name: "Matriks Pengikat",
                description: "Fragmen-fragmen batu yang besar dikelilingi oleh matriks yang lebih halus, sering kali terdiri dari pasir, lempung, atau material sedimen lainnya yang berfungsi sebagai pengikat.",
                cameraOrbit: "100deg 80deg 18m"
            },
            {
                name: "Variasi Warna dan Tekstur",
                description: "Konglomerat Polimik memiliki tampilan yang sangat bervariasi dalam hal warna dan tekstur, bergantung pada jenis batuan yang menyusun fragmen dan matriksnya.",
                cameraOrbit: "55deg 90deg 25m"
            },
            {
                name: "Kekasaran Permukaan",
                description: "Permukaan konglomerat polimik biasanya kasar karena fragmen-fragmen besar yang menonjol dari matriks. Fragmen-fragmen ini dapat dirasakan dan dilihat dengan mudah.",
                cameraOrbit: "120deg 65deg 20m"
            },
            {
                name: "Fragmen Sudut dan Bulat",
                description: "Fragmen-fragmen dalam konglomerat polimik dapat memiliki bentuk sudut atau bulat, tergantung pada seberapa jauh dan lama transportasi fragmen-fragmen tersebut sebelum terdeposit.",
                cameraOrbit: "70deg 85deg 19m"
            }
        ]
    }

]
 

const stoneViewer = new StoneViewer(StoneData)

const nextButton = document.getElementById("next-stone")
const prevButton = document.getElementById("prev-stone")

nextButton.addEventListener('click', event => stoneViewer.next())
prevButton.addEventListener('click', event => stoneViewer.prev())