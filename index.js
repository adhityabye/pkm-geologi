class StoneViewer {

    constructor(stoneData) {
        // state
        this.selectedIndex = 1

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

        // stone feature overlay
        this.overlay = document.getElementById('overlay')

        this.viewer.addEventListener('load', () => {
            // this.viewer.addEventListener('camera-change', () => this.updateOverlay(10,10,10))
        })

    }

    setStone(index) {
        const selectedStone = this.stoneData[index]

        // update viewer
        this.viewer.setAttribute('src', selectedStone.fileSrc)
        this._setCamera(selectedStone.camera)

        // update stone description
        this.stoneTitle.innerHTML = selectedStone.name
        this.stoneDescription.innerHTML = selectedStone.description

        // update stone features
        this.featureContainer.innerHTML = ''
        selectedStone.features.forEach(feature => {
            const newFeatureButton = document.createElement('button')
            newFeatureButton.innerHTML = feature.name
            newFeatureButton.addEventListener('click', event => {

                // if theres another overlay displayed, just hide
                this.hideOverlay()

                this.featureTitle.innerHTML = feature.name
                this.featureDescription.innerHTML = feature.description
                
                this._setCamera(feature.camera)
                this.displayOverlay()

                // disable auto-rotate temporarily
                this.viewer.removeAttribute('auto-rotate')
                setTimeout(() => {
                    this.viewer.setAttribute('auto-rotate', '')
                    this.hideOverlay()
                }, 700)
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

    _setCamera(cameraInfo) {
        for (const info in cameraInfo) {
            this.viewer[info] = cameraInfo[info]
        }
    }

    displayOverlay() {
        if (!this.overlay.classList.contains('hidden')) return

        this.overlay.classList.remove('hidden', 'zoom-out');
        this.overlay.classList.add('zoom-in');
        this.overlay.style.display = 'block';
    }

    hideOverlay() {
        if (this.overlay.classList.contains('hidden')) return

        this.overlay.classList.remove('zoom-in');
        this.overlay.classList.add('zoom-out');
        
        this.overlay.addEventListener('animationend', () => {
            if (this.overlay.classList.contains('zoom-out')) {
                this.overlay.style.display = 'none';
                this.overlay.classList.add('hidden');
            }
        }, { once: true });
    }

    // ============== FOR DEVELOPMENT PURPOSES ==============
    _getCameraInfo() {
        return {
            cameraOrbit: this.viewer.getCameraOrbit().toString(),
            cameraTarget: this.viewer.getCameraTarget().toString(),
            fieldOfView: this.viewer.getFieldOfView().toString() + 'deg'
        }
    }


}

// imports const StoneData from StoneData.js
 
const a = document.getElementById('stoneViewer')
const stoneViewer = new StoneViewer(StoneData)

const nextButton = document.getElementById("next-stone")
const prevButton = document.getElementById("prev-stone")

nextButton.addEventListener('click', event => stoneViewer.next())
prevButton.addEventListener('click', event => stoneViewer.prev())