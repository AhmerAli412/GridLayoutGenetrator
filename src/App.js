// import React, { useState } from "react";
// import GridLayout from "./components/GridLayout";

// function App() {
//   const [columns, setColumns] = useState(3);
//   const [rows, setRows] = useState(2);
//   const [gap, setGap] = useState(15);
//   const [width, setWidth] = useState("500px");
//   const [height, setHeight] = useState("300px");
//   const [code, setCode] = useState(`
//     <GridLayout 
//       columns={${columns}} 
//       rows={${rows}} 
//       gap={${gap}} 
//       style={{
//         width: "${width}",
//         height: "${height}"
//       }}
//     >
//       <div>Item 1</div>
//       <div>Item 2</div>
//       <div>Item 3</div>
//       <div>Item 4</div>
//       <div>Item 5</div>
//       <div>Item 6</div>
//     </GridLayout>
//   `);
//   const [css, setCss] = useState(`
//     .grid-layout {
//       display: grid;
//       grid-template-columns: repeat(${columns}, 1fr);
//       grid-template-rows: repeat(${rows}, 1fr);
//       grid-gap: ${gap}px;
//       width: ${width};
//       height: ${height};
//     }
//   `);

//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="columns">Columns:</label>
//           <input
//             type="number"
//             id="columns"
//             value={columns}
//             onChange={e => setColumns(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="rows">Rows:</label>
//           <input
//             type="number"
//             id="rows"
//             value={rows}
//             onChange={e => setRows(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="gap">Gap:</label>
//           <input
//             type="number"
//             id="gap"
//             value={gap}
//             onChange={e => setGap(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="width">Width:</label>
//           <input
//             type="text"
//             id="width"
//             value={width}
//             onChange={e => setWidth(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="height">Height:</label>
//           <input
//             type="text"
//             id="height"
//             value={height}
//             onChange={e => setHeight(e.target.value)}
//           />
//         </div>
//       </form>
//       <GridLayout 
//         columns={columns} 
//         rows={height} 
//         gap={gap} 
//         style={{
//           width: width,
//           height: height
//         }}
//       >
//         <div>Item 1</div>
//         <div>Item 2</div>
//         <div>Item 3</div>
//         <div>Item 4</div>
//         <div>Item 5</div>
//         <div>Item 6</div>
//       </GridLayout>
//       <h3>CSS Code:</h3>
//       <pre>
//         {css}
//       </pre>
//       <h3>HTML Code:</h3>
//       <pre>
//         {code}
//       </pre>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


function GridLayout({ columns, rows, gap, width, height }) {
  const templateColumns = `repeat(${columns}, 1fr)`;
  const templateRows = `repeat(${rows}, 1fr)`;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridGap: `${gap}px`,
        width: width,
        height: height,
      }}
    >
      <div style={{
         border:'1px solid black'
      }}>Item 1</div>
      <div style={{
         border:'1px solid black'
      }}>Item 2</div>
      <div style={{
         border:'1px solid black'
      }}>Item 3</div>
      <div style={{
         border:'1px solid black'
      }}>Item 4</div>
      <div style={{
         border:'1px solid black'
      }}>Item 5</div>
      <div style={{
         border:'1px solid black'
      }}>Item 6</div>
    </div>
  );
}

function App() {
  const [columns, setColumns] = useState(2);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(10);
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("auto");
  const [css, setCSS] = useState(
    `.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  grid-gap: ${gap}px;
  width: ${width};
  height: ${height};
}`
  );
  const [code, setCode] = useState(
    `<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`
  );

  const handleColumnChange = event => {
    setColumns(event.target.value);
    setCSS(
      `.grid-container {
  display: grid;
  grid-template-columns: repeat(${event.target.value}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  grid-gap: ${gap}px;
  width: ${width};
  height: ${height};
}`
    );
    setCode(
      `<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`
    );
  };

  const handleRowChange = event => {
    setRows(event.target.value);
    setCSS(
      `.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
    grid-gap: ${gap}px;
    width: ${width};
    height: ${height};
  }`
      );
      setCode(
        `<div class="grid-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
  </div>`
      );
    };
  
    const handleGapChange = event => {
      setGap(event.target.value);
      setCSS(
        `.grid-container {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    grid-gap: ${event.target.value}px;
    width: ${width};
    height: ${height};
  }`
      );
      setCode(
        `<div class="grid-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
  </div>`
      );
    };
  
    const handleWidthChange = event => {
      setWidth(event.target.value);
      setCSS(
        `.grid-container {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    grid-gap: ${gap}px;
    width: ${event.target.value};
    height: ${height};
  }`
      );
      setCode(
        `<div class="grid-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
  </div>`
      );
    };
  
    const handleHeightChange = event => {
      setHeight(event.target.value);
      setCSS(
        `.grid-container {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    grid-gap: ${gap}px;
    width: ${width};
    height: ${event.target.value};
  }`
      );
      setCode(
        `<div class="grid-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
  </div>`
      );
    };
  
    return (
      <>
      <Header/>
      <Hero/>
      <div >
      <div className="text-center py-8 title-font sm:text-4xl text-3xl mb-4 font-medium  text-indigo-500">Enter your Credientials & Look how its Looking</div>
      <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">

<div className="ml-8">
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Column: </label>
  <input type="number" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={columns} onChange={handleColumnChange} />
</div>

<div className="ml-8">
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Row:</label>
<input type="number" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={rows} onChange={handleRowChange} />
</div>
<div className="ml-8">
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gap:</label>
<input type="number" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={gap} onChange={handleGapChange} />
</div>
<div className="ml-8">
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Width:</label>
<input type="text" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={width} onChange={handleWidthChange} />
</div>
<div className="ml-8">
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Height:</label>
<input type="text" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={height} onChange={handleHeightChange} />
</div>

</div>

{/* <div className="text-center py-8 title-font sm:text-4xl text-3xl mb-4 font-medium  text-indigo-500">How is it Looking</div> */}
      <div className="m-8">
        <GridLayout columns={columns} rows={rows} gap={gap} width={width} height={height} />
        </div>  

      {/* input feilds */}

{/* <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Column: </label>
          <input type="number" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={columns} onChange={handleColumnChange} />
      </div>

      <div className="ml-8">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Row:</label>
        <input type="number" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={rows} onChange={handleRowChange} />
      </div>
      <div className="ml-8">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gap:</label>
        <input type="number" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={gap} onChange={handleGapChange} />
      </div>
      <div className="ml-8">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Width:</label>
        <input type="text" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={width} onChange={handleWidthChange} />
      </div>
      <div className="ml-8">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Height:</label>
        <input type="text" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={height} onChange={handleHeightChange} />
      </div>

      </div> */}

      {/* code */}
      <div className="text-center py-4 title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">Here is the code</div>
      
      {/* <div class="mx-auto w-1/2 flex px-5 py-4 md:flex-row flex-col items-center"> */}

        
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 justify-items-center">

      <div className="w-96 border-2 border-black border-t-black-900 ml-8">
        <label class="mb-2 text-sm font-medium text-gray-900 dark:text-black">CSS Code:</label>
        <textarea class="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-96" value={css} readOnly />
      </div>
     


      <div className="w-96 border-2 border-black border-t-black-900 ml-8">
        <label class="mb-2 text-sm font-medium text-gray-900 dark:text-black">HTML Code:</label>
        <textarea class="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-96" value={code} readOnly />
      </div>
     
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default App;

  
