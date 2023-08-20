import React, { useState } from "react";
import Header from "./components/Header";

function GridCell({ label, isSelected, onClick, cellIndex }) {
  const cellClass = label ? "border border-gray-400" : "";
  const selectedClass = isSelected ? "bg-bg3" : "bg-bg2";

  return (
    <div
      className={`md:h-16 h-10 md:w-20 sm:h-10 sm:w-2 flex items-center justify-center ${cellClass} ${selectedClass}`}
      onClick={onClick}
    >
      {isSelected && (
        <span className={`text-white${isSelected ? "text-sm" : ""}`}>
          {`div${cellIndex + 1}`}
        </span>
      )}
    </div>
  );
}




function App() {
  const [rows, setRows] = useState(12);
  const [cols, setCols] = useState(12);
  const [selectedCells, setSelectedCells] = useState([]);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState({});
  const [gap, setGap] = useState(2); // Initial gap value

  const originalCols = 12;

  const generateGrid = () => {
    const grid = [];
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const label = String.fromCharCode(65 + j);
        const isSelected = selectedCells.includes(`${i}-${j}`);
        const cellIndex = selectedCells.indexOf(`${i}-${j}`);
        grid.push(
          <GridCell
            key={`${i}-${j}`}
            label={label}
            isSelected={isSelected}
            onClick={() => handleCellClick(i, j)}
            cellIndex={cellIndex}
          />
        );
      }
  
      for (let j = cols; j < originalCols; j++) {
        const isSelected = selectedCells.includes(`${i}-${j}`);
        const cellIndex = selectedCells.indexOf(`${i}-${j}`);
        grid.push(
          <GridCell
            key={`${i}-${j}`}
            label=""
            isSelected={isSelected}
            onClick={() => handleCellClick(i, j)}
            cellIndex={cellIndex}
          />
        );
      }
    }
  
    return grid;
  };
  

  const handleCellClick = (row, col) => {
    const cellKey = `${row}-${col}`;
    const selectedCellIndex = selectedCells.indexOf(cellKey);
  
    if (selectedCellIndex !== -1) {
      setSelectedCells(selectedCells.filter((key) => key !== cellKey));
    } else {
      const nextLabel = `div${selectedCells.length + 1}`;
      setSelectedCells([...selectedCells, cellKey]);
      setSelectedLabels({ ...selectedLabels, [cellKey]: nextLabel });
    }
  };
  

  const generateTailwindClasses = () => {
    const classes = selectedCells.map((cellKey) => {
      const [row, col] = cellKey.split("-");
      return `<div className='row-start-${parseInt(row) + 1} row-end-${
        parseInt(row) + 2
      } col-start-${parseInt(col) + 1} col-end-${
        parseInt(col) + 2
      } h-30 w-30 bg-blue-300'></div>\n`;
    });

    return classes.join("");
  };

  // const generateTailwindClasses = () => {
  //   const classes = selectedCells.map((cellKey) => {
  //     const [row, col] = cellKey.split("-");
  //     return `<div className='row-start-${parseInt(row) + 1} row-end-${
  //       parseInt(row) + 2
  //     } col-start-${parseInt(col) + 1} col-end-${
  //       parseInt(col) + 2
  //     } h-30 w-30 bg-blue-300'></div>\n`;
  //   });
  
  //   const completeClasses = classes.join("");
  //   const gapClasses = `grid-rows-${rows} grid-cols-${cols} gap-${gap}`;
    
  //   return `<div className="${gapClasses}">\n${completeClasses}</div>`;
  // };

  const copyToClipboard = (text) => {
    const textField = document.createElement("textarea");
    textField.value = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-bg2 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-4 mt-4 text-4xl text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Tailwind CSS Grid Layout Generator
          </h1>
          <p className="mb-12 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            {" "}
            Create responsive grid layouts effortlessly with this Tailwind CSS
            generator. Define the number of rows and columns, and customize cell
            styles. Generate code snippets for your layout.
          </p>
          <div className="bg-bg1 text-white w-full p-6 shadow-md rounded-lg mb-6">
          <div className="flex mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
  <div className="mb-4 sm:mb-0 sm:mr-4">
    <span className="block sm:inline-block sm:mr-2">No. of Rows</span>
    <input
      type="number"
      id="rows"
      min="0"
      max="12"
      value={rows}
      onChange={(e) => setRows(Math.min(Math.max(e.target.value, 0), 12))}
      className="border-gray-300 bg-bg2 text-white sm:w-20 border h-10 px-2 py-1 rounded"
    />
  </div>
  
  <div>
    <span className="block sm:inline-block sm:mr-2">No. of Columns</span>
    <input
      type="number"
      id="cols"
      min="0"
      max="12"
      value={cols}
      onChange={(e) => setCols(Math.min(Math.max(e.target.value, 0), 12))}
      className="border-gray-300 bg-bg2 text-white sm:w-20 border h-10 px-2 py-1 rounded"
    />
  </div>

  <div className="mb-4 md:ml-4 sm:mb-0 sm:mr-4">
    <span className="block sm:inline-block sm:mr-2">Gap</span>
    <input
      type="number"
      id="gap"
      min="0"
      value={gap}
      onChange={(e) => setGap(e.target.value)}
      className="border-gray-300 bg-bg2 text-white sm:w-20 border h-10 px-2 py-1 rounded"
    />
  </div>
</div>

<div className="text-center mt-4 sm:mt-0">
  <button
    data-modal-target="defaultModal"
    className="bg-bg3 text-white ml-2 py-2 px-4 rounded-full"
    type="button"
    onClick={() => setIsCodeVisible(true)}
  >
    View Code
  </button>
</div>

</div>

            <div className="grid-preview grid grid-cols-12 gap-2 sm:grid-cols-2 md:grid-cols-12">
        {generateGrid()}
      </div>

          </div>
        </div>
      </div>

      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 ${
          isCodeVisible ? "block" : "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Generated Tailwind CSS Classes
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => setIsCodeVisible(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <pre className="text-base leading-relaxed text-gray-500 dark:text-gray-400 bg-bg2 p-2 rounded-md overflow-x-auto">
  <code>
    {`<div className="grid grid-rows-${rows} grid-cols-${cols} gap-${gap}">\n`}
    {generateTailwindClasses()}
    {`</div>`}
  </code>
</pre>

              <button
                className={`bg-bg3 text-white py-2 px-4 rounded-full ${
                  isCopied ? "bg-green-900" : ""
                }`}
                onClick={() => {
                  const completeCode = `<div className="grid grid-rows-${rows} grid-cols-${cols} gap-2">\n${generateTailwindClasses()}</div>`;
                  copyToClipboard(completeCode);
                }}
              >
                {isCopied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </div>
      
      </div>
  
    </>
  );
}

export default App;



