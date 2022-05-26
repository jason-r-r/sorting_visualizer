import React, { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

function Sorting() { 

    //state 
    const [numberOfSticks, setNumberOfSticks] = useState(135); 

    const [addSizeBoolean, setAddSizeBoolean] = useState(false); 

    const [subtractSizeBoolean, setSubtractSizeBoolean] = useState(false); 

    const [speedState, setSpeedState] = useState('med'); 

    const [amountOfSticks, setAmountOfSticks] = useState(Array.from(Array(numberOfSticks).keys())); 

    const [heightOfSticks, setHeightOfSticks] = useState([]); 
    
    const [duplicate, setDuplicate] = useState([]); 

    const [generalArrKey, setGeneralArrKey] = useState([]); 

    const [updateArray, setUpdateArray] = useState(false); 

    const [sortedBoolean, setSortedBoolean] = useState(false); 

    const [sortedVersionOfArr, setSortedVersionOfArr] = useState([]); 

    const [typeOfAlgorithm, setTypeOfAlgorithm] = useState("Bubble"); 

    const [buttonState, setButtonState] = useState("Bubble Sort"); 

    //window size 
    const size = useWindowSize();
    
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined, 
            height: undefined, 
        }); 

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth, 
                    height: window.innerHeight, 
                }); 
            } 

            window.addEventListener("resize", handleResize); 
            handleResize(); 

            return () => window.removeEventListener("resize", handleResize); 
        }, []); 

        return windowSize; 
    }
 
    //useEffect 
    useEffect(() => { 

        if (addSizeBoolean) { 
            if (numberOfSticks <= 200) {
                let stickArr = []; 

                for (let i = 0; i < ((heightOfSticks.length) + 25); i++) { 
                    if (size.height < 500) {
                        stickArr.push(Math.floor(Math.random() * (300 - 3 + 1) + 3)); 
                    } 

                    else {
                        stickArr.push(Math.floor(Math.random() * (450 - 3 + 1) + 3)); 
                    }
                } 

                let sa = []; 

                for (var j = 0; j < stickArr.length; j++) {
                    sa.push(stickArr[j]); 
                } 

                setHeightOfSticks(stickArr); 
                setDuplicate(stickArr); 

                setSortedVersionOfArr(sa.sort((a, b) => a - b)); 

                setNumberOfSticks(numberOfSticks + 25); 

                setAmountOfSticks(Array.from(Array(numberOfSticks).keys())); 

                setAddSizeBoolean(false); 
            }
        } 

        if (subtractSizeBoolean) { 
            if (numberOfSticks >= 25) {
                let stickArr = []; 

                for (let i = 0; i < ((heightOfSticks.length) - 25); i++) {
                    if (size.height < 500) {
                        stickArr.push(Math.floor(Math.random() * (300 - 3 + 1) + 3)); 
                    } 

                    else {
                        stickArr.push(Math.floor(Math.random() * (450 - 3 + 1) + 3)); 
                    }
                } 

                let sa = []; 

                for (let j = 0; j < stickArr.length; j++) {
                    sa.push(stickArr[j]); 
                } 

                setHeightOfSticks(stickArr); 
                setDuplicate(stickArr); 

                setSortedVersionOfArr(sa.sort((a, b) => a - b)); 

                setAddSizeBoolean(false); 

                setNumberOfSticks(numberOfSticks - 25); 

                setAmountOfSticks(Array.from(Array(numberOfSticks).keys())); 

                setSubtractSizeBoolean(false); 
            } 

            else if (numberOfSticks >= 5) {
                let stickArr = []; 
                for (let i = 0; i < ((heightOfSticks.length) - 25); i++) { 
                    if (size.height < 500) {
                        stickArr.push(Math.floor(Math.random() * (300 - 3 + 1) + 3)); 
                    } 

                    else {
                        stickArr.push(Math.floor(Math.random() * (450 - 3 + 1) + 3)); 
                    }
                } 

                let sa = []; 

                for (let j = 0; j < stickArr.length; j++) {
                    sa.push(stickArr[j]); 
                } 

                setHeightOfSticks(stickArr); 
                setDuplicate(stickArr); 

                setSortedVersionOfArr(sa.sort((a, b) => a - b)); 

                setAddSizeBoolean(false); 

                setNumberOfSticks(numberOfSticks - 4); 

                setAmountOfSticks(Array.from(Array(numberOfSticks).keys())); 

                setSubtractSizeBoolean(false); 
            }
        } 

        else if (heightOfSticks.length === 0) { 
            let stickArr = []; 

            for (let j = 0; j < amountOfSticks.length; j++) { 
                if (size.height < 500) {
                    stickArr.push(Math.floor(Math.random() * (300 - 3 + 1) + 3)); 
                } 
                else {
                    stickArr.push(Math.floor(Math.random() * (450 - 3 + 1) + 3)); 
                }
            } 

            let sa = []; 

            for (var i = 0; i < stickArr.length; i++) {
                sa.push(stickArr[i]); 
            }

            setHeightOfSticks(stickArr); 
            setDuplicate(stickArr); 

            setSortedVersionOfArr(sa.sort((a, b) => a - b)); 
        } 

        if (heightOfSticks.length === sortedVersionOfArr.length) {
            for (var u = 0; heightOfSticks.length < u; u++) {
                if (heightOfSticks[u] === sortedVersionOfArr[u]) {
                    console.log("array equals array"); 
                    setSortedBoolean(true); 
                } 

                else {
                    setSortedBoolean(false);
                }
            }
        }

        if (duplicate.length === 0) {
            for (var x = 0; x < heightOfSticks.length; x++) {
                duplicate.push(heightOfSticks[x]); 
            }
        }

        if (updateArray) { 

            if (typeOfAlgorithm === "Bubble") {

                let placeholder = duplicate; 
                let secondaryState = heightOfSticks; 
                let secondaryColorState = generalArrKey; 

                function myLoop() { 

                    setTimeout(function() {

                        //algorithm 
                        for (var i = 0; i < placeholder.length; i++) {
                            for (var q = 0; q < placeholder.length - i - 1; q++) {

                                generalArrKey.push(placeholder.indexOf(placeholder[i])); 
                                generalArrKey.push(placeholder.indexOf(placeholder[i + 1])); 

                                (function(i, placeholder,  secondaryColorState, q) {
                                    setInterval(function() {

                                        if (placeholder[i] > placeholder[i + 1]) {
                                            let ph = placeholder[i]; 
                                            
                                            placeholder[i] = placeholder[i + 1]; 
                                            placeholder[i + 1] = ph; 
                                        }

                                        setGeneralArrKey([]); 

                                    }, (speedState === 'slow' ? 1000 : speedState === 'med' ? 500 : speedState === 'fast' ? 1 : 500) * i)
                                })(i, placeholder, secondaryColorState, q); 
                            }
                        } 
                        //algorithm 

                        //secondary state is visual arr 
                        placeholder = secondaryState; 

                        //check if crnt and sorted are equal 
                        if (heightOfSticks.length === sortedVersionOfArr.length) { 

                            var one = ""; 
                            var two = ""; 

                            for (var e = 0; e < heightOfSticks.length; e++) {
                                one += heightOfSticks[e]; 
                                two += sortedVersionOfArr[e]; 
                            } 

                            if (one === two) {
                                setSortedBoolean(true); 
                            } 

                            else {
                                setSortedBoolean(false); 
                            }
                        } 

                        setUpdateArray(false); 

                        if (!sortedBoolean) { 
                            myLoop(); 
                        }
                    }, (speedState === 'fast' ? 10 : speedState === 'med' ? 750 : speedState === 'slow' ? 2000 : 1000)) 
                }

                myLoop(); 
            } 

            else if (typeOfAlgorithm  === "Selection") { 

                let placeholder = duplicate; 
                let secondaryState = heightOfSticks; 

                function selectionSort() {
                    
                    setTimeout(function() {

                        //algorithm 
                        for (let i = 0; i < placeholder.length; i++) { 
                            for (let j = i + 1; j < placeholder.length; j++) { 

                                let min = i; 

                                generalArrKey.push(placeholder.indexOf(placeholder[i])); 
                                generalArrKey.push(placeholder.indexOf(placeholder[i + 1])); 

                                (function(placeholder, i, j, min) {
                                    setTimeout(function() { 

                                        if (placeholder[j] < placeholder[min]) { 
                                            min = j; 
                                        } 

                                        if (min !== i) {
                                            let ph = placeholder[i]; 
                                            placeholder[i] = placeholder[min]; 
                                            placeholder[min] = ph; 
                                        }

                                        setGeneralArrKey([]); 


                                    }, (speedState === 'slow' ? 1000 : speedState === 'med' ? 500 : speedState === 'fast' ? 75 : 500) * i)
                                })(placeholder, i, j, min) 
                            }
                        }
                        //algorithm 

                        placeholder = secondaryState; 

                        //check if crnt and sorted are equal 
                        if (heightOfSticks.length === sortedVersionOfArr.length) { 

                            var one = ""; 
                            var two = ""; 

                            for (var e = 0; e < heightOfSticks.length; e++) {
                                one += heightOfSticks[e]; 
                                two += sortedVersionOfArr[e]; 
                            } 

                            if (one === two) {
                                setSortedBoolean(true); 
                            } 

                            else {
                                setSortedBoolean(false); 
                            }
                        } 

                        setUpdateArray(false); 

                        if (!sortedBoolean) {
                            selectionSort(); 
                        }

                    }, (speedState === 'fast' ? 750 : speedState === 'med' ? 750 : speedState === 'slow' ? 2000 : 1000))
                }

                selectionSort();  

            }

            else if (typeOfAlgorithm === "Insertion") { 

                let placeholder = duplicate; 
                let secondaryState = heightOfSticks; 
                let secondaryColorState = generalArrKey; 

                function insertionSort() {
                    
                    setTimeout(function() {

                        //algorithm 
                        for (var i = 0; i < placeholder.length; i++) {
                            // for (var j = 0; j < placeholder.length - i - 1; j++) { 

                                generalArrKey.push(placeholder.indexOf(placeholder[i])); 
                                generalArrKey.push(placeholder.indexOf(placeholder[i + 1])); 

                                (function(i, placeholder,  secondaryColorState, q) {
                                    setInterval(function() {
                                        
                                        let current = placeholder[i]; 
                                        let j = i - 1; 

                                        while ((j > -1) && (current < placeholder[j])) {
                                            placeholder[j + 1] = placeholder[j]; 
                                            j--; 
                                        } 

                                        placeholder[j + 1] = current; 

                                        setGeneralArrKey([]); 

                                    }, (speedState === 'slow' ? 1000 : speedState === 'med' ? 500 : speedState === 'fast' ? 75 : 500) * i)
                                })(i, placeholder, secondaryColorState)

                            // }
                        }
                        //algorithm 

                        placeholder = secondaryState; 

                        //check if crnt and sorted are equal 
                        if (heightOfSticks.length === sortedVersionOfArr.length) { 

                            var one = ""; 
                            var two = ""; 

                            for (var e = 0; e < heightOfSticks.length; e++) {
                                one += heightOfSticks[e]; 
                                two += sortedVersionOfArr[e]; 
                            } 

                            if (one === two) {
                                setSortedBoolean(true); 
                            } 

                            else {
                                setSortedBoolean(false); 
                            }
                        } 

                        setUpdateArray(false); 

                        if (!sortedBoolean) {
                            insertionSort(); 
                        }

                    }, (speedState === 'fast' ? 750 : speedState === 'med' ? 750 : speedState === 'slow' ? 2000 : 1000))
                }

                insertionSort();  
            } 
        } 
    }, [updateArray, sortedBoolean, amountOfSticks, numberOfSticks, heightOfSticks, addSizeBoolean, subtractSizeBoolean, duplicate, typeOfAlgorithm, speedState, generalArrKey, sortedVersionOfArr, size.height]); 

    //function 
    const handleSort = () => { 
        if (sortedBoolean) {
            window.location.reload(); 
        } 

        else { 
            setButtonState("Sorting")
            setUpdateArray(true); 
        }
    } 

    const handleBubble = () => {
        setTypeOfAlgorithm("Bubble"); 
        setButtonState("Bubble Sort"); 
    }; 

    const handleSelection = () => {
        setTypeOfAlgorithm("Selection"); 
        setButtonState("Selection Sort"); 
    }; 

    const handleInsertion = () => {
        setTypeOfAlgorithm("Insertion"); 
        setButtonState("Insertion Sort"); 
    }; 

    const handleUpSize = () => {
        setAddSizeBoolean(true); 
    }; 

    const handleDownSize = () => {
        setSubtractSizeBoolean(true); 
    }; 

    const handleUpSpeed = () => {
        switch (speedState) {
            case 'slow': 
                setSpeedState('med'); 
                break; 

            case 'med': 
                setSpeedState('fast'); 
                break; 

            case 'fast': 
                setSpeedState('slow'); 
                break; 

            default:  
                setSpeedState('med'); 
        }
    }; 

    const handleDownSpeed = () => {
        switch (speedState) {
            case 'slow': 
                setSpeedState('fast'); 
                break; 

            case 'med': 
                setSpeedState('slow'); 
                break; 

            case 'fast': 
                setSpeedState('med'); 
                break; 

            default: 
                setSpeedState('med'); 
        }
    }; 

  return (
    <div className="page-container">

        <div className="sorting-nav"> 

            <div className="size-container">
                <div className="arrow-up">
                    <FontAwesomeIcon icon={faChevronUp} color={'cyan'} onClick={handleUpSize} style={{pointerEvents: sortedBoolean ? 'none' : 'all'}} />
                </div>
                <div>size</div> 
                <div className="arrow-down">
                    <FontAwesomeIcon icon={faChevronDown} color={'cyan'} onClick={handleDownSize} style={{pointerEvents: sortedBoolean ? 'none' : 'all'}} />
                </div>
            </div> 

            <div className="size-container">
                <div>speed</div> 
                <div className="speed-flex-row">
                    <div className="arrow-up">
                        <FontAwesomeIcon icon={faChevronLeft} color={'cyan'} onClick={handleDownSpeed} /> 
                    </div>
                    <div>{speedState}</div> 
                    <div className="arrow-up">
                        <FontAwesomeIcon icon={faChevronRight} color={'cyan'} onClick={handleUpSpeed} /> 
                    </div>
                </div>
            </div>

            <div className="algo-chooser-container">
                <div className="top-algo-chooser">
                    <div>Bubble</div>
                    <div>Selection</div> 
                    <div>Insertion</div> 
                </div>
                <div className="bottom-algo-chooser">
                    <div onClick={handleBubble} style={{backgroundColor: typeOfAlgorithm === "Bubble" ? "cyan" : "rgba(0, 255, 255, 0.5)", pointerEvents: sortedBoolean ? 'none' : 'all'}}></div> 
                    <div onClick={handleSelection} style={{backgroundColor: typeOfAlgorithm === "Selection" ? "cyan" : "rgba(0, 255, 255, 0.5)", pointerEvents: sortedBoolean ? 'none' : 'all'}}></div>
                    <div onClick={handleInsertion} style={{backgroundColor: typeOfAlgorithm === "Insertion" ? "cyan" : "rgba(0, 255, 255, 0.5)", pointerEvents: sortedBoolean ? 'none' : 'all'}}></div>
                </div>
            </div>

            <button onClick={handleSort}>{sortedBoolean ? "Randomize Array" :  buttonState}</button>
            
        </div> 

        <div className="sorting-content">
        {
            amountOfSticks === [] || heightOfSticks === [] ? 

                <div>loading</div> 

                : 

                heightOfSticks.map((x, y) => 
                    <div key={y}>
                        <div className="sticks" 
                            style={{
                                height: x + "px", color: 'white', 
                                width: heightOfSticks.length > 75 ? '3px' : heightOfSticks.length > 50 ? '8px' : heightOfSticks.length > 15 ? '15px' : heightOfSticks.length > 0 ? '75px' : '3px', 
                                backgroundColor: generalArrKey.includes(y) ? "red" : sortedBoolean ? "lime" : "cyan" }}>
                        </div>
                    </div>
                )
        }
        </div>
    </div>
  )
}

export default Sorting
